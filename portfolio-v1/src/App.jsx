import { NavBar } from "./components/NavBar";
import { Logo } from "./components/Logo";
import { Hero } from "./components/sections/Hero";
import { MainContainer } from "./components/MainContainer";
import { About } from "./components/sections/About";
import { Jobs } from "./components/sections/Jobs";
import { FeaturedList } from "./components/sections/FeaturedList";

function App() {
  return (
    <>
      <NavBar>
        <Logo imgName={"logo-white.png"} altText={"Dig dev logo"} />
      </NavBar>
      <MainContainer>
        <Hero />
        <About />
        <Jobs />
        <FeaturedList />
      </MainContainer>
    </>
  );
}

export default App;
