/* ============================================================
   RUBIX TENNIS — app.js
   ────────────────────────────────────────────────────────────
   SECTION 1  : Icons
   SECTION 2  : Utilities
   SECTION 3  : Data models (DB · ADMINS · seed · posts)
   SECTION 4  : Session · Wallet · Monetization
   SECTION 5  : Tournament engine
   SECTION 6  : Chat engine
   SECTION 7  : Match verification engine
   SECTION 8  : AI recommendations
   SECTION 9  : Weather
   [Sessions 3–5 continue below]
   ============================================================ */

/* ============================================================
   SECTION 1 — ICONS
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
  gift2:'<rect x="3.5" y="8.5" width="17" height="12" rx="2.5"/><path d="M3.5 13h17M12 8.5v12M12 8.5S10.5 4 8 4a2.2 2.2 0 0 0 0 4.5M12 8.5S13.5 4 16 4a2.2 2.2 0 0 1 0 4.5"/>',
  dots:'<circle cx="6" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="18" cy="12" r="1.5"/>',
  close:'<path d="M6 6l12 12M18 6 6 18"/>'
};
function ico(n, cls){
  return '<svg class="'+(cls||'')+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round">'+(ICONS[n]||'')+'</svg>';
}

/* ============================================================
   SECTION 2 — UTILITIES
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
   SECTION 3 — DATA MODELS
   ============================================================ */
function img(seed, w, h){
  return 'https://picsum.photos/seed/rubix-' + encodeURIComponent(seed) + '/' + w + '/' + h;
}

const PLATFORM = {
  owner: 'RUBIX Ventures',
  feePct: {
    request: 0, chat: 0,
    court: 10, coach: 12,
    tournament: 15, vendorListing: 0,
    shopSale: 8, communityJoin: 5
  },
  flatFees: {
    requestPlayer: 0.99,
    unlockChat: 1.99,
    vendorListing: 4.99,
    tournamentHost: 9.99,
    communityCreate: 14.99,
    priorityBooking: 2.99
  },
  revenue: 0,
  history: []
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
  posts: [],
  reports: [],
  transactions: [],
  pending: { vendors:[], communities:[], coaches:[], courts:[] }
};

const ADMINS = [
  { id:'admin', email:'admin@rubix.app', pin:'1234', name:'Administrator',
    initials:'AD', hue:0, photo:42, isDefault:true, createdAt:'2024-01-01', lastLogin:null }
];

/* ---- User factory ----
   NOTE: profileComplete is FALSE by default.
   Every account (player or admin) creates a profile on first entry. */
function mkUser(o){
  const initials = (o.name || '? ?').split(' ').map(w => w[0]).slice(0,2).join('').toUpperCase();
  return Object.assign({
    id: o.id, name: o.name, initials,
    hue: o.hue != null ? o.hue : 158,
    city: o.city || 'Accra', region: o.region || 'Greater Accra',
    level: o.level || '3.5', hand: o.hand || 'Right',
    surface: o.surface || 'Hard', club: o.club || 'RUBIX Club',
    status: o.status || 'Available now', avail: o.avail || 'on',
    role:'user', vendorStatus:'none',
    verified:false, idVerified:false, photoVerified:false,
    bio:'', interests:['Singles','Social'],
    playstyle:['Baseliner'],
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
    profileComplete: o.profileComplete === true,
    avatarDataUrl: null,
    coverDataUrl: null,
    posts: o.posts || [],
    notifPrefs:{ push:true, email:false, nearby:true, requests:true, chat:true,
      bookings:true, community:true, quietHours:false },
    safety:{ emergencyContact:'', shareLocationBeforeMatch:true, blocked:[] },
    stats:{ played:0, wins:0, losses:0 },
    matches:[],
    photo:(Math.random()*1000)|0
  }, o);
}

/* ---- ME — starts INCOMPLETE. Onboarding required. ---- */
DB.users.push(mkUser({
  id:'me',
  name:'', // set during onboarding
  hue:158,
  profileComplete: false,
  wallet: 24.50
}));

/* ---- Players ---- */
const RAW = [
  {id:'p1',name:'Maya Okafor',hue:150,level:'4.5',dist:120,status:'Available now',avail:'on',hand:'Right',surface:'Hard',region:'Greater Accra',city:'East Legon',points:2450,isNational:true,rankN:4,move:'up',moveBy:3,communityId:'k1'},
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
RAW.forEach(p => DB.users.push(mkUser(Object.assign({ profileComplete:true, verified:true }, p))));

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
      bracket:null, completed:false
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
        { id:'m1', from:'me',  text:'Hey Maya! Saw you\'re nearby — up for a hit this week?', ts: d(180) },
        { id:'m2', from:'p1',  text:'Hey! Yeah definitely. Thursday 6pm at Riverside?', ts: d(175) },
        { id:'m3', from:'me',  text:'Perfect, booking us a court now.', ts: d(170) }
      ], lastRead: now() - 3600000 },
    { id:'ch2', withId:'p3', unlocked:false,
      messages:[
        { id:'m4', from:'p3', text:'Hi — I can coach you on serve mechanics. Want to try a session?', ts: d(240) }
      ], lastRead: 0 },
    { id:'ch3', withId:'p5', unlocked:true,
      messages:[
        { id:'m5', from:'p5', text:'Doubles crew is short one — Sunday 10am?', ts: d(60) }
      ], lastRead: 0 }
  ];
}
seedChats();

/* ---- Feed (legacy) ---- */
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

/* ---- User-authored posts ---- */
function seedPosts(){
  DB.posts = [
    { id:'p1', authorId:'p1', text:'Won 6-4 6-3 against Diego at Riverside this morning. Court was 🔥',
      imageUrl: img('post-riverside', 800, 500), imageDataUrl: null,
      likes:['p2','p5','p7','p11'], comments:[
        { id:'cm1', fromId:'p2', text:'GG Maya, rematch next week?', ts: now()-1700000 }
      ],
      createdAt: now()-1800000, editedAt: null, isEdited:false, visibility:'public' },
    { id:'p2', authorId:'p5', text:'Just got the new Head Speed MP — first hit tomorrow at Clay Academy. Excited.',
      imageUrl: img('post-racket', 800, 500), imageDataUrl: null,
      likes:['me','p1','p3'], comments:[],
      createdAt: now()-7200000, editedAt: null, isEdited:false, visibility:'public' },
    { id:'p3', authorId:'p8', text:'Doubles tonight at Prime Hardwood 8pm. Need 2 more — hit me in the DMs.',
      imageUrl: null, imageDataUrl: null,
      likes:['p1','p2','p3','p5','p7','p11'], comments:[
        { id:'cm2', fromId:'p6', text:'I\'m in if you still need one', ts: now()-20000000 },
        { id:'cm3', fromId:'p10', text:'Count me in too', ts: now()-19000000 }
      ],
      createdAt: now()-21600000, editedAt: null, isEdited:false, visibility:'public' },
    { id:'p4', authorId:'p3', text:'Working on the kick serve all week. Progress is real.',
      imageUrl: img('post-serve', 800, 500), imageDataUrl: null,
      likes:['p1','p5'], comments:[],
      createdAt: now()-43200000, editedAt: null, isEdited:false, visibility:'public' },
    { id:'p5', authorId:'p2', text:'Lost my Wilson bag at Northgate last night — if anyone sees it please DM me 🙏',
      imageUrl: null, imageDataUrl: null,
      likes:['p7'], comments:[],
      createdAt: now()-54000000, editedAt: null, isEdited:false, visibility:'public' },
    { id:'p6', authorId:'p5', text:'Sunday socials at Riverside are back. 10am, weather permitting. All levels.',
      imageUrl: img('post-social', 800, 500), imageDataUrl: null,
      likes:['me','p1','p2','p3','p8'], comments:[
        { id:'cm4', fromId:'p11', text:'I\'ll be there', ts: now()-60000000 }
      ],
      createdAt: now()-72000000, editedAt: null, isEdited:false, visibility:'public' },
    { id:'p7', authorId:'p8', text:'12-match win streak. Legs tired but I\'m not stopping.',
      imageUrl: null, imageDataUrl: null,
      likes:['p1','p5','p11'], comments:[],
      createdAt: now()-86400000, editedAt: null, isEdited:false, visibility:'public' },
    { id:'p8', authorId:'p1', text:'Anyone got a good clay court in East Legon? Tired of driving 30 mins every time.',
      imageUrl: null, imageDataUrl: null,
      likes:['p2','p7'], comments:[
        { id:'cm5', fromId:'p5', text:'Riverside has 2 clay courts, they open early', ts: now()-100000000 }
      ],
      createdAt: now()-108000000, editedAt: null, isEdited:false, visibility:'public' }
  ];
  DB.users.forEach(u => {
    u.posts = DB.posts.filter(p => p.authorId === u.id);
  });
}
seedPosts();

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
      date: (2 + i*5) + ' Jun',
      surface: i % 2 ? 'Clay' : u.surface,
      verified: i < 3
    });
  }
  return out;
}
DB.users.forEach(u => {
  if (u.role === 'admin' || u.id === 'me') return;
  const played = 30 + (u.points % 27);
  const wins = Math.round(played * (0.38 + (parseFloat(u.level)-3)/6));
  u.stats = { played, wins: Math.min(wins, played-4), losses: 0 };
  u.stats.losses = u.stats.played - u.stats.wins;
  u.matches = genMatches(u, 5);
});

/* ============================================================
   SECTION 4 — SESSION · WALLET · MONETIZATION
   ============================================================ */
const SESSION = {
  mode: null,
  adminId: null
};

const ADMIN = { log: [] };

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

function walletOf(userId){
  const u = userById(userId);
  return u ? u.wallet : 0;
}
function txsOf(userId){
  return DB.transactions.filter(t => t.userId === userId).sort((a,b) => b.ts - a.ts);
}

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
function communityFee(mo){ return +(mo * PRICES.communityPct / 100).toFixed(2); }

/* ============================================================
   SECTION 5 — TOURNAMENT ENGINE
   ============================================================ */
const Tournaments = {
  buildBracket(t){
    const teams = t.teams.map(x => ({ id: x.id, name: x.name, members: x.members.slice() }));
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
      if (matches.every(m => m.status === 'bye')) break;
      current = matches.map(() => null);
    }
    t.bracket = { rounds: [rounds[0]], currentRound: 0, phase:'active' };
    return t.bracket;
  },
  recordResult(t, roundIdx, matchId, scoreA, scoreB, agreedByUser){
    if (!t.bracket) return false;
    const round = t.bracket.rounds[roundIdx];
    const m = round.find(x => x.id === matchId);
    if (!m || !m.teamA || !m.teamB) return false;
    m.scoreA = scoreA;
    m.scoreB = scoreB;
    m.status = 'completed';
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
   SECTION 6 — CHAT ENGINE
   ============================================================ */
const Chat = {
  threadWith(userId){ return DB.chats.find(c => c.withId === userId); },
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
  }
};

/* ============================================================
   SECTION 7 — MATCH VERIFICATION ENGINE
   ============================================================ */
const Verify = {
  all(){ return (getMe().verifications ||= []); },
  pending(){ return this.all().filter(x => x.status === 'awaiting-both' || x.status === 'awaiting-me'); },
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
  dispute(v){ v.status = 'disputed'; }
};

/* ============================================================
   SECTION 8 — AI RECOMMENDATIONS
   ============================================================ */
const AI = {
  matchScore(me, other){
    let s = 0;
    const lvlDiff = Math.abs(parseFloat(me.level) - parseFloat(other.level));
    s += Math.max(0, 40 - lvlDiff * 12);
    if (other.surface === me.surface) s += 15;
    if (other.hand !== me.hand) s += 10;
    if (other.region === me.region) s += 15;
    if (other.status === 'Available now') s += 10;
    if (other.dist <= 500) s += 10;
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
   SECTION 9 — WEATHER (mock, deterministic)
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
    if (court.surface === 'Indoor Hard' || court.surface === 'Indoor'){
      return { ok:true, msg:'Climate controlled — always playable.' };
    }
    const f = this.forecast(3);
    const bad = f.find(x => !x.playable);
    if (!bad) return { ok:true, msg:'Great conditions for the next 3 days.' };
    return { ok:false, msg: bad.label + ' looks rough — ' + bad.cond + '. Consider an indoor court.' };
  }
};

/* ════════════════════════════════════════════════════════════
   END OF SESSION 2 — continue with Session 3 below
   ════════════════════════════════════════════════════════════ */
/* ============================================================
   SECTION 10 — ROUTER + STATE + DOM REFS + HELPERS
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
  /* application drafts */
  vendorDraft:null, coachCourt:null, courtSurface:null, hostFormat:null,
  /* admin */
  adminTab:'overview', adminAppTab:'vendors', adminUserQuery:'',
  adminReportFilter:'open',
  /* forms */
  gateAdminEmail:'', gateAdminPin:'',
  /* shop filter */
  shopFilter:'all',
  /* tournaments */
  tourneyFilter:'open',
  /* chats */
  activeChat:null,
  /* onboarding */
  onboardStep: 1,
  onboardDraft: null,
  onboardRole: null,     // 'player' | 'admin'
  /* post composer */
  postDraft: null,
  commentDraft: '',
  /* profile form */
  profileDraft: null,
  /* misc */
  requestsSent:{}, topupPick:25,
  feedLikes:{}, feedComments:{},
  feedTab: 'foryou'
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
  {id:'more',       label:'MORE',       icon:'grid'}
];
const VISIBLE_TABS = TABS.map(t => t.id);

function go(screen, params, title){
  nav.stack.push({ screen, params: params || {}, title: title || '' });
  render();
  mainEl.scrollTop = 0;
}
function back(){ nav.stack.pop(); render(); }
function setTab(t){ nav.tab = t; nav.stack = []; render(); mainEl.scrollTop = 0; }

/* -------- Lookup helpers -------- */
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

/* -------- Avatar rendering (respects uploaded photo) -------- */
function avatarHTML(u, cls){
  if (!u) return '<div class="av '+(cls||'')+'"></div>';
  const h = u.hue != null ? u.hue : 158;
  const c1 = 'hsl(' + h + ' 78% 58%)';
  const c2 = 'hsl(' + ((h+50)%360) + ' 72% 42%)';
  const src = u.avatarDataUrl ? u.avatarDataUrl : img(u.id + '-' + u.photo, 200, 200);
  const initials = u.initials || '?';
  return '<div class="av ' + (cls||'') + '" style="--c1:' + c1 + ';--c2:' + c2 + '">' +
    '<span class="av__ini">' + initials + '</span>' +
    '<img src="' + src + '" alt="" loading="lazy" onerror="this.remove()">' +
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
   PAYWALL / TOPUP POPUPS
   ============================================================ */
function paywallPopup(opts){
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
   IMAGE PICKER HELPER
   ============================================================ */
function attachImagePicker(inputId, cb){
  const input = document.getElementById(inputId);
  if (!input || input.dataset.bound) return;
  input.dataset.bound = '1';
  input.addEventListener('change', e => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024){ toast('Image must be under 5 MB'); input.value = ''; return; }
    const reader = new FileReader();
    reader.onload = () => downscaleImage(reader.result, 1200, 0.85, cb);
    reader.onerror = () => toast('Could not read image');
    reader.readAsDataURL(file);
    input.value = '';
  });
}

function downscaleImage(dataUrl, maxW, quality, cb){
  const image = new Image();
  image.onload = () => {
    if (image.width <= maxW){ cb(dataUrl); return; }
    const scale = maxW / image.width;
    const w = maxW;
    const h = Math.round(image.height * scale);
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, w, h);
    try { cb(canvas.toDataURL('image/jpeg', quality)); }
    catch(e){ cb(dataUrl); }
  };
  image.onerror = () => cb(dataUrl);
  image.src = dataUrl;
}

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
   SECTION 11 — ENTRY GATE
   ============================================================ */
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
            '<div class="entry-card__s">Create your player profile — takes 30 seconds</div>'+
          '</div>'+
          ico('chev')+
        '</button>'+
        '<button class="entry-card entry-card--admin" data-act="enteradmin">'+
          '<div class="entry-card__ico">'+ico('shield2')+'</div>'+
          '<div class="entry-card__main">'+
            '<div class="entry-card__t">Enter Admin Console <span class="badge" style="background:rgba(216,255,61,.25);color:var(--green);font-size:9px;padding:2px 7px">RESTRICTED</span></div>'+
            '<div class="entry-card__s">Admins also build a profile on first sign-in</div>'+
          '</div>'+
          ico('chev')+
        '</button>'+
      '</div>'+
      '<div class="gate__foot">NO ADS · EVER · v1.0</div>'+
    '</div>'+
  '</div>';
}

/* ============================================================
   SECTION 12 — ADMIN LOGIN
   ============================================================ */
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

/* ============================================================
   SECTION 13 — ONBOARDING WIZARD
   Used by BOTH players and admins on first entry.
   ============================================================ */
function blankDraft(){
  return {
    avatarDataUrl: null,
    name: '',
    level: '3.5',
    hand: 'Right',
    surface: 'Hard',
    city: '',
    region: 'Greater Accra',
    bio: '',
    playstyle: ['Baseliner'],
    interests: ['Singles'],
    status: 'Available now',
    avail: 'on',
    adminEmail: '',
    adminPin: ''
  };
}
function levelLabel(v){
  const n = parseFloat(v);
  if (n <= 1.5) return 'Beginner';
  if (n <= 2.5) return 'Casual';
  if (n <= 3.5) return 'Competitive';
  if (n <= 4.5) return 'Advanced';
  return 'Elite';
}

function screenOnboarding(){
  if (!state.onboardDraft) state.onboardDraft = blankDraft();
  const d = state.onboardDraft;
  const step = state.onboardStep;
  const isAdmin = state.onboardRole === 'admin';
  const maxSteps = isAdmin ? 2 : 4;

  /* Progress bar segments */
  const progress = [];
  for (let n = 1; n <= maxSteps; n++){
    const cls = n < step ? 'is-done' : (n === step ? 'is-on' : '');
    progress.push('<div class="onboard-progress__seg '+cls+'"></div>');
  }

  let body = '';
  let footer = '';

  /* ========== STEP 1 — PHOTO + NAME (both roles) ========== */
  if (step === 1){
    const hasPhoto = !!d.avatarDataUrl;
    body =
      '<div class="onboard-eyebrow">'+(isAdmin ? 'ADMIN SETUP' : 'PLAYER SETUP')+' · STEP 1 OF '+maxSteps+'</div>'+
      '<div class="onboard-title">Your photo &amp; name</div>'+
      '<div class="onboard-sub">'+ (isAdmin
        ? 'Admins get a real profile too — this is what other admins and moderators will see when you take actions.'
        : 'A clear photo helps other players recognise you at the court. You can change it anytime.'
      ) +'</div>'+
      '<div class="onboard-avatar-drop '+(hasPhoto?'has-photo':'')+'" data-act="pick-avatar">'+
        (hasPhoto
          ? '<img src="'+d.avatarDataUrl+'" alt="">'
          : '<span class="onboard-avatar-drop__icon">'+ico('camera')+'</span>')+
        '<span class="onboard-avatar-drop__label">'+(hasPhoto?'Tap to change':'Tap to upload')+'</span>'+
      '</div>'+
      '<div class="form-field" style="margin-top:22px">'+
        '<label class="form-label">Full name</label>'+
        '<input class="form-input" data-input="onboard-name" value="'+escapeHTML(d.name)+'" placeholder="'+(isAdmin?'e.g. Nana Adjei':'e.g. Alex Rivera')+'" autocomplete="name">'+
      '</div>'+
      '<button class="btn btn--ghost btn--block btn--sm" data-act="onboard-skip-photo">Skip photo for now</button>';
    footer =
      '<button class="btn btn--ghost" data-act="exitgate">Cancel</button>'+
      '<button class="btn btn--primary" data-act="onboard-next"'+(d.name.trim()?'':' disabled')+'>Continue</button>';
  }

  /* ========== STEP 2 (ADMIN ONLY) — credentials ========== */
  if (isAdmin && step === 2){
    body =
      '<div class="onboard-eyebrow">ADMIN SETUP · STEP 2 OF 2</div>'+
      '<div class="onboard-title">Your admin credentials</div>'+
      '<div class="onboard-sub">Set the email and passcode you\'ll use to sign into this console. Keep them safe.</div>'+
      '<div class="form-field">'+
        '<label class="form-label">Admin email</label>'+
        '<input class="form-input" type="email" data-input="onboard-admin-email" value="'+escapeHTML(d.adminEmail)+'" placeholder="you@rubix.app">'+
      '</div>'+
      '<div class="form-field">'+
        '<label class="form-label">Passcode (4–6 digits)</label>'+
        '<input class="form-input" type="password" inputmode="numeric" maxlength="6" data-input="onboard-admin-pin" value="'+escapeHTML(d.adminPin)+'" placeholder="••••">'+
      '</div>'+
      '<div style="background:#F5F7F2;border-radius:14px;padding:14px;font-size:12px;font-weight:600;color:#3A4756;line-height:1.6;margin-top:14px">'+
        '<b>Demo note:</b> the default admin (<b>admin@rubix.app / 1234</b>) still works. This new account is added to the admin roster.'+
      '</div>';
    const valid = d.adminEmail.trim().length > 3 && d.adminEmail.includes('@') && d.adminPin.length >= 4;
    footer =
      '<button class="btn btn--ghost" data-act="onboard-back">Back</button>'+
      '<button class="btn btn--primary" data-act="onboard-finish"'+(valid?'':' disabled')+'>Create admin account</button>';
  }

  /* ========== STEP 2 (PLAYER ONLY) — your game ========== */
  if (!isAdmin && step === 2){
    const val = parseFloat(d.level);
    const pct = ((val - 1) / 4) * 100;
    body =
      '<div class="onboard-eyebrow">PLAYER SETUP · STEP 2 OF 4</div>'+
      '<div class="onboard-title">Your game</div>'+
      '<div class="onboard-sub">Help us match you with players at the right level and runs that fit your style.</div>'+
      '<div class="form-field">'+
        '<label class="form-label">NTRP rating</label>'+
        '<div class="skill-slider">'+
          '<div class="skill-slider__track">'+
            '<div class="skill-slider__fill" style="width:'+pct+'%"></div>'+
            '<div class="skill-slider__thumb" style="left:'+pct+'%"></div>'+
            '<input type="range" min="1" max="5" step="0.5" value="'+d.level+'" data-input="onboard-level">'+
          '</div>'+
          '<div class="skill-slider__label">'+val.toFixed(1)+' · '+levelLabel(d.level)+'</div>'+
        '</div>'+
      '</div>'+
      '<div class="form-field" style="margin-top:22px">'+
        '<label class="form-label">Dominant hand</label>'+
        '<div class="form-chips">'+
          ['Right','Left'].map(p =>
            '<button class="form-chip '+(d.hand===p?'is-on':'')+'" data-act="onboard-field" data-f="hand" data-v="'+p+'">'+p+'-handed</button>'
          ).join('')+
        '</div>'+
      '</div>'+
      '<div class="form-field">'+
        '<label class="form-label">Favourite surface</label>'+
        '<div class="form-chips">'+
          ['Hard','Clay','Grass','Indoor'].map(p =>
            '<button class="form-chip '+(d.surface===p?'is-on':'')+'" data-act="onboard-field" data-f="surface" data-v="'+p+'">'+p+'</button>'
          ).join('')+
        '</div>'+
      '</div>';
    footer =
      '<button class="btn btn--ghost" data-act="onboard-back">Back</button>'+
      '<button class="btn btn--primary" data-act="onboard-next">Continue</button>';
  }

  /* ========== STEP 3 (PLAYER ONLY) — location + bio ========== */
  if (!isAdmin && step === 3){
    body =
      '<div class="onboard-eyebrow">PLAYER SETUP · STEP 3 OF 4</div>'+
      '<div class="onboard-title">Where do you play?</div>'+
      '<div class="onboard-sub">We use this to find courts, communities and players near you.</div>'+
      '<div class="form-field">'+
        '<label class="form-label">City</label>'+
        '<input class="form-input" data-input="onboard-city" value="'+escapeHTML(d.city)+'" placeholder="e.g. Accra">'+
      '</div>'+
      '<div class="form-field">'+
        '<label class="form-label">Region</label>'+
        '<input class="form-input" data-input="onboard-region" value="'+escapeHTML(d.region)+'" placeholder="e.g. Greater Accra">'+
      '</div>'+
      '<div class="form-field">'+
        '<label class="form-label">Short bio</label>'+
        '<textarea class="form-input" data-input="onboard-bio" maxlength="240" placeholder="What\'s your game like? What are you looking for?">'+escapeHTML(d.bio)+'</textarea>'+
        '<div style="font-size:11px;font-weight:700;color:var(--muted);text-align:right;margin-top:6px">'+d.bio.length+' / 240</div>'+
      '</div>'+
      '<div class="form-field">'+
        '<label class="form-label">Playstyle (pick any)</label>'+
        '<div class="form-chips">'+
          ['Baseliner','Serve & Volley','All-Court','Counterpuncher','Big Server','Doubles Specialist'].map(p =>
            '<button class="form-chip '+(d.playstyle.includes(p)?'is-on':'')+'" data-act="onboard-toggle" data-f="playstyle" data-v="'+p+'">'+p+'</button>'
          ).join('')+
        '</div>'+
      '</div>'+
      '<div class="form-field">'+
        '<label class="form-label">Interests (pick any)</label>'+
        '<div class="form-chips">'+
          ['Singles','Doubles','Social','Coaching','Competitive','Training'].map(p =>
            '<button class="form-chip '+(d.interests.includes(p)?'is-on':'')+'" data-act="onboard-toggle" data-f="interests" data-v="'+p+'">'+p+'</button>'
          ).join('')+
        '</div>'+
      '</div>';
    footer =
      '<button class="btn btn--ghost" data-act="onboard-back">Back</button>'+
      '<button class="btn btn--primary" data-act="onboard-next"'+(d.city.trim()?'':' disabled')+'>Continue</button>';
  }

  /* ========== STEP 4 (PLAYER ONLY) — preview + publish ========== */
  if (!isAdmin && step === 4){
    const tempUser = {
      id:'preview',
      name: d.name || 'Your name',
      initials: (d.name || 'Y N').split(' ').map(w => w[0]).slice(0,2).join('').toUpperCase(),
      hue: 158, avatarDataUrl: d.avatarDataUrl, photo: 0,
      level: d.level, hand: d.hand, surface: d.surface,
      city: d.city || '—', region: d.region
    };
    body =
      '<div class="onboard-eyebrow">PLAYER SETUP · STEP 4 OF 4</div>'+
      '<div class="onboard-title">All set, '+(d.name.split(' ')[0] || 'friend')+'</div>'+
      '<div class="onboard-sub">Here\'s how your profile will look. You can edit everything later.</div>'+
      '<div style="background:#fff;border-radius:22px;padding:20px;box-shadow:var(--shadow)">'+
        '<div style="display:flex;gap:16px;align-items:center">'+
          avatarHTML(tempUser, 'av--xl')+
          '<div style="flex:1;min-width:0">'+
            '<div style="font-size:20px;font-weight:900;letter-spacing:-.04em">'+escapeHTML(d.name || 'Your name')+'</div>'+
            '<div style="font-size:12px;font-weight:700;color:var(--muted);margin-top:5px">📍 '+escapeHTML(d.city||'—')+' · '+escapeHTML(d.region)+'</div>'+
            '<div style="display:flex;gap:6px;margin-top:10px;flex-wrap:wrap">'+
              '<span class="badge badge--green">NTRP '+d.level+'</span>'+
              '<span class="badge badge--soft">'+d.hand+'-handed</span>'+
              '<span class="badge badge--soft">'+d.surface+'</span>'+
            '</div>'+
          '</div>'+
        '</div>'+
        (d.bio ? '<div style="font-size:13px;font-weight:500;color:#3A4756;margin-top:16px;line-height:1.5">'+escapeHTML(d.bio)+'</div>' : '')+
        (d.playstyle.length ? '<div style="margin-top:14px"><div style="font-size:10.5px;font-weight:900;letter-spacing:.1em;color:var(--muted);margin-bottom:8px">PLAYSTYLE</div>'+
          '<div style="display:flex;gap:6px;flex-wrap:wrap">'+d.playstyle.map(p=>'<span class="badge badge--soft">'+p+'</span>').join('')+'</div></div>' : '')+
        (d.interests.length ? '<div style="margin-top:14px"><div style="font-size:10.5px;font-weight:900;letter-spacing:.1em;color:var(--muted);margin-bottom:8px">LOOKING FOR</div>'+
          '<div style="display:flex;gap:6px;flex-wrap:wrap">'+d.interests.map(p=>'<span class="badge badge--soft">'+p+'</span>').join('')+'</div></div>' : '')+
      '</div>';
    footer =
      '<button class="btn btn--ghost" data-act="onboard-back">Edit</button>'+
      '<button class="btn btn--primary" data-act="onboard-finish">Publish my profile</button>';
  }

  return '<div class="onboard-wrap">'+
    '<div class="onboard-progress">'+progress.join('')+'</div>'+
    '<div class="onboard-body">'+body+'</div>'+
    '<div class="onboard-footer">'+footer+'</div>'+
  '</div>';
}

/* ============================================================
   SECTION 14 — DISCOVER (MAP + SHEET)
   ============================================================ */
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
    const src = u.avatarDataUrl ? u.avatarDataUrl : img(u.id + '-' + u.photo, 80, 80);
    return '<button class="pin pin--player" style="left:'+pin.x+'%;top:'+pin.y+'%;--c1:'+c1+';--c2:'+c2+'" data-act="player" data-id="'+u.id+'">'+
      u.initials +
      '<img src="' + src + '" alt="" onerror="this.remove()">' +
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

/* ============================================================
   SECTION 15 — TOURNAMENTS
   ============================================================ */
function tourneyStatusPill(t){
  if (t.completed) return '<span class="badge badge--gold">Completed</span>';
  if (t.status === 'draft') return '<span class="badge badge--soft">Draft</span>';
  if (t.teams.length >= t.maxTeams) return '<span class="badge badge--amber">Full · Starting</span>';
  return '<span class="badge badge--green">Open</span>';
}

function screenTournaments(){
  const f = state.tourneyFilter;
  const list = DB.tournaments.filter(t =>
    f === 'all' ||
    (f === 'open' && !t.completed && t.status !== 'draft') ||
    (f === 'mine' && t.hostId === 'me') ||
    (f === 'completed' && t.completed) ||
    (f === 'draft' && t.status === 'draft')
  );

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
          const fmtLabel = t.format.startsWith('doubles') ? 'DOUBLES' : 'SINGLES';
          return '<div class="tourney-card" data-act="tourney" data-id="'+t.id+'">'+
            '<div class="tourney-card__banner" style="--c1:'+c1+';--c2:'+c2+'">'+
              '<img src="'+img('tourney-'+t.id,600,300)+'" alt="" onerror="this.remove()">'+
              '<div class="tourney-card__badges">'+
                '<span class="badge badge--dark">'+fmtLabel+'</span>'+
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
          return '<div class="verify-card" style="background:#fff;border-radius:20px;padding:18px;margin-bottom:14px;box-shadow:var(--shadow)">'+
            '<div style="font-size:14px;font-weight:900;letter-spacing:-.025em;margin-bottom:10px">vs '+(opp?opp.name:'TBD')+'</div>'+
            '<div style="font-size:12px;font-weight:600;color:var(--muted);margin-bottom:12px">Agree a time with the opposing team in chat, then log the score here.</div>'+
            '<div style="display:flex;gap:9px">'+
              '<button class="btn btn--ghost btn--sm" style="flex:1" data-act="tourneybracket" data-id="'+t.id+'">See bracket</button>'+
              '<button class="btn btn--primary btn--sm" style="flex:1" data-act="tourneyreport" data-t="'+t.id+'" data-m="'+m.id+'">Submit Score</button>'+
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

/* ============================================================
   SECTION 16 — RANKINGS
   ============================================================ */
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

/* ============================================================
   SECTION 17 — COURTS LIST
   ============================================================ */
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

/* ============================================================
   COURT DETAIL
   ============================================================ */
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

/* ════════════════════════════════════════════════════════════
   END OF SESSION 3 — continue with Session 4 below
   ════════════════════════════════════════════════════════════ */
/* ============================================================
   SECTION 18 — PLAYER PROFILE (with posts section)
   ============================================================ */
function matchRow(m){
  return '<div class="game" data-act="player" data-id="'+(m.id||'')+'">'+
    '<div class="game__res game__res--'+m.res.toLowerCase()+'">'+m.res+'</div>'+
    '<div class="game__main">'+
      '<div class="game__vs">vs '+m.vs+' '+(m.verified?'<span class="badge badge--ok" style="font-size:8px;padding:2px 6px">✓</span>':'')+'</div>'+
      '<div class="game__meta">'+m.date+' · '+m.surface+'</div>'+
    '</div>'+
    '<div class="game__score">'+m.score+'</div>'+
  '</div>';
}

function postCardHTML(post, opts){
  opts = opts || {};
  const u = userById(post.authorId);
  if (!u) return '';
  const isMine = post.authorId === 'me';
  const liked = post.likes.includes('me');
  const firstName = u.name.split(' ')[0];
  const imageSrc = post.imageDataUrl || post.imageUrl;
  const commentCount = (post.comments || []).length;

  return '<div class="post-card '+(isMine?'is-mine':'')+'" data-act="post-open" data-id="'+post.id+'">'+
    '<div class="post-card__head">'+
      avatarHTML(u, 'av--sm')+
      '<div class="post-card__main">'+
        '<div class="post-card__name">'+escapeHTML(u.name)+
          (u.verified ? '<span class="badge badge--ok" style="font-size:8px;padding:2px 6px">✓</span>' : '')+
          (u.isNational ? '<span class="badge badge--green" style="font-size:8px;padding:2px 6px">NAT</span>' : '')+
        '</div>'+
        '<div class="post-card__time">'+timeAgo(post.createdAt)+(post.isEdited?' <span class="post-card__edited">· Edited</span>':'')+'</div>'+
      '</div>'+
      '<button class="post-card__menu" data-act="post-menu" data-id="'+post.id+'">'+ico('dots')+'</button>'+
    '</div>'+
    (post.text ? '<div class="post-card__text">'+escapeHTML(post.text)+'</div>' : '')+
    (imageSrc
      ? '<div class="post-card__image" data-act="post-image-view" data-id="'+post.id+'">'+
          '<img src="'+imageSrc+'" alt="" loading="lazy" onerror="this.remove()">'+
        '</div>'
      : '')+
    '<div class="post-card__foot">'+
      '<button class="post-card__action '+(liked?'is-on':'')+'" data-act="post-like" data-id="'+post.id+'">'+
        ico('heart')+'<span>'+post.likes.length+'</span>'+
      '</button>'+
      '<button class="post-card__action" data-act="post-open" data-id="'+post.id+'">'+
        ico('comment')+'<span>'+commentCount+'</span>'+
      '</button>'+
      '<button class="post-card__action" data-act="post-share" data-id="'+post.id+'">'+
        ico('share')+'<span>Share</span>'+
      '</button>'+
    '</div>'+
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
    u.role === 'admin' ? '<span class="badge badge--green">ADMIN</span>' :
    u.role === 'coach' ? '<span class="badge" style="background:rgba(216,255,61,.2);color:var(--green-dk);border:1px solid rgba(216,255,61,.4)">COACH</span>' : '';
  const vendorBadge = u.vendorStatus === 'approved'
    ? '<span class="badge" style="background:rgba(37,194,110,.2);color:#9BE8C2;border:1px solid rgba(37,194,110,.35)">✓ Vendor</span>' : '';
  const commBadge = u.communityId
    ? '<span class="badge" style="background:rgba(255,138,61,.2);color:#FFB27A;border:1px solid rgba(255,138,61,.35)">COMMUNITY LEAD</span>' : '';

  const userPosts = (DB.posts || []).filter(p => p.authorId === u.id).sort((a,b) => b.createdAt - a.createdAt);
  const coverSrc = u.coverDataUrl || img('cover-'+u.id, 800, 400);

  return '<div class="hero">'+
    '<div class="hero__cover">'+
      '<img src="'+coverSrc+'" alt="" onerror="this.remove()">'+
    '</div>'+
    '<div class="hero__inner">'+
      '<div class="hero__avatar-wrap">'+
        '<div class="hero__avatar">'+avatarHTML(u, 'av--xl')+'</div>'+
        (isMe
          ? '<button class="btn btn--sm" style="background:#fff;color:var(--navy);box-shadow:var(--shadow)" data-act="editprofile">'+ico('edit')+' Edit</button>'
          : '')+
      '</div>'+
      '<div class="hero__name">'+escapeHTML(u.name)+'</div>'+
      '<div class="hero__loc">📍 '+u.city+(u.region ? ' · '+u.region : '')+'</div>'+
      '<div style="display:flex;gap:6px;margin-top:10px;flex-wrap:wrap">'+roleBadge+vendorBadge+commBadge+
        (u.verified ? '<span class="badge" style="background:rgba(37,194,110,.2);color:#9BE8C2;border:1px solid rgba(37,194,110,.35)">✓ Verified</span>' : '')+
      '</div>'+
      (u.bio ? '<div style="font-size:12.5px;font-weight:500;color:rgba(255,255,255,.72);margin-top:14px;line-height:1.5">'+escapeHTML(u.bio)+'</div>' : '')+
      '<div class="hero__chips">'+
        '<span class="pill">'+u.hand+'-handed</span>'+
        '<span class="pill">Favourite: '+u.surface+'</span>'+
        (u.points ? '<span class="pill">'+u.points.toLocaleString()+' pts</span>' : '')+
      '</div>'+
      '<div class="hero__actions">'+
        (isMe
          ? '<button class="btn btn--primary" data-act="idcard">'+ico('shield')+' My ID</button>'+
            '<button class="btn" style="background:rgba(255,255,255,.14);color:#fff" data-act="wallet">'+ico('wallet')+' Wallet</button>'
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

    (isMe
      ? '<div class="composer-bar" data-act="compose-post">'+
          avatarHTML(u, 'av--sm')+
          '<div class="composer-bar__placeholder">What\'s on your mind, '+u.name.split(' ')[0]+'?</div>'+
          '<button class="btn btn--primary btn--sm" data-act="compose-post">Post</button>'+
        '</div>'
      : '')+

    (userPosts.length
      ? '<div class="sec-title">'+(isMe?'Your posts':'Posts by '+u.name.split(' ')[0])+' <small>'+userPosts.length+'</small></div>'+
        userPosts.map(p => postCardHTML(p)).join('')
      : (isMe
          ? '<div style="text-align:center;padding:36px 20px;background:#fff;border-radius:20px;box-shadow:var(--shadow);margin-bottom:14px">'+
              '<div style="font-size:52px;line-height:1">🎾</div>'+
              '<div style="font-size:15px;font-weight:900;letter-spacing:-.025em;margin-top:12px">Share your first post</div>'+
              '<div style="font-size:12px;font-weight:600;color:var(--muted);margin-top:8px;line-height:1.5">Talk about your game, gear, or runs. Find players who match your vibe.</div>'+
              '<button class="btn btn--primary" style="margin-top:16px" data-act="compose-post">Create your first post</button>'+
            '</div>'
          : ''))+

    '<div class="sec-title">Match history <small>'+u.matches.length+' recent</small></div>'+
    u.matches.map(matchRow).join('')+
  '</div>';
}

/* ============================================================
   SECTION 19 — EDIT PROFILE (with upload)
   ============================================================ */
function screenProfileForm(){
  const u = getMe();
  const draft = state.profileDraft || {
    name: u.name, bio: u.bio, city: u.city, region: u.region,
    level: u.level, hand: u.hand, surface: u.surface,
    playstyle: (u.playstyle || ['Baseliner']).slice(),
    interests: (u.interests || ['Singles']).slice(),
    status: u.status, avail: u.avail
  };
  state.profileDraft = draft;

  const avatarSrc = u.avatarDataUrl || img(u.id+'-'+u.photo, 200, 200);
  const coverSrc = u.coverDataUrl || img('cover-'+u.id, 800, 400);

  return '<div class="pad" style="padding-top:8px">'+
    '<div style="position:relative;border-radius:22px;overflow:hidden;margin-bottom:60px;box-shadow:var(--shadow)">'+
      '<div style="position:relative;height:160px;background:linear-gradient(140deg,#16233A,#0A1220)">'+
        '<img src="'+coverSrc+'" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover" onerror="this.remove()">'+
        '<div style="position:absolute;inset:0;background:linear-gradient(180deg,transparent 40%,rgba(10,18,32,.6) 100%)"></div>'+
        '<button class="btn btn--sm" style="position:absolute;right:12px;bottom:12px;background:rgba(0,0,0,.65);color:#fff;backdrop-filter:blur(6px)" data-act="pick-cover">'+ico('camera')+' Change cover</button>'+
      '</div>'+
      '<div style="position:absolute;left:20px;bottom:-46px">'+
        '<div style="position:relative;display:inline-block">'+
          avatarHTML(u, 'av--xl')+
          '<button style="position:absolute;right:-6px;bottom:-6px;width:36px;height:36px;border-radius:50%;background:var(--green);color:var(--navy);display:grid;place-items:center;border:3px solid #fff;box-shadow:0 4px 12px rgba(0,0,0,.2);cursor:pointer" data-act="pick-avatar">'+ico('camera')+'</button>'+
        '</div>'+
      '</div>'+
    '</div>'+

    '<div style="display:flex;gap:8px;margin-bottom:20px">'+
      '<button class="btn btn--ghost btn--sm" style="flex:1" data-act="shuffle-avatar">'+ico('image')+' Shuffle photo</button>'+
      '<button class="btn btn--ghost btn--sm" style="flex:1;color:var(--red)" data-act="remove-avatar">'+ico('trash')+' Remove photo</button>'+
    '</div>'+

    '<div class="sec-title" style="margin-top:6px">Identity</div>'+
    '<div class="form-field"><label class="form-label">Full name</label>'+
      '<input class="form-input" data-input="profile-name" value="'+escapeHTML(draft.name)+'"></div>'+
    '<div class="form-field"><label class="form-label">Bio</label>'+
      '<textarea class="form-input" data-input="profile-bio" maxlength="240">'+escapeHTML(draft.bio)+'</textarea>'+
      '<div style="font-size:11px;font-weight:700;color:var(--muted);text-align:right;margin-top:6px">'+draft.bio.length+' / 240</div></div>'+
    '<div class="form-row">'+
      '<div class="form-field"><label class="form-label">City</label>'+
        '<input class="form-input" data-input="profile-city" value="'+escapeHTML(draft.city)+'"></div>'+
      '<div class="form-field"><label class="form-label">Region</label>'+
        '<input class="form-input" data-input="profile-region" value="'+escapeHTML(draft.region)+'"></div>'+
    '</div>'+

    '<div class="sec-title" style="margin-top:6px">Your game</div>'+
    '<div class="form-field"><label class="form-label">NTRP rating</label>'+
      '<div class="form-chips">'+
        ['1.0','1.5','2.0','2.5','3.0','3.5','4.0','4.5','5.0','5.5'].map(l =>
          '<button class="form-chip '+(draft.level===l?'is-on':'')+'" data-act="profile-field" data-f="level" data-v="'+l+'">'+l+'</button>').join('')+
      '</div></div>'+
    '<div class="form-field"><label class="form-label">Dominant hand</label>'+
      '<div class="form-chips">'+
        ['Right','Left'].map(h =>
          '<button class="form-chip '+(draft.hand===h?'is-on':'')+'" data-act="profile-field" data-f="hand" data-v="'+h+'">'+h+'-handed</button>').join('')+
      '</div></div>'+
    '<div class="form-field"><label class="form-label">Favourite surface</label>'+
      '<div class="form-chips">'+
        ['Hard','Clay','Grass','Indoor'].map(p =>
          '<button class="form-chip '+(draft.surface===p?'is-on':'')+'" data-act="profile-field" data-f="surface" data-v="'+p+'">'+p+'</button>').join('')+
      '</div></div>'+

    '<div class="sec-title" style="margin-top:6px">Playstyle</div>'+
    '<div class="form-field"><div class="form-chips">'+
      ['Baseliner','Serve & Volley','All-Court','Counterpuncher','Big Server','Doubles Specialist'].map(p =>
        '<button class="form-chip '+(draft.playstyle.includes(p)?'is-on':'')+'" data-act="profile-toggle" data-f="playstyle" data-v="'+p+'">'+p+'</button>').join('')+
    '</div></div>'+

    '<div class="sec-title" style="margin-top:6px">Availability</div>'+
    '<div class="form-field"><div class="form-chips">'+
      [['Available now','on'],['In 1 hour','soon'],['Tomorrow','soon'],['Weekends only','soon'],['Busy','off']].map(([l,a]) =>
        '<button class="form-chip '+(draft.status===l?'is-on':'')+'" data-act="profile-field" data-f="status" data-v="'+l+'" data-avail="'+a+'">'+l+'</button>').join('')+
    '</div></div>'+

    '<div class="sec-title" style="margin-top:6px">Looking for</div>'+
    '<div class="form-field"><div class="form-chips">'+
      ['Singles','Doubles','Social','Coaching','Competitive','Training'].map(i =>
        '<button class="form-chip '+(draft.interests.includes(i)?'is-on':'')+'" data-act="profile-toggle" data-f="interests" data-v="'+i+'">'+i+'</button>').join('')+
    '</div></div>'+

    '<button class="btn btn--primary btn--block" style="margin-top:12px" data-act="save-profile">Save changes</button>'+
    '<button class="btn btn--ghost btn--block" style="margin-top:9px" data-act="back">Cancel</button>'+
    '<button class="btn btn--block" style="margin-top:20px;color:var(--red);font-weight:700" data-act="delete-account">Delete my account</button>'+
  '</div>';
}

/* ============================================================
   SECTION 20 — ID CARD
   ============================================================ */
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
  const avatarSrc = u.avatarDataUrl || img(u.id+'-'+u.photo, 320, 320);
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
            '<img src="'+avatarSrc+'" alt="" onerror="this.remove()">'+
          '</div>'+
          '<div>'+
            '<div class="idcard__name">'+escapeHTML(u.name)+'</div>'+
            '<div class="idcard__role">'+ (u.isNational ? 'National Team' : u.role === 'coach' ? 'Coach' : 'Member') +'</div>'+
            '<div class="idcard__no">'+u.idNumber+'</div>'+
          '</div>'+
        '</div>'+
        '<div class="idcard__grid">'+
          '<div class="idcard__cell"><span>NTRP</span><b>'+u.level+'</b></div>'+
          '<div class="idcard__cell"><span>Hand</span><b>'+u.hand+'</b></div>'+
          '<div class="idcard__cell"><span>Surface</span><b>'+u.surface+'</b></div>'+
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

/* ============================================================
   SECTION 21 — POST COMPOSER
   ============================================================ */
function screenPostComposer(params){
  const editing = params && params.postId;
  const existing = editing ? DB.posts.find(p => p.id === params.postId) : null;

  if (!state.postDraft || (editing && state.postDraft._for !== params.postId)){
    state.postDraft = {
      _for: editing || null,
      text: existing ? existing.text : '',
      imageDataUrl: existing ? existing.imageDataUrl : null,
      imageUrl: existing ? existing.imageUrl : null,
      visibility: existing ? existing.visibility : 'public'
    };
  }
  const d = state.postDraft;
  const me = getMe();
  const hasText = d.text.trim().length > 0;
  const hasImage = !!(d.imageDataUrl || d.imageUrl);
  const canPost = hasText || hasImage;
  const imageSrc = d.imageDataUrl || d.imageUrl;
  const charCount = d.text.length;

  return '<div class="post-composer">'+
    '<div class="post-composer__head">'+
      avatarHTML(me, 'av--sm')+
      '<div class="post-composer__author">'+
        '<div class="post-composer__name">'+escapeHTML(me.name)+'</div>'+
        '<div class="post-composer__vis">'+ico('shield2')+' Public</div>'+
      '</div>'+
    '</div>'+
    '<textarea class="post-composer__text" data-input="post-text" placeholder="Talk about your game, gear, runs, or ask for players…" maxlength="500">'+escapeHTML(d.text)+'</textarea>'+
    (imageSrc
      ? '<div class="post-composer__preview">'+
          '<div class="post-composer__remove" data-act="remove-post-image">'+ico('close')+'</div>'+
          '<img src="'+imageSrc+'" alt="" onerror="this.remove()">'+
        '</div>'
      : '')+
    '<div class="post-composer__tools">'+
      '<button class="post-composer__tool" data-act="pick-post-image">'+ico('image')+' Photo</button>'+
      '<button class="post-composer__tool" data-act="toast" data-msg="Court tagging coming soon">'+ico('pin')+' Tag court</button>'+
      '<button class="post-composer__tool" data-act="toast" data-msg="Player tagging coming soon">'+ico('users')+' Tag players</button>'+
    '</div>'+
    '<div class="post-composer__foot">'+
      '<div class="post-composer__count '+(charCount>450?'is-over':charCount>400?'is-warn':'')+'">'+charCount+' / 500</div>'+
      '<div style="flex:1"></div>'+
      '<button class="btn btn--ghost btn--sm" data-act="back">Cancel</button>'+
      '<button class="btn btn--primary btn--sm" data-act="post-submit"'+(canPost?'':' disabled')+'>'+(editing?'Save':'Post')+'</button>'+
    '</div>'+
  '</div>';
}

/* ============================================================
   SECTION 22 — POST DETAIL (with comments)
   ============================================================ */
function screenPostDetail(params){
  const post = DB.posts.find(p => p.id === params.postId);
  if (!post) return '<div class="empty">Post not found.</div>';
  const u = userById(post.authorId);
  const me = getMe();
  const liked = post.likes.includes('me');
  const imageSrc = post.imageDataUrl || post.imageUrl;
  const isMine = post.authorId === 'me';

  const commentsHTML = (post.comments || []).map(c => {
    const cu = userById(c.fromId);
    if (!cu) return '';
    return '<div class="comment-row">'+
      avatarHTML(cu, 'av--sm')+
      '<div class="comment-row__main">'+
        '<div class="comment-row__bubble">'+
          '<div class="comment-row__name">'+escapeHTML(cu.name)+'</div>'+
          '<div class="comment-row__text">'+escapeHTML(c.text)+'</div>'+
        '</div>'+
        '<div class="comment-row__time">'+timeAgo(c.ts)+'</div>'+
      '</div>'+
    '</div>';
  }).join('');

  return '<div class="pad" style="padding-top:12px">'+
    '<div style="display:flex;gap:12px;align-items:center;margin-bottom:14px">'+
      avatarHTML(u, 'av--lg')+
      '<div style="flex:1;min-width:0">'+
        '<div style="font-size:16px;font-weight:900;letter-spacing:-.03em">'+escapeHTML(u.name)+
          (u.verified ? ' <span class="badge badge--ok" style="font-size:9px;padding:2px 6px">✓</span>' : '')+
        '</div>'+
        '<div style="font-size:11.5px;font-weight:700;color:var(--muted);margin-top:4px">NTRP '+u.level+' · '+u.city+'</div>'+
        '<div style="font-size:11px;font-weight:700;color:var(--muted);margin-top:2px">'+timeAgo(post.createdAt)+(post.isEdited?' · Edited':'')+'</div>'+
      '</div>'+
      (isMine
        ? '<button class="post-card__menu" data-act="post-menu" data-id="'+post.id+'">'+ico('dots')+'</button>'
        : '')+
    '</div>'+

    (post.text ? '<div style="font-size:15px;font-weight:500;line-height:1.6;color:#2B3846;white-space:pre-wrap;word-break:break-word;margin-bottom:14px">'+escapeHTML(post.text)+'</div>' : '')+

    (imageSrc
      ? '<div style="border-radius:16px;overflow:hidden;margin-bottom:14px;background:#EFF2EC" data-act="post-image-view" data-id="'+post.id+'">'+
          '<img src="'+imageSrc+'" alt="" style="width:100%;height:auto;display:block" onerror="this.remove()">'+
        '</div>'
      : '')+

    '<div style="display:flex;gap:14px;padding:12px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line);margin-bottom:20px">'+
      '<button class="post-card__action '+(liked?'is-on':'')+'" data-act="post-like" data-id="'+post.id+'">'+
        ico('heart')+'<span>'+post.likes.length+'</span>'+
      '</button>'+
      '<button class="post-card__action">'+ico('comment')+'<span>'+(post.comments||[]).length+'</span></button>'+
      '<button class="post-card__action" data-act="post-share" data-id="'+post.id+'">'+ico('share')+'<span>Share</span></button>'+
    '</div>'+

    '<div style="font-size:15px;font-weight:900;letter-spacing:-.025em;margin-bottom:14px">Comments</div>'+
    (commentsHTML || '<div class="empty" style="padding:24px 0">No comments yet. Start the conversation.</div>')+

    '<div style="position:sticky;bottom:0;background:var(--bg);padding:12px 0 0;display:flex;gap:9px;align-items:center;margin-top:14px">'+
      avatarHTML(me, 'av--xs')+
      '<input class="form-input" style="flex:1;border-radius:16px;padding:11px 14px;font-size:13.5px" data-input="post-comment" value="'+escapeHTML(state.commentDraft)+'" placeholder="Add a comment…">'+
      '<button class="btn btn--primary btn--sm" style="padding:11px 14px;border-radius:14px" data-act="post-comment-send" data-id="'+post.id+'"'+(state.commentDraft.trim()?'':' disabled')+'>'+ico('send')+'</button>'+
    '</div>'+
  '</div>';
}

/* ============================================================
   SECTION 23 — CHATS LIST + VIEW
   ============================================================ */
function screenChats(){
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

function screenChatView(params){
  const u = userById(params.id);
  const c = Chat.threadWith(params.id);
  if (!u || !c) return '<div class="empty">Chat not found.</div>';
  if (!c.unlocked){
    return '<div class="pad" style="padding-top:20px">'+
      '<div class="paywall">'+
        '<div class="paywall__inner">'+
          '<div class="paywall__ico">'+ico('lock')+'</div>'+
          '<h3>Unlock chat with '+u.name.split(' ')[0]+'</h3>'+
          '<p>Send and receive messages instantly. One-time payment — no subscription.</p>'+
          '<div class="paywall__price">'+money(PRICES.chatUnlock)+'<small> / one-time</small></div>'+
          '<div class="paywall__btns">'+
            '<button class="btn btn--ghost" style="flex:1;background:rgba(255,255,255,.1);color:#fff" data-act="back">Cancel</button>'+
            '<button class="btn btn--gold" style="flex:1" data-act="unlockchat" data-id="'+u.id+'">Unlock</button>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>';
  }
  const msgs = c.messages.map(m => {
    const mine = m.from === 'me';
    return '<div class="msg msg--'+(mine?'me':'them')+'">'+
      escapeHTML(m.text)+
      '<span class="msg__time">'+new Date(m.ts).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})+'</span>'+
    '</div>';
  }).join('');

  return '<div class="chat-view">'+
    '<div class="chat-view__scroll" id="chatScroll">'+
      (c.messages.length ? msgs : '<div style="text-align:center;color:var(--muted);font-size:12px;font-weight:600;padding:20px">Say hi to '+u.name.split(' ')[0]+'.</div>')+
    '</div>'+
    '<div class="chat-view__input">'+
      '<input id="chatInput" placeholder="Message…">'+
      '<button data-act="chatsend" data-id="'+u.id+'">'+ico('send')+'</button>'+
    '</div>'+
  '</div>';
}

/* ============================================================
   SECTION 24 — FEED (with composer + posts)
   ============================================================ */
function screenFeed(){
  const me = getMe();
  const tabs = [
    ['foryou','For you'],
    ['following','Following'],
    ['nearby','Nearby']
  ];
  const activeTab = state.feedTab || 'foryou';
  const allPosts = (DB.posts || []).slice().sort((a,b) => b.createdAt - a.createdAt);

  return '<div class="pad">'+
    '<div class="feed-tabs">'+
      tabs.map(([v,l]) =>
        '<button class="feed-tab '+(activeTab===v?'is-on':'')+'" data-act="feed-tab" data-v="'+v+'">'+l+'</button>'
      ).join('')+
    '</div>'+
    '<div class="composer-bar" data-act="compose-post">'+
      avatarHTML(me, 'av--sm')+
      '<div class="composer-bar__placeholder">What\'s on your mind, '+me.name.split(' ')[0]+'?</div>'+
      '<button class="btn btn--primary btn--sm">Post</button>'+
    '</div>'+
    (allPosts.length
      ? allPosts.map(p => postCardHTML(p)).join('')
      : '<div class="empty" style="padding:40px 20px"><div class="empty__ico">🎾</div>No posts yet. Be the first.</div>')+
    '<button class="fab" data-act="compose-post" style="bottom:88px">+</button>'+
  '</div>';
}

/* ============================================================
   SECTION 25 — BADGES
   ============================================================ */
const ALL_BADGES = [
  { id:'first-match', name:'First Match', icon:'🎾', desc:'Play your first match' },
  { id:'5-matches', name:'5 Matches', icon:'🏅', desc:'Play 5 matches' },
  { id:'10-matches', name:'10 Matches', icon:'🥈', desc:'Play 10 matches' },
  { id:'25-matches', name:'25 Matches', icon:'🥇', desc:'Play 25 matches' },
  { id:'social-butterfly', name:'Social Butterfly', icon:'🦋', desc:'5 doubles games' },
  { id:'surface-hopper', name:'Surface Hopper', icon:'🌍', desc:'Play on 3 surfaces' },
  { id:'streak-5', name:'5-Win Streak', icon:'🔥', desc:'Win 5 in a row' },
  { id:'streak-10', name:'10-Win Streak', icon:'⚡', desc:'Win 10 in a row' },
  { id:'ace-master', name:'Ace Master', icon:'💥', desc:'10 aces in a match' },
  { id:'tourney-champ', name:'Tournament Champion', icon:'🏆', desc:'Win a tournament' },
  { id:'club-leader', name:'Club Leader', icon:'👑', desc:'Lead a community' },
  { id:'verified-player', name:'Verified Player', icon:'✅', desc:'Complete ID verification' }
];
function screenBadges(){
  const me = getMe();
  return '<div class="pad">'+
    '<div class="streak-card">'+
      '<div class="streak-card__inner">'+
        '<div class="streak-card__flame">🔥</div>'+
        '<div class="streak-card__main">'+
          '<div class="streak-card__n">CURRENT WIN STREAK</div>'+
          '<div class="streak-card__v">'+ (me.streaks?.current || 0) +' WINS</div>'+
          '<div class="streak-card__s">Longest: '+ (me.streaks?.longest || 0) +' wins</div>'+
        '</div>'+
      '</div>'+
    '</div>'+
    '<div class="sec-title">Your badges <small>'+ (me.badges?.length || 0) +' / '+ALL_BADGES.length+'</small></div>'+
    '<div class="badge-grid">'+
      ALL_BADGES.map(b => {
        const got = (me.badges || []).includes(b.id);
        return '<div class="badge-tile '+(got?'':'is-locked')+'">'+
          '<div class="badge-tile__ico">'+(got ? b.icon : '🔒')+'</div>'+
          '<div class="badge-tile__n">'+b.name+'</div>'+
          '<div class="badge-tile__s">'+b.desc+'</div>'+
        '</div>';
      }).join('')+
    '</div>'+
  '</div>';
}

/* ============================================================
   SECTION 26 — AI RECOMMENDATIONS
   ============================================================ */
function screenAI(){
  const matches = AI.topMatches(8);
  return '<div class="pad">'+
    '<div class="ai-card">'+
      '<div class="ai-card__inner">'+
        '<div class="ai-card__eyebrow">'+ico('bolt')+' AI MATCH ENGINE</div>'+
        '<h3>Your best matches today</h3>'+
        '<p>Scored using level, surface preference, hand, availability, region and shared interests.</p>'+
      '</div>'+
    '</div>'+
    '<div class="sec-title">Top picks <small>'+matches.length+'</small></div>'+
    matches.map(({u, s}) => {
      return '<div class="row" style="background:#fff;border-radius:18px;box-shadow:var(--shadow);margin-bottom:9px" data-act="player" data-id="'+u.id+'">'+
        avatarHTML(u, 'av--sm')+
        '<div class="row__main">'+
          '<div class="row__title">'+u.name+'<span class="lvl">'+u.level+'</span></div>'+
          '<div class="row__sub"><span class="dot '+statusDot(u.avail)+'"></span>'+u.status+' · '+u.dist+' m · '+u.surface+'</div>'+
        '</div>'+
        '<div style="text-align:right;margin-right:6px">'+
          '<div class="match-score">'+s+'%</div>'+
        '</div>'+
      '</div>';
    }).join('')+
  '</div>';
}

/* ============================================================
   SECTION 27 — WALLET
   ============================================================ */
function screenWallet(){
  const me = getMe();
  const txs = txsOf('me').slice(0, 20);
  return '<div class="pad" style="padding-top:10px">'+
    '<div class="wallet-hero">'+
      '<div class="wallet-hero__inner">'+
        '<div class="wallet-hero__label">RUBIX WALLET</div>'+
        '<div class="wallet-hero__balance">'+
          money(me.wallet).replace(/^\$/, '<small>$</small>')+
        '</div>'+
        '<div class="wallet-hero__row">'+
          '<button class="btn btn--primary" data-act="topup">Add funds</button>'+
          '<button class="btn" style="background:rgba(255,255,255,.14);color:#fff" data-act="toast" data-msg="Withdrawals available once you earn from hosting">Withdraw</button>'+
        '</div>'+
      '</div>'+
    '</div>'+

    '<div class="sec-title">What you can pay for</div>'+
    '<div class="menu-row" data-act="toast" data-msg="Send a request: '+money(PRICES.requestPlayer)+' per player">'+
      '<div class="menu-row__ico">'+ico('send')+'</div>'+
      '<div class="menu-row__main"><div class="menu-row__t">Send play request</div><div class="menu-row__s">'+money(PRICES.requestPlayer)+' · reaches a player directly</div></div>'+
      ico('chev')+
    '</div>'+
    '<div class="menu-row" data-act="toast" data-msg="Chat unlock: '+money(PRICES.chatUnlock)+' one-time">'+
      '<div class="menu-row__ico">'+ico('chat')+'</div>'+
      '<div class="menu-row__main"><div class="menu-row__t">Unlock chat</div><div class="menu-row__s">'+money(PRICES.chatUnlock)+' · one-time per person</div></div>'+
      ico('chev')+
    '</div>'+
    '<div class="menu-row" data-act="toast" data-msg="Court booking fees: '+PRICES.courtPct+'% of total">'+
      '<div class="menu-row__ico">'+ico('ball')+'</div>'+
      '<div class="menu-row__main"><div class="menu-row__t">Court booking</div><div class="menu-row__s">'+PRICES.courtPct+'% platform fee · paid at booking</div></div>'+
      ico('chev')+
    '</div>'+
    '<div class="menu-row" data-act="toast" data-msg="Coach sessions: '+PRICES.coachPct+'% platform fee">'+
      '<div class="menu-row__ico">'+ico('briefcase')+'</div>'+
      '<div class="menu-row__main"><div class="menu-row__t">Coach lessons</div><div class="menu-row__s">'+PRICES.coachPct+'% platform fee · paid at session</div></div>'+
      ico('chev')+
    '</div>'+
    '<div class="menu-row" data-act="toast" data-msg="Tournament host: '+money(PRICES.tournamentHost)+' · entry fees split automatically">'+
      '<div class="menu-row__ico">'+ico('trophy')+'</div>'+
      '<div class="menu-row__main"><div class="menu-row__t">Host a tournament</div><div class="menu-row__s">'+money(PRICES.tournamentHost)+' + '+PRICES.tournamentPct+'% of entry</div></div>'+
      ico('chev')+
    '</div>'+
    '<div class="menu-row" data-act="toast" data-msg="Vendor listing: '+money(PRICES.vendorListing)+' flat per item">'+
      '<div class="menu-row__ico">'+ico('briefcase')+'</div>'+
      '<div class="menu-row__main"><div class="menu-row__t">Vendor listing</div><div class="menu-row__s">'+money(PRICES.vendorListing)+' flat + '+PRICES.shopPct+'% of sale</div></div>'+
      ico('chev')+
    '</div>'+

    '<div class="sec-title">Recent activity <small>'+txs.length+'</small></div>'+
    (txs.length === 0
      ? '<div class="empty">No transactions yet.</div>'
      : txs.map(t => {
          const inOut = t.amount > 0 ? 'in' : 'out';
          const emoji = t.kind === 'topup' ? '💳' :
            t.kind === 'court-booking' ? '🎾' :
            t.kind === 'chat-unlock' ? '💬' :
            t.kind === 'tournament-entry' ? '🏆' :
            t.kind === 'coach-session' ? '🧑‍🏫' :
            t.kind === 'vendor-listing' ? '🛒' :
            t.kind === 'earnings' ? '💰' : '💵';
          return '<div class="tx">'+
            '<div class="tx__ico tx__ico--'+inOut+'">'+emoji+'</div>'+
            '<div class="tx__main">'+
              '<div class="tx__t">'+escapeHTML(t.note || t.kind)+'</div>'+
              '<div class="tx__m">'+timeAgo(t.ts)+' · '+t.kind+'</div>'+
            '</div>'+
            '<div class="tx__amt tx__amt--'+inOut+'">'+
              (t.amount > 0 ? '+' : '')+money(t.amount).replace('$-','-$')+
              (t.fee ? '<small>fee '+money(t.fee)+'</small>' : '')+
            '</div>'+
          '</div>';
        }).join(''))+
  '</div>';
}

/* ============================================================
   SECTION 28 — TRUST & SAFETY
   ============================================================ */
function screenSafety(){
  const me = getMe();
  return '<div class="pad">'+
    '<div class="safety-banner">'+
      '<div class="safety-banner__ico">🛡️</div>'+
      '<div>'+
        '<div class="safety-banner__t">Your safety on RUBIX</div>'+
        '<div class="safety-banner__s">Always meet in public courts. Share your match details with a friend. Report anything suspicious.</div>'+
      '</div>'+
    '</div>'+
    '<div class="sec-title">Verification</div>'+
    '<div class="safety-action" data-act="verifyid">'+
      '<div class="safety-action__ico">'+(me.idVerified ? '✅' : '🆔')+'</div>'+
      '<div class="safety-action__main">'+
        '<div class="safety-action__t">ID verification</div>'+
        '<div class="safety-action__s">'+(me.idVerified ? 'Verified' : 'Verify with a government ID')+'</div>'+
      '</div>'+ico('chev')+
    '</div>'+
    '<div class="safety-action" data-act="verifyphoto">'+
      '<div class="safety-action__ico">'+(me.photoVerified ? '✅' : '📷')+'</div>'+
      '<div class="safety-action__main">'+
        '<div class="safety-action__t">Photo verification</div>'+
        '<div class="safety-action__s">'+(me.photoVerified ? 'Verified' : 'Selfie must match your profile photo')+'</div>'+
      '</div>'+ico('chev')+
    '</div>'+
    '<div class="sec-title">Before every match</div>'+
    '<div class="notif-row">'+
      '<div class="notif-row__main">'+
        '<div class="notif-row__t">Share location with a friend</div>'+
        '<div class="notif-row__s">Auto-prompt when you open a court booking</div>'+
      '</div>'+
      '<div class="toggle '+(me.safety.shareLocationBeforeMatch?'is-on':'')+'" data-act="safetytoggle" data-f="shareLocationBeforeMatch"></div>'+
    '</div>'+
    '<div class="safety-action" data-act="emergencycontact">'+
      '<div class="safety-action__ico">📞</div>'+
      '<div class="safety-action__main">'+
        '<div class="safety-action__t">Emergency contact</div>'+
        '<div class="safety-action__s">'+ (me.safety.emergencyContact || 'Not set — tap to add') +'</div>'+
      '</div>'+ico('chev')+
    '</div>'+
    '<div class="sec-title">Blocked players</div>'+
    (me.safety.blocked.length === 0
      ? '<div class="empty" style="padding:22px">Nobody blocked.</div>'
      : me.safety.blocked.map(id => {
          const u = userById(id);
          return '<div class="safety-action" data-act="unblock" data-id="'+id+'">'+
            avatarHTML(u, 'av--sm')+
            '<div class="safety-action__main">'+
              '<div class="safety-action__t">'+u.name+'</div>'+
              '<div class="safety-action__s">Tap to unblock</div>'+
            '</div>'+ico('chev')+
          '</div>';
        }).join(''))+
    '<div class="sec-title">Report</div>'+
    '<button class="btn btn--danger btn--block" data-act="report-abuse">Report a player or issue</button>'+
  '</div>';
}

/* ============================================================
   SECTION 29 — NOTIFICATION PREFS
   ============================================================ */
function screenNotifPrefs(){
  const me = getMe();
  const rows = [
    { k:'push',     t:'Push notifications', s:'Enable all push alerts' },
    { k:'email',    t:'Email notifications', s:'Weekly digest + booking reminders' },
    { k:'nearby',   t:'Nearby player alerts', s:'When a player is within 500 m' },
    { k:'requests', t:'Play requests', s:'When someone sends you a request' },
    { k:'chat',     t:'Chat messages', s:'New message alerts' },
    { k:'bookings', t:'Court bookings', s:'Booking confirmations & reminders' },
    { k:'community',t:'Community activity', s:'Posts and events from your clubs' },
    { k:'quietHours', t:'Quiet hours (10pm – 7am)', s:'Silence push during quiet hours' }
  ];
  return '<div class="pad">'+
    '<div style="background:linear-gradient(140deg,#16233A,#0A1220);border-radius:18px;padding:16px;color:#fff;margin-bottom:14px">'+
      '<div style="font-size:11px;font-weight:900;letter-spacing:.14em;color:var(--green)">NOTIFICATION CENTRE</div>'+
      '<div style="font-size:12px;font-weight:600;color:rgba(255,255,255,.62);margin-top:6px;line-height:1.5">Control exactly what reaches you — and when.</div>'+
    '</div>'+
    rows.map(r =>
      '<div class="notif-row">'+
        '<div class="notif-row__main">'+
          '<div class="notif-row__t">'+r.t+'</div>'+
          '<div class="notif-row__s">'+r.s+'</div>'+
        '</div>'+
        '<div class="toggle '+(me.notifPrefs[r.k]?'is-on':'')+'" data-act="notiftoggle" data-k="'+r.k+'"></div>'+
      '</div>'
    ).join('')+
  '</div>';
}

/* ============================================================
   SECTION 30 — VENDOR APPLICATION
   ============================================================ */
function screenVendorApply(){
  const me = getMe();
  if (me.vendorStatus === 'pending' || me.vendorStatus === 'approved'){
    return '<div class="pad" style="padding-top:30px">'+
      '<div style="text-align:center;padding:40px 20px;background:#fff;border-radius:24px;box-shadow:var(--shadow)">'+
        '<div style="font-size:52px">'+(me.vendorStatus==='approved'?'✅':'⏳')+'</div>'+
        '<div style="font-size:18px;font-weight:900;letter-spacing:-.03em;margin-top:14px">'+
          (me.vendorStatus==='approved'?'You are a verified vendor':'Application under review')+
        '</div>'+
        '<div style="font-size:12.5px;font-weight:600;color:var(--muted);margin-top:10px;line-height:1.55">'+
          (me.vendorStatus==='approved'
            ? 'Your shop listings are live and visible to all players.'
            : 'An admin will review your request shortly.')+
        '</div>'+
      '</div>'+
    '</div>';
  }
  return '<div class="pad" style="padding-top:8px">'+
    '<div style="background:linear-gradient(140deg,#16233A,#0A1220);border-radius:22px;padding:20px;color:#fff;margin-bottom:20px">'+
      '<div style="font-size:11px;font-weight:900;letter-spacing:.14em;color:var(--green)">VENDOR APPLICATION</div>'+
      '<div style="font-size:19px;font-weight:900;letter-spacing:-.035em;margin-top:10px;line-height:1.2">Sell gear in the RUBIX shop</div>'+
      '<div style="font-size:12px;font-weight:600;color:rgba(255,255,255,.62);margin-top:8px;line-height:1.5">Listing fee: '+money(PRICES.vendorListing)+' flat + '+PRICES.shopPct+'% of sale.</div>'+
    '</div>'+
    '<div class="form-field"><label class="form-label">Item name</label>'+
      '<input class="form-input" id="v-item" placeholder="e.g. Wilson Pro Staff 97"></div>'+
    '<div class="form-field"><label class="form-label">Category</label>'+
      '<div class="form-chips">'+
        ['Racket','Shoes','Bag','Strings','Apparel','Other'].map(c =>
          '<button class="form-chip '+(state.vendorDraft?.category===c?'is-on':'')+'" data-act="vendorfield" data-v="'+c+'">'+c+'</button>').join('')+
      '</div></div>'+
    '<div class="form-field"><label class="form-label">Asking price (USD)</label>'+
      '<input class="form-input" id="v-price" type="number" placeholder="0"></div>'+
    '<div class="form-field"><label class="form-label">Condition / notes</label>'+
      '<textarea class="form-input" id="v-note" placeholder="Describe the item…"></textarea></div>'+
    '<button class="btn btn--primary btn--block" data-act="vendorsubmit">Pay '+money(PRICES.vendorListing)+' & Submit</button>'+
  '</div>';
}

/* ============================================================
   SECTION 31 — COACH APPLICATION
   ============================================================ */
function screenCoachApply(){
  const c = DB.courts.filter(x => x.status === 'approved');
  return '<div class="pad" style="padding-top:8px">'+
    '<div style="background:linear-gradient(140deg,#16233A,#0A1220);border-radius:22px;padding:20px;color:#fff;margin-bottom:20px">'+
      '<div style="font-size:11px;font-weight:900;letter-spacing:.14em;color:var(--green)">COACH APPLICATION</div>'+
      '<div style="font-size:19px;font-weight:900;letter-spacing:-.035em;margin-top:10px;line-height:1.2">Get stationed at a court</div>'+
      '<div style="font-size:12px;font-weight:600;color:rgba(255,255,255,.62);margin-top:8px;line-height:1.5">Coaches earn '+ (100 - PRICES.coachPct) +'% of each booking. '+PRICES.coachPct+'% platform fee.</div>'+
    '</div>'+
    '<div class="form-field"><label class="form-label">Select court</label>'+
      c.map(ct =>
        '<div class="toggle-row" style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;background:#fff;border-radius:16px;margin-bottom:9px;border:1.5px solid var(--line);gap:14px" data-act="coachcourt" data-id="'+ct.id+'">'+
          '<div style="flex:1;min-width:0">'+
            '<div style="font-size:13.5px;font-weight:800">'+ct.name+'</div>'+
            '<div style="font-size:11px;font-weight:600;color:var(--muted);margin-top:3px">📍 '+ct.address+'</div>'+
          '</div>'+
          '<div class="toggle '+(state.coachCourt===ct.id?'is-on':'')+'"></div>'+
        '</div>').join('')+
    '</div>'+
    '<div class="form-field"><label class="form-label">Specialty</label>'+
      '<input class="form-input" id="co-spec" placeholder="e.g. Serve mechanics"></div>'+
    '<div class="form-row">'+
      '<div class="form-field"><label class="form-label">Hourly rate</label>'+
        '<input class="form-input" id="co-rate" type="number" placeholder="30"></div>'+
      '<div class="form-field"><label class="form-label">Experience</label>'+
        '<input class="form-input" id="co-exp" placeholder="e.g. 5 yrs"></div>'+
    '</div>'+
    '<button class="btn btn--primary btn--block" data-act="coachsubmit">Submit Application</button>'+
  '</div>';
}

/* ============================================================
   SECTION 32 — COURT SUBMISSION
   ============================================================ */
function screenSubmitCourt(){
  return '<div class="pad" style="padding-top:8px">'+
    '<div style="background:linear-gradient(140deg,#16233A,#0A1220);border-radius:22px;padding:20px;color:#fff;margin-bottom:20px">'+
      '<div style="font-size:11px;font-weight:900;letter-spacing:.14em;color:var(--green)">COURT SUBMISSION</div>'+
      '<div style="font-size:19px;font-weight:900;letter-spacing:-.035em;margin-top:10px;line-height:1.2">Add a venue to RUBIX</div>'+
      '<div style="font-size:12px;font-weight:600;color:rgba(255,255,255,.62);margin-top:8px;line-height:1.5">Reviewed by admin before going live.</div>'+
    '</div>'+
    '<div class="form-field"><label class="form-label">Court name</label>'+
      '<input class="form-input" id="nc-name" placeholder="e.g. Eastside Tennis Hub"></div>'+
    '<div class="form-field"><label class="form-label">Address</label>'+
      '<input class="form-input" id="nc-addr" placeholder="Street, city"></div>'+
    '<div class="form-row">'+
      '<div class="form-field"><label class="form-label">Price / hour</label>'+
        '<input class="form-input" id="nc-price" type="number" placeholder="20"></div>'+
      '<div class="form-field"><label class="form-label">Courts</label>'+
        '<input class="form-input" id="nc-count" type="number" placeholder="4"></div>'+
    '</div>'+
    '<div class="form-field"><label class="form-label">Surface</label>'+
      '<div class="form-chips">'+
        ['Hard','Clay','Grass','Indoor'].map(s =>
          '<button class="form-chip '+(state.courtSurface===s?'is-on':'')+'" data-act="courtsurface" data-v="'+s+'">'+s+'</button>').join('')+
      '</div></div>'+
    '<button class="btn btn--primary btn--block" data-act="courtsubmit">Submit for Review</button>'+
  '</div>';
}

/* ============================================================
   SECTION 33 — HOST TOURNAMENT
   ============================================================ */
function screenHostTourney(){
  const courts = DB.courts.filter(c => c.status === 'approved');
  return '<div class="pad" style="padding-top:8px">'+
    '<div style="background:linear-gradient(140deg,#3D1F5C,#1F0F30);border-radius:22px;padding:20px;color:#fff;margin-bottom:20px">'+
      '<div style="font-size:11px;font-weight:900;letter-spacing:.14em;color:var(--green)">HOST TOURNAMENT</div>'+
      '<div style="font-size:19px;font-weight:900;letter-spacing:-.035em;margin-top:10px;line-height:1.2">Bring nearby players together</div>'+
      '<div style="font-size:12px;font-weight:600;color:rgba(255,255,255,.62);margin-top:8px;line-height:1.5">Players have 7 days to agree on match times. Host fee: '+money(PRICES.tournamentHost)+'.</div>'+
    '</div>'+
    '<div class="form-field"><label class="form-label">Tournament name</label>'+
      '<input class="form-input" id="ht-name" placeholder="e.g. Riverside Doubles Open"></div>'+
    '<div class="form-field"><label class="form-label">Format</label>'+
      '<div class="form-chips">'+
        [['singles-elim','Singles · Knockout'],['singles-roundrobin','Singles · Round Robin'],
         ['doubles-elim','Doubles · Knockout'],['doubles-roundrobin','Doubles · Round Robin']].map(([v,l]) =>
          '<button class="form-chip '+(state.hostFormat===v?'is-on':'')+'" data-act="hostfield" data-v="'+v+'">'+l+'</button>').join('')+
      '</div></div>'+
    '<div class="form-field"><label class="form-label">Court</label>'+
      '<select class="form-input" id="ht-court">'+
        courts.map(c => '<option value="'+c.id+'">'+c.name+'</option>').join('')+
      '</select></div>'+
    '<div class="form-row">'+
      '<div class="form-field"><label class="form-label">Max teams</label>'+
        '<input class="form-input" id="ht-max" type="number" value="8"></div>'+
      '<div class="form-field"><label class="form-label">Entry ($)</label>'+
        '<input class="form-input" id="ht-entry" type="number" value="5"></div>'+
    '</div>'+
    '<div class="form-field"><label class="form-label">Prize pool ($)</label>'+
      '<input class="form-input" id="ht-prize" type="number" value="60"></div>'+
    '<div style="background:#F5F7F2;border-radius:14px;padding:14px;font-size:12px;font-weight:600;color:#3A4756;line-height:1.6;margin-bottom:16px">'+
      '<b>How it works:</b> Players join for the entry fee. '+PRICES.tournamentPct+'% platform fee is deducted automatically. Winners are paid instantly from the prize pool once the bracket completes.'+
    '</div>'+
    '<button class="btn btn--primary btn--block" data-act="hosttourneysubmit">Pay '+money(PRICES.tournamentHost)+' & Create</button>'+
  '</div>';
}

/* ============================================================
   SECTION 34 — MORE
   ============================================================ */
function screenMore(){
  const me = getMe();
  const unread = Chat.unreadCount();

  const vendorRow = me.vendorStatus === 'approved'
    ? '<div class="menu-row" data-act="toast" data-msg="You are a verified vendor ✓">'+
        '<div class="menu-row__ico" style="background:var(--green)">'+ico('check')+'</div>'+
        '<div class="menu-row__main"><div class="menu-row__t">Verified Vendor</div><div class="menu-row__s">Your shop listings are live</div></div>'+
        ico('chev')+
      '</div>'
    : me.vendorStatus === 'pending'
    ? '<div class="menu-row" data-act="toast" data-msg="Your vendor application is under review">'+
        '<div class="menu-row__ico" style="background:#FFF3DE;color:#A56A00">'+ico('bolt')+'</div>'+
        '<div class="menu-row__main"><div class="menu-row__t">Vendor Application Pending</div><div class="menu-row__s">An admin will review shortly</div></div>'+
        ico('chev')+
      '</div>'
    : '<div class="menu-row" data-act="vendorapply">'+
        '<div class="menu-row__ico">'+ico('briefcase')+'</div>'+
        '<div class="menu-row__main"><div class="menu-row__t">Become a Vendor · '+money(PRICES.vendorListing)+'</div><div class="menu-row__s">Sell gear in the RUBIX shop</div></div>'+
        ico('chev')+
      '</div>';

  const coachDashRow = me.role === 'coach' && me.coachCourt
    ? '<div class="menu-row" style="background:linear-gradient(140deg,#1E3A1F,#0F2E12);color:#fff" data-act="coachdash">'+
        '<div class="menu-row__ico" style="background:var(--green);color:var(--navy)">'+ico('clipboard')+'</div>'+
        '<div class="menu-row__main"><div class="menu-row__t" style="color:#fff">Coach Dashboard</div><div class="menu-row__s" style="color:rgba(255,255,255,.6)">Manage bookings & court status</div></div>'+
        ico('chev', 'style="color:#fff"')+
      '</div>'
    : '<div class="menu-row" data-act="coachapply">'+
        '<div class="menu-row__ico">'+ico('users')+'</div>'+
        '<div class="menu-row__main"><div class="menu-row__t">Apply as Coach</div><div class="menu-row__s">Earn '+ (100 - PRICES.coachPct) +'% of each lesson</div></div>'+
        ico('chev')+
      '</div>';

  return '<div class="pad">'+
    '<div class="wallet-hero" data-act="wallet" style="margin-bottom:14px;cursor:pointer">'+
      '<div class="wallet-hero__inner">'+
        '<div style="display:flex;justify-content:space-between;align-items:flex-start">'+
          '<div>'+
            '<div class="wallet-hero__label">RUBIX WALLET</div>'+
            '<div class="wallet-hero__balance" style="font-size:32px">'+money(me.wallet)+'</div>'+
          '</div>'+
          '<div style="width:44px;height:44px;border-radius:16px;background:var(--green);color:var(--navy);display:grid;place-items:center">'+ico('wallet')+'</div>'+
        '</div>'+
        '<div style="font-size:11.5px;font-weight:600;color:rgba(255,255,255,.55);margin-top:14px">Tap to top up, view activity and see platform fees</div>'+
      '</div>'+
    '</div>'+

    '<div class="tile" style="background:linear-gradient(140deg,#3D1F5C,#1F0F30)" data-act="ai">'+
      '<h3>AI Match Recommendations</h3>'+
      '<p>Top picks based on level, surface, hand, region, and availability.</p>'+
      '<div class="tile__emoji">✨</div>'+
    '</div>'+

    '<div class="tile" style="background:linear-gradient(140deg,#16233A,#0A1220)" data-act="feed">'+
      '<h3>RUBIX Feed</h3>'+
      '<p>Wins, meetups, streaks — your tennis circle in one place.</p>'+
      '<div class="tile__emoji">📰</div>'+
    '</div>'+

    '<div class="tile" style="background:linear-gradient(140deg,#FF8A3D,#C25A1E)" data-act="badges">'+
      '<h3>Badges & Streaks</h3>'+
      '<p>Unlock achievements as you play. Track your current and longest streaks.</p>'+
      '<div class="tile__emoji">🔥</div>'+
    '</div>'+

    '<div class="tile" style="background:linear-gradient(140deg,#0A1220,#16233A)" data-act="lostfound">'+
      '<h3>Lost &amp; Found</h3>'+
      '<p>Reunite gear with its owner. Post a lost or found item in seconds.</p>'+
      '<div class="tile__emoji">🎒</div>'+
    '</div>'+

    '<div class="tile" style="background:linear-gradient(140deg,#3E6B1F,#1F3A0E)" data-act="shop">'+
      '<h3>RUBIX Shop</h3>'+
      '<p>Buy and sell rackets, shoes, bags and strings near you.</p>'+
      '<div class="tile__emoji">🛒</div>'+
    '</div>'+

    '<div class="sec-title">Inbox</div>'+
    '<div class="menu-row" data-act="chats">'+
      '<div class="menu-row__ico">'+ico('chat')+'</div>'+
      '<div class="menu-row__main"><div class="menu-row__t">Chats</div><div class="menu-row__s">'+ (unread ? unread + ' new messages' : 'No new messages') +'</div></div>'+
      (unread ? '<span class="icon-btn__badge" style="position:static">'+unread+'</span>' : ico('chev'))+
    '</div>'+

    '<div class="sec-title">Account</div>'+
    '<div class="menu-row" data-act="idcard">'+
      '<div class="menu-row__ico">'+ico('shield')+'</div>'+
      '<div class="menu-row__main"><div class="menu-row__t">My RUBIX ID</div><div class="menu-row__s">Digital card · '+me.idNumber+'</div></div>'+
      ico('chev')+
    '</div>'+
    '<div class="menu-row" data-act="editprofile">'+
      '<div class="menu-row__ico">'+ico('edit')+'</div>'+
      '<div class="menu-row__main"><div class="menu-row__t">Edit Profile</div><div class="menu-row__s">Update your photo, level, bio</div></div>'+
      ico('chev')+
    '</div>'+
    '<div class="menu-row" data-act="safety">'+
      '<div class="menu-row__ico">'+ico('shield2')+'</div>'+
      '<div class="menu-row__main"><div class="menu-row__t">Trust & Safety</div><div class="menu-row__s">Verification, emergency contact, blocked players</div></div>'+
      ico('chev')+
    '</div>'+
    '<div class="menu-row" data-act="notifprefs">'+
      '<div class="menu-row__ico">'+ico('bell')+'</div>'+
      '<div class="menu-row__main"><div class="menu-row__t">Notifications</div><div class="menu-row__s">Control what reaches you and when</div></div>'+
      ico('chev')+
    '</div>'+
    vendorRow+
    coachDashRow+
    '<div class="menu-row" data-act="submitcourt">'+
      '<div class="menu-row__ico">'+ico('pin')+'</div>'+
      '<div class="menu-row__main"><div class="menu-row__t">Submit a Court</div><div class="menu-row__s">Add a new venue to RUBIX</div></div>'+
      ico('chev')+
    '</div>'+

    (SESSION.adminId
      ? '<div class="sec-title">Admin</div>'+
        '<div class="menu-row" style="background:linear-gradient(140deg,#0F1B2E,#16233A);color:#fff" data-act="returnadmin">'+
          '<div class="menu-row__ico" style="background:var(--green);color:var(--navy)">'+ico('shield2')+'</div>'+
          '<div class="menu-row__main"><div class="menu-row__t" style="color:#fff">Return to Admin Console</div><div class="menu-row__s" style="color:rgba(255,255,255,.55)">You are still signed in as admin</div></div>'+
          ico('chev', 'style="color:#fff"')+
        '</div>'
      : '<div class="sec-title">Admin</div>'+
        '<div class="menu-row" style="background:linear-gradient(140deg,#0F1B2E,#16233A);color:#fff" data-act="exitgate">'+
          '<div class="menu-row__ico" style="background:var(--green);color:var(--navy)">'+ico('lock')+'</div>'+
          '<div class="menu-row__main"><div class="menu-row__t" style="color:#fff">Admin Sign-in</div><div class="menu-row__s" style="color:rgba(255,255,255,.55)">Approvals · Users · Rankings</div></div>'+
          ico('chev', 'style="color:#fff"')+
        '</div>')+

    '<div style="text-align:center;padding:22px 0 6px;font-size:11px;font-weight:700;color:#B3BDC6;letter-spacing:.14em">RUBIX TENNIS · NO ADS · v1.0</div>'+
  '</div>';
}

/* ============================================================
   SECTION 35 — LOST & FOUND
   ============================================================ */
function screenLostFound(){
  const list = DB.lostFound.filter(i => state.lfFilter === 'all' || i.type === state.lfFilter);
  return '<div class="pad" style="position:relative;min-height:100%">'+
    '<div class="chips chips--pad" style="padding-left:0">'+
      [['all','All items'],['lost','Lost'],['found','Found']].map(([v,l]) =>
        '<button class="chip '+(state.lfFilter===v?'is-on':'')+'" data-act="lffilter" data-v="'+v+'">'+l+'</button>').join('')+
    '</div>'+
    (list.length === 0 ? '<div class="empty">Nothing here yet.</div>' :
      list.map(i => {
        const c1 = 'hsl('+i.hue+' 70% 60%)';
        const c2 = 'hsl('+((i.hue+45)%360)+' 66% 42%)';
        return '<div class="lf-card" data-act="toast" data-msg="Opening conversation about \''+escapeHTML(i.title)+'\'…">'+
          '<div class="lf-card__img" style="--c1:'+c1+';--c2:'+c2+'">'+i.emoji+
            '<img src="'+img('lf-'+i.id,160,160)+'" alt="" onerror="this.remove()">'+
          '</div>'+
          '<div class="lf-card__main">'+
            '<span class="lf-card__tag tag--'+i.type+'">'+i.type+'</span>'+
            '<div class="lf-card__t">'+i.title+'</div>'+
            '<div class="lf-card__m">📍 '+i.place+' · '+i.time+'</div>'+
          '</div>'+ ico('chev')+
        '</div>';
      }).join(''))+
    '<button class="fab" data-act="lfadd">+</button>'+
  '</div>';
}

/* ============================================================
   SECTION 36 — SHOP
   ============================================================ */
function screenShop(){
  return '<div class="pad">'+
    '<div class="search">'+ico('search')+
      '<input placeholder="Search rackets, shoes, bags…" data-input="shopQuery">'+
    '</div>'+
    '<div class="chips chips--pad" style="padding-left:0">'+
      '<button class="chip is-on">All</button>'+
      '<button class="chip">Rackets</button>'+
      '<button class="chip">Shoes</button>'+
      '<button class="chip">Bags</button>'+
      '<button class="chip">Strings</button>'+
    '</div>'+
    '<div class="grid2">'+
      DB.shop.filter(i => i.status === 'approved').map(it => {
        const c1 = 'hsl('+it.hue+' 72% 58%)';
        const c2 = 'hsl('+((it.hue+45)%360)+' 68% 40%)';
        return '<div class="shop-card" data-act="shopitem" data-id="'+it.id+'">'+
          '<div class="shop-card__img" style="--c1:'+c1+';--c2:'+c2+'">'+
            '<img src="'+img('shop-'+it.id,400,300)+'" alt="" loading="lazy" onerror="this.remove()">'+
          '</div>'+
          '<div class="shop-card__body">'+
            '<div class="shop-card__t">'+it.title+'</div>'+
            '<div class="shop-card__p">$'+it.price+'</div>'+
            '<div class="shop-card__c">'+it.cond+' · '+(userById(it.sellerId)?.name.split(' ')[0] || 'Seller')+'</div>'+
          '</div>'+
        '</div>';
      }).join('')+
    '</div>'+
  '</div>';
}

function screenShopItem(params){
  const it = shopById(params.id);
  if (!it) return '<div class="empty">Item not found.</div>';
  const c1 = 'hsl('+it.hue+' 72% 58%)';
  const c2 = 'hsl('+((it.hue+45)%360)+' 68% 40%)';
  const seller = userById(it.sellerId);
  const fee = shopFee(it.price);
  return '<div class="shop-hero">'+
      '<div class="shop-hero__bg" style="--c1:'+c1+';--c2:'+c2+'">'+
        '<img src="'+img('shop-'+it.id,800,500)+'" alt="" onerror="this.remove()">'+
      '</div>'+
    '</div>'+
    '<div class="pad" style="padding-top:20px">'+
      '<div style="display:flex;gap:12px;align-items:flex-start">'+
        '<div style="flex:1">'+
          '<div style="font-size:19px;font-weight:900;letter-spacing:-.04em;line-height:1.2">'+it.title+'</div>'+
          '<div style="font-size:12px;font-weight:700;color:var(--muted);margin-top:6px">'+it.cond+'</div>'+
        '</div>'+
        '<div style="font-size:26px;font-weight:900;letter-spacing:-.05em">$'+it.price+'</div>'+
      '</div>'+
      '<div class="sec-title">Seller</div>'+
      '<div class="row" style="background:#fff;border-radius:18px;box-shadow:var(--shadow)" data-act="player" data-id="'+it.sellerId+'">'+
        (seller ? avatarHTML(seller, 'av--sm') : '')+
        '<div class="row__main">'+
          '<div class="row__title">'+(seller ? seller.name : 'Unknown')+'<span class="lvl">'+(seller ? seller.level : '—')+'</span></div>'+
          '<div class="row__sub">📍 '+it.place+' · ⭐ 4.9 seller rating</div>'+
        '</div>'+ ico('chev')+
      '</div>'+
      '<div class="sec-title">Buyer protection</div>'+
      '<div style="background:#F5F7F2;border-radius:14px;padding:14px;font-size:12px;font-weight:600;color:#3A4756;line-height:1.6">'+
        '<b>How it works:</b> Pay through RUBIX to protect your purchase. The seller receives '+ (100 - PRICES.shopPct) +'% of the sale price; '+PRICES.shopPct+'% platform fee applies.'+
      '</div>'+
      '<div class="sticky-bar">'+
        '<div class="sticky-bar__price" style="flex:1">'+
          '<b>$'+it.price+'</b>'+
          '<span>'+PRICES.shopPct+'% platform fee ('+money(fee)+')</span>'+
        '</div>'+
        '<button class="btn btn--primary" data-act="shopbuy" data-id="'+it.id+'">Buy Now</button>'+
      '</div>'+
    '</div>';
}

/* ============================================================
   SECTION 37 — COACH DETAIL
   ============================================================ */
function screenCoach(params){
  const c = courtById(params.court);
  const co = c && c.coaches.find(x => x.id === params.id);
  if (!co) return '<div class="empty">Coach not found.</div>';
  const owner = userById(co.userId);
  const fee = coachFee(co.rate);
  return '<div class="pad" style="padding-top:8px">'+
    '<div style="display:flex;gap:16px;align-items:center">'+
      (owner ? avatarHTML(owner, 'av--lg') : '')+
      '<div>'+
        '<div style="font-size:21px;font-weight:900;letter-spacing:-.04em">'+co.name+'</div>'+
        '<div style="font-size:12px;font-weight:700;color:var(--muted);margin-top:5px">'+co.spec+'</div>'+
        '<div style="margin-top:9px;display:flex;gap:6px;flex-wrap:wrap">'+
          '<span class="badge badge--soft">'+co.exp+'</span>'+
          (co.verified
            ? '<span class="badge badge--ok">✓ Verified by Admin</span>'
            : '<span class="badge badge--amber">⏳ Pending</span>')+
        '</div>'+
      '</div>'+
    '</div>'+
    '<div class="sec-title">Stationed at</div>'+
    '<div class="row" style="background:#fff;border-radius:18px;box-shadow:var(--shadow)" data-act="court" data-id="'+c.id+'">'+
      '<div class="av av--sm" style="--c1:hsl('+c.hue+' 62% 56%);--c2:hsl('+((c.hue+45)%360)+' 58% 34%)">'+
        '<img src="'+img('court-'+c.id,120,120)+'" alt="" onerror="this.remove()">'+
      '</div>'+
      '<div class="row__main">'+
        '<div class="row__title">'+c.name+'</div>'+
        '<div class="row__sub">📍 '+c.address+'</div>'+
      '</div>'+ ico('chev')+
    '</div>'+
    '<div class="sec-title">Availability this week</div>'+
    '<div class="slots">'+
      TIMES.slice(0, 6).map((t, i) => {
        const off = (i*2 + co.name.length) % 5 === 0;
        return '<button class="slot '+(off?'is-off':'')+'" data-act="coachbook" data-court="'+c.id+'" data-coach="'+co.id+'" data-time="'+t+'">'+t+'</button>';
      }).join('')+
    '</div>'+
    '<div class="sticky-bar">'+
      '<div class="sticky-bar__price" style="flex:1">'+
        '<b>$'+co.rate+'</b>'+
        '<span>+ '+money(fee)+' platform fee ('+PRICES.coachPct+'%)</span>'+
      '</div>'+
      '<button class="btn btn--primary" data-act="coachbook" data-court="'+c.id+'" data-coach="'+co.id+'">Book Lesson</button>'+
    '</div>'+
  '</div>';
}

/* ============================================================
   SECTION 38 — COMMUNITY DETAIL
   ============================================================ */
function screenClub(params){
  const k = commById(params.id);
  if (!k) return '<div class="empty">Community not found.</div>';
  const c1 = 'hsl('+k.hue+' 80% 60%)';
  const c2 = 'hsl('+((k.hue+45)%360)+' 70% 42%)';
  const members = DB.users.filter(u => u.id !== 'me' && u.role !== 'admin').slice(0, 6);
  const creator = userById(k.createdBy);
  return '<div class="pad" style="padding-top:8px">'+
    '<div style="height:160px;border-radius:26px;overflow:hidden;position:relative">'+
      '<div style="position:absolute;inset:0;background:linear-gradient(140deg,'+c1+','+c2+')"></div>'+
      '<img src="'+img('club-'+k.id,800,400)+'" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover" onerror="this.remove()">'+
      '<div style="position:absolute;inset:0;background:linear-gradient(180deg,transparent 30%,rgba(10,18,32,.72) 100%)"></div>'+
      '<div style="position:absolute;left:18px;right:18px;bottom:16px;color:#fff">'+
        '<div style="font-size:11px;font-weight:900;letter-spacing:.12em;color:var(--green)">'+
          (k.verified === 'approved' ? '✓ VERIFIED COMMUNITY' : '⏳ PENDING VERIFICATION')+
        '</div>'+
        '<div style="font-size:20px;font-weight:900;letter-spacing:-.04em;margin-top:6px">'+k.name+'</div>'+
      '</div>'+
    '</div>'+
    '<div style="font-size:12.5px;font-weight:600;color:var(--muted);margin-top:14px;line-height:1.5">'+k.desc+'</div>'+
    '<div style="display:flex;gap:7px;margin-top:14px;flex-wrap:wrap">'+
      '<span class="badge badge--green">'+k.members.toLocaleString()+' members</span>'+
      '<span class="badge badge--soft">'+k.dist+' m away</span>'+
      (creator ? '<span class="badge badge--soft">Led by '+creator.name.split(' ')[0]+'</span>' : '')+
      (k.monthlyFee ? '<span class="fee-tag">'+money(k.monthlyFee)+'/mo</span>' : '')+
    '</div>'+
    '<div class="sec-title">Members nearby</div>'+
    members.map(u =>
      '<div class="row" data-act="player" data-id="'+u.id+'">'+
        avatarHTML(u, 'av--sm')+
        '<div class="row__main">'+
          '<div class="row__title">'+u.name+'<span class="lvl">'+u.level+'</span></div>'+
          '<div class="row__sub"><span class="dot '+statusDot(u.avail)+'"></span>'+u.status+' · '+u.dist+' m</div>'+
        '</div>'+
        '<button class="btn btn--sm btn--primary" data-act="request" data-id="'+u.id+'">Wave · $'+PRICES.requestPlayer+'</button>'+
      '</div>').join('')+
    '<div class="sticky-bar">'+
      '<div class="sticky-bar__price" style="flex:1">'+
        (k.monthlyFee ? '<b>'+money(k.monthlyFee)+'</b><span>monthly + '+money(communityFee(k.monthlyFee))+' fee</span>' : '<b>Free</b><span>to join the community</span>')+
      '</div>'+
      '<button class="btn btn--primary" data-act="joinclub" data-id="'+k.id+'">Join Community</button>'+
    '</div>'+
  '</div>';
}

/* ============================================================
   SECTION 39 — COACH DASHBOARD
   ============================================================ */
function screenCoachDashboard(){
  const me = getMe();
  const c = courtById(me.coachCourt);
  if (!c) return '<div class="empty">No court assigned. Apply as a coach first.</div>';
  const bookings = c.bookings || [];
  return '<div class="admin-shell" style="background:#F3F5F0;color:var(--navy)">'+
    '<div class="dash-hero dash-hero--coach">'+
      '<div class="dash-hero__inner">'+
        '<div class="dash-hero__eyebrow"><span style="width:6px;height:6px;background:var(--green);border-radius:50%"></span>COACH DASHBOARD</div>'+
        '<h2>'+c.name+'</h2>'+
        '<p>'+me.name+' · '+c.address+'</p>'+
      '</div>'+
    '</div>'+
    '<div class="dash-stat-grid">'+
      '<div class="dstat"><b>'+bookings.length+'</b><span>Bookings today</span></div>'+
      '<div class="dstat"><b>'+bookings.filter(b => b.status === 'active').length+'</b><span>On court now</span></div>'+
      '<div class="dstat"><b>'+bookings.filter(b => b.status === 'upcoming').length+'</b><span>Upcoming</span></div>'+
    '</div>'+
    '<div style="padding:0 18px 22px">'+
      '<div class="court-status-card">'+
        '<div class="court-status-card__t">Court status</div>'+
        '<div class="court-status-opts">'+
          '<div class="court-status-opt '+(c.courtStatus==='open'?'is-on':'')+'" data-act="setcourtstatus" data-v="open">Open</div>'+
          '<div class="court-status-opt '+(c.courtStatus==='closed'?'is-on is-closed':'')+'" data-act="setcourtstatus" data-v="closed">Closed</div>'+
          '<div class="court-status-opt '+(c.courtStatus==='maintenance'?'is-on is-maint':'')+'" data-act="setcourtstatus" data-v="maintenance">Maintenance</div>'+
        '</div>'+
      '</div>'+
      '<div class="sec-title">Today\'s bookings <small>'+bookings.length+' total</small></div>'+
      (bookings.length === 0
        ? '<div style="text-align:center;padding:30px 20px;color:var(--muted);font-size:12.5px;font-weight:600">No bookings for today.</div>'
        : bookings.map(b => {
            const u = userById(b.userId);
            const pillClass = 'status-pill status-pill--'+(b.status === 'completed' ? 'done' : b.status);
            return '<div class="booking-row">'+
              '<div class="booking-row__head">'+
                '<div class="booking-row__time">'+b.time+'</div>'+
                (u ? avatarHTML(u, 'av--xs') : '')+
                '<div class="booking-row__main">'+
                  '<div class="booking-row__who">'+(u ? u.name : 'Guest')+'</div>'+
                  '<div class="booking-row__meta">'+b.duration+' · '+b.date+'</div>'+
                '</div>'+
                '<span class="'+pillClass+'">'+b.status+'</span>'+
              '</div>'+
              (b.status !== 'completed' && b.status !== 'cancelled'
                ? '<div class="booking-row__actions">'+
                    (b.status === 'upcoming' ? '<button class="btn btn--primary" data-act="bookingaction" data-court="'+c.id+'" data-b="'+b.id+'" data-s="active">Start</button>' : '')+
                    (b.status === 'active' ? '<button class="btn btn--ok" data-act="bookingaction" data-court="'+c.id+'" data-b="'+b.id+'" data-s="completed">Complete</button>' : '')+
                    '<button class="btn btn--danger" data-act="bookingaction" data-court="'+c.id+'" data-b="'+b.id+'" data-s="cancelled">Cancel</button>'+
                  '</div>'
                : '')+
            '</div>';
          }).join(''))+
      '<div class="sec-title">Earnings</div>'+
      '<div class="wallet-hero">'+
        '<div class="wallet-hero__inner">'+
          '<div class="wallet-hero__label">COACHING EARNINGS</div>'+
          '<div class="wallet-hero__balance" style="font-size:32px">'+money(me.earnings || 0)+'</div>'+
          '<div style="font-size:11.5px;font-weight:600;color:rgba(255,255,255,.55);margin-top:14px">After '+PRICES.coachPct+'% platform fee · paid out weekly</div>'+
        '</div>'+
      '</div>'+
      '<button class="btn btn--ghost btn--block" style="margin-top:14px" data-act="back">← Back</button>'+
    '</div>'+
  '</div>';
}

/* ============================================================
   SECTION 40 — COMMUNITY DASHBOARD
   ============================================================ */
function screenCommunityDashboard(){
  const me = getMe();
  const k = me.communityId ? commById(me.communityId) : null;
  if (!k) return '<div class="empty">You don\'t lead a community yet.</div>';
  const members = DB.users.filter(u => u.communityId === k.id || (u.id !== 'me' && u.id !== k.createdBy)).slice(0, 8);
  const pending = DB.users.filter(u => u.id !== 'me').slice(0, 3);
  return '<div class="admin-shell" style="background:#F3F5F0;color:var(--navy)">'+
    '<div class="dash-hero dash-hero--comm">'+
      '<div class="dash-hero__inner">'+
        '<div class="dash-hero__eyebrow"><span style="width:6px;height:6px;background:#FF8A3D;border-radius:50%"></span>COMMUNITY DASHBOARD</div>'+
        '<h2>'+k.name+'</h2>'+
        '<p>Managed by '+me.name+' · '+k.members.toLocaleString()+' members</p>'+
      '</div>'+
    '</div>'+
    '<div class="dash-stat-grid">'+
      '<div class="dstat"><b>'+k.members.toLocaleString()+'</b><span>Members</span></div>'+
      '<div class="dstat"><b>'+(k.pendingMembers||0)+'</b><span>Pending</span></div>'+
      '<div class="dstat"><b>'+(k.events||0)+'</b><span>Events</span></div>'+
    '</div>'+
    '<div style="padding:0 18px 22px">'+
      '<div class="sec-title">Pending join requests <small>'+pending.length+'</small></div>'+
      pending.map(u =>
        '<div class="member-row">'+
          avatarHTML(u, 'av--sm')+
          '<div class="member-row__main">'+
            '<div class="member-row__t">'+u.name+'</div>'+
            '<div class="member-row__s">NTRP '+u.level+' · '+u.city+'</div>'+
          '</div>'+
          '<button class="btn btn--sm btn--danger" data-act="toast" data-msg="Rejected '+u.name.split(' ')[0]+'">Reject</button>'+
          '<button class="btn btn--sm btn--primary" data-act="toast" data-msg="Approved '+u.name.split(' ')[0]+'">Approve</button>'+
        '</div>').join('')+
      '<div class="sec-title">Members <small>'+members.length+' shown</small></div>'+
      members.slice(0, 5).map(u =>
        '<div class="member-row">'+
          avatarHTML(u, 'av--sm')+
          '<div class="member-row__main">'+
            '<div class="member-row__t">'+u.name+'</div>'+
            '<div class="member-row__s">'+u.city+' · NTRP '+u.level+'</div>'+
          '</div>'+
          '<span class="badge badge--soft" style="font-size:9px">Member</span>'+
        '</div>').join('')+
      '<div class="sec-title">Community management</div>'+
      '<div class="menu-row" data-act="toast" data-msg="Post an announcement to members">'+
        '<div class="menu-row__ico">'+ico('megaphone')+'</div>'+
        '<div class="menu-row__main"><div class="menu-row__t">Post announcement</div><div class="menu-row__s">Notify all members</div></div>'+
        ico('chev')+
      '</div>'+
      '<div class="menu-row" data-act="toast" data-msg="Create a new community event">'+
        '<div class="menu-row__ico">'+ico('calendar')+'</div>'+
        '<div class="menu-row__main"><div class="menu-row__t">Create event</div><div class="menu-row__s">Schedule a meet or tournament</div></div>'+
        ico('chev')+
      '</div>'+
      '<div class="menu-row" data-act="toast" data-msg="Edit community settings">'+
        '<div class="menu-row__ico">'+ico('settings')+'</div>'+
        '<div class="menu-row__main"><div class="menu-row__t">Community settings</div><div class="menu-row__s">Name, description, visibility</div></div>'+
        ico('chev')+
      '</div>'+
      '<button class="btn btn--ghost btn--block" style="margin-top:14px" data-act="back">← Back</button>'+
    '</div>'+
  '</div>';
}

/* ════════════════════════════════════════════════════════════
   END OF SESSION 4 — continue with Session 5 below
   ════════════════════════════════════════════════════════════ */
/* ============================================================
   SECTION 41 — ADMIN TABS
   ============================================================ */
const ADMIN_TABS = [
  {id:'overview',   label:'Overview'},
  {id:'analytics',  label:'Analytics'},
  {id:'approvals',  label:'Approvals'},
  {id:'users',      label:'Users'},
  {id:'admins',     label:'Admins'},
  {id:'national',   label:'National Team'},
  {id:'rankings',   label:'Rankings'},
  {id:'moderation', label:'Moderation'},
  {id:'wallet',     label:'Revenue'},
  {id:'log',        label:'Log'}
];

/* ============================================================
   ADMIN · OVERVIEW
   ============================================================ */
function adminOverview(){
  const vendors = DB.pending.vendors.length;
  const comms = DB.pending.communities.length;
  const coaches = DB.pending.coaches.length;
  const courts = DB.pending.courts.length;
  const total = vendors + comms + coaches + courts;
  const national = DB.users.filter(u => u.isNational).length;
  const members = DB.users.filter(u => u.role !== 'admin' && u.id !== 'me').length;
  const undone = ADMIN.log.filter(x => x.state === 'undone').length;
  const openReports = DB.reports.filter(r => r.status === 'open').length;

  return '<div class="admin-stat-grid">'+
    '<div class="astat"><b>'+money(PLATFORM.revenue)+'</b><span>Platform revenue</span></div>'+
    '<div class="astat"><b>'+total+'</b><span>Pending approvals</span></div>'+
    '<div class="astat"><b>'+members+'</b><span>Members</span></div>'+
    '<div class="astat"><b>'+national+'</b><span>National team</span></div>'+
    '<div class="astat"><b>'+openReports+'</b><span>Open reports</span></div>'+
    '<div class="astat"><b>'+ADMIN.log.length+'</b><span>Actions logged</span></div>'+
  '</div>'+
  '<div style="padding:0 18px 22px">'+
    '<div style="font-size:12px;font-weight:800;letter-spacing:.1em;color:rgba(255,255,255,.5);margin-bottom:12px">QUICK JUMP</div>'+
    [
      {label:'Analytics', tab:'analytics'},
      {label:'Approvals', tab:'approvals'},
      {label:'Moderation queue', tab:'moderation'},
      {label:'Revenue & fees', tab:'wallet'},
      {label:'Admins', tab:'admins'}
    ].map(x =>
      '<div class="admin-row" data-act="admintab" data-v="'+x.tab+'">'+
        '<div class="admin-row__main">'+
          '<div class="admin-row__t">'+x.label+'</div>'+
          '<div class="admin-row__s">Open '+x.label.toLowerCase()+'</div>'+
        '</div>'+ ico('chev', 'style="color:rgba(255,255,255,.4)"')+
      '</div>'
    ).join('')+
    (undone ? '<div style="margin-top:18px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:14px 16px;font-size:12px;font-weight:600;color:rgba(255,255,255,.55);line-height:1.5">'+
      '<b style="color:var(--green)">'+undone+'</b> reversed action'+(undone>1?'s':'')+' in the log — tap the Log tab to inspect and reapply.'+
    '</div>' : '')+
  '</div>';
}

/* ============================================================
   ADMIN · ANALYTICS
   ============================================================ */
function adminAnalytics(){
  const DAU = [42,58,61,73,89,102,88];
  const max = Math.max.apply(null, DAU);
  return '<div style="padding:0 18px 22px">'+
    '<div class="chart-card">'+
      '<div class="chart-card__t">Daily active users · Last 7 days</div>'+
      '<div class="chart">'+
        DAU.map((v,i) =>
          '<div class="chart__bar" style="height:'+Math.round(v/max*100)+'%"><span>'+['M','T','W','T','F','S','S'][i]+'</span></div>'
        ).join('')+
      '</div>'+
      '<div class="chart-legend"><span>7d ago</span><span>Today</span></div>'+
    '</div>'+
    '<div class="analytics-kpi">'+
      '<div class="analytics-kpi__main">'+
        '<div class="analytics-kpi__t">7-day retention</div>'+
        '<div class="analytics-kpi__s">Users who returned within a week</div>'+
      '</div>'+
      '<div class="analytics-kpi__v">62%</div>'+
    '</div>'+
    '<div class="analytics-kpi">'+
      '<div class="analytics-kpi__main">'+
        '<div class="analytics-kpi__t">Match completion rate</div>'+
        '<div class="analytics-kpi__s">Confirmed matches / requests sent</div>'+
      '</div>'+
      '<div class="analytics-kpi__v">78%</div>'+
    '</div>'+
    '<div class="analytics-kpi">'+
      '<div class="analytics-kpi__main">'+
        '<div class="analytics-kpi__t">Avg. wallet balance</div>'+
        '<div class="analytics-kpi__s">Across all active users</div>'+
      '</div>'+
      '<div class="analytics-kpi__v neutral">'+money(18.75)+'</div>'+
    '</div>'+
    '<div class="analytics-kpi">'+
      '<div class="analytics-kpi__main">'+
        '<div class="analytics-kpi__t">Court utilisation</div>'+
        '<div class="analytics-kpi__s">Booked hours / available hours · all courts</div>'+
      '</div>'+
      '<div class="analytics-kpi__v">48%</div>'+
    '</div>'+
    '<div class="chart-card" style="margin-top:14px">'+
      '<div class="chart-card__t">Top performing courts</div>'+
      DB.courts.slice(0, 4).map(c =>
        '<div class="admin-row" style="margin-bottom:8px">'+
          '<div style="width:34px;height:34px;border-radius:12px;background:rgba(216,255,61,.15);color:var(--green);display:grid;place-items:center;font-size:15px;flex:0 0 auto">🎾</div>'+
          '<div class="admin-row__main">'+
            '<div class="admin-row__t">'+c.name+'</div>'+
            '<div class="admin-row__s">$'+c.price+'/hr · '+c.courtCount+' courts</div>'+
          '</div>'+
          '<div class="analytics-kpi__v" style="font-size:14px">'+(60 + Math.floor(Math.random()*30))+'%</div>'+
        '</div>'
      ).join('')+
    '</div>'+
  '</div>';
}

/* ============================================================
   ADMIN · APPROVALS
   ============================================================ */
function adminApprovals(){
  const t = state.adminAppTab;
  const chips = [
    ['vendors','Vendors', DB.pending.vendors.length],
    ['communities','Communities', DB.pending.communities.length],
    ['coaches','Coaches', DB.pending.coaches.length],
    ['courts','Courts', DB.pending.courts.length]
  ];
  let body = '';

  if (t === 'vendors'){
    body = DB.pending.vendors.length === 0
      ? '<div style="text-align:center;padding:40px 20px;color:rgba(255,255,255,.4);font-size:13px;font-weight:600">No pending vendor applications.</div>'
      : DB.pending.vendors.map(v => {
          const u = userById(v.userId);
          return '<div class="approval" data-act="adminappdetail" data-type="vendor" data-id="'+v.id+'">'+
            '<div class="approval__head">'+ avatarHTML(u, 'av--sm')+
              '<div class="approval__main">'+
                '<div class="approval__t">'+v.itemName+'</div>'+
                '<div class="approval__s">'+u.name+' · '+v.category+' · $'+v.price+'</div>'+
              '</div>'+ ico('chev', 'style="color:rgba(255,255,255,.4)"')+
            '</div>'+
            '<div class="approval__meta">"'+escapeHTML(v.note)+'"</div>'+
            '<div class="approval__hint">Tap to view full application →</div>'+
          '</div>';
        }).join('');
  }
  if (t === 'communities'){
    body = DB.pending.communities.length === 0
      ? '<div style="text-align:center;padding:40px 20px;color:rgba(255,255,255,.4);font-size:13px;font-weight:600">No pending community verifications.</div>'
      : DB.pending.communities.map(k => {
          const u = userById(k.creatorId);
          return '<div class="approval" data-act="adminappdetail" data-type="community" data-id="'+k.id+'">'+
            '<div class="approval__head">'+
              '<div class="av av--sm" style="background:linear-gradient(140deg,#FF8A3D,#C25A1E)"><span class="av__ini">👥</span></div>'+
              '<div class="approval__main">'+
                '<div class="approval__t">'+k.name+'</div>'+
                '<div class="approval__s">'+u.name+' · '+k.members+' members</div>'+
              '</div>'+ ico('chev', 'style="color:rgba(255,255,255,.4)"')+
            '</div>'+
            '<div class="approval__meta">"'+escapeHTML(k.desc)+'"</div>'+
            '<div class="approval__hint">Tap to view full details →</div>'+
          '</div>';
        }).join('');
  }
  if (t === 'coaches'){
    body = DB.pending.coaches.length === 0
      ? '<div style="text-align:center;padding:40px 20px;color:rgba(255,255,255,.4);font-size:13px;font-weight:600">No pending coach verifications.</div>'
      : DB.pending.coaches.map(a => {
          const u = userById(a.userId);
          const c = courtById(a.courtId);
          return '<div class="approval" data-act="adminappdetail" data-type="coach" data-id="'+a.id+'">'+
            '<div class="approval__head">'+ avatarHTML(u, 'av--sm')+
              '<div class="approval__main">'+
                '<div class="approval__t">'+u.name+'</div>'+
                '<div class="approval__s">'+(c ? c.name : 'Unknown court')+'</div>'+
              '</div>'+ ico('chev', 'style="color:rgba(255,255,255,.4)"')+
            '</div>'+
            '<div class="approval__meta">'+a.spec+' · '+a.exp+' · $'+a.rate+'/hr</div>'+
            '<div class="approval__hint">Tap to view full application →</div>'+
          '</div>';
        }).join('');
  }
  if (t === 'courts'){
    body = DB.pending.courts.length === 0
      ? '<div style="text-align:center;padding:40px 20px;color:rgba(255,255,255,.4);font-size:13px;font-weight:600">No pending court submissions.</div>'
      : DB.pending.courts.map(ct => {
          const u = userById(ct.submittedBy);
          return '<div class="approval" data-act="adminappdetail" data-type="court" data-id="'+ct.id+'">'+
            '<div class="approval__head">'+
              '<div class="av av--sm" style="background:linear-gradient(140deg,#4A6B9E,#263F6B)"><span class="av__ini">🎾</span></div>'+
              '<div class="approval__main">'+
                '<div class="approval__t">'+ct.name+'</div>'+
                '<div class="approval__s">📍 '+ct.address+'</div>'+
              '</div>'+ ico('chev', 'style="color:rgba(255,255,255,.4)"')+
            '</div>'+
            '<div class="approval__meta">'+ct.courtCount+' courts · '+ct.surface+' · $'+ct.price+'/hr · by '+u.name+'</div>'+
            '<div class="approval__hint">Tap to view full submission →</div>'+
          '</div>';
        }).join('');
  }

  return '<div style="padding:0 18px 22px">'+
    '<div class="chips chips--pad" style="padding-left:0">'+
      chips.map(function(x){
        var v = x[0], l = x[1], n = x[2];
        return '<button class="chip '+(t===v?'is-on':'')+'" data-act="admingotoapp" data-v="'+v+'">'+l+(n?' · '+n:'')+'</button>';
      }).join('')+
    '</div>'+
    body+
  '</div>';
}

/* ============================================================
   ADMIN · USERS
   ============================================================ */
function adminUsers(){
  const q = state.adminUserQuery.toLowerCase();
  let list = DB.users.filter(u => u.id !== 'admin');
  if (q) list = list.filter(u => u.name.toLowerCase().indexOf(q) > -1);
  return '<div style="padding:0 18px 22px">'+
    '<div class="search" style="background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.1);box-shadow:none">'+ico('search')+
      '<input data-input="adminUserQuery" value="'+state.adminUserQuery.replace(/"/g,'&quot;')+'" placeholder="Search users…" style="color:#fff">'+
    '</div>'+
    list.map(u => {
      const roleChip = u.role === 'coach' ? '<span class="badge" style="background:rgba(216,255,61,.2);color:var(--green);font-size:9px;padding:2px 6px">COACH</span>' : '';
      const vendChip = u.vendorStatus === 'approved' ? '<span class="badge" style="background:rgba(37,194,110,.2);color:#9BE8C2;font-size:9px;padding:2px 6px">VENDOR</span>' : '';
      const natChip = u.isNational ? '<span class="badge" style="background:rgba(216,255,61,.2);color:var(--green);font-size:9px;padding:2px 6px">NATIONAL</span>' : '';
      const commChip = u.communityId ? '<span class="badge" style="background:rgba(255,138,61,.2);color:#FFB27A;font-size:9px;padding:2px 6px">COMMUNITY</span>' : '';
      return '<div class="admin-row" data-act="adminuseredit" data-id="'+u.id+'">'+
        avatarHTML(u, 'av--sm')+
        '<div class="admin-row__main">'+
          '<div class="admin-row__t">'+(u.name || 'Unnamed')+' '+roleChip+' '+vendChip+' '+natChip+' '+commChip+'</div>'+
          '<div class="admin-row__s">'+(u.city || '—')+' · NTRP '+u.level+(u.rankN?' · Nat #'+u.rankN:'')+(u.rankG?' · Gen #'+u.rankG:'')+'</div>'+
        '</div>'+ ico('chev')+
      '</div>';
    }).join('')+
  '</div>';
}

/* ============================================================
   ADMIN · ADMINS
   ============================================================ */
function adminAdmins(){
  return '<div style="padding:0 18px 22px">'+
    '<div style="background:rgba(216,255,61,.08);border:1px solid rgba(216,255,61,.22);border-radius:16px;padding:14px 16px;margin-bottom:16px">'+
      '<div style="font-size:11px;font-weight:900;letter-spacing:.12em;color:var(--green)">ADMIN ACCOUNTS</div>'+
      '<div style="font-size:11.5px;font-weight:600;color:rgba(255,255,255,.62);margin-top:6px;line-height:1.5">Admins are separate from players, coaches and community accounts. Each has its own email and passcode.</div>'+
    '</div>'+
    ADMINS.map(a =>
      '<div class="adm-card">'+
        '<div class="adm-card__inner">'+
          '<div class="adm-card__photo">'+ a.initials+
            '<img src="'+img('admin-'+a.id,160,160)+'" alt="" onerror="this.remove()">'+
          '</div>'+
          '<div class="adm-card__main">'+
            '<div class="adm-card__t">'+a.name+'</div>'+
            '<div class="adm-card__s">'+a.email+'</div>'+
            '<div class="adm-card__meta">'+
              '<span>ADMIN</span>'+
              (a.isDefault ? '<span>DEFAULT</span>' : '<span class="dim">CUSTOM</span>')+
              (SESSION.adminId === a.id ? '<span class="dim">SIGNED IN</span>' : '')+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>'
    ).join('')+
    '<button class="abtn abtn--ok" style="width:100%;padding:15px;margin-top:8px" data-act="adminadd">+ Add Admin Account</button>'+
  '</div>';
}

/* ============================================================
   ADMIN · NATIONAL TEAM
   ============================================================ */
function adminNational(){
  const nat = DB.users.filter(u => u.isNational && u.role !== 'admin').sort((a,b) => a.rankN - b.rankN);
  const pool = DB.users.filter(u => !u.isNational && u.role !== 'admin' && u.id !== 'me').sort((a,b) => b.points - a.points);
  return '<div style="padding:0 18px 22px">'+
    '<div style="background:rgba(216,255,61,.08);border:1px solid rgba(216,255,61,.22);border-radius:16px;padding:14px 16px;margin-bottom:16px">'+
      '<div style="font-size:11px;font-weight:900;letter-spacing:.12em;color:var(--green)">NATIONAL TEAM ROSTER</div>'+
      '<div style="font-size:11.5px;font-weight:600;color:rgba(255,255,255,.62);margin-top:6px;line-height:1.5">Only admin can add or remove players. National rankings are completely separate from the general pool.</div>'+
    '</div>'+
    '<div style="font-size:11px;font-weight:800;letter-spacing:.1em;color:rgba(255,255,255,.5);margin-bottom:10px">CURRENT ROSTER · '+nat.length+'</div>'+
    nat.map(u =>
      '<div class="admin-row">'+
        '<div style="width:28px;text-align:center;font-size:15px;font-weight:900;color:var(--green);flex:0 0 auto">'+u.rankN+'</div>'+
        avatarHTML(u, 'av--sm')+
        '<div class="admin-row__main">'+
          '<div class="admin-row__t">'+u.name+'</div>'+
          '<div class="admin-row__s">'+u.points.toLocaleString()+' pts · NTRP '+u.level+' · '+u.region+'</div>'+
        '</div>'+
        '<button class="abtn abtn--no" style="padding:8px 12px;font-size:11px" data-act="removenational" data-id="'+u.id+'">Remove</button>'+
      '</div>'
    ).join('')+
    '<div style="font-size:11px;font-weight:800;letter-spacing:.1em;color:rgba(255,255,255,.5);margin:24px 0 10px">ELIGIBLE — PROMOTE TO NATIONAL</div>'+
    pool.slice(0, 8).map(u =>
      '<div class="admin-row">'+ avatarHTML(u, 'av--sm')+
        '<div class="admin-row__main">'+
          '<div class="admin-row__t">'+u.name+'</div>'+
          '<div class="admin-row__s">'+u.points.toLocaleString()+' pts · NTRP '+u.level+' · Gen #'+u.rankG+'</div>'+
        '</div>'+
        '<button class="abtn abtn--ok" style="padding:8px 12px;font-size:11px" data-act="addnational" data-id="'+u.id+'">+ Add</button>'+
      '</div>'
    ).join('')+
  '</div>';
}

/* ============================================================
   ADMIN · RANKINGS
   ============================================================ */
function adminRankings(){
  const general = DB.users.filter(u => !u.isNational && u.role !== 'admin' && u.id !== 'me')
    .sort((a,b) => b.points - a.points);
  return '<div style="padding:0 18px 22px">'+
    '<div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:14px 16px;margin-bottom:16px">'+
      '<div style="font-size:11px;font-weight:900;letter-spacing:.12em;color:var(--green)">GENERAL PLAYER POOL</div>'+
      '<div style="font-size:11.5px;font-weight:600;color:rgba(255,255,255,.62);margin-top:6px;line-height:1.5">Adjust points ±50 per tap. Every change is reversible from the Log.</div>'+
    '</div>'+
    general.map((u, i) =>
      '<div class="admin-row">'+
        '<div style="width:28px;text-align:center;font-size:14px;font-weight:900;color:rgba(255,255,255,.4);flex:0 0 auto">'+(i+1)+'</div>'+
        avatarHTML(u, 'av--sm')+
        '<div class="admin-row__main">'+
          '<div class="admin-row__t">'+u.name+'</div>'+
          '<div class="admin-row__s">NTRP '+u.level+' · '+u.region+'</div>'+
        '</div>'+
        '<div style="text-align:right;margin-right:8px">'+
          '<div style="font-size:13px;font-weight:900;color:#fff">'+u.points.toLocaleString()+'</div>'+
          '<div style="font-size:9.5px;font-weight:700;color:rgba(255,255,255,.4)">PTS</div>'+
        '</div>'+
        '<div style="display:flex;gap:4px">'+
          '<button class="abtn abtn--ghost" style="padding:6px 10px;font-size:14px" data-act="ptsminus" data-id="'+u.id+'">−</button>'+
          '<button class="abtn abtn--ghost" style="padding:6px 10px;font-size:14px" data-act="ptsplus" data-id="'+u.id+'">+</button>'+
        '</div>'+
      '</div>'
    ).join('')+
  '</div>';
}

/* ============================================================
   ADMIN · MODERATION
   ============================================================ */
function adminModeration(){
  const f = state.adminReportFilter;
  const list = DB.reports.filter(r => f === 'all' || r.status === f);
  const typeLabel = {
    harass:'Harassment', spam:'Spam', fake:'Fake profile', noshow:'No-show'
  };
  return '<div style="padding:0 18px 22px">'+
    '<div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:14px 16px;margin-bottom:14px">'+
      '<div style="font-size:11px;font-weight:900;letter-spacing:.12em;color:var(--green)">MODERATION QUEUE</div>'+
      '<div style="font-size:11.5px;font-weight:600;color:rgba(255,255,255,.62);margin-top:6px;line-height:1.5">Review user reports and take action. All decisions are reversible.</div>'+
    '</div>'+
    '<div class="chips chips--pad" style="padding-left:0;margin-bottom:6px">'+
      [['open','Open'],['resolved','Resolved'],['all','All']].map(function(x){
        var v = x[0], l = x[1];
        return '<button class="chip '+(f===v?'is-on':'')+'" data-act="reportfilter" data-v="'+v+'">'+l+'</button>';
      }).join('')+
    '</div>'+
    (list.length === 0
      ? '<div style="text-align:center;padding:40px 20px;color:rgba(255,255,255,.4);font-size:13px;font-weight:600">No reports in this view.</div>'
      : list.map(r => {
          const reporter = userById(r.reporterId);
          const target = userById(r.targetId);
          return '<div class="report-card">'+
            '<div class="report-card__head">'+
              '<span class="report-card__type report-card__type--'+r.type+'">'+ (typeLabel[r.type] || r.type) +'</span>'+
              '<div style="flex:1"></div>'+
              '<span style="font-size:10px;font-weight:700;color:rgba(255,255,255,.4)">'+timeAgo(r.ts)+'</span>'+
            '</div>'+
            '<div style="display:flex;gap:12px;align-items:center;margin-bottom:10px">'+
              (reporter ? avatarHTML(reporter, 'av--xs') : '')+
              '<div style="font-size:11px;font-weight:700;color:rgba(255,255,255,.6)">'+(reporter ? reporter.name : '?')+' → '+(target ? target.name : '?')+'</div>'+
              (target ? avatarHTML(target, 'av--xs') : '')+
            '</div>'+
            '<div class="report-card__s">"'+escapeHTML(r.text)+'"</div>'+
            (r.status === 'open'
              ? '<div class="report-card__btns">'+
                  '<button class="abtn abtn--ghost" data-act="reportresolve" data-id="'+r.id+'" data-action="dismiss">Dismiss</button>'+
                  '<button class="abtn abtn--no" data-act="reportresolve" data-id="'+r.id+'" data-action="warn">Warn</button>'+
                  '<button class="abtn abtn--no" data-act="reportresolve" data-id="'+r.id+'" data-action="ban">Ban</button>'+
                '</div>'
              : '<div style="font-size:10.5px;font-weight:800;color:rgba(37,194,110,.8);letter-spacing:.06em;margin-top:10px">✓ RESOLVED</div>')+
          '</div>';
        }).join(''))+
  '</div>';
}

/* ============================================================
   ADMIN · REVENUE
   ============================================================ */
function adminWallet(){
  const history = PLATFORM.history.slice().reverse().slice(0, 30);
  const byKind = {};
  PLATFORM.history.forEach(h => {
    byKind[h.kind] = (byKind[h.kind] || 0) + h.fee;
  });
  const kpi = [
    { k:'court',      l:'Court bookings',   feePct: PRICES.courtPct },
    { k:'coach',      l:'Coach sessions',   feePct: PRICES.coachPct },
    { k:'tournament', l:'Tournaments',      feePct: PRICES.tournamentPct },
    { k:'chat',       l:'Chat unlocks',     fee: PRICES.chatUnlock },
    { k:'request',    l:'Play requests',    fee: PRICES.requestPlayer },
    { k:'vendor',     l:'Vendor listings',  fee: PRICES.vendorListing },
    { k:'shop',       l:'Shop sales',       feePct: PRICES.shopPct }
  ];
  return '<div style="padding:0 18px 22px">'+
    '<div class="wallet-hero" style="margin-bottom:14px">'+
      '<div class="wallet-hero__inner">'+
        '<div class="wallet-hero__label">PLATFORM REVENUE</div>'+
        '<div class="wallet-hero__balance">'+money(PLATFORM.revenue)+'</div>'+
        '<div style="font-size:11.5px;font-weight:600;color:rgba(255,255,255,.55);margin-top:14px">All-time fees collected across the platform</div>'+
      '</div>'+
    '</div>'+
    '<div style="font-size:11px;font-weight:900;letter-spacing:.1em;color:rgba(255,255,255,.5);margin-bottom:10px">FEE STRUCTURE</div>'+
    kpi.map(x =>
      '<div class="admin-row">'+
        '<div class="admin-row__main">'+
          '<div class="admin-row__t">'+x.l+'</div>'+
          '<div class="admin-row__s">'+(x.feePct != null ? x.feePct + '% of transaction' : money(x.fee) + ' flat')+'</div>'+
        '</div>'+
        '<div class="analytics-kpi__v" style="font-size:16px">'+money(byKind[x.k] || 0)+'</div>'+
      '</div>'
    ).join('')+
    '<div style="font-size:11px;font-weight:900;letter-spacing:.1em;color:rgba(255,255,255,.5);margin:24px 0 10px">RECENT REVENUE EVENTS</div>'+
    (history.length === 0
      ? '<div style="text-align:center;padding:30px 20px;color:rgba(255,255,255,.4);font-size:12.5px;font-weight:600">No platform revenue yet.</div>'
      : history.map(h =>
          '<div class="admin-row" style="margin-bottom:6px">'+
            '<div style="width:36px;height:36px;border-radius:13px;background:rgba(216,255,61,.15);color:var(--green);display:grid;place-items:center;font-size:15px;flex:0 0 auto">💵</div>'+
            '<div class="admin-row__main">'+
              '<div class="admin-row__t">'+h.kind+' · '+money(h.gross)+'</div>'+
              '<div class="admin-row__s">'+timeAgo(h.ts)+' · net paid out '+money(h.net)+'</div>'+
            '</div>'+
            '<div class="analytics-kpi__v" style="font-size:15px">+'+money(h.fee)+'</div>'+
          '</div>'
        ).join(''))+
  '</div>';
}

/* ============================================================
   ADMIN · ACTION LOG
   ============================================================ */
function adminLog(){
  const log = ADMIN.log.slice().reverse();
  const undone = log.filter(x => x.state === 'undone').length;
  return '<div style="padding:0 18px 22px">'+
    '<div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:14px 16px;margin-bottom:16px;display:flex;gap:12px;align-items:center">'+
      '<div style="flex:1">'+
        '<div style="font-size:11px;font-weight:900;letter-spacing:.12em;color:var(--green)">ACTION LOG</div>'+
        '<div style="font-size:11.5px;font-weight:600;color:rgba(255,255,255,.62);margin-top:6px;line-height:1.5">Every action is reversible. Tap a log entry to reverse or reapply it.</div>'+
      '</div>'+
      '<div style="text-align:right">'+
        '<div style="font-size:22px;font-weight:900;color:var(--green);line-height:1">'+log.length+'</div>'+
        '<div style="font-size:9.5px;font-weight:800;color:rgba(255,255,255,.4);letter-spacing:.1em">ACTIONS</div>'+
      '</div>'+
    '</div>'+
    (log.length === 0
      ? '<div style="text-align:center;padding:40px 20px;color:rgba(255,255,255,.4);font-size:13px;font-weight:600">No actions yet.<br><span style="opacity:.6;font-size:11px">Approve something to see it here.</span></div>'
      : log.map((a, i) =>
          '<div class="log-entry '+(a.state==='undone'?'undone':'')+'">'+
            '<div class="log-entry__main">'+
              '<div class="log-entry__t">'+(log.length - i)+'. '+a.label+'</div>'+
              '<div class="log-entry__m">'+new Date(a.t).toLocaleTimeString()+' · by '+a.by+' · '+(a.state==='undone'?'REVERSED':'ACTIVE')+'</div>'+
            '</div>'+
            '<button class="log-entry__undo" data-act="adminlogtoggle" data-id="'+a.id+'">'+
              (a.state === 'undone' ? ico('redo') + ' Reapply' : ico('undo') + ' Undo')+
            '</button>'+
          '</div>'
        ).join(''))+
  '</div>';
}

/* ============================================================
   ADMIN · MAIN DISPATCHER
   ============================================================ */
function screenAdmin(){
  if (!SESSION.adminId){
    return screenAdminLogin();
  }
  const admin = adminById(SESSION.adminId);
  if (!admin){ SESSION.adminId = null; return screenAdminLogin(); }
  const t = state.adminTab;
  let body = '';
  if (t === 'overview')   body = adminOverview();
  if (t === 'analytics')  body = adminAnalytics();
  if (t === 'approvals')  body = adminApprovals();
  if (t === 'users')      body = adminUsers();
  if (t === 'admins')     body = adminAdmins();
  if (t === 'national')   body = adminNational();
  if (t === 'rankings')   body = adminRankings();
  if (t === 'moderation') body = adminModeration();
  if (t === 'wallet')     body = adminWallet();
  if (t === 'log')        body = adminLog();

  const pendingCount = DB.pending.vendors.length + DB.pending.communities.length +
    DB.pending.coaches.length + DB.pending.courts.length;
  const openReports = DB.reports.filter(r => r.status === 'open').length;

  return '<div class="admin-shell">'+
    '<div class="admin-top">'+
      '<div class="admin-top__inner">'+
        '<div style="flex:1;min-width:0">'+
          '<h2>Admin Console</h2>'+
          '<div class="admin-top__who">SIGNED IN AS '+admin.name.toUpperCase()+'</div>'+
        '</div>'+
        '<button class="admin-top__exit" data-act="exitgate">'+ico('power')+'Exit</button>'+
      '</div>'+
      '<div class="admin-top__chips">'+
        ADMIN_TABS.map(x =>
          '<button class="achip '+(t===x.id?'is-on':'')+'" data-act="admintab" data-v="'+x.id+'">'+x.label+
            (x.id === 'approvals' && pendingCount ? '<span class="achip__n">'+pendingCount+'</span>' : '')+
            (x.id === 'moderation' && openReports ? '<span class="achip__n">'+openReports+'</span>' : '')+
          '</button>'
        ).join('')+
      '</div>'+
    '</div>'+
    body+
  '</div>';
}

/* ============================================================
   ADMIN · APPROVAL DETAIL
   ============================================================ */
function screenAdminDetail(params){
  const type = params.type;
  const id = params.id;
  let item, user;

  if (type === 'vendor'){
    item = DB.pending.vendors.find(x => x.id === id);
    if (!item) return '<div class="empty">Application not found.</div>';
    user = userById(item.userId);
    return '<div class="admin-shell" style="padding-bottom:0">'+
      '<div class="detail-hdr">'+
        '<div class="detail-hdr__inner">'+
          '<div class="detail-hdr__eyebrow">VENDOR APPLICATION</div>'+
          '<h2>'+item.itemName+'</h2>'+
          '<p>Submitted '+item.submitted+' · '+item.category+' · $'+item.price+'</p>'+
        '</div>'+
      '</div>'+
      '<div class="detail-block">'+
        '<div class="detail-block__t">Applicant</div>'+
        '<div style="display:flex;gap:13px;align-items:center">'+ avatarHTML(user, 'av--lg')+
          '<div style="flex:1;min-width:0">'+
            '<div style="font-size:17px;font-weight:900;letter-spacing:-.035em">'+user.name+'</div>'+
            '<div style="font-size:11.5px;font-weight:600;color:var(--muted);margin-top:5px">'+user.city+' · NTRP '+user.level+'</div>'+
            '<div style="margin-top:9px;display:flex;gap:6px;flex-wrap:wrap">'+
              '<span class="badge badge--soft" style="font-size:9px">'+user.idNumber+'</span>'+
              (user.vendorStatus === 'approved' ? '<span class="badge badge--ok" style="font-size:9px">Already vendor</span>' : '')+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>'+
      '<div class="detail-block">'+
        '<div class="detail-block__t">Item details</div>'+
        '<div class="detail-field"><span class="detail-field__k">Item name</span><span class="detail-field__v">'+item.itemName+'</span></div>'+
        '<div class="detail-field"><span class="detail-field__k">Category</span><span class="detail-field__v">'+item.category+'</span></div>'+
        '<div class="detail-field"><span class="detail-field__k">Asking price</span><span class="detail-field__v">$'+item.price+'</span></div>'+
        '<div class="detail-field"><span class="detail-field__k">Photos attached</span><span class="detail-field__v">'+item.photos+'</span></div>'+
        '<div class="detail-field"><span class="detail-field__k">Weight</span><span class="detail-field__v">'+item.weight+'</span></div>'+
        '<div class="detail-field"><span class="detail-field__k">Shipping</span><span class="detail-field__v">'+item.shipping+'</span></div>'+
        '<div class="detail-field"><span class="detail-field__k">Listing fee</span><span class="detail-field__v">'+money(PRICES.vendorListing)+' · paid</span></div>'+
      '</div>'+
      '<div class="detail-block">'+
        '<div class="detail-block__t">Applicant note</div>'+
        '<div class="detail-note">"'+escapeHTML(item.note)+'"</div>'+
      '</div>'+
      '<div class="detail-actions">'+
        '<button class="btn btn--danger" data-act="rejectvendor" data-id="'+item.id+'">Reject</button>'+
        '<button class="btn btn--primary" data-act="approvevendor" data-id="'+item.id+'">Approve Vendor</button>'+
      '</div>'+
    '</div>';
  }

  if (type === 'community'){
    item = DB.pending.communities.find(x => x.id === id);
    if (!item) return '<div class="empty">Application not found.</div>';
    user = userById(item.creatorId);
    return '<div class="admin-shell" style="padding-bottom:0">'+
      '<div class="detail-hdr">'+
        '<div class="detail-hdr__inner">'+
          '<div class="detail-hdr__eyebrow">COMMUNITY VERIFICATION</div>'+
          '<h2>'+item.name+'</h2>'+
          '<p>Submitted '+item.submitted+' · '+item.members+' members · '+item.region+'</p>'+
        '</div>'+
      '</div>'+
      '<div class="detail-block">'+
        '<div class="detail-block__t">Creator</div>'+
        '<div style="display:flex;gap:13px;align-items:center">'+ avatarHTML(user, 'av--lg')+
          '<div style="flex:1;min-width:0">'+
            '<div style="font-size:17px;font-weight:900;letter-spacing:-.035em">'+user.name+'</div>'+
            '<div style="font-size:11.5px;font-weight:600;color:var(--muted);margin-top:5px">'+user.city+' · NTRP '+user.level+'</div>'+
          '</div>'+
        '</div>'+
      '</div>'+
      '<div class="detail-block">'+
        '<div class="detail-block__t">Community details</div>'+
        '<div class="detail-field"><span class="detail-field__k">Name</span><span class="detail-field__v">'+item.name+'</span></div>'+
        '<div class="detail-field"><span class="detail-field__k">Members</span><span class="detail-field__v">'+item.members+'</span></div>'+
        '<div class="detail-field"><span class="detail-field__k">Region</span><span class="detail-field__v">'+item.region+'</span></div>'+
        '<div class="detail-field"><span class="detail-field__k">Meeting place</span><span class="detail-field__v">'+item.meetingPlace+'</span></div>'+
        '<div class="detail-field"><span class="detail-field__k">Schedule</span><span class="detail-field__v">'+item.schedule+'</span></div>'+
      '</div>'+
      '<div class="detail-block">'+
        '<div class="detail-block__t">Description</div>'+
        '<div class="detail-note">"'+escapeHTML(item.desc)+'"</div>'+
      '</div>'+
      '<div class="detail-actions">'+
        '<button class="btn btn--danger" data-act="rejectcomm" data-id="'+item.id+'">Reject</button>'+
        '<button class="btn btn--primary" data-act="approvecomm" data-id="'+item.id+'">Verify Community</button>'+
      '</div>'+
    '</div>';
  }

  if (type === 'coach'){
    item = DB.pending.coaches.find(x => x.id === id);
    if (!item) return '<div class="empty">Application not found.</div>';
    user = userById(item.userId);
    const c = courtById(item.courtId);
    return '<div class="admin-shell" style="padding-bottom:0">'+
      '<div class="detail-hdr">'+
        '<div class="detail-hdr__inner">'+
          '<div class="detail-hdr__eyebrow">COACH VERIFICATION</div>'+
          '<h2>'+user.name+'</h2>'+
          '<p>Submitted '+item.submitted+' · Stationed at '+(c ? c.name : 'unknown')+'</p>'+
        '</div>'+
      '</div>'+
      '<div class="detail-block">'+
        '<div class="detail-block__t">Coach profile</div>'+
        '<div style="display:flex;gap:13px;align-items:center">'+ avatarHTML(user, 'av--lg')+
          '<div style="flex:1;min-width:0">'+
            '<div style="font-size:17px;font-weight:900;letter-spacing:-.035em">'+user.name+'</div>'+
            '<div style="font-size:11.5px;font-weight:600;color:var(--muted);margin-top:5px">'+user.city+' · NTRP '+user.level+'</div>'+
          '</div>'+
        '</div>'+
      '</div>'+
      '<div class="detail-block">'+
        '<div class="detail-block__t">Application details</div>'+
        '<div class="detail-field"><span class="detail-field__k">Specialty</span><span class="detail-field__v">'+item.spec+'</span></div>'+
        '<div class="detail-field"><span class="detail-field__k">Experience</span><span class="detail-field__v">'+item.exp+'</span></div>'+
        '<div class="detail-field"><span class="detail-field__k">Certification</span><span class="detail-field__v">'+item.cert+'</span></div>'+
        '<div class="detail-field"><span class="detail-field__k">Hourly rate</span><span class="detail-field__v">$'+item.rate+'</span></div>'+
        '<div class="detail-field"><span class="detail-field__k">Availability</span><span class="detail-field__v">'+item.availability+'</span></div>'+
        '<div class="detail-field"><span class="detail-field__k">Platform fee</span><span class="detail-field__v">'+PRICES.coachPct+'% per lesson</span></div>'+
      '</div>'+
      (c
        ? '<div class="detail-block">'+
            '<div class="detail-block__t">Requested court</div>'+
            '<div class="detail-field"><span class="detail-field__k">Court</span><span class="detail-field__v">'+c.name+'</span></div>'+
            '<div class="detail-field"><span class="detail-field__k">Address</span><span class="detail-field__v">'+c.address+'</span></div>'+
            '<div class="detail-field"><span class="detail-field__k">Surface</span><span class="detail-field__v">'+c.surface+'</span></div>'+
          '</div>'
        : '')+
      '<div class="detail-actions">'+
        '<button class="btn btn--danger" data-act="rejectcoach" data-id="'+item.id+'">Reject</button>'+
        '<button class="btn btn--primary" data-act="approvecoach" data-id="'+item.id+'">Verify Coach</button>'+
      '</div>'+
    '</div>';
  }

  if (type === 'court'){
    item = DB.pending.courts.find(x => x.id === id);
    if (!item) return '<div class="empty">Submission not found.</div>';
    user = userById(item.submittedBy);
    return '<div class="admin-shell" style="padding-bottom:0">'+
      '<div class="detail-hdr">'+
        '<div class="detail-hdr__inner">'+
          '<div class="detail-hdr__eyebrow">COURT SUBMISSION</div>'+
          '<h2>'+item.name+'</h2>'+
          '<p>Submitted '+item.submitted+' · '+item.courtCount+' courts · $'+item.price+'/hr</p>'+
        '</div>'+
      '</div>'+
      '<div class="detail-block">'+
        '<div class="detail-block__t">Submitted by</div>'+
        '<div style="display:flex;gap:13px;align-items:center">'+ avatarHTML(user, 'av--lg')+
          '<div style="flex:1;min-width:0">'+
            '<div style="font-size:17px;font-weight:900;letter-spacing:-.035em">'+user.name+'</div>'+
            '<div style="font-size:11.5px;font-weight:600;color:var(--muted);margin-top:5px">'+user.city+' · NTRP '+user.level+'</div>'+
          '</div>'+
        '</div>'+
      '</div>'+
      '<div class="detail-block">'+
        '<div class="detail-block__t">Court details</div>'+
        '<div class="detail-field"><span class="detail-field__k">Name</span><span class="detail-field__v">'+item.name+'</span></div>'+
        '<div class="detail-field"><span class="detail-field__k">Address</span><span class="detail-field__v">'+item.address+'</span></div>'+
        '<div class="detail-field"><span class="detail-field__k">Surface</span><span class="detail-field__v">'+item.surface+'</span></div>'+
        '<div class="detail-field"><span class="detail-field__k">Courts</span><span class="detail-field__v">'+item.courtCount+'</span></div>'+
        '<div class="detail-field"><span class="detail-field__k">Price / hour</span><span class="detail-field__v">$'+item.price+'</span></div>'+
        '<div class="detail-field"><span class="detail-field__k">Hours</span><span class="detail-field__v">'+item.hours+'</span></div>'+
        '<div class="detail-field"><span class="detail-field__k">Contact</span><span class="detail-field__v">'+item.contact+'</span></div>'+
      '</div>'+
      '<div class="detail-block">'+
        '<div class="detail-block__t">Amenities</div>'+
        '<div style="display:flex;gap:7px;flex-wrap:wrap">'+
          item.amenities.map(a => '<span style="padding:7px 12px;border-radius:11px;background:#EFF2EC;font-size:11px;font-weight:700;color:#5C6B7A">'+a+'</span>').join('')+
        '</div>'+
      '</div>'+
      (item.notes
        ? '<div class="detail-block">'+
            '<div class="detail-block__t">Submitter notes</div>'+
            '<div class="detail-note">"'+escapeHTML(item.notes)+'"</div>'+
          '</div>'
        : '')+
      '<div class="detail-actions">'+
        '<button class="btn btn--danger" data-act="rejectcourt" data-id="'+item.id+'">Reject</button>'+
        '<button class="btn btn--primary" data-act="approvecourt" data-id="'+item.id+'">Approve Court</button>'+
      '</div>'+
    '</div>';
  }

  return '<div class="empty">Unknown item type.</div>';
}

/* ============================================================
   ADMIN · USER EDIT
   ============================================================ */
function screenAdminUser(params){
  const u = userById(params.id);
  if (!u) return '<div class="empty">User not found.</div>';
  const isVendor = u.vendorStatus === 'approved';
  return '<div class="admin-shell" style="padding-bottom:40px">'+
    '<div class="admin-top">'+
      '<div class="admin-top__inner" style="display:flex;gap:14px;align-items:center">'+ avatarHTML(u, 'av--lg')+
        '<div style="flex:1;min-width:0">'+
          '<h2 style="font-size:21px">'+(u.name || 'Unnamed')+'</h2>'+
          '<p>'+(u.city || '—')+' · NTRP '+u.level+' · '+u.idNumber+'</p>'+
        '</div>'+
      '</div>'+
    '</div>'+
    '<div style="padding:22px 18px">'+
      '<div style="font-size:11px;font-weight:800;letter-spacing:.1em;color:rgba(255,255,255,.5);margin-bottom:12px">IDENTITY</div>'+
      '<div class="form-field"><label class="form-label" style="color:rgba(255,255,255,.5)">Display name</label>'+
        '<input class="form-input" id="au-name" value="'+(u.name||'').replace(/"/g,'&quot;')+'" style="background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.1);color:#fff"></div>'+
      '<div class="form-row">'+
        '<div class="form-field"><label class="form-label" style="color:rgba(255,255,255,.5)">Level</label>'+
          '<input class="form-input" id="au-level" value="'+u.level+'" style="background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.1);color:#fff"></div>'+
        '<div class="form-field"><label class="form-label" style="color:rgba(255,255,255,.5)">Region</label>'+
          '<input class="form-input" id="au-region" value="'+u.region+'" style="background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.1);color:#fff"></div>'+
      '</div>'+
      '<div style="font-size:11px;font-weight:800;letter-spacing:.1em;color:rgba(255,255,255,.5);margin:24px 0 12px">WALLET</div>'+
      '<div class="wallet-hero" style="margin-bottom:16px">'+
        '<div class="wallet-hero__inner">'+
          '<div class="wallet-hero__label">CURRENT BALANCE</div>'+
          '<div class="wallet-hero__balance" style="font-size:30px">'+money(u.wallet)+'</div>'+
          '<div style="display:flex;gap:8px;margin-top:14px">'+
            '<button class="abtn abtn--ok" data-act="admincredit" data-id="'+u.id+'" data-amount="10">+ $10</button>'+
            '<button class="abtn abtn--ghost" data-act="admincredit" data-id="'+u.id+'" data-amount="-10">− $10</button>'+
            '<button class="abtn abtn--ghost" data-act="admincredit" data-id="'+u.id+'" data-amount="25">+ $25</button>'+
          '</div>'+
        '</div>'+
      '</div>'+
      '<div style="font-size:11px;font-weight:800;letter-spacing:.1em;color:rgba(255,255,255,.5);margin:24px 0 12px">ROLE</div>'+
      '<div class="form-chips">'+
        ['user','coach','community','admin'].map(r =>
          '<button class="form-chip '+(u.role===r?'is-on':'')+'" data-act="adminrole" data-id="'+u.id+'" data-v="'+r+'" style="background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.1);color:#fff">'+r.charAt(0).toUpperCase()+r.slice(1)+'</button>').join('')+
      '</div>'+
      (u.role === 'coach'
        ? '<div class="form-field" style="margin-top:20px">'+
            '<label class="form-label" style="color:rgba(255,255,255,.5)">Stationed at court</label>'+
            '<select class="form-input" id="au-coachcourt" style="background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.1);color:#fff">'+
              '<option value="">— None —</option>'+
              DB.courts.map(c => '<option value="'+c.id+'"'+(u.coachCourt===c.id?' selected':'')+'>'+c.name+'</option>').join('')+
            '</select>'+
          '</div>'
        : '')+
      (u.role === 'community'
        ? '<div class="form-field" style="margin-top:20px">'+
            '<label class="form-label" style="color:rgba(255,255,255,.5)">Leads community</label>'+
            '<select class="form-input" id="au-comm" style="background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.1);color:#fff">'+
              '<option value="">— None —</option>'+
              DB.communities.map(c => '<option value="'+c.id+'"'+(u.communityId===c.id?' selected':'')+'>'+c.name+'</option>').join('')+
            '</select>'+
          '</div>'
        : '')+
      '<div style="font-size:11px;font-weight:800;letter-spacing:.1em;color:rgba(255,255,255,.5);margin:24px 0 12px">STATUS FLAGS</div>'+
      '<div class="toggle-row" style="background:rgba(255,255,255,.05);border-color:rgba(255,255,255,.1)">'+
        '<div><div class="toggle-row__t" style="color:#fff">Verified profile</div><div class="toggle-row__s" style="color:rgba(255,255,255,.5)">Shows the verified badge</div></div>'+
        '<div class="toggle '+(u.verified?'is-on':'')+'" data-act="admintoggle" data-id="'+u.id+'" data-f="verified"></div>'+
      '</div>'+
      '<div class="toggle-row" style="background:rgba(255,255,255,.05);border-color:rgba(255,255,255,.1)">'+
        '<div><div class="toggle-row__t" style="color:#fff">Approved vendor</div><div class="toggle-row__s" style="color:rgba(255,255,255,.5)">Can list items in the shop</div></div>'+
        '<div class="toggle '+(isVendor?'is-on':'')+'" data-act="admintoggle" data-id="'+u.id+'" data-f="vendor"></div>'+
      '</div>'+
      '<div class="toggle-row" style="background:rgba(255,255,255,.05);border-color:rgba(255,255,255,.1)">'+
        '<div><div class="toggle-row__t" style="color:#fff">National team</div><div class="toggle-row__s" style="color:rgba(255,255,255,.5)">Adds to national ranking</div></div>'+
        '<div class="toggle '+(u.isNational?'is-on':'')+'" data-act="admintoggle" data-id="'+u.id+'" data-f="national"></div>'+
      '</div>'+
      '<button class="abtn abtn--ok" style="width:100%;padding:16px;margin-top:24px" data-act="adminusersave" data-id="'+u.id+'">Save Changes</button>'+
      (u.id !== 'me' ? '<button class="abtn abtn--no" style="width:100%;padding:16px;margin-top:10px" data-act="admindelete" data-id="'+u.id+'">Delete User</button>' : '')+
    '</div>'+
  '</div>';
}

/* ============================================================
   SECTION 42 — SCREEN REGISTRY
   ============================================================ */
const SCREENS = {
  entry:         screenEntry,
  onboarding:    screenOnboarding,
  discover:      screenDiscover,
  tournaments:   screenTournaments,
  tourney:       screenTourney,
  rankings:      screenRankings,
  courts:        screenCourts,
  court:         screenCourt,
  profile:       screenProfile,
  profileform:   screenProfileForm,
  idcard:        screenIdCard,
  postcomposer:  screenPostComposer,
  postdetail:    screenPostDetail,
  chats:         screenChats,
  chatview:      screenChatView,
  feed:          screenFeed,
  badges:        screenBadges,
  ai:            screenAI,
  wallet:        screenWallet,
  safety:        screenSafety,
  notifprefs:    screenNotifPrefs,
  more:          screenMore,
  lostfound:     screenLostFound,
  shop:          screenShop,
  shopitem:      screenShopItem,
  coach:         screenCoach,
  club:          screenClub,
  vendorapply:   screenVendorApply,
  coachapply:    screenCoachApply,
  submitcourt:   screenSubmitCourt,
  hosttourney:   screenHostTourney,
  coachdash:     screenCoachDashboard,
  commdash:      screenCommunityDashboard,
  admin:         screenAdmin,
  admindetail:   screenAdminDetail,
  adminuser:     screenAdminUser
};

/* ============================================================
   SECTION 43 — HEADER + TABS
   ============================================================ */
function headerHTML(scr){
  if (!SESSION.mode) return '';

  if (scr.screen === 'discover' && !nav.stack.length){
    return '<div class="hdr hdr--overlay">'+
      '<div class="brand"><span class="brand__mark">◆</span>RUBIX TENNIS</div>'+
      '<div class="hdr__spacer"></div>'+
      '<button class="icon-btn" data-act="tab" data-tab="profile">'+avatarHTML(getMe(), 'av--xs')+'</button>'+
    '</div>';
  }

  if (nav.stack.length){
    const isAdmin = scr.screen === 'admin' || scr.screen === 'admindetail' || scr.screen === 'adminuser';
    const isChat = scr.screen === 'chatview';
    const isComposer = scr.screen === 'postcomposer';
    if (isComposer) return '';
    return '<div class="hdr hdr--solid" style="'+(isAdmin?'background:#0B1220;color:#fff;border-bottom:1px solid rgba(255,255,255,.06)':'')+'">'+
      '<button class="icon-btn" style="'+(isAdmin?'background:rgba(255,255,255,.08);color:#fff':'')+'" data-act="back">'+ico('back')+'</button>'+
      '<div class="hdr__title" style="font-size:19px">'+(scr.title || '')+'</div>'+
      '<div class="hdr__spacer"></div>'+
      (isChat ? '<button class="icon-btn" data-act="toast" data-msg="More options (demo)">'+ico('settings')+'</button>' : '')+
    '</div>';
  }

  const titles = {
    tournaments:'Tournaments',
    rankings:'Rankings',
    courts:'Book a Court',
    profile:'My Profile',
    more:'More'
  };
  const right = {
    tournaments:'<button class="icon-btn" data-act="hosttourney">'+ico('plus')+'</button>',
    rankings:'<button class="icon-btn" data-act="toast" data-msg="Filters applied">'+ico('filter')+'</button>',
    courts:'<button class="icon-btn" data-act="toast" data-msg="Map view (demo)">'+ico('pin')+'</button>',
    profile:'<button class="icon-btn" data-act="idcard">'+ico('shield')+'</button>',
    more:'<button class="icon-btn" data-act="toast" data-msg="No ads. Ever.">'+ico('star')+'</button>'
  }[scr.screen] || '';

  if (!titles[scr.screen]) return '';

  return '<div class="hdr hdr--solid">'+
    '<div class="hdr__title">'+titles[scr.screen]+'</div>'+
    '<div class="hdr__spacer"></div>'+right+
  '</div>';
}

function tabsHTML(){
  const unread = Chat.unreadCount();
  return TABS.filter(t => VISIBLE_TABS.includes(t.id)).map(t => {
    const on = nav.tab === t.id ? ' is-active' : '';
    return '<button class="tab'+on+'" data-act="tab" data-tab="'+t.id+'">'+
      '<span class="tab__ico">'+ico(t.icon)+'</span>'+
      '<span>'+t.label+'</span>'+
    '</button>';
  }).join('');
}

/* ============================================================
   SECTION 44 — RENDER
   ============================================================ */
function render(){
  /* ---- GATE ---- */
  if (!SESSION.mode){
    hdrEl.innerHTML = '';
    mainEl.className = 'main';
    mainEl.style.background = '#0A1220';
    const top = nav.stack.length ? nav.stack[nav.stack.length - 1] : null;
    if (top && top.screen === 'adminlogin'){
      mainEl.innerHTML = screenAdminLogin();
    } else {
      mainEl.innerHTML = screenEntry();
    }
    tabsEl.innerHTML = '';
    tabsEl.style.display = 'none';
    return;
  }

  /* ---- ADMIN MODE ---- */
  if (SESSION.mode === 'admin'){
    if (!SESSION.adminId){
      hdrEl.innerHTML = '';
      mainEl.className = 'main';
      mainEl.style.background = '#0A1220';
      mainEl.innerHTML = screenAdminLogin();
      tabsEl.innerHTML = '';
      tabsEl.style.display = 'none';
      return;
    }
    const scr = nav.stack.length ? nav.stack[nav.stack.length - 1] : { screen:'admin' };
    hdrEl.innerHTML = '';
    mainEl.className = 'main';
    mainEl.style.background = '#0B1220';
    mainEl.innerHTML = (SCREENS[scr.screen] || (() => '<div class="empty">Coming soon.</div>'))(scr.params);
    tabsEl.innerHTML = '';
    tabsEl.style.display = 'none';
    return;
  }

  /* ---- PLAYER MODE ---- */
  const scr = nav.stack.length ? nav.stack[nav.stack.length - 1] : { screen: nav.tab };
  hdrEl.innerHTML = headerHTML(scr);
  mainEl.className = 'main' +
    ((scr.screen === 'discover' && !nav.stack.length) || scr.screen === 'chatview' || scr.screen === 'postcomposer' ? ' main--map' : '');
  mainEl.style.background = '';
  mainEl.innerHTML = (SCREENS[scr.screen] || (() => '<div class="empty">Coming soon.</div>'))(scr.params);
  tabsEl.innerHTML = tabsHTML();
  tabsEl.style.display = nav.stack.length ? 'none' : 'flex';

  if (scr.screen === 'discover' && !nav.stack.length) maybeProximity();

  if (scr.screen === 'chatview'){
    const sc = document.getElementById('chatScroll');
    if (sc) sc.scrollTop = sc.scrollHeight;
  }

  /* Re-attach file pickers after every render */
  attachImagePicker('avatar-file', dataUrl => {
    /* If we're mid-onboarding, save to draft; otherwise to me */
    if (nav.stack.length && nav.stack[nav.stack.length-1].screen === 'onboarding'){
      state.onboardDraft.avatarDataUrl = dataUrl;
    } else {
      getMe().avatarDataUrl = dataUrl;
    }
    render();
    toast('Photo updated ✓');
  });
  attachImagePicker('cover-file', dataUrl => {
    getMe().coverDataUrl = dataUrl;
    render();
    toast('Cover updated ✓');
  });
  attachImagePicker('post-image-file', dataUrl => {
    state.postDraft = state.postDraft || {};
    state.postDraft.imageDataUrl = dataUrl;
    state.postDraft.imageUrl = null;
    render();
  });
}

/* ============================================================
   SECTION 45 — EVENT BUS
   ============================================================ */
document.addEventListener('click', e => {
  const el = e.target.closest('[data-act]');
  if (!el) return;
  const act = el.dataset.act;
  const me = getMe();

  switch (act){

    /* ---------- GATE ---------- */
    case 'enterplayer': {
      SESSION.mode = 'player';
      state.onboardRole = 'player';
      state.onboardStep = 1;
      state.onboardDraft = blankDraft();
      nav.tab = 'discover';
      nav.stack = [{ screen:'onboarding', params:{}, title:'' }];
      proximityShown = false;
      render();
      break;
    }

    case 'enteradmin':
      nav.stack = [{ screen:'adminlogin', params:{}, title:'Admin Sign-in' }];
      render();
      break;

    case 'exitgate':
      SESSION.mode = null;
      SESSION.adminId = null;
      nav.stack = []; nav.tab = 'discover';
      state.onboardDraft = null;
      state.onboardStep = 1;
      state.onboardRole = null;
      proximityShown = false;
      render();
      break;

    case 'returnadmin':
      SESSION.mode = 'admin';
      nav.stack = [];
      render();
      break;

    case 'adminauth': {
      const emailEl = document.getElementById('adminEmail');
      const pinEl = document.getElementById('adminPin');
      const email = (emailEl && emailEl.value || '').trim().toLowerCase();
      const pin = (pinEl && pinEl.value || '').trim();
      state.gateAdminEmail = email;
      state.gateAdminPin = pin;
      const a = ADMINS.find(x => x.email.toLowerCase() === email && x.pin === pin);
      if (a){
        a.lastLogin = new Date().toISOString();
        /* Is this admin already onboarded? */
        if (!a.profileComplete || a.profileComplete === false){
          SESSION.adminId = a.id;
          SESSION.mode = 'admin';
          state.onboardRole = 'admin';
          state.onboardStep = 1;
          state.onboardDraft = blankDraft();
          state.onboardDraft.name = a.name === 'Administrator' ? '' : a.name;
          state.onboardDraft.adminEmail = a.email;
          state.onboardDraft.adminPin = '';
          nav.stack = [{ screen:'onboarding', params:{}, title:'' }];
          render();
          toast('Welcome — set up your admin profile');
        } else {
          SESSION.mode = 'admin';
          SESSION.adminId = a.id;
          nav.stack = [];
          state.adminTab = 'overview';
          render();
          toast('Welcome back, ' + a.name + ' ✓');
        }
      } else {
        toast('Invalid email or passcode');
      }
      break;
    }

    /* ---------- NAVIGATION ---------- */
    case 'tab': setTab(el.dataset.tab); break;
    case 'back': {
      const top = nav.stack[nav.stack.length-1];
      if (top && top.screen === 'onboarding'){
        /* Cancelling onboarding returns to gate */
        SESSION.mode = null;
        SESSION.adminId = null;
        nav.stack = [];
        state.onboardDraft = null;
        state.onboardStep = 1;
        state.onboardRole = null;
        render();
        break;
      }
      back();
      break;
    }
    case 'close-layer': closeLayer(); break;

    /* ---------- DISCOVER ---------- */
    case 'dfilter': state.discoverFilter = el.dataset.v; render(); break;
    case 'ranklist': state.rankList = el.dataset.v; render(); break;
    case 'region': state.rankRegion = el.dataset.v; render(); break;
    case 'level': state.rankLevel = el.dataset.v; render(); break;
    case 'lffilter': state.lfFilter = el.dataset.v; render(); break;
    case 'tourneyfilter': state.tourneyFilter = el.dataset.v; render(); break;
    case 'reportfilter': state.adminReportFilter = el.dataset.v; render(); break;
    case 'feed-tab': state.feedTab = el.dataset.v; render(); break;

    /* ---------- OPEN ENTITIES ---------- */
    case 'player': {
      const id = el.dataset.id;
      if (!id) return;
      const u = userById(id);
      if (!u) return;
      if (id === 'me'){ nav.stack = []; nav.tab = 'profile'; render(); return; }
      go('profile', { id }, u.name.split(' ')[0] + "'s Profile");
      break;
    }
    case 'court': {
      const c = courtById(el.dataset.id);
      if (!c) return;
      state.booking = { date:'Today', time:null };
      go('court', { id:c.id }, c.name);
      break;
    }
    case 'club': {
      const k = commById(el.dataset.id);
      if (!k) return;
      go('club', { id:k.id }, 'Community');
      break;
    }
    case 'coach':
      go('coach', { id:el.dataset.id, court:el.dataset.court }, 'Coach Profile');
      break;
    case 'shopitem':
      go('shopitem', { id:el.dataset.id }, 'Item Details');
      break;
    case 'tourney':
      go('tourney', { id:el.dataset.id }, 'Tournament');
      break;

    /* ---------- SHORTCUTS ---------- */
    case 'lostfound':   go('lostfound', {}, 'Lost & Found'); break;
    case 'shop':        go('shop', {}, 'RUBIX Shop'); break;
    case 'idcard':      go('idcard', {}, 'My RUBIX ID'); break;
    case 'editprofile': go('profileform', {}, 'Edit Profile'); break;
    case 'vendorapply': go('vendorapply', {}, 'Become a Vendor'); break;
    case 'coachapply':  go('coachapply', {}, 'Apply as Coach'); break;
    case 'submitcourt': go('submitcourt', {}, 'Submit a Court'); break;
    case 'coachdash':   go('coachdash', {}, 'Coach Dashboard'); break;
    case 'commdash':    go('commdash', {}, 'Community Dashboard'); break;
    case 'hosttourney': go('hosttourney', {}, 'Host Tournament'); break;
    case 'wallet':      go('wallet', {}, 'RUBIX Wallet'); break;
    case 'chats':       go('chats', {}, 'Chats'); break;
    case 'ai':          go('ai', {}, 'AI Match Recommendations'); break;
    case 'feed':        go('feed', {}, 'RUBIX Feed'); break;
    case 'badges':      go('badges', {}, 'Badges & Streaks'); break;
    case 'safety':      go('safety', {}, 'Trust & Safety'); break;
    case 'notifprefs':  go('notifprefs', {}, 'Notifications'); break;

    /* ---------- ONBOARDING ---------- */
    case 'pick-avatar':
      document.getElementById('avatar-file').click();
      break;
    case 'pick-cover':
      document.getElementById('cover-file').click();
      break;
    case 'pick-post-image':
      document.getElementById('post-image-file').click();
      break;

    case 'onboard-next': {
      const step = state.onboardStep;
      const d = state.onboardDraft;
      const isAdmin = state.onboardRole === 'admin';
      if (step === 1 && !d.name.trim()){ toast('Enter your name first'); break; }
      if (!isAdmin && step === 3 && !d.city.trim()){ toast('Enter your city first'); break; }
      const maxSteps = isAdmin ? 2 : 4;
      state.onboardStep = Math.min(maxSteps, step + 1);
      render();
      mainEl.scrollTop = 0;
      break;
    }
    case 'onboard-back':
      state.onboardStep = Math.max(1, state.onboardStep - 1);
      render();
      mainEl.scrollTop = 0;
      break;

    case 'onboard-skip-photo':
      state.onboardDraft.avatarDataUrl = null;
      render();
      toast('You can add a photo later');
      break;

    case 'onboard-field': {
      const f = el.dataset.f;
      const v = el.dataset.v;
      state.onboardDraft[f] = v;
      render();
      break;
    }
    case 'onboard-toggle': {
      const f = el.dataset.f;
      const v = el.dataset.v;
      const arr = state.onboardDraft[f];
      const i = arr.indexOf(v);
      if (i > -1) arr.splice(i, 1); else arr.push(v);
      render();
      break;
    }

    case 'onboard-finish': {
      const d = state.onboardDraft;
      const isAdmin = state.onboardRole === 'admin';

      if (isAdmin){
        /* ADMIN FLOW */
        if (!d.adminEmail || d.adminEmail.indexOf('@') < 0 || d.adminPin.length < 4){
          toast('Enter a valid admin email and 4-6 digit passcode');
          break;
        }
        const admin = adminById(SESSION.adminId);
        if (admin){
          admin.name = d.name.trim() || 'Admin';
          admin.initials = admin.name.split(' ').map(w => w[0]).slice(0,2).join('').toUpperCase();
          admin.email = d.adminEmail.trim().toLowerCase();
          admin.pin = d.adminPin.trim();
          admin.profileComplete = true;
          if (d.avatarDataUrl){
            /* store avatar on the admin object (adds a new property) */
            admin.avatarDataUrl = d.avatarDataUrl;
          }
        }
        state.onboardDraft = null;
        state.onboardStep = 1;
        state.onboardRole = null;
        nav.stack = [];
        state.adminTab = 'overview';
        render();
        toast('Admin account ready ✓');
        break;
      }

      /* PLAYER FLOW */
      me.name = d.name.trim() || 'New Player';
      me.initials = me.name.split(' ').map(w => w[0]).slice(0,2).join('').toUpperCase();
      me.level = d.level;
      me.hand = d.hand;
      me.surface = d.surface;
      me.city = d.city || 'Accra';
      me.region = d.region || 'Greater Accra';
      me.bio = d.bio || '';
      me.playstyle = d.playstyle.slice();
      me.interests = d.interests.slice();
      me.status = d.status;
      me.avail = d.avail;
      me.avatarDataUrl = d.avatarDataUrl;
      me.profileComplete = true;
      state.onboardDraft = null;
      state.onboardStep = 1;
      state.onboardRole = null;
      nav.stack = [];
      nav.tab = 'profile';
      render();
      toast('Welcome to RUBIX, ' + me.name.split(' ')[0] + ' 🎾');
      break;
    }

    /* ---------- PROFILE / POSTS ---------- */
    case 'compose-post':
      state.postDraft = null;
      go('postcomposer', {}, 'New Post');
      break;

    case 'save-profile': {
      const d = state.profileDraft;
      if (!d) return;
      me.name = d.name.trim() || me.name;
      me.initials = me.name.split(' ').map(w => w[0]).slice(0,2).join('').toUpperCase();
      me.bio = d.bio;
      me.city = d.city;
      me.region = d.region;
      me.level = d.level;
      me.hand = d.hand;
      me.surface = d.surface;
      me.playstyle = d.playstyle.slice();
      me.interests = d.interests.slice();
      me.status = d.status;
      me.avail = d.avail;
      state.profileDraft = null;
      toast('Profile saved ✓');
      setTimeout(() => { back(); }, 400);
      break;
    }

    case 'shuffle-avatar':
      me.avatarDataUrl = null;
      me.photo = (Math.random()*100000)|0;
      render();
      toast('Placeholder refreshed');
      break;

    case 'remove-avatar':
      me.avatarDataUrl = null;
      render();
      toast('Photo removed');
      break;

    case 'delete-account':
      toast('Account deletion is disabled in this demo');
      break;

    case 'profile-field': {
      const f = el.dataset.f;
      const v = el.dataset.v;
      if (!state.profileDraft) state.profileDraft = {};
      state.profileDraft[f] = v;
      if (f === 'status' && el.dataset.avail) state.profileDraft.avail = el.dataset.avail;
      render();
      break;
    }

    case 'profile-toggle': {
      const f = el.dataset.f;
      const v = el.dataset.v;
      if (!state.profileDraft) state.profileDraft = {};
      const arr = state.profileDraft[f] || [];
      const i = arr.indexOf(v);
      if (i > -1) arr.splice(i, 1); else arr.push(v);
      state.profileDraft[f] = arr;
      render();
      break;
    }

    case 'post-submit': {
      const d = state.postDraft;
      if (!d) break;
      const hasText = d.text && d.text.trim().length > 0;
      const hasImage = !!(d.imageDataUrl || d.imageUrl);
      if (!hasText && !hasImage){ toast('Add text or a photo'); break; }

      if (d._for){
        const p = DB.posts.find(x => x.id === d._for);
        if (p){
          p.text = d.text;
          if (d.imageDataUrl){ p.imageDataUrl = d.imageDataUrl; p.imageUrl = null; }
          else if (!d.imageUrl){ p.imageDataUrl = null; p.imageUrl = null; }
          p.editedAt = now();
          p.isEdited = true;
        }
        toast('Post updated ✓');
      } else {
        const newPost = {
          id: uid('p'),
          authorId: 'me',
          text: d.text || '',
          imageUrl: d.imageUrl || null,
          imageDataUrl: d.imageDataUrl || null,
          likes: [],
          comments: [],
          createdAt: now(),
          editedAt: null,
          isEdited: false,
          visibility: 'public'
        };
        DB.posts.unshift(newPost);
        me.posts = DB.posts.filter(p => p.authorId === 'me');
        toast('Posted ✓');
      }
      state.postDraft = null;
      setTimeout(() => { nav.stack = []; nav.tab = 'profile'; render(); }, 400);
      break;
    }

    case 'remove-post-image':
      if (state.postDraft){
        state.postDraft.imageDataUrl = null;
        state.postDraft.imageUrl = null;
        render();
      }
      break;

    case 'post-like': {
      const p = DB.posts.find(x => x.id === el.dataset.id);
      if (!p) break;
      const i = p.likes.indexOf('me');
      if (i > -1) p.likes.splice(i, 1);
      else p.likes.push('me');
      render();
      break;
    }

    case 'post-open': {
      const id = el.dataset.id;
      if (!id) return;
      go('postdetail', { postId: id }, 'Post');
      break;
    }

    case 'post-share':
      toast('Link copied to clipboard ✓');
      break;

    case 'post-menu': {
      const p = DB.posts.find(x => x.id === el.dataset.id);
      if (!p) break;
      const isMine = p.authorId === 'me';
      layerEl.innerHTML =
        '<div class="scrim" data-act="close-layer"></div>'+
        '<div class="action-sheet">'+
          (isMine
            ? '<button class="action-sheet__item" data-act="post-edit" data-id="'+p.id+'">'+ico('edit')+' Edit post</button>'+
              '<button class="action-sheet__item" data-act="post-delete" data-id="'+p.id+'">'+ico('trash')+' Delete post</button>'+
              '<div class="action-sheet__sep"></div>'
            : '')+
          '<button class="action-sheet__item" data-act="post-share" data-id="'+p.id+'">'+ico('share')+' Copy link</button>'+
          '<button class="action-sheet__item action-sheet__item--danger" data-act="toast" data-msg="Report submitted to moderation">'+ico('flag')+' Report</button>'+
          '<button class="action-sheet__item" data-act="close-layer">'+ico('close')+' Cancel</button>'+
        '</div>';
      break;
    }

    case 'post-edit':
      state.postDraft = null;
      go('postcomposer', { postId: el.dataset.id }, 'Edit Post');
      break;

    case 'post-delete': {
      const p = DB.posts.find(x => x.id === el.dataset.id);
      if (!p) break;
      layerEl.innerHTML =
        '<div class="scrim" data-act="close-layer"></div>'+
        '<div class="popup">'+
          '<div class="popup__pill" style="background:var(--red);color:#fff">DELETE POST</div>'+
          '<h3>Delete this post?</h3>'+
          '<p>This can\'t be undone. Your likes and comments will also be removed.</p>'+
          '<div class="popup__btns">'+
            '<button class="btn btn--ghost" data-act="close-layer">Cancel</button>'+
            '<button class="btn btn--danger" data-act="post-delete-confirm" data-id="'+p.id+'">Delete</button>'+
          '</div>'+
        '</div>';
      break;
    }

    case 'post-delete-confirm': {
      const id = el.dataset.id;
      DB.posts = DB.posts.filter(x => x.id !== id);
      me.posts = DB.posts.filter(x => x.authorId === 'me');
      closeLayer();
      toast('Post deleted');
      const top = nav.stack[nav.stack.length - 1];
      if (top && top.screen === 'postdetail'){ nav.stack.pop(); }
      render();
      break;
    }

    case 'post-image-view': {
      const p = DB.posts.find(x => x.id === el.dataset.id);
      if (!p) break;
      const src = p.imageDataUrl || p.imageUrl;
      if (!src) break;
      layerEl.innerHTML =
        '<div class="lightbox" data-act="close-lightbox">'+
          '<div class="lightbox__close" data-act="close-lightbox">'+ico('close')+'</div>'+
          '<img src="'+src+'" alt="">'+
        '</div>';
      break;
    }
    case 'close-lightbox':
      closeLayer();
      break;

    case 'post-comment-send': {
      const id = el.dataset.id;
      const p = DB.posts.find(x => x.id === id);
      if (!p) break;
      const text = (state.commentDraft || '').trim();
      if (!text) break;
      p.comments = p.comments || [];
      p.comments.push({ id: uid('cm'), fromId: 'me', text, ts: now() });
      state.commentDraft = '';
      render();
      break;
    }

    /* ---------- PAYWALL-GATED ---------- */
    case 'request': {
      e.stopPropagation();
      const u = userById(el.dataset.id);
      if (!u) return;
      if (state.requestsSent[u.id]){ toast('Already sent'); break; }
      paywallPopup({
        title: 'Send request to ' + u.name.split(' ')[0],
        body: 'One-time fee to send a play request directly. They\'ll see your profile and can accept or decline.',
        price: PRICES.requestPlayer,
        platformFee: PRICES.requestPlayer,
        cta: 'Send Request · $' + PRICES.requestPlayer,
        onConfirm: () => {
          const res = charge('me', {
            kind:'request', amount: PRICES.requestPlayer,
            note:'Play request to ' + u.name, sourceId: null,
            platformFee: PRICES.requestPlayer
          });
          if (res.ok){
            state.requestsSent[u.id] = true;
            Chat.ensureThread(u.id);
            closeLayer();
            toast('Request sent to ' + u.name.split(' ')[0] + ' ✓');
            render();
          } else toast('Insufficient balance');
        }
      });
      break;
    }

    case 'unlockchat': {
      const u = userById(el.dataset.id);
      if (!u) return;
      const thread = Chat.ensureThread(u.id);
      if (thread.unlocked){ go('chatview', { id:u.id }, u.name); break; }
      paywallPopup({
        title: 'Unlock chat with ' + u.name.split(' ')[0],
        body: 'One-time payment to open a chat thread. No subscription.',
        price: PRICES.chatUnlock,
        platformFee: PRICES.chatUnlock,
        cta: 'Unlock · $' + PRICES.chatUnlock,
        onConfirm: () => {
          const res = charge('me', {
            kind:'chat-unlock', amount: PRICES.chatUnlock,
            note:'Chat with ' + u.name, sourceId: null,
            platformFee: PRICES.chatUnlock
          });
          if (res.ok){
            thread.unlocked = true;
            closeLayer();
            toast('Chat unlocked ✓');
            go('chatview', { id:u.id }, u.name);
          } else toast('Insufficient balance');
        }
      });
      break;
    }

    case 'openthread': {
      const u = userById(el.dataset.id);
      if (!u) return;
      const thread = Chat.ensureThread(u.id);
      if (!thread.unlocked){ toast('Unlock this chat first'); break; }
      go('chatview', { id:u.id }, u.name);
      break;
    }

    case 'chatsend': {
      const u = userById(el.dataset.id);
      if (!u) return;
      const inp = document.getElementById('chatInput');
      const text = inp && inp.value.trim();
      if (!text) return;
      const thread = Chat.threadWith(u.id);
      if (!thread) return;
      Chat.send(thread.id, 'me', text);
      render();
      break;
    }

    /* ---------- JOIN COMMUNITY ---------- */
    case 'joinclub': {
      e.stopPropagation();
      const k = commById(el.dataset.id);
      if (!k) return;
      if (k.monthlyFee && k.monthlyFee > 0){
        paywallPopup({
          title: 'Join ' + k.name,
          body: 'First month of membership. Renews monthly. ' + PRICES.communityPct + '% platform fee applies.',
          price: k.monthlyFee,
          platformFee: communityFee(k.monthlyFee),
          cta: 'Join · ' + money(k.monthlyFee),
          onConfirm: () => {
            const res = charge('me', {
              kind:'community-join', amount: k.monthlyFee,
              note:'Joined ' + k.name, sourceId: k.createdBy,
              platformFee: communityFee(k.monthlyFee)
            });
            if (res.ok){
              closeLayer();
              toast('Joined ' + k.name + ' ✓');
              render();
            } else toast('Insufficient balance');
          }
        });
      } else {
        me.communityId = k.id;
        toast('Joined ' + k.name + ' ✓');
        el.textContent = 'Joined';
        el.classList.add('is-sent');
        el.disabled = true;
      }
      break;
    }

    /* ---------- BOOKING ---------- */
    case 'date':
      state.booking.date = el.dataset.v;
      render();
      break;
    case 'slot':
      state.booking.time = (state.booking.time === el.dataset.v) ? null : el.dataset.v;
      render();
      break;
    case 'book': {
      const c = courtById(el.dataset.id);
      if (!c || !state.booking.time) return;
      const fee = courtFee(c.price);
      const total = c.price + fee;
      paywallPopup({
        title: 'Confirm court booking',
        body: c.name + ' · ' + state.booking.date + ' at ' + state.booking.time + '. ' + PRICES.courtPct + '% platform fee applies.',
        price: total,
        platformFee: fee,
        cta: 'Pay ' + money(total),
        onConfirm: () => {
          const res = charge('me', {
            kind:'court-booking', amount: total,
            note: c.name + ' · ' + state.booking.time,
            sourceId: null, platformFee: fee
          });
          if (res.ok){
            if (!c.bookings) c.bookings = [];
            c.bookings.push({
              id: uid('b'), userId:'me', time: state.booking.time,
              duration:'90 min', status:'upcoming', date: state.booking.date
            });
            closeLayer();
            toast('Booked · ' + c.name + ' ✓');
            state.booking.time = null;
            setTimeout(render, 400);
          } else toast('Insufficient balance');
        }
      });
      break;
    }

    /* ---------- COACH BOOKING ---------- */
    case 'coachbook': {
      const c = courtById(el.dataset.court);
      const co = c && c.coaches.find(x => x.id === el.dataset.coach);
      if (!c || !co) return;
      const fee = coachFee(co.rate);
      const time = el.dataset.time || 'next available slot';
      paywallPopup({
        title: 'Book ' + co.name,
        body: 'Lesson at ' + c.name + ' · ' + time + '. Coach receives ' + (100 - PRICES.coachPct) + '%; ' + PRICES.coachPct + '% platform fee.',
        price: co.rate,
        platformFee: fee,
        cta: 'Book · $' + co.rate,
        onConfirm: () => {
          const res = charge('me', {
            kind:'coach-session', amount: co.rate,
            note: co.name + ' · ' + time, sourceId: co.userId,
            platformFee: fee
          });
          if (res.ok){
            closeLayer();
            toast('Lesson booked with ' + co.name + ' ✓');
          } else toast('Insufficient balance');
        }
      });
      break;
    }

    /* ---------- SHOP PURCHASE ---------- */
    case 'shopbuy': {
      const it = shopById(el.dataset.id);
      if (!it) return;
      const fee = shopFee(it.price);
      const seller = userById(it.sellerId);
      paywallPopup({
        title: 'Buy ' + it.title,
        body: 'Seller: ' + (seller ? seller.name : 'Unknown') + '. ' + PRICES.shopPct + '% platform fee · ' + (100 - PRICES.shopPct) + '% goes to seller.',
        price: it.price,
        platformFee: fee,
        cta: 'Pay ' + money(it.price),
        onConfirm: () => {
          const res = charge('me', {
            kind:'shop-sale', amount: it.price,
            note:'Bought ' + it.title, sourceId: it.sellerId,
            platformFee: fee
          });
          if (res.ok){
            closeLayer();
            toast('Purchase complete ✓');
            DB.shop = DB.shop.filter(x => x.id !== it.id);
            render();
          } else toast('Insufficient balance');
        }
      });
      break;
    }

    /* ---------- TOURNAMENTS ---------- */
    case 'tourneyjoin': {
      const t = tourneyById(el.dataset.id);
      if (!t) return;
      if (t.status === 'draft'){ toast('Tournament not yet open'); break; }
      if (Tournaments.isRegistered(t, 'me')){ toast('Already registered'); break; }
      if (t.teams.length >= t.maxTeams){ toast('Tournament full'); break; }
      const fee = tourneyFee(t.entry);
      paywallPopup({
        title: 'Join ' + t.name,
        body: 'Entry fee $' + t.entry + ' + $' + fee + ' platform fee. Prize pool: $' + t.prize + '.',
        price: t.entry,
        platformFee: fee,
        cta: 'Join · $' + t.entry,
        onConfirm: () => {
          const res = charge('me', {
            kind:'tournament-entry', amount: t.entry,
            note:'Entry: ' + t.name, sourceId: t.hostId,
            platformFee: fee
          });
          if (res.ok){
            t.teams.push({
              id: uid('tt'), name: me.name + ' / TBD',
              members: ['me'], joined: now()
            });
            if (t.teams.length >= 2 && !t.bracket){
              Tournaments.buildBracket(t);
            }
            closeLayer();
            toast('Registered for ' + t.name + ' ✓');
            render();
          } else toast('Insufficient balance');
        }
      });
      break;
    }

    case 'tourneyreport': {
      const t = tourneyById(el.dataset.t);
      if (!t) return;
      layerEl.innerHTML =
        '<div class="scrim" data-act="close-layer"></div>'+
        '<div class="popup">'+
          '<div class="popup__pill">SUBMIT SCORE</div>'+
          '<h3>Log match result</h3>'+
          '<p>Enter the final score. The opposing team will be notified to confirm.</p>'+
          '<div style="display:grid;grid-template-columns:1fr auto 1fr;gap:10px;align-items:center;margin-top:16px">'+
            '<input class="form-input" id="ms-a" type="number" min="0" max="7" placeholder="0" style="text-align:center;font-size:22px;font-weight:900">'+
            '<div style="font-size:11px;font-weight:900;color:var(--muted);letter-spacing:.1em">VS</div>'+
            '<input class="form-input" id="ms-b" type="number" min="0" max="7" placeholder="0" style="text-align:center;font-size:22px;font-weight:900">'+
          '</div>'+
          '<div class="popup__btns">'+
            '<button class="btn btn--ghost" data-act="close-layer">Cancel</button>'+
            '<button class="btn btn--primary" data-act="tourneyreportsave" data-t="'+t.id+'" data-m="'+el.dataset.m+'">Submit</button>'+
          '</div>'+
        '</div>';
      break;
    }
    case 'tourneyreportsave': {
      const t = tourneyById(el.dataset.t);
      if (!t) return;
      const a = parseInt((document.getElementById('ms-a')||{}).value) || 0;
      const b = parseInt((document.getElementById('ms-b')||{}).value) || 0;
      if (t.bracket){
        Tournaments.recordResult(t, t.bracket.currentRound, el.dataset.m, a, b, 'me');
      }
      closeLayer();
      toast('Score submitted · awaiting confirmation');
      render();
      break;
    }
    case 'tourneybracket': {
      const t = tourneyById(el.dataset.id);
      if (!t) return;
      go('tourney', { id: t.id }, 'Tournament');
      break;
    }

    /* ---------- COACH DASHBOARD ---------- */
    case 'setcourtstatus': {
      const c = courtById(me.coachCourt);
      if (!c) break;
      const next = el.dataset.v;
      if (c.courtStatus === next) break;
      c.courtStatus = next;
      render();
      toast('Court set to ' + next);
      break;
    }
    case 'bookingaction': {
      const c = courtById(el.dataset.court);
      if (!c) break;
      const b = (c.bookings || []).find(x => x.id === el.dataset.b);
      if (!b) break;
      b.status = el.dataset.s;
      render();
      toast('Booking ' + b.status);
      break;
    }

    /* ---------- LOST & FOUND ---------- */
    case 'lfadd':
      DB.lostFound.unshift({
        id:'l'+Date.now(), type:'lost', title:'Green tennis cap',
        emoji:'🧢', hue:150, place:'Riverside Tennis Club', time:'just now',
        note:'Added from the demo composer.'
      });
      render();
      toast('Post created ✓');
      break;

    /* ---------- APPLICATIONS ---------- */
    case 'vendorfield':
      state.vendorDraft = state.vendorDraft || {};
      state.vendorDraft.category = el.dataset.v;
      render();
      break;

    case 'vendorsubmit': {
      const itemEl = document.getElementById('v-item');
      const priceEl = document.getElementById('v-price');
      const noteEl = document.getElementById('v-note');
      const item = itemEl && itemEl.value.trim();
      const price = priceEl && priceEl.value;
      const note = noteEl && noteEl.value.trim();
      if (!item || !state.vendorDraft || !state.vendorDraft.category){ toast('Please fill in all fields'); break; }
      paywallPopup({
        title: 'Vendor listing fee',
        body: 'One-time fee to submit your listing. ' + PRICES.shopPct + '% of any future sale also applies.',
        price: PRICES.vendorListing,
        platformFee: PRICES.vendorListing,
        cta: 'Pay ' + money(PRICES.vendorListing),
        onConfirm: () => {
          const res = charge('me', {
            kind:'vendor-listing', amount: PRICES.vendorListing,
            note:'Listing: ' + item, sourceId: null,
            platformFee: PRICES.vendorListing
          });
          if (res.ok){
            DB.pending.vendors.push({
              id:'pv'+Date.now(), userId:me.id, itemName:item,
              category: state.vendorDraft.category,
              price: parseInt(price)||0,
              submitted:'just now', note: note || 'No notes.',
              photos:0, weight:'—', shipping:'Pickup only',
              listingFeePaid:true
            });
            me.vendorStatus = 'pending';
            state.vendorDraft = null;
            closeLayer();
            toast('Application submitted ✓');
            setTimeout(() => { nav.stack = []; nav.tab = 'more'; render(); }, 500);
          } else toast('Insufficient balance');
        }
      });
      break;
    }

    case 'coachcourt':
      state.coachCourt = state.coachCourt === el.dataset.id ? null : el.dataset.id;
      render();
      break;
    case 'coachsubmit': {
      const specEl = document.getElementById('co-spec');
      const rateEl = document.getElementById('co-rate');
      const expEl = document.getElementById('co-exp');
      const spec = specEl && specEl.value.trim();
      const rate = parseInt(rateEl && rateEl.value) || 30;
      const exp = (expEl && expEl.value.trim()) || '5 yrs';
      if (!state.coachCourt || !spec){ toast('Please complete all fields'); break; }
      DB.pending.coaches.push({
        id:'pco'+Date.now(), userId:me.id, courtId:state.coachCourt,
        rate, spec, exp, submitted:'just now',
        cert:'—', availability:'Weekdays 5–8pm'
      });
      state.coachCourt = null;
      toast('Coach application submitted ✓');
      setTimeout(() => { nav.stack = []; nav.tab = 'more'; render(); }, 500);
      break;
    }

    case 'courtsurface':
      state.courtSurface = el.dataset.v;
      render();
      break;
    case 'courtsubmit': {
      const nameEl = document.getElementById('nc-name');
      const addrEl = document.getElementById('nc-addr');
      const priceEl = document.getElementById('nc-price');
      const countEl = document.getElementById('nc-count');
      const name = nameEl && nameEl.value.trim();
      const addr = addrEl && addrEl.value.trim();
      const price = parseInt(priceEl && priceEl.value) || 0;
      const count = parseInt(countEl && countEl.value) || 0;
      if (!name || !addr || !state.courtSurface){ toast('Please complete all fields'); break; }
      DB.pending.courts.push({
        id:'pct'+Date.now(), name, address:addr, price,
        surface:state.courtSurface, courtCount:count,
        amenities:['New submission'],
        submittedBy:me.id, submitted:'just now',
        contact:'—', hours:'—', notes:'—'
      });
      state.courtSurface = null;
      toast('Court submitted for review ✓');
      setTimeout(() => { nav.stack = []; nav.tab = 'courts'; render(); }, 500);
      break;
    }

    case 'hostfield':
      state.hostFormat = el.dataset.v;
      render();
      break;
    case 'hosttourneysubmit': {
      const nameEl = document.getElementById('ht-name');
      const courtEl = document.getElementById('ht-court');
      const maxEl = document.getElementById('ht-max');
      const entryEl = document.getElementById('ht-entry');
      const prizeEl = document.getElementById('ht-prize');
      const name = nameEl && nameEl.value.trim();
      const court = courtEl && courtEl.value;
      const max = parseInt(maxEl && maxEl.value) || 8;
      const entry = parseInt(entryEl && entryEl.value) || 5;
      const prize = parseInt(prizeEl && prizeEl.value) || 60;
      if (!name || !state.hostFormat){ toast('Please complete all fields'); break; }
      paywallPopup({
        title: 'Host tournament',
        body: 'Publishing fee for "' + name + '". ' + PRICES.tournamentPct + '% of each entry fee is retained as platform revenue.',
        price: PRICES.tournamentHost,
        platformFee: PRICES.tournamentHost,
        cta: 'Pay ' + money(PRICES.tournamentHost),
        onConfirm: () => {
          const res = charge('me', {
            kind:'tournament-host', amount: PRICES.tournamentHost,
            note:'Hosting: ' + name, sourceId: null,
            platformFee: PRICES.tournamentHost
          });
          if (res.ok){
            const teamSize = state.hostFormat.indexOf('singles') === 0 ? 1 : 2;
            DB.tournaments.push({
              id:'t'+Date.now(), name, hostId:me.id, format: state.hostFormat,
              entry, prize, maxTeams:max, courts:court,
              hue: (Math.random()*360)|0, status:'open',
              created: now(), agreeBy: now() + 7*86400000,
              teamSize, teams:[], bracket:null, completed:false
            });
            state.hostFormat = null;
            closeLayer();
            toast('Tournament created ✓');
            setTimeout(() => { nav.stack = []; nav.tab = 'tournaments'; render(); }, 500);
          } else toast('Insufficient balance');
        }
      });
      break;
    }

    /* ---------- SAFETY ---------- */
    case 'verifyid':
      me.idVerified = true;
      me.verified = true;
      render();
      toast('ID verified ✓');
      break;
    case 'verifyphoto':
      me.photoVerified = true;
      render();
      toast('Photo verified ✓');
      break;
    case 'safetytoggle': {
      const f = el.dataset.f;
      me.safety[f] = !me.safety[f];
      render();
      break;
    }
    case 'emergencycontact': {
      const v = prompt('Emergency contact name + phone:', me.safety.emergencyContact || '');
      if (v != null) me.safety.emergencyContact = v;
      render();
      break;
    }
    case 'unblock':
      me.safety.blocked = me.safety.blocked.filter(id => id !== el.dataset.id);
      render();
      toast('Unblocked');
      break;
    case 'report-abuse':
      toast('Report submitted to moderation ✓');
      break;

    /* ---------- NOTIFICATION PREFS ---------- */
    case 'notiftoggle': {
      const k = el.dataset.k;
      me.notifPrefs[k] = !me.notifPrefs[k];
      render();
      break;
    }

    /* ---------- WALLET ---------- */
    case 'topup':
      topupPopup();
      break;
    case 'topup-pick': {
      state.topupPick = parseInt(el.dataset.v);
      const btns = layerEl.querySelectorAll('[data-act="topup-pick"]');
      btns.forEach(b => b.classList.toggle('is-on', parseInt(b.dataset.v) === state.topupPick));
      const confirm = layerEl.querySelector('[data-act="topup-confirm"]');
      if (confirm){
        confirm.dataset.v = state.topupPick;
        confirm.textContent = 'Add ' + money(state.topupPick);
      }
      break;
    }
    case 'topup-confirm': {
      const amt = parseInt(el.dataset.v || state.topupPick) || 25;
      topup('me', amt);
      closeLayer();
      toast('Added ' + money(amt) + ' to wallet ✓');
      render();
      break;
    }
    case 'paywall-confirm': {
      const opts = layerEl._paywall;
      if (opts && opts.onConfirm) opts.onConfirm();
      break;
    }

    /* ---------- ADMIN ---------- */
    case 'admintab':
      state.adminTab = el.dataset.v;
      render();
      mainEl.scrollTop = 0;
      break;
    case 'admingotoapp':
      state.adminTab = 'approvals';
      state.adminAppTab = el.dataset.v;
      render();
      break;
    case 'adminappdetail':
      go('admindetail', { type:el.dataset.type, id:el.dataset.id },
        { vendor:'Vendor Application', community:'Community Verification',
          coach:'Coach Verification', court:'Court Submission' }[el.dataset.type] || 'Details');
      break;
    case 'adminlogtoggle':
      adminToggleLog(el.dataset.id);
      break;

    case 'approvevendor': {
      const v = DB.pending.vendors.find(x => x.id === el.dataset.id);
      if (!v) break;
      const u = userById(v.userId);
      const prevStatus = u.vendorStatus;
      const newListing = {
        id:'s'+Date.now(), title:v.itemName, price:v.price,
        cond:v.category + ' · Verified', emoji:'🎾', hue:u.hue,
        sellerId:u.id, place:u.city, status:'approved'
      };
      adminDo(
        () => {
          u.vendorStatus = 'approved';
          DB.pending.vendors = DB.pending.vendors.filter(x => x.id !== v.id);
          DB.shop.unshift(newListing);
        },
        () => {
          u.vendorStatus = prevStatus;
          DB.pending.vendors.push(v);
          DB.shop = DB.shop.filter(x => x.id !== newListing.id);
        },
        'Approved vendor: ' + v.itemName
      );
      nav.stack = nav.stack.filter(x => x.screen !== 'admindetail');
      render();
      toast('✓ Approved vendor');
      break;
    }
    case 'rejectvendor': {
      const v = DB.pending.vendors.find(x => x.id === el.dataset.id);
      if (!v) break;
      const u = userById(v.userId);
      const prevStatus = u.vendorStatus;
      adminDo(
        () => {
          u.vendorStatus = 'rejected';
          DB.pending.vendors = DB.pending.vendors.filter(x => x.id !== v.id);
        },
        () => { u.vendorStatus = prevStatus; DB.pending.vendors.push(v); },
        'Rejected vendor: ' + v.itemName
      );
      nav.stack = nav.stack.filter(x => x.screen !== 'admindetail');
      render();
      break;
    }

    case 'approvecomm': {
      const k = DB.pending.communities.find(x => x.id === el.dataset.id);
      if (!k) break;
      const newComm = {
        id:'k'+Date.now(), name:k.name,
        members: parseInt(k.members)||0,
        dist:600, hue:30, desc:k.desc,
        verified:'approved', createdBy:k.creatorId,
        founded:'2025', events:0, pendingMembers:0, monthlyFee:0
      };
      adminDo(
        () => {
          DB.communities.push(newComm);
          DB.pending.communities = DB.pending.communities.filter(x => x.id !== k.id);
        },
        () => {
          DB.communities = DB.communities.filter(x => x.id !== newComm.id);
          DB.pending.communities.push(k);
        },
        'Verified community: ' + k.name
      );
      nav.stack = nav.stack.filter(x => x.screen !== 'admindetail');
      render();
      break;
    }
    case 'rejectcomm': {
      const k = DB.pending.communities.find(x => x.id === el.dataset.id);
      if (!k) break;
      adminDo(
        () => { DB.pending.communities = DB.pending.communities.filter(x => x.id !== k.id); },
        () => { DB.pending.communities.push(k); },
        'Rejected community: ' + k.name
      );
      nav.stack = nav.stack.filter(x => x.screen !== 'admindetail');
      render();
      break;
    }

    case 'approvecoach': {
      const a = DB.pending.coaches.find(x => x.id === el.dataset.id);
      if (!a) break;
      const u = userById(a.userId);
      const c = courtById(a.courtId);
      const prevRole = u.role;
      const prevCourt = u.coachCourt;
      const newCoachEntry = {
        id:'co'+Date.now(), userId:u.id, name:u.name,
        rate:a.rate, spec:a.spec, exp:a.exp, verified:true
      };
      adminDo(
        () => {
          u.role = 'coach';
          u.coachCourt = a.courtId;
          if (c) c.coaches.push(newCoachEntry);
          DB.pending.coaches = DB.pending.coaches.filter(x => x.id !== a.id);
        },
        () => {
          u.role = prevRole;
          u.coachCourt = prevCourt;
          if (c) c.coaches = c.coaches.filter(x => x.id !== newCoachEntry.id);
          DB.pending.coaches.push(a);
        },
        'Verified coach: ' + u.name
      );
      nav.stack = nav.stack.filter(x => x.screen !== 'admindetail');
      render();
      break;
    }
    case 'rejectcoach': {
      const a = DB.pending.coaches.find(x => x.id === el.dataset.id);
      if (!a) break;
      adminDo(
        () => { DB.pending.coaches = DB.pending.coaches.filter(x => x.id !== a.id); },
        () => { DB.pending.coaches.push(a); },
        'Rejected coach application'
      );
      nav.stack = nav.stack.filter(x => x.screen !== 'admindetail');
      render();
      break;
    }

    case 'approvecourt': {
      const ct = DB.pending.courts.find(x => x.id === el.dataset.id);
      if (!ct) break;
      const newCourt = {
        id:'c'+Date.now(), name:ct.name, rating:4.0, price:ct.price,
        dist:800, surface:ct.surface, courtCount:ct.courtCount, hue:200,
        status:'approved', address:ct.address, amenities:ct.amenities,
        coaches:[], playersHere:[], courtStatus:'open', bookings:[]
      };
      adminDo(
        () => {
          DB.courts.push(newCourt);
          DB.pending.courts = DB.pending.courts.filter(x => x.id !== ct.id);
        },
        () => {
          DB.courts = DB.courts.filter(x => x.id !== newCourt.id);
          DB.pending.courts.push(ct);
        },
        'Approved court: ' + ct.name
      );
      nav.stack = nav.stack.filter(x => x.screen !== 'admindetail');
      render();
      break;
    }
    case 'rejectcourt': {
      const ct = DB.pending.courts.find(x => x.id === el.dataset.id);
      if (!ct) break;
      adminDo(
        () => { DB.pending.courts = DB.pending.courts.filter(x => x.id !== ct.id); },
        () => { DB.pending.courts.push(ct); },
        'Rejected court: ' + ct.name
      );
      nav.stack = nav.stack.filter(x => x.screen !== 'admindetail');
      render();
      break;
    }

    case 'addnational': {
      const u = userById(el.dataset.id);
      if (!u) break;
      const prevNat = u.isNational;
      const prevRank = u.rankN;
      const nextRank = DB.users.filter(x => x.isNational).reduce((m,x) => Math.max(m, x.rankN||0), 0) + 1;
      adminDo(
        () => { u.isNational = true; u.rankN = nextRank; recomputeGeneralRanks(); },
        () => { u.isNational = prevNat; u.rankN = prevRank; recomputeGeneralRanks(); },
        'Added to National Team: ' + u.name
      );
      toast('Added to National Team');
      break;
    }
    case 'removenational': {
      const u = userById(el.dataset.id);
      if (!u) break;
      const prevRank = u.rankN;
      adminDo(
        () => { u.isNational = false; u.rankN = null; recomputeGeneralRanks(); },
        () => { u.isNational = true; u.rankN = prevRank; recomputeGeneralRanks(); },
        'Removed from National Team: ' + u.name
      );
      toast('Removed from National Team');
      break;
    }

    case 'ptsplus': {
      const u = userById(el.dataset.id);
      if (!u) break;
      const prev = u.points;
      adminDo(
        () => { u.points += 50; recomputeGeneralRanks(); },
        () => { u.points = prev; recomputeGeneralRanks(); },
        '+50 pts to ' + u.name
      );
      break;
    }
    case 'ptsminus': {
      const u = userById(el.dataset.id);
      if (!u) break;
      const prev = u.points;
      adminDo(
        () => { u.points = Math.max(0, u.points - 50); recomputeGeneralRanks(); },
        () => { u.points = prev; recomputeGeneralRanks(); },
        '−50 pts from ' + u.name
      );
      break;
    }

    case 'adminuseredit':
      go('adminuser', { id:el.dataset.id }, 'Edit User');
      break;

    case 'adminrole': {
      const u = userById(el.dataset.id);
      const r = el.dataset.v;
      if (!u) break;
      const prev = u.role;
      adminDo(
        () => { u.role = r; },
        () => { u.role = prev; },
        'Changed role of ' + u.name + ' → ' + r
      );
      break;
    }

    case 'admintoggle': {
      const u = userById(el.dataset.id);
      const f = el.dataset.f;
      if (!u) break;
      if (f === 'verified'){
        const prev = u.verified;
        adminDo(
          () => { u.verified = !prev; },
          () => { u.verified = prev; },
          (prev ? 'Unverified: ' : 'Verified: ') + u.name
        );
      } else if (f === 'vendor'){
        const prev = u.vendorStatus;
        adminDo(
          () => { u.vendorStatus = prev === 'approved' ? 'none' : 'approved'; },
          () => { u.vendorStatus = prev; },
          (prev === 'approved' ? 'Revoked vendor: ' : 'Approved vendor: ') + u.name
        );
      } else if (f === 'national'){
        const prevNat = u.isNational;
        const prevRank = u.rankN;
        const nextRank = DB.users.filter(x => x.isNational).reduce((m,x) => Math.max(m, x.rankN||0), 0) + 1;
        adminDo(
          () => { u.isNational = !prevNat; u.rankN = prevNat ? null : nextRank; recomputeGeneralRanks(); },
          () => { u.isNational = prevNat; u.rankN = prevRank; recomputeGeneralRanks(); },
          (prevNat ? 'Removed from National: ' : 'Added to National: ') + u.name
        );
      }
      break;
    }

    case 'adminusersave': {
      const u = userById(el.dataset.id);
      if (!u) break;
      const nameEl = document.getElementById('au-name');
      const levelEl = document.getElementById('au-level');
      const regionEl = document.getElementById('au-region');
      const ccEl = document.getElementById('au-coachcourt');
      const cmEl = document.getElementById('au-comm');
      if (nameEl && nameEl.value.trim()) u.name = nameEl.value.trim();
      if (levelEl && levelEl.value.trim()) u.level = levelEl.value.trim();
      if (regionEl && regionEl.value.trim()) u.region = regionEl.value.trim();
      if (ccEl) u.coachCourt = ccEl.value || null;
      if (cmEl) u.communityId = cmEl.value || null;
      u.initials = u.name.split(' ').map(w=>w[0]).slice(0,2).join('').toUpperCase();
      toast('User saved ✓');
      setTimeout(() => back(), 400);
      break;
    }

    case 'admincredit': {
      const u = userById(el.dataset.id);
      if (!u) break;
      const amt = parseFloat(el.dataset.amount);
      const prev = u.wallet;
      adminDo(
        () => {
          u.wallet = Math.max(0, u.wallet + amt);
          DB.transactions.push({
            id: uid('tx'), userId: u.id,
            kind: amt > 0 ? 'admin-credit' : 'admin-debit',
            amount: amt, note: 'Admin adjustment', ts: now()
          });
        },
        () => { u.wallet = prev; },
        (amt > 0 ? 'Credited ' : 'Debited ') + money(Math.abs(amt)) + ' · ' + u.name
      );
      break;
    }

    case 'admindelete': {
      const u = userById(el.dataset.id);
      if (!u) break;
      const idx = DB.users.indexOf(u);
      adminDo(
        () => { DB.users.splice(idx, 1); },
        () => { DB.users.splice(idx, 0, u); },
        'Deleted user: ' + u.name
      );
      setTimeout(() => back(), 300);
      break;
    }

    case 'adminadd': {
      const n = ADMINS.length + 1;
      const id = 'admin' + n;
      const email = 'admin' + n + '@rubix.app';
      const pin = String(1000 + Math.floor(Math.random()*9000));
      const newAdmin = {
        id, email, pin, name:'Admin ' + n, initials:'A' + n,
        hue:(n*47) % 360, photo: n,
        createdAt: new Date().toISOString(), lastLogin:null,
        profileComplete: false
      };
      adminDo(
        () => { ADMINS.push(newAdmin); },
        () => { ADMINS.splice(ADMINS.indexOf(newAdmin), 1); },
        'Created admin: ' + newAdmin.name
      );
      toast('Admin created · ' + email + ' / ' + pin);
      break;
    }

    case 'reportresolve': {
      const r = DB.reports.find(x => x.id === el.dataset.id);
      if (!r) break;
      const prev = r.status;
      const action = el.dataset.action;
      adminDo(
        () => {
          r.status = 'resolved';
          r.action = action;
          if (action === 'ban'){
            const t = userById(r.targetId);
            if (t){ t.safety.blocked.push('admin-ban'); t.status = 'Banned'; t.avail = 'off'; }
          }
        },
        () => {
          r.status = prev;
          r.action = null;
          if (action === 'ban'){
            const t = userById(r.targetId);
            if (t) t.safety.blocked = t.safety.blocked.filter(x => x !== 'admin-ban');
          }
        },
        'Report ' + action + ': ' + r.type
      );
      toast('Report ' + action);
      break;
    }

    case 'toast':
      toast(el.dataset.msg || 'Done');
      break;

    default:
      break;
  }
});

/* ============================================================
   SECTION 46 — INPUT HANDLERS
   ============================================================ */
document.addEventListener('input', e => {
  const el = e.target.closest('[data-input]');
  if (!el) return;
  const key = el.dataset.input;

  if (key === 'rankQuery'){
    state.rankQuery = el.value;
    const box = document.getElementById('rankList');
    if (box) box.innerHTML = rankListHTML();
    return;
  }

  if (key === 'adminUserQuery'){
    state.adminUserQuery = el.value;
    const pos = el.selectionStart;
    render();
    const newInp = mainEl.querySelector('[data-input="adminUserQuery"]');
    if (newInp){ newInp.focus(); if (pos != null) newInp.setSelectionRange(pos, pos); }
    return;
  }

  if (key === 'adminEmail'){ state.gateAdminEmail = el.value; return; }
  if (key === 'adminPin'){ state.gateAdminPin = el.value; return; }

  /* Onboarding */
  if (key === 'onboard-name'){ state.onboardDraft.name = el.value; return; }
  if (key === 'onboard-city'){ state.onboardDraft.city = el.value; return; }
  if (key === 'onboard-region'){ state.onboardDraft.region = el.value; return; }
  if (key === 'onboard-bio'){ state.onboardDraft.bio = el.value.slice(0, 240); return; }
  if (key === 'onboard-level'){
    state.onboardDraft.level = parseFloat(el.value).toFixed(1);
    render();
    return;
  }
  if (key === 'onboard-admin-email'){ state.onboardDraft.adminEmail = el.value; return; }
  if (key === 'onboard-admin-pin'){ state.onboardDraft.adminPin = el.value; return; }

  /* Profile form */
  if (key === 'profile-name'){ state.profileDraft.name = el.value; return; }
  if (key === 'profile-bio'){ state.profileDraft.bio = el.value.slice(0, 240); return; }
  if (key === 'profile-city'){ state.profileDraft.city = el.value; return; }
  if (key === 'profile-region'){ state.profileDraft.region = el.value; return; }

  /* Post composer */
  if (key === 'post-text'){
    state.postDraft = state.postDraft || {};
    state.postDraft.text = el.value.slice(0, 500);
    const cnt = document.querySelector('.post-composer__count');
    if (cnt){
      cnt.textContent = state.postDraft.text.length + ' / 500';
      cnt.classList.toggle('is-warn', state.postDraft.text.length > 400 && state.postDraft.text.length <= 450);
      cnt.classList.toggle('is-over', state.postDraft.text.length > 450);
    }
    const btn = document.querySelector('[data-act="post-submit"]');
    if (btn){
      const canPost = state.postDraft.text.trim().length > 0 || !!(state.postDraft.imageDataUrl || state.postDraft.imageUrl);
      btn.disabled = !canPost;
    }
    return;
  }

  /* Post comment */
  if (key === 'post-comment'){
    state.commentDraft = el.value;
    const btn = document.querySelector('[data-act="post-comment-send"]');
    if (btn) btn.disabled = el.value.trim().length === 0;
    return;
  }
});

/* Enter handlers */
document.addEventListener('keydown', e => {
  if (e.key === 'Enter'){
    if (!SESSION.mode){
      const top = nav.stack.length ? nav.stack[nav.stack.length - 1] : null;
      if (top && top.screen === 'adminlogin'){
        const btn = mainEl.querySelector('[data-act="adminauth"]');
        if (btn) btn.click();
      }
    }
    const chatInp = document.getElementById('chatInput');
    if (chatInp && document.activeElement === chatInp){
      const send = mainEl.querySelector('[data-act="chatsend"]');
      if (send) send.click();
    }
    const cmtInp = mainEl.querySelector('[data-input="post-comment"]');
    if (cmtInp && document.activeElement === cmtInp){
      const send = mainEl.querySelector('[data-act="post-comment-send"]');
      if (send && !send.disabled) send.click();
    }
  }
  if (e.key === 'Escape'){
    if (layerEl.innerHTML) closeLayer();
    else if (nav.stack.length){
      const top = nav.stack[nav.stack.length - 1];
      if (top && top.screen === 'onboarding'){
        SESSION.mode = null;
        SESSION.adminId = null;
        nav.stack = [];
        state.onboardDraft = null;
        state.onboardStep = 1;
        state.onboardRole = null;
        render();
      } else {
        back();
      }
    }
  }
});

/* ============================================================
   SECTION 47 — BOOT
   ============================================================ */
render();

/* ════════════════════════════════════════════════════════════
   END OF SESSION 5 · END OF app.js
   ════════════════════════════════════════════════════════════ */
