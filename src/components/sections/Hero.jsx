import { Button } from "../Button";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";

export function Hero() {
  return (
    <>
      <section className="section-hero margin-bottom--regular">
        <p className="text--featured">Olá, meu nome é</p>
        <h1 className="title title--h1">Meu nome.</h1>
        <h2 className="title title--h2">meu cargo, ou especialidade</h2>
        <p className="text--regular__hero">
          Utilize uma frase de impacto, para demonstrar o que você faz e como
          pode ajudar o usuário interessado
        </p>
        <a
          href="mailto:diego.bezerra.martins@gmail.com"
          aria-label="Envie um e-mail para diego.bezerra.martins@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="btn--default btn--hero">Fale comigo</Button>
        </a>
        <div className="icons__static">
          <a
            href="https://github.com/Digbezerra" //troque pelo seu github
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/diego-bezerra-martins-670561106" //troque pelo seu linkedin
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon />
          </a>
        </div>
        <div className="email__static">
          <a
            href="mailto:seu_email@email.com"
            aria-label="Envie um e-mail para seu_email@email.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            seu_email@email.com
          </a>
        </div>
      </section>
    </>
  );
}
