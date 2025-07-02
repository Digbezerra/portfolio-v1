import { GithubIcon } from "../icons/GithubIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";

export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__icons">
          <a
            href="https://github.com/Digbezerra" //insira o seu link para o github
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/diego-bezerra-martins-670561106" //insira o seu link do linkedin
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon />
          </a>
        </div>
        <a
          href="mailto:seu_email@email.com"
          aria-label="Envie um e-mail para seu_email@email.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          seu_email@email.com
        </a>
        <p className="footer__paragraph">
          Desenvolvido por&nbsp;
          <a
            href="https://www.linkedin.com/in/diego-bezerra-martins-670561106"
            target="_blank"
            rel="noopener noreferrer"
          >
            Diego Bezerra
          </a>
        </p>
        {/* deixe esse texto se for sangue bom kkkkk, mas se quiser tirar pode tirar*/}
        <a
          className="footer__link"
          href="https://brittanychiang.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Based on UI Design by Brittany Chiang{" "}
          {/* deixe esse texto! É a referência da Designer que criou esta UI*/}
        </a>
        <p className="footer__paragraph--copy">
          {/*Crie um texto de copyright das suas experiências*/}
          Todos os direitos reservados aos proprietários dos projetos citados.
          Projetos desenvolvidos em caráter de contratação trabalhista.
        </p>
      </footer>
    </>
  );
}
