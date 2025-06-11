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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt saepe
          labore eius? Architecto veritatis, itaque maiores non ullam minima
          ducimus maxime temporibus facere corporis quos iure sunt accusantium
          eum. Voluptatibus!
        </p>
        <Button className="btn--hero">Me dê um alô!</Button>
      </section>
    </>
  );
}
