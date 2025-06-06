import { NavBar } from "./components/NavBar";
import { Logo } from "./components/Logo";
import { Hero } from "./components/sections/Hero";
import { MainContainer } from "./components/MainContainer";
import { About } from "./components/sections/About";

function App() {
  return (
    <>
      <NavBar>
        <Logo imgName={"logo-white.png"} altText={"Dig dev logo"} />
      </NavBar>
      <MainContainer>
        <Hero />
        <About />
      </MainContainer>
    </>
  );
}

export default App;
