import { GBody } from "../../components/layout/globalLayouts";
import { Txt } from "../../components/Txt";
import Project from "../../components/Project";
import { DefaultTag } from "../../components/Tag";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Projects = () => {
    return <>
        <GBody>
            <Txt typography={"H0"}>Project</Txt>
            <ProjectBox>
                <Link to={"/project/skyblock"}>
                    <Project
                        icon={"SBR"} name={"SkyblockRemake (SBR)"} date={"22.03.07~"}
                        tags={[DefaultTag.spigot, DefaultTag.java, DefaultTag.sql, DefaultTag.sqlite]}
                        description={"마인크래프트 서버중 하나인 Hypixel의 Skyblock이라는 미니게임이 재미있어서 어쩌다 보니 혼자 직접 구현해버린 프로젝트"}/>
                </Link>
                <Link to={"/project/rice-paper"}>
                    <Project
                        icon={"RicePaper"} name={"RicePaper"} date={"22.04.29~05.30"}
                        tags={[DefaultTag.java, DefaultTag.html, DefaultTag.javaScript]}
                        description={"학교 급식을 Discord로 손쉽게 보고 급식 시간이 다가오면 푸시 알림까지 해 주는 서비스"}/>
                </Link>
                <Project
                    icon={"Lite24"} name={"Lite24"} date={"22.04.29~05.30"}
                    tags={[DefaultTag.spigot, DefaultTag.java, DefaultTag.kotlin, DefaultTag.sql, DefaultTag.sqlite]}
                    description={"마인크래프트 서버 Lite24를 직접 운영하고 유지보수한 프로젝트"}/>
                <Project
                    icon={"BeatTable"} name={"BeatTable"} date={"22.04.29~05.30"}
                    tags={[DefaultTag.unity, DefaultTag.csharp]}
                    description={"테이블 형식의 색다른 리듬게임"}/>
                {/*<Project icon={"Indexer"} name={"Minigame-Master"} date={"22.02.03~02.07"}*/}
                {/*         tags={[DefaultTag.spigot, DefaultTag.java]} description={"adf"}/>*/}
                {/*<Project icon={"Indexer"} name={"Pri"} date={"2022.01.01~2022.03.03"}*/}
                {/*         tags={[DefaultTag.unity]} description={"adf"}/>*/}
                <Project
                    icon={"Paimon"} name={"Genshin-Calculator"} date={"23.08.12~"}
                    tags={[DefaultTag.react, DefaultTag.javaScript, DefaultTag.typeScript]}
                    description={"'원신' 게임의 각종 시스템을 더욱 효율적으로 하기 위해 계산해주는 서비스"}/>
                <Project
                    icon={"JunSal"} name={"전염병으로부터 살아남기"} date={"23.09.07~12.03"}
                    tags={[DefaultTag.unity, DefaultTag.csharp]}
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