import { GBody } from "../../components/layout/globalLayouts";
import { Txt } from "../../components/Txt";
import Project from "./Project";
import { DefaultTag } from "../../components/Tag";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Projects = () => {
    return <>
        <GBody>
            <Txt typography={"H0"}>Project</Txt>
            <ProjectBox>
                <Project
                    link={"/project/skyblock"}
                    icon={"SBR"} name={"SkyblockRemake"} date={"2022.03.07~"}
                    tags={["spigot", "java", "sql", "sqlite"]}
                    description={"마인크래프트 서버중 하나인 Hypixel의 Skyblock이라는 미니게임이 재미있어서 어쩌다 보니 혼자 직접 구현해버린 프로젝트"}/>
                <Project
                    link={"/project/rice-paper"}
                    icon={"RicePaper"} name={"RicePaper"} date={"2022.04.29~2022.05.30"}
                    tags={["java", "html", "javaScript"]}
                    description={"학교 급식을 Discord로 손쉽게 보고 급식 시간이 다가오면 푸시 알림까지 해 주는 서비스"}/>
                <Project
                    link={"/project/lite24"}
                    icon={"Lite24"} name={"Lite24"} date={"2022.04.29~2022.05.30"}
                    tags={["spigot", "java", "sql", "sqlite"]}
                    description={"마인크래프트 서버 Lite24를 직접 운영하고 유지보수한 프로젝트"}/>
                <Project
                    link={"/project/beat-table"}
                    icon={"BeatTable"} name={"BeatTable"} date={"2022.04.29~2022.05.30"}
                    tags={["unity", "csharp"]}
                    description={"테이블 형식의 색다른 리듬게임"}/>
                {/*<Project icon={"Indexer"} name={"Minigame-Master"} date={"22.02.03~02.07"}*/}
                {/*         tags={[spigot, java]} description={"adf"}/>*/}
                {/*<Project icon={"Indexer"} name={"Pri"} date={"2022.01.01~2022.03.03"}*/}
                {/*         tags={[unity]} description={"adf"}/>*/}
                <Project
                    link={"/project/genshin-calculator"}
                    icon={"Paimon"} name={"Genshin Calculator"} date={"2023.08.12~"}
                    tags={["react", "javaScript", "typeScript"]}
                    description={"'원신' 게임의 각종 시스템을 더욱 효율적으로 하기 위해 계산해주는 서비스"}/>
                <Project
                    link={"/project/survival-from-the-epidemic"}
                    icon={"JunSal"} name={"전염병으로부터 살아남기"} date={"2023.09.07~2023.12.03"}
                    tags={["unity", "csharp"]}
                    description={"학교에 퍼지는 전염병을 방역하여 살아남아야 하는 게임"}/>
            </ProjectBox>
        </GBody>
    </>
}

const ProjectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 40px;
  align-self: stretch;
  flex-wrap: wrap;
`

export default Projects;