(function(root){
  'use strict';
  function clamp(v,min,max){return Math.max(min,Math.min(max,v));}
  function lerp(a,b,t){return a+(b-a)*t;}
  function hashString(str){let h=2166136261>>>0;for(let i=0;i<str.length;i++){h^=str.charCodeAt(i);h=Math.imul(h,16777619);}return (h>>>0).toString(16).padStart(8,'0');}
  function mulberry32(seed){return function(){let t=seed+=0x6D2B79F5;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296;};}
  function gradeLevel(stats){
    const target=stats.targetTime||180; let score=100;
    score-=Math.max(0,(stats.time-target)/target*28);
    score-=stats.deaths*8; score-=stats.heartsLost*2.5; score-=stats.hospitalUses*7; score-=stats.pickupUses*12;
    score+=Math.min(12,(stats.doodles||0)*4); score+=Math.min(7,((stats.gum||0)/(stats.maxGum||5))*7);
    score+=Math.min(7,((stats.books||0)/(stats.targetBooks||500))*7); score+=stats.optional?5:0;
    const grades=[[97,'1+'],[92,'1'],[87,'1-'],[82,'2+'],[77,'2'],[72,'2-'],[67,'3+'],[62,'3'],[57,'3-'],[52,'4+'],[47,'4'],[42,'4-'],[26,'5'],[-Infinity,'6']];
    return grades.find(([limit])=>score>=limit)[1];
  }
  function gradeRank(g){return ['1+','1','1-','2+','2','2-','3+','3','3-','4+','4','4-','5','6'].indexOf(g);}
  function betterGrade(a,b){if(!a)return b;if(!b)return a;return gradeRank(a)<=gradeRank(b)?a:b;}
  function weightedRoll(entries,rng=Math.random){const total=entries.reduce((s,e)=>s+e.chance,0);let r=rng()*total;for(const e of entries){r-=e.chance;if(r<=0)return e;}return entries[entries.length-1];}
  function rollLoot(rarities,pity,rng=Math.random){
    if((pity.legendary||0)>=99)return rarities.find(r=>r.id==='legendary');
    if((pity.epic||0)>=29){const pool=rarities.filter(r=>r.id==='epic'||r.id==='legendary');return weightedRoll(pool.map(r=>({...r,chance:r.id==='legendary'?12:88})),rng);}
    return weightedRoll(rarities,rng);
  }
  function updatePity(pity,rarity){const next={epic:(pity.epic||0)+1,legendary:(pity.legendary||0)+1};if(rarity.id==='epic'||rarity.id==='legendary')next.epic=0;if(rarity.id==='legendary')next.legendary=0;return next;}
  function scoreEndless(s){return Math.floor((s.distance||0)*2+(s.time||0)*8+(s.kills||0)*120+(s.bosses||0)*1600+(s.books||0)*3+(s.maxCombo||0)*90+(s.noHit?2500:0));}
  function canPurchase(wallet,currency,cost){return Number.isFinite(cost)&&cost>=0&&Number.isFinite(wallet[currency])&&wallet[currency]>=cost;}
  function createLevel(chapterIndex,levelIndex,seedOverride){
    const global=chapterIndex*4+levelIndex+1, seed=seedOverride||global*9973, rng=mulberry32(seed);
    const width=levelIndex===3?6200:5000+chapterIndex*360; const floorY=465;
    const platforms=[{x:0,y:floorY,w:width,h:90,type:'ground'}];
    let cursor=420;
    while(cursor<width-700){
      const gap=55+rng()*75+chapterIndex*5; cursor+=gap;
      const w=150+rng()*260; const y=floorY-(rng()<.45?0:70+rng()*115);
      platforms.push({x:cursor,y,w,h:24,type:rng()<.08?'breakable':'platform'}); cursor+=w;
      if(rng()<.25)platforms.push({x:cursor-80,y:y-90-rng()*45,w:100+rng()*90,h:20,type:'platform'});
    }
    const enemies=[]; for(let i=0;i<8+chapterIndex*2+levelIndex*2;i++){const x=650+i*((width-1300)/(7+chapterIndex*2+levelIndex*2))+rng()*120;enemies.push({x,y:floorY-48,type:(global+i)%26,hp:1+Math.floor(chapterIndex/3),elite:rng()<.08+chapterIndex*.01});}
    const collectibles=[];
    for(let i=0;i<12+chapterIndex*2;i++)collectibles.push({kind:'book',x:320+i*((width-700)/(11+chapterIndex*2))+rng()*80,y:330-rng()*120,value:15+Math.floor(rng()*30)});
    for(let i=0;i<3;i++)collectibles.push({kind:'doodle',x:800+i*((width-1500)/2)+rng()*180,y:280-rng()*100,value:1});
    for(let i=0;i<Math.min(5,1+Math.floor(global/5));i++)collectibles.push({kind:'gum',x:1200+i*((width-2200)/Math.max(1,Math.min(4,global/5)))+rng()*170,y:230-rng()*90,value:1});
    return {id:`${chapterIndex+1}-${levelIndex+1}`,global,chapterIndex,levelIndex,width,floorY,platforms,enemies,collectibles,checkpointX:Math.floor(width*.5),goalX:width-250,isBoss:levelIndex===3,targetTime:180+chapterIndex*35+levelIndex*25,targetBooks:350+chapterIndex*100};
  }
  const api={clamp,lerp,hashString,mulberry32,gradeLevel,gradeRank,betterGrade,weightedRoll,rollLoot,updatePity,scoreEndless,canPurchase,createLevel};
  root.LLLogic=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
