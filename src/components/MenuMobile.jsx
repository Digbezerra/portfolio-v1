import { useState } from "react";
import { Button } from "./Button";
import { MenuIcon } from "./icons/MenuIcon";

export function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="nav-mobile">
        {isOpen ? (
          <Button action={handleIsOpen}>X</Button>
        ) : (
          <Button action={handleIsOpen}>
            <MenuIcon />
          </Button>
        )}
      </div>
      <nav
        className={`nav-mobile--items ${isOpen ? "nav-mobile__active" : ""}`}
      >
        <Button action={handleIsOpen}>X</Button>
        <ul className="nav-mobile__ul">
          <li className="nav-mobile__li">
            <a className="nav-mobile__link" href="#">
              <span className="nav-mobile__span">01.</span>
              Sobre
            </a>
          </li>
          <li className="nav-mobile__li">
            <a className="nav-mobile__link" href="#">
              <span className="nav-mobile__span">02.</span>
              Experiência
            </a>
          </li>
          <li className="nav-mobile__li">
            <a className="nav-mobile__link" href="#">
              <span className="nav-mobile__span">03.</span>
              Trabalhos
            </a>
          </li>
          <li className="nav-mobile__li">
            <a className="nav-mobile__link" href="#">
              <span className="nav-mobile__span">04.</span>
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
