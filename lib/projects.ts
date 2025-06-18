export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    type: string;
    company?: string;
    location?: string;
    date?: string;
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
    team?: string;
    role: string;
    location?: string;
    date?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Développeur Backend",
        description: "Développement d'API pour les projets, déploiement direct sur le serveur, et intégration d'API externes.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop",
        technologies: ["Node.js", "Express", "PostgreSQL", "REST API", "Docker"],
        type: "Professional",
        company: "Illimigroup",
        location: "Rivera palmeraie, Abidjan",
        date: "24 Janvier 2025 → 24 Avril 2025",
        featured: true,
    },
    {
        id: 2,
        title: "Développeur Fullstack",
        description: "Contribution au développement d'applications web innovantes en utilisant des technologies frontend et backend modernes.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
        technologies: ["React", "Node.js", "MongoDB", "JavaScript", "CSS"],
        type: "Professional",
        company: "cabinenet",
        location: "Freelance, Abidjan",
        date: "Mai 2024 → Novembre 2024",
        featured: false,
    },
    {
        id: 3,
        title: "Stage École pour BTS",
        description: "Développement d'une plateforme de prise de rendez-vous médicale en ligne.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        type: "Professional",
        company: "ORW GROUP",
        location: "Koumassie, Abidjan",
        date: "Octobre 2023 → 27 Avril 2024",
        featured: false,
    },
    {
        id: 4,
        title: "Licence en réseau et génie logiciel",
        description: "Formation en cours axée sur les réseaux informatiques et le développement de logiciels.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
        technologies: ["Networking", "Software Development", "Java", "Linux", "System Administration"],
        type: "Educational",
        company: "Pigier CI",
        location: "Abidjan, Plateau",
        date: "2021 → present",
        featured: false,
    },
    {
        id: 5,
        title: "BTS en informatique développeur d'application",
        description: "Formation technique en développement d'applications avec un focus sur la programmation.",
        image: "https://images.unsplash.com/photo-1551287616-0404a80b5e2e?q=80&w=2070&auto=format&fit=crop",
        technologies: ["JavaScript", "HTML/CSS", "Python", "Database Management", "App Development"],
        type: "Educational",
        company: "Pigier CI",
        location: "Abidjan, Plateau",
        date: "2023",
        featured: false,
    },
    {
        id: 6,
        title: "Certificat spécialiste en Microsoft Office",
        description: "Certification professionnelle sur l'utilisation avancée des outils Microsoft Office.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
        technologies: ["Microsoft Word", "Excel", "PowerPoint", "Office Automation", "Data Analysis"],
        type: "Educational",
        company: "Pigier CI",
        location: "Abidjan, Plateau",
        date: "2021",
        featured: false,
    },
];

export const projectsData: { [key: string]: ProjectDetails } = {
    "1": {
        title: "Développeur Backend",
        description: "Développement d'API pour les projets, déploiement direct sur le serveur, et intégration d'API externes.",
        longDescription: `Mission chez Illimigroup impliquant le développement d'API robustes pour divers projets internes. Les tâches incluaient le déploiement direct sur les serveurs, l'optimisation des performances, et l'intégration d'API externes pour enrichir les fonctionnalités. Le projet a nécessité une coordination étroite avec les équipes pour assurer une livraison dans les délais.`,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
        technologies: ["Node.js", "Express", "PostgreSQL", "REST API", "Docker"],
        features: [
            "Développement d'API sécurisées",
            "Déploiement serveur",
            "Intégration d'API externes",
            "Optimisation des performances",
        ],
        duration: "3 mois",
        role: "Développeur Backend",
        location: "Rivera palmeraie, Abidjan",
        date: "24 Janvier 2025 → 24 Avril 2025",
    },
    "2": {
        title: "Développeur Fullstack",
        description: "Contribution au développement d'applications web innovantes en utilisant des technologies frontend et backend modernes.",
        longDescription: `Projet freelance pour cabinenet impliquant le développement d'applications web fullstack. Les responsabilités incluaient la création d'interfaces utilisateur modernes avec React, la gestion backend avec Node.js, et l'intégration de bases de données MongoDB, le tout dans un environnement collaboratif et innovant.`,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
        technologies: ["React", "Node.js", "MongoDB", "JavaScript", "CSS"],
        features: [
            "Développement frontend et backend",
            "Intégration MongoDB",
            "Interface utilisateur moderne",
            "Collaboration freelance",
        ],
        duration: "7 mois",
        role: "Développeur Fullstack",
        location: "Freelance, Abidjan",
        date: "Mai 2024 → Novembre 2024",
    },
    "3": {
        title: "Stage École pour BTS",
        description: "Développement d'une plateforme de prise de rendez-vous médicale en ligne.",
        longDescription: `Stage effectué chez ORW GROUP dans le cadre de la formation BTS, axé sur la création d'une plateforme de prise de rendez-vous médicale. Le projet a impliqué le développement d'une interface web basique et la gestion d'une base de données pour stocker les rendez-vous, offrant une première expérience pratique en développement.`,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        features: [
            "Plateforme de rendez-vous",
            "Gestion de base de données",
            "Interface web basique",
            "Expérience pratique",
        ],
        duration: "6 mois",
        role: "Stagiaire Développeur",
        location: "Koumassie, Abidjan",
        date: "Octobre 2023 → 27 Avril 2024",
    },
    "4": {
        title: "Licence en réseau et génie logiciel",
        description: "Formation en cours axée sur les réseaux informatiques et le développement de logiciels.",
        longDescription: `Formation en cours à Pigier CI, se concentrant sur les réseaux informatiques et le développement logiciel. Cette licence offre une base solide en administration système, programmation, et gestion des réseaux, avec des projets pratiques pour renforcer les compétences techniques.`,
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
        technologies: ["Networking", "Software Development", "Java", "Linux", "System Administration"],
        features: [
            "Cours sur les réseaux",
            "Développement logiciel",
            "Projets pratiques",
            "Administration système",
        ],
        duration: "Ongoing (since 2021)",
        role: "Étudiant",
        location: "Abidjan, Plateau",
        date: "2021 → present",
    },
    "5": {
        title: "BTS en informatique développeur d'application",
        description: "Formation technique en développement d'applications avec un focus sur la programmation.",
        longDescription: `Formation BTS à Pigier CI axée sur le développement d'applications, offrant une introduction approfondie à la programmation et à la gestion de bases de données. Le programme incluait des projets pratiques pour développer des compétences en développement d'applications web et mobiles.`,
        image: "https://images.unsplash.com/photo-1551287616-0404a80b5e2e?q=80&w=1200&auto=format&fit=crop",
        technologies: ["JavaScript", "HTML/CSS", "Python", "Database Management", "App Development"],
        features: [
            "Programmation avancée",
            "Gestion de bases de données",
            "Projets d'application",
            "Développement web",
        ],
        duration: "2 ans",
        role: "Étudiant",
        location: "Abidjan, Plateau",
        date: "2023",
    },
    "6": {
        title: "Certificat spécialiste en Microsoft Office",
        description: "Certification professionnelle sur l'utilisation avancée des outils Microsoft Office.",
        longDescription: `Certification obtenue à Pigier CI, couvrant l'utilisation avancée de Microsoft Word, Excel, et PowerPoint. Cette formation a permis de maîtriser les outils de productivité et d'analyse de données, utiles pour des tâches administratives et de gestion de projets.`,
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
        technologies: ["Microsoft Word", "Excel", "PowerPoint", "Office Automation", "Data Analysis"],
        features: [
            "Maîtrise de Word",
            "Analyse de données avec Excel",
            "Présentations PowerPoint",
            "Automatisation Office",
        ],
        duration: "3 mois",
        role: "Étudiant",
        location: "Abidjan, Plateau",
        date: "2021",
    },
};