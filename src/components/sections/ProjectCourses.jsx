import { ProjectCard } from "../ProjectCard";

const projectData = [
  {
    id: 1,
    name: "UI Design: Design de interfaces focados em desenvolvimento web",
    description:
      "Aprenda criar sites, landing pages e e-commerces com foco no usuário. Da teoria à pratica.",
    course_url: "https://www.udemy.com/course/design-de-interfaces-web",
    github_url: "",
    stack: ["Figma", "Illustrator", "Photoshop", "Canva"],
  },
  {
    id: 2,
    name: "The Complete JavaScript Course 2025: From Zero to Expert!",
    description:
      "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!",
    course_url: "https://www.udemy.com/course/the-complete-javascript-course",
    github_url: "https://github.com/Digbezerra/js-fundamentals",
    stack: ["javascript", "html", "css"],
  },
  {
    id: 3,
    name: "The Ultimate React Course 2025: React, Next.js, Redux & More",
    description:
      "Master modern React from beginner to advanced! Next.js, Context API, React Query, Redux, Tailwind, advanced patterns",
    course_url: "https://www.udemy.com/course/the-ultimate-react-course",
    github_url: "https://github.com/Digbezerra/Reactjs",
    stack: [
      "Javascript",
      "JSX",
      "CSS",
      "Next.js",
      "Context API",
      "React Query",
      "Redux",
      "Tailwind",
    ],
  },
  {
    id: 4,
    name: "UI Design: Design de interfaces focados em desenvolvimento web",
    description:
      "Aprenda criar sites, landing pages e e-commerces com foco no usuário. Da teoria à pratica.",
    course_url: "https://www.udemy.com/course/design-de-interfaces-web",
    github_url: "",
    stack: ["Figma", "Illustrator", "Photoshop", "Canva"],
  },
];

export function ProjectCourses() {
  return (
    <>
      <section
        className="section-projects margin-bottom--regular"
        data-aos="fade-up"
        data-aos-duration="500"
      >
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
