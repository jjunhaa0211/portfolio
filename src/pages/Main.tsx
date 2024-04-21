import MainTitle from "../_portfolio/components/MainTitle";
import About from "../_portfolio/components/About";
import Projects from "../_portfolio/components/Projects";
import Contact from "../_portfolio/components/Contact";
import { Txt } from "../components/Txt";
import { APP_VERSION } from "../routes/App";
import { recompile } from "../_portfolio/hooks/useIrl";
import Libraries from "../_portfolio/components/Libraries";
import ToyProjects from "../_portfolio/components/ToyProjects";

const Main = () => {
  return (
    <>
      <MainTitle />
      <About />
      <Projects />
      <Libraries />
      <ToyProjects />
      <Contact />
      <Txt typography={"P1"} center>
        Last Update: {APP_VERSION}
      </Txt>
      <br />
      <br />
    </>
  );
};

export default Main;
