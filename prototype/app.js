/* ========================================
   LeadRadar — App Logic & Lead Data
   ======================================== */

// ─── Lead Data ──────────────────────────
const leads = [
    {
        name: "Marcus Chen",
        role: "Founder & CEO",
        company: "QuantumPay",
        platform: "reddit",
        date: "2026-02-25",
        website: "https://www.linkedin.com/in/marcuschen-fintech",
        projectSpecs: "Looking for a full-stack developer to build a payments dashboard with real-time transaction monitoring, analytics charts, and merchant management portal. Tech stack: React + Node.js.",
        businessContext: "Founder of QuantumPay, a B2B fintech startup processing micro-payments for digital content creators.",
        tags: ["dashboard", "fullstack", "saas"],
        sourceUrl: "https://reddit.com/r/SaaS"
    },
    {
        name: "Priya Sharma",
        role: "CTO",
        company: "GreenRoute Logistics",
        platform: "linkedin",
        date: "2026-02-22",
        website: "https://greenroutelogistics.com",
        projectSpecs: "Need a web developer to build a fleet management dashboard with route optimization visualization, driver tracking maps, and delivery status APIs. Must integrate with Google Maps.",
        businessContext: "CTO at GreenRoute Logistics, a sustainable last-mile delivery startup operating in 3 cities.",
        tags: ["dashboard", "api", "webapp"],
        sourceUrl: "https://linkedin.com"
    },
    {
        name: "Jake Morrison",
        role: "Solo Entrepreneur",
        company: "FitTrack Pro",
        platform: "indiehackers",
        date: "2026-02-20",
        website: "https://fittrackpro.io",
        projectSpecs: "Building a fitness SaaS — need developer to create member portal with workout tracking, progress charts, and subscription billing integration with Stripe. React or Vue preferred.",
        businessContext: "Solo founder building FitTrack Pro, a personalized fitness coaching platform targeting boutique gyms.",
        tags: ["saas", "frontend", "webapp"],
        sourceUrl: "https://indiehackers.com"
    },
    {
        name: "Olivia Nguyen",
        role: "Co-Founder",
        company: "PetCare Connect",
        platform: "twitter",
        date: "2026-02-18",
        website: "https://petcareconnect.com",
        projectSpecs: "Looking for a developer to build a marketplace platform connecting pet owners with veterinarians, groomers, and walkers. Need booking system, reviews, and payment processing.",
        businessContext: "Co-founder of PetCare Connect, a pet services marketplace startup. Previously worked at Rover.com.",
        tags: ["webapp", "fullstack", "ecommerce"],
        sourceUrl: "https://x.com/olivia_nguyen"
    },
    {
        name: "David Kowalski",
        role: "Founder",
        company: "LearnStack",
        platform: "reddit",
        date: "2026-02-17",
        website: "https://learnstack.dev",
        projectSpecs: "Need a full-stack dev to build an interactive coding education platform — video streaming, in-browser code editor, progress tracking dashboards, and certificate generation.",
        businessContext: "Founder of LearnStack, an EdTech startup creating project-based coding courses for career switchers.",
        tags: ["fullstack", "saas", "dashboard"],
        sourceUrl: "https://reddit.com/r/startups"
    },
    {
        name: "Amara Okafor",
        role: "CEO",
        company: "AgriSense",
        platform: "linkedin",
        date: "2026-02-15",
        website: "https://agrisense.africa",
        projectSpecs: "Seeking a web developer to build a farm management SaaS dashboard — soil data visualization, weather API integration, crop recommendation engine UI, and IoT sensor data display.",
        businessContext: "CEO of AgriSense, an agritech startup using IoT sensors for precision farming across West Africa.",
        tags: ["saas", "dashboard", "api"],
        sourceUrl: "https://linkedin.com"
    },
    {
        name: "Tom Brennan",
        role: "Product Manager",
        company: "UrbanNest",
        platform: "producthunt",
        date: "2026-02-14",
        website: "https://urbannest.co",
        projectSpecs: "Looking for a React developer to rebuild our property management portal. Need tenant portal, maintenance request forms, payment integration, and lease document management system.",
        businessContext: "Product Manager at UrbanNest, a proptech startup simplifying rental management for landlords.",
        tags: ["frontend", "webapp", "saas"],
        sourceUrl: "https://producthunt.com"
    },
    {
        name: "Sarah Kim",
        role: "Founder",
        company: "MealPlan AI",
        platform: "twitter",
        date: "2026-02-12",
        website: "https://mealplanai.com",
        projectSpecs: "Need a developer to build an AI-powered meal planning web app — recipe database, dietary preference filters, grocery list generator, and weekly plan calendar view. OpenAI API integration needed.",
        businessContext: "Founder of MealPlan AI, leveraging AI to create personalized nutrition plans. Has 10K waitlist users.",
        tags: ["webapp", "api", "fullstack"],
        sourceUrl: "https://x.com/sarahkim_ai"
    },
    {
        name: "Rafael Gutierrez",
        role: "Co-Founder & CTO",
        company: "CryptoTrail",
        platform: "github",
        date: "2026-02-10",
        website: "https://cryptotrail.io",
        projectSpecs: "Looking for a frontend developer to build a crypto portfolio tracker dashboard with real-time price charts, wallet integration, tax reporting features, and multi-exchange support.",
        businessContext: "Co-Founder & CTO of CryptoTrail, building transparent crypto portfolio analytics for retail investors.",
        tags: ["dashboard", "frontend", "api"],
        sourceUrl: "https://github.com/cryptotrail"
    },
    {
        name: "Emily Watson",
        role: "Founder",
        company: "BookShelf Social",
        platform: "indiehackers",
        date: "2026-02-08",
        website: "https://bookshelfsocial.com",
        projectSpecs: "Building a social reading platform — need developer for book cataloging system, reading progress tracker, social feed with reviews, and reading challenge features. Looking for MERN stack dev.",
        businessContext: "Founder of BookShelf Social, a Goodreads alternative focused on community reading challenges.",
        tags: ["webapp", "fullstack", "saas"],
        sourceUrl: "https://indiehackers.com"
    },
    {
        name: "Lucas Fernandez",
        role: "CEO",
        company: "EventForge",
        platform: "reddit",
        date: "2026-02-06",
        website: "https://eventforge.io",
        projectSpecs: "Need a developer to build event management SaaS — ticketing system, attendee registration, live streaming integration, sponsor dashboard, and post-event analytics. Must handle 10K+ concurrent users.",
        businessContext: "CEO of EventForge, providing white-label virtual and hybrid event solutions for enterprise clients.",
        tags: ["saas", "dashboard", "fullstack"],
        sourceUrl: "https://reddit.com/r/SaaS"
    },
    {
        name: "Aisha Patel",
        role: "Founder",
        company: "StyleBox",
        platform: "medium",
        date: "2026-02-04",
        website: "https://stylebox.fashion",
        projectSpecs: "Looking for a web developer to build an AI-powered personal styling platform — wardrobe inventory, outfit recommendations, virtual try-on integration, and shopping links. E-commerce features needed.",
        businessContext: "Founder of StyleBox, an AI fashion-tech startup providing personalized wardrobe recommendations.",
        tags: ["ecommerce", "webapp", "api"],
        sourceUrl: "https://medium.com/@aisha_patel"
    },
    {
        name: "Chris Blackwood",
        role: "Co-Founder",
        company: "HealthSync",
        platform: "discord",
        date: "2026-02-02",
        website: "https://healthsync.app",
        projectSpecs: "Need a full-stack developer to build a patient management system — appointment scheduling, EHR integration, telehealth video calls, and prescription management dashboard.",
        businessContext: "Co-Founder of HealthSync, a healthtech startup connecting patients with doctors through a unified platform.",
        tags: ["fullstack", "dashboard", "saas"],
        sourceUrl: "https://discord.gg/healthtech"
    },
    {
        name: "Nina Volkov",
        role: "Founder & CEO",
        company: "TranslateHub",
        platform: "twitter",
        date: "2026-01-30",
        website: "https://translatehub.io",
        projectSpecs: "Seeking a developer to build a translation management platform — file upload/download, translator collaboration tools, translation memory system, and client portal with project tracking.",
        businessContext: "Founder of TranslateHub, a language services startup serving enterprise clients in the EU market.",
        tags: ["webapp", "saas", "fullstack"],
        sourceUrl: "https://x.com/nina_volkov"
    },
    {
        name: "Jordan Hayes",
        role: "Solo Entrepreneur",
        company: "InvoiceFlow",
        platform: "reddit",
        date: "2026-01-28",
        website: "https://invoiceflow.co",
        projectSpecs: "Building MVP for invoicing SaaS — need developer for automated invoice generation, payment reminders, expense tracking dashboard, and QuickBooks API integration. Clean, modern UI required.",
        businessContext: "Solo entrepreneur building InvoiceFlow after 5 years as a freelance consultant tired of existing invoicing tools.",
        tags: ["mvp", "saas", "api"],
        sourceUrl: "https://reddit.com/r/Entrepreneurs"
    },
    {
        name: "Maria Santos",
        role: "CEO",
        company: "EduBridge",
        platform: "linkedin",
        date: "2026-01-25",
        website: "https://edubridge.org",
        projectSpecs: "Need a developer to build an online tutoring marketplace — student/tutor matching, video call integration, interactive whiteboard, and progress reporting dashboard for parents.",
        businessContext: "CEO of EduBridge, an EdTech nonprofit connecting underprivileged students with volunteer tutors globally.",
        tags: ["webapp", "dashboard", "fullstack"],
        sourceUrl: "https://linkedin.com"
    },
    {
        name: "Ethan Brooks",
        role: "Founder",
        company: "ParkSpot",
        platform: "producthunt",
        date: "2026-01-22",
        website: "https://parkspot.city",
        projectSpecs: "Looking for a developer to build a smart parking web app — real-time parking availability map, reservation system, payment processing, and monthly subscription management.",
        businessContext: "Founder of ParkSpot, a smart city startup partnering with parking garages to optimize urban parking.",
        tags: ["webapp", "mvp", "api"],
        sourceUrl: "https://producthunt.com"
    },
    {
        name: "Zara Hussain",
        role: "Co-Founder",
        company: "NomadDesk",
        platform: "indiehackers",
        date: "2026-01-20",
        website: "https://nomaddesk.co",
        projectSpecs: "Need a developer to build a coworking space booking platform — space discovery with filters, instant booking, workspace reviews, community features, and host management dashboard.",
        businessContext: "Co-Founder of NomadDesk, a coworking marketplace targeting digital nomads and remote workers.",
        tags: ["webapp", "ecommerce", "dashboard"],
        sourceUrl: "https://indiehackers.com"
    },
    {
        name: "Alex Turner",
        role: "CTO",
        company: "DataPulse",
        platform: "github",
        date: "2026-01-18",
        website: "https://datapulse.dev",
        projectSpecs: "Looking for a frontend developer to build data visualization dashboards — custom chart components, real-time data streaming, drag-and-drop dashboard builder, and embeddable widget system.",
        businessContext: "CTO of DataPulse, building no-code analytics dashboards for non-technical business teams.",
        tags: ["dashboard", "frontend", "saas"],
        sourceUrl: "https://github.com/datapulse-dev"
    },
    {
        name: "Rebecca Liu",
        role: "Founder",
        company: "GreenCart",
        platform: "medium",
        date: "2026-01-15",
        website: "https://greencart.eco",
        projectSpecs: "Need a developer for a sustainable e-commerce platform — product marketplace with eco-scores, carbon footprint calculator, sustainable packaging options, and seller onboarding portal.",
        businessContext: "Founder of GreenCart, an eco-friendly marketplace for sustainable products. Raised $500K pre-seed.",
        tags: ["ecommerce", "fullstack", "webapp"],
        sourceUrl: "https://medium.com/@rebecca_liu"
    },
    {
        name: "Daniel Park",
        role: "CEO",
        company: "HireWise",
        platform: "twitter",
        date: "2026-01-12",
        website: "https://hirewise.ai",
        projectSpecs: "Seeking a developer to build an AI-powered recruitment platform — resume parsing, candidate scoring, interview scheduling, and hiring pipeline dashboard. Python backend + React frontend.",
        businessContext: "CEO of HireWise, building AI-driven recruitment tools to reduce hiring bias in tech companies.",
        tags: ["saas", "api", "dashboard"],
        sourceUrl: "https://x.com/danielpark_ai"
    },
    {
        name: "Sophie Delacroix",
        role: "Founder",
        company: "ArtVault",
        platform: "discord",
        date: "2026-01-10",
        website: "https://artvault.gallery",
        projectSpecs: "Looking for a web developer to build a digital art gallery platform — artist portfolios, virtual exhibition rooms, art sales with smart contracts, and collector management features.",
        businessContext: "Founder of ArtVault, bridging traditional art galleries with digital exhibition spaces.",
        tags: ["webapp", "ecommerce", "frontend"],
        sourceUrl: "https://discord.gg/arttech"
    },
    {
        name: "Omar Al-Rashid",
        role: "Co-Founder & CEO",
        company: "FreightSync",
        platform: "linkedin",
        date: "2026-01-08",
        website: "https://freightsync.com",
        projectSpecs: "Need a full-stack developer to build a freight management platform — shipment tracking, carrier rate comparison, document management, and logistics analytics dashboard.",
        businessContext: "Co-Founder of FreightSync, a logistics tech startup digitizing Middle East freight operations.",
        tags: ["fullstack", "dashboard", "saas"],
        sourceUrl: "https://linkedin.com"
    },
    {
        name: "Hannah Meyer",
        role: "Product Manager",
        company: "CareLink",
        platform: "reddit",
        date: "2026-01-05",
        website: "https://carelink.health",
        projectSpecs: "Seeking a developer to build a caregiver coordination platform — shift scheduling, patient records, medication tracking, family communication portal, and billing management.",
        businessContext: "Product Manager at CareLink, developing home healthcare coordination software for aging populations.",
        tags: ["webapp", "saas", "dashboard"],
        sourceUrl: "https://reddit.com/r/startups"
    },
    {
        name: "Ryan Mitchell",
        role: "Founder",
        company: "QuizForge",
        platform: "indiehackers",
        date: "2025-12-30",
        website: "https://quizforge.app",
        projectSpecs: "Building an interactive quiz platform for educators — quiz builder with drag-and-drop, student analytics, gamification features, and LMS integration. Need a React developer.",
        businessContext: "Solo founder of QuizForge, building gamified assessment tools for K-12 teachers.",
        tags: ["webapp", "frontend", "saas"],
        sourceUrl: "https://indiehackers.com"
    },
    {
        name: "Lena Voronova",
        role: "CEO",
        company: "TravelMesh",
        platform: "producthunt",
        date: "2025-12-28",
        website: "https://travelmesh.io",
        projectSpecs: "Looking for a developer to build a collaborative travel planning platform — itinerary builder, shared expenses, group voting on destinations, booking integrations, and real-time collaboration.",
        businessContext: "CEO of TravelMesh, reimagining group travel planning for millennials and Gen-Z travelers.",
        tags: ["webapp", "fullstack", "api"],
        sourceUrl: "https://producthunt.com"
    },
    {
        name: "Brian Tanaka",
        role: "Co-Founder",
        company: "SupplyPulse",
        platform: "twitter",
        date: "2025-12-25",
        website: "https://supplypulse.co",
        projectSpecs: "Need a developer to build a supply chain visibility dashboard — supplier scorecards, inventory forecasting, order tracking, risk alerts, and procurement workflow automation.",
        businessContext: "Co-Founder of SupplyPulse, providing real-time supply chain analytics for mid-market manufacturers.",
        tags: ["dashboard", "api", "saas"],
        sourceUrl: "https://x.com/brian_tanaka"
    },
    {
        name: "Chloe Beaumont",
        role: "Founder",
        company: "WellnessHub",
        platform: "medium",
        date: "2025-12-22",
        website: "https://wellnesshub.life",
        projectSpecs: "Seeking a developer to build a wellness marketplace — practitioner profiles, appointment booking, class scheduling, client intake forms, and subscription management.",
        businessContext: "Founder of WellnessHub, an all-in-one platform for independent wellness practitioners.",
        tags: ["webapp", "ecommerce", "saas"],
        sourceUrl: "https://medium.com/@chloe_beaumont"
    },
    {
        name: "Victor Andrade",
        role: "CTO",
        company: "PropelAI",
        platform: "github",
        date: "2025-12-20",
        website: "https://propelai.tech",
        projectSpecs: "Looking for a frontend developer to build an AI workflow automation dashboard — visual flow builder, model training status, API endpoint management, and usage analytics charts.",
        businessContext: "CTO of PropelAI, building no-code AI deployment tools for business analysts.",
        tags: ["dashboard", "frontend", "api"],
        sourceUrl: "https://github.com/propelai"
    },
    {
        name: "Isla MacLeod",
        role: "Founder",
        company: "LocalCraft",
        platform: "reddit",
        date: "2025-12-18",
        website: "https://localcraft.shop",
        projectSpecs: "Need a developer to build an artisan marketplace — product listings with 3D product viewer, seller dashboards, commission-based payment splitting, and local delivery zone management.",
        businessContext: "Founder of LocalCraft, an online marketplace connecting local artisans with consumers who prefer handmade goods.",
        tags: ["ecommerce", "fullstack", "webapp"],
        sourceUrl: "https://reddit.com/r/Entrepreneurs"
    }
];

// ─── State ──────────────────────────────
let activeFilter = 'all';
let currentSort = 'date-desc';
let currentView = 'grid';
let searchQuery = '';

// ─── DOM References ─────────────────────
const leadsContainer = document.getElementById('leadsContainer');
const noResults = document.getElementById('noResults');
const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');
const sortSelect = document.getElementById('sortSelect');
const platformFilters = document.getElementById('platformFilters');
const refreshBtn = document.getElementById('refreshBtn');

// ─── Avatar Color Generator ─────────────
const avatarColors = [
    'linear-gradient(135deg, #a78bfa, #7c3aed)',
    'linear-gradient(135deg, #38bdf8, #0284c7)',
    'linear-gradient(135deg, #34d399, #059669)',
    'linear-gradient(135deg, #fb923c, #ea580c)',
    'linear-gradient(135deg, #f472b6, #db2777)',
    'linear-gradient(135deg, #818cf8, #4f46e5)',
    'linear-gradient(135deg, #fbbf24, #d97706)',
    'linear-gradient(135deg, #a3e635, #65a30d)',
];

function getAvatarColor(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return avatarColors[Math.abs(hash) % avatarColors.length];
}

function getInitials(name) {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2);
}

// ─── Platform Icons ─────────────────────
const platformIcons = {
    reddit: '<i class="fab fa-reddit"></i>',
    twitter: '<i class="fab fa-x-twitter"></i>',
    linkedin: '<i class="fab fa-linkedin"></i>',
    indiehackers: '<i class="fas fa-rocket"></i>',
    producthunt: '<i class="fab fa-product-hunt"></i>',
    github: '<i class="fab fa-github"></i>',
    medium: '<i class="fab fa-medium"></i>',
    discord: '<i class="fab fa-discord"></i>',
};

const platformNames = {
    reddit: 'Reddit',
    twitter: 'Twitter/X',
    linkedin: 'LinkedIn',
    indiehackers: 'Indie Hackers',
    producthunt: 'Product Hunt',
    github: 'GitHub',
    medium: 'Medium',
    discord: 'Discord',
};

// ─── Tag Metadata ───────────────────────
const tagLabels = {
    mvp: 'MVP',
    saas: 'SaaS',
    dashboard: 'Dashboard',
    api: 'API',
    frontend: 'Frontend',
    fullstack: 'Full-Stack',
    ecommerce: 'E-commerce',
    webapp: 'Web App',
};

// ─── Date Helpers ───────────────────────
function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function getDaysAgo(dateStr) {
    const now = new Date('2026-02-27');
    const d = new Date(dateStr);
    const diff = Math.floor((now - d) / (1000 * 60 * 60 * 24));
    if (diff === 0) return 'Today';
    if (diff === 1) return '1 day ago';
    if (diff < 7) return `${diff} days ago`;
    if (diff < 30) return `${Math.floor(diff / 7)} week${Math.floor(diff / 7) > 1 ? 's' : ''} ago`;
    return `${Math.floor(diff / 30)} month${Math.floor(diff / 30) > 1 ? 's' : ''} ago`;
}

// ─── Card Renderer ──────────────────────
function renderCard(lead, index) {
    const initials = getInitials(lead.name);
    const avatarBg = getAvatarColor(lead.name);

    return `
        <div class="lead-card" style="animation-delay: ${index * 0.05}s">
            <div class="card-header">
                <div class="card-person">
                    <div class="person-avatar" style="background: ${avatarBg}">
                        ${initials}
                    </div>
                    <div class="person-info">
                        <div class="person-name">${lead.name}</div>
                        <div class="person-role">
                            <i class="fas fa-briefcase"></i>
                            ${lead.role} at ${lead.company}
                        </div>
                    </div>
                </div>
                <span class="platform-badge ${lead.platform}">
                    ${platformIcons[lead.platform]} ${platformNames[lead.platform]}
                </span>
            </div>

            <div class="card-body">
                <p class="card-project">${lead.projectSpecs}</p>
            </div>

            <div class="card-meta">
                <div class="meta-item">
                    <div class="meta-icon website"><i class="fas fa-globe"></i></div>
                    <span class="meta-label">Website</span>
                    <span class="meta-value">
                        <a href="${lead.website}" target="_blank" rel="noopener noreferrer">${lead.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}</a>
                    </span>
                </div>
                <div class="meta-item">
                    <div class="meta-icon date"><i class="fas fa-calendar"></i></div>
                    <span class="meta-label">Posted</span>
                    <span class="meta-value">${formatDate(lead.date)} · ${getDaysAgo(lead.date)}</span>
                </div>
                <div class="meta-item">
                    <div class="meta-icon context"><i class="fas fa-user-tie"></i></div>
                    <span class="meta-label">Context</span>
                    <span class="meta-value">${lead.businessContext}</span>
                </div>
            </div>

            <div class="card-tags">
                ${lead.tags.map(tag => `<span class="tag ${tag}">${tagLabels[tag] || tag}</span>`).join('')}
            </div>
        </div>
    `;
}

// ─── Filter & Sort Logic ────────────────
function getFilteredLeads() {
    let filtered = [...leads];

    // Platform filter
    if (activeFilter !== 'all') {
        filtered = filtered.filter(l => l.platform === activeFilter);
    }

    // Search filter
    if (searchQuery) {
        const q = searchQuery.toLowerCase();
        filtered = filtered.filter(l =>
            l.name.toLowerCase().includes(q) ||
            l.company.toLowerCase().includes(q) ||
            l.projectSpecs.toLowerCase().includes(q) ||
            l.businessContext.toLowerCase().includes(q) ||
            l.role.toLowerCase().includes(q) ||
            l.tags.some(t => tagLabels[t]?.toLowerCase().includes(q) || t.includes(q))
        );
    }

    // Sort
    switch (currentSort) {
        case 'date-desc':
            filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'date-asc':
            filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
            break;
        case 'name-asc':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            filtered.sort((a, b) => b.name.localeCompare(a.name));
            break;
    }

    return filtered;
}

// ─── Render All ─────────────────────────
function render() {
    const filtered = getFilteredLeads();

    if (filtered.length === 0) {
        leadsContainer.style.display = 'none';
        noResults.style.display = 'block';
    } else {
        leadsContainer.style.display = '';
        noResults.style.display = 'none';
        leadsContainer.innerHTML = filtered.map((lead, i) => renderCard(lead, i)).join('');
    }

    // Update view class
    leadsContainer.className = `leads-container${currentView === 'list' ? ' list-view' : ''}`;
}

// ─── Stats Counters ─────────────────────
function animateCounter(el, target) {
    let current = 0;
    const step = Math.ceil(target / 30);
    const interval = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(interval);
        }
        el.textContent = current;
    }, 30);
}

function updateStats() {
    const totalEl = document.getElementById('totalLeads');
    const platformEl = document.getElementById('platformCount');
    const freshEl = document.getElementById('freshLeads');
    const verifiedEl = document.getElementById('verifiedLeads');

    const total = leads.length;
    const platforms = new Set(leads.map(l => l.platform)).size;
    const sevenDaysAgo = new Date('2026-02-20');
    const fresh = leads.filter(l => new Date(l.date) >= sevenDaysAgo).length;
    const verified = leads.filter(l => l.website && !l.website.includes('linkedin.com')).length;

    animateCounter(totalEl, total);
    animateCounter(platformEl, platforms);
    animateCounter(freshEl, fresh);
    animateCounter(verifiedEl, verified);
}

// ─── Event Listeners ────────────────────

// Search
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    searchClear.classList.toggle('visible', searchQuery.length > 0);
    render();
});

searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    searchClear.classList.remove('visible');
    searchInput.focus();
    render();
});

// Platform filter
platformFilters.addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;

    platformFilters.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    activeFilter = chip.dataset.platform;
    render();
});

// Sort
sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    render();
});

// View toggle
document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentView = btn.dataset.view;
        render();
    });
});

// Refresh button
refreshBtn.addEventListener('click', () => {
    refreshBtn.classList.add('spinning');
    setTimeout(() => {
        refreshBtn.classList.remove('spinning');
        render();
        updateStats();
    }, 1000);
});

// Keyboard shortcut: / to focus search
document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput) {
        e.preventDefault();
        searchInput.focus();
    }
    if (e.key === 'Escape' && document.activeElement === searchInput) {
        searchInput.blur();
        searchInput.value = '';
        searchQuery = '';
        searchClear.classList.remove('visible');
        render();
    }
});

// ─── Initialize ─────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    render();
    updateStats();
});
