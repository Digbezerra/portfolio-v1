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
        <p className="text--regular__hero margin-bottom--regular">
          Criando experiências web performáticas, acessíveis e escaláveis com
          foco na experiência do usuário desde 2019.
        </p>
        <Button className="btn--default btn--hero">Fale comigo</Button>
        <div className="icons__static">
          <GithubIcon />
          <LinkedinIcon />
        </div>
        <div className="email__static">
          <p>diego.bezerra.martins@gmail.com</p>
        </div>
      </section>
    </>
  );
}
