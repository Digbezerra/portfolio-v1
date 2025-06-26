import { GithubIcon } from "../icons/GithubIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";

export function Footer() {
  return (
    <>
      <footer className="footer" data-aos="fade-up" data-aos-duration="500">
        <div className="footer__icons">
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
        <a
          href="mailto:diego.bezerra.martins@gmail.com"
          aria-label="Envie um e-mail para diego.bezerra.martins@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          diego.bezerra.martins@gmail.com
        </a>

        <p className="footer__paragraph">Desenvolvido por Diego Bezerra</p>
        <a
          className="footer__link"
          href="https://brittanychiang.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Based on UI Design by Brittany Chiang
        </a>
        <p className="footer__paragraph--copy">
          Todos os direitos reservados aos proprietários dos projetos citados,
          Webjump e empresas donas das marcas. Projetos desenvolvidos em caráter
          de contratação trabalhista.
        </p>
      </footer>
    </>
  );
}
