import { GBody } from "../../components/layout/globalLayouts";
import { Txt } from "../../components/Txt";
import styled from "styled-components";
import useIrl from "../hooks/useIrl";
import ToyProject from "./ToyProject";

const ToyProjects = () => {
  const { key } = useIrl();

  return (
    <>
      <GBody>
        <a id={"Toy"}>
          <Txt typography={"H0"}>Toy</Txt>
        </a>
        <div style={{ display: "flex", gap: 35 }}>
          <ToyBoxs>
            <ToyProject
              link={`/toy/Mint/${key}`}
              icon={"Mint"}
              name={"Mint"}
              date={"2023.07.06~2023.07.07"}
              tags={["Swift"]}
              description={
                "🌳 Library created to create GitHub contributions 🌲"
              }
            />
          </ToyBoxs>
          {/* <ToyBoxs>
            <ToyProject
              link={`/toy/AppLinkProject/${key}`}
              icon={"Link"}
              name={"나 혼자만 레벨업"}
              date={"2023.11.01~2023.11.03"}
              tags={["Swift"]}
              description={
                "🌳 Library created to create GitHub contributions 🌲"
              }
            />
          </ToyBoxs> */}
          <ToyBoxs>
            <ToyProject
              link={`/toy/ForcedBlockingSwift/${key}`}
              icon={"ForcedBlockingSwift"}
              name={"릴스 중독이라고? 차단해!"}
              date={"2024.01.24~2024.01.25"}
              tags={["Swift", "FamilyControls"]}
              description={
                "🌳 Library created to create GitHub contributions 🌲"
              }
            />
          </ToyBoxs>
          <ToyBoxs>
            <ToyProject
              link={`/toy/NFCProject/${key}`}
              icon={"NFC"}
              name={"삑-학생입니다~"}
              date={"2024.04.01~2024.04.02"}
              tags={["Swift", "CoreNFC"]}
              description={
                "🌳 Library created to create GitHub contributions 🌲"
              }
            />
          </ToyBoxs>
        </div>
        <div style={{ display: "flex", gap: 35 }}>
          <ToyBoxs>
            <ToyProject
              link={`/toy/Mafia/${key}`}
              icon={"Mafia"}
              name={"밤이 되었습니다!?"}
              date={"2024.04.16~2024.04.18"}
              tags={["Swift", "Socket"]}
              description={"마피아"}
            />
          </ToyBoxs>
          <ToyBoxs>
            <ToyProject
              link={`/toy/WeatherCard/${key}`}
              icon={"WeatherCard"}
              name={"WeatherCard"}
              date={"2024.05.27 ~ 2024.05.29"}
              tags={["TS", "ReactNative", "axios"]}
              description={"오늘하루의 날씨를 알려주는 앱"}
            />
          </ToyBoxs>
        </div>
      </GBody>
    </>
  );
};

const ToyBoxs = styled.div`
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

export default ToyProjects;
