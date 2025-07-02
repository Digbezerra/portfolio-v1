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
          🚀 Aberto a novas oportunidades!
          <br /> Sou apaixonado por desenvolvimento web e mobile e estou pronto
          para contribuir com minha experiência em projetos desafiadores. Tenho
          certeza de que juntos podemos criar soluções incríveis e gerar
          resultados reais. Me chame para um bate-papo, será um prazer
          compartilhar mais sobre o que posso agregar ao seu projeto.
        </p>
        <a
          href="mailto:diego.bezerra.martins@gmail.com"
          aria-label="Envie um e-mail para diego.bezerra.martins@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="btn--hero">Me dê um alô!</Button>
        </a>
      </section>
    </>
  );
}
