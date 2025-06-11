import { Button } from "../Button";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";

export function Hero() {
  return (
    <>
      <section className="section-hero margin-bottom--regular">
        <p className="text--featured">Olá, meu nome é</p>
        <h1 className="title title--h1">Diego Bezerra.</h1>
        <h2 className="title title--h2">Transformo ideias em Web apps.</h2>
        <p className="text--regular__hero">
          Criando experiências web performáticas, acessíveis e escaláveis com
          foco na experiência do usuário desde 2019.
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
            href="https://github.com/Digbezerra"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/diego-bezerra-martins-670561106"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon />
          </a>
        </div>
        <div className="email__static">
          <a
            href="mailto:diego.bezerra.martins@gmail.com"
            aria-label="Envie um e-mail para diego.bezerra.martins@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            diego.bezerra.martins@gmail.com
          </a>
        </div>
      </section>
    </>
  );
}
