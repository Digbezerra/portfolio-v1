import { ProjectCard } from "../ProjectCard";

//Estes dados representam os cursos e projetos extras que vc realizou
//DESAFIO DE MELHORIAS: utilize alguma ferramenta de web server ou utilize a estrutura da sua ferramenta de build, e torne estes dados dinâmicos e escaláveis

/*  
id: number (sequencial, ou randomico),
name: string (nome do curso/projeto),
description: string (descrição do curso/projeto),
course_url: string (url do curso/projeto)
github_url: string (url do repositório),
stack: array (stack utilizada no curso ["Figma", "Illustrator", "Photoshop", "Canva"]),
*/

const projectData = [
  {
    id: 1,
    name: "Curso de como fazer um curso",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae ratione officia fugit culpa atque quibusdam incidunt inventore sequi necessitatibus, aperiam et nesciunt doloremque? Voluptatibus obcaecati enim magni repellendus eius rerum.",
    course_url: "https://urldocurso.com.br",
    github_url: "https://urldorepositorio.com.br",
    stack: ["tech 1", "tech 2", "tech 3", "Tech 4"],
  },
  {
    id: 2,
    name: "Curso de como fazer um curso",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae ratione officia fugit culpa atque quibusdam incidunt inventore sequi necessitatibus, aperiam et nesciunt doloremque? Voluptatibus obcaecati enim magni repellendus eius rerum.",
    course_url: "https://urldocurso.com.br",
    github_url: "", //vazio o ícone some
    stack: ["tech 1", "tech 2", "tech 3", "Tech 4"],
  },
  {
    id: 3,
    name: "Curso de como fazer um curso",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae ratione officia fugit culpa atque quibusdam incidunt inventore sequi necessitatibus, aperiam et nesciunt doloremque? Voluptatibus obcaecati enim magni repellendus eius rerum.",
    course_url: "https://urldocurso.com.br",
    github_url: "https://urldorepositorio.com.br",
    stack: ["tech 1", "tech 2", "tech 3", "Tech 4"],
  },
  {
    id: 4,
    name: "Curso de como fazer um curso",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae ratione officia fugit culpa atque quibusdam incidunt inventore sequi necessitatibus, aperiam et nesciunt doloremque? Voluptatibus obcaecati enim magni repellendus eius rerum.",
    course_url: "https://urldocurso.com.br",
    github_url: "",
    stack: ["tech 1", "tech 2", "tech 3", "Tech 4"],
  },
];

export function ProjectCourses() {
  return (
    <>
      <section className="section-projects margin-bottom--regular">
        <div className="section__title">
          <span className="title__number">03. </span>
          <h2>Cursos e projetinhos</h2>
        </div>
        <div className="projects__grid">
          {projectData.map((item) => {
            return <ProjectCard data={item} key={item.id} />;
          })}
        </div>
      </section>
    </>
  );
}
