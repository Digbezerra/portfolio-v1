import { useState } from "react";

const jobs = [
  {
    id: 1,
    name: "Webjump",
    full_name: "Webjump",
    role: "Frontend developer",
    begin_date: "Nov. 2019", //Needs to be ISO format, but it's a controlled date, for now at least
    end_date: "Jan. 2024",
    description: [
      "Atuei por mais de 4 anos em projetos de alto impacto com foco em e-commerce, utilizando React.js, Adobe Commerce (Magento) com PWA Studio e metodologias ágeis. Trabalhei com grandes clientes como Nestlé, Ambev, Reckitt e Hortifrutti, sempre com foco em performance, UX e entrega de valor ao cliente final. Principais conquistas: Destaque técnico pela qualidade de código, proatividade e comunicação com times globais;",
      "Fui promovido a Engenheiro de Software Jr., atuando por 1 ano e 4 meses com gestão técnica de equipe, acompanhamento de métricas de infraestrutura e definição de requisitos junto a stakeholders e clientes (inclusive em inglês); Liderança técnica no projeto B2B da Nestlé (Nestlé Até Você), responsável por acompanhar o desenvolvimento, propor melhorias e atuar como ponto focal junto ao cliente.",
      "Principais atividades: Desenvolvimento de aplicações PWA com foco em escalabilidade; Acompanhamento e mentoring de desenvolvedores menos experientes; Levantamento de escopo técnico e funcional em reuniões com o time global da Nestlé; Interface direta com áreas de produto, UX/UI e infraestrutura para solução de problemas complexos; Participação ativa nas decisões técnicas e evolução do setor de frontend na empresa. Stack utilizada: React.js, JavaScript (ES6+), HTML5, CSS3, SASS, GraphQL, MongoDB, Adobe Commerce, PWA Studio, Platform.sh, JEST, Git, Jira, Figma, Linux.",
    ],
  },
  {
    id: 2,
    name: "DSB",
    full_name: "Digital Solutions for Business",
    role: "QA - Analista de testes",
    begin_date: "Jun. 2019",
    end_date: "Nov. 2019",
    description: [
      "Realizar as atividades de padrão de qualidade das soluções digitais da companhia",
      "Leitura de escopo de projeto",
      "Documentação de bugs",
      "Inserção de comentários na documentação",
      "Documentar a usabilidade de cada feature",
    ],
  },
  {
    id: 3,
    name: "FCL",
    full_name: "Faculdade Casper Líbero",
    role: "Estagiário de suporte de T.I",
    begin_date: "Jun. 2019",
    end_date: "Jan. 2018",
    description: [
      "Realizar o acompanhamento de atividades relacionadas aos laboratórios de informática de Fundação",
      "Oferecer o suporte técnico ao corpo docente em questão de infraestrutura tecnológica",
      "Realizar a manutenção e atualização de elementos de hardware e de software dos setores da Fundação",
    ],
  },
];

export function Jobs() {
  const [idSelected, setIdSelected] = useState(jobs[0].id);

  const handleSelectedItem = (id) => {
    setIdSelected(id);
  };

  return (
    <>
      <section
        className="section-jobs margin-bottom--regular padding-top--regular"
        id="jobs"
      >
        <div className="section__title">
          <span className="title__number">02. </span>
          <h2>Experiências relevantes</h2>
        </div>
        <div className="section-jobs__content">
          <ul className="job__menu">
            {jobs.map((item) => {
              const isId = item.id === idSelected;
              return (
                <li
                  className={`job__menu--item ${
                    isId ? "job__menu--item--active" : ""
                  }`}
                  onClick={() => handleSelectedItem(item.id)}
                  key={item.id}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
          <div>
            {jobs.map((item) => {
              const isId = item.id === idSelected;
              if (isId) {
                return (
                  <div className="job__description" key={item.id}>
                    <div>
                      <p className="title__job">{item.role}</p>
                      <p className="job__period">
                        {item.begin_date} / {item.end_date}
                      </p>
                    </div>
                    <p className="job__company">{item.full_name}</p>
                    <ul className="job__ul">
                      {item.description.map((item) => {
                        return (
                          <li className="job__li job__li--tasks" key={item}>
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
}
