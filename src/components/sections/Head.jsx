import { useState } from "react";
import { Button } from "../Button";
import { MenuIcon } from "../icons/MenuIcon";
import { CloseIcon } from "../icons/CloseIcon";

export function Head({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header id="header" className={`header ${isOpen ? "nav-open" : ""}`}>
      {children}
      <nav className="nav">
        <ul className="nav__ul">
          <li className="nav__li" data-aos="fade-up" data-aos-duration="500">
            <a className="nav__link" href="#about" onClick={onOpenMenu}>
              <span className="nav__span">01.</span>
              Sobre
            </a>
          </li>
          <li className="nav__li" data-aos="fade-up" data-aos-duration="750">
            <a className="nav__link" href="#jobs" onClick={onOpenMenu}>
              <span className="nav__span">02.</span>
              Experiência
            </a>
          </li>
          <li className="nav__li" data-aos="fade-up" data-aos-duration="1000">
            <a className="nav__link" href="#featured" onClick={onOpenMenu}>
              <span className="nav__span">03.</span>
              Trabalhos
            </a>
          </li>
          <li className="nav__li" data-aos="fade-up" data-aos-duration="1250">
            <a className="nav__link" href="#contact" onClick={onOpenMenu}>
              <span className="nav__span">04.</span>
              Contato
            </a>
          </li>
          <li className="nav__li" data-aos="fade-in" data-aos-duration="1500">
            <a
              href="https://diegobezerra.netlify.app/diego-bezerra-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn--default btn-desktop--nav"
            >
              Currículo
            </a>
          </li>

          <li
            className="nav__li nav__li--mobile"
            data-aos="fade-in"
            data-aos-duration="500"
          >
            <a
              href="https://diegobezerra.netlify.app/diego-bezerra-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn--default btn-cv--nav"
            >
              Currículo
            </a>
          </li>

          <li
            className="nav__li nav__li--mobile"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <a
              href="mailto:diego.bezerra.martins@gmail.com"
              aria-label="Envie um e-mail para diego.bezerra.martins@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="btn-cv--nav">Me dê um alô!</Button>
            </a>
          </li>
        </ul>
      </nav>
      <Button className="btn-mobile--nav" action={onOpenMenu}>
        {!isOpen ? <MenuIcon /> : <CloseIcon />}
      </Button>
    </header>
  );
}
