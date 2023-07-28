import { projectsData } from "@/data";
import { ProjectCard } from ".";

export function Projects() {
  return (
    <section id="projects" className="p-12">
      <h2 className="mb-12 text-5xl tracking-wide text-center lg:text-left">
        My Projects
      </h2>
      {projectsData.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </section>
  );
}
