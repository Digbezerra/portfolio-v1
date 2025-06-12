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
                Olá, sou o Diego (Dig) e construo ferramentas focadas em
                acessibilidade, experiência do usuário, escalabilidade e
                performance.
              </p>
              <p className="paragraph">
                Atuei como Frontend developer durante cinco anos incríveis, onde
                tive a oportunidade de trabalhar com diversas empresas
                multinacionais, como: Ambev, Hortifrutti, Heckitt, Adobe e
                Nestlé.
              </p>
              <p className="paragraph">
                Exerci durante 1 ano e meio a função de Engenheiro de Software
                Jr, atuei como tech lead de frontend no projeto Nestlé Até Você,
                um grande projeto B2B onde eu era responsável por arquitetar e
                gerenciar as implementações do time de frontend.
              </p>
              <p className="paragraph">
                Fui mentor de diversos devs incríveis e aprendi muito com isso,
                hoje sinto que sou um profissional mais completo.
              </p>
            </div>
            <img
              className="profile-image"
              src="images/placeholder_600x400.png"
              alt="profile photo placeholder"
            />
          </div>
        </div>
        <StackList />
      </section>
    </>
  );
}
