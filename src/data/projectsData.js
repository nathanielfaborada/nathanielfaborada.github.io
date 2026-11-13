export const PROJECTS_DATA = [
  // ==========================================
  // SECTION 1: ORGANIZATION & CAPSTONE PROJECTS
  // ==========================================
  {
    id: "spill-rate",
    category: "organization",
    categoryLabel: "Organization Project",
    featured: true,
    featuredLabel: "Featured Project",
    project_date: "Nov 2026",
    headline: "SpillRate: Community Business Rating & Moderation Platform",
    description:
      "Designed for local brick-and-mortar businesses that need an authentic way to collect customer reviews without worrying about fake accounts or review bombing. Provides neighborhood merchants with verified storefront profiles, instant QR code feedback collection, and live sentiment analytics.",
    contributions: [
      "Engineered an automated anti-spam verification engine utilizing IP logging and 24-hour device cooldowns, preventing bot review flooding and rating manipulation for registered merchants.",
      "Developed dynamic merchant storefront profiles with real-time QR code generation, enabling physical walk-in customers to scan and submit verified feedback in under 30 seconds.",
      "Implemented TanStack Query infinite scrolling and optimistic UI state updates, delivering sub-second search and review feed load times across high-volume business listings.",
      "Integrated secure Google OAuth 2.0 authentication, Cloudinary image upload pipelines for receipt verification, and PostgreSQL analytics dashboards tracking rating trends and visitor volume.",
    ],
    tags: ["React 19", "Node.js", "Express.js", "Supabase", "PostgreSQL", "Tailwind CSS", "TanStack Query", "Google OAuth"],
    screenshots: [],
    source_code_url: "https://github.com/sudo-spill-rate",
    stars: null,
  },
  {
    id: "immaculearn",
    category: "organization",
    categoryLabel: "Capstone Project, College of Mary Immaculate",
    featured: true,
    featuredLabel: "Featured Capstone",
    project_date: "Aug 2026",
    headline: "Immaculearn: Collaborative Learning Management System",
    description:
      "Built to replace scattered spreadsheets and messy group chats with an all-in-one digital campus portal for College of Mary Immaculate. Gives teachers, students, and school administrators dedicated dashboards to deliver lessons, take quizzes, view grades, and publish campus announcements in one place.",
    contributions: [
      "Architected modular backend REST APIs and relational MySQL database schemas supporting Role-Based Access Control (RBAC) across 3 distinct user roles (Administrators, Faculty, Students).",
      "Engineered core academic tools including interactive quiz builders, automated grade calculations, structured course content repositories, and instant campus announcement feeds.",
      "Developed responsive React front-end dashboards with client-side state caching, cutting down page reload overhead and ensuring accessibility for non-technical educators on desktop and mobile devices.",
      "Implemented secure session authentication and payload validation middleware to protect sensitive student records and academic submissions against unauthorized access.",
    ],
    tags: ["React", "Node.js", "Express.js", "MySQL", "JavaScript", "REST APIs"],
    screenshots: [],
    source_code_url: "https://github.com/Immaculearn",
    stars: null,
  },
  {
    id: "gamegle-search-engine",
    category: "organization",
    categoryLabel: "Academic Project, College of Mary Immaculate",
    featured: false,
    project_date: "Oct 2025",
    headline: "Gamegle: Natural Language Processing Gaming Search Engine",
    description:
      "Collaborative Natural Language Processing gaming search engine and information indexing platform built at College of Mary Immaculate (Team FAPABRABO) using Python FastAPI, MongoDB, TF-IDF vectorization, and React.",
    contributions: [
      "Co-engineered Python FastAPI backend services with PyMongo and MongoDB for game catalog ingestion, query cleaning, and search routing.",
      "Implemented TF-IDF text representation, n-gram tokenization, and cosine similarity ranking pipelines for gaming titles and descriptions.",
      "Developed responsive React and TypeScript frontend modules including Gamegle homepage search, publisher directories, and top-ranked results views.",
    ],
    tags: ["Python", "FastAPI", "MongoDB", "NLP", "TF-IDF", "React", "TypeScript", "Tailwind CSS"],
    screenshots: [],
    source_code_url: "https://github.com/college-of-mary-immaculate/FAPABRABO",
    stars: null,
  },
  {
    id: "conexus-threads-clone",
    category: "organization",
    categoryLabel: "Academic Team Project, College of Mary Immaculate",
    featured: false,
    project_date: "Nov 2024",
    headline: "Conexus: Threads Social Media Platform Clone",
    description:
      "Collaborative full-stack social networking platform modeled after Meta Threads for College of Mary Immaculate (Team Jenapaul-Thergen). Features a decoupled architecture with a modern single-page frontend (SPA) and a RESTful backend API for thread feeds, profile creation, and interactive like interactions.",
    contributions: [
      "Co-engineered frontend single-page architecture using React, Vite, and Axios with custom thread feeds and optimistic state updates.",
      "Integrated decoupled RESTful endpoints with the Jenapaul-ther-API backend service for user authentication, posts, profile discovery, and real-time like toggles.",
      "Collaborated with team developers on responsive UI layouts, clean component hierarchy, and API request error boundaries.",
    ],
    tags: ["React", "Vite", "JavaScript", "REST APIs", "Node.js", "Express.js", "Social Media"],
    screenshots: [],
    source_code_url: "https://github.com/Treads-Clone",
    stars: null,
  },
  {
    id: "jenather-auto-shop",
    category: "organization",
    categoryLabel: "Collaborative Project, Jenather Auto Shop",
    featured: false,
    project_date: "Oct 2024",
    headline: "Jenather Auto Shop: Automotive Parts Catalog & Admin Inventory System",
    description:
      "Full-stack automotive service and parts catalog system featuring vehicle brand storefronts (Honda, Suzuki), customer record tracking, and a PHP & MySQL admin dashboard for inventory management.",
    contributions: [
      "Engineered backend inventory management modules, relational database schema, and customer record tracking using PHP and MySQL.",
      "Developed responsive storefront catalog pages for vehicle spare parts and maintenance services with custom CSS styling.",
      "Implemented administrative authentication, user role controls, and inventory stock calculation utilities.",
    ],
    tags: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Inventory System"],
    screenshots: [],
    source_code_url: "https://github.com/Jenather-Auto-Shop/Jenather_Admin",
    stars: null,
  },

  // ==========================================
  // SECTION 2: PERSONAL & FLAGSHIP PROJECTS
  // ==========================================
  {
    id: "content-scheduler",
    category: "personal",
    categoryLabel: "Personal Project",
    featured: true,
    featuredLabel: "Featured Project",
    project_date: "Nov 2026",
    headline: "Tagasugo (Content Scheduler): Cloud Video Storage & Page Scheduling System",
    description:
      "Built to eliminate the daily chore of manual video uploading for content creators and social media page managers. Delivers a centralized cloud video vault and automated publishing engine that schedules and distributes video posts to Facebook Pages 24/7 on autopilot.",
    contributions: [
      "Engineered a scalable cloud media repository utilizing Supabase Storage and Multer, supporting multipart MP4 uploads, folder hierarchy navigation, and automated file renaming.",
      "Integrated official Facebook Graph API endpoints to automate scheduled publishing, recurring looper queues, and live post feed monitoring across multiple managed business pages.",
      "Built real-time upload progress tracking via Socket.IO and automated background scheduling workers, allowing operators to queue weeks of video content in advance with zero manual intervention.",
      "Architected Supabase PostgreSQL queue tables with timestamp indexing and retry handlers, ensuring zero dropped publishing tasks during high-concurrency posting schedules.",
    ],
    tags: ["React 19", "Node.js", "Express.js", "Supabase Storage", "Tailwind CSS", "Socket.IO", "Multer", "Facebook Graph API"],
    screenshots: [],
    source_code_url: "https://github.com/nathanielfaborada",
    stars: null,
  },
  {
    id: "vscode-git-profile-switch",
    category: "personal",
    categoryLabel: "Developer Tool",
    featured: false,
    project_date: "Nov 2026",
    headline: "Git Profile & Workspace Sync: VS Code Developer Extension",
    description:
      "VS Code developer productivity extension that automates switching between multiple GitHub profiles, Git commit identities, and workspace repository directories in one click.",
    contributions: [
      "Engineered one-click status bar profile switcher dynamically updating local Git config user identity and push credentials without identity mismatch.",
      "Built automatic repository organization engine categorizing disk repositories into profile-isolated directories with zero credential collisions.",
      "Integrated secure secret storage using the VS Code SecretStorage API for encrypted Personal Access Token persistence.",
      "Packaged and published extension VSIX build supporting automated workspace detection and multi-account GitHub synchronization.",
    ],
    tags: ["VS Code Extension", "TypeScript", "Node.js", "Git Automation", "VS Code API"],
    screenshots: [],
    source_code_url: "https://github.com/nathanielfaborada/vscode-git-profile-switch",
    stars: null,
  },
  {
    id: "keynest",
    category: "personal",
    categoryLabel: "Personal Project",
    featured: false,
    project_date: "Oct 2026",
    headline: "KeyNest: Privacy-First Offline Password Manager PWA",
    description:
      "A privacy-first, offline password manager Progressive Web App with client-side encryption, secure local storage via IndexedDB, and zero cloud dependency.",
    contributions: [
      "Built client-side AES cryptographic vault supporting credential CRUD, password generator, and categorized search without network transmission.",
      "Implemented inactivity auto-locking, encrypted vault backup and export, and offline recovery code validation.",
      "Configured service worker offline caching for reliable installation and standalone usage across desktop and mobile browsers.",
    ],
    tags: ["React", "JavaScript", "PWA", "IndexedDB", "Web Crypto API", "Tailwind CSS"],
    screenshots: [],
    source_code_url: "https://github.com/nathanielfaborada/KeyNest",
    stars: null,
  },
  {
    id: "storm-cast",
    category: "personal",
    categoryLabel: "Personal Project",
    featured: false,
    project_date: "Oct 2026",
    headline: "StormCast PH: Meteorological Intelligence & Typhoon Tracking Platform",
    description:
      "Open-access Philippine meteorological intelligence, real-time typhoon tracking, and community disaster preparedness web platform built with React 19 and Vite.",
    contributions: [
      "Built live meteorological dashboard consuming public weather feeds to display real-time typhoon tracking, barometric trends, and rainfall alerts.",
      "Engineered mobile-responsive UI with accessibility controls and emergency contact directories for local disaster response units.",
      "Implemented SEO-optimized metadata and breadcrumb hierarchy compliant with search indexing standards.",
    ],
    tags: ["React 19", "React Router", "Vite", "Tailwind CSS", "REST APIs"],
    screenshots: [],
    source_code_url: "https://github.com/nathanielfaborada/storm-cast",
    stars: null,
  },
  {
    id: "ai-driven-post-creator",
    category: "personal",
    categoryLabel: "Personal Project",
    featured: false,
    project_date: "Oct 2026",
    headline: "Social Media Automation Engine: AI-Assisted Content Publisher",
    description:
      "Production-grade content automation backend built with Node.js and Google Gemini that powers scheduled social post generation, video ingestion, and multi-channel publishing.",
    contributions: [
      "Integrated Google Gemini API for contextual text generation and automated post formatting across scheduled time slots.",
      "Engineered multi-channel publishing pipelines using Facebook Graph API and Node.js scheduling workers.",
      "Persisted media queue status and publication logs in Supabase PostgreSQL for auditing and error recovery.",
    ],
    tags: ["Node.js", "Express.js", "Google Gemini", "Supabase", "REST APIs", "Node-Schedule"],
    screenshots: [],
    source_code_url: "https://github.com/nathanielfaborada/ai-driven-post-creator",
    stars: null,
  },
  {
    id: "antigravity-usage-monitor",
    category: "personal",
    categoryLabel: "Personal Utility",
    featured: false,
    project_date: "Oct 2026",
    headline: "Antigravity Usage Monitor: VS Code Developer Extension",
    description:
      "VS Code status bar extension that tracks active Antigravity CLI quota limits, hourly reset times, and daily token budgets directly inside the developer editor.",
    contributions: [
      "Engineered status bar integration reading encrypted session credentials from Windows Credential Manager via native bindings.",
      "Implemented real-time hover widgets showing weekly token limits, quota consumption velocity, and reset alarms.",
      "Packaged and published local VSIX builds optimized for low-overhead background polling.",
    ],
    tags: ["VS Code Extension", "JavaScript", "Node.js", "Windows API"],
    screenshots: [],
    source_code_url: "https://github.com/nathanielfaborada/antigravity-usage-monitor",
    stars: null,
  },
  {
    id: "invitr",
    category: "personal",
    categoryLabel: "Personal Project",
    featured: true,
    featuredLabel: "Featured Project",
    project_date: "Aug 2026",
    headline: "Invitr: Digital Invitation & RSVP System",
    description:
      "Replaces expensive paper stationery and stressful RSVP follow-ups with interactive digital event invitations for weddings and corporate gatherings. Enables guests to view venue maps, confirm attendance online, and receive automated email reminders with real-time headcount tracking for organizers.",
    contributions: [
      "Developed responsive digital event portals with interactive live countdown timers, integrated Google Maps venue navigation, and mobile-first RSVP submission forms.",
      "Integrated Brevo SMTP email automation pipelines to dispatch instant RSVP confirmations, QR check-in passes, and automated event reminders directly to attendee inboxes.",
      "Architected a Laravel 12 and MySQL organizer dashboard tracking live headcount tallies, meal preferences, and attendance statuses with 1-click CSV roster export capability.",
      "Authored automated feature and unit test suites using PHPUnit, ensuring robust data validation, zero regressions across RSVP submissions, and secure database migrations.",
    ],
    tags: ["Laravel 12", "PHP", "Blade", "MySQL", "Tailwind CSS", "Alpine.js", "Brevo SMTP", "PHPUnit"],
    screenshots: [],
    source_code_url: "https://github.com/nathanielfaborada/laravel-digital-invitation-rsvp-system",
    stars: null,
  },
  {
    id: "utang-mo-app",
    category: "personal",
    categoryLabel: "Personal Project",
    featured: false,
    project_date: "Jul 2026",
    headline: "Utang Mo: Offline Sari-Sari Store Customer Credit Ledger",
    description:
      "Offline-first mobile and web application built with React and Capacitor for tracking small retail customer credit balances and repayment records via on-device storage.",
    contributions: [
      "Engineered offline persistence using IndexedDB, allowing complete ledger tracking without active internet connectivity.",
      "Built clean transaction entry interfaces for recording debtor names, itemized tabs, payment dates, and outstanding balances.",
      "Configured Capacitor wrappers for packaging and compiling native Android application builds.",
    ],
    tags: ["React", "Capacitor", "IndexedDB", "JavaScript", "Tailwind CSS"],
    screenshots: [],
    source_code_url: "https://github.com/nathanielfaborada/utang-mo-app",
    stars: null,
  },
  {
    id: "attendance-api",
    category: "personal",
    categoryLabel: "Backend Project",
    featured: false,
    project_date: "Feb 2025",
    headline: "Attendance API: Express REST Service for Identity & Event Tracking",
    description:
      "Backend REST service engineered with Node.js, Express.js, and MySQL for recording, validating, and retrieving student and personnel attendance timestamps.",
    contributions: [
      "Constructed relational database schema in MySQL for structured user identity and check-in log records.",
      "Engineered RESTful endpoints with input validation, CORS protection, and request logging with Morgan.",
      "Built database connection pooling to handle concurrent attendance check-in requests efficiently.",
    ],
    tags: ["Node.js", "Express.js", "MySQL", "REST APIs", "Backend"],
    screenshots: [],
    source_code_url: "https://github.com/nathanielfaborada/attendance-api",
    stars: null,
  },
];

export const HAS_CERTIFICATES = false;

const BASE_CATEGORY_FILTERS = [
  { key: "all", label: "All Projects" },
  { key: "organization", label: "Capstone & Organizations" },
  { key: "personal", label: "Personal Projects" },
];

export const CATEGORY_FILTERS = BASE_CATEGORY_FILTERS;
