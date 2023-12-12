import MainTitle from "../_portfolio/components/MainTitle";
import About from "../_portfolio/components/About";
import Projects from "../_portfolio/components/Projects";
import Contact from "../_portfolio/components/Contact";
import { Txt } from "../components/Txt";
import { APP_VERSION } from "../routes/App";

const Main = () => {
    return <>
        <MainTitle/>
        <About/>
        <Projects/>
        <Contact/>
        <Txt center>Last Update: {APP_VERSION}</Txt>
        <br/>
        <br/>
    </>;
};

export default Main;