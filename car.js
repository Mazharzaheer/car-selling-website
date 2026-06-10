/* ═══════════════════════════════════════════════════
   APEX MOTORS — script.js
═══════════════════════════════════════════════════ */

// ─── DATA ───────────────────────────────────────────
const CARS = [
  { id:1, brand:'Ferrari', model:'SF90 Stradale', year:2024, price:625000, hp:986, speed:211, accel:2.5, category:'Hypercar', img:'https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&q=80', desc:'The SF90 Stradale is Ferrari\'s most powerful road car ever produced. A plug-in hybrid powertrain combining a twin-turbo V8 with three electric motors.', badge:'NEW', color:'Rosso Corsa', engine:'3.9L Twin-Turbo V8 + 3 Electric Motors', weight:'1570 kg', torque:'800 Nm', drivetrain:'AWD', imgs:['https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&q=80','https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80','https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80'] },
  { id:2, brand:'Lamborghini', model:'Revuelto', year:2024, price:608359, hp:1001, speed:217, accel:2.5, category:'Hypercar', img:'https://images.unsplash.com/photo-1566473965997-3de9c817e938?w=800&q=80', desc:'The Revuelto marks a new chapter for Lamborghini. Successor to the legendary Aventador, featuring a hybrid V12 powertrain.', badge:'HOT', color:'Verde Scandal', engine:'6.5L V12 + 3 Electric Motors', weight:'1772 kg', torque:'730 Nm', drivetrain:'AWD', imgs:['https://images.unsplash.com/photo-1566473965997-3de9c817e938?w=800&q=80','https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80','https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80'] },
  { id:3, brand:'Bugatti', model:'Chiron Super Sport', year:2023, price:3825000, hp:1578, speed:273, accel:2.4, category:'Hypercar', img:'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80', desc:'The Chiron Super Sport is the ultimate expression of speed. With a top speed of 273 mph it is the fastest production car in history.', badge:'ULTRA', color:'Nocturne Black', engine:'8.0L Quad-Turbocharged W16', weight:'1978 kg', torque:'1600 Nm', drivetrain:'AWD', imgs:['https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80','https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80','https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80'] },
  { id:4, brand:'Porsche', model:'911 GT3 RS', year:2024, price:243400, hp:518, speed:184, accel:3.2, category:'Supercar', img:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', desc:'The 911 GT3 RS is the most track-focused road-legal 911 ever built. Natural aspiration meets aerodynamic mastery.', badge:'', color:'GT Silver Metallic', engine:'4.0L Naturally Aspirated Flat-6', weight:'1450 kg', torque:'465 Nm', drivetrain:'RWD', imgs:['https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80','https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80','https://images.unsplash.com/photo-1493238792000-8113da705763?w=800&q=80'] },
  { id:5, brand:'McLaren', model:'720S Spider', year:2023, price:382500, hp:710, speed:212, accel:2.9, category:'Supercar', img:'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80', desc:'The 720S Spider combines breathtaking open-air performance with McLaren\'s carbon-fibre architecture for an unmatched driving experience.', badge:'', color:'McLaren Orange', engine:'4.0L M840T Twin-Turbo V8', weight:'1332 kg', torque:'770 Nm', drivetrain:'RWD', imgs:['https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80','https://images.unsplash.com/photo-1566473965997-3de9c817e938?w=800&q=80','https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?w=800&q=80'] },
  { id:6, brand:'Aston Martin', model:'DB12', year:2024, price:245000, hp:671, speed:202, accel:3.6, category:'GT', img:'https://images.unsplash.com/photo-1493238792000-8113da705763?w=800&q=80', desc:'The DB12 is the world\'s first Super Tourer. Blending extraordinary performance with handcrafted luxury British excellence.', badge:'', color:'Midnight Blue', engine:'4.0L Twin-Turbo V8', weight:'1760 kg', torque:'800 Nm', drivetrain:'RWD', imgs:['https://images.unsplash.com/photo-1493238792000-8113da705763?w=800&q=80','https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&q=80','https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=800&q=80'] },
  { id:7, brand:'Ferrari', model:'296 GTB', year:2024, price:324000, hp:819, speed:205, accel:2.9, category:'Supercar', img:'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80', desc:'The 296 GTB introduces a new V6 hybrid architecture that redefines what\'s possible from a mid-engine berlinetta.', badge:'', color:'Rosso Fuoco', engine:'2.9L Twin-Turbo V6 + Electric Motor', weight:'1470 kg', torque:'740 Nm', drivetrain:'RWD', imgs:['https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80','https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?w=800&q=80','https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&q=80'] },
  { id:8, brand:'Lamborghini', model:'Huracán EVO', year:2023, price:287400, hp:631, speed:202, accel:2.9, category:'Supercar', img:'https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?w=800&q=80', desc:'The Huracán EVO takes Lamborghini\'s naturally aspirated V10 to new heights with rear-wheel steering and advanced dynamics.', badge:'', color:'Arancio Borealis', engine:'5.2L Naturally Aspirated V10', weight:'1422 kg', torque:'600 Nm', drivetrain:'AWD', imgs:['https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?w=800&q=80','https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&q=80','https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80'] },
  { id:9, brand:'Porsche', model:'Taycan Turbo S', year:2024, price:187400, hp:761, speed:161, accel:2.4, category:'Electric', img:'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=800&q=80', desc:'The Taycan Turbo S redefines what an electric sports car can be. Sub-2.5 second 0–60 with 300+ miles of range.', badge:'EV', color:'Frozen Berry Metallic', engine:'Dual Electric Motors', weight:'2380 kg', torque:'1050 Nm', drivetrain:'AWD', imgs:['https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=800&q=80','https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80','https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80'] },
  { id:10, brand:'McLaren', model:'750S', year:2024, price:329000, hp:740, speed:206, accel:2.8, category:'Supercar', img:'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80', desc:'The most dynamically talented McLaren ever. The 750S is sharper, lighter and more responsive than its legendary predecessor.', badge:'NEW', color:'Flux Orange', engine:'4.0L M840T Twin-Turbo V8', weight:'1277 kg', torque:'800 Nm', drivetrain:'RWD', imgs:['https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80','https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80','https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80'] },
  { id:11, brand:'Bugatti', model:'Veyron Grand Sport', year:2022, price:1999999, hp:1200, speed:253, accel:2.5, category:'Hypercar', img:'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80', desc:'A timeless masterpiece, the Veyron Grand Sport remains one of the most iconic open-air hypercars ever created.', badge:'', color:'Imperial Red', engine:'8.0L Quad-Turbo W16', weight:'1838 kg', torque:'1500 Nm', drivetrain:'AWD', imgs:['https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80','https://images.unsplash.com/photo-1566473965997-3de9c817e938?w=800&q=80','https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80'] },
  { id:12, brand:'Aston Martin', model:'Vantage F1 Edition', year:2024, price:185000, hp:528, speed:195, accel:3.6, category:'GT', img:'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&q=80', desc:'Born from Aston Martin\'s partnership with the F1 Safety Car programme. The Vantage F1 Edition is track-tuned aggression.', badge:'F1', color:'Lime Essence', engine:'4.0L Twin-Turbo V8', weight:'1530 kg', torque:'685 Nm', drivetrain:'RWD', imgs:['https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&q=80','https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80','https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80'] },
];

const BRANDS = [
  { name:'Ferrari', icon:'🐴', country:'Italy', founded:1939, models:8, desc:'The Prancing Horse. Born on the racetrack, refined on the road. Ferrari has set the gold standard for performance automobiles for over 80 years.', hp:986 },
  { name:'Lamborghini', icon:'🐂', country:'Italy', founded:1963, models:6, desc:'The Raging Bull. From the Miura to the Revuelto, Lamborghini has always pushed the boundaries of automotive design and performance.', hp:1001 },
  { name:'Bugatti', icon:'⚡', country:'France', founded:1909, models:4, desc:'The apex of automotive engineering. Bugatti creates automobiles of unrivalled performance, luxury, and technical sophistication.', hp:1578 },
  { name:'Porsche', icon:'🏎️', country:'Germany', founded:1931, models:12, desc:'Precision engineering meets timeless design. Porsche\'s DNA is built on the belief that a sports car should be usable every day.', hp:761 },
  { name:'McLaren', icon:'🦅', country:'England', founded:1963, models:7, desc:'Built in Woking, Surrey. Every McLaren is a statement of purpose: uncompromising performance through carbon-fibre innovation.', hp:740 },
  { name:'Aston Martin', icon:'🦁', country:'England', founded:1913, models:9, desc:'Beauty. Power. Soul. Aston Martin handcrafts the world\'s most desirable high-performance sports, GT and luxury vehicles.', hp:671 },
];

const TESTIMONIALS = [
  { text: 'The experience at APEX MOTORS is unlike anything else. They found me my dream 911 GT3 RS in three days. The attention to detail and personal service is extraordinary.', name:'James Whitmore', role:'CEO, Whitmore Capital', stars:5, init:'JW' },
  { text: 'I\'ve bought six cars through APEX over the past decade. Each time they exceed my expectations. The Chiron Super Sport they delivered last month is simply breathtaking.', name:'Alexandra Chen', role:'Formula 1 Engineer', stars:5, init:'AC' },
  { text: 'The most professional automotive dealership I\'ve ever encountered. They delivered my Ferrari SF90 in perfect condition with a personalised concierge service.', name:'Marcus Sullivan', role:'Race Car Driver', stars:5, init:'MS' },
  { text: 'APEX\'s knowledge of rare and limited-edition models is unmatched. They sourced a one-of-147 Lamborghini for my collection. Truly remarkable.', name:'Natasha Romano', role:'Art Collector', stars:5, init:'NR' },
  { text: 'World-class service, world-class cars. The team at APEX understands that buying a hypercar is an emotional experience, not just a transaction.', name:'David Park', role:'Tech Entrepreneur', stars:5, init:'DP' },
];

const GALLERY_IMGS = [
  { url:'https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=600&q=80', label:'Ferrari SF90', h:300 },
  { url:'https://images.unsplash.com/photo-1566473965997-3de9c817e938?w=600&q=80', label:'Lamborghini Revuelto', h:200 },
  { url:'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=600&q=80', label:'Bugatti Chiron', h:240 },
  { url:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80', label:'Porsche 911', h:180 },
  { url:'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=600&q=80', label:'McLaren 720S', h:280 },
  { url:'https://images.unsplash.com/photo-1493238792000-8113da705763?w=600&q=80', label:'Aston Martin DB12', h:220 },
  { url:'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80', label:'Ferrari 296 GTB', h:260 },
  { url:'https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?w=600&q=80', label:'Huracán EVO', h:200 },
  { url:'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=600&q=80', label:'Vantage F1 Edition', h:300 },
  { url:'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=600&q=80', label:'Porsche Taycan', h:220 },
  { url:'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80', label:'McLaren 750S', h:240 },
  { url:'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80', label:'Bugatti Veyron', h:180 },
];

const TEAM = [
  { name:'Alessandro Ferrari', role:'FOUNDER & CEO', init:'AF' },
  { name:'Sofia Reinholt', role:'HEAD OF ACQUISITIONS', init:'SR' },
  { name:'Marcus Steele', role:'LEAD ENGINEER', init:'MS' },
  { name:'Yuki Tanaka', role:'DESIGN DIRECTOR', init:'YT' },
  { name:'Emma Christoph', role:'BRAND AMBASSADOR', init:'EC' },
  { name:'Rafael Moreno', role:'TEST DRIVER', init:'RM' },
];

// ─── STATE ───────────────────────────────────────────
let currentPage = 'home';
let currentDetail = null;
let testiIndex = 0;
let galleryIndex = 0;
let loggedIn = false;
let userData = { name:'John Doe', email:'john@example.com', wishlist:[], viewed:[] };

// ─── LOADER ──────────────────────────────────────────
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hide');
    initParticles();
    initCounters();
    revealOnScroll();
  }, 2400);
});

// ─── CURSOR ──────────────────────────────────────────
const cursor = document.getElementById('cursor');
const trail = document.getElementById('cursor-trail');
let cx = -100, cy = -100, tx = -100, ty = -100;

document.addEventListener('mousemove', e => {
  cx = e.clientX; cy = e.clientY;
  cursor.style.left = cx - 6 + 'px';
  cursor.style.top  = cy - 6 + 'px';
});
function animateTrail() {
  tx += (cx - tx) * 0.12;
  ty += (cy - ty) * 0.12;
  trail.style.left = tx - 16 + 'px';
  trail.style.top  = ty - 16 + 'px';
  requestAnimationFrame(animateTrail);
}
animateTrail();

// ─── NAVBAR ──────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
});

document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

// Nav link clicks
document.querySelectorAll('[data-page]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    const p = el.getAttribute('data-page');
    if(p === 'dashboard' && !loggedIn) { navigateTo('login'); return; }
    navigateTo(p);
  });
});

// ─── PAGE NAVIGATION ─────────────────────────────────
function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById('page-' + page);
  if (!el) return;
  el.classList.add('active', 'fade-in');
  setTimeout(() => el.classList.remove('fade-in'), 600);
  currentPage = page;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.getAttribute('data-page') === page);
  });
  document.getElementById('navLinks').classList.remove('open');

  // Lazy-render pages
  if (page === 'cars') renderCarsGrid(CARS);
  if (page === 'brands') renderBrandsFull();
  if (page === 'gallery') renderGallery();
  if (page === 'about') { renderTeam(); setTimeout(initAboutCounters, 300); }
  if (page === 'dashboard') renderDashboard('overview');
}

// ─── PARTICLES ───────────────────────────────────────
function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W = canvas.width = window.innerWidth;
  let H = canvas.height = window.innerHeight;
  window.addEventListener('resize', () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; });

  const pts = Array.from({ length: 100 }, () => ({
    x: Math.random() * W, y: Math.random() * H,
    vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
    r: Math.random() * 1.5 + 0.3,
    color: Math.random() > 0.7 ? '#e50914' : Math.random() > 0.5 ? '#00d4ff' : '#ffffff',
    alpha: Math.random() * 0.5 + 0.1,
  }));

  function draw() {
    ctx.clearRect(0, 0, W, H);
    pts.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
    });
    // Lines
    ctx.globalAlpha = 1;
    for (let i = 0; i < pts.length; i++) {
      for (let j = i+1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        const d = Math.sqrt(dx*dx + dy*dy);
        if (d < 100) {
          ctx.beginPath();
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = `rgba(229,9,20,${0.06 * (1 - d/100)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

// ─── COUNTERS ────────────────────────────────────────
function initCounters() {
  document.querySelectorAll('.h-stat-num').forEach(el => {
    const target = parseFloat(el.getAttribute('data-target'));
    const isDecimal = target < 10;
    let start = 0;
    const duration = 2000;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const prog = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - prog, 3);
      const val = eased * target;
      el.textContent = isDecimal ? val.toFixed(1) : Math.floor(val).toLocaleString();
      if (prog < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

function initAboutCounters() {
  document.querySelectorAll('.about-stat-n').forEach(el => {
    const target = parseInt(el.getAttribute('data-target'));
    let start = 0;
    const duration = 1600;
    const step = (ts) => {
      if (!start) start = ts;
      const prog = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - prog, 3);
      el.textContent = Math.floor(eased * target).toLocaleString();
      if (prog < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

// ─── SCROLL REVEAL ───────────────────────────────────
function revealOnScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
}

// ─── FEATURED CARS (HOME) ────────────────────────────
function renderFeatured() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  const featured = CARS.slice(0, 6);
  grid.innerHTML = featured.map((c, i) => carCardHTML(c, i * 100)).join('');
  addCardListeners(grid);
}

function carCardHTML(car, delay = 0) {
  return `<div class="car-card reveal" style="transition-delay:${delay}ms" data-id="${car.id}">
    <div class="car-card-img-wrap">
      ${car.badge ? `<div class="car-card-badge">${car.badge}</div>` : ''}
      <img src="${car.img}" alt="${car.brand} ${car.model}" loading="lazy" />
    </div>
    <div class="car-card-glow"></div>
    <div class="car-card-body">
      <div class="car-card-brand">${car.brand.toUpperCase()}</div>
      <div class="car-card-name">${car.model}</div>
      <div class="car-card-specs">
        <div class="spec-item"><div class="spec-val">${car.hp.toLocaleString()}</div><span class="spec-key">HP</span></div>
        <div class="spec-item"><div class="spec-val">${car.speed}</div><span class="spec-key">MPH</span></div>
        <div class="spec-item"><div class="spec-val">${car.accel}s</div><span class="spec-key">0-60</span></div>
      </div>
      <div class="car-card-footer">
        <span class="car-price">$${car.price.toLocaleString()}</span>
        <button class="btn-card">View Details</button>
      </div>
    </div>
  </div>`;
}

function addCardListeners(container) {
  container.querySelectorAll('.car-card').forEach(card => {
    // 3D Tilt
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
      card.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) translateZ(6px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
    card.addEventListener('click', () => {
      const id = parseInt(card.getAttribute('data-id'));
      openDetail(id);
    });
  });
  revealOnScroll();
}

// ─── LAUNCHES ────────────────────────────────────────
function renderLaunches() {
  const el = document.getElementById('launchesRight');
  if (!el) return;
  const launches = CARS.filter(c => c.badge === 'NEW' || c.badge === 'HOT' || c.badge === 'ULTRA').slice(0, 3);
  el.innerHTML = launches.map(c => `
    <div class="launch-item" data-id="${c.id}">
      <img class="launch-img" src="${c.img}" alt="${c.model}" loading="lazy" />
      <div class="launch-info">
        <div class="launch-brand">${c.brand.toUpperCase()}</div>
        <div class="launch-name">${c.model}</div>
        <div class="launch-price">$${c.price.toLocaleString()}</div>
      </div>
      <span class="launch-new">${c.badge}</span>
    </div>`).join('');
  el.querySelectorAll('.launch-item').forEach(item => {
    item.addEventListener('click', () => openDetail(parseInt(item.getAttribute('data-id'))));
  });
}

// ─── BRANDS (HOME) ───────────────────────────────────
function renderHomeBrands() {
  // Marquee
  const marquee = document.getElementById('brandsMarquee');
  if (marquee) {
    const names = [...BRANDS.map(b=>b.name), ...BRANDS.map(b=>b.name)];
    marquee.innerHTML = names.map(n => `<span>${n.toUpperCase()}</span>`).join('');
  }
  // Grid
  const grid = document.getElementById('brandsGrid');
  if (!grid) return;
  grid.innerHTML = BRANDS.map((b, i) => `
    <div class="brand-card reveal" style="transition-delay:${i*80}ms">
      <div class="brand-icon">${b.icon}</div>
      <div class="brand-name">${b.name}</div>
      <div class="brand-count">${b.models} Models</div>
    </div>`).join('');
  revealOnScroll();
}

// ─── TESTIMONIALS ────────────────────────────────────
function renderTestimonials() {
  const track = document.getElementById('testiTrack');
  const dots = document.getElementById('testiDots');
  if (!track) return;
  track.innerHTML = TESTIMONIALS.map(t => `
    <div class="testi-card">
      <div class="testi-stars">${'★'.repeat(t.stars)}</div>
      <div class="testi-text">${t.text}</div>
      <div class="testi-author">
        <div class="testi-av">${t.init}</div>
        <div><div class="testi-name">${t.name}</div><div class="testi-role">${t.role}</div></div>
      </div>
    </div>`).join('');
  dots.innerHTML = TESTIMONIALS.map((_,i) => `<div class="testi-dot${i===0?' active':''}" data-i="${i}"></div>`).join('');
  dots.querySelectorAll('.testi-dot').forEach(d => d.addEventListener('click', () => setTesti(+d.getAttribute('data-i'))));
  setInterval(() => setTesti((testiIndex + 1) % TESTIMONIALS.length), 5000);
}

function setTesti(idx) {
  testiIndex = idx;
  const track = document.getElementById('testiTrack');
  const cardW = track.querySelector('.testi-card')?.offsetWidth + 24 || 0;
  track.scrollTo({ left: idx * cardW, behavior: 'smooth' });
  document.querySelectorAll('.testi-dot').forEach((d,i) => d.classList.toggle('active', i===idx));
}

// ─── CARS PAGE ───────────────────────────────────────
function renderCarsGrid(cars) {
  const grid = document.getElementById('carsGrid');
  if (!grid) return;
  grid.innerHTML = cars.length ? cars.map((c, i) => carCardHTML(c, 0)).join('') : '<div style="color:var(--text-dim);font-family:var(--font-mono);font-size:0.8rem;padding:3rem;text-align:center;grid-column:1/-1">No vehicles match your filters.</div>';
  addCardListeners(grid);
  document.getElementById('filterResults').textContent = `Showing ${cars.length} vehicle${cars.length!==1?'s':''}`;
}

// Filters
['filterBrand','filterCat','filterPrice'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('change', applyFilters);
});

function applyFilters() {
  const brand = document.getElementById('filterBrand').value;
  const cat   = document.getElementById('filterCat').value;
  const price = document.getElementById('filterPrice').value;
  let filtered = CARS;
  if (brand !== 'all') filtered = filtered.filter(c => c.brand === brand);
  if (cat   !== 'all') filtered = filtered.filter(c => c.category === cat);
  if (price !== 'all') filtered = filtered.filter(c => c.price <= parseInt(price));
  renderCarsGrid(filtered);
}

// ─── CAR DETAIL ──────────────────────────────────────
function openDetail(id) {
  const car = CARS.find(c => c.id === id);
  if (!car) return;
  currentDetail = car;
  // Track viewed
  if (!userData.viewed.find(c => c.id === id)) {
    userData.viewed.unshift(car);
    if (userData.viewed.length > 6) userData.viewed.pop();
  }

  const wrap = document.getElementById('detailWrap');
  const perfData = [
    { label:'Acceleration', val: Math.round((1 - car.accel/6)*100) },
    { label:'Top Speed',    val: Math.round((car.speed/300)*100) },
    { label:'Handling',     val: Math.floor(Math.random()*15)+82 },
    { label:'Braking',      val: Math.floor(Math.random()*15)+80 },
  ];
  wrap.innerHTML = `
    <button class="detail-back" onclick="navigateTo('cars')">← Back to Collection</button>
    <div class="detail-grid">
      <div class="detail-gallery">
        <img class="detail-main-img" id="detailMain" src="${car.imgs[0]}" alt="${car.model}" />
        <div class="detail-thumbs">
          ${car.imgs.map((img,i) => `<img class="detail-thumb${i===0?' active':''}" src="${img}" alt="view ${i+1}" onclick="setDetailImg('${img}', this)" />`).join('')}
        </div>
      </div>
      <div class="detail-info">
        <div class="detail-brand">${car.brand.toUpperCase()} · ${car.year}</div>
        <h1 class="detail-name">${car.model}</h1>
        <div class="detail-price">$${car.price.toLocaleString()}</div>
        <p class="detail-desc">${car.desc}</p>
        <div class="detail-quick-specs">
          <div class="dqs-item"><div class="dqs-val">${car.hp.toLocaleString()}</div><span class="dqs-key">HORSEPOWER</span></div>
          <div class="dqs-item"><div class="dqs-val">${car.speed} MPH</div><span class="dqs-key">TOP SPEED</span></div>
          <div class="dqs-item"><div class="dqs-val">${car.accel}s</div><span class="dqs-key">0–60 MPH</span></div>
        </div>
        <div class="detail-actions">
          <button class="btn-red" onclick="showToast('🚗 Test drive booked for ${car.model}!')">Book Test Drive</button>
          <button class="btn-wishlist" onclick="addToWishlist(${car.id})">♡ Wishlist</button>
        </div>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:2rem;margin-top:2rem">
      <div>
        <div class="dash-section-title">SPECIFICATIONS</div>
        <table class="detail-specs-table">
          <tr><th colspan="2">ENGINE & PERFORMANCE</th></tr>
          <tr><td>Engine</td><td>${car.engine}</td></tr>
          <tr><td>Horsepower</td><td>${car.hp.toLocaleString()} hp</td></tr>
          <tr><td>Torque</td><td>${car.torque}</td></tr>
          <tr><td>Top Speed</td><td>${car.speed} mph</td></tr>
          <tr><td>0–60 mph</td><td>${car.accel} seconds</td></tr>
          <tr><th colspan="2">DIMENSIONS & WEIGHT</th></tr>
          <tr><td>Curb Weight</td><td>${car.weight}</td></tr>
          <tr><td>Drivetrain</td><td>${car.drivetrain}</td></tr>
          <tr><td>Exterior Color</td><td>${car.color}</td></tr>
          <tr><td>Category</td><td>${car.category}</td></tr>
          <tr><td>Model Year</td><td>${car.year}</td></tr>
        </table>
      </div>
      <div>
        <div class="dash-section-title">PERFORMANCE METRICS</div>
        <div class="perf-bars">
          ${perfData.map(p => `
            <div class="perf-bar-item">
              <div class="perf-bar-label"><span>${p.label}</span><span>${p.val}/100</span></div>
              <div class="perf-bar-track"><div class="perf-bar-fill" style="width:0%;background:${p.val>89?'var(--red)':p.val>79?'var(--blue)':'var(--silver)'}" data-w="${p.val}%"></div></div>
            </div>`).join('')}
        </div>
      </div>
    </div>`;

  navigateTo('detail');
  setTimeout(() => {
    wrap.querySelectorAll('.perf-bar-fill').forEach(b => b.style.width = b.getAttribute('data-w'));
  }, 400);
}

function setDetailImg(src, thumb) {
  document.getElementById('detailMain').src = src;
  document.querySelectorAll('.detail-thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}

function addToWishlist(id) {
  const car = CARS.find(c => c.id === id);
  if (!car) return;
  if (userData.wishlist.find(c => c.id === id)) {
    showToast('Already in your wishlist!');
    return;
  }
  userData.wishlist.push(car);
  showToast(`❤️ ${car.model} added to wishlist!`);
}

// ─── BRANDS FULL ─────────────────────────────────────
function renderBrandsFull() {
  const grid = document.getElementById('brandsFull');
  if (!grid || grid.innerHTML.trim()) return;
  grid.innerHTML = BRANDS.map((b,i) => `
    <div class="brand-full-card reveal" style="transition-delay:${i*100}ms">
      <div class="bfc-icon">${b.icon}</div>
      <div class="bfc-name">${b.name}</div>
      <div class="bfc-country">${b.country} · EST. ${b.founded}</div>
      <div class="bfc-desc">${b.desc}</div>
      <div class="bfc-stats">
        <div><div class="bfc-stat-val">${b.models}</div><div class="bfc-stat-key">MODELS</div></div>
        <div><div class="bfc-stat-val">${b.hp.toLocaleString()}</div><div class="bfc-stat-key">MAX HP</div></div>
      </div>
    </div>`).join('');
  revealOnScroll();
}

// ─── GALLERY ─────────────────────────────────────────
function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid || grid.innerHTML.trim()) return;
  grid.innerHTML = GALLERY_IMGS.map((g,i) => `
    <div class="gallery-item" data-i="${i}">
      <img src="${g.url}" alt="${g.label}" loading="lazy" style="height:${g.h}px;object-fit:cover;width:100%" />
      <div class="gallery-item-overlay"><span class="gallery-item-label">${g.label}</span></div>
    </div>`).join('');
  grid.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => openLightbox(parseInt(item.getAttribute('data-i'))));
  });
}

// Lightbox
function openLightbox(idx) {
  galleryIndex = idx;
  const lb = document.getElementById('lightbox');
  document.getElementById('lbImg').src = GALLERY_IMGS[idx].url;
  lb.classList.add('open');
}
document.getElementById('lbClose').addEventListener('click', () => document.getElementById('lightbox').classList.remove('open'));
document.getElementById('lbPrev').addEventListener('click', () => openLightbox((galleryIndex - 1 + GALLERY_IMGS.length) % GALLERY_IMGS.length));
document.getElementById('lbNext').addEventListener('click', () => openLightbox((galleryIndex + 1) % GALLERY_IMGS.length));
document.addEventListener('keydown', e => {
  if (document.getElementById('lightbox').classList.contains('open')) {
    if (e.key === 'ArrowLeft') openLightbox((galleryIndex - 1 + GALLERY_IMGS.length) % GALLERY_IMGS.length);
    if (e.key === 'ArrowRight') openLightbox((galleryIndex + 1) % GALLERY_IMGS.length);
    if (e.key === 'Escape') document.getElementById('lightbox').classList.remove('open');
  }
});

// ─── TEAM ────────────────────────────────────────────
function renderTeam() {
  const grid = document.getElementById('teamGrid');
  if (!grid || grid.innerHTML.trim()) return;
  grid.innerHTML = TEAM.map(t => `
    <div class="team-card reveal">
      <div class="team-avatar">${t.init}</div>
      <div class="team-name">${t.name}</div>
      <div class="team-role">${t.role}</div>
    </div>`).join('');
  revealOnScroll();
}

// ─── DASHBOARD ───────────────────────────────────────
function renderDashboard(section) {
  const main = document.getElementById('dashMain');
  document.querySelectorAll('.dash-nav-item').forEach(i => i.classList.toggle('active', i.getAttribute('data-dash') === section));
  if (section === 'overview') {
    main.innerHTML = `
      <div class="dash-section-title">OVERVIEW</div>
      <div class="dash-cards-row">
        <div class="dash-card"><div class="dash-card-val">${userData.wishlist.length}</div><div class="dash-card-label">SAVED CARS</div></div>
        <div class="dash-card"><div class="dash-card-val">${userData.viewed.length}</div><div class="dash-card-label">RECENTLY VIEWED</div></div>
        <div class="dash-card"><div class="dash-card-val">3</div><div class="dash-card-label">TEST DRIVES</div></div>
        <div class="dash-card"><div class="dash-card-val">GOLD</div><div class="dash-card-label">MEMBER TIER</div></div>
      </div>
      <div class="dash-section-title" style="margin-top:2rem">RECENTLY VIEWED</div>
      <div class="dash-fav-grid">${(userData.viewed.length ? userData.viewed : CARS.slice(0,4)).map(c => `
        <div class="dash-fav-card" onclick="openDetail(${c.id})">
          <img class="dash-fav-img" src="${c.img}" alt="${c.model}" />
          <div class="dash-fav-info"><div class="dash-fav-name">${c.model}</div><div class="dash-fav-price">$${c.price.toLocaleString()}</div></div>
        </div>`).join('')}</div>`;
  } else if (section === 'favorites') {
    const cars = userData.wishlist.length ? userData.wishlist : [];
    main.innerHTML = `
      <div class="dash-section-title">FAVORITE CARS</div>
      ${cars.length ? `<div class="dash-fav-grid">${cars.map(c => `
        <div class="dash-fav-card">
          <img class="dash-fav-img" src="${c.img}" alt="${c.model}" />
          <div class="dash-fav-info"><div class="dash-fav-name">${c.model}</div><div class="dash-fav-price">$${c.price.toLocaleString()}</div></div>
        </div>`).join('')}</div>` : `<p style="color:var(--text-dim);font-size:0.9rem">No saved cars yet. <span style="color:var(--red);cursor:pointer" onclick="navigateTo('cars')">Browse the collection →</span></p>`}`;
  } else if (section === 'viewed') {
    const cars = userData.viewed.length ? userData.viewed : CARS.slice(0,6);
    main.innerHTML = `
      <div class="dash-section-title">RECENTLY VIEWED</div>
      <div class="dash-fav-grid">${cars.map(c => `
        <div class="dash-fav-card" onclick="openDetail(${c.id})">
          <img class="dash-fav-img" src="${c.img}" alt="${c.model}" />
          <div class="dash-fav-info"><div class="dash-fav-name">${c.model}</div><div class="dash-fav-price">$${c.price.toLocaleString()}</div></div>
        </div>`).join('')}</div>`;
  } else if (section === 'settings') {
    main.innerHTML = `
      <div class="dash-section-title">ACCOUNT SETTINGS</div>
      <div class="glass-form" style="max-width:500px">
        <h3>Profile Information</h3>
        <div class="form-group"><label>FULL NAME</label><div class="input-wrap"><input type="text" value="${userData.name}" id="settingsName" /></div></div>
        <div class="form-group"><label>EMAIL</label><div class="input-wrap"><input type="email" value="${userData.email}" id="settingsEmail" /></div></div>
        <div class="form-group"><label>CURRENT PASSWORD</label><div class="input-wrap"><input type="password" placeholder="••••••••" /></div></div>
        <div class="form-group"><label>NEW PASSWORD</label><div class="input-wrap"><input type="password" placeholder="••••••••" /></div></div>
        <button class="btn-red" style="margin-top:1rem" onclick="saveSettings()">Save Changes</button>
      </div>`;
  }
}

function saveSettings() {
  userData.name = document.getElementById('settingsName')?.value || userData.name;
  userData.email = document.getElementById('settingsEmail')?.value || userData.email;
  document.getElementById('dashName').textContent = userData.name;
  showToast('✅ Settings saved successfully!');
}

// Dash nav
document.querySelectorAll('.dash-nav-item').forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    const section = item.getAttribute('data-dash');
    if (section) renderDashboard(section);
  });
});

document.getElementById('logoutBtn').addEventListener('click', () => {
  loggedIn = false;
  showToast('👋 Logged out successfully.');
  navigateTo('home');
});

// ─── AUTH FORMS ──────────────────────────────────────
function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const pass  = document.getElementById('loginPass').value;
  if (!email || !pass) return false;
  loggedIn = true;
  userData.email = email;
  userData.name = email.split('@')[0].replace(/[._]/g,' ').replace(/\b\w/g,l=>l.toUpperCase());
  document.getElementById('dashName').textContent = userData.name;
  showToast('✅ Welcome back to APEX!');
  navigateTo('dashboard');
  return false;
}

function handleRegister(e) {
  e.preventDefault();
  const name    = document.getElementById('regName').value;
  const pass    = document.getElementById('regPass').value;
  const confirm = document.getElementById('regConfirm').value;
  if (pass !== confirm) { showToast('❌ Passwords do not match.'); return false; }
  loggedIn = true;
  userData.name = name;
  document.getElementById('dashName').textContent = name;
  showToast(`🎉 Welcome to APEX, ${name.split(' ')[0]}!`);
  navigateTo('dashboard');
  return false;
}

function handleContactForm(e) {
  e.preventDefault();
  showToast('✅ Message sent! We\'ll respond within 24 hours.');
  e.target.reset();
  return false;
}

function togglePassword(id) {
  const input = document.getElementById(id);
  input.type = input.type === 'password' ? 'text' : 'password';
}

function checkPass() {
  const val = document.getElementById('regPass')?.value || '';
  const bar = document.querySelector('.ps-bar');
  if (!bar) return;
  let score = 0;
  if (val.length > 5) score++;
  if (val.length > 9) score++;
  if (/[A-Z]/.test(val)) score++;
  if (/[0-9]/.test(val)) score++;
  if (/[^A-Za-z0-9]/.test(val)) score++;
  const colors = ['#e50914','#ff6b00','#ffd700','#7fff00','#00ff88'];
  const widths  = ['20%','40%','60%','80%','100%'];
  bar.style.width = widths[score-1] || '0%';
  bar.style.background = colors[score-1] || 'transparent';
}

// ─── TOAST ───────────────────────────────────────────
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3500);
}

// ─── 3D HERO CAR MOUSE PARALLAX ──────────────────────
document.addEventListener('mousemove', e => {
  const car = document.getElementById('heroCar');
  if (!car) return;
  const xPercent = (e.clientX / window.innerWidth - 0.5) * 12;
  const yPercent = (e.clientY / window.innerHeight - 0.5) * 6;
  car.style.transform = `translateY(calc(-50% + ${yPercent}px)) rotateY(${xPercent}deg)`;
});

// ─── HERO ROTATION FIX (reset on leave) ──────────────
document.getElementById('hero')?.addEventListener('mouseleave', () => {
  const car = document.getElementById('heroCar');
  if (car) car.style.transform = '';
});

// ─── INIT ────────────────────────────────────────────
renderFeatured();
renderLaunches();
renderHomeBrands();
renderTestimonials();

// Reveal observer init after render
setTimeout(revealOnScroll, 100);