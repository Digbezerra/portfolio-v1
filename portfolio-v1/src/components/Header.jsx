import { NavBar } from "./NavBar";
import { Hero } from "./sections/Hero";

export function Header() {
  return (
    <>
      <header className="header">
        <NavBar />
      </header>
      <div className="main-container">
        <Hero />
      </div>
    </>
  );
}
