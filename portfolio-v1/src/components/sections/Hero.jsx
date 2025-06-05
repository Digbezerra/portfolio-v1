import { Button } from "../Button";

export function Hero() {
  return (
    <>
      <section className="section-hero">
        <p className="text-featured">Olá, meu nome é</p>
        <h1 className="title-main">Diego Bezerra.</h1>
        <h2 className="title-secondary">Frontend Developer.</h2>
        <p className="text-regular margin-bottom--regular">
          Criando experiências web performáticas, acessíveis e escaláveis com
          foco na experiência do usuário desde 2019.
        </p>
        <Button className="btn-default btn-hero">Fale comigo</Button>
      </section>
    </>
  );
}
