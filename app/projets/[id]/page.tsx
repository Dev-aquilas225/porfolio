// app/projets/[id]/page.tsx
import { projects, projectsData } from "@/lib/projects";
import ProjectDetailClient from "@/components/ProjectDetailClient";

interface ProjectDetailPageProps {
    params: { id: string };
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id.toString(),
    }));
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
    const project = projectsData[params.id] || null;
    return <ProjectDetailClient project={project} />;
}
