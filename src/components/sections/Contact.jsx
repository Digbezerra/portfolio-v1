import { Button } from "../Button";

export function Contact() {
  return (
    <>
      <section
        className="section-contact margin-bottom--regular padding-top--regular"
        id="contact"
      >
        <p className="title__number">04.</p>
        <h3 className="contact__title--h3">Contato</h3>
        <h1 className="contact__title--h1">Fale Comigo</h1>
        <p className="contact__paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit accusamus
          rerum est sequi culpa minima minus eaque vero cumque provident
          voluptatibus, et quod sapiente dolores nobis ipsa necessitatibus quam
          voluptatum.
        </p>
        <a
          href="mailto:seu_email@email.com"
          aria-label="Envie um e-mail para seu_email@email.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="btn--hero">Me dê um alô!</Button>
        </a>
      </section>
    </>
  );
}
