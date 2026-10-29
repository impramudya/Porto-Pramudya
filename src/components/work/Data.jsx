import WorkBatchRelease from "../../assets/project-batchrelease.png";
import WorkSafess from "../../assets/project-safess.png";
import WorkSpPeruri from "../../assets/project-spperuri.png";
import WorkPkwtPeruri from "../../assets/project-pkwt.png";
import WorkFifoTrolley from "../../assets/project-fifotrolley.png";
import WorkWebDasar from "../../assets/project-webdasar.png";

export const projectsData = [
  {
    id: 1,
    image: WorkBatchRelease,
    title: "Batch Release System",
    category: "enterprise",
    categoryLabel: "Enterprise & QA",
    description:
      "Computerized QA batch release tracking and monitoring platform developed to support validation compliance, release audit trails, and quality workflow status.",
    technologies: ["Laravel", "MySQL", "Tailwind CSS", "Looker Studio"],
    link: "https://github.com/impramudya/BatchReleaseSystem",
  },
  {
    id: 2,
    image: WorkSafess,
    title: "Safess Project",
    category: "web",
    categoryLabel: "Web Platform",
    description:
      "Community incident reporting and safety management web platform featuring multi-role authentication, secure case triage, and administrative resolution workflows.",
    technologies: ["Laravel", "PHP", "Bootstrap 5", "MySQL"],
    link: "https://github.com/impramudya/safess-project",
  },
  {
    id: 3,
    image: WorkSpPeruri,
    title: "SP Peruri (Disciplinary Tracking)",
    category: "enterprise",
    categoryLabel: "Enterprise & QA",
    description:
      "Internal HR tracking and administrative compliance system developed during PERURI internship for managing employee disciplinary documentation and status records.",
    technologies: ["Laravel", "Inertia.js", "React.js", "MySQL"],
    link: "https://github.com/impramudya/sp-peruri",
  },
  {
    id: 4,
    image: WorkPkwtPeruri,
    title: "PKWT Peruri (Contract Management)",
    category: "enterprise",
    categoryLabel: "Enterprise & QA",
    description:
      "Fixed-term employment agreement (PKWT) management system built for the SDMO Department at PERURI to automate contract tracking, evaluation, and renewals.",
    technologies: ["Laravel", "Inertia.js", "React.js", "Tailwind CSS"],
    link: "https://github.com/impramudya/pkwt-peruri-v1",
  },
  {
    id: 5,
    image: WorkFifoTrolley,
    title: "FIFO Trolley Monitoring System",
    category: "enterprise",
    categoryLabel: "Production Control",
    description:
      "Web-based shop floor material tracking system built for Planning Production Control (PPC) at PT Inti Ganda Perdana to ensure first-in first-out trolley flow.",
    technologies: ["PHP Native", "MySQL", "DBeaver", "Bootstrap"],
    link: "https://github.com/impramudya/Intern-FIFO-Trolley-v1",
  },
  {
    id: 6,
    image: WorkWebDasar,
    title: "Dicoding Web Fundamentals",
    category: "web",
    categoryLabel: "Web Platform",
    description:
      "Interactive responsive digital book catalog application featuring dynamic DOM manipulation, responsive styling, and web storage for Dicoding Academy certification.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
    link: "https://github.com/impramudya/Practice-WebDasar",
  },
];

export const projectsNav = [
  { name: "All", filter: "all" },
  { name: "Enterprise & QA", filter: "enterprise" },
  { name: "Web Platforms", filter: "web" },
];
