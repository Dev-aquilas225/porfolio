"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Folder } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
    {
        id: "1",
        title: "Développeur Backend",
        company: "Illimigroup",
        location: "Rivera palmeraie, Abidjan",
        date: "24 Janvier 2025 → 24 Avril 2025",
        description: "Développement d'API pour les projets, déploiement direct sur le serveur, et intégration d'API externes.",
        technologies: ["Node.js", "Express", "PostgreSQL", "REST API", "Docker"],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "2",
        title: "Développeur Fullstack",
        company: "cabinenet",
        location: "Freelance, Abidjan",
        date: "Mai 2024 → Novembre 2024",
        description: "Contribution au développement d'applications web innovantes en utilisant des technologies frontend et backend modernes.",
        technologies: ["React", "Node.js", "MongoDB", "JavaScript", "CSS"],
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "3",
        title: "Stage École pour BTS",
        company: "ORW GROUP",
        location: "Koumassie, Abidjan",
        date: "Octobre 2023 → 27 Avril 2024",
        description: "Développement d'une plateforme de prise de rendez-vous médicale en ligne.",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop"
    }
];

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export default function ExperiencesPage() {
    return (
        <div className="min-h-screen pt-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-portfolio-yellow to-portfolio-orange rounded-full flex items-center justify-center">
                        <Folder className="w-8 h-8 text-portfolio-black" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-portfolio-yellow to-portfolio-orange bg-clip-text text-transparent">
                            Mes Projets
                        </span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Un aperçu de mes expériences professionnelles significatives
                    </p>
                </motion.div>

                {/* Experiences Timeline */}
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="relative"
                >
                    {/* Timeline line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-portfolio-yellow to-portfolio-orange hidden md:block"></div>

                    {experiences.map((experience) => (
                        <motion.div
                            key={experience.id}
                            variants={fadeInUp}
                            className="relative mb-12 md:ml-16"
                        >
                            {/* Timeline dot */}
                            <div className="absolute -left-20 top-6 w-4 h-4 bg-portfolio-yellow rounded-full border-4 border-background hidden md:block"></div>

                            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-border hover:border-portfolio-yellow overflow-hidden">
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={experience.image}
                                        alt={`${experience.title} image`}
                                        width={400}
                                        height={240}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>

                                <CardHeader>
                                    <CardTitle className="group-hover:text-portfolio-yellow transition-colors">
                                        {experience.title}
                                    </CardTitle>
                                    <p className="text-muted-foreground text-sm">
                                        {experience.company} - {experience.location}
                                    </p>
                                    <p className="text-muted-foreground text-sm">
                                        {experience.date}
                                    </p>
                                </CardHeader>

                                <CardContent>
                                    <p className="text-muted-foreground mb-4">
                                        {experience.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {experience.technologies.map((tech, index) => (
                                            <Badge
                                                key={index}
                                                variant="secondary"
                                                className="bg-portfolio-yellow/10 text-portfolio-yellow text-xs"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mt-20 p-8 rounded-2xl bg-gradient-to-r from-portfolio-yellow/10 via-portfolio-orange/10 to-portfolio-yellow/10"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Une nouvelle opportunité ?
                    </h2>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Je suis ouvert à de nouvelles collaborations.
                        Contactez-moi pour discuter !
                    </p>
                </motion.div>
            </div>
        </div>
    );
}