'use strict';

/* 1. ICONS */
const ICONS = {
  back:'<path d="M15 18l-6-6 6-6"/>',
  pin:'<path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  trophy:'<path d="M8 4h8v5a4 4 0 01-8 0V4z"/><path d="M8 5H5a3 3 0 003 3M16 5h3a3 3 0 01-3 3M12 13v4M9 21h6M10 17h4"/>',
  chart:'<path d="M5 20v-6M11 20V5M17 20v-9"/><path d="M3 20h18"/>',
  ball:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3v18M5.6 5.6c3.6 3.6 3.6 9.2 0 12.8M18.4 5.6c-3.6 3.6-3.6 9.2 0 12.8"/>',
  grid:'<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  lock:'<rect x="4" y="10" width="16" height="10" rx="3"/><path d="M8 10V7a4 4 0 018 0v3"/>',
  check:'<path d="M5 13l4 4L19 7"/>',
  x:'<path d="M6 6l12 12M18 6L6 18"/>',
  chat:'<path d="M21 12a8 8 0 01-11.6 7.1L4 21l1.9-5.4A8 8 0 1121 12z"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/>',
  wallet:'<rect x="3" y="6" width="18" height="13" rx="3"/><path d="M3 10h18M16 14h2"/>',
  shield:'<path d="M12 3l8 3v6c0 5-3.5 8.3-8 9.5C7.5 20.3 4 17 4 12V6l8-3z"/>',
  bell:'<path d="M6 9a6 6 0 1112 0c0 5 2 6 2 6H4s2-1 2-6z"/><path d="M10 20a2 2 0 004 0"/>',
  camera:'<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
  fire:'<path d="M12 3s5 4.5 5 9a5 5 0 01-10 0c0-1.7.8-3.1 1.7-4.1.2 1.3 1.1 2.1 2.3 2.1 0-2.6 1-6.2 1-7z"/>',
  send:'<path d="M4 12l16-8-6 16-2.5-6.5L4 12z"/>',
  edit:'<path d="M4 20h4l10-10-4-4L4 16v4z"/><path d="M14 6l4 4"/>',
  calendar:'<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  clock:'<circle cx="12" cy="12" r="8"/><path d="M12 8v4.5l3 1.5"/>',
  arrow:'<path d="M9 6l6 6-6 6"/>',
  sparkle:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"/>',
  users:'<circle cx="9" cy="9" r="3.2"/><path d="M3 19a6 6 0 0112 0"/><path d="M16 6.5a3 3 0 010 5.6M17 19a6 6 0 00-1.6-4.1"/>',
  shop:'<path d="M5 8h14l-1 12H6L5 8z"/><path d="M9 8V6a3 3 0 016 0v2"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 8h.01"/>',
  alert:'<path d="M12 4l9 16H3l9-16z"/><path d="M12 10v4M12 17h.01"/>',
  trash:'<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
  refresh:'<path d="M20 12a8 8 0 11-2.3-5.6M20 4v5h-5"/>',
  eye:'<path d="M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6-10-6-10-6z"/><circle cx="12" cy="12" r="3"/>',
  gear:'<circle cx="12" cy="12" r="3.2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1"/>',
  star:'<path d="M12 3l2.7 5.7 6.3.9-4.5 4.4 1 6.2-5.5-3-5.5 3 1-6.2L3 9.6l6.3-.9L12 3z"/>',
  filter:'<path d="M3 5h18M6 12h12M10 19h4"/>',
  logout:'<path d="M15 12H4M8 8l-4 4 4 4"/><path d="M12 4h6a2 2 0 012 2v12a2 2 0 01-2 2h-6"/>',
  undo:'<path d="M4 10h9a5 5 0 010 10H8"/><path d="M8 6l-4 4 4 4"/>',
  pin2:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>'
};
function ico(n, cls){
  return '<svg class="ic ' + (cls||'') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
    'stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    (ICONS[n]||'') + '</svg>';
}

/* 2. UTILITIES */
const $  = (s,r)=>(r||document).querySelector(s);
const $$ = (s,r)=>Array.from((r||document).querySelectorAll(s));
const fmt = n => Number(n).toLocaleString('en-US');
const money = n => '$' + (Math.round(Number(n)*100)/100).toFixed(2);
const round2 = n => Math.round(Number(n)*100)/100;
const now = () => Date.now();
let _uidc = 0;
const uid = p => (p||'x') + '_' + (++_uidc).toString(36) + Math.random().toString(36).slice(2,6);
function timeAgo(ts){
  const s = Math.floor((Date.now()-ts)/1000);
  if (s<60) return 'now';
  const m=Math.floor(s/60); if (m<60) return m+'m';
  const h=Math.floor(m/60); if (h<24) return h+'h';
  const d=Math.floor(h/24); if (d<7) return d+'d';
  const w=Math.floor(d/7); if (w<5) return w+'w';
  return Math.floor(d/30)+'mo';
}
const escapeHTML = s => String(s==null?'':s)
  .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
  .replace(/"/g,'&quot;').replace(/'/g,'&#39;');
const img = (seed,w,h) => 'https://picsum.photos/seed/' + encodeURIComponent(seed) + '/' + w + '/' + h;
const initials = name => { const p=String(name).trim().split(/\s+/); return ((p[0]||'')[0]||'')+((p[1]||'')[0]||''); };
function hash(str){ let h=2166136261; for(let i=0;i<str.length;i++){ h^=str.charCodeAt(i); h=Math.imul(h,16777619); } return h>>>0; }
function rngFrom(seed){ let h=hash(String(seed)); return function(){ h^=h<<13; h>>>=0; h^=h>>17; h^=h<<5; h>>>=0; return h/4294967296; }; }
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));

/* 3. DATA MODELS + SEED */
const DB = { me:null, users:[], courts:[], crews:[], shop:[], lost:[], tourneys:[], chats:[], feed:[], reports:[], pending:{vendors:[],crews:[],trainers:[],courts:[]} };
const ADMINS = [{ id:'admin', name:'Rubix Operations', initials:'RO', hue:22, email:'admin@rubix.app', pin:'1234', isDefault:true }];

function mkUser(o){
  const u = Object.assign({
    id:'', name:'', initials:'', hue:200, skill:3.0, position:'SG', dominant:'Right',
    preferredCourt:'Outdoor', region:'Greater Accra', city:'Accra', points:800, dist:2.0,
    status:'available', avail:'Evenings', stats:{games:0,wins:0,losses:0,ppg:0,apg:0,rpg:0},
    matches:[], rankN:null, rankG:null, roles:[], wallet:0, tx:[], verified:false,
    badges:[], streaks:{current:0,longest:0}, bio:'', playstyle:[],
    seed:'', trainerRate:0, specialty:'', crews:[]
  }, o);
  u.initials = u.initials || initials(u.name);
  u.seed = u.seed || u.id;
  return u;
}

const OPPONENTS = ['Riverside Runners','Osu Kings','East Legon Elite','Labone Ballers','Airport Hawks','Teshie Titans','Madina Hoops','Kumasi Storm'];
const SCORES = ['78-72','65-70','88-81','59-63','91-84','74-77','82-69','69-71'];
function genMatches(seed){
  const r = rngFrom('m'+seed); const out=[];
  for (let i=0;i<5;i++){
    const sc = SCORES[Math.floor(r()*SCORES.length)];
    const parts = sc.split('-');
    const wl = Number(parts[0])>Number(parts[1]) ? 'W' : 'L';
    out.push({ opp:OPPONENTS[Math.floor(r()*OPPONENTS.length)], score:sc, result:wl,
      ts:Date.now()-(i*5+2)*86400000, court:['Indoor','Outdoor','Street'][Math.floor(r()*3)], verified:r()>0.35 });
  }
  return out;
}

function seed(){
  /* ME */
  DB.me = mkUser({
    id:'me', name:'Marcus Bell', initials:'MB', hue:22, skill:4.0, position:'SG', dominant:'Right',
    preferredCourt:'Indoor', city:'Accra', region:'Greater Accra', points:2140, dist:0,
    wallet:24.50, verified:true, rankG:3, roles:['player'],
    streaks:{current:3,longest:8}, badges:['first-game','10-games','sharp-shooter'],
    stats:{games:42,wins:27,losses:15,ppg:18.4,apg:5.2,rpg:6.1},
    bio:'Two-guard out of Accra. Catch me at Riverside most evenings. Pull-up is automatic.',
    playstyle:['Sharpshooter','Playmaker'], avail:'Weekday evenings',
    tx:[
      { ts:Date.now()-86400000*2, kind:'topup', amount:20.00, fee:0, note:'Wallet top-up' },
      { ts:Date.now()-86400000*3, kind:'requestPlayer', amount:-0.99, fee:0, note:'Run invite · Jaylen Carter' },
      { ts:Date.now()-86400000*5, kind:'court', amount:-19.80, fee:1.80, note:'Riverside Basketball Club' }
    ]
  });
  DB.me.matches = genMatches('me');

  const P = [
    {id:'b1',name:'Jaylen Carter',hue:205,skill:4.5,position:'PG',city:'East Legon',points:3210,dist:0.4,rankN:4,roles:['player']},
    {id:'b2',name:'Devin Osei',hue:12,skill:4.0,position:'SG',city:'Osu',points:2880,dist:1.1,rankN:6,roles:['player']},
    {id:'b3',name:'Tyler Nakamura',hue:268,skill:5.0,position:'SF',city:'Airport Hills',points:4020,dist:2.6,rankN:2,roles:['player']},
    {id:'b4',name:'Sam Okafor',hue:150,skill:3.5,position:'PF',city:'Cape Coast',region:'Central',points:1420,dist:4.2,rankG:8,roles:['trainer'],trainerRate:30,specialty:'Post moves · Rebounding',coachCourt:'h1'},
    {id:'b5',name:'Zion Mensah',hue:320,skill:4.5,position:'PG',city:'Labone',points:3120,dist:0.9,rankN:3,roles:['player']},
    {id:'b6',name:'Kwame Boateng',hue:40,skill:4.0,position:'C',city:'Kumasi',region:'Ashanti',points:2540,dist:6.4,rankN:7,roles:['player','crewleader'],crewId:'c1'},
    {id:'b7',name:'Priya Sharma',hue:340,skill:3.5,position:'SG',city:'Madina',points:1180,dist:3.1,rankG:11,roles:['player']},
    {id:'b8',name:'Andre Williams',hue:230,skill:5.5,position:'SF',city:'Cantonments',points:4480,dist:1.8,rankN:1,roles:['player']},
    {id:'b9',name:'Zara Diallo',hue:285,skill:4.0,position:'PG',city:'Tamale',region:'Northern',points:2260,dist:8.9,rankN:8,roles:['player']},
    {id:'b10',name:'Tomás Reyes',hue:100,skill:3.0,position:'PF',city:'Winneba',region:'Central',points:760,dist:5.5,rankG:16,roles:['player','vendor']},
    {id:'b11',name:'Ivy Chen',hue:180,skill:4.5,position:'SG',city:'Obuasi',region:'Ashanti',points:2980,dist:7.2,rankN:5,roles:['player']},
    {id:'b12',name:'Omar Bello',hue:55,skill:3.5,position:'C',city:'Teshie',points:1340,dist:2.2,rankG:9,roles:['player','trainer'],trainerRate:35,specialty:'Shot blocking · Footwork',coachCourt:'h4'}
  ];
  P.forEach(p => {
    const u = mkUser(p); u.matches = genMatches(u.id);
    const r = rngFrom(u.id);
    const games = 20 + Math.floor(r()*40);
    const wins = Math.floor(games * (0.35 + u.skill/12));
    u.stats = { games, wins, losses:games-wins,
      ppg: Math.round((8+u.skill*3+r()*4)*10)/10,
      apg: Math.round((1.5+u.skill*1.1+r()*2)*10)/10,
      rpg: Math.round((2+u.skill*1.4+r()*2)*10)/10 };
    u.avail = ['Weekday evenings','Weekends','Mornings','Nights'][Math.floor(r()*4)];
    u.status = r()>0.5 ? 'available' : 'busy';
    u.wallet = Math.round(r()*60*100)/100;
    u.badges = ['first-game','10-games'];
    if (u.skill>=4.5) u.badges.push('sharp-shooter');
    if (u.stats.wins>25) u.badges.push('50-games');
    u.bio = u.position+' · '+u.city+'. '+u.avail+' runs.';
    u.playstyle = [['Sharpshooter','Playmaker','Defender','Post'][Math.floor(r()*4)]];
    u.verified = r()>0.4;
    DB.users.push(u);
  });
  DB.users.push(DB.me);

  /* COURTS */
  DB.courts = [
    {id:'h1',name:'Riverside Basketball Club',rating:4.8,price:18,dist:0.6,surface:'Indoor',courtCount:6,hue:22,status:'approved',
      address:'14 Riverside Drive, East Legon, Accra',courtStatus:'open',
      amenities:['Indoor AC','Scoreboard','Bleachers','Showers','Locker rooms','Parking','Pro shop'],
      trainers:['b4'],playersHere:['b1','b5','b7'],bookings:[]},
    {id:'h2',name:'Northgate Outdoor Courts',rating:4.3,price:10,dist:1.9,surface:'Outdoor',courtCount:4,hue:200,status:'approved',
      address:'Northgate Ave, Madina, Accra',courtStatus:'open',
      amenities:['Lighting','Water fountain','Parking','Bleachers'],trainers:[],playersHere:['b2','b9'],bookings:[]},
    {id:'h3',name:'Prime Hardwood Academy',rating:4.9,price:26,dist:3.4,surface:'Indoor',courtCount:8,hue:268,status:'approved',
      address:'7 Aviation Rd, Airport Hills, Accra',courtStatus:'open',
      amenities:['Indoor AC','Scoreboard','Locker rooms','Showers','Sound system','Pro shop','Parking'],
      trainers:[],playersHere:['b3','b8'],bookings:[]},
    {id:'h4',name:'Sunset Hoops Center',rating:4.6,price:22,dist:2.7,surface:'Indoor',courtCount:5,hue:12,status:'approved',
      address:'22 Boundary Rd, Labone, Accra',courtStatus:'open',
      amenities:['Indoor AC','Scoreboard','Bleachers','Showers','Water fountain'],
      trainers:['b12'],playersHere:['b5','b6','b11'],bookings:[]},
    {id:'h5',name:'Harborview Street Courts',rating:4.1,price:14,dist:4.8,surface:'Street',courtCount:3,hue:150,status:'approved',
      address:'Harborview Ln, Teshie, Accra',courtStatus:'open',
      amenities:['Lighting','Water fountain','Sound system'],trainers:[],playersHere:['b12','b10'],bookings:[]}
  ];

  /* CREWS */
  DB.crews = [
    {id:'c1',name:'RUBIX Hoops Community',members:1240,fee:2.99,dist:0.8,leader:'b6',hue:22,status:'approved',verified:true,
      desc:'The flagship RUBIX run crew. Weekly 5v5 at Riverside, monthly ladder nights, and open runs every Saturday morning. All skill levels welcome — we ball, we build.'},
    {id:'c2',name:'Downtown 3v3 League',members:480,fee:0,dist:2.3,leader:'b3',hue:268,status:'approved',verified:true,
      desc:'Competitive 3v3 league running Tuesday and Thursday nights. Draft-based teams, live stat tracking, season standings.'},
    {id:'c3',name:'Weekend Run Crew',members:156,fee:0,dist:4.1,leader:'b7',hue:150,status:'approved',verified:false,
      desc:'Casual weekend pickup. Show up, get a game, no egos. We run at Northgate and Harborview depending on weather.'}
  ];

  /* SHOP */
  DB.shop = [
    {id:'s1',title:'Nike LeBron 21',price:95,condition:'Good',seller:'b10',category:'Sneakers',place:'Winneba',status:'approved',seed:'lebron21'},
    {id:'s2',title:'Adidas Harden Vol. 8',price:75,condition:'Like new',seller:'b7',category:'Sneakers',place:'Madina',status:'approved',seed:'harden8'},
    {id:'s3',title:'Spalding NBA Official',price:45,condition:'Good',seller:'b12',category:'Balls',place:'Teshie',status:'approved',seed:'spalding'},
    {id:'s4',title:'Wilson Evolution',price:60,condition:'New',seller:'b4',category:'Balls',place:'Cape Coast',status:'approved',seed:'wilsonEvo'},
    {id:'s5',title:'Mitchell & Ness Kobe Rookie',price:120,condition:'New',seller:'b1',category:'Jerseys',place:'East Legon',status:'approved',seed:'kobeJersey'},
    {id:'s6',title:'Shooting Sleeve (L)',price:15,condition:'Good',seller:'b9',category:'Gear',place:'Tamale',status:'approved',seed:'sleeve'},
    {id:'s7',title:'Ankle Braces (Pair)',price:20,condition:'New',seller:'b11',category:'Gear',place:'Obuasi',status:'approved',seed:'ankleBrace'},
    {id:'s8',title:'Compression Tights',price:30,condition:'Like new',seller:'b2',category:'Gear',place:'Osu',status:'approved',seed:'tights'}
  ];

  /* LOST & FOUND */
  DB.lost = [
    {id:'lf1',type:'lost',title:'Spalding NBA ball',emoji:'🏀',place:'Riverside Basketball Club',ts:Date.now()-3600e3*5,seed:'lostball',note:'Left it on court 3 after the 8pm run. Has my initials MB in marker.'},
    {id:'lf2',type:'lost',title:'Black Kyrie 7 sneakers',emoji:'👟',place:'Northgate Outdoor Courts',ts:Date.now()-86400e3*2,seed:'lostsneaker',note:'Size 10.5, black and orange. Bench side near the water fountain.'},
    {id:'lf3',type:'found',title:'Blue Lakers jersey #23',emoji:'👕',place:'Sunset Hoops Center',ts:Date.now()-86400e3*1,seed:'foundjersey',note:'Found in the locker room after league night. Hanging at the front desk.'},
    {id:'lf4',type:'found',title:'Stainless water bottle',emoji:'🍶',place:'Prime Hardwood Academy',ts:Date.now()-3600e3*20,seed:'foundbottle',note:'Grey bottle with a RUBIX sticker on it. Front desk has it.'}
  ];

  /* TOURNAMENTS */
  DB.tourneys = [
    {id:'t1',name:'Riverside 3v3 Open',format:'3v3',entry:5,prize:60,court:'h1',
      teams:['East Legon Elite','Osu Kings','Labone Ballers'],maxTeams:8,
      agreeBy:Date.now()+86400e3*7,status:'open',host:'b1',seed:'t1'},
    {id:'t2',name:'Weekend 5v5 League',format:'5v5',entry:3,prize:25,court:'h4',
      teams:['Riverside Runners'],maxTeams:6,
      agreeBy:Date.now()+86400e3*11,status:'open',host:'b5',seed:'t2'},
    {id:'t3',name:'Sunset 1v1 Ladder',format:'1v1',entry:4,prize:40,court:'h4',
      teams:[],maxTeams:8,
      agreeBy:Date.now()+86400e3*4,status:'draft',host:'b8',seed:'t3'}
  ];
  DB.tourneys.forEach(t => { t.bracket = Tournaments.buildBracket(t.teams); });

  /* CHATS */
  DB.chats = [
    {id:'ch1',with:'b1',unlocked:true,msgs:[
      {from:'b1',text:'Yo Marcus — you running at Riverside tonight?',ts:Date.now()-3600e3*6},
      {from:'me',text:'Yeah, 7pm court 2. Bring the squad.',ts:Date.now()-3600e3*5},
      {from:'b1',text:'Bet. I got two more coming.',ts:Date.now()-3600e3*4}
    ]},
    {id:'ch2',with:'b3',unlocked:false,msgs:[
      {from:'b3',text:'Saw your name on the 1v1 ladder. Let’s set it up.',ts:Date.now()-3600e3*30}
    ]},
    {id:'ch3',with:'b5',unlocked:true,msgs:[
      {from:'b5',text:'Court 4 is free at 9. You in?',ts:Date.now()-3600e3*20}
    ]}
  ];

  /* FEED */
  DB.feed = [
    {id:'f1',user:'b1',type:'Win',text:'Buzzer beater from the wing to close out Riverside 5v5. 78-76. Squad showed up tonight. 🔥',ts:Date.now()-3600e3*2,seed:'feed1',likes:24,comments:6},
    {id:'f2',user:'b7',type:'Crew',text:'Weekend Run Crew just hit 156 members. Saturday morning runs at Northgate, 7am. Free, no egos, all levels.',ts:Date.now()-3600e3*9,seed:'feed2',likes:41,comments:12},
    {id:'f3',user:'b8',type:'Achievement',text:'Fifth straight win. The jumper is finally falling at a rate I can live with.',ts:Date.now()-3600e3*26,seed:'feed3',likes:63,comments:9},
    {id:'f4',user:'b4',type:'Post',text:'Open training session at Riverside this Sunday, 9am. Working on pick-and-roll reads and closeouts. Two spots left.',ts:Date.now()-3600e3*40,seed:'feed4',likes:18,comments:4}
  ];

  /* REPORTS */
  DB.reports = [
    {id:'r1',type:'No-show',reporter:'b2',target:'b12',status:'open',ts:Date.now()-3600e3*8,
      text:'Booked a court share, confirmed twice, never showed. Left us short a player for the whole run.'},
    {id:'r2',type:'Fake profile',reporter:'b5',target:'b10',status:'open',ts:Date.now()-86400e3*1,
      text:'Stats and skill rating look inflated. Photos appear to be of a different player entirely.'}
  ];

  /* PENDING */
  DB.pending.vendors = [
    {id:'pv1',name:'Yonex Ezone Court Sneakers',category:'Sneakers',price:88,condition:'New',
      seller:'b7',notes:'Size 10.5, worn twice indoors only. Original box and receipt included.',t:Date.now()-86400e3*2},
    {id:'pv2',name:'Wilson Evolution Official',category:'Balls',price:55,condition:'Like new',
      seller:'b10',notes:'Official size 7, indoor only. Holds air perfectly, no scuffs.',t:Date.now()-86400e3*1}
  ];
  DB.pending.crews = [
    {id:'pc1',name:'Sunrise Run Club',leader:'b6',members:38,region:'Greater Accra',fee:'Free',
      notes:'Early morning runs, Monday/Wednesday/Friday at 6am. Aimed at working players.',contact:'sunrise@rubix.app',t:Date.now()-86400e3*3},
    {id:'pc2',name:'Ladies Hoops Ghana',leader:'b11',members:62,region:'Ashanti',fee:'$1.99/mo',
      notes:'Women-first crew with weekly skills clinics and a monthly 3v3 ladder.',contact:'ladieshoops@rubix.app',t:Date.now()-86400e3*4}
  ];
  DB.pending.trainers = [
    {id:'pt1',name:'Coach Jaylen',user:'b1',court:'h2',specialty:'Shooting mechanics · Ball handling',
      rate:35,exp:'6 years coaching. Former university guard. 40+ players trained.',certs:'FIBA Level 1, CPR certified',
      contact:'jaylen@rubix.app',t:Date.now()-86400e3*2},
    {id:'pt2',name:'Coach Omar',user:'b12',court:'h4',specialty:'Shot blocking · Footwork',
      rate:32,exp:'4 years coaching bigs. Specialises in defensive positioning.',certs:'CPR certified',
      contact:'omar@rubix.app',t:Date.now()-86400e3*5}
  ];
  DB.pending.courts = [
    {id:'ph1',name:'Eastside Hoops Hub',address:'31 Spintex Rd, Accra',surface:'Indoor',price:20,
      courtCount:4,amenities:['Indoor AC','Scoreboard','Showers','Parking'],contact:'eastside@rubix.app',t:Date.now()-86400e3*3},
    {id:'ph2',name:'Achimota Street Courts',address:'Achimota Mile 7, Accra',surface:'Street',price:8,
      courtCount:2,amenities:['Lighting','Water fountain'],contact:'achimota@rubix.app',t:Date.now()-86400e3*6}
  ];
}

/* 4. SESSION · WALLET · MONETIZATION */
const SESSION = { mode:null, adminId:null };
const PLATFORM = { revenue:1842.60, history:[] };
const PRICES = {
  requestPlayer:{flat:0.99,label:'Run invite',body:'Send a direct run invite to a nearby baller.'},
  unlockChat:{flat:1.99,label:'Chat unlock',body:'Unlock this conversation permanently. One-time per person.'},
  vendorListing:{flat:4.99,label:'Vendor listing',body:'Publish one listing to the RUBIX marketplace.'},
  tournamentHost:{flat:9.99,label:'Tournament host',body:'Host a tournament and open team registration.'},
  crewCreate:{flat:14.99,label:'Crew creation',body:'Create and lead your own pickup run crew.'},
  priorityBooking:{flat:2.99,label:'Priority booking',body:'Jump the queue on popular court slots.'}
};
const RATES = {
  court:{rate:0.10,label:'Court booking'},
  trainer:{rate:0.12,label:'Trainer session'},
  tourney:{rate:0.15,label:'Tournament entry'},
  shop:{rate:0.08,label:'Shop sale'},
  crew:{rate:0.05,label:'Crew membership'}
};

function userById(id){
  if (id === 'me') return DB.me;
  return DB.users.find(u => u.id === id) || null;
}
function charge(userId, opts){
  const o = opts || {};
  const u = userById(userId);
  if (!u) return { ok:false, error:'User not found', fee:0, net:0, total:0 };
  const total = round2(o.amount || 0);
  if (u.wallet < total) return { ok:false, error:'Insufficient balance', fee:0, net:0, total };
  const rate = o.rate || 0;
  const fee = o.sourceId ? round2(total * rate) : total;
  const net = round2(total - fee);
  u.wallet = round2(u.wallet - total);
  u.tx = u.tx || [];
  u.tx.unshift({ ts:Date.now(), kind:o.kind, amount:-total, fee, note:o.note || o.kind });
  PLATFORM.revenue = round2(PLATFORM.revenue + fee);
  PLATFORM.history.unshift({ ts:Date.now(), kind:o.kind, gross:total, fee, net, sourceId:o.sourceId||null, userId });
  if (o.sourceId && net > 0){
    const p = userById(o.sourceId);
    if (p){
      p.wallet = round2((p.wallet||0) + net);
      p.tx = p.tx || [];
      p.tx.unshift({ ts:Date.now(), kind:o.kind, amount:net, fee:0, note:'Payout · '+(o.note||o.kind) });
    }
  }
  return { ok:true, fee, net, total };
}

/* 5. TOURNAMENT ENGINE */
const Tournaments = {
  nextPow2(n){ let p=2; while (p<n) p*=2; return p; },
  buildBracket(teams){
    const list = (teams||[]).slice();
    const size = Math.max(2, Tournaments.nextPow2(list.length || 2));
    const slots = [];
    for (let i=0;i<size;i++) slots.push(list[i]||null);
    const rounds = [];
    const first = { games:[] };
    for (let i=0;i<size;i+=2){
      const a = slots[i], b = slots[i+1];
      first.games.push({ a, b, sa:null, sb:null,
        status:(a&&b)?'pending':((a||b)?'bye':'empty') });
    }
    rounds.push(first);
    let count = size/2;
    while (count > 1){
      count = count/2;
      const r = { games:[] };
      for (let i=0;i<count;i++) r.games.push({ a:null,b:null,sa:null,sb:null,status:'empty' });
      rounds.push(r);
    }
    Tournaments.advanceRound({ bracket:rounds });
    return rounds;
  },
  advanceRound(t){
    const rounds = t.bracket;
    for (let r=0;r<rounds.length-1;r++){
      const cur = rounds[r], nxt = rounds[r+1];
      cur.games.forEach((g,i) => {
        const slot = Math.floor(i/2);
        const target = nxt.games[slot];
        if (!target) return;
        let winner = null;
        if (g.status === 'bye') winner = g.a || g.b;
        else if (g.status === 'done') winner = (g.sa > g.sb) ? g.a : g.b;
        if (winner){
          if (i%2===0) target.a = winner; else target.b = winner;
          if (target.a && target.b) target.status = 'pending';
          else if (target.a || target.b) target.status = 'bye';
        }
      });
    }
  },
  recordResult(t, ri, gi, sa, sb){
    const g = t.bracket[ri].games[gi];
    if (!g || g.status === 'bye' || g.status === 'empty') return false;
    g.sa = Number(sa); g.sb = Number(sb); g.status = 'done';
    Tournaments.advanceRound(t);
    return true;
  }
};

/* 6. CHAT ENGINE */
const Chat = {
  threadWith(id){ return DB.chats.find(c => c.with === id) || null; },
  ensureThread(id){
    let c = Chat.threadWith(id);
    if (!c){ c = { id:uid('ch'), with:id, unlocked:false, msgs:[] }; DB.chats.unshift(c); }
    return c;
  },
  send(id, text){
    const c = Chat.ensureThread(id);
    c.msgs.push({ from:'me', text, ts:Date.now() });
    return c;
  },
  unreadCount(){
    return DB.chats.filter(c => c.unlocked && c.msgs.length && c.msgs[c.msgs.length-1].from !== 'me').length;
  },
  last(c){ return c.msgs.length ? c.msgs[c.msgs.length-1] : { text:'No messages yet', ts:Date.now() }; }
};

/* 7. VERIFY */
const Verify = {
  propose(g){ g.verified=false; g.vstate='proposed'; return g; },
  confirm(g){ g.verified=true; g.vstate='confirmed'; return g; },
  dispute(g){ g.verified=false; g.vstate='disputed'; return g; }
};

/* 8. AI */
const AI = {
  matchScore(me, u){
    let s = 40;
    s += clamp(22 - Math.abs(me.skill-u.skill)*16, -14, 22);
    if (u.position !== me.position) s += 8;
    if (u.preferredCourt === me.preferredCourt) s += 10; else s += 3;
    if (u.region === me.region) s += 11;
    if (u.city === me.city) s += 6;
    if (u.avail && me.avail && u.avail === me.avail) s += 9;
    if (u.status === 'available') s += 7;
    s += clamp(10 - u.dist*1.6, -6, 10);
    return clamp(Math.round(s), 30, 99);
  },
  topMatches(n){
    return DB.users.filter(u => u.id !== 'me')
      .map(u => ({ u, score:AI.matchScore(DB.me, u) }))
      .sort((a,b) => b.score - a.score)
      .slice(0, n||6);
  }
};

/* 9. WEATHER */
const Weather = {
  forCourt(c){
    if (c.surface === 'Indoor') return null;
    const r = rngFrom(c.id + new Date().toDateString());
    const conds = [['☀️','Sunny'],['⛅','Partly cloudy'],['🌤️','Clear skies'],['🌦️','Passing showers'],['🌧️','Light rain'],['🌬️','Breezy']];
    const pick = conds[Math.floor(r()*conds.length)];
    const temp = 24 + Math.floor(r()*9);
    const days = [];
    const names = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    const today = new Date().getDay();
    for (let i=0;i<5;i++){
      const c2 = conds[Math.floor(r()*conds.length)];
      days.push({ d:names[(today+i)%7], e:c2[0], t:23+Math.floor(r()*10) });
    }
    return { temp, cond:pick[1], emoji:pick[0], days };
  }
};

/* 10. STATE */
const state = {
  gateScreen:'entry',
  discoverFilter:'all',
  rankList:'national', rankQuery:'', rankRegion:'All', rankLevel:'All',
  lfFilter:'all',
  booking:{ date:'Today', time:null },
  vendorDraft:null, coachCourt:null, courtSurface:null, hostFormat:null,
  adminTab:'overview', adminAppTab:'vendors', adminUserQuery:'',
  adminReportFilter:'open',
  gateAdminEmail:'', gateAdminPin:'',
  shopFilter:'all', shopQuery:'', courtQuery:'',
  tourneyFilter:'open',
  requestsSent:{},
  topupPick:25,
  feedLikes:{},
  form:{},
  notifs:{ push:true, email:false, nearby:true, invites:true, chat:true, bookings:true, crew:false, quiet:false },
  safety:{ idVerified:true, photoVerified:false, shareLocation:true },
  activeChat:null, chatMsg:'',
  _nearbyShown:false
};

const nav = { tab:'discover', stack:[] };
const TABS = [
  {id:'discover',label:'DISCOVER',icon:'pin'},
  {id:'tourneys',label:'TOURNEYS',icon:'trophy'},
  {id:'rankings',label:'RANKINGS',icon:'chart'},
  {id:'courts',label:'COURTS',icon:'ball'},
  {id:'more',label:'MORE',icon:'grid'}
];
const TAB_TITLES = { discover:'Discover', tourneys:'Tournaments', rankings:'Rankings', courts:'Courts', more:'More', admin:'Admin Console' };
const DARK_SCREENS = new Set(['admin','adminappdetail','adminuseredit']);

function currentScreen(){
  if (nav.stack.length) return nav.stack[nav.stack.length-1];
  return { screen:nav.tab, params:{}, title:TAB_TITLES[nav.tab]||'' };
}
function go(screen, params, title){
  nav.stack.push({ screen, params:params||{}, title:title||'' });
  render();
  const m = $('#main'); if (m) m.scrollTop = 0;
}
function back(){ nav.stack.pop(); render(); }
function setTab(id){
  nav.tab = id; nav.stack = []; render();
  const m = $('#main'); if (m) m.scrollTop = 0;
}

/* SHARED PARTIALS */
function avatar(u, size, extra){
  if (!u) return '';
  const cls = 'av av-' + (size||'md') + ' ' + (extra||'');
  return '<div class="' + cls + '" style="--h:' + (u.hue||200) + '">' +
    '<span>' + escapeHTML(u.initials||'') + '</span>' +
    '<img src="' + img(u.seed||u.id, 160, 160) + '" alt="" loading="lazy" onerror="this.remove()">' +
  '</div>';
}
function avatarStack(ids, size){
  return '<div class="av-stack">' + ids.map(id => avatar(userById(id), size||'xs')).join('') + '</div>';
}
function headerHTML(cur, dark){
  const isPushed = nav.stack.length > 0;
  let right = '';
  if (!isPushed && cur.screen === 'more') right = '<button class="hdr-btn" data-act="wallet">' + ico('wallet','ic-sm') + '</button>';
  else if (!isPushed && cur.screen === 'tourneys') right = '<button class="hdr-btn" data-act="host">' + ico('plus','ic-sm') + '</button>';
  else if (!isPushed && cur.screen === 'courts') right = '<button class="hdr-btn" data-act="courtsubmit">' + ico('plus','ic-sm') + '</button>';
  const left = isPushed ? '<button class="hdr-back" data-act="back">' + ico('back','ic-sm') + '</button>' : '';
  return '<header class="hdr' + (dark?' dark':'') + '">' + left +
    '<div class="hdr-title">' + escapeHTML(cur.title || TAB_TITLES[cur.screen] || '') + '</div>' + right + '</header>';
}
function tabbarHTML(){
  return '<nav class="tabbar">' + TABS.map(t =>
    '<button class="tab' + (nav.tab===t.id && !nav.stack.length ? ' on':'') + '" data-act="tab" data-v="' + t.id + '">' +
    ico(t.icon) + '<span>' + t.label + '</span></button>').join('') + '</nav>';
}

/* 11. ENTRY GATE + ADMIN LOGIN */
function entryGateScreen(){
  return '<div class="gate">' +
    '<div class="gate-brand"><div class="logo">R</div>' +
    '<h1>RUBIX<span>HOOPS</span></h1><p>Find runs. Book courts. Ball out.</p></div>' +
    '<div class="gate-cards">' +
      '<button class="gate-card" data-act="enterplayer">' +
        '<div class="gc-ico">' + ico('user','ic-lg') + '</div>' +
        '<div class="gc-txt"><b>Continue as Player</b><span>Find courts, crews &amp; runs near you</span></div>' +
        ico('arrow','gc-arrow') + '</button>' +
      '<button class="gate-card admin" data-act="enteradmin">' +
        '<div class="gc-ico orange">' + ico('shield','ic-lg') + '</div>' +
        '<div class="gc-txt"><b>Enter Admin Console</b><span>Approvals · Users · Revenue</span></div>' +
        '<span class="badge-restr">RESTRICTED</span></button>' +
    '</div>' +
    '<div class="gate-foot">NO ADS · EVER · v1.0</div></div>';
}
function adminLoginScreen(){
  return '<div class="login-wrap">' +
    '<button class="hdr-back" data-act="gateback" style="background:#1c2029;color:#fff">' + ico('back','ic-sm') + '</button>' +
    '<h2>Admin Console</h2>' +
    '<p class="sub">Restricted access. Operator credentials required to manage approvals, users, rankings and revenue.</p>' +
    '<div class="field dark"><label>Operator email</label>' +
    '<input data-input="gateAdminEmail" data-live="1" type="email" autocomplete="off" placeholder="admin@rubix.app" value="' + escapeHTML(state.gateAdminEmail) + '"></div>' +
    '<div class="field dark"><label>Passcode</label>' +
    '<input data-input="gateAdminPin" type="password" autocomplete="off" placeholder="••••" value="' + escapeHTML(state.gateAdminPin) + '"></div>' +
    '<div id="loginErr"></div>' +
    '<div style="margin-top:18px"><button class="btn btn-primary btn-block" data-act="adminauth">Sign in to console</button></div>' +
    '<p class="hint">Demo credentials — admin@rubix.app / 1234</p></div>';
}

/* 12. DISCOVER */
function pinPos(id){ const r = rngFrom('pos'+id); return { x:10+Math.round(r()*80), y:8+Math.round(r()*78) }; }
function mapHTML(){
  const me = pinPos('me_center'); let pins = '';
  DB.users.filter(u => u.id !== 'me' && u.dist < 6).slice(0,7).forEach(u => {
    const p = pinPos(u.id);
    pins += '<button class="pin pin-player" style="left:' + p.x + '%;top:' + p.y + '%;background:linear-gradient(135deg,hsl(' + u.hue + ' 78% 56%),hsl(' + (u.hue+42) + ' 78% 44%))" data-act="player" data-id="' + u.id + '"><span>' + escapeHTML(u.initials) + '</span></button>';
  });
  DB.courts.forEach(c => { const p = pinPos(c.id); pins += '<button class="pin pin-court" style="left:' + p.x + '%;top:' + p.y + '%" data-act="court" data-id="' + c.id + '">🏀</button>'; });
  DB.crews.forEach(c => { const p = pinPos(c.id); pins += '<button class="pin pin-crew" style="left:' + p.x + '%;top:' + p.y + '%" data-act="crew" data-id="' + c.id + '">👥</button>'; });
  pins += '<div class="pin pin-me" style="left:' + me.x + '%;top:' + me.y + '%"></div>';
  return '<div class="map"><svg class="map-svg" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">' +
    '<rect width="400" height="400" fill="#dfe4dc"/>' +
    '<path d="M0 90h400M0 210h400M0 320h400M70 0v400M190 0v400M300 0v400" stroke="#cdd4c9" stroke-width="14" fill="none"/>' +
    '<path d="M0 150h400M0 265h400M130 0v400M250 0v400" stroke="#e6ebe1" stroke-width="7" fill="none"/>' +
    '<rect x="20" y="20" width="90" height="60" rx="6" fill="#d3dacd"/>' +
    '<rect x="230" y="230" width="120" height="70" rx="6" fill="#d3dacd"/>' +
    '<rect x="300" y="30" width="80" height="90" rx="6" fill="#cbd3c6"/>' +
    '<rect x="30" y="250" width="80" height="110" rx="6" fill="#cbd3c6"/>' +
    '<circle cx="200" cy="200" r="42" fill="#e9ede5" stroke="#c6cec1" stroke-width="3"/>' +
    '<rect x="178" y="178" width="44" height="44" rx="4" fill="none" stroke="#b9c2b4" stroke-width="2.5"/>' +
    '<circle cx="200" cy="200" r="9" fill="none" stroke="#b9c2b4" stroke-width="2.5"/></svg>' +
    pins + '<div class="map-fade"></div></div>';
}
function discoverEntities(){
  const f = state.discoverFilter; const out = [];
  if (f === 'all' || f === 'ballers'){
    DB.users.filter(u => u.id !== 'me').forEach(u => out.push({ kind:'baller', id:u.id, dist:u.dist, u,
      title:u.name, sub:u.position+' · '+u.city+' · '+u.skill.toFixed(1)+' skill' }));
  }
  if (f === 'all' || f === 'courts'){
    DB.courts.forEach(c => out.push({ kind:'court', id:c.id, dist:c.dist, court:c,
      title:c.name, sub:c.surface+' · '+c.courtCount+' courts · $'+c.price+'/hr' }));
  }
  if (f === 'all' || f === 'crews'){
    DB.crews.forEach(c => out.push({ kind:'crew', id:c.id, dist:c.dist, crew:c,
      title:c.name, sub:fmt(c.members)+' members · '+(c.fee?'$'+c.fee.toFixed(2)+'/mo':'Free') }));
  }
  return out.sort((a,b) => a.dist - b.dist).slice(0, 14);
}
function discoverScreen(){
  const top = AI.topMatches(1)[0];
  const list = discoverEntities();
  const chips = [{id:'all',label:'All'},{id:'ballers',label:'Ballers'},{id:'courts',label:'Courts'},{id:'crews',label:'Crews'}];
  let rows = '';
  list.forEach(e => {
    if (e.kind === 'baller'){
      rows += '<button class="lrow" data-act="player" data-id="' + e.id + '">' + avatar(e.u,'md') +
        '<div class="grow"><div class="t">' + escapeHTML(e.title) + '</div><div class="s">' + escapeHTML(e.sub) + '</div></div>' +
        '<div class="col" style="align-items:flex-end"><b class="tiny mono">' + e.dist.toFixed(1) + ' km</b>' +
        (e.u.verified ? '<span class="badge ok" style="margin-top:4px">✓</span>' : '') + '</div></button>';
    } else if (e.kind === 'court'){
      rows += '<button class="lrow" data-act="court" data-id="' + e.id + '">' +
        '<div class="av av-md" style="--h:' + e.court.hue + ';background:linear-gradient(135deg,hsl(' + e.court.hue + ' 70% 52%),hsl(' + (e.court.hue+40) + ' 70% 42%))"><span>🏀</span></div>' +
        '<div class="grow"><div class="t">' + escapeHTML(e.title) + '</div><div class="s">' + escapeHTML(e.sub) + '</div></div>' +
        '<b class="tiny mono">' + e.dist.toFixed(1) + ' km</b></button>';
    } else {
      rows += '<button class="lrow" data-act="crew" data-id="' + e.id + '">' +
        '<div class="av av-md" style="--h:' + e.crew.hue + ';background:linear-gradient(135deg,hsl(' + e.crew.hue + ' 70% 52%),hsl(' + (e.crew.hue+40) + ' 70% 42%))"><span>👥</span></div>' +
        '<div class="grow"><div class="t">' + escapeHTML(e.title) + '</div><div class="s">' + escapeHTML(e.sub) + '</div></div>' +
        '<b class="tiny mono">' + e.dist.toFixed(1) + ' km</b></button>';
    }
  });
  return mapHTML() +
    '<div class="sheet-bottom"><div class="sheet-grab"></div><div class="sheet-body">' +
    (top ? '<button class="lrow" style="background:linear-gradient(135deg,#FFF4EC,#FFF9F4);border:1px solid #FFDCC6" data-act="player" data-id="' + top.u.id + '">' +
      '<span class="badge orange badge-lg">' + ico('sparkle','ic-sm') + ' ' + top.score + '% match</span>' +
      '<div class="grow"><div class="t">Best run today · ' + escapeHTML(top.u.name) + '</div>' +
      '<div class="s">' + top.u.position + ' · ' + top.u.skill.toFixed(1) + ' skill · ' + top.u.dist.toFixed(1) + ' km away</div></div>' +
      ico('arrow','ic-sm') + '</button>' : '') +
    '<div class="chips" style="margin:10px 0 12px">' +
      chips.map(c => '<button class="chip orange' + (state.discoverFilter===c.id?' on':'') + '" data-act="dfilter" data-v="' + c.id + '">' + c.label + '</button>').join('') +
    '</div>' + rows + '</div></div>';
}
function discoverFloatHeader(){
  return '<div class="hdr-float"><div class="brand-pill"><div class="dot">R</div><div><b>RUBIX</b> <span>· ' + escapeHTML(DB.me.city) + '</span></div></div>' +
    '<button class="hdr-btn" style="width:42px;height:42px" data-act="profile" data-id="me">' + avatar(DB.me,'sm') + '</button></div>';
}

/* 13. TOURNAMENTS */
function tourneyListScreen(){
  const f = state.tourneyFilter;
  const filters = [{id:'open',label:'Open'},{id:'hosted',label:'Hosted by me'},{id:'completed',label:'Completed'},{id:'all',label:'All'}];
  let list = DB.tourneys.slice();
  if (f === 'open') list = list.filter(t => t.status === 'open' || t.status === 'draft');
  else if (f === 'hosted') list = list.filter(t => t.host === 'me');
  else if (f === 'completed') list = list.filter(t => t.status === 'completed');

  let html = '<div class="chips" style="margin-bottom:12px">' +
    filters.map(x => '<button class="chip orange' + (f===x.id?' on':'') + '" data-act="tourneyfilter" data-v="' + x.id + '">' + x.label + '</button>').join('') + '</div>';
  html += '<button class="card card-dark" style="text-align:left;width:100%" data-act="host">' +
    '<div class="row-between"><span class="badge gold">' + ico('trophy','ic-sm') + ' HOST</span><span class="badge" style="background:rgba(255,255,255,.1);color:#c9d2df">$9.99</span></div>' +
    '<h3 style="font-size:18px;font-weight:900;letter-spacing:-.035em;margin-top:12px;color:#fff">Host a 3v3 tournament at your nearest court</h3>' +
    '<p style="font-size:12.5px;color:#98a3b3;margin-top:6px;line-height:1.55">Open registration, auto-generated bracket, and a 15% entry split that feeds the prize pool.</p>' +
    '<div class="row" style="margin-top:14px;color:#FFB020;font-weight:900;font-size:13px">Create tournament ' + ico('arrow','ic-sm') + '</div></button>';
  if (!list.length) html += '<div class="empty"><div class="e">🏆</div><b>No tournaments here yet</b><span>Host one and invite your crew — brackets build themselves.</span></div>';
  list.forEach(t => {
    const court = DB.courts.find(c => c.id === t.court);
    const days = Math.max(0, Math.ceil((t.agreeBy - Date.now())/86400000));
    const pct = Math.round((t.teams.length / t.maxTeams)*100);
    html += '<button class="card card-flush" style="width:100%;text-align:left" data-act="tourney" data-id="' + t.id + '">' +
      '<div class="banner" style="border-radius:0;height:118px">' +
        '<img src="' + img(t.seed+'_b',600,300) + '" alt="" onerror="this.remove()">' +
        '<div class="b-grad"></div>' +
        '<div class="b-top"><span class="badge orange badge-lg">' + t.format + '</span>' +
        '<span class="badge ink badge-lg">' + (t.status==='draft'?'DRAFT':'OPEN') + '</span></div></div>' +
      '<div style="padding:15px">' +
        '<div class="row-between"><h3 style="font-size:16px;font-weight:900;letter-spacing:-.03em">' + escapeHTML(t.name) + '</h3>' +
        '<span style="font-size:15px;font-weight:900;color:#a06a00">💰 $' + t.prize + '</span></div>' +
        '<div class="tiny" style="margin-top:5px">' + escapeHTML(court?court.name:'Court TBD') + ' · $' + t.entry + ' entry</div>' +
        '<div class="progress" style="margin-top:12px"><i style="width:' + pct + '%"></i></div>' +
        '<div class="row-between" style="margin-top:8px"><span class="tiny">' + t.teams.length + '/' + t.maxTeams + ' teams</span>' +
        '<span class="tiny" style="color:' + (days<=3?'var(--red)':'var(--muted)') + '">' + days + 'd to agree</span></div>' +
      '</div></button>';
  });
  return html;
}
function tourneyDetailScreen(p){
  const t = DB.tourneys.find(x => x.id === p.id);
  if (!t) return missingScreen();
  const court = DB.courts.find(c => c.id === t.court);
  const days = Math.max(0, Math.ceil((t.agreeBy - Date.now())/86400000));
  const joined = t.teams.indexOf('Marcus Bell') >= 0;
  const roundNames = ['Round 1','Quarterfinals','Semifinals','Final'];
  let bracketHTML = '<div class="bracket">';
  t.bracket.forEach((rd, ri) => {
    const name = t.bracket.length === 1 ? 'Final' : roundNames[Math.max(0, roundNames.length - t.bracket.length + ri)];
    bracketHTML += '<div class="bround"><h4>' + name + '</h4>';
    rd.games.forEach(g => {
      const cls = g.status === 'done' ? 'done' : (g.status === 'bye' ? 'bye' : 'pending');
      const aWin = g.status === 'done' && g.sa > g.sb;
      const bWin = g.status === 'done' && g.sb > g.sa;
      bracketHTML += '<div class="bgame ' + cls + '">' +
        '<div class="side' + (aWin?' win':'') + '"><span class="nm">' + escapeHTML(g.a||'BYE') + '</span><span class="sc">' + (g.sa==null?'–':g.sa) + '</span></div>' +
        '<div class="side' + (bWin?' win':'') + '"><span class="nm">' + escapeHTML(g.b||'BYE') + '</span><span class="sc">' + (g.sb==null?'–':g.sb) + '</span></div></div>';
    });
    bracketHTML += '</div>';
  });
  bracketHTML += '</div>';

  const myGames = [];
  t.bracket.forEach((rd, ri) => rd.games.forEach((g, gi) => {
    if (g.status === 'pending' && (g.a === 'Riverside Runners' || g.a === 'East Legon Elite' || joined))
      myGames.push({ ri, gi, g });
  }));

  const entryFee = t.entry;
  const platformCut = round2(entryFee * RATES.tourney.rate);
  const prizeCut = round2(entryFee - platformCut);

  return '<div class="hero hero-sm">' +
      '<img src="' + img(t.seed+'_h',700,400) + '" alt="" onerror="this.remove()">' +
      '<div class="hero-grad"></div><div class="hero-txt">' +
      '<span class="badge orange badge-lg">' + t.format + '</span>' +
      '<h2 style="margin-top:8px">' + escapeHTML(t.name) + '</h2>' +
      '<p>' + escapeHTML(court?court.name+' · '+court.address:'Court to be confirmed') + '</p></div></div>' +
    '<div class="stat-grid" style="margin-top:16px">' +
      '<div class="stat"><b>$' + t.prize + '</b><span>Prize</span></div>' +
      '<div class="stat"><b>' + t.teams.length + '/' + t.maxTeams + '</b><span>Teams</span></div>' +
      '<div class="stat"><b>' + days + '</b><span>Days</span></div>' +
      '<div class="stat"><b>$' + t.entry + '</b><span>Entry</span></div></div>' +
    '<div class="notice warn" style="margin-top:14px">' + ico('clock','ic-sm') +
      ' Agreement window closes in ' + days + ' days. All registered teams must confirm their roster before the bracket locks.</div>' +
    '<div class="sec-title">Your active games</div>' +
    (myGames.length ? myGames.map(g => '<div class="card"><div class="row-between">' +
      '<div><b style="font-size:13.5px">vs ' + escapeHTML(g.g.b||'TBD') + '</b>' +
      '<div class="tiny" style="margin-top:3px">' + (g.ri===0?'Round 1':'Round '+(g.ri+1)) + ' · Game ' + (g.gi+1) + '</div></div>' +
      '<button class="btn btn-primary btn-sm" data-act="submit-score" data-id="' + t.id + '" data-r="' + g.ri + '" data-g="' + g.gi + '">Submit score</button></div></div>').join('')
      : '<div class="card"><div class="tiny">No games scheduled for you yet. Join the tournament to enter the bracket.</div></div>') +
    '<div class="sec-title">Bracket</div>' + bracketHTML +
    '<div class="sec-title">Registered teams</div>' +
    '<div class="card">' + (t.teams.length
      ? '<div class="row">' + avatarStack(t.teams.map((_,i) => 'b'+((i%12)+1))) +
        '<div class="grow tiny">' + t.teams.map(escapeHTML).join(' · ') + '</div></div>'
      : '<div class="tiny">No teams registered yet. Be the first — registration is open.</div>') + '</div>' +
    '<div class="sec-title">Entry &amp; split</div><div class="card">' +
      '<div class="pay-line"><span>Entry fee</span><b>' + money(entryFee) + '</b></div>' +
      '<div class="pay-line"><span>Prize pool allocation</span><b>' + money(prizeCut) + '</b></div>' +
      '<div class="pay-line"><span>Platform fee (15%)</span><b>' + money(platformCut) + '</b></div>' +
      '<div class="pay-line total"><span>Total at checkout</span><b>' + money(entryFee) + '</b></div></div>' +
    '<div class="stickybar"><div class="row-between">' +
      '<div><div class="tiny">Entry</div><div class="amt">' + money(entryFee) + '</div></div>' +
      '<div style="text-align:right"><div class="tiny">Wallet</div><b class="mono">' + money(DB.me.wallet) + '</b></div></div>' +
      '<button class="btn btn-primary" data-act="join-tourney" data-id="' + t.id + '">' +
        (joined ? 'Join another team' : 'Join tournament · ' + money(entryFee)) + '</button></div>';
}

/* 14. RANKINGS */
function rankingsScreen(){
  const isNat = state.rankList === 'national';
  let pool = DB.users.filter(u => u.id !== 'me');
  if (isNat) pool = pool.filter(u => u.rankN != null).sort((a,b) => a.rankN - b.rankN);
  else {
    pool = pool.slice().sort((a,b) => b.points - a.points);
    if (state.rankRegion !== 'All') pool = pool.filter(u => u.region === state.rankRegion);
    if (state.rankLevel !== 'All') pool = pool.filter(u => {
      if (state.rankLevel === 'Elite') return u.skill >= 4.5;
      if (state.rankLevel === 'Advanced') return u.skill >= 3.8 && u.skill < 4.5;
      if (state.rankLevel === 'Intermediate') return u.skill >= 3.0 && u.skill < 3.8;
      return u.skill < 3.0;
    });
  }
  if (state.rankQuery.trim()){
    const q = state.rankQuery.toLowerCase();
    pool = pool.filter(u => u.name.toLowerCase().includes(q) || u.city.toLowerCase().includes(q));
  }
  const regions = ['All','Greater Accra','Ashanti','Central','Northern'];
  const levels = ['All','Elite','Advanced','Intermediate','Developing'];

  let html = '<div class="chips" style="margin-bottom:12px">' +
    '<button class="chip orange' + (isNat?' on':'') + '" data-act="ranklist" data-v="national">National Squad</button>' +
    '<button class="chip orange' + (!isNat?' on':'') + '" data-act="ranklist" data-v="general">General Pool</button></div>';
  html += '<div class="notice info" style="margin-bottom:14px">' +
    (isNat ? 'The National Squad is the top 8 ranked players in Ghana. Squad spots are managed by RUBIX admins.'
           : 'The general pool ranks every active RUBIX player by points earned through verified games, tournament results and streaks.') + '</div>';
  html += '<div class="field" style="margin-top:0"><input data-input="rankQuery" data-live="1" placeholder="Search players or cities" value="' + escapeHTML(state.rankQuery) + '"></div>';
  if (!isNat){
    html += '<div class="chips" style="margin-top:12px">' + regions.map(r =>
      '<button class="chip' + (state.rankRegion===r?' on':'') + '" data-act="rankregion" data-v="' + r + '">' + r + '</button>').join('') + '</div>';
    html += '<div class="chips" style="margin-top:8px">' + levels.map(l =>
      '<button class="chip' + (state.rankLevel===l?' on':'') + '" data-act="ranklevel" data-v="' + l + '">' + l + '</button>').join('') + '</div>';
  }
  html += '<div class="sec-title">' + (isNat ? 'National Squad · Top 8' : 'General Pool · ' + pool.length + ' players') + '</div>';
  if (!pool.length){
    html += '<div class="empty"><div class="e">📊</div><b>No players match those filters</b><span>Try widening your region or skill tier.</span></div>';
    return html;
  }
  pool.forEach((u,i) => {
    const rank = isNat ? u.rankN : (i+1);
    const delta = ((hash(u.id) % 7) - 3);
    html += '<button class="lrow" data-act="player" data-id="' + u.id + '">' +
      '<div style="width:30px;text-align:center;flex:none"><b style="font-size:16px;font-weight:900;letter-spacing:-.05em;font-variant-numeric:tabular-nums">' + rank + '</b></div>' +
      avatar(u,'md') +
      '<div class="grow"><div class="t">' + escapeHTML(u.name) + (u.rankN?' <span class="badge gold" style="margin-left:4px">NAT</span>':'') + '</div>' +
      '<div class="s">' + escapeHTML(u.region) + ' · ' + u.position + ' · ' + u.skill.toFixed(1) + ' skill</div></div>' +
      '<div style="text-align:right;flex:none"><b style="font-size:14px;font-weight:900;font-variant-numeric:tabular-nums">' + fmt(u.points) + '</b>' +
      '<div class="tiny" style="color:' + (delta>=0?'var(--ok)':'var(--red)') + '">' + (delta>=0?'▲':'▼') + ' ' + Math.abs(delta) + '</div></div></button>';
  });
  return html;
}

/* 15. COURTS LIST */
function courtsScreen(){
  let list = DB.courts.slice();
  if (state.courtQuery.trim()){
    const q = state.courtQuery.toLowerCase();
    list = list.filter(c => c.name.toLowerCase().includes(q) || c.address.toLowerCase().includes(q));
  }
  let html = '<div class="field" style="margin-top:0"><input data-input="courtQuery" data-live="1" placeholder="Search courts and gyms" value="' + escapeHTML(state.courtQuery) + '"></div>';
  html += '<div class="chips" style="margin-top:12px">' + ['All','Indoor','Outdoor','Street'].map(s =>
    '<button class="chip' + ((state.courtSurface||'All')===s?' on':'') + '" data-act="courtsurface" data-v="' + s + '">' + s + '</button>').join('') + '</div>';
  if (state.courtSurface && state.courtSurface !== 'All') list = list.filter(c => c.surface === state.courtSurface);
  html += '<div class="sec-title">' + list.length + ' courts near you</div>';
  list.forEach(c => {
    html += '<button class="card card-flush" style="width:100%;text-align:left" data-act="court" data-id="' + c.id + '">' +
      '<div class="banner" style="height:132px;border-radius:0">' +
        '<img src="' + img(c.id+'_court',600,340) + '" alt="" onerror="this.remove()">' +
        '<div class="b-grad"></div>' +
        '<div class="b-top"><span class="badge orange badge-lg">$' + c.price + '/hr</span>' +
        '<span class="badge ink badge-lg">' + c.surface + '</span></div></div>' +
      '<div style="padding:14px">' +
        '<div class="row-between"><h3 style="font-size:15.5px;font-weight:900;letter-spacing:-.03em">' + escapeHTML(c.name) + '</h3>' +
        '<span class="badge gold">★ ' + c.rating.toFixed(1) + '</span></div>' +
        '<div class="row" style="margin-top:7px;gap:14px">' +
          '<span class="tiny">' + ico('pin','ic-sm') + ' ' + c.dist.toFixed(1) + ' km</span>' +
          '<span class="tiny">' + ico('ball','ic-sm') + ' ' + c.courtCount + ' courts</span>' +
          '<span class="tiny">' + (c.playersHere.length?'🔥 '+c.playersHere.length+' here now':'Quiet right now') + '</span></div></div></button>';
  });
  if (!list.length) html += '<div class="empty"><div class="e">🏀</div><b>No courts found</b><span>Try a different search term or surface type.</span></div>';
  return html;
}

/* 16. COURT DETAIL */
function courtDetailScreen(p){
  const c = DB.courts.find(x => x.id === p.id);
  if (!c) return missingScreen();
  const dates = ['Today','Tomorrow','Fri','Sat','Sun'];
  const times = ['6:00 AM','7:30 AM','9:00 AM','12:00 PM','3:00 PM','5:00 PM','6:30 PM','8:00 PM','9:30 PM'];
  const r = rngFrom(c.id + state.booking.date);
  const booked = {};
  times.forEach(t => { if (r() > 0.62) booked[t] = true; });
  const selected = state.booking.time;
  const courtFee = c.price;
  const platformFee = round2(courtFee * RATES.court.rate);
  const total = round2(courtFee + platformFee);
  const w = Weather.forCourt(c);
  const trainers = c.trainers.map(id => userById(id)).filter(Boolean);

  let html = '<div class="hero"><img src="' + img(c.id+'_hero',800,500) + '" alt="" onerror="this.remove()">' +
    '<div class="hero-grad"></div><div class="hero-txt">' +
    '<span class="badge ' + (c.courtStatus==='open'?'ok':'red') + ' badge-lg">' + c.courtStatus.toUpperCase() + '</span>' +
    '<h2 style="margin-top:8px">' + escapeHTML(c.name) + '</h2>' +
    '<p>' + escapeHTML(c.address) + '</p></div></div>' +
    '<div class="pill-row" style="margin-top:14px">' +
      '<span class="badge gold badge-lg">★ ' + c.rating.toFixed(1) + '</span>' +
      '<span class="badge badge-lg">' + c.surface + '</span>' +
      '<span class="badge badge-lg">' + c.courtCount + ' courts</span>' +
      '<span class="badge orange badge-lg">$' + c.price + '/hr</span>' +
      '<span class="badge badge-lg">10% platform fee</span></div>' +
    '<div class="sec-title">Amenities</div>' +
    '<div class="pill-row">' + c.amenities.map(a => '<span class="badge badge-lg">' + escapeHTML(a) + '</span>').join('') + '</div>';

  if (w){
    html += '<div class="sec-title">Weather</div><div class="weather">' +
      '<div class="row-between"><div><div class="wt">' + w.temp + '°</div><div class="wc">' + w.emoji + ' ' + w.cond + '</div></div>' +
      '<div style="text-align:right"><div class="tiny" style="color:#8fb0d8">Outdoor court</div>' +
      '<b style="font-size:12.5px;color:#cfe0f5">' + (w.cond.indexOf('rain')>=0||w.cond.indexOf('shower')>=0?'Play may be affected':'Great conditions') + '</b></div></div>' +
      '<div class="wdays">' + w.days.map(d => '<div class="wday"><b>' + d.d + '</b><i>' + d.e + '</i><span>' + d.t + '°</span></div>').join('') + '</div></div>';
  } else {
    html += '<div class="sec-title">Conditions</div>' +
      '<div class="climate">' + ico('check','ic-sm') + ' Climate controlled — this is an indoor facility, weather never affects play.</div>';
  }

  html += '<div class="sec-title">Trainers stationed here</div>';
  if (trainers.length){
    trainers.forEach(t => {
      html += '<button class="lrow" data-act="trainer" data-id="' + t.id + '">' + avatar(t,'md') +
        '<div class="grow"><div class="t">' + escapeHTML(t.name) + ' <span class="badge ok">✓ VERIFIED</span></div>' +
        '<div class="s">' + escapeHTML(t.specialty||'Skills training') + ' · $' + (t.trainerRate||30) + '/session</div></div>' +
        ico('arrow','ic-sm') + '</button>';
    });
  } else {
    html += '<div class="card"><div class="tiny">No trainers stationed at this court yet. Courts can onboard trainers through the admin console.</div></div>';
  }

  html += '<div class="sec-title">Players here now</div>';
  if (c.playersHere.length){
    html += '<div class="card">';
    c.playersHere.forEach(id => {
      const u = userById(id);
      if (!u) return;
      const sent = state.requestsSent[u.id];
      html += '<div class="lrow flat">' + avatar(u,'sm') +
        '<div class="grow"><div class="t">' + escapeHTML(u.name) + '</div>' +
        '<div class="s">' + u.position + ' · ' + u.skill.toFixed(1) + ' skill</div></div>' +
        '<button class="btn btn-sm ' + (sent?'btn-soft':'btn-primary') + '" data-act="request" data-id="' + u.id + '">' +
        (sent?'Invited':'Invite · $0.99') + '</button></div>';
    });
    html += '</div>';
  } else {
    html += '<div class="card"><div class="tiny">Court is empty right now. Book a slot and invite ballers from Discover.</div></div>';
  }

  html += '<div class="sec-title">Pick a date</div><div class="chips">' + dates.map(d =>
    '<button class="chip orange' + (state.booking.date===d?' on':'') + '" data-act="bookdate" data-v="' + d + '">' + d + '</button>').join('') + '</div>' +
    '<div class="sec-title">Available slots</div><div class="slots">' + times.map(t => {
      const off = !!booked[t];
      return '<button class="slot' + (off?' off':'') + (selected===t?' on':'') + '" data-act="bookslot" data-v="' + t + '">' + t + '</button>';
    }).join('') + '</div>';

  html += '<div class="notice" style="margin-top:16px">RUBIX charges a 10% platform fee on court bookings. The remaining 90% is paid out to the venue.</div>';
  html += '<div class="stickybar"><div class="row-between">' +
    '<div><div class="tiny">' + (selected?escapeHTML(state.booking.date)+' · '+selected:'Select a slot') + '</div>' +
    '<div class="amt">' + (selected?money(total):'—') + '</div></div>' +
    '<div style="text-align:right"><div class="tiny">Court ' + money(courtFee) + ' + fee ' + money(platformFee) + '</div>' +
    '<b class="mono">Wallet ' + money(DB.me.wallet) + '</b></div></div>' +
    '<button class="btn btn-primary" data-act="book" data-id="' + c.id + '">' +
    (selected?'Book for ' + money(total):'Select a time slot') + '</button></div>';
  return html;
}

/* 17. PLAYER PROFILE */
function playerScreen(p){
  const u = userById(p.id);
  if (!u) return missingScreen();
  const s = u.stats;
  const winPct = s.games ? Math.round((s.wins/s.games)*100) : 0;
  const isMe = u.id === 'me';
  const score = isMe ? null : AI.matchScore(DB.me, u);
  const thread = Chat.threadWith(u.id);

  let html = '<div class="prof-hero">' +
    '<img src="' + img(u.id+'_cover',800,400) + '" alt="" onerror="this.remove()">' +
    '<div class="p-grad"></div><div class="prof-av">' + avatar(u,'hero') + '</div></div>' +
    '<div class="prof-head"><div class="row-between">' +
    '<div><h2 style="font-size:23px;font-weight:900;letter-spacing:-.04em">' + escapeHTML(u.name) + '</h2>' +
    '<div class="tiny" style="margin-top:4px">' + ico('pin','ic-sm') + ' ' + escapeHTML(u.city+', '+u.region) + '</div></div>' +
    (score?'<span class="badge orange badge-lg">' + ico('sparkle','ic-sm') + ' ' + score + '%</span>':'') + '</div>' +
    '<div class="pill-row" style="margin-top:12px">' +
      '<span class="badge ink badge-lg">' + u.position + '</span>' +
      '<span class="badge orange badge-lg">' + u.skill.toFixed(1) + ' skill</span>' +
      '<span class="badge badge-lg">' + u.preferredCourt + '</span>' +
      (u.verified?'<span class="badge ok badge-lg">✓ VERIFIED</span>':'') +
      (u.rankN?'<span class="badge gold badge-lg">NATIONAL #'+u.rankN+'</span>':'') +
      (u.roles.indexOf('trainer')>=0?'<span class="badge blue badge-lg">TRAINER</span>':'') +
      (u.roles.indexOf('vendor')>=0?'<span class="badge blue badge-lg">VENDOR</span>':'') + '</div>' +
    (u.bio?'<p style="font-size:13px;line-height:1.6;color:#4a545f;margin-top:14px;font-weight:500">'+escapeHTML(u.bio)+'</p>':'') + '</div>';

  if (!isMe){
    html += '<div class="btn-row" style="margin-top:16px">' +
      '<button class="btn btn-primary" data-act="request" data-id="' + u.id + '">' +
        (state.requestsSent[u.id]?'Invite sent':'Invite to run · $0.99') + '</button>' +
      '<button class="btn btn-ghost" data-act="chat" data-id="' + u.id + '">' +
        (thread&&thread.unlocked?'Chat':'Chat · $1.99') + '</button></div>';
  } else {
    html += '<div class="btn-row" style="margin-top:16px">' +
      '<button class="btn btn-primary" data-act="profileedit">Edit profile</button>' +
      '<button class="btn btn-ghost" data-act="idcard">ID card</button></div>';
  }

  html += '<div class="sec-title">Career stats</div><div class="stat-grid">' +
    '<div class="stat"><b>' + s.games + '</b><span>Games</span></div>' +
    '<div class="stat"><b>' + s.wins + '</b><span>Wins</span></div>' +
    '<div class="stat"><b>' + s.losses + '</b><span>Losses</span></div>' +
    '<div class="stat"><b>' + winPct + '%</b><span>Win %</span></div></div>' +
    '<div class="stat-grid" style="margin-top:9px">' +
    '<div class="stat"><b>' + (s.ppg||0).toFixed(1) + '</b><span>PPG</span></div>' +
    '<div class="stat"><b>' + (s.apg||0).toFixed(1) + '</b><span>APG</span></div>' +
    '<div class="stat"><b>' + (s.rpg||0).toFixed(1) + '</b><span>RPG</span></div>' +
    '<div class="stat"><b>' + fmt(u.points) + '</b><span>Points</span></div></div>';

  html += '<div class="sec-title">Win rate</div><div class="card">' +
    '<div class="winbar"><i class="w" style="width:' + winPct + '%"></i><i class="l" style="width:' + (100-winPct) + '%"></i></div>' +
    '<div class="row-between" style="margin-top:9px">' +
      '<span class="tiny" style="color:var(--ok)">' + s.wins + ' wins</span>' +
      '<span class="tiny" style="color:var(--red)">' + s.losses + ' losses</span></div></div>';

  html += '<div class="sec-title">Game log</div><div class="card">';
  (u.matches||[]).forEach(m => {
    html += '<div class="game"><div class="wl ' + (m.result==='W'?'w':'l') + '">' + m.result + '</div>' +
      '<div class="grow"><div style="font-size:13px;font-weight:800">vs ' + escapeHTML(m.opp) + '</div>' +
      '<div class="tiny" style="margin-top:2px">' + m.court + ' · ' + timeAgo(m.ts) + ' ago</div></div>' +
      '<div style="text-align:right"><div class="score">' + m.score + '</div>' +
      (m.verified?'<div class="tiny" style="color:var(--ok)">✓ verified</div>':'<div class="tiny">unverified</div>') + '</div></div>';
  });
  if (!(u.matches||[]).length) html += '<div class="tiny">No games logged yet.</div>';
  html += '</div>';
  return html;
}

/* 18. PROFILE EDIT */
function profileEditScreen(){
  const f = Object.assign({
    name:DB.me.name, bio:DB.me.bio, city:DB.me.city, region:DB.me.region,
    skill:String(DB.me.skill), position:DB.me.position, preferredCourt:DB.me.preferredCourt
  }, state.form);
  const positions = ['PG','SG','SF','PF','C'];
  const courts = ['Indoor','Outdoor','Street'];
  const avails = ['Mornings','Weekday evenings','Weekends','Nights'];
  const styles = ['Sharpshooter','Playmaker','Defender','Post'];

  return '<div class="card"><div class="row">' + avatar(DB.me,'lg') +
      '<div class="grow"><b style="font-size:14px;font-weight:800">Profile photo</b>' +
      '<div class="tiny" style="margin-top:3px">Shuffle to change your placeholder photo</div></div>' +
      '<button class="btn btn-ghost btn-sm" data-act="shuffle-photo">' + ico('refresh','ic-sm') + ' Shuffle</button></div></div>' +
    '<div class="field"><label>Name</label><input data-input="form.name" value="' + escapeHTML(f.name) + '"></div>' +
    '<div class="field"><label>Bio</label><textarea data-input="form.bio">' + escapeHTML(f.bio) + '</textarea></div>' +
    '<div class="field"><label>City</label><input data-input="form.city" value="' + escapeHTML(f.city) + '"></div>' +
    '<div class="field"><label>Region</label><input data-input="form.region" value="' + escapeHTML(f.region) + '"></div>' +
    '<div class="field"><label>Skill rating</label><select data-input="form.skill">' +
      ['1.0','1.5','2.0','2.5','3.0','3.5','4.0','4.5','5.0','5.5'].map(v =>
        '<option value="' + v + '"' + (f.skill===v?' selected':'') + '>' + v + '</option>').join('') + '</select></div>' +
    '<div class="sec-title">Position</div><div class="chips chips-wrap">' + positions.map(p =>
      '<button class="chip orange' + (f.position===p?' on':'') + '" data-act="form-position" data-v="' + p + '">' + p + '</button>').join('') + '</div>' +
    '<div class="sec-title">Preferred court</div><div class="chips chips-wrap">' + courts.map(c =>
      '<button class="chip orange' + (f.preferredCourt===c?' on':'') + '" data-act="form-court" data-v="' + c + '">' + c + '</button>').join('') + '</div>' +
    '<div class="sec-title">Availability</div><div class="chips chips-wrap">' + avails.map(a =>
      '<button class="chip orange' + (state.form.avail===a?' on':'') + '" data-act="form-avail" data-v="' + a + '">' + a + '</button>').join('') + '</div>' +
    '<div class="sec-title">Playstyle</div><div class="chips chips-wrap">' + styles.map(s =>
      '<button class="chip orange' + ((state.form.playstyle||[]).indexOf(s)>=0?' on':'') + '" data-act="form-style" data-v="' + s + '">' + s + '</button>').join('') + '</div>' +
    '<div class="stickybar"><button class="btn btn-primary" data-act="profile-save">Save changes</button></div>';
}

/* 19. ID CARD */
function qrHTML(seed){
  const r = rngFrom(seed); let cells = '';
  for (let i=0;i<169;i++) cells += '<i class="' + (r()>0.48?'on':'') + '"></i>';
  return '<div class="qr">' + cells + '</div>';
}
function idCardScreen(){
  const u = DB.me;
  return '<div class="idcard">' +
    '<div class="ic-brand"><div class="lg">R</div><b>RUBIX HOOPS</b></div>' +
    '<div class="row" style="margin-top:18px">' + avatar(u,'lg') +
    '<div class="grow"><div style="font-size:19px;font-weight:900;letter-spacing:-.035em">' + escapeHTML(u.name) + '</div>' +
    '<div style="font-size:11px;font-weight:800;letter-spacing:.1em;color:#FF6B35;margin-top:4px">VERIFIED PLAYER</div>' +
    '<div class="tiny" style="color:#8b95a5;margin-top:4px">ID · RBX-' + String(hash(u.id)%900000+100000) + '</div></div>' +
    qrHTML(u.id) + '</div>' +
    '<div class="id-grid">' +
      '<div class="id-cell"><span>Skill</span><b>' + u.skill.toFixed(1) + '</b></div>' +
      '<div class="id-cell"><span>Position</span><b>' + u.position + '</b></div>' +
      '<div class="id-cell"><span>Home court</span><b>' + u.preferredCourt + '</b></div>' +
      '<div class="id-cell"><span>Region</span><b>' + escapeHTML(u.region) + '</b></div></div>' +
    '<div class="row-between" style="margin-top:16px">' +
      '<span class="tiny" style="color:#8b95a5">Member since Jan 2024</span>' +
      '<span class="badge orange">ACTIVE</span></div></div>' +
    '<div class="notice info" style="margin-top:16px">Show this card at partner courts to check in without a booking reference. The QR code encodes your RUBIX player ID.</div>';
}

/* 20. CHATS LIST */
function chatsScreen(){
  const unlocked = DB.chats.filter(c => c.unlocked);
  const locked = DB.chats.filter(c => !c.unlocked);
  let html = '<div class="sec-title">Conversations</div>';
  if (!unlocked.length) html += '<div class="card"><div class="tiny">No unlocked conversations yet.</div></div>';
  unlocked.forEach(c => {
    const u = userById(c.with); const last = Chat.last(c);
    html += '<button class="lrow" data-act="chat" data-id="' + c.with + '">' + avatar(u,'md') +
      '<div class="grow"><div class="t">' + escapeHTML(u.name) + '</div>' +
      '<div class="s">' + (last.from==='me'?'You: ':'') + escapeHTML(last.text) + '</div></div>' +
      '<div style="text-align:right"><div class="tiny">' + timeAgo(last.ts) + '</div>' +
      (last.from!=='me'?'<span class="badge orange" style="margin-top:5px">1</span>':'') + '</div></button>';
  });
  html += '<div class="sec-title">Locked · unlock to message</div>';
  locked.forEach(c => {
    const u = userById(c.with);
    html += '<button class="lrow" data-act="chat" data-id="' + c.with + '" style="background:#FBFAF6">' + avatar(u,'md') +
      '<div class="grow"><div class="t">' + escapeHTML(u.name) + ' ' + ico('lock','ic-sm') + '</div>' +
      '<div class="s">' + escapeHTML(c.msgs.length?c.msgs[0].text.slice(0,54)+'…':'Locked conversation') + '</div></div>' +
      '<span class="badge gold">$1.99</span></button>';
  });
  if (!locked.length) html += '<div class="card"><div class="tiny">All your conversations are unlocked.</div></div>';
  return html;
}

/* 21. CHAT VIEW */
function chatViewScreen(p){
  const u = userById(p.id);
  if (!u) return missingScreen();
  const c = Chat.ensureThread(u.id);
  if (!c.unlocked){
    return '<div class="locked-card">' +
      '<div class="lk">' + ico('lock','ic-lg') + '</div>' +
      '<h3 style="font-size:20px;font-weight:900;letter-spacing:-.035em">This conversation is locked</h3>' +
      '<p style="font-size:13px;color:var(--muted);line-height:1.6;margin-top:8px">' +
      escapeHTML(u.name) + ' sent you a message. Unlock this thread to read it and reply — one-time fee, permanent access.</p>' +
      '<div class="card" style="margin-top:18px;text-align:left"><div class="row">' + avatar(u,'sm') +
      '<div class="grow"><div class="t" style="font-size:13px;font-weight:800">' + escapeHTML(u.name) + '</div>' +
      '<div class="s" style="font-size:11.5px;color:var(--muted)">' +
      escapeHTML(c.msgs.length?c.msgs[0].text.slice(0,70)+'…':'No preview available') + '</div></div></div></div>' +
      '<div class="stickybar" style="margin-left:-24px;margin-right:-24px;padding-left:24px;padding-right:24px">' +
      '<button class="btn btn-gold" data-act="unlock-chat" data-id="' + u.id + '">Unlock for $1.99</button></div></div>';
  }
  let html = '<div class="chat-wrap"><div class="chat-scroll" id="chatScroll">';
  c.msgs.forEach(m => {
    html += '<div class="bub ' + (m.from==='me'?'me':'them') + '">' + escapeHTML(m.text) +
      '<span class="ts">' + timeAgo(m.ts) + '</span></div>';
  });
  if (!c.msgs.length) html += '<div class="tiny center" style="margin:auto">No messages yet. Say something.</div>';
  html += '</div><div class="chat-input">' +
    '<input data-input="chatMsg" placeholder="Message ' + escapeHTML(u.name.split(' ')[0]) + '…" value="' + escapeHTML(state.chatMsg) + '">' +
    '<button data-act="send-msg" data-id="' + u.id + '">' + ico('send','ic-sm') + '</button></div></div>';
  return html;
}

/* 22. FEED */
function feedScreen(){
  let html = '<button class="card card-dark" style="width:100%;text-align:left" data-act="ai">' +
    '<span class="badge gold">' + ico('sparkle','ic-sm') + ' AI</span>' +
    '<h3 style="font-size:17px;font-weight:900;letter-spacing:-.035em;margin-top:10px;color:#fff">What your hoop circle is up to</h3>' +
    '<p style="font-size:12.5px;color:#98a3b3;margin-top:6px;line-height:1.55">Runs forming nearby, crew news and verified results from players in your region.</p></button>';
  DB.feed.forEach(f => {
    const u = userById(f.user);
    const liked = !!state.feedLikes[f.id];
    html += '<div class="card"><div class="post-head">' + avatar(u,'md') +
      '<div class="grow"><div class="t" style="font-size:13.5px;font-weight:800">' + escapeHTML(u.name) + '</div>' +
      '<div class="s tiny">' + timeAgo(f.ts) + ' ago · ' + escapeHTML(u.city) + '</div></div>' +
      '<span class="badge orange">' + escapeHTML(f.type) + '</span></div>' +
      '<p class="post-body">' + escapeHTML(f.text) + '</p>' +
      '<div class="post-img"><img src="' + img(f.seed,600,340) + '" alt="" loading="lazy" onerror="this.remove()"></div>' +
      '<div class="post-acts">' +
        '<button class="pact' + (liked?' on':'') + '" data-act="like" data-id="' + f.id + '">' + ico('star','ic-sm') + ' ' + (f.likes+(liked?1:0)) + '</button>' +
        '<button class="pact" data-act="noop">' + ico('chat','ic-sm') + ' ' + f.comments + '</button>' +
        '<button class="pact" data-act="noop">' + ico('send','ic-sm') + ' Share</button></div></div>';
  });
  return html;
}

/* 23. BADGES */
const BADGE_DEFS = [
  {id:'first-game',e:'🏀',n:'First Bucket'},{id:'10-games',e:'🔟',n:'10 Games'},
  {id:'50-games',e:'5️⃣',n:'50 Games'},{id:'100-games',e:'💯',n:'100 Games'},
  {id:'triple-double',e:'📊',n:'Triple-Double'},{id:'sharp-shooter',e:'🎯',n:'Sharp Shooter'},
  {id:'playmaker',e:'🎩',n:'Playmaker'},{id:'rim-protector',e:'🛡️',n:'Rim Protector'},
  {id:'win-5',e:'🔥',n:'5-Win Streak'},{id:'win-10',e:'⚡',n:'10-Win Streak'},
  {id:'crew-champ',e:'👥',n:'Crew Champion'},{id:'tourney-mvp',e:'🏆',n:'Tournament MVP'}
];
function badgesScreen(){
  const owned = DB.me.badges || [];
  return '<div class="streak-hero"><div class="fire">🔥</div>' +
    '<div><div class="t">Current win streak</div><div class="n">' + DB.me.streaks.current + '</div></div>' +
    '<div style="margin-left:auto;text-align:right"><div class="t">Longest</div><div class="n" style="font-size:26px">' + DB.me.streaks.longest + '</div></div></div>' +
    '<div class="notice ok" style="margin-top:14px">Win 2 more games in a row to unlock the 5-Win Streak badge and 150 bonus points.</div>' +
    '<div class="sec-title">Badges · ' + owned.length + ' of ' + BADGE_DEFS.length + '</div>' +
    '<div class="badge-grid">' + BADGE_DEFS.map(b => {
      const has = owned.indexOf(b.id) >= 0;
      return '<div class="bdg' + (has?'':' locked') + '"><div class="e">' + b.e + '</div><b>' + b.n + '</b></div>';
    }).join('') + '</div>';
}

/* 24. AI */
function aiScreen(){
  const list = AI.topMatches(8);
  let html = '<div class="card card-dark" style="background:linear-gradient(150deg,#0A0A0A,#241a12)">' +
    '<span class="badge gold">' + ico('sparkle','ic-sm') + ' RUBIX AI</span>' +
    '<h3 style="font-size:20px;font-weight:900;letter-spacing:-.04em;margin-top:12px;color:#fff">Your best runs today</h3>' +
    '<p style="font-size:12.5px;color:#98a3b3;margin-top:6px;line-height:1.55">Scored on skill fit, position balance, court preference, region and availability.</p></div>';
  html += '<div class="notice info" style="margin-bottom:14px">You are a ' + DB.me.skill.toFixed(1) + ' ' + DB.me.position +
    ' who prefers ' + DB.me.preferredCourt.toLowerCase() + ' courts in ' + escapeHTML(DB.me.region) + '.</div>';
  list.forEach(m => {
    const u = m.u;
    html += '<button class="lrow" data-act="player" data-id="' + u.id + '">' + avatar(u,'md') +
      '<div class="grow"><div class="t">' + escapeHTML(u.name) + '</div>' +
      '<div class="s">' + u.position + ' · ' + u.skill.toFixed(1) + ' skill · ' + escapeHTML(u.city) + ' · ' + u.dist.toFixed(1) + ' km</div></div>' +
      '<span class="badge orange badge-lg">' + m.score + '%</span></button>';
  });
  return html;
}

/* 25. WALLET */
function walletScreen(){
  const tx = (DB.me.tx || []).slice(0,14);
  const feeList = [
    {k:'Run invite',v:'$0.99 flat'},{k:'Chat unlock',v:'$1.99 flat'},
    {k:'Vendor listing',v:'$4.99 + 8% of sale'},{k:'Tournament host',v:'$9.99 + 15% of entry'},
    {k:'Crew creation',v:'$14.99 flat'},{k:'Court booking',v:'10% platform fee'},
    {k:'Trainer session',v:'12% platform fee'},{k:'Crew membership',v:'5% platform fee'}
  ];
  return '<div class="wallet-hero"><div class="lbl">Available balance</div>' +
    '<div class="amt"><small>$</small>' + DB.me.wallet.toFixed(2) + '</div>' +
    '<div class="row" style="margin-top:18px;gap:10px;position:relative;z-index:2">' +
      '<button class="btn btn-primary btn-sm" style="flex:1" data-act="topup-open">Add funds</button>' +
      '<button class="btn btn-sm" style="flex:1;background:rgba(255,255,255,.12);color:#fff" data-act="withdraw">Withdraw</button></div></div>' +
    '<div class="sec-title">What each fee buys</div><div class="card">' +
    feeList.map(f => '<div class="pay-line"><span>' + f.k + '</span><b>' + f.v + '</b></div>').join('') + '</div>' +
    '<div class="sec-title">Recent activity</div><div class="card">' +
    (tx.length ? tx.map(t =>
      '<div class="tx"><div class="grow"><div style="font-size:12.5px;font-weight:800">' + escapeHTML(t.note) + '</div>' +
      '<div class="tiny" style="margin-top:2px">' + timeAgo(t.ts) + ' ago' + (t.fee?' · platform fee '+money(t.fee):'') + '</div></div>' +
      '<div class="amt ' + (t.amount>0?'pos':'neg') + '">' + (t.amount>0?'+':'−') + money(Math.abs(t.amount)) + '</div></div>').join('')
      : '<div class="tiny">No transactions yet.</div>') + '</div>';
}

/* 26. SAFETY */
function safetyScreen(){
  const s = state.safety;
  return '<div class="notice" style="margin-bottom:14px">' + ico('shield','ic-sm') +
    ' RUBIX verifies every trainer, crew leader and vendor before they can operate. Report anything that feels off — reports go straight to a human.</div>' +
    '<div class="card">' +
      '<div class="lrow flat"><div class="grow"><div class="t">ID verification</div><div class="s">Government ID matched to your account</div></div>' +
      (s.idVerified?'<span class="badge ok">✓ VERIFIED</span>':'<button class="btn btn-sm btn-primary" data-act="verify-id">Verify</button>') + '</div>' +
      '<div class="lrow flat"><div class="grow"><div class="t">Photo verification</div><div class="s">A quick selfie match to your profile photo</div></div>' +
      (s.photoVerified?'<span class="badge ok">✓ VERIFIED</span>':'<button class="btn btn-sm btn-primary" data-act="verify-photo">Verify</button>') + '</div>' +
      '<div class="lrow flat"><div class="grow"><div class="t">Share location with matches</div><div class="s">Only shared while a run is active</div></div>' +
      '<button class="toggle' + (s.shareLocation?' on':'') + '" data-act="toggle" data-k="safety.shareLocation"></button></div>' +
      '<div class="lrow flat"><div class="grow"><div class="t">Emergency contact</div><div class="s">Notify someone if you go offline mid-run</div></div>' +
      '<button class="btn btn-sm btn-ghost" data-act="emergency">Add</button></div></div>' +
    '<div class="sec-title">Blocked players</div><div class="card">' +
      '<div class="lrow flat"><div class="grow"><div class="t">No blocked players</div>' +
      '<div class="s">Players you block cannot see you on the map or message you.</div></div></div></div>' +
    '<button class="btn btn-danger" style="margin-top:14px" data-act="report-user">Report a player</button>';
}

/* 27. NOTIFS */
function notifsScreen(){
  const rows = [
    ['push','Push notifications','Alerts on this device'],
    ['email','Email digest','Weekly recap and receipts'],
    ['nearby','Nearby ballers','When players are within 1 km'],
    ['invites','Run invites','Direct invites to play'],
    ['chat','Chat messages','New messages in unlocked threads'],
    ['bookings','Booking reminders','24h and 1h before your slot'],
    ['crew','Crew activity','Announcements from crews you joined'],
    ['quiet','Quiet hours','Mute everything between 10pm and 6am']
  ];
  return '<div class="card">' + rows.map(r =>
    '<div class="lrow flat"><div class="grow"><div class="t">' + r[1] + '</div><div class="s">' + r[2] + '</div></div>' +
    '<button class="toggle' + (state.notifs[r[0]]?' on':'') + '" data-act="toggle" data-k="notifs.' + r[0] + '"></button></div>').join('') + '</div>' +
    '<div class="notice info" style="margin-top:14px">RUBIX never sends ads, ever. These preferences only control product notifications.</div>';
}

/* 28-31. APPLICATIONS */
function vendorApplyScreen(){
  const cat = state.form.vendorCategory || 'Sneakers';
  const submitted = DB.pending.vendors.some(v => v.seller === 'me');
  return '<div class="notice" style="margin-bottom:14px">' + ico('shop','ic-sm') +
    ' Listing fee: <b>$4.99</b> to publish, plus an <b>8%</b> platform commission on each sale. You keep 92% of the sale price.</div>' +
    (submitted?'<div class="notice ok" style="margin-bottom:14px">Your listing is pending admin review. You will be notified once it goes live.</div>':'') +
    '<div class="field"><label>Item name</label><input data-input="form.vendorName" placeholder="e.g. Nike LeBron 21" value="' + escapeHTML(state.form.vendorName||'') + '"></div>' +
    '<div class="sec-title">Category</div><div class="chips chips-wrap">' + ['Sneakers','Jerseys','Balls','Gear','Other'].map(c =>
      '<button class="chip orange' + (cat===c?' on':'') + '" data-act="vendor-cat" data-v="' + c + '">' + c + '</button>').join('') + '</div>' +
    '<div class="field"><label>Price (USD)</label><input data-input="form.vendorPrice" type="number" min="1" placeholder="85" value="' + escapeHTML(state.form.vendorPrice||'') + '"></div>' +
    '<div class="sec-title">Condition</div><div class="chips chips-wrap">' + ['New','Like new','Good','Fair'].map(c =>
      '<button class="chip orange' + ((state.form.vendorCondition||'Good')===c?' on':'') + '" data-act="vendor-cond" data-v="' + c + '">' + c + '</button>').join('') + '</div>' +
    '<div class="field"><label>Notes</label><textarea data-input="form.vendorNotes" placeholder="Size, wear, what is included…">' + escapeHTML(state.form.vendorNotes||'') + '</textarea></div>' +
    '<div class="stickybar"><button class="btn btn-primary" data-act="submit-vendor">Submit listing · $4.99</button></div>';
}
function trainerApplyScreen(){
  const picked = state.form.trainerCourts || [];
  return '<div class="notice" style="margin-bottom:14px">' + ico('user','ic-sm') +
    ' Trainers keep <b>88%</b> of every session. RUBIX takes a 12% platform fee. You can be stationed at one or more courts.</div>' +
    '<div class="field"><label>Display name</label><input data-input="form.trainerName" placeholder="Coach Jaylen" value="' + escapeHTML(state.form.trainerName||'') + '"></div>' +
    '<div class="sec-title">Courts you train at</div><div class="card">' + DB.courts.map(c =>
      '<div class="lrow flat"><div class="grow"><div class="t">' + escapeHTML(c.name) + '</div>' +
      '<div class="s">' + c.surface + ' · ' + escapeHTML(c.address) + '</div></div>' +
      '<button class="toggle' + (picked.indexOf(c.id)>=0?' on':'') + '" data-act="trainer-court" data-v="' + c.id + '"></button></div>').join('') + '</div>' +
    '<div class="field"><label>Specialty</label><input data-input="form.trainerSpecialty" placeholder="Shooting mechanics · Ball handling" value="' + escapeHTML(state.form.trainerSpecialty||'') + '"></div>' +
    '<div class="field"><label>Session rate (USD)</label><input data-input="form.trainerRate" type="number" min="10" placeholder="35" value="' + escapeHTML(state.form.trainerRate||'') + '"></div>' +
    '<div class="field"><label>Experience</label><textarea data-input="form.trainerExp" placeholder="Years coaching, playing background, certifications…">' + escapeHTML(state.form.trainerExp||'') + '</textarea></div>' +
    '<div class="stickybar"><button class="btn btn-primary" data-act="submit-trainer">Submit application</button></div>';
}
function courtSubmitScreen(){
  const surface = state.form.courtSurface || 'Indoor';
  return '<div class="notice" style="margin-bottom:14px">' + ico('ball','ic-sm') +
    ' Submit your facility for review. Approved courts take bookings through RUBIX and pay a 10% platform fee per booking.</div>' +
    '<div class="field"><label>Court / gym name</label><input data-input="form.courtName" placeholder="Eastside Hoops Hub" value="' + escapeHTML(state.form.courtName||'') + '"></div>' +
    '<div class="field"><label>Address</label><input data-input="form.courtAddress" placeholder="31 Spintex Rd, Accra" value="' + escapeHTML(state.form.courtAddress||'') + '"></div>' +
    '<div class="field"><label>Price per hour (USD)</label><input data-input="form.courtPrice" type="number" min="1" placeholder="20" value="' + escapeHTML(state.form.courtPrice||'') + '"></div>' +
    '<div class="field"><label>Number of courts</label><input data-input="form.courtCount" type="number" min="1" placeholder="4" value="' + escapeHTML(state.form.courtCount||'') + '"></div>' +
    '<div class="sec-title">Surface</div><div class="chips chips-wrap">' + ['Indoor','Outdoor','Street'].map(s =>
      '<button class="chip orange' + (surface===s?' on':'') + '" data-act="court-surface" data-v="' + s + '">' + s + '</button>').join('') + '</div>' +
    '<div class="field"><label>Amenities</label><textarea data-input="form.courtAmenities" placeholder="Indoor AC, Scoreboard, Showers, Parking">' + escapeHTML(state.form.courtAmenities||'') + '</textarea></div>' +
    '<div class="stickybar"><button class="btn btn-primary" data-act="submit-court">Submit for review</button></div>';
}
function hostScreen(){
  const formats = ['3v3','5v5','1v1','2v2','4v4'];
  const f = state.hostFormat || '3v3';
  const entry = Number(state.form.hostEntry || 5);
  return '<div class="notice warn" style="margin-bottom:14px">' + ico('trophy','ic-sm') +
    ' Hosting costs a flat <b>$9.99</b>. RUBIX also takes <b>15%</b> of every entry fee — the rest goes to the prize pool.</div>' +
    '<div class="field"><label>Tournament name</label><input data-input="form.hostName" placeholder="Riverside 3v3 Open" value="' + escapeHTML(state.form.hostName||'') + '"></div>' +
    '<div class="sec-title">Format</div><div class="chips chips-wrap">' + formats.map(x =>
      '<button class="chip orange' + (f===x?' on':'') + '" data-act="host-format" data-v="' + x + '">' + x + '</button>').join('') + '</div>' +
    '<div class="sec-title">Court</div><div class="card">' + DB.courts.map(c =>
      '<div class="lrow flat"><div class="grow"><div class="t">' + escapeHTML(c.name) + '</div>' +
      '<div class="s">' + c.surface + ' · $' + c.price + '/hr</div></div>' +
      '<button class="btn btn-xs ' + (state.form.hostCourt===c.id?'btn-primary':'btn-ghost') + '" data-act="host-court" data-v="' + c.id + '">' +
      (state.form.hostCourt===c.id?'Selected':'Select') + '</button></div>').join('') + '</div>' +
    '<div class="field"><label>Max teams</label><input data-input="form.hostMax" type="number" min="2" max="16" placeholder="8" value="' + escapeHTML(state.form.hostMax||'') + '"></div>' +
    '<div class="field"><label>Entry fee per team (USD)</label><input data-input="form.hostEntry" type="number" min="0" placeholder="5" value="' + escapeHTML(state.form.hostEntry||'') + '"></div>' +
    '<div class="field"><label>Prize pool (USD)</label><input data-input="form.hostPrize" type="number" min="0" placeholder="60" value="' + escapeHTML(state.form.hostPrize||'') + '"></div>' +
    '<div class="notice info" style="margin-top:14px">At $' + entry + ' entry across 8 teams, gross entries are ' + money(entry*8) +
    '. RUBIX takes ' + money(round2(entry*8*0.15)) + ' and ' + money(round2(entry*8*0.85)) + ' flows to the prize pool.</div>' +
    '<div class="stickybar"><div class="row-between">' +
      '<div><div class="tiny">Host fee</div><div class="amt">$9.99</div></div>' +
      '<div style="text-align:right"><div class="tiny">Wallet</div><b class="mono">' + money(DB.me.wallet) + '</b></div></div>' +
      '<button class="btn btn-primary" data-act="submit-host">Pay $9.99 &amp; create tournament</button></div>';
}

/* 32. MORE */
function moreScreen(){
  const unread = Chat.unreadCount();
  return '<div class="card card-dark" style="background:radial-gradient(220px 140px at 88% 0%,rgba(255,107,53,.42),transparent 65%),linear-gradient(150deg,#0A0A0A,#1A1F2E)">' +
    '<div class="row-between"><div><div class="tiny" style="color:#8b95a5;font-weight:900;letter-spacing:.1em">WALLET</div>' +
    '<div style="font-size:32px;font-weight:900;letter-spacing:-.05em;color:#fff;margin-top:4px">' + money(DB.me.wallet) + '</div></div>' +
    avatar(DB.me,'md') + '</div>' +
    '<div class="btn-row" style="margin-top:16px">' +
      '<button class="btn btn-primary btn-sm" style="flex:1" data-act="wallet">Wallet</button>' +
      '<button class="btn btn-sm" style="flex:1;background:rgba(255,255,255,.12);color:#fff" data-act="topup-open">Top up</button></div></div>' +
    '<div class="sec-title">Discover</div>' +
    '<div class="tiles">' +
      '<button class="tile" data-act="ai"><div class="e">✨</div><b>AI Runs</b><span>Best today</span></button>' +
      '<button class="tile" data-act="feed"><div class="e">📰</div><b>Feed</b><span>Your circle</span></button>' +
      '<button class="tile" data-act="badges"><div class="e">🔥</div><b>Badges</b><span>Streaks</span></button>' +
      '<button class="tile" data-act="lost"><div class="e">🎒</div><b>Lost &amp; Found</b><span>4 items</span></button>' +
      '<button class="tile" data-act="shop"><div class="e">🛒</div><b>Shop</b><span>' + DB.shop.length + ' listings</span></button>' +
      '<button class="tile" data-act="ranks"><div class="e">📊</div><b>Rankings</b><span>Leaderboard</span></button></div>' +
    '<div class="sec-title">Inbox</div>' +
    '<button class="lrow" data-act="chats">' +
      '<div class="av av-md" style="--h:22;background:linear-gradient(135deg,#FF6B35,#E85D04)">' + ico('chat') + '</div>' +
      '<div class="grow"><div class="t">Chats</div><div class="s">' + DB.chats.length + ' threads · ' + Chat.unreadCount() + ' unread</div></div>' +
      (unread?'<span class="badge orange">' + unread + '</span>':ico('arrow','ic-sm')) + '</button>' +
    '<div class="sec-title">Account</div><div class="card">' +
      '<button class="lrow flat" data-act="profile" data-id="me"><div class="grow"><div class="t">View profile</div><div class="s">Stats, game log, badges</div></div>' + ico('arrow','ic-sm') + '</button>' +
      '<button class="lrow flat" data-act="profileedit"><div class="grow"><div class="t">Edit profile</div><div class="s">Name, bio, position, availability</div></div>' + ico('arrow','ic-sm') + '</button>' +
      '<button class="lrow flat" data-act="idcard"><div class="grow"><div class="t">Player ID card</div><div class="s">Show at partner courts</div></div>' + ico('arrow','ic-sm') + '</button>' +
      '<button class="lrow flat" data-act="safety"><div class="grow"><div class="t">Trust &amp; Safety</div><div class="s">Verification, blocking, reports</div></div>' + ico('arrow','ic-sm') + '</button>' +
      '<button class="lrow flat" data-act="notifs"><div class="grow"><div class="t">Notification preferences</div><div class="s">8 controls, no ads ever</div></div>' + ico('arrow','ic-sm') + '</button></div>' +
    '<div class="sec-title">Apply to operate</div><div class="card">' +
      '<button class="lrow flat" data-act="vendorapply"><div class="grow"><div class="t">Become a vendor</div><div class="s">$4.99 listing + 8% commission</div></div>' + ico('arrow','ic-sm') + '</button>' +
      '<button class="lrow flat" data-act="trainerapply"><div class="grow"><div class="t">Become a trainer</div><div class="s">Keep 88% of every session</div></div>' + ico('arrow','ic-sm') + '</button>' +
      '<button class="lrow flat" data-act="courtsubmit"><div class="grow"><div class="t">Submit a court</div><div class="s">Get listed and take bookings</div></div>' + ico('arrow','ic-sm') + '</button>' +
      '<button class="lrow flat" data-act="host"><div class="grow"><div class="t">Host a tournament</div><div class="s">$9.99 host fee + 15% of entry</div></div>' + ico('arrow','ic-sm') + '</button></div>' +
    '<div class="sec-title">Dashboards</div><div class="card">' +
      '<button class="lrow flat" data-act="trainerdash"><div class="grow"><div class="t">Trainer dashboard</div><div class="s">Sessions, court status, earnings</div></div>' + ico('arrow','ic-sm') + '</button>' +
      '<button class="lrow flat" data-act="crewdash"><div class="grow"><div class="t">Crew dashboard</div><div class="s">Members, requests, events</div></div>' + ico('arrow','ic-sm') + '</button></div>' +
    '<div class="sec-title">Operator</div><div class="card">' +
      (SESSION.mode==='admin'
        ? '<button class="lrow flat" data-act="returnadmin"><div class="grow"><div class="t">Return to console</div><div class="s">Signed in as ' + escapeHTML(SESSION.adminId) + '</div></div>' + ico('arrow','ic-sm') + '</button>'
        : '<button class="lrow flat" data-act="enteradmin"><div class="grow"><div class="t">Admin sign-in</div><div class="s">Restricted operator access</div></div><span class="badge red">RESTRICTED</span></button>') + '</div>' +
    '<div class="gate-foot" style="color:#b5b0a4">RUBIX HOOPS · v1.0 · NO ADS EVER</div>';
}

/* 33. LOST & FOUND */
function lostScreen(){
  let list = DB.lost.slice();
  if (state.lfFilter !== 'all') list = list.filter(x => x.type === state.lfFilter);
  return '<div class="chips" style="margin-bottom:12px">' +
    [['all','All'],['lost','Lost'],['found','Found']].map(f =>
      '<button class="chip orange' + (state.lfFilter===f[0]?' on':'') + '" data-act="lffilter" data-v="' + f[0] + '">' + f[1] + '</button>').join('') + '</div>' +
    list.map(x => '<div class="card"><div class="row">' +
      '<div class="av av-lg" style="--h:' + (x.type==='lost'?12:150) + ';background:linear-gradient(135deg,' + (x.type==='lost'?'#EF4444,#b91c1c':'#25C26E,#12864a') + ')"><span>' + x.emoji + '</span></div>' +
      '<div class="grow"><span class="badge ' + (x.type==='lost'?'red':'ok') + '">' + x.type.toUpperCase() + '</span>' +
      '<div class="t" style="font-size:14.5px;font-weight:800;margin-top:6px">' + escapeHTML(x.title) + '</div>' +
      '<div class="tiny" style="margin-top:3px">' + ico('pin','ic-sm') + ' ' + escapeHTML(x.place) + '</div></div></div>' +
      '<p style="font-size:12.5px;color:#4a545f;line-height:1.55;margin-top:11px;font-weight:500">' + escapeHTML(x.note) + '</p>' +
      '<div class="row-between" style="margin-top:11px"><span class="tiny">' + timeAgo(x.ts) + ' ago</span>' +
      '<button class="btn btn-sm btn-ghost" data-act="contact-item" data-id="' + x.id + '">Contact</button></div></div>').join('') +
    '<button class="btn btn-primary" style="margin-top:6px" data-act="lfadd">' + ico('plus','ic-sm') + ' Report an item</button>';
}

/* 34. SHOP */
function shopScreen(){
  let list = DB.shop.slice();
  if (state.shopFilter !== 'all') list = list.filter(s => s.category === state.shopFilter);
  if (state.shopQuery.trim()){
    const q = state.shopQuery.toLowerCase();
    list = list.filter(s => s.title.toLowerCase().includes(q));
  }
  const cats = [['all','All'],['Sneakers','Sneakers'],['Balls','Balls'],['Jerseys','Jerseys'],['Gear','Gear']];
  return '<div class="field" style="margin-top:0"><input data-input="shopQuery" data-live="1" placeholder="Search the marketplace" value="' + escapeHTML(state.shopQuery) + '"></div>' +
    '<div class="chips" style="margin-top:12px;margin-bottom:14px">' + cats.map(c =>
      '<button class="chip orange' + (state.shopFilter===c[0]?' on':'') + '" data-act="shopfilter" data-v="' + c[0] + '">' + c[1] + '</button>').join('') + '</div>' +
    '<div class="notice info" style="margin-bottom:14px">RUBIX takes an 8% commission on every sale. Sellers keep 92% and are paid straight to their wallet.</div>' +
    '<div class="grid-2">' + list.map(s =>
      '<button class="shop-card" data-act="shopitem" data-id="' + s.id + '">' +
        '<div class="im"><img src="' + img(s.seed,400,300) + '" alt="" loading="lazy" onerror="this.remove()"></div>' +
        '<div class="in"><b>' + escapeHTML(s.title) + '</b>' +
        '<div class="pr">$' + s.price + '</div>' +
        '<div class="tiny" style="margin-top:3px">' + escapeHTML(s.condition) + ' · ' + escapeHTML(s.place) + '</div></div></button>').join('') + '</div>' +
    (list.length?'':'<div class="empty"><div class="e">🛒</div><b>Nothing matches that search</b><span>Try another category or keyword.</span></div>');
}
function shopItemScreen(p){
  const s = DB.shop.find(x => x.id === p.id);
  if (!s) return missingScreen();
  const seller = userById(s.seller);
  const fee = round2(s.price * RATES.shop.rate);
  return '<div class="card card-flush">' +
    '<div style="height:250px;background:#e6e3db"><img src="' + img(s.seed+'_big',700,500) + '" alt="" style="width:100%;height:100%;object-fit:cover" onerror="this.remove()"></div></div>' +
    '<div class="row-between" style="margin-top:14px">' +
      '<h2 style="font-size:21px;font-weight:900;letter-spacing:-.04em">' + escapeHTML(s.title) + '</h2>' +
      '<div style="font-size:24px;font-weight:900;letter-spacing:-.05em">$' + s.price + '</div></div>' +
    '<div class="pill-row" style="margin-top:10px">' +
      '<span class="badge orange badge-lg">' + escapeHTML(s.condition) + '</span>' +
      '<span class="badge badge-lg">' + escapeHTML(s.category) + '</span>' +
      '<span class="badge badge-lg">' + escapeHTML(s.place) + '</span></div>' +
    '<div class="sec-title">Seller</div>' +
    '<button class="lrow" data-act="player" data-id="' + s.seller + '">' + avatar(seller,'md') +
      '<div class="grow"><div class="t">' + escapeHTML(seller.name) + '</div>' +
      '<div class="s">' + (seller.verified?'✓ Verified seller':'Seller') + ' · ' + escapeHTML(seller.city) + '</div></div>' +
      ico('arrow','ic-sm') + '</button>' +
    '<div class="notice ok" style="margin-top:14px">' + ico('shield','ic-sm') +
      ' Buyer protection: funds are held until you confirm the item arrived as described. Disputes are reviewed within 24 hours.</div>' +
    '<div class="stickybar"><div class="row-between">' +
      '<div><div class="tiny">Item $' + s.price + ' + 8% fee</div><div class="amt">' + money(round2(s.price+fee)) + '</div></div>' +
      '<div style="text-align:right"><div class="tiny">Wallet</div><b class="mono">' + money(DB.me.wallet) + '</b></div></div>' +
      '<button class="btn btn-primary" data-act="buy-item" data-id="' + s.id + '">Buy now</button></div>';
}

/* 35. TRAINER DETAIL */
function trainerDetailScreen(p){
  const t = userById(p.id);
  if (!t) return missingScreen();
  const court = DB.courts.find(c => c.id === t.coachCourt) || DB.courts[0];
  const rate = t.trainerRate || 30;
  const fee = round2(rate * RATES.trainer.rate);
  const slots = ['6:00 AM','8:00 AM','10:00 AM','4:00 PM','6:00 PM'];
  return '<div class="card center">' + avatar(t,'hero') +
      '<h2 style="font-size:21px;font-weight:900;letter-spacing:-.04em;margin-top:14px">' + escapeHTML(t.name) + '</h2>' +
      '<div class="tiny" style="margin-top:5px">' + escapeHTML(t.specialty||'Skills training') + '</div>' +
      '<div class="pill-row" style="justify-content:center;margin-top:11px">' +
        '<span class="badge ok badge-lg">✓ VERIFIED</span>' +
        '<span class="badge orange badge-lg">$' + rate + '/session</span>' +
        '<span class="badge badge-lg">' + t.skill.toFixed(1) + ' skill</span></div></div>' +
    '<div class="sec-title">Stationed at</div>' +
    '<button class="lrow" data-act="court" data-id="' + court.id + '">' +
      '<div class="av av-md" style="--h:' + court.hue + ';background:linear-gradient(135deg,hsl(' + court.hue + ' 70% 52%),hsl(' + (court.hue+40) + ' 70% 42%))"><span>🏀</span></div>' +
      '<div class="grow"><div class="t">' + escapeHTML(court.name) + '</div>' +
      '<div class="s">' + court.surface + ' · ' + escapeHTML(court.address) + '</div></div>' +
      ico('arrow','ic-sm') + '</button>' +
    '<div class="sec-title">Availability today</div>' +
    '<div class="slots">' + slots.map(s =>
      '<button class="slot' + (state.booking.time===s?' on':'') + '" data-act="bookslot" data-v="' + s + '">' + s + '</button>').join('') + '</div>' +
    '<div class="notice" style="margin-top:16px">RUBIX takes a 12% platform fee on trainer sessions. ' +
      escapeHTML(t.name.split(' ')[0]) + ' receives ' + money(rate-fee) + ' per session.</div>' +
    '<div class="stickybar"><div class="row-between">' +
      '<div><div class="tiny">Session ' + money(rate) + ' + fee ' + money(fee) + '</div><div class="amt">' + money(rate+fee) + '</div></div>' +
      '<div style="text-align:right"><div class="tiny">Wallet</div><b class="mono">' + money(DB.me.wallet) + '</b></div></div>' +
      '<button class="btn btn-primary" data-act="book-trainer" data-id="' + t.id + '">Book session</button></div>';
}

/* 36. CREW DETAIL */
function crewDetailScreen(p){
  const c = DB.crews.find(x => x.id === p.id);
  if (!c) return missingScreen();
  const leader = userById(c.leader);
  const near = DB.users.filter(u => u.id !== 'me' && u.dist < 4).slice(0,5);
  const joined = (DB.me.crews||[]).indexOf(c.id) >= 0;
  return '<div class="hero hero-sm">' +
      '<img src="' + img(c.id+'_crew',700,400) + '" alt="" onerror="this.remove()">' +
      '<div class="hero-grad"></div><div class="hero-txt">' +
      (c.verified?'<span class="badge ok badge-lg">✓ VERIFIED CREW</span>':'') +
      '<h2 style="margin-top:8px">' + escapeHTML(c.name) + '</h2>' +
      '<p>' + fmt(c.members) + ' members · ' + c.dist.toFixed(1) + ' km away</p></div></div>' +
    '<div class="pill-row" style="margin-top:14px">' +
      '<span class="badge ink badge-lg">' + (c.fee?'$'+c.fee.toFixed(2)+'/mo':'FREE') + '</span>' +
      '<span class="badge badge-lg">' + fmt(c.members) + ' members</span>' +
      '<span class="badge badge-lg">' + ico('users','ic-sm') + ' Pickup runs</span></div>' +
    '<div class="sec-title">About</div><div class="card">' +
      '<p style="font-size:13px;line-height:1.65;color:#3c4650;font-weight:500">' + escapeHTML(c.desc) + '</p></div>' +
    '<div class="sec-title">Crew leader</div>' +
    '<button class="lrow" data-act="player" data-id="' + c.leader + '">' + avatar(leader,'md') +
      '<div class="grow"><div class="t">' + escapeHTML(leader.name) + '</div>' +
      '<div class="s">Crew leader · ' + leader.position + ' · ' + leader.skill.toFixed(1) + ' skill</div></div>' +
      ico('arrow','ic-sm') + '</button>' +
    '<div class="sec-title">Members nearby</div>' +
    near.map(u => '<div class="lrow">' + avatar(u,'sm') +
      '<div class="grow"><div class="t">' + escapeHTML(u.name) + '</div>' +
      '<div class="s">' + u.position + ' · ' + u.dist.toFixed(1) + ' km</div></div>' +
      '<button class="btn btn-xs ' + (state.requestsSent[u.id]?'btn-soft':'btn-primary') + '" data-act="request" data-id="' + u.id + '">' +
      (state.requestsSent[u.id]?'Sent':'Invite') + '</button></div>').join('') +
    '<div class="stickybar">' +
      (c.fee?'<div class="row-between"><div><div class="tiny">Membership</div>' +
      '<div class="amt">' + money(c.fee) + '<span style="font-size:13px;font-weight:700;color:var(--muted)">/mo</span></div></div>' +
      '<div style="text-align:right"><div class="tiny">5% platform fee</div><b class="mono">Leader gets ' + money(round2(c.fee*0.95)) + '</b></div></div>':'') +
      '<button class="btn btn-primary" data-act="join-crew" data-id="' + c.id + '">' +
      (joined?'You are a member':(c.fee?'Join crew · ' + money(c.fee) + '/mo':'Join crew · Free')) + '</button></div>';
}

/* 37. TRAINER DASHBOARD */
function trainerDashScreen(){
  const t = DB.me;
  const sessions = [
    {id:'ts1',who:'b7',time:'6:00 AM',type:'Shooting mechanics',status:'done'},
    {id:'ts2',who:'b9',time:'8:00 AM',type:'Ball handling',status:'live'},
    {id:'ts3',who:'b2',time:'5:00 PM',type:'Shooting mechanics',status:'upcoming'},
    {id:'ts4',who:'b11',time:'7:00 PM',type:'Finishing at the rim',status:'upcoming'}
  ];
  const court = DB.courts[0];
  const earnings = 486.20;
  return '<div class="card card-dark" style="background:linear-gradient(150deg,#E85D04,#FF6B35)">' +
      '<div class="tiny" style="color:rgba(255,255,255,.75);font-weight:900;letter-spacing:.1em">TRAINER · STATIONED AT</div>' +
      '<h3 style="font-size:21px;font-weight:900;letter-spacing:-.04em;margin-top:6px;color:#fff">' + escapeHTML(court.name) + '</h3>' +
      '<div class="row" style="margin-top:14px;gap:9px">' +
        '<button class="btn btn-sm" style="flex:1;background:rgba(0,0,0,.22);color:#fff" data-act="court-status" data-v="open">Open</button>' +
        '<button class="btn btn-sm" style="flex:1;background:rgba(0,0,0,.22);color:#fff" data-act="court-status" data-v="closed">Closed</button>' +
        '<button class="btn btn-sm" style="flex:1;background:rgba(0,0,0,.22);color:#fff" data-act="court-status" data-v="maintenance">Maint.</button></div>' +
      '<div class="tiny" style="color:rgba(255,255,255,.8);margin-top:9px;font-weight:700">Court status: ' + (state.form.courtStatus||'open').toUpperCase() + '</div></div>' +
    '<div class="stat-grid three" style="margin-top:14px">' +
      '<div class="stat"><b>' + sessions.filter(s => s.status==='done').length + '</b><span>Today</span></div>' +
      '<div class="stat"><b>1</b><span>On court</span></div>' +
      '<div class="stat"><b>' + sessions.filter(s => s.status==='upcoming').length + '</b><span>Upcoming</span></div></div>' +
    '<div class="sec-title">Today’s sessions</div>' +
    sessions.map(s => {
      const u = userById(s.who);
      const badge = s.status==='done'?'<span class="badge ok">DONE</span>':
        s.status==='live'?'<span class="badge orange">LIVE</span>':'<span class="badge">UPCOMING</span>';
      return '<div class="card card-tight"><div class="row">' + avatar(u,'sm') +
        '<div class="grow"><div class="t" style="font-size:13.5px;font-weight:800">' + escapeHTML(u.name) + '</div>' +
        '<div class="s tiny">' + s.time + ' · ' + escapeHTML(s.type) + '</div></div>' + badge + '</div>' +
        '<div class="btn-row" style="margin-top:11px">' +
          '<button class="btn btn-xs btn-ok" data-act="session-act" data-v="start">Start</button>' +
          '<button class="btn btn-xs btn-ghost" data-act="session-act" data-v="complete">Complete</button>' +
          '<button class="btn btn-xs btn-danger" data-act="session-act" data-v="cancel">Cancel</button></div></div>';
    }).join('') +
    '<div class="sec-title">Earnings</div>' +
    '<div class="card card-dark" style="background:linear-gradient(150deg,#0A0A0A,#1A1F2E)">' +
      '<div class="tiny" style="color:#8b95a5;font-weight:900;letter-spacing:.1em">THIS MONTH · NET OF 12% FEE</div>' +
      '<div style="font-size:38px;font-weight:900;letter-spacing:-.05em;color:#fff;margin-top:6px">' + money(earnings) + '</div>' +
      '<div class="tiny" style="color:#8b95a5;margin-top:6px">Next payout Friday · ' + money(earnings*0.42) + '</div></div>' +
    '<div class="sec-title">Profile &amp; availability</div><div class="card">' +
      '<div class="field" style="margin-top:0"><label>Specialty</label><input data-input="form.trainerSpecialty2" value="' + escapeHTML(t.specialty||'Shooting mechanics · Ball handling') + '"></div>' +
      '<div class="field"><label>Rate (USD/session)</label><input data-input="form.trainerRate2" type="number" value="' + (t.trainerRate||35) + '"></div>' +
      '<button class="btn btn-ghost btn-sm" data-act="noop" style="width:100%;margin-top:6px">Update availability</button></div>';
}

/* 38. CREW DASHBOARD */
function crewDashScreen(){
  const c = DB.crews[0];
  const pending = [
    {id:'j1',user:'b7',note:'SG, plays Wed/Fri evenings'},
    {id:'j2',user:'b9',note:'PG, new to Accra'},
    {id:'j3',user:'b12',note:'C, wants competitive runs'}
  ];
  const members = DB.users.filter(u => u.id !== 'me').slice(0,7);
  return '<div class="card card-dark" style="background:linear-gradient(150deg,#B47800,#FFB020)">' +
      '<div class="tiny" style="color:rgba(0,0,0,.6);font-weight:900;letter-spacing:.1em">CREW LEADER ·</div>' +
      '<h3 style="font-size:21px;font-weight:900;letter-spacing:-.04em;margin-top:6px;color:#20160a">' + escapeHTML(c.name) + '</h3>' +
      '<div class="tiny" style="color:rgba(0,0,0,.65);margin-top:6px;font-weight:700">' + fmt(c.members) + ' members · $' + c.fee.toFixed(2) + '/mo membership</div></div>' +
    '<div class="stat-grid three" style="margin-top:14px">' +
      '<div class="stat"><b>' + fmt(c.members) + '</b><span>Members</span></div>' +
      '<div class="stat"><b>' + pending.length + '</b><span>Pending</span></div>' +
      '<div class="stat"><b>2</b><span>Events</span></div></div>' +
    '<div class="sec-title">Pending join requests</div>' +
    pending.map(r => {
      const u = userById(r.user);
      return '<div class="card card-tight"><div class="row">' + avatar(u,'sm') +
        '<div class="grow"><div class="t" style="font-size:13.5px;font-weight:800">' + escapeHTML(u.name) + '</div>' +
        '<div class="s tiny">' + escapeHTML(r.note) + '</div></div></div>' +
        '<div class="btn-row" style="margin-top:11px">' +
          '<button class="btn btn-xs btn-ok" data-act="crew-req" data-id="' + r.id + '" data-v="approve">Approve</button>' +
          '<button class="btn btn-xs btn-danger" data-act="crew-req" data-id="' + r.id + '" data-v="reject">Reject</button></div></div>';
    }).join('') +
    '<div class="sec-title">Members</div><div class="card">' + members.map(u =>
      '<div class="lrow flat">' + avatar(u,'xs') +
      '<div class="grow"><div class="t">' + escapeHTML(u.name) + '</div>' +
      '<div class="s">' + u.position + ' · ' + u.skill.toFixed(1) + ' skill</div></div>' +
      '<span class="badge">' + (u.status==='available'?'AVAILABLE':'BUSY') + '</span></div>').join('') + '</div>' +
    '<div class="sec-title">Management</div><div class="card">' +
      '<button class="lrow flat" data-act="noop"><div class="grow"><div class="t">Send announcement</div><div class="s">Push to all ' + fmt(c.members) + ' members</div></div>' + ico('arrow','ic-sm') + '</button>' +
      '<button class="lrow flat" data-act="noop"><div class="grow"><div class="t">Create a run</div><div class="s">Schedule a pickup session</div></div>' + ico('arrow','ic-sm') + '</button>' +
      '<button class="lrow flat" data-act="noop"><div class="grow"><div class="t">Crew settings</div><div class="s">Name, fees, visibility</div></div>' + ico('arrow','ic-sm') + '</button></div>';
}

/* 39. ADMIN TABS */
const ADMIN_TABS = [
  {id:'overview',label:'Overview'},{id:'analytics',label:'Analytics'},
  {id:'approvals',label:'Approvals'},{id:'users',label:'Users'},
  {id:'admins',label:'Admins'},{id:'squad',label:'Nat. Squad'},
  {id:'rankings',label:'Rankings'},{id:'moderation',label:'Moderation'},
  {id:'revenue',label:'Revenue'},{id:'log',label:'Log'}
];
const ADMIN = { log:[] };
function adminDo(doFn, undoFn, label){
  const entry = { id:uid('a'), doFn, undoFn, label, state:'active', t:Date.now(), by:SESSION.adminId };
  doFn();
  ADMIN.log.push(entry);
  return entry;
}
function adminToggleLog(id){
  const e = ADMIN.log.find(x => x.id === id);
  if (!e) return;
  if (e.state === 'active'){ e.undoFn(); e.state = 'undone'; toast('Action reversed'); }
  else { e.doFn(); e.state = 'active'; toast('Action re-applied'); }
  render();
}

/* 40-49. ADMIN SCREENS */
function adminOverview(){
  const pendingCount = DB.pending.vendors.length + DB.pending.crews.length + DB.pending.trainers.length + DB.pending.courts.length;
  const openReports = DB.reports.filter(r => r.status === 'open').length;
  const national = DB.users.filter(u => u.rankN != null).length;
  const reversed = ADMIN.log.filter(l => l.state === 'undone').length;
  let html = '<div class="stat-grid two">' +
    '<div class="adm-stat"><b>$' + PLATFORM.revenue.toFixed(2) + '</b><span>Platform revenue</span></div>' +
    '<div class="adm-stat"><b>' + pendingCount + '</b><span>Pending approvals</span></div>' +
    '<div class="adm-stat"><b>' + DB.users.length + '</b><span>Members</span></div>' +
    '<div class="adm-stat"><b>' + national + '</b><span>National players</span></div>' +
    '<div class="adm-stat"><b>' + openReports + '</b><span>Open reports</span></div>' +
    '<div class="adm-stat"><b>' + ADMIN.log.length + '</b><span>Logged actions</span></div></div>';
  if (reversed) html += '<div class="notice warn" style="margin-top:14px">' + reversed + ' admin action' + (reversed===1?' has':'s have') + ' been reversed. Check the Log tab.</div>';
  const jumps = [
    ['analytics','Analytics','DAU, retention, court utilisation'],
    ['approvals','Approvals',pendingCount + ' items waiting on review'],
    ['moderation','Moderation',openReports + ' open reports'],
    ['revenue','Revenue','Fee structure and earnings log'],
    ['admins','Admins',ADMINS.length + ' operator accounts']
  ];
  html += '<div class="sec-title" style="color:#6f7987">Quick jump</div>';
  jumps.forEach(j => {
    html += '<button class="adm-card" style="width:100%;text-align:left;display:flex;align-items:center;gap:12px" data-act="admintab" data-v="' + j[0] + '">' +
      '<div class="grow"><h3>' + j[1] + '</h3><p>' + j[2] + '</p></div>' +
      '<span style="color:#6f7987">' + ico('arrow','ic-sm') + '</span></button>';
  });
  return html;
}
function adminAnalytics(){
  const r = rngFrom('dau');
  const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const vals = days.map(() => 40 + Math.round(r()*60));
  const max = Math.max.apply(null, vals);
  let html = '<div class="adm-card"><h3>Daily active players</h3><p>Last 7 days</p><div class="chart">' +
    vals.map((v,i) => '<div class="bar"><i style="height:' + Math.round((v/max)*100) + '%"></i><span>' + days[i] + '</span></div>').join('') +
    '</div></div>';
  html += '<div class="stat-grid two" style="margin-top:12px">' +
    '<div class="adm-stat"><b>68%</b><span>D30 retention</span></div>' +
    '<div class="adm-stat"><b>94%</b><span>Game completion</span></div>' +
    '<div class="adm-stat"><b>$31.40</b><span>Avg wallet</span></div>' +
    '<div class="adm-stat"><b>73%</b><span>Court utilisation</span></div></div>';
  html += '<div class="sec-title" style="color:#6f7987">Top performing courts</div>';
  DB.courts.slice().sort((a,b) => b.rating - a.rating).forEach(c => {
    html += '<div class="adm-card"><div style="display:flex;justify-content:space-between;gap:10px">' +
      '<div><h3>' + escapeHTML(c.name) + '</h3><p>' + c.surface + ' · ' + c.courtCount + ' courts · $' + c.price + '/hr</p></div>' +
      '<div style="text-align:right"><b style="color:#FFB020;font-size:15px">★ ' + c.rating.toFixed(1) + '</b>' +
      '<p style="margin-top:3px">' + c.playersHere.length + ' here now</p></div></div></div>';
  });
  return html;
}
function adminApprovals(){
  const tabs = [['vendors','Vendors'],['crews','Crews'],['trainers','Trainers'],['courts','Courts']];
  let html = '<div style="display:flex;gap:7px;overflow-x:auto;padding-bottom:4px">' +
    tabs.map(t => '<button class="adm-tab' + (state.adminAppTab===t[0]?' on':'') + '" data-act="adminapptab" data-v="' + t[0] + '">' + t[1] + '</button>').join('') + '</div>';
  const list = DB.pending[state.adminAppTab] || [];
  html += '<div class="sec-title" style="color:#6f7987">' + list.length + ' pending</div>';
  if (!list.length){
    html += '<div class="adm-card"><p style="text-align:center;padding:14px 0">Nothing pending in this queue. All caught up.</p></div>';
    return html;
  }
  list.forEach(item => {
    html += '<button class="adm-card" style="width:100%;text-align:left" data-act="adminapp" data-type="' + state.adminAppTab + '" data-id="' + item.id + '">' +
      '<div style="display:flex;justify-content:space-between;gap:10px;align-items:flex-start">' +
      '<div style="flex:1"><h3>' + escapeHTML(item.name) + '</h3><p>' + escapeHTML(adminAppSummary(state.adminAppTab, item)) + '</p></div>' +
      '<span class="badge amber">PENDING</span></div></button>';
  });
  return html;
}
function adminAppSummary(type, item){
  if (type === 'vendors') return item.category + ' · $' + item.price + ' · ' + item.condition;
  if (type === 'crews') return fmt(item.members) + ' members · ' + item.region + ' · ' + item.fee;
  if (type === 'trainers') return '$' + item.rate + '/session · ' + item.specialty;
  return item.surface + ' · ' + item.courtCount + ' courts · $' + item.price + '/hr';
}
function adminAppDetail(p){
  const type = p.type;
  const item = (DB.pending[type]||[]).find(x => x.id === p.id);
  if (!item) return '<div class="adm-card"><p>This item is no longer pending.</p></div>';
  let rows = '';
  const kv = (k,v) => { rows += '<div class="adm-kv"><span>' + k + '</span><b>' + escapeHTML(String(v)) + '</b></div>'; };
  kv('Application ID', item.id);
  kv('Submitted', timeAgo(item.t) + ' ago');
  if (type === 'vendors'){
    kv('Item', item.name); kv('Category', item.category); kv('Price','$'+item.price);
    kv('Condition', item.condition);
    const seller = userById(item.seller);
    kv('Seller', seller?seller.name:item.seller);
    kv('Seller city', seller?seller.city:'—');
    kv('Seller rating', seller?seller.skill.toFixed(1)+' skill':'—');
    kv('Notes', item.notes);
    kv('Platform fee','$4.99 listing + 8% of sale');
  } else if (type === 'crews'){
    kv('Crew name', item.name);
    const leader = userById(item.leader);
    kv('Leader', leader?leader.name:item.leader);
    kv('Leader region', leader?leader.region:'—');
    kv('Members', item.members); kv('Region', item.region);
    kv('Monthly fee', item.fee); kv('Contact', item.contact);
    kv('Notes', item.notes); kv('Platform fee','5% of membership');
  } else if (type === 'trainers'){
    kv('Display name', item.name);
    const u = userById(item.user);
    kv('Applicant', u?u.name:item.user);
    kv('Skill rating', u?u.skill.toFixed(1):'—');
    const court = DB.courts.find(c => c.id === item.court);
    kv('Stationed court', court?court.name:item.court);
    kv('Specialty', item.specialty);
    kv('Rate','$'+item.rate+'/session');
    kv('Experience', item.exp);
    kv('Certifications', item.certs);
    kv('Contact', item.contact);
    kv('Platform fee','12% of each session');
  } else {
    kv('Court name', item.name); kv('Address', item.address);
    kv('Surface', item.surface); kv('Price','$'+item.price+'/hr');
    kv('Court count', item.courtCount);
    kv('Amenities', item.amenities.join(', '));
    kv('Contact', item.contact); kv('Platform fee','10% of each booking');
  }
  return '<div class="adm-card"><h3>Applicant profile</h3><p>' + escapeHTML(adminAppSummary(type, item)) + '</p></div>' +
    '<div class="adm-card">' + rows + '</div>' +
    '<div style="display:flex;gap:10px;margin-top:6px">' +
      '<button class="btn" style="flex:1;background:#25C26E;color:#fff" data-act="adminapprove" data-type="' + type + '" data-id="' + item.id + '">Approve</button>' +
      '<button class="btn" style="flex:1;background:#EF4444;color:#fff" data-act="adminreject" data-type="' + type + '" data-id="' + item.id + '">Reject</button></div>';
}
function adminUsers(){
  const q = state.adminUserQuery.toLowerCase().trim();
  const list = DB.users.filter(u => !q || u.name.toLowerCase().includes(q) || u.city.toLowerCase().includes(q));
  let html = '<input class="adm-input" data-input="adminUserQuery" data-live="1" placeholder="Search users by name or city" value="' + escapeHTML(state.adminUserQuery) + '">';
  html += '<div class="sec-title" style="color:#6f7987">' + list.length + ' users</div>';
  list.forEach(u => {
    const roles = [];
    if (u.rankN != null) roles.push('NATIONAL');
    if (u.roles.indexOf('trainer') >= 0) roles.push('TRAINER');
    if (u.roles.indexOf('vendor') >= 0) roles.push('VENDOR');
    if (u.roles.indexOf('crewleader') >= 0) roles.push('CREW');
    html += '<button class="adm-card" style="width:100%;text-align:left" data-act="adminuser" data-id="' + u.id + '">' +
      '<div style="display:flex;align-items:center;gap:12px">' + avatar(u,'sm') +
      '<div style="flex:1;min-width:0"><h3>' + escapeHTML(u.name) + (u.id==='me'?' <span class="badge orange">YOU</span>':'') + '</h3>' +
      '<p>' + escapeHTML(u.city+', '+u.region) + ' · ' + u.position + ' · ' + u.skill.toFixed(1) + ' skill</p>' +
      '<div style="display:flex;gap:5px;flex-wrap:wrap;margin-top:7px">' +
        roles.map(r => '<span class="badge" style="background:#222833;color:#a8b2c1">' + r + '</span>').join('') +
        (u.verified?'<span class="badge ok">VERIFIED</span>':'') + '</div></div>' +
      '<div style="text-align:right"><b style="font-size:13px;color:#fff">' + fmt(u.points) + '</b>' +
      '<p style="margin-top:3px">' + money(u.wallet||0) + '</p></div></div></button>';
  });
  return html;
}
function adminUserEdit(p){
  const u = userById(p.id);
  if (!u) return '<div class="adm-card"><p>User not found.</p></div>';
  const isTrainer = u.roles.indexOf('trainer') >= 0;
  const isVendor = u.roles.indexOf('vendor') >= 0;
  const isNational = u.rankN != null;
  return '<div class="adm-card"><div style="display:flex;align-items:center;gap:13px">' + avatar(u,'lg') +
      '<div><h3 style="font-size:17px">' + escapeHTML(u.name) + '</h3>' +
      '<p>' + escapeHTML(u.city+', '+u.region) + '</p></div></div></div>' +
    '<div class="adm-card">' +
      '<div class="adm-kv"><span>User ID</span><b>' + u.id + '</b></div>' +
      '<div class="adm-kv"><span>Position</span><b>' + u.position + '</b></div>' +
      '<div class="adm-kv"><span>Skill</span><b>' + u.skill.toFixed(1) + '</b></div>' +
      '<div class="adm-kv"><span>Points</span><b>' + fmt(u.points) + '</b></div>' +
      '<div class="adm-kv"><span>Wallet</span><b>' + money(u.wallet||0) + '</b></div>' +
      '<div class="adm-kv"><span>Games</span><b>' + u.stats.games + '</b></div>' +
      '<div class="adm-kv"><span>Record</span><b>' + u.stats.wins + 'W · ' + u.stats.losses + 'L</b></div>' +
      '<div class="adm-kv"><span>National rank</span><b>' + (isNational?'#'+u.rankN:'—') + '</b></div></div>' +
    '<div class="sec-title" style="color:#6f7987">Roles &amp; verification</div><div class="adm-card">' +
      '<div class="adm-kv"><span>Verified player</span>' +
        '<button class="btn btn-xs ' + (u.verified?'btn-ok':'btn-ghost') + '" data-act="adminverify" data-id="' + u.id + '">' + (u.verified?'✓ Verified':'Verify') + '</button></div>' +
      '<div class="adm-kv"><span>Trainer role</span>' +
        '<button class="btn btn-xs ' + (isTrainer?'btn-ok':'btn-ghost') + '" data-act="adminrole" data-id="' + u.id + '" data-v="trainer">' + (isTrainer?'Active':'Grant') + '</button></div>' +
      '<div class="adm-kv"><span>Vendor role</span>' +
        '<button class="btn btn-xs ' + (isVendor?'btn-ok':'btn-ghost') + '" data-act="adminrole" data-id="' + u.id + '" data-v="vendor">' + (isVendor?'Active':'Grant') + '</button></div>' +
      '<div class="adm-kv"><span>National squad</span>' +
        '<button class="btn btn-xs ' + (isNational?'btn-ok':'btn-ghost') + '" data-act="adminsquad" data-id="' + u.id + '">' + (isNational?'In squad':'Add') + '</button></div></div>' +
    '<div class="sec-title" style="color:#6f7987">Points</div>' +
    '<div class="adm-card" style="display:flex;gap:10px;align-items:center">' +
      '<button class="btn btn-xs btn-ghost" data-act="adminpoints" data-id="' + u.id + '" data-v="-50">−50</button>' +
      '<div style="flex:1;text-align:center"><b style="font-size:20px;color:#fff">' + fmt(u.points) + '</b><p style="margin-top:2px">current points</p></div>' +
      '<button class="btn btn-xs btn-ghost" data-act="adminpoints" data-id="' + u.id + '" data-v="50">+50</button></div>' +
    '<div class="sec-title" style="color:#6f7987">Wallet</div>' +
    '<div class="adm-card" style="display:flex;gap:10px">' +
      '<button class="btn btn-xs btn-ghost" style="flex:1" data-act="adminwallet" data-id="' + u.id + '" data-v="-10">Debit $10</button>' +
      '<button class="btn btn-xs btn-ghost" style="flex:1" data-act="adminwallet" data-id="' + u.id + '" data-v="10">Credit $10</button></div>' +
    '<div style="margin-top:14px">' +
      '<button class="btn" style="width:100%;background:#EF4444;color:#fff" data-act="admindelete" data-id="' + u.id + '">' + ico('trash','ic-sm') + ' Delete user</button></div>';
}
function adminAdmins(){
  let html = '';
  ADMINS.forEach(a => {
    html += '<div class="adm-card"><div style="display:flex;align-items:center;gap:12px">' + avatar(a,'md') +
      '<div style="flex:1"><h3>' + escapeHTML(a.name) + '</h3><p>' + escapeHTML(a.email) + '</p></div>' +
      '<div style="display:flex;flex-direction:column;gap:5px;align-items:flex-end">' +
        (a.isDefault?'<span class="badge amber">DEFAULT</span>':'') +
        (SESSION.adminId===a.id?'<span class="badge ok">SIGNED IN</span>':'') + '</div></div>' +
      '<div class="adm-kv" style="margin-top:10px"><span>Passcode</span><b>' + escapeHTML(a.pin) + '</b></div></div>';
  });
  html += '<button class="btn btn-primary" style="width:100%;margin-top:6px" data-act="adminadd">' + ico('plus','ic-sm') + ' Add admin account</button>';
  return html;
}
function adminSquad(){
  const squad = DB.users.filter(u => u.rankN != null).sort((a,b) => a.rankN - b.rankN);
  const eligible = DB.users.filter(u => u.rankN == null && u.id !== 'me').sort((a,b) => b.points - a.points).slice(0,8);
  let html = '<div class="sec-title" style="color:#6f7987">Current roster · ' + squad.length + '/8</div>';
  squad.forEach(u => {
    html += '<div class="adm-card" style="display:flex;align-items:center;gap:12px">' +
      '<b style="font-size:17px;color:#FFB020;width:26px">' + u.rankN + '</b>' + avatar(u,'sm') +
      '<div style="flex:1;min-width:0"><h3>' + escapeHTML(u.name) + '</h3><p>' + escapeHTML(u.region) + ' · ' + fmt(u.points) + ' pts</p></div>' +
      '<button class="btn btn-xs" style="background:#EF4444;color:#fff" data-act="adminsquad" data-id="' + u.id + '">Remove</button></div>';
  });
  if (!squad.length) html += '<div class="adm-card"><p>No players currently on the national squad.</p></div>';
  html += '<div class="sec-title" style="color:#6f7987">Eligible players</div>';
  eligible.forEach(u => {
    html += '<div class="adm-card" style="display:flex;align-items:center;gap:12px">' + avatar(u,'sm') +
      '<div style="flex:1;min-width:0"><h3>' + escapeHTML(u.name) + '</h3><p>' + escapeHTML(u.region) + ' · ' + fmt(u.points) + ' pts</p></div>' +
      '<button class="btn btn-xs btn-ghost" data-act="adminsquad" data-id="' + u.id + '">Add</button></div>';
  });
  return html;
}
function adminRankings(){
  const list = DB.users.filter(u => u.id !== 'me').sort((a,b) => b.points - a.points);
  let html = '<div class="notice info" style="margin-bottom:14px">Adjust points in ±50 increments. Every change is logged and reversible.</div>';
  list.forEach((u,i) => {
    html += '<div class="adm-card" style="display:flex;align-items:center;gap:12px">' +
      '<b style="width:22px;color:#6f7987;font-size:13px">' + (i+1) + '</b>' + avatar(u,'sm') +
      '<div style="flex:1;min-width:0"><h3>' + escapeHTML(u.name) + '</h3><p>' + fmt(u.points) + ' pts · ' + escapeHTML(u.city) + '</p></div>' +
      '<div style="display:flex;gap:6px">' +
        '<button class="btn btn-xs btn-ghost" data-act="adminpoints" data-id="' + u.id + '" data-v="-50">−50</button>' +
        '<button class="btn btn-xs btn-ghost" data-act="adminpoints" data-id="' + u.id + '" data-v="50">+50</button></div></div>';
  });
  return html;
}
function adminModeration(){
  const f = state.adminReportFilter;
  let list = DB.reports.slice();
  if (f === 'open') list = list.filter(r => r.status === 'open');
  else if (f === 'resolved') list = list.filter(r => r.status === 'resolved');
  let html = '<div style="display:flex;gap:7px;margin-bottom:12px">' +
    [['open','Open'],['resolved','Resolved'],['all','All']].map(x =>
      '<button class="adm-tab' + (f===x[0]?' on':'') + '" data-act="adminreportfilter" data-v="' + x[0] + '">' + x[1] + '</button>').join('') + '</div>';
  if (!list.length){
    html += '<div class="adm-card"><p style="text-align:center;padding:14px 0">No reports in this view.</p></div>';
    return html;
  }
  list.forEach(r => {
    const rep = userById(r.reporter);
    const tgt = userById(r.target);
    const typeColor = r.type === 'No-show' ? 'amber' : (r.type === 'Harassment' ? 'red' : 'orange');
    html += '<div class="adm-card">' +
      '<div style="display:flex;justify-content:space-between;gap:10px;align-items:flex-start">' +
      '<span class="badge ' + typeColor + '">' + escapeHTML(r.type.toUpperCase()) + '</span>' +
      (r.status === 'resolved' ? '<span class="badge ok">RESOLVED</span>' : '<span class="badge">OPEN</span>') + '</div>' +
      '<p style="margin-top:10px;color:#c3ccd8">' + escapeHTML(rep?rep.name:r.reporter) + ' → ' + escapeHTML(tgt?tgt.name:r.target) + '</p>' +
      '<p style="margin-top:7px">' + escapeHTML(r.text) + '</p>' +
      '<p style="margin-top:8px;color:#5c6675">' + timeAgo(r.ts) + ' ago</p>' +
      (r.status === 'open'
        ? '<div style="display:flex;gap:7px;margin-top:12px">' +
            '<button class="btn btn-xs btn-ghost" style="flex:1" data-act="adminreport" data-id="' + r.id + '" data-v="dismiss">Dismiss</button>' +
            '<button class="btn btn-xs btn-ghost" style="flex:1" data-act="adminreport" data-id="' + r.id + '" data-v="warn">Warn</button>' +
            '<button class="btn btn-xs" style="flex:1;background:#EF4444;color:#fff" data-act="adminreport" data-id="' + r.id + '" data-v="ban">Ban</button></div>'
        : '<div style="margin-top:12px"><button class="btn btn-xs btn-ghost" style="width:100%" data-act="adminreport" data-id="' + r.id + '" data-v="reopen">Reopen report</button></div>') + '</div>';
  });
  return html;
}
function adminRevenue(){
  const kinds = {};
  PLATFORM.history.forEach(h => { kinds[h.kind] = round2((kinds[h.kind]||0) + h.fee); });
  const feeTable = Object.keys(RATES).map(k => ({ k:RATES[k].label, rate:Math.round(RATES[k].rate*100)+'%', rev:kinds[k]||0 }));
  const flatTable = Object.keys(PRICES).map(k => ({ k:PRICES[k].label, rate:'$'+PRICES[k].flat.toFixed(2), rev:kinds[k]||0 }));
  let html = '<div class="adm-card" style="background:radial-gradient(240px 150px at 88% 0%,rgba(255,107,53,.4),transparent 66%),#141821">' +
    '<p>All-time platform revenue</p>' +
    '<div style="font-size:38px;font-weight:900;letter-spacing:-.05em;color:#fff;margin-top:6px">$' + PLATFORM.revenue.toFixed(2) + '</div>' +
    '<p style="margin-top:6px">' + PLATFORM.history.length + ' revenue events recorded this session</p></div>';
  html += '<div class="sec-title" style="color:#6f7987">Percentage fees</div><div class="adm-card">';
  feeTable.forEach(f => { html += '<div class="adm-kv"><span>' + f.k + ' · ' + f.rate + '</span><b>' + money(f.rev) + '</b></div>'; });
  html += '</div>';
  html += '<div class="sec-title" style="color:#6f7987">Flat fees</div><div class="adm-card">';
  flatTable.forEach(f => { html += '<div class="adm-kv"><span>' + f.k + ' · ' + f.rate + '</span><b>' + money(f.rev) + '</b></div>'; });
  html += '</div>';
  html += '<div class="sec-title" style="color:#6f7987">Recent revenue events</div>';
  if (!PLATFORM.history.length) html += '<div class="adm-card"><p>No revenue recorded yet in this session. Complete a paid action as a player to see it here.</p></div>';
  PLATFORM.history.slice(0,20).forEach(h => {
    html += '<div class="adm-card"><div style="display:flex;justify-content:space-between;gap:10px">' +
      '<div><h3 style="font-size:13.5px">' + escapeHTML(h.kind) + '</h3>' +
      '<p>Gross ' + money(h.gross) + ' · provider ' + money(h.net) + '</p></div>' +
      '<b style="color:#25C26E;font-size:15px">+' + money(h.fee) + '</b></div>' +
      '<p style="margin-top:7px">' + timeAgo(h.ts) + ' ago' + (h.sourceId?' · provider '+escapeHTML(h.sourceId):'') + '</p></div>';
  });
  return html;
}
function adminLog(){
  if (!ADMIN.log.length){
    return '<div class="adm-card"><p style="text-align:center;padding:16px 0">No admin actions logged yet. Approve, edit or moderate something and it will appear here with an Undo button.</p></div>';
  }
  let html = '<div class="notice info" style="margin-bottom:14px">Every action is reversible. Reversed entries appear dimmed and can be re-applied.</div>';
  ADMIN.log.slice().reverse().forEach(e => {
    html += '<div class="log-entry' + (e.state==='undone'?' undone':'') + '">' +
      '<div class="lt">' + escapeHTML(e.label) + (e.state==='undone'?' <span class="badge">REVERSED</span>':'') + '</div>' +
      '<div class="lm">' + escapeHTML(e.by||'admin') + ' · ' + timeAgo(e.t) + ' ago</div>' +
      '<div style="margin-top:9px"><button class="btn btn-xs btn-ghost" data-act="adminlogtoggle" data-id="' + e.id + '">' +
      (e.state==='undone'?'Reapply':'Undo') + '</button></div></div>';
  });
  return html;
}

/* 50. ADMIN DISPATCHER */
function adminScreen(){
  const tab = state.adminTab;
  let body = '';
  if (tab === 'overview') body = adminOverview();
  else if (tab === 'analytics') body = adminAnalytics();
  else if (tab === 'approvals') body = adminApprovals();
  else if (tab === 'users') body = adminUsers();
  else if (tab === 'admins') body = adminAdmins();
  else if (tab === 'squad') body = adminSquad();
  else if (tab === 'rankings') body = adminRankings();
  else if (tab === 'moderation') body = adminModeration();
  else if (tab === 'revenue') body = adminRevenue();
  else body = adminLog();
  return '<div class="adm-bar">' +
      ADMIN_TABS.map(t => '<button class="adm-tab' + (tab===t.id?' on':'') + '" data-act="admintab" data-v="' + t.id + '">' + t.label + '</button>').join('') + '</div>' +
    '<div style="padding:16px 16px 30px">' + body + '</div>';
}
function adminAppDetailScreen(p){ return adminAppDetail(p); }
function adminUserEditScreen(p){ return adminUserEdit(p); }

/* 53. SCREEN REGISTRY */
const SCREENS = {
  discover:discoverScreen, tourneys:tourneyListScreen, tourneydetail:tourneyDetailScreen,
  rankings:rankingsScreen, courts:courtsScreen, court:courtDetailScreen,
  player:playerScreen, profileedit:profileEditScreen, idcard:idCardScreen,
  chats:chatsScreen, chat:chatViewScreen, feed:feedScreen, badges:badgesScreen,
  ai:aiScreen, wallet:walletScreen, safety:safetyScreen, notifs:notifsScreen,
  vendorapply:vendorApplyScreen, trainerapply:trainerApplyScreen, courtsubmit:courtSubmitScreen,
  host:hostScreen, more:moreScreen, lost:lostScreen, shop:shopScreen, shopitem:shopItemScreen,
  trainer:trainerDetailScreen, crew:crewDetailScreen,
  trainerdash:trainerDashScreen, crewdash:crewDashScreen,
  admin:adminScreen, adminappdetail:adminAppDetailScreen, adminuseredit:adminUserEditScreen
};
function missingScreen(){
  return '<div class="empty"><div class="e">🤷</div><b>Screen not found</b><span>That page does not exist in this build.</span></div>';
}

/* 54. HEADER + TABS RENDER */
function renderLayers(){
  const l = $('#layers');
  let h = '';
  if (MODAL){
    if (MODAL.kind === 'paywall') h += paywallHTML(MODAL);
    else h += '<div class="scrim" data-act="close-layer"></div><div class="sheet"><div class="sheet-grab2"></div>' + MODAL.html + '</div>';
  }
  l.innerHTML = h;
}

/* 55. RENDER */
let MODAL = null;
let focusKey = null;
function render(){
  const app = $('#app');
  if (!SESSION.mode){
    app.innerHTML = state.gateScreen === 'adminlogin' ? adminLoginScreen() : entryGateScreen();
    renderLayers();
    return;
  }
  const cur = currentScreen();
  const isTop = nav.stack.length === 0;
  const dark = DARK_SCREENS.has(cur.screen);
  let h = '';
  if (cur.screen === 'discover' && isTop && SESSION.mode === 'player') h += discoverFloatHeader();
  else h += headerHTML(cur, dark);
  const fn = SCREENS[cur.screen] || missingScreen;
  const body = fn(cur.params || {});
  const flush = (cur.screen === 'discover' && isTop) || cur.screen === 'chat' || cur.screen === 'admin';
  h += '<main class="main' + (flush?' main-flush':'') + (dark?' dark-bg':'') + '" id="main">' + body + '</main>';
  if (isTop && SESSION.mode === 'player') h += tabbarHTML();
  app.innerHTML = h;
  if (cur.screen === 'chat'){
    const sc = $('#chatScroll');
    if (sc) sc.scrollTop = sc.scrollHeight;
  }
  renderLayers();
  if (focusKey){
    const el = document.querySelector('[data-input="' + focusKey + '"]');
    if (el && el.focus){
      el.focus();
      try { el.setSelectionRange(el.value.length, el.value.length); } catch (err) { /* not a text input */ }
    }
    focusKey = null;
  }
}

/* PAYWALL */
function paywallHTML(m){
  const enough = DB.me.wallet >= m.amount;
  let lines = '';
  if (m.rate){
    lines += '<div class="pay-line"><span>Gross ' + escapeHTML(m.rateLabel||m.title) + '</span><b>' + money(m.amount) + '</b></div>';
    lines += '<div class="pay-line"><span>Platform fee (' + Math.round(m.rate*100) + '%)</span><b>' + money(round2(m.amount*m.rate)) + '</b></div>';
  } else {
    lines += '<div class="pay-line"><span>' + escapeHTML(m.title) + '</span><b>' + money(m.amount) + '</b></div>';
    lines += '<div class="pay-line"><span>Routes to RUBIX platform</span><b>' + money(m.amount) + '</b></div>';
  }
  lines += '<div class="pay-line total"><span>Total due</span><b>' + money(m.amount) + '</b></div>';
  return '<div class="scrim" data-act="close-layer"></div>' +
    '<div class="sheet"><div class="sheet-grab2"></div>' +
      '<h3>' + escapeHTML(m.title) + '</h3><p>' + escapeHTML(m.body) + '</p>' +
      '<div class="pay-box"><div class="row-between">' +
        '<div class="pay-amt ' + (enough?'ok':'bad') + '">' + money(m.amount) + '</div>' +
        '<span class="bal-pill">Wallet ' + money(DB.me.wallet) + '</span></div>' +
        '<div style="margin-top:12px">' + lines + '</div></div>' +
      (enough
        ? '<div style="margin-top:18px;display:flex;gap:10px">' +
            '<button class="btn btn-soft" style="flex:1" data-act="close-layer">Cancel</button>' +
            '<button class="btn btn-gold" style="flex:1.4" data-act="paywall-confirm">Confirm</button></div>'
        : '<div class="notice warn" style="margin-top:16px">Your wallet balance is too low for this action. Top up to continue.</div>' +
          '<div style="margin-top:14px;display:flex;gap:10px">' +
            '<button class="btn btn-soft" style="flex:1" data-act="close-layer">Cancel</button>' +
            '<button class="btn btn-primary" style="flex:1.4" data-act="topup-open">Top up wallet</button></div>') +
    '</div>';
}
function openPaywall(cfg){
  MODAL = Object.assign({ kind:'paywall', amount:0, rate:0 }, cfg);
  renderLayers();
}
function openSheet(html){
  MODAL = { kind:'sheet', html };
  renderLayers();
}
function closeLayer(){ MODAL = null; renderLayers(); }
function topupSheetHTML(){
  const presets = [5,10,25,50];
  return '<h3>Top up wallet</h3>' +
    '<p>Add funds instantly. No fees, no card stored — this is a demo wallet.</p>' +
    '<div class="chips chips-wrap" style="margin-top:16px">' +
      presets.map(p => '<button class="chip orange' + (state.topupPick===p?' on':'') + '" data-act="topup" data-v="' + p + '">$' + p + '</button>').join('') + '</div>' +
    '<div class="pay-box" style="margin-top:16px">' +
      '<div class="pay-line"><span>Amount</span><b>$' + state.topupPick + '.00</b></div>' +
      '<div class="pay-line"><span>Processing fee</span><b>$0.00</b></div>' +
      '<div class="pay-line total"><span>New balance</span><b>' + money(DB.me.wallet + state.topupPick) + '</b></div></div>' +
    '<div style="margin-top:16px"><button class="btn btn-primary" data-act="topup-confirm">Add $' + state.topupPick + '.00</button></div>';
}

/* TOAST */
let toastTimer = null;
function toast(msg){
  const t = $('#toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2100);
}

/* 56. EVENT BUS */
document.addEventListener('click', function(e){
  const el = e.target.closest('[data-act]');
  if (!el) return;
  const act = el.dataset.act;
  const id = el.dataset.id;
  const v = el.dataset.v;

  if (act === 'enterplayer'){
    SESSION.mode = 'player';
    nav.tab = 'discover'; nav.stack = [];
    render();
    setTimeout(() => {
      if (SESSION.mode === 'player' && !nav.stack.length && nav.tab === 'discover' && !state._nearbyShown){
        state._nearbyShown = true;
        openSheet('<h3>A baller is close to you!</h3>' +
          '<p>' + escapeHTML(DB.users[0].name) + ' is 0.4 km away and looking for a run right now. Send a direct invite for $0.99.</p>' +
          '<div class="card" style="margin-top:14px"><div class="row">' + avatar(DB.users[0],'md') +
          '<div class="grow"><div class="t" style="font-size:14px;font-weight:800">' + escapeHTML(DB.users[0].name) + '</div>' +
          '<div class="s tiny">' + DB.users[0].position + ' · ' + DB.users[0].skill.toFixed(1) + ' skill · East Legon</div></div></div></div>' +
          '<div style="display:flex;gap:10px;margin-top:6px">' +
            '<button class="btn btn-soft" style="flex:1" data-act="close-layer">Not now</button>' +
            '<button class="btn btn-primary" style="flex:1.4" data-act="request" data-id="' + DB.users[0].id + '">Invite · $0.99</button></div>');
      }
    }, 3200);
    return;
  }
  if (act === 'enteradmin'){
    state.gateScreen = 'adminlogin';
    state.gateAdminEmail = '';
    state.gateAdminPin = '';
    render();
    return;
  }
  if (act === 'gateback'){ state.gateScreen = 'entry'; render(); return; }
  if (act === 'adminauth'){
    const email = (state.gateAdminEmail||'').trim().toLowerCase();
    const pin = (state.gateAdminPin||'').trim();
    const found = ADMINS.find(a => a.email.toLowerCase() === email && a.pin === pin);
    if (!found){
      const box = $('#loginErr');
      if (box) box.innerHTML = '<div class="err">Invalid operator credentials. Try admin@rubix.app / 1234</div>';
      return;
    }
    SESSION.mode = 'admin';
    SESSION.adminId = found.id;
    state.gateScreen = 'entry';
    nav.tab = 'admin'; nav.stack = [];
    state.adminTab = 'overview';
    render();
    toast('Signed in as ' + found.name);
    return;
  }
  if (act === 'tab'){ setTab(v); return; }
  if (act === 'back'){
    if (state.gateScreen === 'adminlogin'){ state.gateScreen = 'entry'; render(); return; }
    back(); return;
  }
  if (act === 'close-layer'){ closeLayer(); return; }
  if (act === 'noop'){ return; }

  if (act === 'dfilter'){ state.discoverFilter = v; render(); return; }
  if (act === 'player'){ go('player', { id }, 'Player'); return; }
  if (act === 'profile'){ go('player', { id:id||'me' }, 'Profile'); return; }
  if (act === 'court'){ go('court', { id }, 'Court'); return; }
  if (act === 'crew'){ go('crew', { id }, 'Crew'); return; }
  if (act === 'trainer'){ go('trainer', { id }, 'Trainer'); return; }
  if (act === 'chats'){ go('chats', {}, 'Chats'); return; }
  if (act === 'feed'){ go('feed', {}, 'Feed'); return; }
  if (act === 'badges'){ go('badges', {}, 'Badges & Streaks'); return; }
  if (act === 'ai'){ go('ai', {}, 'AI Recommendations'); return; }
  if (act === 'wallet'){ go('wallet', {}, 'Wallet'); return; }
  if (act === 'safety'){ go('safety', {}, 'Trust & Safety'); return; }
  if (act === 'notifs'){ go('notifs', {}, 'Notifications'); return; }
  if (act === 'idcard'){ go('idcard', {}, 'Player ID Card'); return; }
  if (act === 'profileedit'){ state.form = {}; go('profileedit', {}, 'Edit Profile'); return; }
  if (act === 'lost'){ go('lost', {}, 'Lost & Found'); return; }
  if (act === 'shop'){ go('shop', {}, 'Shop'); return; }
  if (act === 'shopitem'){ go('shopitem', { id }, 'Listing'); return; }
  if (act === 'ranks'){ setTab('rankings'); return; }
  if (act === 'vendorapply'){ go('vendorapply', {}, 'Become a Vendor'); return; }
  if (act === 'trainerapply'){ go('trainerapply', {}, 'Become a Trainer'); return; }
  if (act === 'courtsubmit'){ go('courtsubmit', {}, 'Submit a Court'); return; }
  if (act === 'host'){ go('host', {}, 'Host Tournament'); return; }
  if (act === 'trainerdash'){ go('trainerdash', {}, 'Trainer Dashboard'); return; }
  if (act === 'crewdash'){ go('crewdash', {}, 'Crew Dashboard'); return; }
  if (act === 'returnadmin'){ nav.tab = 'admin'; nav.stack = []; render(); return; }

  if (act === 'bookdate'){ state.booking.date = v; state.booking.time = null; render(); return; }
  if (act === 'bookslot'){ state.booking.time = v; render(); return; }
  if (act === 'courtsurface'){ state.courtSurface = (v === 'All' ? null : v); render(); return; }

  if (act === 'request'){
    const u = userById(id);
    if (!u) return;
    if (state.requestsSent[u.id]){ toast('Invite already sent to ' + u.name); return; }
    openPaywall({
      title:'Send run invite',
      body:'Send a direct invite to ' + u.name + ' to run a game. RUBIX charges a $0.99 flat coordination fee per invite.',
      amount:PRICES.requestPlayer.flat, rate:0,
      onConfirm:() => {
        const res = charge('me', { kind:'requestPlayer', amount:0.99, note:'Run invite · ' + u.name });
        if (!res.ok){ toast('Insufficient balance'); return false; }
        state.requestsSent[u.id] = true;
        toast('Invite sent to ' + u.name);
        return true;
      }
    });
    return;
  }
  if (act === 'unlock-chat'){
    const u = userById(id);
    if (!u) return;
    openPaywall({
      title:'Unlock conversation',
      body:'Unlock your thread with ' + u.name + ' permanently. One-time fee per person.',
      amount:PRICES.unlockChat.flat, rate:0,
      onConfirm:() => {
        const res = charge('me', { kind:'unlockChat', amount:1.99, note:'Chat unlock · ' + u.name });
        if (!res.ok){ toast('Insufficient balance'); return false; }
        const c = Chat.ensureThread(u.id);
        c.unlocked = true;
        toast('Conversation unlocked');
        return true;
      }
    });
    return;
  }
  if (act === 'chat'){
    const u = userById(id);
    if (!u) return;
    const c = Chat.ensureThread(u.id);
    if (!c.unlocked){
      openPaywall({
        title:'Unlock conversation',
        body:u.name + ' sent you a message. Unlock this thread to read and reply — one-time $1.99.',
        amount:PRICES.unlockChat.flat, rate:0,
        onConfirm:() => {
          const res = charge('me', { kind:'unlockChat', amount:1.99, note:'Chat unlock · ' + u.name });
          if (!res.ok){ toast('Insufficient balance'); return false; }
          c.unlocked = true;
          toast('Conversation unlocked');
          return true;
        }
      });
      return;
    }
    go('chat', { id:u.id }, u.name);
    return;
  }
  if (act === 'send-msg'){
    const u = userById(id);
    if (!u) return;
    const text = (state.chatMsg||'').trim();
    if (!text){ toast('Type a message first'); return; }
    Chat.send(u.id, text);
    state.chatMsg = '';
    render();
    return;
  }
  if (act === 'book'){
    const c = DB.courts.find(x => x.id === id);
    if (!c) return;
    if (!state.booking.time){ toast('Select a time slot first'); return; }
    const courtFee = c.price;
    const platformFee = round2(courtFee * RATES.court.rate);
    const total = round2(courtFee + platformFee);
    openPaywall({
      title:'Confirm booking',
      body:c.name + ' · ' + state.booking.date + ' at ' + state.booking.time + '. RUBIX takes a 10% platform fee; the venue receives ' + money(courtFee) + '.',
      amount:total, rate:RATES.court.rate, rateLabel:'Court time',
      onConfirm:() => {
        const res = charge('me', { kind:'court', amount:total, rate:RATES.court.rate,
          note:c.name + ' · ' + state.booking.date + ' ' + state.booking.time, sourceId:null });
        if (!res.ok){ toast('Insufficient balance'); return false; }
        c.bookings.push({ user:'me', date:state.booking.date, time:state.booking.time });
        toast('Court booked · ' + state.booking.time);
        return true;
      }
    });
    return;
  }
  if (act === 'book-trainer'){
    const t = userById(id);
    if (!t) return;
    const rate = t.trainerRate || 30;
    const fee = round2(rate * RATES.trainer.rate);
    const total = round2(rate + fee);
    openPaywall({
      title:'Book training session',
      body:'One session with ' + t.name + '. RUBIX takes 12%; ' + t.name.split(' ')[0] + ' receives ' + money(rate) + '.',
      amount:total, rate:RATES.trainer.rate, rateLabel:'Session',
      onConfirm:() => {
        const res = charge('me', { kind:'trainer', amount:total, rate:RATES.trainer.rate,
          note:'Session · ' + t.name, sourceId:t.id });
        if (!res.ok){ toast('Insufficient balance'); return false; }
        toast('Session booked with ' + t.name);
        return true;
      }
    });
    return;
  }
  if (act === 'buy-item'){
    const s = DB.shop.find(x => x.id === id);
    if (!s) return;
    const fee = round2(s.price * RATES.shop.rate);
    const total = round2(s.price + fee);
    openPaywall({
      title:'Confirm purchase',
      body:s.title + ' from the RUBIX marketplace. RUBIX takes 8%; the seller receives ' + money(s.price) + '.',
      amount:total, rate:RATES.shop.rate, rateLabel:'Item price',
      onConfirm:() => {
        const res = charge('me', { kind:'shop', amount:total, rate:RATES.shop.rate,
          note:'Purchase · ' + s.title, sourceId:s.seller });
        if (!res.ok){ toast('Insufficient balance'); return false; }
        toast('Purchased ' + s.title);
        return true;
      }
    });
    return;
  }
  if (act === 'join-crew'){
    const c = DB.crews.find(x => x.id === id);
    if (!c) return;
    DB.me.crews = DB.me.crews || [];
    if (DB.me.crews.indexOf(c.id) >= 0){ toast('You are already a member'); return; }
    if (!c.fee){
      DB.me.crews.push(c.id);
      c.members++;
      toast('Joined ' + c.name);
      render();
      return;
    }
    const fee = c.fee;
    const platformFee = round2(fee * RATES.crew.rate);
    openPaywall({
      title:'Join ' + c.name,
      body:'Monthly crew membership. RUBIX takes 5%; the crew leader receives ' + money(fee - platformFee) + '.',
      amount:fee, rate:RATES.crew.rate, rateLabel:'Membership',
      onConfirm:() => {
        const res = charge('me', { kind:'crew', amount:fee, rate:RATES.crew.rate,
          note:'Crew membership · ' + c.name, sourceId:c.leader });
        if (!res.ok){ toast('Insufficient balance'); return false; }
        DB.me.crews.push(c.id);
        c.members++;
        toast('Joined ' + c.name);
        return true;
      }
    });
    return;
  }
  if (act === 'join-tourney'){
    const t = DB.tourneys.find(x => x.id === id);
    if (!t) return;
    const fee = t.entry;
    const platformFee = round2(fee * RATES.tourney.rate);
    openPaywall({
      title:'Join ' + t.name,
      body:'Entry fee for the ' + t.format + ' bracket. RUBIX takes 15%; ' + money(fee - platformFee) + ' flows into the prize pool.',
      amount:fee, rate:RATES.tourney.rate, rateLabel:'Entry',
      onConfirm:() => {
        const res = charge('me', { kind:'tourney', amount:fee, rate:RATES.tourney.rate,
          note:'Entry · ' + t.name, sourceId:t.host });
        if (!res.ok){ toast('Insufficient balance'); return false; }
        t.teams.push('Marcus Bell');
        t.bracket = Tournaments.buildBracket(t.teams);
        toast('You are in · ' + t.name);
        return true;
      }
    });
    return;
  }
  if (act === 'submit-host'){
    const name = (state.form.hostName||'').trim() || 'Untitled Tournament';
    const entry = Number(state.form.hostEntry || 5);
    const prize = Number(state.form.hostPrize || 60);
    const max = Number(state.form.hostMax || 8);
    const courtId = state.form.hostCourt || DB.courts[0].id;
    openPaywall({
      title:'Host tournament',
      body:name + '. Flat $9.99 host fee, plus RUBIX takes 15% of every entry fee collected.',
      amount:PRICES.tournamentHost.flat, rate:0,
      onConfirm:() => {
        const res = charge('me', { kind:'tournamentHost', amount:9.99, note:'Host fee · ' + name });
        if (!res.ok){ toast('Insufficient balance'); return false; }
        const t = {
          id:uid('t'), name, format:state.hostFormat||'3v3', entry, prize,
          court:courtId, teams:[], maxTeams:max,
          agreeBy:Date.now()+86400e3*7, status:'open', host:'me', seed:uid('ts')
        };
        t.bracket = Tournaments.buildBracket(t.teams);
        DB.tourneys.unshift(t);
        state.form = {};
        toast('Tournament created');
        nav.stack = []; nav.tab = 'tourneys';
        return true;
      }
    });
    return;
  }
  if (act === 'submit-vendor'){
    const name = (state.form.vendorName||'').trim();
    if (!name){ toast('Enter an item name'); return; }
    const price = Number(state.form.vendorPrice||0);
    if (!price){ toast('Enter a price'); return; }
    openPaywall({
      title:'Publish listing',
      body:name + '. Flat $4.99 listing fee, plus 8% commission on the final sale price.',
      amount:PRICES.vendorListing.flat, rate:0,
      onConfirm:() => {
        const res = charge('me', { kind:'vendorListing', amount:4.99, note:'Listing · ' + name });
        if (!res.ok){ toast('Insufficient balance'); return false; }
        DB.pending.vendors.unshift({
          id:uid('pv'), name, category:state.form.vendorCategory||'Sneakers',
          price, condition:state.form.vendorCondition||'Good',
          seller:'me', notes:state.form.vendorNotes||'Submitted via app.', t:Date.now()
        });
        state.form = {};
        toast('Listing submitted for review');
        nav.stack = [];
        return true;
      }
    });
    return;
  }
  if (act === 'topup-open'){ openSheet(topupSheetHTML()); return; }
  if (act === 'topup'){ state.topupPick = Number(v); openSheet(topupSheetHTML()); return; }
  if (act === 'topup-confirm'){
    const amt = Number(state.topupPick||25);
    DB.me.wallet = round2(DB.me.wallet + amt);
    DB.me.tx.unshift({ ts:Date.now(), kind:'topup', amount:amt, fee:0, note:'Wallet top-up' });
    closeLayer();
    toast('Added ' + money(amt) + ' to your wallet');
    render();
    return;
  }
  if (act === 'withdraw'){ toast('Withdrawals open after your first verified payout'); return; }
  if (act === 'paywall-confirm'){
    const m = MODAL;
    if (!m) return;
    const ok = m.onConfirm ? m.onConfirm() : true;
    if (ok === false) return;
    closeLayer();
    render();
    return;
  }

  if (act === 'ranklist'){ state.rankList = v; render(); return; }
  if (act === 'rankregion'){ state.rankRegion = v; render(); return; }
  if (act === 'ranklevel'){ state.rankLevel = v; render(); return; }
  if (act === 'shopfilter'){ state.shopFilter = v; render(); return; }
  if (act === 'lffilter'){ state.lfFilter = v; render(); return; }
  if (act === 'tourneyfilter'){ state.tourneyFilter = v; render(); return; }
  if (act === 'tourney'){ go('tourneydetail', { id }, 'Tournament'); return; }
  if (act === 'like'){ state.feedLikes[id] = !state.feedLikes[id]; render(); return; }
  if (act === 'contact-item'){ toast('The poster has been notified'); return; }
  if (act === 'lfadd'){ toast('Item report submitted to Lost & Found'); return; }

  if (act === 'form-position'){ state.form.position = v; render(); return; }
  if (act === 'form-court'){ state.form.preferredCourt = v; render(); return; }
  if (act === 'form-avail'){ state.form.avail = v; render(); return; }
  if (act === 'form-style'){
    state.form.playstyle = state.form.playstyle || [];
    const i = state.form.playstyle.indexOf(v);
    if (i >= 0) state.form.playstyle.splice(i,1);
    else state.form.playstyle.push(v);
    render();
    return;
  }
  if (act === 'shuffle-photo'){ DB.me.seed = uid('photo'); toast('Profile photo shuffled'); render(); return; }
  if (act === 'profile-save'){
    const f = state.form;
    if (f.name) DB.me.name = f.name;
    if (f.bio != null) DB.me.bio = f.bio;
    if (f.city) DB.me.city = f.city;
    if (f.region) DB.me.region = f.region;
    if (f.position) DB.me.position = f.position;
    if (f.preferredCourt) DB.me.preferredCourt = f.preferredCourt;
    if (f.skill) DB.me.skill = Number(f.skill);
    if (f.avail) DB.me.avail = f.avail;
    if (f.playstyle) DB.me.playstyle = f.playstyle;
    DB.me.initials = initials(DB.me.name);
    state.form = {};
    toast('Profile updated');
    back();
    return;
  }
  if (act === 'vendor-cat'){ state.form.vendorCategory = v; render(); return; }
  if (act === 'vendor-cond'){ state.form.vendorCondition = v; render(); return; }
  if (act === 'court-surface'){ state.form.courtSurface = v; render(); return; }
  if (act === 'host-format'){ state.hostFormat = v; render(); return; }
  if (act === 'host-court'){ state.form.hostCourt = v; render(); return; }
  if (act === 'trainer-court'){
    state.form.trainerCourts = state.form.trainerCourts || [];
    const i = state.form.trainerCourts.indexOf(v);
    if (i >= 0) state.form.trainerCourts.splice(i,1);
    else state.form.trainerCourts.push(v);
    render();
    return;
  }
  if (act === 'submit-trainer'){
    const name = (state.form.trainerName||'').trim();
    if (!name){ toast('Enter a display name'); return; }
    DB.pending.trainers.unshift({
      id:uid('pt'), name, user:'me',
      court:(state.form.trainerCourts && state.form.trainerCourts[0]) || 'h1',
      specialty:state.form.trainerSpecialty||'Skills training',
      rate:Number(state.form.trainerRate||30),
      exp:state.form.trainerExp||'Submitted via app.',
      certs:'—', contact:'me@rubix.app', t:Date.now()
    });
    state.form = {};
    toast('Trainer application submitted');
    back();
    return;
  }
  if (act === 'submit-court'){
    const name = (state.form.courtName||'').trim();
    if (!name){ toast('Enter a court name'); return; }
    DB.pending.courts.unshift({
      id:uid('ph'), name,
      address:state.form.courtAddress||'—',
      surface:state.form.courtSurface||'Indoor',
      price:Number(state.form.courtPrice||20),
      courtCount:Number(state.form.courtCount||2),
      amenities:(state.form.courtAmenities||'Lighting').split(',').map(s => s.trim()).filter(Boolean),
      contact:'me@rubix.app', t:Date.now()
    });
    state.form = {};
    toast('Court submitted for review');
    back();
    return;
  }
  if (act === 'submit-score'){
    const t = DB.tourneys.find(x => x.id === id);
    if (!t) return;
    const ri = Number(el.dataset.r), gi = Number(el.dataset.g);
    const r = rngFrom(t.id + ri + gi);
    const sa = 60 + Math.floor(r()*30);
    const sb = 60 + Math.floor(r()*30);
    Tournaments.recordResult(t, ri, gi, sa, sb);
    toast('Score submitted · ' + sa + '–' + sb);
    render();
    return;
  }
  if (act === 'court-status'){ state.form.courtStatus = v; toast('Court status set to ' + v); render(); return; }
  if (act === 'session-act'){ toast('Session ' + v + ' · updated'); return; }
  if (act === 'crew-req'){ toast('Request ' + v + 'd'); return; }
  if (act === 'toggle'){
    const path = el.dataset.k;
    const parts = path.split('.');
    if (parts.length === 2 && state[parts[0]]) state[parts[0]][parts[1]] = !state[parts[0]][parts[1]];
    render();
    return;
  }
  if (act === 'verify-id'){ state.safety.idVerified = true; toast('ID verified'); render(); return; }
  if (act === 'verify-photo'){ state.safety.photoVerified = true; toast('Photo verified'); render(); return; }
  if (act === 'emergency'){ toast('Emergency contact saved'); return; }
  if (act === 'report-user'){ toast('Report submitted to Trust & Safety'); return; }

  if (act === 'admintab'){ state.adminTab = v; render(); return; }
  if (act === 'adminapptab'){ state.adminAppTab = v; render(); return; }
  if (act === 'adminreportfilter'){ state.adminReportFilter = v; render(); return; }
  if (act === 'adminapp'){ go('adminappdetail', { type:el.dataset.type, id }, 'Application Review'); return; }
  if (act === 'adminuser'){ go('adminuseredit', { id }, 'User Detail'); return; }

  if (act === 'adminapprove' || act === 'adminreject'){
    const type = el.dataset.type;
    const itemId = el.dataset.id;
    const arr = DB.pending[type];
    const idx = arr.findIndex(x => x.id === itemId);
    if (idx < 0){ toast('Item no longer pending'); return; }
    const item = arr[idx];
    const approving = act === 'adminapprove';
    let added = null;
    if (approving){
      if (type === 'vendors'){
        added = { id:uid('s'), title:item.name, price:item.price, condition:item.condition,
          seller:item.seller, category:item.category, place:'Accra', status:'approved', seed:item.id };
      } else if (type === 'crews'){
        added = { id:uid('c'), name:item.name, members:item.members, fee:0, dist:3.0,
          leader:item.leader, hue:260, status:'approved', verified:true, desc:item.notes };
      } else if (type === 'trainers'){
        added = { id:uid('tr'), user:item.user, court:item.court, rate:item.rate, specialty:item.specialty };
      } else {
        added = { id:uid('h'), name:item.name, address:item.address, surface:item.surface,
          price:item.price, courtCount:item.courtCount, hue:190, rating:4.5, dist:3.2,
          status:'approved', amenities:item.amenities, trainers:[], playersHere:[], courtStatus:'open', bookings:[] };
      }
    }
    adminDo(
      () => {
        arr.splice(idx, 1);
        if (type === 'vendors' && added) DB.shop.unshift(added);
        if (type === 'crews' && added) DB.crews.push(added);
        if (type === 'courts' && added) DB.courts.push(added);
        if (type === 'trainers' && added){
          const u = userById(added.user);
          if (u){
            u.roles = u.roles || [];
            if (u.roles.indexOf('trainer') < 0) u.roles.push('trainer');
            u.trainerRate = added.rate; u.specialty = added.specialty; u.coachCourt = added.court;
          }
          const c = DB.courts.find(x => x.id === added.court);
          if (c && c.trainers.indexOf(added.user) < 0) c.trainers.push(added.user);
        }
      },
      () => {
        if (type === 'vendors' && added) DB.shop.splice(DB.shop.indexOf(added), 1);
        if (type === 'crews' && added) DB.crews.splice(DB.crews.indexOf(added), 1);
        if (type === 'courts' && added) DB.courts.splice(DB.courts.indexOf(added), 1);
        arr.splice(idx, 0, item);
      },
      (approving?'Approved ':'Rejected ') + type.replace(/s$/,'') + ' · ' + item.name
    );
    toast(approving ? 'Approved · ' + item.name : 'Rejected · ' + item.name);
    nav.stack = [];
    render();
    return;
  }
  if (act === 'adminverify'){
    const u = userById(id); if (!u) return;
    const before = u.verified;
    adminDo(() => { u.verified = !before; }, () => { u.verified = before; },
      (before?'Unverified ':'Verified ') + u.name);
    toast(before ? 'Verification removed' : 'Player verified');
    render();
    return;
  }
  if (act === 'adminrole'){
    const u = userById(id); if (!u) return;
    const role = v;
    u.roles = u.roles || [];
    const had = u.roles.indexOf(role) >= 0;
    adminDo(
      () => { if (had) u.roles.splice(u.roles.indexOf(role), 1); else u.roles.push(role); },
      () => { if (had) u.roles.push(role); else u.roles.splice(u.roles.indexOf(role), 1); },
      (had?'Revoked ':'Granted ') + role + ' role · ' + u.name
    );
    toast(had ? 'Role revoked' : 'Role granted');
    render();
    return;
  }
  if (act === 'adminsquad'){
    const u = userById(id); if (!u) return;
    const had = u.rankN != null;
    const prev = u.rankN;
    adminDo(
      () => {
        if (had) u.rankN = null;
        else {
          const used = DB.users.filter(x => x.rankN != null).map(x => x.rankN);
          let n = 1; while (used.indexOf(n) >= 0) n++;
          u.rankN = n;
        }
      },
      () => { u.rankN = prev; },
      (had?'Removed from national squad · ':'Added to national squad · ') + u.name
    );
    toast(had ? 'Removed from squad' : 'Added to national squad');
    render();
    return;
  }
  if (act === 'adminpoints'){
    const u = userById(id); if (!u) return;
    const delta = Number(v); const before = u.points;
    adminDo(() => { u.points = Math.max(0, u.points + delta); }, () => { u.points = before; },
      (delta>0?'+':'') + delta + ' pts · ' + u.name);
    toast((delta>0?'+':'') + delta + ' points');
    render();
    return;
  }
  if (act === 'adminwallet'){
    const u = userById(id); if (!u) return;
    const delta = Number(v); const before = u.wallet || 0;
    adminDo(() => { u.wallet = round2(Math.max(0, before + delta)); }, () => { u.wallet = before; },
      (delta>0?'Credited ':'Debited ') + money(Math.abs(delta)) + ' · ' + u.name);
    toast((delta>0?'Credited ':'Debited ') + money(Math.abs(delta)));
    render();
    return;
  }
  if (act === 'admindelete'){
    const u = userById(id); if (!u) return;
    if (u.id === 'me'){ toast('You cannot delete the demo account'); return; }
    const idx = DB.users.indexOf(u);
    adminDo(() => { DB.users.splice(idx, 1); }, () => { DB.users.splice(idx, 0, u); },
      'Deleted user · ' + u.name);
    toast('User deleted');
    nav.stack = [];
    render();
    return;
  }
  if (act === 'adminadd'){
    const n = ADMINS.length + 1;
    const a = { id:uid('adm'), name:'Operator ' + n, initials:'O' + n, hue:20 + n*30,
      email:'operator' + n + '@rubix.app', pin:String(1000 + Math.floor(Math.random()*8999)), isDefault:false };
    adminDo(() => { ADMINS.push(a); }, () => { ADMINS.splice(ADMINS.indexOf(a), 1); },
      'Created admin account · ' + a.email);
    toast(a.email + ' / ' + a.pin);
    render();
    return;
  }
  if (act === 'adminreport'){
    const r = DB.reports.find(x => x.id === id);
    if (!r) return;
    const action = v; const prev = r.status;
    if (action === 'reopen'){
      adminDo(() => { r.status = 'open'; }, () => { r.status = prev; }, 'Reopened report · ' + r.type);
      toast('Report reopened');
      render();
      return;
    }
    adminDo(
      () => { r.status = 'resolved'; r.resolution = action; },
      () => { r.status = prev; delete r.resolution; },
      'Resolved report (' + action + ') · ' + r.type
    );
    toast('Report ' + action + 'ed');
    render();
    return;
  }
  if (act === 'adminlogtoggle'){ adminToggleLog(id); return; }
  if (act === 'logoutadmin'){
    SESSION.mode = 'player'; SESSION.adminId = null;
    nav.tab = 'more'; nav.stack = [];
    render();
    toast('Signed out of console');
    return;
  }
});

/* 57. INPUT HANDLERS */
function setInput(path, val){
  const parts = path.split('.');
  if (parts.length === 1) state[parts[0]] = val;
  else {
    if (!state[parts[0]]) state[parts[0]] = {};
    state[parts[0]][parts[1]] = val;
  }
}
document.addEventListener('input', function(e){
  const el = e.target.closest('[data-input]');
  if (!el) return;
  const key = el.dataset.input;
  setInput(key, el.value);
  if (el.dataset.live){ focusKey = key; render(); }
});
document.addEventListener('change', function(e){
  const el = e.target.closest('[data-input]');
  if (!el) return;
  setInput(el.dataset.input, el.value);
});
document.addEventListener('keydown', function(e){
  if (e.key !== 'Enter') return;
  const el = e.target.closest('[data-input="chatMsg"]');
  if (!el) return;
  e.preventDefault();
  const btn = document.querySelector('[data-act="send-msg"]');
  if (btn) btn.click();
});

/* 58. BOOT */
seed();
render();