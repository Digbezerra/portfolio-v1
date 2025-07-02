import { useState, useEffect } from "react";
import { Featured } from "../Featured";

//Estes dados representam os projetos relevantes que você desenvolve ou participou, insira as suas informações
//DESAFIO DE MELHORIAS: utilize alguma ferramenta de web server ou utilize a estrutura da sua ferramenta de build, e torne estes dados dinâmicos e escaláveis

/*  id: number (sequencial, ou randomico),
    name: string (nome do projeto),
    sub_title: string (subtítulo),
    description: string (descrição detalhada)
    image: string (caminho para imagem de fundo "placeholder_600x400.png", insira na pasta /images),
    url: string ("https://www.sitedoprojeto.com.br/"),
    stack: array (stack utilizada: ["react", "javascript", "html", "css", "GraphQL", "Adobe Commerce"]),
*/

const jobsData = [
  {
    id: 1,
    name: "Projeto 01",
    sub_title: "plataforma de e-commerce",
    description:
      "Lorem ipsum dolor sitdas amet consectetur adipisicing elit. Illo nihil totam corporis voluptatum, id aliquam? Natus et impedit esse quod! Maiores ullam iste debitis iure id repudiandae ipsam rerum ratione?",
    image: "placeholder_600x400.png",
    url: "https://diegobezerra.netlify.app/",
    stack: ["lorem", "ipsum", "dolor", "sit", "amet", "consecteur"],
  },
  {
    id: 2,
    name: "Projeto 02",
    sub_title: "plataforma de e-commerce",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nihil totam corporis voluptatum, id aliquam? Natus et impedit esse quod! Maiores ullam iste debitis iure id repudvaqiandae ipsam rerum ratione?",
    image: "placeholder_600x400.png",
    url: "https://diegobezerra.netlify.app/",
    stack: ["lorem", "ipsum", "dolor", "sit", "amet", "consecteur"],
  },
  {
    id: 3,
    name: "Projeto 03",
    sub_title: "plataforma de e-commerce",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nihil totam corporis voluptatum, id aliquam? Natus et impedit esse quod! Maiores ullam iste debitis iure id repudiandae xacipsam rerum ratione?",
    image: "placeholder_600x400.png",
    url: "https://diegobezerra.netlify.app/",
    stack: ["lorem", "ipsum", "dolor", "sit", "amet", "consecteur"],
  },
  {
    id: 4,
    name: "Projeto 04",
    sub_title: "plataforma de e-commerce",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nihil totam corporis voluptatum, id aliquam? Natus et impedit esse quod! Maiores ullam iste debitis iure id repudiandaecaxca ipsam rerum ratione?",
    image: "placeholder_600x400.png",
    url: "https://diegobezerra.netlify.app/",
    stack: ["lorem", "ipsum", "dolor", "sit", "amet", "consecteur"],
  },
];

export function FeaturedList() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <section
        className="section-featured margin-bottom--regular padding-top--regular"
        id="featured"
      >
        <div className="section__title">
          <span className="title__number">03. </span>
          <h2>Principais Projetos</h2>
        </div>
        <div className={isMobile ? "section-featured__mobile" : ""}>
          {jobsData.map((item) => {
            return (
              <Featured
                position={item.id % 2 === 0 ? "right" : "left"}
                data={item}
                key={item.description}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
