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
    stack: ["react", "javascript", "html", "css", "GraphQL", "Adobe Commerce"],
  },
  {
    id: 2,
    name: "HortiFrutti | Natural da Terra",
    sub_title: "E-commerce B2C",
    description:
      "E-commerce B2C, focado em alimentação saudável, vendas de produtos de hortifruti e orgânicos em geral. Atuei como desenvolvedor Front End.",
    image: "hortifrutti.webp",
    url: "https://www.naturaldaterra.com.br/",
    stack: ["react", "javascript", "html", "css", "GraphQL", "Adobe Commerce"],
  },
  {
    id: 3,
    name: "Sustagen",
    sub_title: "Catálogo",
    description:
      "Website interativo, agregador de links de compras de produtos. Vitrine digital como um marketplace para os produtos Sustagen",
    image: "sustagen.webp",
    url: "https://www.sustagenadultos.com.br/",
    stack: ["html", "css", "scss", "drupal", "javascript"],
  },
  {
    id: 4,
    name: "Ambev",
    sub_title: "Sites institucionais",
    description:
      "Construção de CMS (Drupal) estrutural para facilitar a construção de hot sites para promoção das principais marcas da Ambev, Clube n1 Brahma, Brahma Duplo Malte (Live Bruno e Marrone), Skol Beats 150 BPM, Stella Artois, Corona Follow the sun, Antarctica Tônica, entre outras.",
    image: "ambev.webp",
    url: "https://www.ecommercebrasil.com.br/noticias/escolhida-por-ambev-webjump-e-responsavel-por-estrutura-multidisciplinar-que-agrega-marketing-e-tecnologia",
    stack: ["html", "css", "scss", "drupal", "javascript"],
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
        {jobsData.map((item) => {
          return (
            <Featured
              position={item.id % 2 === 0 ? "right" : "left"}
              data={item}
            />
          );
        })}
      </section>
    </>
  );
}
