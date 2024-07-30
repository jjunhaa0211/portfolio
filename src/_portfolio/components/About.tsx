import { Txt } from "../../components/Txt";
import { GIcon } from "../../components/GIcon";
import { DefaultTag, TagBox } from "../../components/Tag";
import TimeFrame from "./TimeFrame";
import { GBody } from "../../components/layout/globalLayouts";
import styled from "styled-components";
import { motions } from "../framer/motions";
import useIrl from "../hooks/useIrl";
import { useMediaQuery } from "react-responsive";
import { FontStyles } from "../../styles/font";

const About = () => {
  const media = useMediaQuery({ query: "(min-width: 768px)" });
  const { irl } = useIrl();

  return (
    <GBody>
      <a id={"about"}>
        <Txt typography={"H0"} id={"about"}>
          About
        </Txt>
      </a>
      <ProfileDiv>
        <GIcon
          icon={"Junha06"}
          width={media ? "160px" : "80px"}
          height={media ? "160px" : "80px"}
          border={"12px"}
        />
        <ProfileInner
          x={15}
          y={0}
          initial={{
            opacity: 0,
            translateX: "20px",
          }}
          whileInView={{
            opacity: 1,
            translateX: "0px",
          }}
          transition={{
            delay: 0.2,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Txt typography={media ? "H2" : "H3"}>{irl.name}</Txt>
          <Txt typography={media ? "H4" : "P2"}>iOS Developer</Txt>
          <Txt typography={media ? "P1" : "P0"}>
            "유연한 아키텍처 설계와 사용자 경험에 관심이 많은 엔지니어입니다."
          </Txt>
        </ProfileInner>
      </ProfileDiv>
      <ProfileDescription style={{ margin: "60px" }}>
        <FocusTxt>Why iOS?</FocusTxt>
        <Txt typography={media ? "P1" : "P0"} center></Txt>
        <Txt typography={media ? "P1" : "P0"} center>
          저는 다른 사람이 저의 수고로 더 나은 삶을 보장 받을 수 있게 되는 모습을 보며 성장해왔습니다.
        </Txt>
        <Txt typography={media ? "P1" : "P0"} center>
          그렇기에 제가 만든 앱이 누군가에게 도움이 되고 그들의 삶을 더 나은
          방향으로 선도할 수 있다면, 그것은 저에게 더할 나위 없는 행복입니다.
        </Txt>
        <Txt typography={media ? "P1" : "P0"} center>
          개발을 처음 접했을 때, 미래에 대한 여러 고찰이 있었지만, 그럴 때마다 의지를 다져가며 개발자로서의 마음가짐을 바로잡았습니다.
        </Txt>
        <Txt typography={media ? "P1" : "P0"} center>
          이러한 경험들이 모여 현재의 저를 만들었고 현재는 여러 언어를 학습하며 견문을 넓혀가고 있습니다.
        </Txt>
      </ProfileDescription>
      <TagDiv style={{ margin: "30px" }}>
        <FocusTxt style={{ marginBottom: "20px" }}>Skill</FocusTxt>
        <TagBox $align={"center"}>
          {DefaultTag.Swift}
          {DefaultTag.Snpkit}
          {DefaultTag.FlexLayout}
          {DefaultTag.PinLayout}
          {DefaultTag.Lottie}
          {DefaultTag.Kingfisher}
          {DefaultTag.Moya}
        </TagBox>
        <TagBox $align={"center"}>
          {DefaultTag.Then}
          {DefaultTag.RxCocoa}
          {DefaultTag.RxSwift}
          {DefaultTag.RealmSwift}
          {DefaultTag.Tuist}
          {DefaultTag.Swinject}
          {DefaultTag.Socket}
        </TagBox>
        <TagBox $align={"center"}>
          {DefaultTag.MVC}
          {DefaultTag.MVP}
          {DefaultTag.MVVM}
          {DefaultTag.RIBs}
          {DefaultTag.xcodeCloud}
          {DefaultTag.githubAction}
        </TagBox>
        <TagBox $align={"center"}>
          {DefaultTag.JS}
          {DefaultTag.TS}
          {DefaultTag.ReactNative}
          {DefaultTag.React}
          {DefaultTag.SCSS}
          {DefaultTag.GoogleMobileAds}
          {DefaultTag.CoreData}
        </TagBox>
      </TagDiv>
      <TimeIdx style={{ margin: "80px" }}>
        <Txt>교내 활동&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;교외 활동</Txt>
        <TimeFrame
          date={"2021.10.01"}
          text={"정보처리기능사 자격증 취득"}
          out
        />
        <TimeFrame
          date={"2022.03.03~"}
          text={"대덕소프트웨어 마이스터고 입학"}
        />
        <TimeFrame
          date={"2022.06.01"}
          text={"PerfectContributionsView 라이브러리 개발"}
          out
        />
        {/* <TimeFrame date={"2022.06.02"} text={"Info 동아리 입부"} /> */}
        <TimeFrame date={"2022.07.06~"} text={"iOStudy (교내 스터디)"} />
        <TimeFrame
          date={"2022.12.08~2022.12.09"}
          text={"2022AppJam 참가"}
          out
        />
        <TimeFrame
          date={"2023.03.03~"}
          text={"대덕소프트웨어 정보보안과 선택"}
        />
        <TimeFrame date={"2023.03.13~"} text={"info-iOS (동아리 스터디)"} />
        <TimeFrame
          date={"2023.04.25"}
          text={"원티드 iOS 프리온보딩 참여"}
          out
        />
        <TimeFrame
          date={"2023.05.18~2023.07.13"}
          text={"프로젝트: Today (인기상 수상)"}
          highlight={"Orange"}
        />

        <TimeFrame
          date={"2023.06.07~2023.08.04"}
          text={"프로젝트: SecureMarshmallow"}
          highlight={"Orange"}
        />

        <TimeFrame
          date={"2023.06.16~2023.11.09"}
          text={"XCameraKit 라이브러리 개발"}
          out
        />
        <TimeFrame date={"2023.07.05~2023.07.07"} text={"교내 해커톤 - Mint"} />
        <TimeFrame date={"2023.07.12~2023.07.14"} text={"데프콘 부스 운영"} />
        <TimeFrame date={"2023.07.18"} text={"KWDC 컨퍼런스 참여"} out />
        <TimeFrame
          date={"2023.08.17~2023.11.07"}
          text={"프로젝트: LookMonster"}
          highlight={"Orange"}
          out
        />
        <TimeFrame
          date={"2023.09.18~"}
          text={"프로젝트: 마음가짐"}
          highlight={"Orange"}
        />
        <TimeFrame date={"2023.11.13~"} text={"Tuist-Junha 작성"} out />
        {/* <TimeFrame date={"2023.12.13~"} text={"Graps"} out /> */}
        {/* <TimeFrame date={"2024.04.01~"} text={"AVSlider 라이브러리 개발"} out /> */}
        <TimeFrame
          date={"2024.03.28~2024.04.24"}
          text={"프로젝트: Shalo"}
          highlight={"Orange"}
        />
        <TimeFrame
          date={"2024.05.27~2024.05.29"}
          text={"프로젝트: WeatherCard"}
          highlight={"Orange"}
          out
        />
        <TimeFrame
          date={"2024.03.21~2024/06/14"}
          text={"프로젝트: Decofolio"}
          highlight={"Orange"}
        />
        <TimeFrame
          date={"2024.06.30~2024.07.02"}
          text={"VisitHistoryWebView 라이브러리 개발"}
          out
        />
        <TimeFrame
          date={"2024.07.09~2024/017/17"}
          text={"프로젝트: 자기주도"}
          highlight={"Orange"}
        />
        <TimeFrame
          date={"2024.07.29~2024.07.30"}
          text={"프로젝트: 콘티(Conty)"}
          out
        />
      </TimeIdx>
    </GBody>
  );
};

const FocusTxt = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  font-size: 2.2rem;
  font-weight: 900;
`;

const TimeIdx = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

const TagDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  align-self: stretch;
`;

const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const ProfileInner = styled(motions.fadeDiv)`
  display: flex;
  padding: 24px 0;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const ProfileDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

export default About;
