import { GBody } from "../../components/layout/globalLayouts";
import { Txt } from "../../components/Txt";
import Project from "./Project";
import styled from "styled-components";
import useIrl from "../hooks/useIrl";

const Libraries = () => {
  const { key } = useIrl();

  return (
    <>
      <GBody>
        <a id={"Library"}>
          <Txt typography={"H0"}>Library</Txt>
        </a>
        <LibraryBox>
          <Project
            link={`/library/PerfectContributionsView/${key}`}
            icon={"PerfectContributionsView"}
            name={"PerfectContributionsView"}
            date={"2022.06.01~"}
            tags={["Swift"]}
            description={
              "🌳 Library created to create GitHub contributions 🌲"
            }
          />
          <Project
            link={`/library/XCamerakit/${key}`}
            icon={"XCameraKit"}
            name={"XCameraKit"}
            date={"2022.06.16~2022.11.09"}
            tags={["Swift", "AVFoundation"]}
            description={
              "🎆 A library created to use the camera easily 🌌"
            }
          />
          <Project
            link={`/library/VisitHistoryWebView/${key}`}
            icon={"VisitHistoryWebView"}
            name={"VisitHistoryWebView"}
            date={"2024.06.30~"}
            tags={["Swift", "WebKit"]}
            description={
              "🛜 인터넷 방문기록을 받아오는 iOS 웹 뷰 라이브러리 🧿"
            }
          />
          {/* <Project
            link={`/library/Graps/${key}`}
            icon={"Graps"}
            name={"Graps"}
            date={"2023.12.13~"}
            tags={["Swift"]}
            description={
              "모듈의 의존성을 참조하는 그래프를 보여주는 라이브러리"
            }
          /> */}
        </LibraryBox>
      </GBody>
    </>
  );
};

const LibraryBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 40px;
  align-self: stretch;
  flex-wrap: wrap;
`;

export default Libraries;
