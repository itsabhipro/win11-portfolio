export type Project = {
  id: string;
  name: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
  icon: string;
  color: string;
  category: "featured" | "vercel" | "backend" | "other";
};

export const projects: Project[] = [
  {
    id: "field",
    name: "Field Service Manager",
    description: "Digitize field operations for technicians and office staff — jobs, schedules, and status.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/itsabhipro/Field-work-manager",
    icon: "🛠️",
    color: "from-sky-500 to-blue-700",
    category: "featured",
  },
  {
    id: "carbon",
    name: "Carbon & ESG Tracker",
    description: "Multi-country Scope 1–3 emissions, ESG scorecards, and reporting dashboards.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/itsabhipro/carbon-footprint-esg-tracker",
    icon: "🌍",
    color: "from-emerald-500 to-teal-700",
    category: "featured",
  },
  {
    id: "privacy",
    name: "Privacy Analytics",
    description: "GDPR / EU AI Act consent, data subject requests, processing records, and audit log.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/itsabhipro/privacy-first-analytics-dashboard",
    icon: "🛡️",
    color: "from-indigo-500 to-violet-700",
    category: "featured",
  },
  {
    id: "reports",
    name: "Report Generator",
    description: "Bills, invoices, quotations & service reports with logo, emblem, signature, and address.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/itsabhipro/report-generator",
    icon: "📄",
    color: "from-cyan-500 to-blue-600",
    category: "featured",
  },
  {
    id: "mahavir",
    name: "Mahavir Mobile",
    description: "Live Next.js deployment for Mahavir (production on Vercel).",
    stack: ["Next.js", "Vercel"],
    live: "https://mahavir-mobile.vercel.app",
    github: "https://github.com/itsabhipro/mahavir-printing-press",
    icon: "📱",
    color: "from-orange-500 to-red-600",
    category: "vercel",
  },
  {
    id: "bang",
    name: "Bang",
    description: "Web platform previously deployed on Vercel.",
    stack: ["JavaScript", "Vercel"],
    live: "https://bang-lcnjrf7mv-itsabhipro.vercel.app",
    github: "https://github.com/itsabhipro/bang",
    icon: "💥",
    color: "from-pink-500 to-rose-700",
    category: "vercel",
  },
  {
    id: "pms",
    name: "Project Management",
    description: "Planning & tracking with ASP.NET Core, Blazor WASM, and Azure SQL.",
    stack: ["ASP.NET Core", "Blazor", "Azure SQL"],
    github: "https://github.com/itsabhipro/project-management-system",
    icon: "📋",
    color: "from-blue-600 to-indigo-800",
    category: "backend",
  },
  {
    id: "fleet",
    name: "Fleet Management",
    description: "Vehicle fleet operations with ASP.NET Core, EF Core, Blazor, and REST APIs.",
    stack: ["ASP.NET Core", "Blazor", "REST"],
    github: "https://github.com/itsabhipro/fleet-management-system",
    icon: "🚛",
    color: "from-slate-600 to-slate-800",
    category: "backend",
  },
  {
    id: "banking",
    name: "Open Banking Platform",
    description: "Cross-border open banking aligned with PSD2/PSD3 and secure API integrations.",
    stack: ["APIs", "Security"],
    github: "https://github.com/itsabhipro/cross-border-open-banking-platform",
    icon: "🏦",
    color: "from-amber-500 to-yellow-700",
    category: "backend",
  },
  {
    id: "ai-docs",
    name: "AI Document Intelligence",
    description: "Document intelligence platform with eIDAS-oriented compliance considerations.",
    stack: ["AI", "Azure"],
    github: "https://github.com/itsabhipro/ai-document-intelligence-platform",
    icon: "🤖",
    color: "from-purple-500 to-fuchsia-700",
    category: "backend",
  },
  {
    id: "location",
    name: "Live Location Tracker",
    description: "Real-time location tracking built with React Native.",
    stack: ["React Native"],
    github: "https://github.com/itsabhipro/live-location-tracker",
    icon: "📍",
    color: "from-green-500 to-lime-700",
    category: "other",
  },
];

export const profile = {
  name: "Abhishek Kumar",
  title: "Full Stack Developer",
  location: "Kuwait · Open to Europe (EU Blue Card)",
  email: "itsabhipro@outlook.com",
  github: "https://github.com/itsabhipro",
  linkedin: "https://linkedin.com/in/abhishek-kumar-172900382",
  bio: "6+ years building production web apps with .NET, Next.js, Azure, and modern frontends. Focus on clean architecture, privacy, and field operations systems.",
  skills: {
    Frontend: ["Next.js", "React", "TypeScript", "Tailwind", "Blazor"],
    Backend: ["ASP.NET Core", "C#", "Node.js", "REST APIs"],
    Data: ["SQL Server", "PostgreSQL", "Supabase", "Azure SQL"],
    Cloud: ["Azure", "Docker", "Vercel", "Git"],
  },
};
