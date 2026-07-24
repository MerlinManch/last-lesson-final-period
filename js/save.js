(function(root){
  'use strict';
  const KEY='lastLessonFinalPeriod.save.v1';
  const VERSION=1;
  function defaultSave(){
    return {
      version:VERSION,createdAt:Date.now(),updatedAt:Date.now(),profileCreated:false,
      profile:{name:'Alex',presentation:'neutral',skin:'#b97a56',hair:'#3e2c24',shirt:'#c1475b',pants:'#263a60',friendCode:makeCode()},
      wallet:{books:0,gum:30,abilityPoints:0},story:{unlocked:1,completed:{},levelStats:{},checkpointResume:{}},
      abilities:{jump:0},weapons:{unlocked:['paperBall'],range:{paperBall:1},main:'paperBall',special:null},
      inventory:{cosmetics:['shirt_red','pants_navy','hair_brown'],selected:{shirt:'shirt_red',pants:'pants_navy',hair:'hair_brown'},storyItems:[],pickupCalls:1,bags:{old:1}},
      loot:{pity:{epic:0,legendary:0},adBagsToday:0,adBagDate:''},daily:{lastClaim:'',streak:0,total:0,weekIndex:0},
      achievements:{unlocked:[],progress:{}},endless:{bestScore:0,bestDistance:0,runs:[]},
      settings:{music:.55,sfx:.7,ui:.7,ambience:.45,screenShake:true,reducedMotion:false,reducedFlashes:false,textScale:1,aimAssist:1,touchScale:1,touchOpacity:.78,batterySaver:false,consentAds:false,consentAnalytics:false},
      stats:{deaths:0,enemiesDefeated:0,hospitalUses:0,pickupUses:0,bagsOpened:0,playSeconds:0},transactions:[]
    };
  }
  function makeCode(){const chars='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';let out='';for(let i=0;i<8;i++)out+=chars[Math.floor(Math.random()*chars.length)];return out.slice(0,4)+'-'+out.slice(4);}
  function checksum(data){const clone=JSON.parse(JSON.stringify(data));delete clone.integrity;return LLLogic.hashString(JSON.stringify(clone)+'::last-lesson-local-signature');}
  function migrate(data){if(!data||typeof data!=='object')return defaultSave();if(!data.version)data.version=1;const base=defaultSave();return deepMerge(base,data);}
  function deepMerge(target,source){for(const key of Object.keys(source||{})){if(source[key]&&typeof source[key]==='object'&&!Array.isArray(source[key])&&target[key]&&typeof target[key]==='object'&&!Array.isArray(target[key]))target[key]=deepMerge(target[key],source[key]);else target[key]=source[key];}return target;}
  function load(){
    try{const raw=localStorage.getItem(KEY);if(!raw)return defaultSave();const parsed=JSON.parse(raw);const expected=parsed.integrity;const migrated=migrate(parsed);if(expected&&expected!==checksum(parsed)){console.warn('Save integrity check failed; loading backup/default.');const backup=localStorage.getItem(KEY+'.backup');if(backup)return migrate(JSON.parse(backup));return defaultSave();}return migrated;}catch(e){console.error(e);return defaultSave();}
  }
  function save(data){
    try{const previous=localStorage.getItem(KEY);if(previous)localStorage.setItem(KEY+'.backup',previous);data.updatedAt=Date.now();data.integrity=checksum(data);localStorage.setItem(KEY,JSON.stringify(data));return true;}catch(e){console.error(e);return false;}
  }
  function reset(){localStorage.removeItem(KEY);localStorage.removeItem(KEY+'.backup');return defaultSave();}
  function transaction(data,id,type,currency,amount,meta={}){if(data.transactions.some(t=>t.id===id))return false;const current=Number(data.wallet[currency]||0),next=current+amount;if(next<0||!Number.isFinite(next))return false;data.wallet[currency]=next;data.transactions.push({id,type,currency,amount,meta,at:Date.now()});if(data.transactions.length>250)data.transactions.splice(0,data.transactions.length-250);save(data);return true;}
  root.LLSave={load,save,reset,transaction,defaultSave,checksum,migrate,KEY};
})(window);
