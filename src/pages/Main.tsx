import MainTitle from "../_portfolio/pages/MainTitle";
import styled from "styled-components";
import { Txt } from "../components/Txt";
import { GIcon } from "../components/GIcon";
import Tag, { DefaultTag } from "../components/Tag";
import TimeFrame from "../components/TimeFrame";
import Project from "../components/Project";
import { GBody } from "../components/layout/globalLayouts";
import About from "../_portfolio/pages/About";

const Main = () => {
    return <>
        <MainTitle/>
        <About/>
        <GBody>
            <Txt typography={"H0"}>Project</Txt>
            <ProjectBox>
                <Project icon={"SBR"} name={"SkyblockRemake (SBR)"} date={"22.03.07~"}
                         tags={[DefaultTag.spigot, DefaultTag.java]} description={"adf"}/>
                <Project icon={"RicePaper"} name={"RicePaper"} date={"22.04.29~05.30"}
                         tags={[DefaultTag.java, DefaultTag.html, DefaultTag.javaScript, DefaultTag.typeScript]}
                         description={"adf"}/>
                <Project icon={"Lite24"} name={"Lite24"} date={"22.04.29~05.30"}
                         tags={[DefaultTag.spigot, DefaultTag.java]} description={"adf"}/>
                <Project icon={"BeatTable"} name={"BeatTable"} date={"22.04.29~05.30"}
                         tags={[DefaultTag.unity, DefaultTag.csharp]} description={"adf"}/>
                {/*<Project icon={"Indexer"} name={"Minigame-Master"} date={"22.02.03~02.07"}*/}
                {/*         tags={[DefaultTag.spigot, DefaultTag.java]} description={"adf"}/>*/}
                {/*<Project icon={"Indexer"} name={"Pri"} date={"2022.01.01~2022.03.03"}*/}
                {/*         tags={[DefaultTag.unity]} description={"adf"}/>*/}
                <Project icon={"Paimon"} name={"Genshin-Calculator"} date={"23.08.12~"}
                         tags={[DefaultTag.react, DefaultTag.javaScript, DefaultTag.typeScript]} description={"adf"}/>
                <Project icon={"JunSal"} name={"전염병으로부터 살아남기"} date={"23.09.07~12.03"}
                         tags={[DefaultTag.unity, DefaultTag.csharp]} description={"adf"}/>
            </ProjectBox>
        </GBody>
    </>;
};

const ProjectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 40px;
  align-self: stretch;
  flex-wrap: wrap;
`

export default Main;