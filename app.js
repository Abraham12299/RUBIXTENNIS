/* ============================================================
   RUBIX TENNIS — app.js
   Full application logic.
   Sections:
     1. Icons
     2. Utilities
     3. Data models (DB, ADMINS, SEED)
     4. Session & Wallet engine (monetization)
     5. Tournament engine
     6. Chat engine
     7. Match verification engine
     8. AI recommendations
     9. Weather
    10. Router + Header + Tabs
    11. Screens (Player side)
    12. Screens (Admin side)
    13. Event bus
    14. Boot
   ============================================================ */

/* ============================================================
   1. ICONS
   ============================================================ */
const ICONS = {
  pin:'<path d="M12 21.5s7-6 7-11.5a7 7 0 1 0-14 0c0 5.5 7 11.5 7 11.5Z"/><circle cx="12" cy="10" r="2.6"/>',
  trophy:'<path d="M7.5 4h9v5.5a4.5 4.5 0 0 1-9 0V4Z"/><path d="M7.5 5.5H4.5v1.8a3.2 3.2 0 0 0 3.2 3.2M16.5 5.5h3v1.8a3.2 3.2 0 0 1-3.2 3.2"/><path d="M12 14v3.5M9 20.5h6M10.2 17.5h3.6"/>',
  ball:'<circle cx="12" cy="12" r="9"/><path d="M5.3 6.4A9 9 0 0 1 12 21M18.7 6.4A9 9 0 0 0 12 21"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4.5 20.5c0-3.9 3.4-6 7.5-6s7.5 2.1 7.5 6"/>',
  grid:'<rect x="3.5" y="3.5" width="7" height="7" rx="2.2"/><rect x="13.5" y="3.5" width="7" height="7" rx="2.2"/><rect x="3.5" y="13.5" width="7" height="7" rx="2.2"/><rect x="13.5" y="13.5" width="7" height="7" rx="2.2"/>',
  back:'<path d="M14.5 5.5 8 12l6.5 6.5"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="M20.5 20.5 16.5 16.5"/>',
  star:'<path d="m12 3.5 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17.5l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3.5Z"/>',
  chev:'<path d="M9.5 5.5 16 12l-6.5 6.5"/>',
  plus:'<path d="M12 5.5v13M5.5 12h13"/>',
  minus:'<path d="M5.5 12h13"/>',
  send:'<path d="M20.5 3.5 3.5 10.5l7 2.5 2.5 7 7.5-16.5Z"/>',
  chat:'<path d="M20.5 12c0 4.1-3.8 7.4-8.5 7.4-1 0-2-.15-2.9-.42L4.5 20.5l1.3-3.6A6.9 6.9 0 0 1 3.5 12C3.5 7.9 7.3 4.6 12 4.6s8.5 3.3 8.5 7.4Z"/>',
  check:'<path d="M5 12.8 9.6 17.4 19 7.5"/>',
  calendar:'<rect x="3.5" y="5.5" width="17" height="15" rx="3.5"/><path d="M3.5 10.5h17M8.5 3.5v4M15.5 3.5v4"/>',
  bolt:'<path d="M13.5 3 5 13.5h6L10.5 21 19 10.5h-6L13.5 3Z"/>',
  shield:'<path d="M12 3.5 5 6.5v5c0 4.4 3 8 7 9.5 4-1.5 7-5.1 7-9.5v-5l-7-3Z"/>',
  shield2:'<path d="M12 3.5 5 6.5v5c0 4.4 3 8 7 9.5 4-1.5 7-5.1 7-9.5v-5l-7-3Z"/><path d="m9 12 2 2 4-4"/>',
  gift:'<rect x="3.5" y="8.5" width="17" height="12" rx="3"/><path d="M3.5 12.5h17M12 8.5v12"/><path d="M12 8.5S10.5 4 8 4a2.2 2.2 0 0 0 0 4.5M12 8.5S13.5 4 16 4a2.2 2.2 0 0 1 0 4.5"/>',
  settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>',
  undo:'<path d="M3.5 8.5h10a6.5 6.5 0 0 1 0 13H8"/><path d="M8 4 3.5 8.5 8 13"/>',
  redo:'<path d="M20.5 8.5h-10a6.5 6.5 0 0 0 0 13H16"/><path d="M16 4l4.5 4.5L16 13"/>',
  trash:'<path d="M4.5 6.5h15M9.5 6.5V5a1.5 1.5 0 0 1 1.5-1.5h2A1.5 1.5 0 0 1 14.5 5v1.5M6.5 6.5 7.5 20a2 2 0 0 0 2 1.9h5a2 2 0 0 0 2-1.9l1-13.5"/>',
  edit:'<path d="M12 20.5h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7.5 18.5l-4 1 1-4 12-12Z"/>',
  camera:'<path d="M4.5 7.5h3l2-2.5h5l2 2.5h3a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18V9a1.5 1.5 0 0 1 1.5-1.5Z"/><circle cx="12" cy="13" r="3.5"/>',
  users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.5 3-5.5 6.5-5.5s6.5 2 6.5 5.5"/><circle cx="17" cy="9" r="3"/><path d="M22 19c0-2.8-2.2-4.5-5-4.5"/>',
  lock:'<rect x="4.5" y="10.5" width="15" height="10" rx="2.5"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/>',
  compass:'<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/>',
  power:'<path d="M18.4 6.6a9 9 0 1 1-12.8 0"/><path d="M12 3v9"/>',
  clipboard:'<rect x="5.5" y="4.5" width="13" height="16" rx="2.5"/><path d="M9 4.5V3.5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 3.5v1M9 10.5h6M9 14.5h4"/>',
  megaphone:'<path d="M3.5 11v2a1.5 1.5 0 0 0 1.5 1.5h1.5L11 18v-12L6.5 9.5H5A1.5 1.5 0 0 0 3.5 11Z"/><path d="M15 8.5a4.5 4.5 0 0 1 0 7M18 6a8 8 0 0 1 0 12"/>',
  wallet:'<rect x="3.5" y="6.5" width="17" height="13" rx="3"/><path d="M3.5 10.5h17M16 15h1.5"/>',
  cloud:'<path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.5A3.5 3.5 0 0 1 19 18H7Z"/>',
  fire:'<path d="M12 21c3.9 0 7-2.6 7-6.5 0-3-2-4.5-3-6.5-1 3-2.5 3.5-3 2 .5-3-1-5.5-3-7-.5 3-3 4-3 6.5S5.5 14 5 15c0 3.5 3.1 6 7 6Z"/>',
  image:'<rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><circle cx="9" cy="10" r="1.7"/><path d="m4.5 17 5-5 4 4 3-2.5 3.5 3.5"/>',
  filter:'<path d="M3.5 6.5h17M6.5 12h11M10 17.5h4"/>',
  alert:'<path d="M12 3.5 3 20h18L12 3.5Z"/><path d="M12 9.5v4M12 17h0"/>',
  heart:'<path d="M12 20.5s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10.5c0 5.5-7 10-7 10Z"/>',
  comment:'<path d="M20.5 12c0 4.1-3.8 7.4-8.5 7.4-1 0-2-.15-2.9-.42L4.5 20.5l1.3-3.6A6.9 6.9 0 0 1 3.5 12C3.5 7.9 7.3 4.6 12 4.6s8.5 3.3 8.5 7.4Z"/>',
  share:'<circle cx="6" cy="12" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><path d="M8.5 10.5 15.5 7M8.5 13.5l7 3.5"/>',
  block:'<circle cx="12" cy="12" r="9"/><path d="m5.5 5.5 13 13"/>',
  flag:'<path d="M5 21V4M5 4h13l-2.5 4L18 12H5"/>',
  chart:'<path d="M3.5 20.5h17"/><rect x="5.5" y="12" width="3" height="6" rx="1"/><rect x="10.5" y="7" width="3" height="11" rx="1"/><rect x="15.5" y="3" width="3" height="15" rx="1"/>',
  smartphone:'<rect x="6.5" y="3.5" width="11" height="17" rx="2.5"/><path d="M11 18h2"/>',
  mail:'<rect x="3.5" y="5.5" width="17" height="13" rx="2.5"/><path d="m4.5 7.5 7.5 5 7.5-5"/>',
  bell:'<path d="M18 16V11a6 6 0 1 0-12 0v5l-2 3h16l-2-3ZM10 21h4"/>',
  moon:'<path d="M20 15A8 8 0 0 1 9 4a9 9 0 1 0 11 11Z"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  rainfall:'<path d="M7 14a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.5A3.5 3.5 0 0 1 19 14"/><path d="M8 18l-1 2M12 18l-1 2M16 18l-1 2"/>',
  key:'<circle cx="8" cy="14.5" r="3.5"/><path d="m10.5 12 8-8M16.5 6l2 2M14.5 8l2 2"/>',
  briefcase:'<rect x="3.5" y="7.5" width="17" height="12" rx="2.5"/><path d="M9 7.5v-2a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 5.5v2M3.5 13h17"/>',
  crown:'<path d="M3 8.5l3 9h12l3-9-5 3-4-6-4 6-5-3Z"/>',
  gift2:'<rect x="3.5" y="8.5" width="17" height="12" rx="2.5"/><path d="M3.5 13h17M12 8.5v12M12 8.5S10.5 4 8 4a2.2 2.2 0 0 0 0 4.5M12 8.5S13.5 4 16 4a2.2 2.2 0 0 1 0 4.5"/>'
};
function ico(n, cls){
  return '<svg class="'+(cls||'')+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round">'+(ICONS[n]||'')+'</svg>';
}

/* ============================================================
   2. UTILITIES
   ============================================================ */
const $ = (sel, root) => (root || document).querySelector(sel);
const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
const fmt = (n) => n.toLocaleString();
const money = (n) => '$' + (Math.round(n*100)/100).toFixed(2).replace(/\.00$/, '');
const now = () => Date.now();
const uid = (p) => (p || 'x') + Math.random().toString(36).slice(2,9) + Date.now().toString(36).slice(-4);
const daysFromNow = (d) => new Date(now() + d*86400000);
const fmtDate = (d) => new Date(d).toLocaleDateString('en', {month:'short', day:'numeric'});
const timeAgo = (ts) => {
  const s = Math.floor((now() - ts)/1000);
  if (s < 60) return 'just now';
  if (s < 3600) return Math.floor(s/60) + 'm ago';
  if (s < 86400) return Math.floor(s/3600) + 'h ago';
  return Math.floor(s/86400) + 'd ago';
};
const escapeHTML = (s) => String(s).replace(/[&<>"']/g, c => ({
  '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
}[c]));

/* ============================================================
   3. DATA MODELS
   ============================================================ */
function img(seed, w, h){
  return 'https://picsum.photos/seed/rubix-' + encodeURIComponent(seed) + '/' + w + '/' + h;
}

/* ---- Platform owner config (YOU) ---- */
const PLATFORM = {
  owner: 'RUBIX Ventures',
  feePct: {
    request: 0,        // paid flat fee
    chat: 0,           // paid flat fee
    court: 10,         // % of booking
    coach: 12,         // % of lesson
    tournament: 15,    // % of entry fee
    vendorListing: 0,  // flat fee for listing
    shopSale: 8,       // % of marketplace sale
    communityJoin: 5   // % of paid community subscription
  },
  flatFees: {
    requestPlayer: 0.99,     // send request to a player
    unlockChat: 1.99,        // unlock a chat thread
    vendorListing: 4.99,     // publish one item to shop (per listing)
    tournamentHost: 9.99,    // host a tournament
    communityCreate: 14.99,  // create a community
    priorityBooking: 2.99    // priority court slot
  },
  /* All-time platform revenue — visible to admin only */
  revenue: 0,
  history: []  // { ts, kind, gross, fee, net, sourceId }
};

const DB = {
  users: [],
  courts: [],
  communities: [],
  shop: [],
  lostFound: [],
  tournaments: [],
  chats: [],
  feed: [],
  reports: [],
  transactions: [],  // wallet transactions per user
  pending: { vendors:[], communities:[], coaches:[], courts:[] }
};

const ADMINS = [
  { id:'admin', email:'admin@rubix.app', pin:'1234', name:'Administrator',
    initials:'AD', hue:0, photo:42, isDefault:true, createdAt:'2024-01-01', lastLogin:null }
];

function mkUser(o){
  const initials = (o.name || '? ?').split(' ').map(w => w[0]).slice(0,2).join('').toUpperCase();
  return Object.assign({
    id: o.id, name: o.name, initials,
    hue: o.hue != null ? o.hue : 150,
    city: o.city || 'Accra', region: o.region || 'Greater Accra',
    level: o.level || '3.5', hand: o.hand || 'Right',
    surface: o.surface || 'Hard', club: o.club || 'RUBIX Club',
    status: o.status || 'Available now', avail: o.avail || 'on',
    role:'user', vendorStatus:'none',
    verified:false, idVerified:false, photoVerified:false,
    bio:'', interests:['Singles','Social'],
    memberSince: o.memberSince || '2024',
    idNumber: o.idNumber || 'RT-' + String(1000 + Math.floor(Math.random()*8999)),
    points: o.points || 800, dist: o.dist || 500,
    isNational:false, rankN:null, rankG:null,
    move:'up', moveBy:1,
    coachCourt:null, communityId:null,
    wallet: o.wallet != null ? o.wallet : 0,
    earnings: 0,
    streaks:{ current:0, longest:0 },
    badges:[],
    notifPrefs:{ push:true, email:false, nearby:true, requests:true, chat:true,
      bookings:true, community:true, quietHours:false },
    safety:{ emergencyContact:'', shareLocationBeforeMatch:true, blocked:[] },
    stats:{ played:0, wins:0, losses:0 },
    matches:[],
    photo:(Math.random()*1000)|0
  }, o);
}

/* ---- ME ---- */
DB.users.push(mkUser({
  id:'me', name:'Alex Rivera', hue:158, city:'Accra', region:'Greater Accra',
  level:'4.0', hand:'Right', surface:'Hard', status:'Available now', avail:'on',
  bio:'Competitive club player. Love hard courts and long rallies. Always up for a hit.',
  interests:['Singles','Doubles','Social'], memberSince:'Mar 2024', idNumber:'RT-0001',
  points:2140, dist:0, verified:true, idVerified:true, photoVerified:true,
  wallet: 24.50, earnings: 0,
  streaks:{ current: 3, longest: 8 },
  badges:['first-match','5-matches','social-butterfly']
}));

/* ---- Players ---- */
const RAW = [
  {id:'p1',name:'Maya Okafor',hue:150,level:'4.5',dist:120,status:'Available now',avail:'on',hand:'Right',surface:'Hard',region:'Greater Accra',city:'East Legon',points:2450,isNational:true,rankN:4,move:'up',moveBy:3,communityId:'k1',earnings:120},
  {id:'p2',name:'Diego Marín',hue:18,level:'4.0',dist:240,status:'In 1 hour',avail:'soon',hand:'Left',surface:'Clay',region:'Greater Accra',city:'Osu',points:1980,isNational:true,rankN:6,move:'up',moveBy:1},
  {id:'p3',name:'Aiko Tanaka',hue:280,level:'5.0',dist:480,status:'Available now',avail:'on',hand:'Right',surface:'Hard',region:'Greater Accra',city:'Airport Hills',points:3120,isNational:true,rankN:2,move:'down',moveBy:1},
  {id:'p4',name:'Sam Whitfield',hue:210,level:'3.5',dist:90,status:'Busy',avail:'off',hand:'Right',surface:'Grass',region:'Central',city:'Cape Coast',points:1120,move:'down',moveBy:2,role:'coach',coachCourt:'c1'},
  {id:'p5',name:'Lena Fischer',hue:330,level:'4.5',dist:350,status:'Available now',avail:'on',hand:'Left',surface:'Clay',region:'Greater Accra',city:'Labone',points:2510,isNational:true,rankN:3,move:'up',moveBy:4,communityId:'k3'},
  {id:'p6',name:'Kwame Mensah',hue:96,level:'4.0',dist:620,status:'Tomorrow',avail:'soon',hand:'Right',surface:'Hard',region:'Ashanti',city:'Kumasi',points:1740,isNational:true,rankN:7,move:'up',moveBy:2},
  {id:'p7',name:'Priya Raman',hue:255,level:'3.5',dist:180,status:'Available now',avail:'on',hand:'Right',surface:'Clay',region:'Greater Accra',city:'Madina',points:1290,move:'down',moveBy:1},
  {id:'p8',name:'Noah Bergström',hue:195,level:'5.5',dist:900,status:'Available now',avail:'on',hand:'Right',surface:'Hard',region:'Greater Accra',city:'Cantonments',points:3880,isNational:true,rankN:1,move:'up',moveBy:1},
  {id:'p9',name:'Zara Haddad',hue:42,level:'4.0',dist:430,status:'In 30 min',avail:'soon',hand:'Left',surface:'Hard',region:'Northern',city:'Tamale',points:1830,isNational:true,rankN:8,move:'down',moveBy:3},
  {id:'p10',name:'Tomás Silva',hue:6,level:'3.0',dist:760,status:'Available now',avail:'on',hand:'Right',surface:'Clay',region:'Central',city:'Winneba',points:860,move:'up',moveBy:5},
  {id:'p11',name:'Ivy Chen',hue:310,level:'4.5',dist:250,status:'Busy',avail:'off',hand:'Right',surface:'Hard',region:'Ashanti',city:'Obuasi',points:2290,isNational:true,rankN:5,move:'down',moveBy:1},
  {id:'p12',name:'Omar Diallo',hue:170,level:'3.5',dist:150,status:'Available now',avail:'on',hand:'Right',surface:'Hard',region:'Greater Accra',city:'Teshie',points:1350,move:'up',moveBy:2}
];
RAW.forEach(p => DB.users.push(mkUser(p)));

function recomputeGeneralRanks(){
  const g = DB.users.filter(u => u.role !== 'admin' && !u.isNational && u.id !== 'me')
    .sort((a,b) => b.points - a.points);
  g.forEach((u,i) => u.rankG = i + 1);
}
recomputeGeneralRanks();

/* ---- Courts ---- */
DB.courts = [
  {id:'c1',name:'Riverside Tennis Club',rating:4.8,price:18,dist:400,surface:'Hard',courtCount:6,hue:152,
   status:'approved',address:'12 Riverside Drive, East Legon',
   amenities:['Floodlights','Free parking','Pro shop','Locker rooms','Café'],
   coaches:[
     {id:'co1',userId:'p4',name:'Coach Nana A.',rate:35,spec:'Junior & adult fundamentals',exp:'12 yrs',verified:true},
     {id:'co2',userId:'p6',name:'Coach Elena R.',rate:42,spec:'Serve mechanics · WTA prep',exp:'9 yrs',verified:true}
   ], playersHere:['p1','p5','p7'], courtStatus:'open',
   bookings:[
     {id:'b1',userId:'me', time:'07:00', duration:'90 min', status:'upcoming', date:'Today'},
     {id:'b2',userId:'p1', time:'09:00', duration:'60 min', status:'active', date:'Today'},
     {id:'b3',userId:'p2', time:'11:30', duration:'60 min', status:'upcoming', date:'Today'},
     {id:'b4',userId:'p5', time:'15:00', duration:'90 min', status:'completed', date:'Today'}
   ]},
  {id:'c2',name:'Northgate Park Courts',rating:4.3,price:10,dist:700,surface:'Hard',courtCount:4,hue:96,
   status:'approved',address:'Northgate Park, Osu',
   amenities:['Floodlights','Public access','Water fountain'],
   coaches:[{id:'co3',userId:'p10',name:'Coach Kwesi B.',rate:28,spec:'Cardio tennis · Doubles tactics',exp:'6 yrs',verified:true}],
   playersHere:['p2','p9'], courtStatus:'open', bookings:[]},
  {id:'c3',name:'Clay Court Academy',rating:4.9,price:26,dist:1200,surface:'Clay',courtCount:8,hue:18,
   status:'approved',address:'7 Akosombo Rd, Labone',
   amenities:['Clay courts','Coaching academy','Physio','Lounge','Locker rooms'],
   coaches:[
     {id:'co4',userId:'p3',name:'Coach Marta L.',rate:55,spec:'Clay movement · ITF level',exp:'16 yrs',verified:true},
     {id:'co5',userId:'p11',name:'Coach Yaw D.',rate:40,spec:'Fitness & footwork',exp:'10 yrs',verified:true}
   ], playersHere:['p3','p6'], courtStatus:'open', bookings:[]},
  {id:'c4',name:'Sunset Racket Center',rating:4.6,price:22,dist:900,surface:'Indoor Hard',courtCount:5,hue:330,
   status:'approved',address:'88 Ring Road Central',
   amenities:['Indoor','Climate control','Pro shop','Bar','Showers'],
   coaches:[{id:'co6',userId:'p7',name:'Coach Ravi S.',rate:45,spec:'Video analysis · Match strategy',exp:'11 yrs',verified:true}],
   playersHere:['p8','p11','p12'], courtStatus:'open', bookings:[]},
  {id:'c5',name:'Harborview Courts',rating:4.1,price:14,dist:1600,surface:'Hard',courtCount:3,hue:195,
   status:'approved',address:'Harbour Rd, Tema',
   amenities:['Sea view','Floodlights','Free parking'],
   coaches:[{id:'co7',userId:'p12',name:'Coach Adjoa M.',rate:30,spec:'Beginners & kids',exp:'5 yrs',verified:false}],
   playersHere:['p4','p10'], courtStatus:'open', bookings:[]}
];

/* ---- Communities ---- */
DB.communities = [
  {id:'k1',name:'RUBIX Tennis Community',members:1240,dist:300,hue:150,desc:'Weekly socials · All levels',
   verified:'approved',createdBy:'p1',founded:'2023', events:3, pendingMembers:2, monthlyFee:2.99},
  {id:'k2',name:'Downtown Tennis League',members:480,dist:800,hue:255,desc:'Competitive ladder · Season 4',
   verified:'approved',createdBy:'p3',founded:'2024', events:1, pendingMembers:0, monthlyFee:0},
  {id:'k3',name:'Weekend Doubles Crew',members:156,dist:1100,hue:30,desc:'Sat & Sun doubles only',
   verified:'approved',createdBy:'p5',founded:'2024', events:2, pendingMembers:1, monthlyFee:0}
];

/* ---- Shop ---- */
DB.shop = [
  {id:'s1',title:'Wilson Pro Staff 97 v14',price:149,cond:'Used · Excellent',emoji:'🎾',hue:150,sellerId:'p1',place:'East Legon · 120 m',status:'approved'},
  {id:'s2',title:'Babolat Pure Aero 2023',price:179,cond:'Used · Good',emoji:'🎾',hue:18,sellerId:'p2',place:'Osu · 240 m',status:'approved'},
  {id:'s3',title:'Nike Vapor Cage 4 (UK 9)',price:65,cond:'New · Boxed',emoji:'👟',hue:210,sellerId:'p4',place:'Cape Coast',status:'approved'},
  {id:'s4',title:'Tecnifibre X-One String Set',price:18,cond:'New',emoji:'🧵',hue:280,sellerId:'p3',place:'Airport Hills',status:'approved'},
  {id:'s5',title:'Head Radical 12R Tour Bag',price:85,cond:'Used · Great',emoji:'🎒',hue:330,sellerId:'p5',place:'Labone · 350 m',status:'approved'},
  {id:'s6',title:'Yonex Ezone 98',price:160,cond:'Used · Excellent',emoji:'🎾',hue:96,sellerId:'p6',place:'Kumasi',status:'approved'},
  {id:'s7',title:'Ball Basket (72 balls)',price:40,cond:'Used',emoji:'🧺',hue:42,sellerId:'p7',place:'Madina · 180 m',status:'approved'},
  {id:'s8',title:'Adidas Barricade 2023',price:70,cond:'New · Boxed',emoji:'👟',hue:6,sellerId:'p9',place:'Tamale',status:'approved'}
];

/* ---- Lost & Found ---- */
DB.lostFound = [
  {id:'l1',type:'lost',title:'Black Wilson racket bag',emoji:'🎒',hue:210,place:'Riverside Tennis Club',time:'2h ago',note:'Has my keys and two rackets inside. Reward offered!'},
  {id:'l2',type:'found',title:'Blue water bottle',emoji:'💧',hue:195,place:'Court 3, Northgate Park',time:'5h ago',note:'Left it with the front desk.'},
  {id:'l3',type:'lost',title:'Keys with green keyring',emoji:'🔑',hue:96,place:'Sunset Racket Center',time:'1d ago',note:'Probably near the changing rooms.'},
  {id:'l4',type:'found',title:'Babolat racket (grip worn)',emoji:'🎾',hue:18,place:'Clay Court Academy',time:'2d ago',note:'Handed to reception.'}
];

/* ---- Tournaments ---- */
function seedTourneys(){
  const d = (days) => now() + days*86400000;
  DB.tournaments = [
    { id:'t1', name:'Riverside Doubles Open', hostId:'p1', format:'doubles-elim',
      entry:5, prize:60, maxTeams:8, courts:'c1', hue:150, status:'open',
      created: now() - 2*86400000, agreeBy: d(7),
      teamSize:2,
      teams:[
        { id:'tt1', name:'Okafor / Fischer', members:['p1','p5'], joined: now()-1*86400000 },
        { id:'tt2', name:'Marín / Raman',   members:['p2','p7'], joined: now()-1*86400000 + 3600000 },
        { id:'tt3', name:'Tanaka / Chen',   members:['p3','p11'],joined: now()-1*86400000 + 7200000 }
      ],
      bracket:null,
      completed:false
    },
    { id:'t2', name:'Weekend Social Doubles', hostId:'p5', format:'doubles-roundrobin',
      entry:3, prize:25, maxTeams:6, courts:'c3', hue:330, status:'open',
      created: now() - 1*86400000, agreeBy: d(6),
      teamSize:2,
      teams:[
        { id:'tt4', name:'Fischer / Bergström', members:['p5','p8'], joined: now()-12*3600000 }
      ],
      bracket:null, completed:false },
    { id:'t3', name:'Sunset Singles Ladder', hostId:'p8', format:'singles-elim',
      entry:4, prize:40, maxTeams:8, courts:'c4', hue:195, status:'draft',
      created: now() - 4*3600000, agreeBy: d(7),
      teamSize:1,
      teams:[],
      bracket:null, completed:false }
  ];
}
seedTourneys();

/* ---- Chats ---- */
function seedChats(){
  const d = (m) => now() - m*60000;
  DB.chats = [
    { id:'ch1', withId:'p1', unlocked:true,
      messages:[
        { id:uid('m'), from:'me',  text:'Hey Maya! Saw you\'re nearby — up for a hit this week?', ts: d(180) },
        { id:'m2',        from:'p1',text:'Hey Alex! Yeah definitely. Thursday 6pm at Riverside?', ts: d(175) },
        { id:'m3',        from:'me', text:'Perfect, booking us a court now.', ts: d(170) }
      ], lastRead: now() - 3600000 },
    { id:'ch2', withId:'p3', unlocked:false,
      messages:[
        { id:'m4', from:'p3', text:'Hi Alex — I can coach you on serve mechanics. Want to try a session?', ts: d(240) }
      ], lastRead: 0 },
    { id:'ch3', withId:'p5', unlocked:true,
      messages:[
        { id:'m5', from:'p5', text:'Doubles crew is short one — Sunday 10am?', ts: d(60) }
      ], lastRead: 0 }
  ];
}
seedChats();

/* ---- Feed ---- */
function seedFeed(){
  DB.feed = [
    { id:'f1', authorId:'p1', type:'win',
      text:'Won 6-4 6-3 against Diego at Riverside this morning. Court was 🔥',
      media:true, likes:['p2','p5','p7','p11'], comments:3, ts: now()-1800000 },
    { id:'f2', authorId:'p5', type:'joined',
      text:'Joined Weekend Doubles Crew — looking for a 4th for Saturday!',
      media:false, likes:['me','p1'], comments:1, ts: now()-10800000 },
    { id:'f3', authorId:'p8', type:'achievement',
      text:'Just hit a 12-match winning streak 🏆',
      media:false, likes:['p1','p2','p3','p5','p7','p11'], comments:8, ts: now()-21600000 },
    { id:'f4', authorId:'p3', type:'post',
      text:'Sunrise session at Clay Academy. Courts are in beautiful condition — highly recommend.',
      media:true, likes:['p1','p5'], comments:2, ts: now()-43200000 }
  ];
}
seedFeed();

/* ---- Reports ---- */
DB.reports = [
  { id:'r1', reporterId:'p5', targetId:'p10', type:'noshow',
    text:'Didn\'t show up for confirmed match on 15 Jun. No message.',
    ts: now()-3600000, status:'open' },
  { id:'r2', reporterId:'p3', targetId:'p12', type:'fake',
    text:'Profile photo doesn\'t match the person I met at the court.',
    ts: now()-7200000, status:'open' }
];

/* ---- Transactions ---- */
DB.transactions = [
  { id:'tx1', userId:'me', kind:'topup', amount: 30,  ts: now()-7*86400000, note:'Wallet top-up' },
  { id:'tx2', userId:'me', kind:'court-booking', amount: -18, ts: now()-6*86400000, note:'Riverside · 90 min' },
  { id:'tx3', userId:'me', kind:'chat-unlock', amount: -1.99, ts: now()-3*86400000, note:'Unlock chat with Maya' },
  { id:'tx4', userId:'me', kind:'tournament-entry', amount: -5, ts: now()-2*86400000, note:'Riverside Doubles Open' },
  { id:'tx5', userId:'me', kind:'topup', amount: 20, ts: now()-2*86400000, note:'Wallet top-up' }
];
/* Platform history mirror */
PLATFORM.revenue = 120.45;
PLATFORM.history = [
  { ts: now()-6*86400000, kind:'court', gross:18, fee:1.8, net:16.2, sourceId:'c1' },
  { ts: now()-3*86400000, kind:'chat', gross:1.99, fee:1.99, net:0, sourceId:'ch1' },
  { ts: now()-2*86400000, kind:'tournament', gross:5, fee:0.75, net:4.25, sourceId:'t1' }
];

/* ---- Pending approvals ---- */
DB.pending.vendors = [
  { id:'pv1', userId:'p7', itemName:'Yonex Poly Tour String Reel', category:'Strings',
    price:42, submitted:'2h ago', note:'Selling a full reel, barely used. Only 2 sets pulled.',
    photos:2, weight:'0.6 kg', shipping:'Local pickup only', listingFeePaid:true },
  { id:'pv2', userId:'p10', itemName:'Prince Tour 100 (grip 3)', category:'Racket',
    price:70, submitted:'5h ago', note:'Great beginner frame, freshly restrung.',
    photos:4, weight:'305 g', shipping:'Pickup or meet-up', listingFeePaid:true }
];
DB.pending.communities = [
  { id:'pc1', creatorId:'p4', name:'Sunrise Smash Club',
    desc:'Early morning hitting group. 6–8am, doubles focus.', members:'42', submitted:'6h ago',
    region:'Central', meetingPlace:'Cape Coast Sports Complex', schedule:'Mon, Wed, Fri · 6:00am' },
  { id:'pc2', creatorId:'p9', name:'Ladies Ladder Ghana',
    desc:'Women-only competitive ladder, monthly promotions.', members:'88', submitted:'1d ago',
    region:'Northern', meetingPlace:'Tamale Central Courts', schedule:'Saturdays · 4:00pm' }
];
DB.pending.coaches = [
  { id:'pco1', userId:'p6', courtId:'c2', rate:32, spec:'Baseline consistency · Return of serve',
    exp:'7 yrs', submitted:'3h ago', cert:'ITF Level 2', availability:'Weekdays 5–8pm' },
  { id:'pco2', userId:'p12', courtId:'c4', rate:38, spec:'Doubles positioning · Net play',
    exp:'5 yrs', submitted:'1d ago', cert:'PTR Certified', availability:'Weekends all day' }
];
DB.pending.courts = [
  { id:'pct1', name:'Eastside Tennis Hub', address:'24 Spintex Rd, Accra', price:20, surface:'Hard',
    courtCount:4, amenities:['Floodlights','Parking','Pro shop'], submittedBy:'p3', submitted:'4h ago',
    contact:'+233 55 123 4567', hours:'6:00am – 10:00pm', notes:'Brand new facility, 4 courts all lit.' },
  { id:'pct2', name:'Achimota Community Courts', address:'Achimota, Accra', price:8, surface:'Hard',
    courtCount:2, amenities:['Public access'], submittedBy:'p2', submitted:'1d ago',
    contact:'+233 24 998 1122', hours:'7:00am – 7:00pm', notes:'Public courts, first-come basis mostly.' }
];

/* ---- Match history generator ---- */
const SCORES_W = ['6-4 6-3','7-5 6-2','6-3 3-6 7-5','6-1 6-4','7-6 6-4'];
const SCORES_L = ['4-6 6-7','3-6 6-4 4-6','5-7 4-6','6-7 3-6','2-6 4-6'];
function genMatches(u, n){
  const pool = DB.users.filter(x => x.id !== u.id && x.role !== 'admin');
  const out = [];
  for (let i = 0; i < n; i++){
    const opp = pool[(i*5 + u.name.length) % pool.length];
    const w = (i*7 + u.name.length) % 3 !== 0;
    out.push({
      vs: opp.name, id: opp.id, res: w ? 'W' : 'L',
      score: w ? SCORES_W[i % SCORES_W.length] : SCORES_L[i % SCORES_L.length],
      date: (2 + i*5) + ' Jun', surface: i % 2 ? 'Clay' : u.surface,
      verified: i < 3
    });
  }
  return out;
}
DB.users.forEach(u => {
  if (u.role === 'admin') return;
  const played = 30 + (u.points % 27);
  const wins = Math.round(played * (0.38 + (parseFloat(u.level)-3)/6));
  u.stats = { played, wins: Math.min(wins, played-4), losses: 0 };
  u.stats.losses = u.stats.played - u.stats.wins;
  u.matches = genMatches(u, 5);
});

/* ============================================================
   4. SESSION + WALLET + PLATFORM FEES
   ============================================================ */
const SESSION = {
  mode: null,             // null | 'player' | 'admin'
  adminId: null
};

const ADMIN = { log: [] };

/* Every admin action is reversible via its log entry */
function adminDo(doFn, undoFn, label){
  const entry = {
    id: uid('a'), doFn, undoFn, label, state:'active',
    t: now(), by: SESSION.adminId || 'admin'
  };
  doFn();
  ADMIN.log.push(entry);
  return entry;
}
function adminToggleLog(id){
  const e = ADMIN.log.find(x => x.id === id);
  if (!e) return;
  if (e.state === 'active'){ e.undoFn(); e.state = 'undone'; toast('↶ Reversed: ' + e.label); }
  else { e.doFn(); e.state = 'active'; toast('↷ Reapplied: ' + e.label); }
  render();
}

/* -------- Wallet engine -------- */
function walletOf(userId){
  const u = userById(userId);
  return u ? u.wallet : 0;
}
function txsOf(userId){
  return DB.transactions.filter(t => t.userId === userId).sort((a,b) => b.ts - a.ts);
}

/**
 * charge() — deducts from wallet and records platform fee.
 * Options: { kind, amount, note, sourceId, platformFee }
 * Returns { ok, error, fee, net }
 */
function charge(userId, { kind, amount, note, sourceId, platformFee }){
  const user = userById(userId);
  if (!user) return { ok:false, error:'No user' };
  if (amount <= 0) return { ok:false, error:'Invalid amount' };
  if (user.wallet < amount) return { ok:false, error:'insufficient' };

  const fee = platformFee != null ? platformFee : 0;
  const net = amount - fee;

  user.wallet -= amount;
  DB.transactions.push({
    id: uid('tx'), userId, kind, amount: -amount,
    note: note || kind, ts: now(), sourceId, fee, net
  });

  PLATFORM.revenue += fee;
  if (fee > 0) PLATFORM.history.push({
    ts: now(), kind, gross: amount, fee, net, sourceId
  });

  if (net > 0 && sourceId){
    const seller = userById(sourceId);
    if (seller){ seller.wallet += net; seller.earnings += net; }
  }
  return { ok:true, fee, net };
}
function topup(userId, amount){
  const u = userById(userId);
  if (!u) return;
  u.wallet += amount;
  DB.transactions.push({
    id: uid('tx'), userId, kind:'topup', amount, note:'Wallet top-up', ts: now()
  });
}

/* -------- Paywall helpers -------- */
const PRICES = {
  requestPlayer: PLATFORM.flatFees.requestPlayer,
  chatUnlock: PLATFORM.flatFees.unlockChat,
  vendorListing: PLATFORM.flatFees.vendorListing,
  tournamentHost: PLATFORM.flatFees.tournamentHost,
  communityCreate: PLATFORM.flatFees.communityCreate,
  priorityBooking: PLATFORM.flatFees.priorityBooking,
  courtPct: PLATFORM.feePct.court,
  coachPct: PLATFORM.feePct.coach,
  tournamentPct: PLATFORM.feePct.tournament,
  shopPct: PLATFORM.feePct.shopSale,
  communityPct: PLATFORM.feePct.communityJoin
};
function courtFee(price){ return +(price * PRICES.courtPct / 100).toFixed(2); }
function coachFee(rate){ return +(rate * PRICES.coachPct / 100).toFixed(2); }
function tourneyFee(entry){ return +(entry * PRICES.tournamentPct / 100).toFixed(2); }
function shopFee(price){ return +(price * PRICES.shopPct / 100).toFixed(2); }

/* -------- Paywall UI -------- */
function paywallPopup(opts){
  /* opts: { title, body, price, cta, onConfirm, allowTopUp } */
  const me = getMe();
  const enough = me.wallet >= opts.price;
  layerEl.innerHTML =
    '<div class="scrim" data-act="close-layer"></div>' +
    '<div class="popup">' +
      '<div class="popup__pill"><span class="pulse"></span>PAID ACTION</div>' +
      '<h3>' + escapeHTML(opts.title) + '</h3>' +
      '<p>' + escapeHTML(opts.body || '') + '</p>' +
      '<div class="paywall" style="margin-top:16px;text-align:left">' +
        '<div class="paywall__inner">' +
          '<div style="display:flex;justify-content:space-between;align-items:flex-start">' +
            '<div>' +
              '<div style="font-size:11px;font-weight:900;letter-spacing:.12em;color:rgba(255,255,255,.5)">AMOUNT</div>' +
              '<div class="paywall__price" style="margin-top:6px">' + money(opts.price) + '</div>' +
            '</div>' +
            '<div style="text-align:right">' +
              '<div style="font-size:10.5px;font-weight:800;letter-spacing:.1em;color:rgba(255,255,255,.5)">WALLET</div>' +
              '<div style="font-size:20px;font-weight:900;letter-spacing:-.04em;margin-top:6px;color:' +
                (enough ? 'var(--green)' : '#FF9B8B') + '">' + money(me.wallet) + '</div>' +
            '</div>' +
          '</div>' +
          (opts.platformFee
            ? '<div style="margin-top:14px;padding-top:14px;border-top:1px solid rgba(255,255,255,.1);display:flex;justify-content:space-between;font-size:11px;font-weight:700">' +
                '<span style="color:rgba(255,255,255,.5)">Platform fee</span>' +
                '<span style="color:var(--green)">' + money(opts.platformFee) + '</span>' +
              '</div>'
            : '') +
        '</div>' +
      '</div>' +
      '<div class="popup__btns">' +
        '<button class="btn btn--ghost" data-act="close-layer">Cancel</button>' +
        (enough
          ? '<button class="btn btn--primary" data-act="paywall-confirm">' + escapeHTML(opts.cta || 'Pay ' + money(opts.price)) + '</button>'
          : '<button class="btn btn--gold" data-act="topup">Top up wallet</button>') +
      '</div>' +
    '</div>';

  // stash callback
  layerEl._paywall = opts;
}
function topupPopup(){
  const amounts = [5, 10, 25, 50];
  layerEl.innerHTML =
    '<div class="scrim" data-act="close-layer"></div>' +
    '<div class="popup">' +
      '<div class="popup__pill" style="background:linear-gradient(140deg,#FFD770,#FFB020);color:#3A2500">ADD FUNDS</div>' +
      '<h3>Top up your wallet</h3>' +
      '<p>Funds are used for chat unlocks, tournament entries, court bookings and coach sessions.</p>' +
      '<div class="chips chips--pad" style="padding:14px 0 0">' +
        amounts.map(a =>
          '<button class="chip ' + (a===25?'is-on':'') + '" data-act="topup-pick" data-v="' + a + '">' + money(a) + '</button>'
        ).join('') +
      '</div>' +
      '<div class="popup__btns">' +
        '<button class="btn btn--ghost" data-act="close-layer">Cancel</button>' +
        '<button class="btn btn--primary" data-act="topup-confirm" data-v="25">Add $25</button>' +
      '</div>' +
    '</div>';
}

/* ============================================================
   5. TOURNAMENT ENGINE
   ============================================================ */
const Tournaments = {
  /* Build bracket once all teams registered */
  buildBracket(t){
    const teams = t.teams.map(x => ({ id: x.id, name: x.name, members: x.members.slice() }));
    // seed randomly
    for (let i = teams.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i+1));
      [teams[i], teams[j]] = [teams[j], teams[i]];
    }
    const rounds = [];
    let current = teams;
    while (current.length > 1){
      const matches = [];
      for (let i = 0; i < current.length; i += 2){
        matches.push({
          id: uid('m'),
          teamA: current[i] || null,
          teamB: current[i+1] || null,
          scoreA: null, scoreB: null,
          status: current[i+1] ? 'pending' : 'bye',
          agreed: false
        });
      }
      rounds.push(matches);
      current = matches.map(m => m.teamA && !m.teamB ? m.teamA : null).filter(Boolean);
      // seeded next round placeholders — we rebuild next round after results
      if (matches.every(m => m.status === 'bye')) break;
      current = matches.map(() => null);
    }
    t.bracket = { rounds: [rounds[0]], currentRound: 0, phase:'active' };
    return t.bracket;
  },

  /* Confirm a match result by agreement */
  recordResult(t, roundIdx, matchId, scoreA, scoreB, agreedByUser){
    if (!t.bracket) return false;
    const round = t.bracket.rounds[roundIdx];
    const m = round.find(x => x.id === matchId);
    if (!m || !m.teamA || !m.teamB) return false;
    m.scoreA = scoreA;
    m.scoreB = scoreB;
    m.status = 'completed';
    // add both teams' agreeing user (simplified: one confirmation completes)
    m.agreed = true;
    advanceRound(t);
    return true;
  },

  isRegistered(t, userId){
    return t.teams.some(x => x.members.includes(userId));
  }
};

function advanceRound(t){
  const cur = t.bracket.rounds[t.bracket.currentRound];
  if (!cur.every(m => m.status === 'completed' || m.status === 'bye')) return;

  const winners = cur.map(m => {
    if (m.status === 'bye') return m.teamA;
    return m.scoreA > m.scoreB ? m.teamA : m.teamB;
  }).filter(Boolean);

  if (winners.length <= 1){ t.completed = true; t.bracket.phase = 'done'; t.winner = winners[0]; return; }

  const next = [];
  for (let i = 0; i < winners.length; i += 2){
    next.push({
      id: uid('m'),
      teamA: winners[i] || null,
      teamB: winners[i+1] || null,
      scoreA: null, scoreB: null,
      status: winners[i+1] ? 'pending' : 'bye',
      agreed: false
    });
  }
  t.bracket.rounds.push(next);
  t.bracket.currentRound++;
}

/* ============================================================
   6. CHAT ENGINE
   ============================================================ */
const Chat = {
  threadWith(userId){
    return DB.chats.find(c => c.withId === userId);
  },
  ensureThread(userId){
    let c = this.threadWith(userId);
    if (!c){
      c = { id: uid('ch'), withId: userId, unlocked: false, messages: [], lastRead: 0 };
      DB.chats.unshift(c);
    }
    return c;
  },
  send(chatId, from, text){
    const c = DB.chats.find(x => x.id === chatId);
    if (!c) return;
    c.messages.push({ id: uid('m'), from, text, ts: now() });
    c.lastRead = now();
  },
  unreadCount(){
    return DB.chats.reduce((n, c) => {
      if (!c.unlocked) return n;
      const last = c.messages[c.messages.length - 1];
      if (!last) return n;
      if (last.from === 'me') return n;
      return n + (last.ts > c.lastRead ? 1 : 0);
    }, 0);
  },
  totalUnlockedUnread(){
    return this.unreadCount();
  }
};

/* ============================================================
   7. MATCH VERIFICATION ENGINE
   ============================================================ */
const Verify = {
  pending(){ return this.all().filter(x => x.status === 'awaiting-both' || x.status === 'awaiting-me'); },
  all(){ return (getMe().verifications ||= []); },
  propose(opponentId, scoreMe, scoreThem, photo){
    const v = {
      id: uid('v'),
      withId: opponentId,
      scoreMe, scoreThem,
      photo: !!photo,
      proposedAt: now(),
      status:'awaiting-both',
      myConfirm: true,
      theirConfirm: false,
      expiresAt: now() + 48*3600000
    };
    this.all().push(v);
    return v;
  },
  confirmOpponent(v){
    v.theirConfirm = true;
    if (v.myConfirm && v.theirConfirm) v.status = 'locked';
  },
  dispute(v){
    v.status = 'disputed';
  }
};

/* ============================================================
   8. AI RECOMMENDATIONS
   ============================================================ */
const AI = {
  /* Explainable simple scorer */
  matchScore(me, other){
    let s = 0;
    const lvlDiff = Math.abs(parseFloat(me.level) - parseFloat(other.level));
    s += Math.max(0, 40 - lvlDiff * 12);
    if (other.surface === me.surface) s += 15;
    if (other.hand !== me.hand) s += 10;
    if (other.region === me.region) s += 15;
    if (other.status === 'Available now') s += 10;
    if (other.dist <= 500) s += 10;
    // shared interests
    const shared = (me.interests || []).filter(x => (other.interests || []).includes(x));
    s += shared.length * 5;
    return Math.min(99, Math.round(s));
  },
  topMatches(limit){
    const me = getMe();
    return DB.users
      .filter(u => u.id !== 'me' && u.role !== 'admin')
      .map(u => ({ u, s: this.matchScore(me, u) }))
      .sort((a, b) => b.s - a.s)
      .slice(0, limit || 5);
  }
};

/* ============================================================
   9. WEATHER (mocked, deterministic)
   ============================================================ */
const Weather = {
  _hash(day){
    let h = 0;
    const str = 'rubix-' + day;
    for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
    return h;
  },
  current(){
    const h = this._hash(new Date().toDateString());
    const temp = 24 + (h % 8);
    const cond = ['Clear','Partly cloudy','Sunny','Light breeze','Humid','Chance of rain'][h % 6];
    const emoji = { 'Clear':'☀️','Partly cloudy':'⛅','Sunny':'☀️','Light breeze':'🌤️','Humid':'💨','Chance of rain':'🌧️' }[cond];
    return { temp, cond, emoji };
  },
  forecast(days){
    const out = [];
    const base = new Date();
    for (let i = 0; i < (days || 5); i++){
      const d = new Date(base.getTime() + i*86400000);
      const h = this._hash(d.toDateString());
      const t = 22 + (h % 10);
      const c = ['Clear','Sunny','Cloudy','Light rain','Thunderstorm'][h % 5];
      const e = { Clear:'☀️', Sunny:'☀️', Cloudy:'⛅', 'Light rain':'🌦️', Thunderstorm:'⛈️' }[c];
      out.push({
        label: i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : d.toLocaleDateString('en', {weekday:'short'}),
        temp: t, cond: c, emoji: e,
        playable: c !== 'Thunderstorm' && c !== 'Light rain'
      });
    }
    return out;
  },
  courtAdvice(court){
    const f = this.forecast(3);
    const bad = f.find(x => !x.playable);
    if (!bad) return { ok:true, msg:'Great conditions for the next 3 days.' };
    return { ok:false, msg: bad.label + ' looks rough — ' + bad.cond + '. Consider Indoor Hard.' };
  }
};

/* ============================================================
   10. ROUTER + HEADER + TABS
   ============================================================ */
const nav = { tab:'discover', stack:[] };
const state = {
  /* discover */
  discoverFilter:'all',
  /* rankings */
  rankList:'national', rankQuery:'', rankRegion:'All', rankLevel:'All',
  /* lost & found */
  lfFilter:'all',
  /* booking */
  booking:{ date:'Today', time:null },
  /* vendor draft */
  vendorDraft:null, coachCourt:null, courtSurface:null,
  /* admin */
  adminTab:'overview', adminAppTab:'vendors', adminUserQuery:'', adminReportFilter:'open',
  /* forms */
  gateAdminEmail:'', gateAdminPin:'',
  /* shop filter */
  shopFilter:'all',
  /* tournaments */
  tourneyFilter:'open',
  /* chat */
  activeChat:null,
  /* misc */
  requestsSent:{}, topupPick:25,
  feedLikes:{}, feedComments:{}
};

const hdrEl   = document.getElementById('hdr');
const mainEl  = document.getElementById('main');
const tabsEl  = document.getElementById('tabs');
const layerEl = document.getElementById('layer');
const phoneEl = document.getElementById('phone');

const TABS = [
  {id:'discover',   label:'DISCOVER',   icon:'pin'},
  {id:'tournaments',label:'TOURNEYS',   icon:'trophy'},
  {id:'rankings',   label:'RANKINGS',   icon:'chart'},
  {id:'courts',     label:'COURTS',     icon:'ball'},
  {id:'chats',      label:'CHATS',      icon:'chat'},
  {id:'profile',    label:'PROFILE',    icon:'user'},
  {id:'more',       label:'MORE',       icon:'grid'}
];
/* Actually — 7 tabs is too many. We'll drop 'chats' from bottom bar and put it inside 'more',
   but we still show the tab array as the bottom five to keep the UX tight. */
const VISIBLE_TABS = ['discover','tournaments','rankings','courts','more'];

function go(screen, params, title){
  nav.stack.push({ screen, params: params || {}, title: title || '' });
  render();
  mainEl.scrollTop = 0;
}
function back(){ nav.stack.pop(); render(); }
function setTab(t){ nav.tab = t; nav.stack = []; render(); mainEl.scrollTop = 0; }

/* ============================================================
   HELPERS
   ============================================================ */
function getMe(){ return DB.users.find(u => u.id === 'me'); }
function userById(id){ return DB.users.find(u => u.id === id); }
function courtById(id){ return DB.courts.find(c => c.id === id); }
function commById(id){ return DB.communities.find(c => c.id === id); }
function shopById(id){ return DB.shop.find(s => s.id === id); }
function tourneyById(id){ return DB.tournaments.find(t => t.id === id); }
function adminById(id){ return ADMINS.find(a => a.id === id); }
function winPct(s){ return s.played ? Math.round(s.wins/s.played*100) : 0; }
function stars(r){ return '<span class="star">★</span> ' + r.toFixed(1); }
function statusDot(a){ return a === 'on' ? 'dot--on' : a === 'soon' ? 'dot--soon' : 'dot--off'; }

function avatarHTML(u, cls){
  if (!u) return '<div class="av '+(cls||'')+'"></div>';
  const h = u.hue != null ? u.hue : 150;
  const c1 = 'hsl(' + h + ' 78% 58%)';
  const c2 = 'hsl(' + ((h+50)%360) + ' 72% 42%)';
  const seed = u.id + '-' + u.photo;
  const dotCls = u.avail === 'on' ? 'dot--on' : u.avail === 'soon' ? 'dot--soon' : 'dot--off';
  return '<div class="av ' + (cls||'') + '" style="--c1:' + c1 + ';--c2:' + c2 + '">' +
    '<span class="av__ini">' + u.initials + '</span>' +
    '<img src="' + img(seed, 160, 160) + '" alt="" loading="lazy" onerror="this.remove()">' +
  '</div>';
}
function toast(msg){
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  phoneEl.appendChild(t);
  requestAnimationFrame(() => t.classList.add('is-on'));
  setTimeout(() => { t.classList.remove('is-on'); setTimeout(() => t.remove(), 320); }, 2100);
}
function closeLayer(){ layerEl.innerHTML = ''; layerEl._paywall = null; }

/* ============================================================
   MAP SVG
   ============================================================ */
function mapSVG(){
  return `
  <svg class="map__bg" viewBox="0 0 400 720" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="720" fill="#E9EEE7"/>
    <g fill="#DDE5D9">
      <rect x="18" y="36" width="106" height="86" rx="12"/>
      <rect x="152" y="28" width="112" height="72" rx="12"/>
      <rect x="292" y="46" width="94" height="106" rx="12"/>
      <rect x="26" y="168" width="84" height="92" rx="12"/>
      <rect x="146" y="164" width="106" height="74" rx="12"/>
      <rect x="284" y="188" width="102" height="86" rx="12"/>
      <rect x="200" y="298" width="76" height="58" rx="12"/>
      <rect x="300" y="306" width="86" height="112" rx="12"/>
      <rect x="34" y="448" width="112" height="88" rx="12"/>
      <rect x="182" y="438" width="96" height="76" rx="12"/>
      <rect x="302" y="458" width="84" height="96" rx="12"/>
      <rect x="56" y="582" width="118" height="92" rx="12"/>
      <rect x="212" y="568" width="120" height="88" rx="12"/>
    </g>
    <rect x="18" y="292" width="152" height="132" rx="16" fill="#CFE6C4"/>
    <path d="M44 372 q30 -26 62 -6 q28 18 58 -4" stroke="#B9D9AB" stroke-width="5" fill="none" stroke-linecap="round"/>
    <g stroke="#FFFFFF" stroke-width="13" stroke-linecap="round">
      <path d="M-10 146 H410"/><path d="M-10 272 H410"/><path d="M-10 424 H410"/><path d="M-10 556 H410"/>
    </g>
    <g stroke="#FFFFFF" stroke-width="9" stroke-linecap="round">
      <path d="M136 -10 V730"/><path d="M270 -10 V730"/>
    </g>
    <g stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" opacity=".85">
      <path d="M-10 660 L410 470"/><path d="M60 -10 V730"/><path d="M340 -10 V730"/>
    </g>
    <g stroke="#D6E0D2" stroke-width="2">
      <path d="M-10 210 H410" opacity=".7"/><path d="M-10 350 H410" opacity=".7"/>
      <path d="M-10 490 H410" opacity=".7"/><path d="M-10 620 H410" opacity=".7"/>
      <path d="M204 -10 V730" opacity=".7"/>
    </g>
  </svg>`;
}

/* ============================================================
   11. SCREENS — PLAYER SIDE
   ============================================================ */

/* ---------- ENTRY GATE ---------- */
function screenEntry(){
  return '<div class="gate">'+
    '<div class="gate__inner">'+
      '<div class="gate__logo">◆</div>'+
      '<div class="gate__title">RUBIX TENNIS</div>'+
      '<div class="gate__sub">Find players. Book courts. Join communities.<br>Confirm how you want to continue.</div>'+
      '<div class="gate__cards">'+
        '<button class="entry-card" data-act="enterplayer">'+
          '<div class="entry-card__ico" style="background:rgba(255,255,255,.1)">'+ico('user')+'</div>'+
          '<div class="entry-card__main">'+
            '<div class="entry-card__t">Continue as Player</div>'+
            '<div class="entry-card__s">Sign in as Alex Rivera and access the player experience</div>'+
          '</div>'+
          ico('chev')+
        '</button>'+
        '<button class="entry-card entry-card--admin" data-act="enteradmin">'+
          '<div class="entry-card__ico">'+ico('shield2')+'</div>'+
          '<div class="entry-card__main">'+
            '<div class="entry-card__t">Enter Admin Console <span class="badge" style="background:rgba(216,255,61,.25);color:var(--green);font-size:9px;padding:2px 7px">RESTRICTED</span></div>'+
            '<div class="entry-card__s">Manage approvals, accounts, rankings & platform settings</div>'+
          '</div>'+
          ico('chev')+
        '</button>'+
      '</div>'+
      '<div class="gate__foot">NO ADS · EVER · COMMISSION-FREE FOR YOU</div>'+
    '</div>'+
  '</div>';
}

/* ---------- ADMIN LOGIN ---------- */
function screenAdminLogin(){
  return '<div style="min-height:100%;background:linear-gradient(160deg,#16233A 0%,#0A1220 60%);padding:36px 24px;color:#fff;display:flex;flex-direction:column">'+
    '<div style="text-align:center;margin-bottom:32px">'+
      '<div style="width:72px;height:72px;border-radius:26px;background:var(--green);color:var(--navy);display:grid;place-items:center;margin:0 auto 20px">'+ico('lock')+'</div>'+
      '<div style="font-size:24px;font-weight:900;letter-spacing:-.045em">Admin Sign-in</div>'+
      '<div style="font-size:12.5px;font-weight:600;color:rgba(255,255,255,.55);margin-top:8px">Authorised personnel only</div>'+
    '</div>'+
    '<div style="background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:22px 20px">'+
      '<label style="display:block;font-size:11px;font-weight:800;letter-spacing:.08em;color:rgba(255,255,255,.5);margin-bottom:10px">EMAIL</label>'+
      '<input id="adminEmail" type="email" placeholder="admin@rubix.app" value="'+state.gateAdminEmail+'"'+
        ' style="width:100%;padding:15px;border-radius:14px;background:rgba(0,0,0,.3);border:1.5px solid rgba(255,255,255,.12);color:#fff;font-size:14px;font-weight:600;margin-bottom:16px">'+
      '<label style="display:block;font-size:11px;font-weight:800;letter-spacing:.08em;color:rgba(255,255,255,.5);margin-bottom:10px">PASSCODE</label>'+
      '<input id="adminPin" type="password" inputmode="numeric" maxlength="6" placeholder="••••" value="'+state.gateAdminPin+'"'+
        ' style="width:100%;padding:15px;border-radius:14px;background:rgba(0,0,0,.3);border:1.5px solid rgba(255,255,255,.12);color:#fff;font-size:22px;font-weight:900;text-align:center;letter-spacing:.35em">'+
      '<button class="abtn abtn--ok" style="width:100%;padding:16px;margin-top:18px;font-size:14px" data-act="adminauth">Unlock Console</button>'+
      '<div style="font-size:11px;font-weight:600;color:rgba(255,255,255,.4);text-align:center;margin-top:14px;line-height:1.6">'+
        'Demo: <b style="color:var(--green)">admin@rubix.app</b> · <b style="color:var(--green)">1234</b></div>'+
    '</div>'+
    '<button class="abtn abtn--ghost" style="margin-top:auto" data-act="exitgate">← Back to gate</button>'+
  '</div>';
}

/* ---------- DISCOVER ---------- */
const PINS = [
  {type:'player',id:'p1',x:44,y:36},{type:'player',id:'p2',x:63,y:29},
  {type:'player',id:'p3',x:29,y:50},{type:'player',id:'p4',x:56,y:57},
  {type:'player',id:'p5',x:73,y:44},{type:'player',id:'p6',x:37,y:21},
  {type:'player',id:'p7',x:23,y:64},{type:'player',id:'p8',x:81,y:60},
  {type:'player',id:'p9',x:50,y:70},{type:'player',id:'p10',x:66,y:77},
  {type:'player',id:'p11',x:35,y:76},{type:'player',id:'p12',x:58,y:48},
  {type:'court',id:'c1',x:33,y:41},{type:'court',id:'c2',x:69,y:52},
  {type:'court',id:'c3',x:20,y:32},{type:'court',id:'c4',x:57,y:18},
  {type:'court',id:'c5',x:79,y:71},
  {type:'club',id:'k1',x:46,y:46},{type:'club',id:'k2',x:27,y:57},
  {type:'club',id:'k3',x:64,y:38}
];
function pinHTML(pin){
  if (pin.type === 'player'){
    const u = userById(pin.id);
    if (!u) return '';
    const c1 = 'hsl(' + u.hue + ' 78% 58%)';
    const c2 = 'hsl(' + ((u.hue+50)%360) + ' 72% 42%)';
    return '<button class="pin pin--player" style="left:'+pin.x+'%;top:'+pin.y+'%;--c1:'+c1+';--c2:'+c2+'" data-act="player" data-id="'+u.id+'">'+
      u.initials +
      '<img src="' + img(u.id + '-' + u.photo, 80, 80) + '" alt="" onerror="this.remove()">' +
    '</button>';
  }
  if (pin.type === 'court') return '<button class="pin pin--court" style="left:'+pin.x+'%;top:'+pin.y+'%" data-act="court" data-id="'+pin.id+'">🎾</button>';
  return '<button class="pin pin--club" style="left:'+pin.x+'%;top:'+pin.y+'%" data-act="club" data-id="'+pin.id+'">👥</button>';
}
function discoverItems(){
  const f = state.discoverFilter;
  const items = [];
  if (f === 'all' || f === 'players')
    DB.users.filter(u => u.id !== 'me' && u.role !== 'admin').forEach(u => items.push({kind:'player', dist:u.dist, ref:u}));
  if (f === 'all' || f === 'courts')
    DB.courts.filter(c => c.status === 'approved').forEach(c => items.push({kind:'court', dist:c.dist, ref:c}));
  if (f === 'all' || f === 'clubs')
    DB.communities.filter(k => k.verified === 'approved').forEach(k => items.push({kind:'club', dist:k.dist, ref:k}));
  return items.sort((a,b) => a.dist - b.dist);
}
function discoverRow(item){
  if (item.kind === 'player'){
    const u = item.ref;
    const sent = state.requestsSent[u.id];
    return '<div class="row" data-act="player" data-id="'+u.id+'">'+
      avatarHTML(u, 'av--sm')+
      '<div class="row__main">'+
        '<div class="row__title">'+u.name+'<span class="lvl">'+u.level+'</span>'+(u.role==='coach'?'<span class="badge badge--soft" style="font-size:8px;padding:2px 6px">COACH</span>':'')+'</div>'+
        '<div class="row__sub"><span class="dot '+statusDot(u.avail)+'"></span>'+u.status+' · '+u.dist+' m</div>'+
      '</div>'+
      '<button class="btn btn--sm '+(sent?'is-sent':'btn--primary')+'" data-act="request" data-id="'+u.id+'">'+(sent?'Sent · $'+PRICES.requestPlayer:'Wave')+'</button>'+
    '</div>';
  }
  if (item.kind === 'court'){
    const c = item.ref;
    return '<div class="row" data-act="court" data-id="'+c.id+'">'+
      '<div class="av av--sm" style="--c1:hsl('+c.hue+' 60% 60%);--c2:hsl('+((c.hue+40)%360)+' 55% 42%)">'+
        '<img src="'+img('court-'+c.id,120,120)+'" alt="" onerror="this.remove()">'+
      '</div>'+
      '<div class="row__main">'+
        '<div class="row__title">'+c.name+'</div>'+
        '<div class="row__sub"><span class="star">★</span> '+c.rating.toFixed(1)+' · '+c.surface+' · '+c.dist+' m</div>'+
      '</div>'+
      '<div style="text-align:right"><b style="font-size:13px;font-weight:900;letter-spacing:-.03em">$'+c.price+'</b><div style="font-size:9.5px;color:var(--muted);font-weight:700">+$'+courtFee(c.price)+' fee</div></div>'+
    '</div>';
  }
  const k = item.ref;
  return '<div class="row" data-act="club" data-id="'+k.id+'">'+
    '<div class="av av--sm" style="--c1:hsl('+k.hue+' 80% 60%);--c2:hsl('+((k.hue+40)%360)+' 70% 45%)">'+
      '<img src="'+img('club-'+k.id,120,120)+'" alt="" onerror="this.remove()">'+
    '</div>'+
    '<div class="row__main">'+
      '<div class="row__title">'+k.name+'</div>'+
      '<div class="row__sub">'+k.members.toLocaleString()+' members · '+k.dist+' m</div>'+
    '</div>'+
    '<button class="btn btn--sm btn--ghost" data-act="joinclub" data-id="'+k.id+'">Join</button>'+
  '</div>';
}
function screenDiscover(){
  const f = state.discoverFilter;
  const pins = PINS.filter(p => f === 'all' || p.type === (f === 'players' ? 'player' : f === 'courts' ? 'court' : 'club'));
  const items = discoverItems();
  const me = getMe();
  const ai = AI.topMatches(1)[0];
  return ''+
  '<div class="map">'+
    mapSVG()+
    '<div class="map__pins">'+pins.map(pinHTML).join('')+'</div>'+
    '<div class="pin--me" style="left:50%;top:62%"></div>'+
  '</div>'+
  '<div class="sheet">'+
    '<div class="sheet__handle"></div>'+
    '<div class="sheet__head">'+
      '<div class="sheet__title">Nearby</div>'+
      '<div class="sheet__count">'+items.length+' results</div>'+
    '</div>'+
    (ai ? '<div class="chips" style="padding-bottom:8px">'+
      '<button class="chip" style="background:linear-gradient(140deg,#3D1F5C,#1F0F30);color:#fff;border:none" data-act="player" data-id="'+ai.u.id+'">'+
        '✨ ' + Math.round(ai.s) + '% match · ' + ai.u.name.split(' ')[0] +
      '</button>'+
    '</div>' : '') +
    '<div class="chips">'+
      [['all','All'],['players','Players'],['courts','Courts'],['clubs','Clubs']].map(([v,l]) =>
        '<button class="chip '+(f===v?'is-on':'')+'" data-act="dfilter" data-v="'+v+'">'+l+'</button>'
      ).join('')+
    '</div>'+
    '<div class="sheet__scroll">'+items.map(discoverRow).join('')+'</div>'+
  '</div>';
}

let proximityShown = false;
function maybeProximity(){
  if (proximityShown) return;
  const near = DB.users.filter(u => u.id !== 'me' && u.role !== 'admin' && u.dist <= 500)
    .sort((a,b) => a.dist - b.dist)[0];
  if (!near) return;
  proximityShown = true;
  setTimeout(() => showProximity(near), 3200);
}
function showProximity(u){
  layerEl.innerHTML =
  '<div class="scrim" data-act="close-layer"></div>'+
  '<div class="popup">'+
    '<div class="popup__pill"><span class="pulse"></span>PROXIMITY ALERT</div>'+
    '<h3>A player is close to you!</h3>'+
    '<p>'+u.name.split(' ')[0]+' is only <b>'+u.dist+' m</b> away right now and is open to a hit.</p>'+
    '<div style="display:flex;align-items:center;gap:13px;background:#F5F7F2;border-radius:20px;padding:13px;margin-top:16px">'+
      avatarHTML(u, 'av--sm')+
      '<div class="row__main">'+
        '<div class="row__title">'+u.name+'<span class="lvl">'+u.level+'</span></div>'+
        '<div class="row__sub"><span class="dot dot--on"></span>'+u.status+' · '+u.city+'</div>'+
      '</div>'+
    '</div>'+
    '<div class="popup__btns">'+
      '<button class="btn btn--ghost" data-act="close-layer">Later</button>'+
      '<button class="btn btn--primary" data-act="request" data-id="'+u.id+'">Send · $'+PRICES.requestPlayer+'</button>'+
    '</div>'+
  '</div>';
}

/* ---------- TOURNAMENTS ---------- */
function tourneyStatusPill(t){
  if (t.completed) return '<span class="badge badge--gold">Completed</span>';
  if (t.status === 'draft') return '<span class="badge badge--soft">Draft</span>';
  if (t.teams.length >= t.maxTeams) return '<span class="badge badge--amber">Full · Starting</span>';
  return '<span class="badge badge--green">Open</span>';
}
function screenTournaments(){
  const f = state.tourneyFilter;
  const list = DB.tournaments.filter(t =>
    f === 'all' || (f === 'open' && !t.completed && t.status !== 'draft') ||
    (f === 'mine' && t.hostId === 'me') ||
    (f === 'completed' && t.completed) ||
    (f === 'draft' && t.status === 'draft')
  );
  const me = getMe();

  return '<div class="pad">'+
    '<div class="seg">'+
      [['open','Open'],['mine','Hosted by me'],['completed','Completed'],['all','All']].map(([v,l]) =>
        '<button class="seg__b '+(f===v?'is-on':'')+'" data-act="tourneyfilter" data-v="'+v+'">'+l+'</button>'
      ).join('')+
    '</div>'+

    '<div class="ai-card">'+
      '<div class="ai-card__inner">'+
        '<div class="ai-card__eyebrow">'+ico('crown')+' NEARBY DOUBLES HOSTING</div>'+
        '<h3>Host a doubles tournament at your nearest court</h3>'+
        '<p>Entry fee from $3. Players have 7 days to agree on match times. You earn the platform split automatically.</p>'+
        '<button class="btn btn--primary btn--block" style="margin-top:14px" data-act="hosttourney">Host Tournament · $'+PRICES.tournamentHost+'</button>'+
      '</div>'+
    '</div>'+

    '<div class="sec-title">'+(f === 'mine' ? 'Your tournaments' : f === 'completed' ? 'Past tournaments' : 'Nearby tournaments')+
      ' <small>'+list.length+'</small></div>'+

    (list.length === 0
      ? '<div class="empty"><div class="empty__ico">🏆</div>No tournaments in this view.</div>'
      : list.map(t => {
          const host = userById(t.hostId);
          const c1 = 'hsl('+t.hue+' 68% 55%)';
          const c2 = 'hsl('+((t.hue+45)%360)+' 62% 32%)';
          const daysLeft = Math.ceil((t.agreeBy - now()) / 86400000);
          const joined = Tournaments.isRegistered(t, 'me');
          const fillPct = Math.min(100, Math.round(t.teams.length / t.maxTeams * 100));
          return '<div class="tourney-card" data-act="tourney" data-id="'+t.id+'">'+
            '<div class="tourney-card__banner" style="--c1:'+c1+';--c2:'+c2+'">'+
              '<img src="'+img('tourney-'+t.id,600,300)+'" alt="" onerror="this.remove()">'+
              '<div class="tourney-card__badges">'+
                '<span class="badge badge--dark">'+(t.teamSize===1?'SINGLES':'DOUBLES')+'</span>'+
                (joined ? '<span class="badge badge--green">JOINED</span>' : '')+
              '</div>'+
              '<div class="tourney-card__status">'+tourneyStatusPill(t)+'</div>'+
              '<div class="tourney-card__prize">'+
                '<b>$'+t.prize+'</b>'+
                '<span>PRIZE POOL</span>'+
              '</div>'+
            '</div>'+
            '<div class="tourney-card__body">'+
              '<div class="tourney-card__name">'+t.name+'</div>'+
              '<div class="tourney-card__meta">'+
                '<span>📍 '+ (courtById(t.courts) ? courtById(t.courts).name : 'TBD') +'</span>'+
                '<span>👥 '+t.teams.length+' / '+t.maxTeams+' teams</span>'+
                '<span>💵 $'+t.entry+' entry</span>'+
              '</div>'+
              '<div class="tourney-card__slots">'+
                '<div class="tourney-card__bar"><div style="width:'+fillPct+'%"></div></div>'+
                '<span>'+(daysLeft > 0 ? daysLeft+'d to agree' : 'Agreement closed')+'</span>'+
              '</div>'+
              '<div style="display:flex;gap:8px;margin-top:12px">'+
                '<button class="btn btn--ghost btn--sm" style="flex:1" data-act="tourney" data-id="'+t.id+'">View Bracket</button>'+
                (joined
                  ? '<button class="btn btn--sm" style="flex:1;background:#DFF7E8;color:#12924F" disabled>Registered</button>'
                  : '<button class="btn btn--primary btn--sm" style="flex:1" data-act="tourneyjoin" data-id="'+t.id+'">Join · $'+t.entry+'</button>')+
              '</div>'+
            '</div>'+
          '</div>';
        }).join(''))+
  '</div>';
}

function screenTourney(params){
  const t = tourneyById(params.id);
  if (!t) return '<div class="empty">Tournament not found.</div>';
  const host = userById(t.hostId);
  const c1 = 'hsl('+t.hue+' 68% 55%)';
  const c2 = 'hsl('+((t.hue+45)%360)+' 62% 32%)';
  const me = getMe();
  const joined = Tournaments.isRegistered(t, 'me');
  const daysLeft = Math.max(0, Math.ceil((t.agreeBy - now()) / 86400000));

  const teamsHTML = t.teams.map(team => {
    const members = team.members.map(id => userById(id)).filter(Boolean);
    return '<div class="row" style="background:#fff;border-radius:16px;margin-bottom:8px;box-shadow:var(--shadow)">'+
      '<div style="display:flex">'+
        members.map((m,i) => '<div style="margin-left:'+(i?-14:0)+'px;position:relative;z-index:'+(10-i)+'">'+avatarHTML(m,'av--sm')+'</div>').join('')+
      '</div>'+
      '<div class="row__main">'+
        '<div class="row__title">'+team.name+'</div>'+
        '<div class="row__sub">Joined '+timeAgo(team.joined)+'</div>'+
      '</div>'+
    '</div>';
  }).join('');

  const bracketHTML = t.bracket
    ? t.bracket.rounds.map((round, ri) =>
        '<div class="bracket">'+
          '<div class="bracket__label">Round ' + (ri+1) + '</div>'+
          '<div class="bracket__round">'+
            round.map(m => {
              const a = m.teamA ? m.teamA.name : 'TBD';
              const b = m.teamB ? m.teamB.name : (m.status === 'bye' ? '— BYE —' : 'TBD');
              const cls = m.status === 'completed' ? 'done' : m.status === 'bye' ? 'done' : 'pending';
              const scoreA = m.scoreA != null ? m.scoreA : '';
              const scoreB = m.scoreB != null ? m.scoreB : '';
              return '<div class="match-slot match-slot--'+cls+'">'+
                '<div class="match-slot__team">'+a+'</div>'+
                '<div class="match-slot__score">'+scoreA+'</div>'+
                '<div class="match-slot__vs">VS</div>'+
                '<div class="match-slot__score">'+scoreB+'</div>'+
                '<div class="match-slot__team" style="text-align:right">'+b+'</div>'+
              '</div>';
            }).join('')+
          '</div>'+
        '</div>'
      ).join('')
    : '<div class="empty" style="padding:22px;background:#fff;border-radius:20px;box-shadow:var(--shadow)">'+
        'Bracket will be generated when all teams have registered.<br>'+
        '<b style="color:var(--navy)">'+t.teams.length+' / '+t.maxTeams+' teams</b>'+
      '</div>';

  const myMatches = t.bracket
    ? t.bracket.rounds[t.bracket.currentRound].filter(m =>
        (m.teamA && m.teamA.members.includes('me')) || (m.teamB && m.teamB.members.includes('me'))
      )
    : [];

  return '<div class="pad" style="padding-top:8px">'+
    '<div style="height:170px;border-radius:24px;overflow:hidden;position:relative">'+
      '<div style="position:absolute;inset:0;background:linear-gradient(140deg,'+c1+','+c2+')"></div>'+
      '<img src="'+img('tourney-'+t.id,800,400)+'" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover" onerror="this.remove()">'+
      '<div style="position:absolute;inset:0;background:linear-gradient(180deg,transparent 30%,rgba(10,18,32,.78) 100%)"></div>'+
      '<div style="position:absolute;top:12px;left:12px;z-index:2">'+tourneyStatusPill(t)+'</div>'+
      '<div style="position:absolute;left:18px;right:18px;bottom:16px;color:#fff;z-index:2">'+
        '<div style="font-size:11px;font-weight:900;letter-spacing:.12em;color:var(--green)">'+(t.teamSize===1?'SINGLES':'DOUBLES')+' · $'+t.entry+' ENTRY</div>'+
        '<div style="font-size:21px;font-weight:900;letter-spacing:-.04em;margin-top:6px">'+t.name+'</div>'+
        '<div style="font-size:11.5px;font-weight:600;color:rgba(255,255,255,.72);margin-top:4px">Hosted by '+(host?host.name:'—')+' · '+(courtById(t.courts)?courtById(t.courts).name:'TBD')+'</div>'+
      '</div>'+
    '</div>'+

    '<div class="stats" style="margin-top:16px">'+
      '<div class="stat"><b>$'+t.prize+'</b><span>Prize</span></div>'+
      '<div class="stat"><b>'+t.teams.length+'</b><span>Teams</span></div>'+
      '<div class="stat"><b>'+daysLeft+'d</b><span>To agree</span></div>'+
      '<div class="stat stat--hl"><b>$'+t.entry+'</b><span>Entry</span></div>'+
    '</div>'+

    '<div class="verify-pending">'+
      '<div class="verify-pending__ico">🕒</div>'+
      '<div class="row__main">'+
        '<div class="row__title" style="font-size:12.5px">Agreement window</div>'+
        '<div class="row__sub">All matches must be agreed by '+fmtDate(t.agreeBy)+'</div>'+
      '</div>'+
    '</div>'+

    (myMatches.length
      ? '<div class="sec-title">Your active matches <small>'+myMatches.length+'</small></div>'+
        myMatches.map(m => {
          const opp = m.teamA && m.teamA.members.includes('me') ? m.teamB : m.teamA;
          return '<div class="verify-card">'+
            '<div class="verify-card__title">vs '+(opp?opp.name:'TBD')+'</div>'+
            '<div style="font-size:12px;font-weight:600;color:var(--muted);margin-bottom:12px">Agree a time with the opposing team in chat, then log the score here.</div>'+
            '<div style="display:flex;gap:9px">'+
              '<button class="btn btn--ghost btn--sm" style="flex:1" data-act="tourneybracket" data-id="'+t.id+'">See bracket</button>'+
              '<button class="btn btn--primary btn--sm" style="flex:1" data-act="toureyreport" data-t="'+t.id+'" data-m="'+m.id+'">Submit Score</button>'+
            '</div>'+
          '</div>';
        }).join('')
      : '')+

    '<div class="sec-title">Bracket</div>'+
    bracketHTML+

    '<div class="sec-title">Registered teams <small>'+t.teams.length+' / '+t.maxTeams+'</small></div>'+
    (t.teams.length ? teamsHTML : '<div class="empty" style="padding:22px">Be the first to register.</div>')+

    '<div class="sec-title">Entry & split</div>'+
    '<div class="tile" style="background:linear-gradient(140deg,#16233A,#0A1220)">'+
      '<h3>Prize pool breakdown</h3>'+
      '<p>Entry fee $'+t.entry+' · Platform fee '+PRICES.tournamentPct+'% · Winner takes '+money(t.prize)+'</p>'+
      '<div class="tile__emoji">💰</div>'+
    '</div>'+

    '<div class="sticky-bar">'+
      '<div class="sticky-bar__price" style="flex:1">'+
        '<b>$'+t.entry+'</b>'+
        '<span>per player + $'+tourneyFee(t.entry)+' platform fee</span>'+
      '</div>'+
      (joined
        ? '<button class="btn btn--ok" disabled>✓ Registered</button>'
        : t.status === 'draft'
          ? '<button class="btn btn--ghost" disabled>Not yet open</button>'
          : '<button class="btn btn--primary" data-act="tourneyjoin" data-id="'+t.id+'">Join</button>')+
    '</div>'+
  '</div>';
}

/* ---------- RANKINGS ---------- */
function rankListHTML(){
  const q = state.rankQuery.trim().toLowerCase();
  let list;
  if (state.rankList === 'national'){
    list = DB.users.filter(u => u.isNational && u.role !== 'admin').sort((a,b) => a.rankN - b.rankN);
  } else {
    list = DB.users.filter(u => !u.isNational && u.role !== 'admin' && u.id !== 'me').sort((a,b) => b.points - a.points);
  }
  if (state.rankRegion !== 'All') list = list.filter(u => u.region === state.rankRegion);
  if (state.rankLevel !== 'All'){
    if (state.rankLevel === '5.0+') list = list.filter(u => parseFloat(u.level) >= 5);
    else list = list.filter(u => u.level === state.rankLevel);
  }
  if (q) list = list.filter(u => u.name.toLowerCase().indexOf(q) > -1);
  if (!list.length) return '<div class="empty">No players match those filters.</div>';
  return list.map((u, i) => {
    const rank = state.rankList === 'national' ? u.rankN : (i + 1);
    const top = rank <= 3 ? ' is-top' : '';
    return '<div class="rankrow" data-act="player" data-id="'+u.id+'">'+
      '<div class="rankrow__n'+top+'">'+rank+'</div>'+
      avatarHTML(u, 'av--sm')+
      '<div class="rankrow__info">'+
        '<div class="rankrow__name">'+u.name+'</div>'+
        '<div class="rankrow__meta">'+u.region+' · NTRP '+u.level+'</div>'+
      '</div>'+
      '<div class="rankrow__pts">'+
        '<b>'+u.points.toLocaleString()+'</b>'+
        '<span class="'+(u.move==='up'?'up':'down')+'">'+(u.move==='up'?'▲':'▼')+' '+u.moveBy+'</span>'+
      '</div>'+
    '</div>';
  }).join('');
}
function screenRankings(){
  const regions = ['All','Greater Accra','Ashanti','Central','Northern'];
  const levels = ['All','3.0','3.5','4.0','4.5','5.0+'];
  const isNat = state.rankList === 'national';
  return '<div class="pad">'+
    '<div class="seg">'+
      '<button class="seg__b '+(isNat?'is-on':'')+'" data-act="ranklist" data-v="national">National Rank</button>'+
      '<button class="seg__b '+(!isNat?'is-on':'')+'" data-act="ranklist" data-v="general">General Players</button>'+
    '</div>'+
    (isNat
      ? '<div style="background:linear-gradient(140deg,#0F1B2E,#16263F);border-radius:16px;padding:14px 16px;margin-bottom:12px;color:#fff">'+
          '<div style="font-size:11px;font-weight:900;letter-spacing:.14em;color:var(--green)">OFFICIAL NATIONAL TEAM</div>'+
          '<div style="font-size:12px;font-weight:600;color:rgba(255,255,255,.6);margin-top:6px;line-height:1.4">Verified by RUBIX admin. Rankings are updated only after a confirmed match.</div>'+
        '</div>'
      : '<div style="background:#fff;border-radius:16px;padding:14px 16px;margin-bottom:12px;box-shadow:var(--shadow)">'+
          '<div style="font-size:11px;font-weight:900;letter-spacing:.14em;color:var(--muted)">GENERAL PLAYER POOL</div>'+
          '<div style="font-size:12px;font-weight:600;color:var(--muted);margin-top:6px;line-height:1.4">Community ladder — updated after every verified match.</div>'+
        '</div>')+
    '<div class="search">'+ico('search')+
      '<input data-input="rankQuery" value="'+state.rankQuery.replace(/"/g,'&quot;')+'" placeholder="Search players…">'+
    '</div>'+
    '<div class="chips chips--pad">'+
      regions.map(r => '<button class="chip '+(state.rankRegion===r?'is-on':'')+'" data-act="region" data-v="'+r+'">'+r+'</button>').join('')+
    '</div>'+
    '<div class="chips chips--pad">'+
      levels.map(l => '<button class="chip '+(state.rankLevel===l?'is-on':'')+'" data-act="level" data-v="'+l+'">'+(l==='All'?'Any level':l)+'</button>').join('')+
    '</div>'+
    '<div id="rankList">'+rankListHTML()+'</div>'+
  '</div>';
}

/* ---------- COURTS ---------- */
function screenCourts(){
  const approved = DB.courts.filter(c => c.status === 'approved');
  return '<div class="pad">'+
    '<div class="search">'+ico('search')+
      '<input placeholder="Search courts near you…" data-input="courtQuery">'+
    '</div>'+
    '<div class="chips chips--pad" style="padding-left:0">'+
      '<button class="chip is-on">Nearest</button>'+
      '<button class="chip">Cheapest</button>'+
      '<button class="chip">Top rated</button>'+
      '<button class="chip">Indoor</button>'+
    '</div>'+
    approved.map(c => {
      const c1 = 'hsl('+c.hue+' 62% 56%)';
      const c2 = 'hsl('+((c.hue+45)%360)+' 58% 34%)';
      return '<div class="court-card" data-act="court" data-id="'+c.id+'">'+
        '<div class="court-card__img" style="--c1:'+c1+';--c2:'+c2+'">'+
          '<img src="'+img('court-'+c.id,600,300)+'" alt="" loading="lazy" onerror="this.remove()">'+
          '<div class="court-card__price">$'+c.price+'<small>/hr</small></div>'+
        '</div>'+
        '<div class="court-card__body">'+
          '<div class="court-card__name">'+c.name+'</div>'+
          '<div class="court-card__meta">'+
            '<span>'+stars(c.rating)+'</span>'+
            '<span>📍 '+(c.dist>=1000?(c.dist/1000).toFixed(1)+' km':c.dist+' m')+'</span>'+
            '<span>🎾 '+c.surface+'</span>'+
            '<span>🏟️ '+c.courtCount+' courts</span>'+
          '</div>'+
        '</div>'+
      '</div>';
    }).join('')+
    '<button class="btn btn--outline btn--block" style="margin-top:6px" data-act="submitcourt">+ Submit a new court</button>'+
  '</div>';
}

const DATES = ['Today','Tomorrow','Fri 21','Sat 22','Sun 23'];
const TIMES = ['07:00','08:30','10:00','11:30','14:00','15:30','17:00','18:30','20:00'];
function screenCourt(params){
  const c = courtById(params.id);
  if (!c) return '<div class="empty">Court not found.</div>';
  const c1 = 'hsl('+c.hue+' 62% 56%)';
  const c2 = 'hsl('+((c.hue+45)%360)+' 58% 34%)';
  const b = state.booking;
  const fee = courtFee(c.price);
  const total = c.price + fee;
  const wx = Weather.courtAdvice(c);

  const slots = TIMES.map((t, i) => {
    const taken = (i*3 + c.name.length) % 4 === 0;
    return '<button class="slot '+(taken?'is-off':'')+(b.time===t?' is-on':'')+'" data-act="slot" data-v="'+t+'"'+(taken?' disabled':'')+'>'+t+'</button>';
  }).join('');

  const playersHere = c.playersHere.map(id => {
    const u = userById(id);
    if (!u) return '';
    const sent = state.requestsSent[u.id];
    return '<div class="row" data-act="player" data-id="'+u.id+'">'+
      avatarHTML(u, 'av--sm')+
      '<div class="row__main">'+
        '<div class="row__title">'+u.name+'<span class="lvl">'+u.level+'</span></div>'+
        '<div class="row__sub"><span class="dot '+statusDot(u.avail)+'"></span>'+u.status+'</div>'+
      '</div>'+
      '<button class="btn btn--sm '+(sent?'is-sent':'btn--primary')+'" data-act="request" data-id="'+u.id+'">'+(sent?'Sent':'Invite')+'</button>'+
    '</div>';
  }).join('');

  const coaches = c.coaches.map(co => {
    const owner = userById(co.userId);
    const verBadge = co.verified
      ? '<span class="badge badge--ok" style="font-size:9px;padding:3px 7px">✓ Verified</span>'
      : '<span class="badge badge--amber" style="font-size:9px;padding:3px 7px">Pending</span>';
    return '<div class="coach" data-act="coach" data-id="'+co.id+'" data-court="'+c.id+'">'+
      (owner ? avatarHTML(owner, 'av--sm') : '')+
      '<div class="coach__info">'+
        '<div class="coach__name">'+co.name+' '+verBadge+'</div>'+
        '<div class="coach__spec">'+co.spec+' · '+co.exp+'</div>'+
      '</div>'+
      '<div class="coach__rate">$'+co.rate+'<small>per hour</small></div>'+
    '</div>';
  }).join('');

  return '<div class="court-hero">'+
      '<div class="court-hero__bg" style="--c1:'+c1+';--c2:'+c2+'">'+
        '<img src="'+img('court-'+c.id,800,500)+'" alt="" onerror="this.remove()">'+
      '</div>'+
      '<div class="court-hero__grad"></div>'+
      '<div class="court-hero__info">'+
        '<h2>'+c.name+'</h2>'+
        '<p>📍 '+c.address+' · '+(c.dist>=1000?(c.dist/1000).toFixed(1)+' km':c.dist+' m')+' away</p>'+
      '</div>'+
    '</div>'+
    '<div class="pad" style="padding-top:18px">'+
      '<div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">'+
        '<span class="badge badge--green">'+stars(c.rating)+'</span>'+
        '<span class="badge badge--soft">🎾 '+c.surface+'</span>'+
        '<span class="badge badge--soft">🏟️ '+c.courtCount+' courts</span>'+
        '<span class="badge badge--soft">$'+c.price+'/hr</span>'+
        '<span class="fee-tag">+'+money(fee)+' fee</span>'+
      '</div>'+
      '<div class="amenities">'+c.amenities.map(a => '<span>'+a+'</span>').join('')+'</div>'+

      (wx.ok
        ? '<div class="weather-card" style="margin-top:14px">'+
            '<div class="weather-card__now">'+
              '<div class="weather-card__emoji">'+Weather.current().emoji+'</div>'+
              '<div class="weather-card__main">'+
                '<div class="weather-card__t">'+Weather.current().temp+'°</div>'+
                '<div class="weather-card__cond">'+Weather.current().cond+' · '+wx.msg+'</div>'+
              '</div>'+
            '</div>'+
          '</div>'
        : '<div class="safety-banner" style="margin-top:14px">'+
            '<div class="safety-banner__ico">⚠️</div>'+
            '<div>'+
              '<div class="safety-banner__t">Weather advisory</div>'+
              '<div class="safety-banner__s">'+wx.msg+'</div>'+
            '</div>'+
          '</div>')+

      '<div class="sec-title">Coaches at this court <small>'+c.coaches.length+' listed</small></div>'+
      coaches+

      '<div class="sec-title">Players looking for a game <small>'+c.playersHere.length+' here now</small></div>'+
      playersHere+

      '<div class="sec-title">Book a court</div>'+
      '<div class="chips chips--pad" style="padding-left:0">'+
        DATES.map(d => '<button class="chip '+(b.date===d?'is-on':'')+'" data-act="date" data-v="'+d+'">'+d+'</button>').join('')+
      '</div>'+
      '<div class="slots">'+slots+'</div>'+

      '<div class="sticky-bar">'+
        '<div class="sticky-bar__price" style="flex:1">'+
          '<b>'+money(total)+'</b>'+
          '<span>'+money(c.price)+' court + '+money(fee)+' platform fee</span>'+
        '</div>'+
        '<button class="btn btn--primary" data-act="book" data-id="'+c.id+'"'+(b.time?'':' disabled')+'>Book Court</button>'+
      '</div>'+
    '</div>';
}

/* ---------- PROFILE ---------- */
function matchRow(m){
  return '<div class="match" data-act="player" data-id="'+(m.id||'')+'">'+
    '<div class="match__res match__res--'+m.res.toLowerCase()+'">'+m.res+'</div>'+
    '<div class="match__main">'+
      '<div class="match__vs">vs '+m.vs+' '+(m.verified?'<span class="badge badge--ok" style="font-size:8px;padding:2px 6px">✓</span>':'')+'</div>'+
      '<div class="match__meta">'+m.date+' · '+m.surface+'</div>'+
    '</div>'+
    '<div class="match__score">'+m.score+'</div>'+
  '</div>';
}
function screenProfile(params){
  const id = (params && params.id) || 'me';
  const u = userById(id) || getMe();
  const isMe = u.id === 'me';
  const s = u.stats;
  const pct = winPct(s);
  const sent = state.requestsSent[u.id];
  const thread = Chat.threadWith(u.id);
  const chatUnlocked = thread && thread.unlocked;

  const roleBadge =
    u.role === 'admin' ? '<span class="badge" style="background:var(--green);color:var(--navy)">ADMIN</span>' :
    u.role === 'coach' ? '<span class="badge" style="background:rgba(216,255,61,.2);color:var(--green);border:1px solid rgba(216,255,61,.4)">COACH</span>' : '';
  const vendorBadge = u.vendorStatus === 'approved'
    ? '<span class="badge" style="background:rgba(37,194,110,.2);color:#9BE8C2;border:1px solid rgba(37,194,110,.35)">✓ Vendor</span>' : '';
  const commBadge = u.communityId
    ? '<span class="badge" style="background:rgba(255,138,61,.2);color:#FFB27A;border:1px solid rgba(255,138,61,.35)">COMMUNITY LEAD</span>' : '';

  return '<div class="hero">'+
    '<div class="hero__cover">'+
      '<img src="'+img('cover-'+u.id,800,500)+'" alt="" onerror="this.remove()">'+
    '</div>'+
    '<div class="hero__inner">'+
      '<div class="hero__top">'+
        '<span class="badge badge--green">NTRP '+u.level+'</span>'+
        (isMe
          ? '<span class="badge" style="background:rgba(255,255,255,.12);color:#fff">'+u.status+'</span>'
          : '<span class="badge" style="background:rgba(255,255,255,.12);color:#fff">'+(u.dist>=1000?(u.dist/1000).toFixed(1)+' km':u.dist+' m')+' away</span>')+
      '</div>'+
      '<div class="hero__avatar">'+avatarHTML(u, 'av--xl')+'</div>'+
      '<div class="hero__name">'+u.name+'</div>'+
      '<div class="hero__loc">📍 '+u.city+(u.region ? ' · '+u.region : '')+'</div>'+
      '<div style="display:flex;gap:6px;margin-top:10px;flex-wrap:wrap">'+roleBadge+vendorBadge+commBadge+
        (u.verified ? '<span class="badge" style="background:rgba(37,194,110,.2);color:#9BE8C2;border:1px solid rgba(37,194,110,.35)">✓ Verified</span>' : '')+
      '</div>'+
      (u.bio ? '<div style="font-size:12.5px;font-weight:500;color:rgba(255,255,255,.72);margin-top:14px;line-height:1.5">'+u.bio+'</div>' : '')+
      '<div class="hero__chips">'+
        '<span class="pill">'+u.hand+'-handed</span>'+
        '<span class="pill">Favourite: '+u.surface+'</span>'+
        (u.points ? '<span class="pill">'+u.points.toLocaleString()+' pts</span>' : '')+
      '</div>'+
      '<div class="hero__actions">'+
        (isMe
          ? '<button class="btn btn--primary" data-act="editprofile">Edit Profile</button>'+
            '<button class="btn" style="background:rgba(255,255,255,.14);color:#fff" data-act="idcard">'+ico('shield')+'</button>'
          : '<button class="btn btn--primary" data-act="request" data-id="'+u.id+'"'+(sent?' disabled':'')+'>'+(sent?'Request Sent':'Send Request · $'+PRICES.requestPlayer)+'</button>'+
            (chatUnlocked
              ? '<button class="btn btn--gold" data-act="openthread" data-id="'+u.id+'">'+ico('chat')+'</button>'
              : '<button class="btn btn--gold" data-act="unlockchat" data-id="'+u.id+'">'+ico('lock')+'</button>'))+
      '</div>'+
    '</div>'+
  '</div>'+
  '<div class="pad" style="padding-top:0">'+
    '<div class="stats">'+
      '<div class="stat"><b>'+s.played+'</b><span>Matches</span></div>'+
      '<div class="stat"><b>'+s.wins+'</b><span>Wins</span></div>'+
      '<div class="stat"><b>'+s.losses+'</b><span>Losses</span></div>'+
      '<div class="stat stat--hl"><b>'+pct+'%</b><span>Win rate</span></div>'+
    '</div>'+
    '<div class="winbar"><div style="width:'+pct+'%"></div></div>'+
    '<div class="sec-title">Match history <small>'+u.matches.length+' recent</small></div>'+
    u.matches.map(matchRow).join('')+
  '</div>';
}

/* ---------- EDIT PROFILE ---------- */
function screenProfileForm(){
  const u = getMe();
  return '<div class="pad" style="padding-top:8px">'+
    '<div style="background:#fff;border-radius:24px;padding:20px;box-shadow:var(--shadow);margin-bottom:20px">'+
      '<div style="display:flex;gap:16px;align-items:center">'+
        '<div style="position:relative">'+
          avatarHTML(u, 'av--xl')+
          '<div style="position:absolute;right:-4px;bottom:-4px;width:32px;height:32px;border-radius:12px;background:var(--navy);color:#fff;display:grid;place-items:center;border:3px solid #fff">'+ico('camera')+'</div>'+
        '</div>'+
        '<div style="flex:1">'+
          '<div style="font-size:11px;font-weight:800;letter-spacing:.08em;color:var(--muted)">PROFILE PHOTO</div>'+
          '<div style="font-size:13.5px;font-weight:800;margin-top:6px">Tap to change</div>'+
          '<button class="btn btn--ghost btn--sm" style="margin-top:9px" data-act="rerollphoto">Shuffle photo</button>'+
        '</div>'+
      '</div>'+
    '</div>'+
    '<div class="form-field"><label class="form-label">Full name</label>'+
      '<input class="form-input" id="f-name" value="'+u.name.replace(/"/g,'&quot;')+'"></div>'+
    '<div class="form-field"><label class="form-label">Bio</label>'+
      '<textarea class="form-input" id="f-bio">'+u.bio+'</textarea></div>'+
    '<div class="form-row">'+
      '<div class="form-field"><label class="form-label">City</label>'+
        '<input class="form-input" id="f-city" value="'+u.city+'"></div>'+
      '<div class="form-field"><label class="form-label">Region</label>'+
        '<input class="form-input" id="f-region" value="'+u.region+'"></div>'+
    '</div>'+
    '<div class="form-field"><label class="form-label">NTRP Level</label>'+
      '<select class="form-input" id="f-level">'+
        ['2.5','3.0','3.5','4.0','4.5','5.0','5.5','6.0'].map(l =>
          '<option value="'+l+'"'+(u.level===l?' selected':'')+'>'+l+'</option>').join('')+
      '</select></div>'+
    '<div class="form-field"><label class="form-label">Dominant hand</label>'+
      '<div class="form-chips">'+
        ['Right','Left'].map(h =>
          '<button class="form-chip '+(u.hand===h?'is-on':'')+'" data-act="formfield" data-field="hand" data-v="'+h+'">'+h+'-handed</button>').join('')+
      '</div></div>'+
    '<div class="form-field"><label class="form-label">Favourite surface</label>'+
      '<div class="form-chips">'+
        ['Hard','Clay','Grass','Indoor'].map(s =>
          '<button class="form-chip '+(u.surface===s?'is-on':'')+'" data-act="formfield" data-field="surface" data-v="'+s+'">'+s+'</button>').join('')+
      '</div></div>'+
    '<div class="form-field"><label class="form-label">Availability</label>'+
      '<div class="form-chips">'+
        [['Available now','on'],['In 1 hour','soon'],['Tomorrow','soon'],['Busy','off']].map(([l,a]) =>
          '<button class="form-chip '+(u.status===l?'is-on':'')+'" data-act="formfield" data-field="status" data-v="'+l+'" data-avail="'+a+'">'+l+'</button>').join('')+
      '</div></div>'+
    '<div class="form-field"><label class="form-label">Looking for</label>'+
      '<div class="form-chips">'+
        ['Singles','Doubles','Social','Coaching','Competitive'].map(i =>
          '<button class="form-chip '+(u.interests.includes(i)?'is-on':'')+'" data-act="formfield" data-field="interests" data-v="'+i+'">'+i+'</button>').join('')+
      '</div></div>'+
    '<button class="btn btn--primary btn--block" style="margin-top:8px" data-act="saveprofile">Save Profile</button>'+
  '</div>';
}

/* ---------- ID CARD ---------- */
function qrHTML(seed){
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  let cells = '';
  for (let y = 0; y < 9; y++){
    for (let x = 0; x < 9; x++){
      h = (h * 1103515245 + 12345) >>> 0;
      cells += '<div class="qr__c'+(((h>>>16)&1)?' on':'')+'"></div>';
    }
  }
  return '<div class="qr">'+cells+'</div>';
}
function screenIdCard(){
  const u = getMe();
  const c1 = 'hsl('+u.hue+' 78% 58%)';
  const c2 = 'hsl('+((u.hue+50)%360)+' 72% 42%)';
  return '<div class="pad" style="padding-top:14px">'+
    '<div class="idcard">'+
      '<div class="idcard__inner">'+
        '<div class="idcard__top">'+
          '<div class="idcard__brand"><span class="dot"></span>RUBIX TENNIS</div>'+
          '<div style="font-size:10px;font-weight:800;letter-spacing:.12em;color:rgba(255,255,255,.55)">PLAYER ID</div>'+
        '</div>'+
        '<div class="idcard__body">'+
          '<div class="idcard__photo" style="--c1:'+c1+';--c2:'+c2+'">'+
            u.initials+
            '<img src="'+img(u.id+'-'+u.photo,320,320)+'" alt="" onerror="this.remove()">'+
          '</div>'+
          '<div>'+
            '<div class="idcard__name">'+u.name+'</div>'+
            '<div class="idcard__role">'+ (u.isNational ? 'National Player' : u.role === 'coach' ? 'Coach' : 'Member') +'</div>'+
            '<div class="idcard__no">'+u.idNumber+'</div>'+
          '</div>'+
        '</div>'+
        '<div class="idcard__grid">'+
          '<div class="idcard__cell"><span>Level</span><b>NTRP '+u.level+'</b></div>'+
          '<div class="idcard__cell"><span>Hand</span><b>'+u.hand+'</b></div>'+
          '<div class="idcard__cell"><span>Home court</span><b>'+u.club+'</b></div>'+
          '<div class="idcard__cell"><span>Region</span><b>'+u.region+'</b></div>'+
        '</div>'+
        '<div class="idcard__bottom">'+
          '<div class="idcard__valid">MEMBER SINCE<b>'+u.memberSince.toUpperCase()+'</b></div>'+
          qrHTML(u.idNumber + u.name)+
        '</div>'+
      '</div>'+
    '</div>'+
    '<div style="text-align:center;margin-top:22px;font-size:11.5px;font-weight:600;color:var(--muted);line-height:1.6">'+
      'This is your digital RUBIX ID.<br>Show it at verified courts and clubs.'+
    '</div>'+
  '</div>';
}

/* ---------- CHATS LIST ---------- */
function screenChats(){
  const me = getMe();
  const unlocked = DB.chats.filter(c => c.unlocked);
  const locked = DB.chats.filter(c => !c.unlocked);
  const renderThread = (c) => {
    const u = userById(c.withId);
    if (!u) return '';
    const last = c.messages[c.messages.length - 1];
    const unread = last && last.from !== 'me' && last.ts > c.lastRead ? 1 : 0;
    return '<div class="chat-list-item" data-act="openthread" data-id="'+u.id+'">'+
      avatarHTML(u, 'av--sm')+
      '<div class="chat-list-item__main">'+
        '<div class="chat-list-item__top">'+
          '<div class="chat-list-item__name">'+u.name+'</div>'+
          '<div class="chat-list-item__time">'+(last ? timeAgo(last.ts) : '')+'</div>'+
        '</div>'+
        '<div class="chat-list-item__preview">'+(last ? escapeHTML(last.text) : 'Start the conversation')+'</div>'+
      '</div>'+
      (unread ? '<div class="chat-list-item__unread">1</div>' : '')+
    '</div>';
  };

  return '<div class="pad">'+
    '<div style="display:flex;align-items:center;gap:10px;background:linear-gradient(140deg,#16233A,#0A1220);border-radius:18px;padding:14px 16px;color:#fff;margin-bottom:16px">'+
      '<div style="flex:1">'+
        '<div style="font-size:10.5px;font-weight:900;letter-spacing:.14em;color:var(--green)">UNLOCKED CHATS</div>'+
        '<div style="font-size:12px;font-weight:600;color:rgba(255,255,255,.62);margin-top:5px">Unlock any thread for $'+PRICES.chatUnlock+' — one-time per person.</div>'+
      '</div>'+
      '<div style="font-size:24px;font-weight:900;letter-spacing:-.05em;color:var(--green)">'+unlocked.length+'</div>'+
    '</div>'+

    (unlocked.length
      ? '<div class="sec-title" style="margin-top:6px">Active <small>'+unlocked.length+'</small></div>'+unlocked.map(renderThread).join('')
      : '<div class="empty" style="padding:26px 20px">No unlocked chats yet.<br><span style="font-size:11px;opacity:.7">Tap any player → "Unlock chat"</span></div>')+

    (locked.length
      ? '<div class="sec-title">Locked <small>'+locked.length+'</small></div>'+
        locked.map(c => {
          const u = userById(c.withId);
          if (!u) return '';
          return '<div class="chat-list-item" data-act="unlockchat" data-id="'+u.id+'" style="opacity:.75">'+
            avatarHTML(u, 'av--sm')+
            '<div class="chat-list-item__main">'+
              '<div class="chat-list-item__top">'+
                '<div class="chat-list-item__name">'+u.name+' <span class="badge badge--amber" style="font-size:8px;padding:2px 6px">LOCKED</span></div>'+
              '</div>'+
              '<div class="chat-list-item__preview">'+ (c.messages[0] ? escapeHTML(c.messages[0].text).slice(0,60)+'…' : 'Unlock to see messages') +'</div>'+
            '</div>'+
            '<div style="display:flex;align-items:center;gap:6px;color:var(--muted);font-size:11px;font-weight:800">'+ico('lock')+' $'+PRICES.chatUnlock+'</div>'+
          '</div>';
        }).join('')
      : '')+
  '</div>';
}

/* ---------- CHAT VIEW ---------- */
function screenChatView(params){
  const u = userById
