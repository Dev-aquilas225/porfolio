// components/ProjectDetailClient.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    ExternalLink,
    Github,
    Calendar,
    Users,
    Code,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ProjectDetails } from "@/lib/projects";

interface ProjectDetailClientProps {
    project: ProjectDetails | null;
}

export default function ProjectDetailClient({
    project,
}: ProjectDetailClientProps) {
    if (!project) {
        return (
            <div className="min-h-screen pt-20 px-4 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">
                        Projet non trouvé
                    </h1>
                    <Link href="/projets">
                        <Button>Retour aux projets</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-20 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Navigation */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <Link href="/projets">
                        <Button
                            variant="outline"
                            className="border-portfolio-yellow hover:bg-portfolio-yellow hover:text-portfolio-black"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Retour aux projets
                        </Button>
                    </Link>
                </motion.div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-portfolio-yellow to-portfolio-orange bg-clip-text text-transparent">
                            {project.title}
                        </span>
                    </h1>
                    <p className="text-xl text-muted-foreground mb-6">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button className="bg-portfolio-yellow hover:bg-portfolio-orange text-portfolio-black">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Voir le site
                        </Button>
                        <Button
                            variant="outline"
                            className="border-portfolio-yellow hover:bg-portfolio-yellow hover:text-portfolio-black"
                        >
                            <Github className="w-4 h-4 mr-2" />
                            Code source
                        </Button>
                    </div>
                </motion.div>

                {/* Main Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12"
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={500}
                        className="w-full h-[400px] object-cover rounded-2xl border border-border"
                    />
                </motion.div>

                {/* Project Info */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h2 className="text-2xl font-bold mb-4">
                                Description du projet
                            </h2>
                            <div className="prose prose-lg text-muted-foreground">
                                {project.longDescription
                                    .split("\n\n")
                                    .map((paragraph: string, index: number) => (
                                        <p key={index} className="mb-4">
                                            {paragraph.trim()}
                                        </p>
                                    ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-8"
                        >
                            <h2 className="text-2xl font-bold mb-4">
                                Fonctionnalités principales
                            </h2>
                            <ul className="space-y-2">
                                {project.features.map(
                                    (feature: string, index: number) => (
                                        <li
                                            key={index}
                                            className="flex items-center"
                                        >
                                            <div className="w-2 h-2 bg-portfolio-yellow rounded-full mr-3"></div>
                                            <span className="text-muted-foreground">
                                                {feature}
                                            </span>
                                        </li>
                                    ),
                                )}
                            </ul>
                        </motion.div>
                    </div>

                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Code className="w-5 h-5 mr-2 text-portfolio-yellow" />
                                        Technologies
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map(
                                            (tech: string, index: number) => (
                                                <Badge
                                                    key={index}
                                                    variant="secondary"
                                                    className="bg-portfolio-yellow/10 text-portfolio-yellow"
                                                >
                                                    {tech}
                                                </Badge>
                                            ),
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle>Détails du projet</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center">
                                        <Calendar className="w-5 h-5 mr-3 text-portfolio-yellow" />
                                        <div>
                                            <p className="font-medium">Durée</p>
                                            <p className="text-sm text-muted-foreground">
                                                {project.duration}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Users className="w-5 h-5 mr-3 text-portfolio-yellow" />
                                        <div>
                                            <p className="font-medium">
                                                Équipe
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                {project.team}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Code className="w-5 h-5 mr-3 text-portfolio-yellow" />
                                        <div>
                                            <p className="font-medium">Rôle</p>
                                            <p className="text-sm text-muted-foreground">
                                                {project.role}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>

                {/* Gallery */}
                {project.gallery && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="mb-12"
                    >
                        <h2 className="text-2xl font-bold mb-6">Galerie</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {project.gallery.map(
                                (image: string, index: number) => (
                                    <Image
                                        key={index}
                                        src={image}
                                        alt={`${project.title} - Image ${
                                            index + 1
                                        }`}
                                        width={300}
                                        height={200}
                                        className="w-full h-48 object-cover rounded-lg border border-border hover:scale-105 transition-transform cursor-pointer"
                                    />
                                ),
                            )}
                        </div>
                    </motion.div>
                )}

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center p-8 rounded-2xl bg-gradient-to-r from-portfolio-yellow/10 via-portfolio-orange/10 to-portfolio-yellow/10"
                >
                    <h2 className="text-2xl font-bold mb-4">
                        Intéressé par ce type de projet ?
                    </h2>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Je peux vous aider à créer des solutions similaires
                        adaptées à vos besoins
                    </p>
                    <Link href="/contact">
                        <Button
                            size="lg"
                            className="bg-portfolio-orange hover:bg-portfolio-yellow text-portfolio-black"
                        >
                            Discutons de votre projet
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
