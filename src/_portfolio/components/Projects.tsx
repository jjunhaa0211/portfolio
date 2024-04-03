import { GBody } from "../../components/layout/globalLayouts";
import { Txt } from "../../components/Txt";
import Project from "./Project";
import styled from "styled-components";
import useIrl from "../hooks/useIrl";

const Projects = () => {
  const { key } = useIrl();

  return (
    <>
      <GBody>
        <a id={"project"}>
          <Txt typography={"H0"}>Project</Txt>
        </a>
        <ProjectBox>
          <Project
            link={`/project/beat-table/${key}`}
            icon={"마음가짐"}
            name={"마음가짐"}
            date={"2022.10.26~2022.12.09"}
            tags={["Swift", "Snpkit", "Then"]}
            description={"쌈@뽕한 헬스 앱을 찾는다면 마음가짐"}
          />
          <Project
            link={`/project/skyblock/${key}`}
            icon={"SM"}
            name={"SecureMarshmallow"}
            date={"2023.04.07~2023.12.01"}
            tags={["Swift", "Snpkit", "Then", "IOSSecuritySuite", "RxSwift"]}
            description={"사용자의 개인정보를 안전하게 : SecureMarshmallow🔓"}
          />
          <Project
            link={`/project/rice-paper/${key}`}
            icon={"Today"}
            name={"Today"}
            date={"2022.04.29~2022.05.30"}
            tags={["Swift", "Snpkit", "Then"]}
            description={
              "아이패드를 활용하여 손쉽게 인생 네컷 및 폴라로이드 사진을 만들고 꾸미고 보정할 수 있는 서비스"
            }
          />
          <Project
            link={`/project/lite24/${key}`}
            icon={"LookMonster"}
            name={"LookMonster"}
            date={"2023.08.02~2023.11.07"}
            tags={["Swift", "Snpkit", "Then"]}
            description={"🎱 개성을 찾아 스타일을 공유하는 트렌디한 패션 앱 🥋"}
          />
          <Project
            link={`/project/genshin-calculator/${key}`}
            icon={"Shalo"}
            name={"Shalo"}
            date={"2023.03.28~"}
            tags={["Swift", "Snpkit", "Then"]}
            description={"모바일로 손쉽게 영상을 편집하는 툴"}
          />
        </ProjectBox>
      </GBody>
    </>
  );
};

const ProjectBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  & > div:nth-child(1) {
    grid-column: 1 / span 2;
    .kfc {
      height: 360px;
      flex-direction: column;
      align-items: start;
    }
    .gun {
      flex: 0;
    }
  }
`;

export default Projects;
