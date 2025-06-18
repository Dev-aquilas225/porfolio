"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github, Folder, Filter } from "lucide-react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/projects";

const categories = ["Tous", "Frontend", "Backend", "Fullstack", "Mobile"];

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

export default function ProjetsPage() {
    const [selectedCategory, setSelectedCategory] = useState("Tous");

    const filteredProjects =
        selectedCategory === "Tous"
            ? projects
            : projects.filter(
                  (project) => project.category === selectedCategory,
              );

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
                        Une sélection de mes réalisations les plus
                        représentatives
                    </p>
                </motion.div>

                {/* Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-2 mb-12"
                >
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={
                                selectedCategory === category
                                    ? "default"
                                    : "outline"
                            }
                            onClick={() => setSelectedCategory(category)}
                            className={`${
                                selectedCategory === category
                                    ? "bg-portfolio-yellow hover:bg-portfolio-orange text-portfolio-black"
                                    : "border-portfolio-yellow hover:bg-portfolio-yellow hover:text-portfolio-black"
                            }`}
                        >
                            <Filter className="w-4 h-4 mr-2" />
                            {category}
                        </Button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={fadeInUp}
                            layout
                            className="group"
                        >
                            <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-border hover:border-portfolio-yellow overflow-hidden">
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={400}
                                        height={240}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    {project.featured && (
                                        <Badge className="absolute top-3 right-3 bg-portfolio-orange text-portfolio-black">
                                            Mis en avant
                                        </Badge>
                                    )}
                                </div>

                                <CardHeader>
                                    <CardTitle className="group-hover:text-portfolio-yellow transition-colors">
                                        {project.title}
                                    </CardTitle>
                                    <p className="text-muted-foreground text-sm">
                                        {project.description}
                                    </p>
                                </CardHeader>

                                <CardContent>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map(
                                            (tech, index) => (
                                                <Badge
                                                    key={index}
                                                    variant="secondary"
                                                    className="bg-portfolio-yellow/10 text-portfolio-yellow text-xs"
                                                >
                                                    {tech}
                                                </Badge>
                                            ),
                                        )}
                                    </div>
                                </CardContent>

                                <CardFooter className="flex gap-2">
                                    <Link
                                        href={`/projets/${project.id}`}
                                        className="flex-1"
                                    >
                                        <Button className="w-full bg-portfolio-yellow hover:bg-portfolio-orange text-portfolio-black">
                                            Voir détails
                                        </Button>
                                    </Link>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="border-portfolio-yellow hover:bg-portfolio-yellow hover:text-portfolio-black"
                                    >
                                        <Github className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="border-portfolio-yellow hover:bg-portfolio-yellow hover:text-portfolio-black"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                    </Button>
                                </CardFooter>
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
                        Un projet en tête ?
                    </h2>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Je suis toujours à la recherche de nouveaux défis.
                        Discutons de votre projet !
                    </p>
                    <Link href="/contact">
                        <Button
                            size="lg"
                            className="bg-portfolio-orange hover:bg-portfolio-yellow text-portfolio-black"
                        >
                            Contactez-moi
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
