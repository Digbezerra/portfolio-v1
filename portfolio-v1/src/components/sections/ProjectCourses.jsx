import { GithubIcon } from "../icons/GithubIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import { FolderIcon } from "../icons/FolderIcon";
import { ProjectCard } from "../ProjectCard";

export function ProjectCourses() {
  return (
    <>
      <section className="section-projects margin-bottom--regular">
        <div className="section__title">
          <span className="title__number">03. </span>
          <h2>Cursos e projetinhos</h2>
        </div>
        <div className="projects__grid">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
    </>
  );
}
