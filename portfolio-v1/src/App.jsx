import { Head } from "./components/sections/Head";
import { Logo } from "./components/Logo";
import { Hero } from "./components/sections/Hero";
import { MainContainer } from "./components/MainContainer";
import { About } from "./components/sections/About";
import { Jobs } from "./components/sections/Jobs";
import { FeaturedList } from "./components/sections/FeaturedList";
import { ProjectCourses } from "./components/sections/ProjectCourses";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";

function App() {
  return (
    <>
      <Head>
        <Logo imgName={"logo-white.png"} altText={"Dig dev logo"} />
      </Head>
      <MainContainer>
        <Hero />
        <About />
        <Jobs />
        <FeaturedList />
        <ProjectCourses />
        <Contact />
        <Footer />
      </MainContainer>
    </>
  );
}

export default App;
