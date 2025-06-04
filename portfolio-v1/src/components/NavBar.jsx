import { Logo } from "./Logo.jsx";
import { Button } from "./Button.jsx";

export function NavBar() {
  const buttonAction = () => {
    alert("click");
  };

  return (
    <>
      <div className="navbar">
        <Logo imgName={"logo-white.png"} altText={"Dig dev logo"} />
        <nav className="nav">
          <ul className="nav-ul">
            <li className="nav-li">
              <a className="nav-link" href="#">
                <span className="nav-span">01.</span>
                Sobre
              </a>
            </li>
            <li className="nav-li">
              <a className="nav-link" href="#">
                <span className="nav-span">02.</span>
                Experiência
              </a>
            </li>
            <li className="nav-li">
              <a className="nav-link" href="#">
                <span className="nav-span">03.</span>
                Trabalhos
              </a>
            </li>
            <li className="nav-li">
              <a className="nav-link" href="#">
                <span className="nav-span">04.</span>
                Contato
              </a>
            </li>
          </ul>
        </nav>
        <Button action={buttonAction}>Currículo</Button>
      </div>
    </>
  );
}
