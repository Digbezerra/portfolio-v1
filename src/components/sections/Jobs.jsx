import { useState } from "react";

const jobs = [
  {
    id: 1,
    name: "Webjump",
    full_name: "Webjump",
    role: "Software Engineer",
    begin_date: "Out. 2022",
    end_date: "Jan. 2024",
    description: [
      "Atuei como Engenheiro de Software Jr. em um dos maiores projetos de e-commerce B2B da Nestlé, chamado “Nestlé Até Você”, com foco em arquitetura técnica, liderança de equipe e melhoria contínua do produto.",
      "Essa posição marcou minha transição de desenvolvedor para um papel mais estratégico, com responsabilidades de gestão, planejamento técnico e interface direta com clientes e stakeholders internacionais.",
      "Principais conquistas: Ponto focal técnico no projeto Nestlé, liderando decisões de arquitetura e sustentação do frontend; Responsável pelo acompanhamento de métricas de infraestrutura e levantamento de melhorias em conjunto com o time de DevOps; Reconhecimento interno pela capacidade de alinhar as necessidades do negócio com soluções viáveis e escaláveis.",
      "Principais atividades: Gestão técnica de equipe frontend: acompanhamento de entregas, revisão de código, apoio a devs menos experientes; Participação em reuniões estratégicas com o time global da Nestlé, conduzidas em inglês; Definição de escopo técnico e funcional, alinhando demandas com stakeholders, UX, QA e gestão de produto; Solução de problemas complexos em produção, em conjunto com times de infraestrutura; Apoio na evolução do time: mentoria técnica, feedbacks constantes e condução de melhorias de processo.",
      "Stack utilizada: React.js, JavaScript, GraphQL, PWA Studio, Adobe Commerce (Magento), Platform.sh, MongoDB, Git, Jira, JEST, Figma, Linux.",
    ],
  },
  {
    id: 2,
    name: "Webjump",
    full_name: "Webjump",
    role: "Frontend developer",
    begin_date: "Nov. 2019",
    end_date: "Out. 2022",
    description: [
      "Desenvolvimento de aplicações Web. Hot sites desenvolvidos em caráter de promoção de eventos e produtos, HTML, SCSS, Drupal, integração com API. Aplicações nativas mobile, Flutter. Lojas virtuais (e-commerces), HTML, CSS, Javascript, React, GraphQL.",
      "Atuei com grandes clientes, contribuindo para o desenvolvimento de aplicações dinâmicas, responsivas e focadas na experiência do usuário. Vivência em ambiente ágil, com metodologias como SCRUM e KANBAN. Responsabilidade de deploys, mentoria de desenvolvedores menos experientes, realização de entrevistas técnicas.",
      "Tecnologias utilizadas ao decorrer dos projetos: HTML | CSS | SCSS | Styled Components | Javascript | React | GraphQL | Apollo | Flutter | Drupal | PHP | API Rest | Git | Jenkins | Platform.sh | BitBucket",
    ],
  },
  {
    id: 3,
    name: "DSB",
    full_name: "Digital Solutions for Business",
    role: "QA - Analista de testes",
    begin_date: "Jun. 2019",
    end_date: "Nov. 2019",
    description: [
      "Atuei por 6 meses como Analista de Testes (QA), com foco em garantir a qualidade das entregas durante o ciclo de desenvolvimento de software.",
      "Execução de testes funcionais, regressivos e exploratórios em ambiente de homologação e produção.",
      "Elaboração e manutenção de casos de teste com base nos requisitos técnicos e funcionais.",
      "Abertura e acompanhamento de bugs, assegurando a comunicação clara com o time de desenvolvimento.",
      "Validação de correções antes da liberação de novas versões.",
      "Participação em cerimônias ágeis (dailies, plannings, reviews) para alinhamento com o time de produto e desenvolvimento.",
      "Apoio na automatização de testes (caso tenha usado alguma ferramenta, como Cypress, Selenium, Jest, etc., pode citar).",
      "Garantia da conformidade das entregas com critérios de aceite e padrões de qualidade da empresa.",
      "Ferramentas e tecnologias utilizadas: Jira, TestRail (ou similar), Git, Postman, navegador DevTools, entre outras.",
    ],
  },
  {
    id: 4,
    name: "FCL",
    full_name: "Faculdade Casper Líbero",
    role: "Estagiário de suporte de T.I",
    begin_date: "Jan. 2018 ",
    end_date: "Jun. 2019",
    description: [
      "Atuei no suporte técnico e operacional dos laboratórios de informática da Fundação, prestando assistência direta às áreas acadêmicas e administrativas.",
      "Acompanhamento das atividades dos laboratórios de informática, garantindo o pleno funcionamento dos ambientes tecnológicos.",
      "Suporte técnico ao corpo docente e usuários, auxiliando na utilização de recursos de infraestrutura de TI.",
      "Manutenção preventiva e corretiva de hardware, com substituição e configuração de componentes.",
      "Instalação, atualização e configuração de softwares nos equipamentos utilizados nos setores da Fundação.",
      "Apoio em demandas relacionadas à infraestrutura de redes e conectividade.",
      "Ferramentas e tecnologias utilizadas: sistemas operacionais Windows e Linux, softwares educacionais e administrativos, ferramentas de suporte remoto e diagnóstico.",
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
                            <p>{item}</p>
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
