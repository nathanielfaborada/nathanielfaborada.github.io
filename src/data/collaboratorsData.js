export const COLLABORATORS_MAP = {
  raecellann: {
    login: "raecellann",
    name: "raecellann",
    role: "Capstone Contributor",
    project: "Immaculearn",
    avatar_url: "https://github.com/raecellann.png?size=160",
    html_url: "https://github.com/raecellann",
  },
  Wesmabe1129: {
    login: "Wesmabe1129",
    name: "Wesmabe1129",
    role: "Capstone Contributor",
    project: "Immaculearn",
    avatar_url: "https://github.com/Wesmabe1129.png?size=160",
    html_url: "https://github.com/Wesmabe1129",
  },
  zjdelossantos: {
    login: "zjdelossantos",
    name: "zjdelossantos",
    role: "Capstone Contributor",
    project: "Immaculearn",
    avatar_url: "https://github.com/zjdelossantos.png?size=160",
    html_url: "https://github.com/zjdelossantos",
  },
  "johnpaul-bodino": {
    login: "johnpaul-bodino",
    name: "johnpaul-bodino",
    role: "Project Contributor",
    project: "Threads Clone",
    avatar_url: "https://github.com/johnpaul-bodino.png?size=160",
    html_url: "https://github.com/johnpaul-bodino",
  },
  DietherPano: {
    login: "DietherPano",
    name: "DietherPano",
    role: "Full-Stack Contributor",
    project: "Threads Clone & Logistics",
    avatar_url: "https://github.com/DietherPano.png?size=160",
    html_url: "https://github.com/DietherPano",
  },
  Genniesysbracia: {
    login: "Genniesysbracia",
    name: "Genniesysbracia",
    role: "Project Contributor",
    project: "Threads Clone",
    avatar_url: "https://github.com/Genniesysbracia.png?size=160",
    html_url: "https://github.com/Genniesysbracia",
  },
  Nahiwagaan: {
    login: "Nahiwagaan",
    name: "Nahiwagaan",
    role: "Project Contributor",
    project: "Threads Clone",
    avatar_url: "https://github.com/Nahiwagaan.png?size=160",
    html_url: "https://github.com/Nahiwagaan",
  },
  JabbyAlicante: {
    login: "JabbyAlicante",
    name: "JabbyAlicante",
    role: "Internship Contributor",
    project: "JCAS Logistics",
    avatar_url: "https://github.com/JabbyAlicante.png?size=160",
    html_url: "https://github.com/JabbyAlicante",
  },
  beatricecoleene: {
    login: "beatricecoleene",
    name: "beatricecoleene",
    role: "Internship Contributor",
    project: "JCAS Logistics",
    avatar_url: "https://github.com/beatricecoleene.png?size=160",
    html_url: "https://github.com/beatricecoleene",
  },
  sudonotrey: {
    login: "sudonotrey",
    name: "sudonotrey",
    role: "Internship Contributor",
    project: "JCAS Logistics",
    avatar_url: "https://github.com/sudonotrey.png?size=160",
    html_url: "https://github.com/sudonotrey",
  },
  Haimonmon: {
    login: "Haimonmon",
    name: "Haimonmon",
    role: "Internship Contributor",
    project: "JCAS Logistics",
    avatar_url: "https://github.com/Haimonmon.png?size=160",
    html_url: "https://github.com/Haimonmon",
  },
  lykhasalustiano: {
    login: "lykhasalustiano",
    name: "lykhasalustiano",
    role: "Internship Contributor",
    project: "JCAS Logistics",
    avatar_url: "https://github.com/lykhasalustiano.png?size=160",
    html_url: "https://github.com/lykhasalustiano",
  },
};

export const GITHUB_GROUPS = [
  {
    label: "College Thesis Capstone",
    projectTag: "Immaculearn",
    users: ["raecellann", "Wesmabe1129", "zjdelossantos"],
  },
  {
    label: "Threads Clone",
    projectTag: "RESTful API & Social Client",
    users: ["johnpaul-bodino", "DietherPano", "Genniesysbracia", "Nahiwagaan"],
  },
  {
    label: "Internship",
    projectTag: "JCAS Logistics",
    users: [
      "JabbyAlicante",
      "beatricecoleene",
      "sudonotrey",
      "Haimonmon",
      "lykhasalustiano",
      "DietherPano",
    ],
  },
];

export const GITHUB_USERS = [...new Set(GITHUB_GROUPS.flatMap((g) => g.users))];

export const FEATURED_COLLABORATORS = GITHUB_USERS.slice(0, 3).map(
  (username) => COLLABORATORS_MAP[username]
);

export const STATIC_ORGANIZATIONS = [
  {
    id: "college-of-mary-immaculate",
    login: "college-of-mary-immaculate",
    name: "College of Mary Immaculate",
    description: "Academic institution and Computer Science department repositories.",
    visibility_type: "Public",
    repos_count: null,
    avatar_url: "https://github.com/college-of-mary-immaculate.png?size=160",
    html_url: "https://github.com/college-of-mary-immaculate",
  },
  {
    id: "Jenather-Auto-Shop",
    login: "Jenather-Auto-Shop",
    name: "Jenather Auto Shop",
    description: "Web-based vehicle inventory and service management system.",
    visibility_type: "Public",
    repos_count: null,
    avatar_url: "https://github.com/Jenather-Auto-Shop.png?size=160",
    html_url: "https://github.com/Jenather-Auto-Shop",
  },
  {
    id: "Immaculearn",
    login: "Immaculearn",
    name: "Immaculearn",
    description: "Collaborative learning management system thesis capstone.",
    visibility_type: "Public",
    repos_count: null,
    avatar_url: "https://github.com/Immaculearn.png?size=160",
    html_url: "https://github.com/Immaculearn",
  },
  {
    id: "sudo-spill-rate",
    login: "sudo-spill-rate",
    name: "SpillRate (sudo-spill-rate)",
    description: "Database-driven feedback and rating platform with anti-spam cooldown protection.",
    visibility_type: "Public",
    repos_count: null,
    avatar_url: "https://github.com/sudo-spill-rate.png?size=160",
    html_url: "https://github.com/sudo-spill-rate",
  },
  {
    id: "Treads-Clone",
    login: "Treads-Clone",
    name: "Threads Clone",
    description: "RESTful social platform API and client implementation.",
    visibility_type: "Public",
    repos_count: null,
    avatar_url: "https://github.com/Treads-Clone.png?size=160",
    html_url: "https://github.com/Treads-Clone",
  },
];

export const GITHUB_ORGANIZATIONS = STATIC_ORGANIZATIONS.map((org) => org.login);
