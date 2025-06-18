// lib/projects.ts
export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    category: string;
    liveUrl: string;
    githubUrl: string;
    featured: boolean;
}

export interface ProjectDetails {
    title: string;
    description: string;
    longDescription: string;
    image: string;
    technologies: string[];
    features: string[];
    duration: string;
    team: string;
    role: string;
    liveUrl: string;
    githubUrl: string;
    gallery: string[];
}

export const projects: Project[] = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description:
            "Plateforme e-commerce complète avec gestion des commandes, paiements et tableau de bord admin",
        image: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
        technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
        category: "Fullstack",
        liveUrl: "#",
        githubUrl: "#",
        featured: true,
    },
    {
        id: 2,
        title: "Task Management App",
        description:
            "Application de gestion de tâches collaborative avec notifications en temps réel",
        image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
        technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
        category: "Fullstack",
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
    },
    {
        id: 3,
        title: "Weather Dashboard",
        description:
            "Dashboard météo interactif avec géolocalisation et prévisions détaillées",
        image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
        technologies: ["Vue.js", "Chart.js", "OpenWeather API"],
        category: "Frontend",
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
    },
    {
        id: 4,
        title: "API REST Blog",
        description:
            "API RESTful pour un système de blog avec authentification JWT et gestion des rôles",
        image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
        technologies: ["Express.js", "JWT", "MongoDB", "Swagger"],
        category: "Backend",
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
    },
    {
        id: 5,
        title: "Mobile Banking App",
        description:
            "Application bancaire mobile avec fonctionnalités de transfert et historique des transactions",
        image: "https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=800",
        technologies: ["React Native", "Redux", "Node.js", "PostgreSQL"],
        category: "Mobile",
        liveUrl: "#",
        githubUrl: "#",
        featured: true,
    },
    {
        id: 6,
        title: "Portfolio Website",
        description: "Site portfolio responsive avec animations et mode sombre",
        image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
        technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
        category: "Frontend",
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
    },
];

export const projectsData: { [key: string]: ProjectDetails } = {
    "1": {
        title: "E-Commerce Platform",
        description:
            "Plateforme e-commerce complète avec gestion des commandes, paiements et tableau de bord admin",
        longDescription: `Cette plateforme e-commerce moderne offre une expérience utilisateur exceptionnelle avec un design responsive et des fonctionnalités avancées. Elle comprend un système de gestion des produits, un panier d'achat intuitif, un processus de commande sécurisé et un tableau de bord administrateur complet.
  
      Le projet a été développé en utilisant les dernières technologies web pour assurer des performances optimales et une scalabilité maximale. L'architecture modulaire permet une maintenance facile et des extensions futures.`,
        image: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200",
        technologies: [
            "Next.js",
            "TypeScript",
            "Stripe",
            "PostgreSQL",
            "Tailwind CSS",
            "Prisma",
        ],
        features: [
            "Authentification utilisateur sécurisée",
            "Gestion complète des produits",
            "Panier d'achat et checkout",
            "Intégration Stripe pour les paiements",
            "Tableau de bord administrateur",
            "Notifications en temps réel",
            "Design responsive",
        ],
        duration: "3 mois",
        team: "4 développeurs",
        role: "Lead Developer",
        liveUrl: "#",
        githubUrl: "#",
        gallery: [
            "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
        ],
    },
    "2": {
        title: "Task Management App",
        description:
            "Application de gestion de tâches collaborative avec notifications en temps réel",
        longDescription: `Cette application permet aux équipes de collaborer efficacement sur des projets grâce à des fonctionnalités de gestion de tâches en temps réel. Les utilisateurs peuvent créer, assigner et suivre des tâches avec des notifications instantanées pour les mises à jour.
  
      Le projet utilise une architecture basée sur des WebSockets pour assurer une synchronisation rapide et une expérience utilisateur fluide, même avec plusieurs utilisateurs simultanés.`,
        image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
        technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
        features: [
            "Notifications en temps réel",
            "Gestion des tâches collaborative",
            "Tableau Kanban interactif",
            "Authentification utilisateur",
            "Historique des modifications",
        ],
        duration: "2 mois",
        team: "3 développeurs",
        role: "Frontend Developer",
        liveUrl: "#",
        githubUrl: "#",
        gallery: [
            "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
        ],
    },
    "3": {
        title: "Weather Dashboard",
        description:
            "Dashboard météo interactif avec géolocalisation et prévisions détaillées",
        longDescription: `Ce tableau de bord météo permet aux utilisateurs de consulter les prévisions météorologiques en temps réel grâce à l'intégration de l'API OpenWeather. Il offre une interface interactive avec des visualisations de données météorologiques et la prise en charge de la géolocalisation.
  
      Le projet met l'accent sur une expérience utilisateur intuitive avec des animations fluides et un design responsive adapté à tous les appareils.`,
        image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1200",
        technologies: ["Vue.js", "Chart.js", "OpenWeather API"],
        features: [
            "Prévisions météo en temps réel",
            "Géolocalisation automatique",
            "Graphiques interactifs",
            "Design responsive",
        ],
        duration: "1 mois",
        team: "2 développeurs",
        role: "Frontend Developer",
        liveUrl: "#",
        githubUrl: "#",
        gallery: [
            "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
        ],
    },
    "4": {
        title: "API REST Blog",
        description:
            "API RESTful pour un système de blog avec authentification JWT et gestion des rôles",
        longDescription: `Cette API RESTful fournit une infrastructure robuste pour un système de blog, avec des fonctionnalités d'authentification sécurisée via JWT, gestion des rôles (administrateur, éditeur, utilisateur) et documentation Swagger.
  
      L'API est conçue pour être scalable, avec une architecture claire et des endpoints optimisés pour une intégration facile avec des interfaces frontend.`,
        image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1200",
        technologies: ["Express.js", "JWT", "MongoDB", "Swagger"],
        features: [
            "Authentification JWT",
            "Gestion des rôles",
            "Documentation Swagger",
            "CRUD pour articles et commentaires",
        ],
        duration: "1.5 mois",
        team: "2 développeurs",
        role: "Backend Developer",
        liveUrl: "#",
        githubUrl: "#",
        gallery: [
            "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
        ],
    },
    "5": {
        title: "Mobile Banking App",
        description:
            "Application bancaire mobile avec fonctionnalités de transfert et historique des transactions",
        longDescription: `Cette application mobile permet aux utilisateurs de gérer leurs finances avec des fonctionnalités telles que les transferts d'argent, la consultation de l'historique des transactions et la gestion de comptes. Elle est conçue pour offrir une expérience utilisateur fluide et sécurisée.
  
      Le projet utilise React Native pour une compatibilité multiplateforme et une intégration backend robuste avec Node.js.`,
        image: "https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=1200",
        technologies: ["React Native", "Redux", "Node.js", "PostgreSQL"],
        features: [
            "Transferts d'argent sécurisés",
            "Historique des transactions",
            "Authentification biométrique",
            "Notifications push",
        ],
        duration: "4 mois",
        team: "5 développeurs",
        role: "Mobile Developer",
        liveUrl: "#",
        githubUrl: "#",
        gallery: [
            "https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=800",
        ],
    },
    "6": {
        title: "Portfolio Website",
        description: "Site portfolio responsive avec animations et mode sombre",
        longDescription: `Ce site portfolio met en avant mes projets avec un design moderne, des animations fluides grâce à Framer Motion, et un mode sombre pour une meilleure expérience utilisateur. Il est optimisé pour tous les appareils et offre une navigation intuitive.
  
      Le projet utilise Next.js pour un rendu rapide et Tailwind CSS pour un style cohérent et maintenable.`,
        image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200",
        technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
        features: [
            "Design responsive",
            "Animations fluides",
            "Mode sombre",
            "Optimisation SEO",
        ],
        duration: "1 mois",
        team: "1 développeur",
        role: "Fullstack Developer",
        liveUrl: "#",
        githubUrl: "#",
        gallery: [
            "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
        ],
    },
};
