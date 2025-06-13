import { StackList } from "../StackList";

export function About() {
  return (
    <>
      <section
        className="section-about margin-bottom--regular padding-top--regular"
        id="about"
      >
        <div className="section-about__container">
          <div className="section__title">
            <span className="title__number">01. </span>
            <h2>Sobre mim</h2>
          </div>
          <div className="section-about__content">
            <div>
              <p className="paragraph">
                Desenvolvedor Frontend com mais de 4 anos de experiência,
                incluindo atuação como Engenheiro de Software Jr. em projetos de
                e-commerce B2C e B2B para grandes empresas como Nestlé, Ambev,
                Reckitt e Hortifrutti. Especialista em React.js, PWA, Adobe
                Commerce (Magento) e integração com times globais.
              </p>
              <p className="paragraph">
                Reconhecido por liderança técnica, comunicação eficiente,
                mentoria de desenvolvedores iniciantes e forte foco em
                performance e experiência do usuário. Colaborei diretamente com
                equipes multinacionais em inglês, contribuindo para a entrega de
                soluções robustas e modernas. Estou em busca de oportunidades
                para continuar gerando valor através de interfaces ricas,
                acessíveis e eficientes, sempre com espírito colaborativo e
                vontade de evoluir.
              </p>
            </div>

            <img
              className="profile-image"
              src="images/selfie.png"
              alt="profile photo placeholder"
            />
          </div>
        </div>
        <StackList />
      </section>
    </>
  );
}
