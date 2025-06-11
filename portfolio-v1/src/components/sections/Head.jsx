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
    <header className={`header ${isOpen ? "nav-open" : ""}`}>
      {children}
      <nav className="nav">
        <ul className="nav__ul">
          <li className="nav__li">
            <a className="nav__link" href="#" onClick={onOpenMenu}>
              <span className="nav__span">01.</span>
              Sobre
            </a>
          </li>
          <li className="nav__li">
            <a className="nav__link" href="#" onClick={onOpenMenu}>
              <span className="nav__span">02.</span>
              Experiência
            </a>
          </li>
          <li className="nav__li">
            <a className="nav__link" href="#" onClick={onOpenMenu}>
              <span className="nav__span">03.</span>
              Trabalhos
            </a>
          </li>
          <li className="nav__li">
            <a className="nav__link" href="#" onClick={onOpenMenu}>
              <span className="nav__span">04.</span>
              Contato
            </a>
          </li>
          <li className="nav__li">
            <Button className="btn-desktop--nav">Currículo</Button>
          </li>
          <li className="nav__li">
            <Button className="btn-cv--nav" action={onOpenMenu}>
              Currículo
            </Button>
          </li>
        </ul>
        {/* <Button className="btn-mobile--nav" action={onOpenMenu}>
          <MenuIcon />
        </Button> */}
      </nav>
      <Button className="btn-mobile--nav" action={onOpenMenu}>
        {!isOpen ? <MenuIcon /> : <CloseIcon />}
      </Button>
    </header>
  );
}
