import { GithubIcon } from "../icons/GithubIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";

export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__icons">
          <GithubIcon />
          <LinkedinIcon />
        </div>
        <a className="footer__email" href="#email">
          diego.bezerra.martins@gmail.com
        </a>
        <p className="footer__paragraph">Desenvolvido por Diego Bezerra</p>
        <a className="footer__link" href="https://brittanychiang.com/">
          Based on UI Design by Brittany Chiang
        </a>
      </footer>
    </>
  );
}
