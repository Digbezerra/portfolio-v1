import { Button } from "./Button.jsx";

export function NavBar({ children }) {
  const buttonAction = () => {
    alert("click");
  };

  return (
    <>
      <header className="header">
        <div className="navbar">
          {children}
          <nav className="nav">
            <ul className="nav__ul">
              <li className="nav__li">
                <a className="nav__link" href="#">
                  <span className="nav__span">01.</span>
                  Sobre
                </a>
              </li>
              <li className="nav__li">
                <a className="nav__link" href="#">
                  <span className="nav__span">02.</span>
                  Experiência
                </a>
              </li>
              <li className="nav__li">
                <a className="nav__link" href="#">
                  <span className="nav__span">03.</span>
                  Trabalhos
                </a>
              </li>
              <li className="nav__li">
                <a className="nav__link" href="#">
                  <span className="nav__span">04.</span>
                  Contato
                </a>
              </li>
            </ul>
          </nav>
          <Button action={buttonAction}>Currículo</Button>
        </div>
      </header>
    </>
  );
}
