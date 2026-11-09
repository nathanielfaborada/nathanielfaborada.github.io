export const PROJECTS_DATA = [
  {
    id: "immaculearn",
    category: "organization",
    categoryLabel: "College Thesis Capstone",
    featured: true,
    featuredLabel: "Flagship Capstone",
    project_date: "Apr 2026",
    headline: "Immaculearn: Collaborative Learning Management System",
    description:
      "Immaculearn is a learning management system built as an academic thesis capstone for educational institutions. It provides three dedicated role portals (administrators, professors, and students) featuring course workspaces, quiz authoring, document collaboration, class schedules, and grade management.",
    notice:
      "Interested in evaluating the full deployment? Contact faboradanathaniel@gmail.com to request access credentials.",
    contributions: [
      "Engineered role-segregated portals for administrators, professors, and students with strict permission controls.",
      "Built backend REST APIs connecting Brevo transactional mail services for automated student and faculty invitation onboarding.",
      "Designed relational database schemas and queries in Supabase PostgreSQL and MySQL for coursework tracking, submissions, and announcements.",
      "Structured system data flows across Level 0 to Level 2 Data Flow Diagrams prior to backend implementation.",
    ],
    tags: ["JavaScript", "Node.js", "Express.js", "Supabase", "PostgreSQL", "MySQL", "Brevo API"],
    screenshots: [],
    stars: null,
  },
  {
    id: "spill-rate",
    category: "organization",
    categoryLabel: "Organization Project",
    featured: false,
    project_date: "Nov 2026",
    headline: "SpillRate: Customer Feedback & Rating System",
    description:
      "SpillRate is a customer feedback and rating system built with Node.js, Express, and Supabase (PostgreSQL). It delivers automated sequential slug generation for registered businesses, aggregate rating analytics, and a database-level anti-spam engine enforcing a strict 24-hour review cooldown per business.",
    contributions: [
      "Architected a modular Express REST API backed by Supabase PostgreSQL for business registration and customer review collection.",
      "Built a database-driven 24-hour review cooldown combining client IP address checking and device fingerprinting to stop review flooding across incognito windows and cache clears.",
      "Engineered automated sequential slug generation (e.g. business-00001) for clean, human-readable permalinks.",
      "Implemented cursor-based pagination for real-time customer review streams and calculated live star distribution breakdowns.",
    ],
    tags: ["Node.js", "Express.js", "Supabase", "PostgreSQL", "React 19", "Fingerprinting"],
    screenshots: [],
    stars: null,
  },
  {
    id: "ai-driven-post-creator",
    category: "personal",
    categoryLabel: "Personal Project",
    featured: false,
    project_date: "Nov 2026",
    headline: "Multi-Platform Social Media AI Automation Engine",
    description:
      "A 24/7 automation engine built with Node.js powering scheduled content creation, Telegram video reels ingestion, automated cross-posting to Facebook Reels, YouTube Shorts, and TikTok, and contextual AI comment auto-responses across production channels.",
    contributions: [
      "Engineered automated cross-posting pipelines connecting Facebook Reels (Meta Graph API v26.0), YouTube Shorts (YouTube Data API v3), and TikTok Content Posting API v2.",
      "Constructed Telegram long-polling ingest workers that stream vertical video files directly from content creator drops into processing pipelines.",
      "Integrated a multi-key Google Gemini AI pool to generate SEO captions, relevant hashtags, and contextual comment replies.",
      "Structured data persistence across Supabase PostgreSQL for persistent FIFO queue states and evergreen content archives.",
    ],
    tags: ["Node.js", "Google Gemini AI", "Meta Graph API", "YouTube Data API", "TikTok API", "Supabase"],
    screenshots: [],
    stars: null,
  },
  {
    id: "tagasugo",
    category: "personal",
    categoryLabel: "Personal Project",
    featured: false,
    project_date: "Oct 2026",
    headline: "Tagasugo: Facebook Page Content Scheduler",
    description:
      "Tagasugo is a social media management application designed for Facebook Pages. It coordinates automated post publishing and video uploads through the Meta Graph API v24.0, featuring real-time publishing status updates over WebSockets and a React 19 single-page dashboard.",
    contributions: [
      "Integrated Meta Graph API v24.0 and Facebook Pages API for automated post dispatching, video uploads, and permission verification.",
      "Developed a Node.js and Express backend with Supabase PostgreSQL to manage queued publishing jobs and automated content recycling schedules.",
      "Implemented Socket.io WebSocket connections to stream real-time publishing progress and sync states to the client dashboard.",
      "Built the single-page application dashboard with React 19, Vite, and Tailwind CSS following a high-density utility layout.",
    ],
    tags: ["React 19", "Node.js", "Express.js", "Socket.io", "Supabase", "Meta Graph API"],
    screenshots: [],
    stars: null,
  },
  {
    id: "fapabrabo",
    category: "organization",
    categoryLabel: "Organization Project",
    featured: false,
    project_date: "Sep 2026",
    headline: "FAPABRABO: Video Games Search Engine",
    description:
      "A specialized search engine that indexes, classifies, and retrieves video game content and news from scattered gaming platforms into a unified discovery interface. Engineered as an academic team project with data scraping and TF-IDF search indexing.",
    contributions: [
      "Served as Search Engineer, designing and implementing TF-IDF (Term Frequency-Inverse Document Frequency) text retrieval and ranking algorithms for relevant search results.",
      "Structured data pipelines preprocessing crawled HTML text from RAWG and gaming news sources into normalized tokenized dictionaries.",
      "Collaborated with data engineers and ML classifiers on MongoDB database storage schema design and search query endpoints.",
      "Integrated backend search routines with a modern React 19 and TypeScript web interface built with Vite.",
    ],
    tags: ["React 19", "TypeScript", "Vite", "MongoDB", "Puppeteer", "Information Retrieval", "TF-IDF"],
    screenshots: [],
    stars: null,
  },
  {
    id: "invitr",
    category: "personal",
    categoryLabel: "Personal Project",
    featured: false,
    project_date: "Aug 2026",
    headline: "Invitr: Digital Invitation & RSVP Tracking System",
    description:
      "Invitr is a digital invitation and live attendee management platform built with Laravel, Tailwind CSS, and Alpine.js. Event hosts can design branded invitations, distribute personalized guest links, and track real-time RSVPs without requiring attendees to register accounts.",
    contributions: [
      "Engineered unique guest link routing (/invite/{unique_code}) granting attendees instant, passwordless RSVP access with companion management.",
      "Built a host management dashboard providing live attendance polling for confirmed, declined, and pending headcounts without page reloads.",
      "Integrated Brevo HTTP REST API via Symfony Mailer to handle reliable transactional invitation emails bypassing SMTP cloud timeouts.",
      "Implemented attendee CSV export routines equipped with protection against formula injection attacks.",
    ],
    tags: ["Laravel", "PHP", "Tailwind CSS", "Alpine.js", "MySQL", "Brevo API"],
    screenshots: [],
    stars: null,
  },
  {
    id: "vscode-git-profile-switch",
    category: "personal",
    categoryLabel: "Personal Project",
    featured: false,
    project_date: "Jul 2026",
    headline: "Git Profile & Workspace Sync (VS Code Extension)",
    description:
      "A published Visual Studio Code extension that allows developers managing multiple GitHub accounts on a single machine to switch commit author details, push credentials, and workspace project directories with a single status bar click.",
    contributions: [
      "Built extension logic to update Git config author names, emails, and credential helper logins dynamically without manual terminal commands.",
      "Implemented workspace directory partitioning under PortableGit/<account> to keep personal, academic, and client repositories isolated on disk.",
      "Integrated VS Code SecretStorage API to safely store GitHub Personal Access Tokens and authenticate private repository syncing.",
      "Added automatic profile switching triggered by active workspace folder detection.",
    ],
    tags: ["TypeScript", "VS Code Extension API", "Git CLI", "Node.js"],
    screenshots: [],
    stars: null,
  },
  {
    id: "antigravity-usage-monitor",
    category: "personal",
    categoryLabel: "Personal Project",
    featured: false,
    project_date: "Jun 2026",
    headline: "Antigravity Usage Monitor (VS Code Extension)",
    description:
      "A published developer tool for Visual Studio Code that monitors API token limits directly in the editor status bar. It provides five-hour and weekly quota breakdowns, daily budget estimates, and customizable quota reset alarms with audio alerts.",
    contributions: [
      "Constructed status bar indicator integrations polling remaining token quotas and displaying rate-limit ceilings on hover.",
      "Implemented a reset alarm notification system with audio triggers alerting developers when API quotas refresh.",
      "Secured API credential handshakes using Windows Credential Manager storage integration.",
      "Packaged and published official VSIX extension builds targeting Windows x64 developer workstations.",
    ],
    tags: ["TypeScript", "VS Code Extension API", "Node.js", "Windows Credential Manager"],
    screenshots: [],
    stars: null,
  },
  {
    id: "appsdev-newyork-times",
    category: "personal",
    categoryLabel: "Personal Project",
    featured: false,
    project_date: "Sep 2024",
    headline: "New York Times News App (YorkNew)",
    description:
      "A responsive news aggregator consuming live editorial articles from the New York Times REST API. Displays articles across Science and Best Sellers categories using a custom retro-pixel interface.",
    contributions: [
      "Integrated New York Times REST API endpoints for Top Stories and Best Seller book feeds.",
      "Built asynchronous data fetching routines in vanilla JavaScript with graceful fallback handling.",
      "Styled responsive article and book overview cards with a custom retro-pixel CSS aesthetic.",
    ],
    tags: ["JavaScript", "NYT REST API", "HTML5", "CSS3", "Pixel UI"],
    screenshots: [],
    stars: null,
  },
];

export const HAS_CERTIFICATES = PROJECTS_DATA.some((project) => {
  const cat = (project.category || "").toLowerCase();
  return cat === "certificate" || cat === "certificates";
});

const BASE_CATEGORY_FILTERS = [
  { key: "all", label: "All Projects" },
  { key: "personal", label: "Personal Projects" },
  { key: "organization", label: "Organization" },
  { key: "internship", label: "Internship" },
  { key: "certificates", label: "Certificates" },
];

export const CATEGORY_FILTERS = BASE_CATEGORY_FILTERS.filter(
  (filter) => filter.key !== "certificates" || HAS_CERTIFICATES
);
