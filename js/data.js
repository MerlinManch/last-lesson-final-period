(function (root) {
  'use strict';
  const chapters = [
    { id:1, title:'Der schlimmste Schulweg', color:'#b64d5e', palette:['#87c7d7','#46657f','#d9b46d','#7cab55'], levels:[
      ['Zu spät!','tutorial','Sprint'],['Der Bus des Grauens','bus','Gezielter Papierwurf'],['Unterricht auf dem Handy','phone','Papierflieger'],['Pausenhof-Panik','schoolyard','Doppelsprung'] ], boss:'Hausmeister' },
    { id:2, title:'Rennen verboten', color:'#4f6da7', palette:['#abc4dc','#53657e','#d4c5a7','#7e8e55'], levels:[
      ['Schuleingang','corridor',null],['Der Vertretungsplan','schedule','Radiergummi'],['Das endlose Treppenhaus','stairs',null],['Viel zu spät','classroom','Wandsprung'] ], boss:'Strenger Lehrer' },
    { id:3, title:'Der Unterricht schlägt zurück', color:'#7e5aa2', palette:['#ba9ed3','#645074','#d5d2c4','#527f78'], levels:[
      ['Bonjour la classe','french',null],['Zugriff verweigert','computer',null],['Unbekannte Variable','math','Kreide'],['Vom Thema abgeschweift','physics','Rutschen'] ], boss:'Physiklehrer' },
    { id:4, title:'Große Pause', color:'#ce7b43', palette:['#efc67e','#805c45','#cfd7d5','#6a8a4a'], levels:[
      ['Ihr dürft hier nicht hoch','upperfloor',null],['Toiletten-Notstand','toilet','Gummiband'],['Unbezahlbares Mittagessen','cafeteria',null],['Gib sofort das Handy her!','chase',null] ], boss:'Handy-Lehrerin' },
    { id:5, title:'Sport ist kein Mord', color:'#3b8c67', palette:['#89c5ae','#376652','#d5c7a1','#6f8bb5'], levels:[
      ['Deo-Apokalypse','changing', 'Wasserflasche'],['Hundert Kilometer pro Stunde','gym',null],['Der Geräteraum','equipment',null],['Der Speerwerfer','sports', 'Seilbeherrschung'] ], boss:'Sportlehrer' },
    { id:6, title:'Verbotene Räume', color:'#98723d', palette:['#bba271','#635445','#d7d0bb','#737f9a'], levels:[
      ['Ruhe in der Bibliothek','library','Klebestift'],['Das Sekretariat','secretary','Tintenkiller'],['Der Kopierraum','copy',null],['Koffein-Katastrophe','staff', 'Luft-Dash'] ], boss:'Lehrerzimmer-Duo' },
    { id:7, title:'Unter der Schule', color:'#48616f', palette:['#75929e','#33434a','#9b927e','#53636f'], levels:[
      ['Technik-Team','tech',null],['Der Schulkeller','basement',null],['Der Vortrag ohne Ende','presentation',null],['Das Herz der Regeln','reactor','Abpraller'] ], boss:'Regelreaktor-Kern' },
    { id:8, title:'Final Period', color:'#9b3f55', palette:['#9eafc9','#3d4255','#d7c0b1','#7f4656'], levels:[
      ['Der letzte Schultag','finalhall',null],['Die perfekte Schulversammlung','auditorium',null],['Das Direktorat','principal',null],['Final Period','roof','Bodenstampfer'] ], boss:'Direktor & Regelreaktor' }
  ];

  const abilities = [
    {id:'jump',name:'Springen',icon:'↑',category:'Bewegung',unlock:0,max:3,cost:[1,2,3],desc:'Variabler Sprung mit Coyote Time und Jump Buffer.'},
    {id:'sprint',name:'Sprint',icon:'»',category:'Bewegung',unlock:1,max:3,cost:[1,2,3],desc:'Schneller laufen, weiter springen und Energie verwalten.'},
    {id:'aim',name:'Gezielter Papierwurf',icon:'⌁',category:'Kampf',unlock:2,max:3,cost:[1,2,3],desc:'Papiergeschosse mit Zielhilfe und gezieltem Wurf.'},
    {id:'doubleJump',name:'Doppelsprung',icon:'⇈',category:'Bewegung',unlock:4,max:3,cost:[1,2,3],desc:'Ein zweiter Sprung in der Luft.'},
    {id:'wallJump',name:'Wandsprung',icon:'↗',category:'Bewegung',unlock:8,max:3,cost:[1,2,3],desc:'An Wänden rutschen und abspringen.'},
    {id:'slide',name:'Rutschen',icon:'↘',category:'Bewegung',unlock:12,max:3,cost:[1,2,3],desc:'Unter Hindernissen durchrutschen und Tempo behalten.'},
    {id:'rope',name:'Seilbeherrschung',icon:'⌇',category:'Bewegung',unlock:20,max:3,cost:[1,2,3],desc:'Klettern, schwingen und mit Schwung abspringen.'},
    {id:'dash',name:'Luft-Dash',icon:'➜',category:'Bewegung',unlock:24,max:3,cost:[1,2,3],desc:'Ein schneller horizontaler Impuls in der Luft.'},
    {id:'bounce',name:'Papierkugel-Abpraller',icon:'⤴',category:'Kampf',unlock:28,max:3,cost:[1,2,3],desc:'Geschosse prallen an markierten Flächen ab.'},
    {id:'groundPound',name:'Bodenstampfer',icon:'⇊',category:'Kampf',unlock:32,max:3,cost:[1,2,3],desc:'Aus der Luft auf den Boden stampfen.'},
    {id:'hearts',name:'Zusätzliche Herzen',icon:'♥',category:'Überleben',unlock:0,max:3,cost:[2,3,5],desc:'Erhöht die maximale Gesundheit.'},
    {id:'invuln',name:'Treffer-Unverwundbarkeit',icon:'◇',category:'Überleben',unlock:0,max:3,cost:[1,2,3],desc:'Verlängert die Schutzzeit nach einem Treffer.'},
    {id:'bookBonus',name:'Bücherbonus',icon:'📚',category:'Sammeln',unlock:4,max:3,cost:[1,2,3],desc:'Mehr Bücher von Gegnern; im Standard-Endlosmodus deaktiviert.'},
    {id:'hospitalShield',name:'Krankenzimmer-Erinnerung',icon:'✚',category:'Überleben',unlock:8,max:1,cost:[3],desc:'Der erste Treffer nach dem Krankenzimmer wird blockiert.'},
    {id:'doodleSense',name:'Kritzeleien-Spürsinn',icon:'✎',category:'Sammeln',unlock:4,max:3,cost:[1,2,3],desc:'Gibt Richtungs- und Audiosignale für Kritzeleien.'}
  ];

  const weapons = [
    {id:'paperBall',name:'Papierkugel',icon:'●',unlock:2,range:380,speed:560,damage:1,cooldown:.27,behavior:'normal',desc:'Schnell, zuverlässig und unbegrenzt.'},
    {id:'paperPlane',name:'Papierflieger',icon:'➤',unlock:3,range:620,speed:460,damage:1,cooldown:.65,behavior:'pierce',desc:'Große Reichweite und durchdringt schwache Gegner.'},
    {id:'eraser',name:'Radiergummi',icon:'▰',unlock:6,range:250,speed:480,damage:2,cooldown:.55,behavior:'knockback',desc:'Kurze Reichweite, hoher Rückstoß, bricht Schilde.'},
    {id:'chalk',name:'Kreide',icon:'╱',unlock:11,range:330,speed:680,damage:.55,cooldown:.12,behavior:'burst',desc:'Schneller Mehrfachschuss mit Kreidestaub.'},
    {id:'rubberBand',name:'Gummiband',icon:'⌒',unlock:14,range:540,speed:760,damage:3,cooldown:.9,behavior:'charged',desc:'Präziser, aufladbarer Hochleistungsschuss.'},
    {id:'waterBottle',name:'Wasserflasche',icon:'◒',unlock:17,range:300,speed:440,damage:.75,cooldown:.5,behavior:'splash',desc:'Erzeugt Wasserflächen und deaktiviert Maschinen kurz.'},
    {id:'glueStick',name:'Klebestift',icon:'▮',unlock:21,range:320,speed:420,damage:.6,cooldown:.6,behavior:'slow',desc:'Verlangsamt Gegner und fixiert Mechaniken.'},
    {id:'inkEraser',name:'Tintenkiller',icon:'✧',unlock:22,range:500,speed:620,damage:1.2,cooldown:.42,behavior:'pierce',desc:'Durchdringt Tinten- und Kopiergegner.'}
  ];

  const cosmetics = [
    ['shirt_red','Rotes Pausenhof-Shirt','shirt','#c1475b',2000],['shirt_blue','Blaues Heft-Shirt','shirt','#3d74a8',2000],['shirt_green','Sport-Shirt','shirt','#4f8d63',5000],['shirt_gold','Goldenes Abschluss-Shirt','shirt','#c89a35',12000],
    ['pants_navy','Dunkle Jeans','pants','#263a60',1500],['pants_black','Schwarze Hose','pants','#22242b',2000],['pants_green','Turnhallen-Hose','pants','#486a55',5000],
    ['hair_brown','Braune Haare','hair','#49352d',0],['hair_black','Schwarze Haare','hair','#191919',0],['hair_blond','Blonde Haare','hair','#caa75d',1500],['hair_pink','Pinke Haare','hair','#b94f78',5000],
    ['trail_notes','Notenspur','effect','#fbbf24',3000],['trail_chalk','Kreidestaub','effect','#e5e7eb',5000],['frame_rebel','Rahmen Regelbrecher','frame','#c1475b',8000],['skin_schoolout','Skin Schulschluss','skin','#f3b43f',25000]
  ].map(([id,name,type,color,price])=>({id,name,type,color,price,currency:'books'}));

  const lootRarities = [
    {id:'old',name:'Alter Turnbeutel',chance:55,color:'#9299a8',duplicate:300},
    {id:'normal',name:'Normaler Schulranzen',chance:30,color:'#5ca5d9',duplicate:500},
    {id:'rare',name:'Seltener Eastpackerl-Rucksack',chance:11,color:'#7d60c5',duplicate:1000},
    {id:'epic',name:'Epische Handtasche',chance:3.5,color:'#cf4fab',duplicate:3500},
    {id:'legendary',name:'Legendärer Lehrerlederkoffer',chance:.5,color:'#e8aa32',duplicate:10000}
  ];

  const dailyWeeks = Array.from({length:8},(_,w)=>Array.from({length:7},(_,d)=>{
    const cycle=(w+d)%4;
    if(d===6) return {type:'bag',value:w%3===0?'rare':'normal',label:w%3===0?'Seltener Eastpackerl':'Normaler Schulranzen'};
    if(cycle===0) return {type:'books',value:500+w*100+d*80,label:`${500+w*100+d*80} Bücher`};
    if(cycle===1) return {type:'gum',value:5+(w%3)*5,label:`${5+(w%3)*5} Kaugummis`};
    if(cycle===2) return {type:'bag',value:'old',label:'Alter Turnbeutel'};
    return {type:'cosmetic',value:cosmetics[(w+d)%cosmetics.length].id,label:'Kosmetik'};
  }));

  const achievements = Array.from({length:50},(_,i)=>({
    id:`achievement_${String(i+1).padStart(2,'0')}`,
    name:[
      'Pünktlich genug','Papier gewinnt','Pausenhof-Profi','Regelbrecher','Treppenläufer','Vokabelsturm','Firewall-Freund','Mathe überlebt','Handy gerettet','Sportbefreit',
      'Leise Seiten','Formularfrei','Kopierfehler','Koffeinlos','Kellerlicht','Vortragsende','Kernschaden','Versammlung beendet','Direktoratsbesuch','Schulschluss',
      'Drei Kritzeleien','Sammlerherz','Bücherwurm','Kaugummi-Kenner','Waffenfach','Reichweitenrekord','Sprintprüfung','Sprungprüfung','Dashprüfung','Seilprüfung',
      'Ohne Umweg','Ohne Krankenzimmer','Perfekte Prüfung','Nachsitzen-Neuling','Nachsitzen-Profi','Nachsitzen-Legende','Null Wiederbelebungen','Bossjäger','Katzenfreund','Maschinenstopp',
      'Geheimfach','Volle Hosentasche','Modenschau','Täglicher Gast','Sieben Tage','Pechsträhne beendet','Legendärer Fund','Freundecode','Offline-Held','Final Period'
    ][i],
    desc:`Fortschrittsziel ${i+1} im Zeugnis abschließen.`, target: i<20?i+1:Math.max(1,(i-19)*3), category:i<20?'Story':i<30?'Fähigkeiten':i<40?'Dauernachsitzen':'Sammlung'
  }));

  const enemyTypes = ['ScreamerStudent','BookThrowerStudent','BookShieldStudent','RunnerStudent','TeacherPatrol','LivingRuleSign','RollingBookStack','FrenchCatGround','FrenchCatJump','FrenchCatSleep','ToiletPaperThrower','VaperStudent','DeoStudent','BallThrowerStudent','LibraryStudent','LivingSilenceSign','PaperJamMonster','PlayerCopyEnemy','TechTeamCableStudent','TechTeamMicrophoneStudent','Rat','ShadowEnemy','PresentationSpeaker','LivingPriceTag','LivingReceipt','TrayEnemy'];

  const bossNames = ['Hausmeister','Strenger Lehrer','Französischlehrerin','Informatiklehrer','Mathematiklehrer','Physiklehrer','Handy-Lehrerin','Sportlehrer','Sekretärinnen','Lehrerzimmer-Duo','Kellerangst','Regelreaktor-Kern','Aula-System','Direktor','Musterschüler 1.0','Regelreaktor Maximum'];

  root.LastLessonData = {chapters,abilities,weapons,cosmetics,lootRarities,dailyWeeks,achievements,enemyTypes,bossNames,rangeCosts:[0,8000,18000,35000,60000]};
})(typeof window!=='undefined'?window:globalThis);
