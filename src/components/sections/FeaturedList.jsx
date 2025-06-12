import { Featured } from "../Featured";

const jobsData = [
  {
    id: 1,
    name: "Nestlé Até você",
    sub_title: "E-commerce B2B",
    description:
      "Projeto de E-commerce B2B, a maior plataforma de vendas atacado e varejo de produtos Nestlé da América Latina, responsável por um faturamento anual de quase um bilhão de reais. Fui responsável pela atuação do time de frontend, liderando e tomando decisões de arquitetura e melhorias contínuas.",
    image: "nestle-ate-voce.webp",
    url: "https://www.nestleatevoce.com.br/",
  },
  {
    id: 2,
    name: "HortiFrutti | Natural da Terra",
    sub_title: "E-commerce B2C",
    description:
      "E-commerce B2C, focado em alimentação saudável, vendas de produtos de hortifruti e orgânicos em geral. Atuei como desenvolvedor Front End.",
    image: "hortifrutti.webp",
    url: "https://www.naturaldaterra.com.br/",
  },
];

export function FeaturedList() {
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
        <Featured position={"right"} />
        <Featured position={"left"} />
        <Featured position={"right"} />
      </section>
    </>
  );
}
