export const PROJECTS_DATA = [
  // ==========================================
  // SECTION 1: ORGANIZATION & CAPSTONE PROJECTS
  // ==========================================
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
      "Built for gamers and enthusiasts who struggle to discover video game titles through standard web queries clogged with sponsored ads and generic results. Delivers a dedicated, ad-free gaming search platform combining high-coverage automated web crawlers with natural language query matching to surface games by genre, platform, and title description.",
    contributions: [
      "Engineered an automated data extraction engine using Puppeteer and Cheerio with randomized user-agent rotation and anti-bot headers to compile structured video game catalogs.",
      "Built a Python text preprocessing pipeline featuring contraction expansion, stopword filtering, number normalization, and n-gram tokenization to clean search queries.",
      "Implemented a custom TF-IDF (Term Frequency-Inverse Document Frequency) scoring model in Python to index game descriptions and rank query relevance.",
      "Developed responsive React 19, TypeScript, and Vite search interfaces featuring real-time query inputs, publisher navigation, and mobile-friendly catalog cards.",
    ],
    tags: ["React 19", "TypeScript", "Vite", "Python", "TF-IDF", "Puppeteer", "Cheerio", "NLP"],
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
      "Created for campus communities and student networks seeking a lightweight, distraction-free conversational feed modeled after Meta Threads. Provides users with dedicated personal profile pages, instant micro-blog post publishing, and interactive social feeds without algorithmic bloat.",
    contributions: [
      "Architected a decoupled Node.js and Express REST API backend featuring modular controllers, route guards, and relational MySQL schemas across user profiles, threads, and follows.",
      "Engineered secure user authentication and session security utilizing JWT tokens, Bcrypt password hashing, and input validation middleware to protect member accounts.",
      "Implemented Multer and Cloudinary image upload workflows alongside optimistic UI updates for real-time thread publishing, like toggling, and follower tracking.",
      "Developed responsive single-page application interfaces using React and Vite with custom modular CSS layouts tailored for mobile and desktop screens.",
    ],
    tags: ["React", "Vite", "Node.js", "Express.js", "MySQL", "JWT", "Cloudinary", "Multer"],
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
      "Built for independent auto repair shops and spare parts retailers struggling with misplaced paper ledgers, untracked inventory levels, and disorganized customer service records. Gives shop owners a unified digital management dashboard to monitor vehicle parts stock, track customer histories, and showcase vehicle brands online.",
    contributions: [
      "Engineered a relational MySQL database schema and PHP backend tracking vehicle spare parts stock, unit pricing, manufacturer brands, and body configurations.",
      "Built administrative inventory workflows with dynamic stock replenishment forms, automatic quantity calculations, and Cloudinary vehicle photo preview uploads.",
      "Developed customer service record tracking modules allowing mechanics and shop administrators to review client vehicle maintenance histories in one place.",
      "Designed responsive management storefront interfaces with custom CSS styling and client-side JavaScript tab navigation for swift in-shop counter lookups.",
    ],
    tags: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Cloudinary", "Inventory Management"],
    screenshots: [],
    source_code_url: "https://github.com/Jenather-Auto-Shop/Jenather_Admin",
    stars: null,
  },

  // ==========================================
  // SECTION 2: PERSONAL PROJECTS
  // ==========================================
  {
    id: "spill-rate",
    category: "personal",
    categoryLabel: "Personal Project",
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
    id: "storm-cast",
    category: "personal",
    categoryLabel: "Personal Project",
    featured: false,
    project_date: "Oct 2026",
    headline: "StormCast PH: Meteorological Intelligence & Typhoon Tracking Platform",
    description:
      "Built for Philippine coastal communities, local emergency responders, and commuters who need immediate, clear weather alerts during severe tropical cyclones without navigating cluttered government bulletins. Delivers live meteorological radar feeds, storm track projections, and local emergency hotline directories in an accessible, low-bandwidth interface.",
    contributions: [
      "Architected a high-performance weather dashboard using React 19 and React Router v7, featuring live radar embeds, atmospheric pressure charts, and rainfall intensity warnings.",
      "Engineered an automated Static Site Generation (SSG) pre-rendering pipeline in Node.js, compiling static HTML routes to achieve near-instant initial page loads during bandwidth-constrained storms.",
      "Implemented Schema.org JSON-LD meteorological structured data and Open Graph metadata compliant with Google AdSense quality and SEO indexing requirements.",
      "Designed a high-contrast dark meteorological theme with accessible touch controls and emergency hotlines optimized for low-end mobile devices in disaster zones.",
    ],
    tags: ["React 19", "React Router v7", "Vite", "Node.js SSG", "Tailwind CSS", "REST APIs", "SEO"],
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
    headline: "Nano Facts: 24/7 Multi-Channel Social Media Automation Engine",
    description:
      "Engineered for solo content creators and digital publishing brands that spend dozens of hours every week manually downloading video assets, drafting captions, and scheduling posts across platforms. Powers a fully automated 24/7 media pipeline that ingests educational science videos from Telegram, archives them into cloud storage, and publishes scheduled short-form reels to Facebook and YouTube on autopilot.",
    contributions: [
      "Built an automated video ingestion worker listening across 10 Telegram science channels, categorizing media into Supabase Storage buckets and indexing items into PostgreSQL queue tables.",
      "Integrated Meta Graph API v26.0 chunked video uploads for Facebook Reels and Google APIs resumable video uploads for YouTube Shorts, scheduled across tier-1 high-CPM viewer windows.",
      "Implemented Google Gemini generative AI pipelines to craft educational captions with hook formatting, accompanied by human-paced comment auto-responders (40-75s delay) to boost engagement.",
      "Architected webhook-driven Facebook Messenger bots and automated evergreen content recycling algorithms with minimum interval caps to protect channel reputation.",
    ],
    tags: ["Node.js", "Express.js", "Google Gemini", "Supabase", "Meta Graph API", "YouTube Data API", "PostgreSQL"],
    screenshots: [],
    source_code_url: "https://github.com/nathanielfaborada/ai-driven-post-creator",
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
      "Designed specifically for Filipino sari-sari store owners and market stall vendors who rely on fragile paper notebooks that can be misplaced, soaked, or torn to record customer credit tabs (utang). Provides an offline-first digital balance ledger that works 100% without internet, keeping retail customer balances accurate, organized, and secure on any Android phone.",
    contributions: [
      "Engineered an offline-first transactional storage layer utilizing native browser IndexedDB with indexed stores for customer profiles and itemized credit/payment logs.",
      "Built responsive debt tracking interfaces supporting instant customer searches, running balance updates, partial payment logging, and itemized debt receipts.",
      "Integrated 1-click JSON backup and data export utilities, ensuring store owners can safeguard and restore customer transaction history without cloud subscription costs.",
      "Configured Capacitor build pipelines to compile native Android APKs with responsive touch targets and zero-lag performance on entry-level smartphones.",
    ],
    tags: ["React", "Capacitor", "Android", "IndexedDB", "JavaScript", "Tailwind CSS", "Offline-First"],
    screenshots: [],
    source_code_url: "https://github.com/nathanielfaborada/utang-mo-app",
    stars: null,
  },

  // ==========================================
  // SECTION 3: DEVELOPER TOOLS & EXTENSIONS
  // ==========================================
  {
    id: "vscode-git-profile-switch",
    category: "tools",
    categoryLabel: "Developer Tool",
    featured: false,
    project_date: "Nov 2026",
    headline: "Git Profile & Workspace Sync: VS Code Developer Extension",
    description:
      "Built for software engineers, freelancers, and students managing multiple GitHub accounts (such as personal, corporate, and academic) on a single workstation who frequently commit code under the wrong email or face push permission rejections. Delivers a seamless 1-click status bar switcher that instantly synchronizes local Git config identities, GitHub push credentials, and project folders on disk.",
    contributions: [
      "Engineered a status bar switcher that dynamically rewrites local Git configuration (`user.name`, `user.email`) and GitHub push authentication without manual terminal commands.",
      "Integrated secure Personal Access Token (PAT) persistence utilizing the VS Code SecretStorage API, eliminating insecure plain-text credentials in settings files.",
      "Built an automated disk organization engine that sorts workspace repositories into account-isolated directory structures (`PortableGit/<account>/`) without disturbing `.env` files or dependencies.",
      "Packaged and published local VSIX builds supporting GitHub Octokit repo auto-cloning, workspace account detection, and real-time active profile verification.",
    ],
    tags: ["VS Code Extension", "TypeScript", "Node.js", "VS Code API", "Git Automation", "Octokit"],
    screenshots: [],
    source_code_url: "https://github.com/nathanielfaborada/vscode-git-profile-switch",
    stars: null,
  },
  {
    id: "antigravity-usage-monitor",
    category: "tools",
    categoryLabel: "Developer Tool",
    featured: false,
    project_date: "Oct 2026",
    headline: "Antigravity Usage Monitor: VS Code Developer Extension",
    description:
      "Created for AI engineers and developers who run coding agents and heavy AI workloads through the Antigravity CLI and frequently hit unexpected quota lockouts in the middle of complex tasks. Embeds a silent, real-time quota monitor into the VS Code status bar to track 5-hour and weekly AI token limits, countdown timers, and daily consumption budgets.",
    contributions: [
      "Engineered background HTTP polling workers that read encrypted session tokens directly from Windows Credential Manager, bypassing noisy terminal or CLI sub-processes.",
      "Developed interactive status bar items and hover tooltips showing remaining quota percentages, local time zone reset countdowns, and daily budget pacing metrics.",
      "Built persistent audio reset alarms with configurable repeat intervals, snooze options, and volume sliders to alert developers when quotas refresh.",
      "Implemented intelligent error recovery with exponential backoff retry algorithms to handle network jitter without freezing editor performance.",
    ],
    tags: ["VS Code Extension", "JavaScript", "Node.js", "Windows API", "VS Code API"],
    screenshots: [],
    source_code_url: "https://github.com/nathanielfaborada/antigravity-usage-monitor",
    stars: null,
  },
];

export const HAS_CERTIFICATES = false;

const BASE_CATEGORY_FILTERS = [
  { key: "all", label: "All Projects" },
  { key: "organization", label: "Capstone & Organizations" },
  { key: "personal", label: "Personal Projects" },
  { key: "tools", label: "Developer Tools" },
];

export const CATEGORY_FILTERS = BASE_CATEGORY_FILTERS;
