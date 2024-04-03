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
            "다른사람들에게 알려주고 공유하는것을 좋아합니다."
          </Txt>
        </ProfileInner>
      </ProfileDiv>
      <ProfileDescription style={{"margin": "80px"}}>
        <FocusTxt>Why iOS?</FocusTxt>
        <Txt typography={media ? "P1" : "P0"} center>
          고등학교 1학년 때부터 iOS 개발을 시작했습니다.
        </Txt>
        <Txt typography={media ? "P1" : "P0"} center>
          처음에는 애플 제품을 좋아하고 앱 사용 시간이 많은 평범한
          학생이었습니다.
        </Txt>
        <Txt typography={media ? "P1" : "P0"} center>
          개발을 하면서 이론을 공부하고 UI를 만들고 구조를 설계하는 과정에서 큰
          즐거움을 느꼈습니다.
        </Txt>
      </ProfileDescription>
      <TagDiv>
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
          {DefaultTag.RxTest}
          {DefaultTag.Swinject}
        </TagBox>
        <TagBox $align={"center"}>
          {DefaultTag.MVC}
          {DefaultTag.MVP}
          {DefaultTag.MVVM}
          {DefaultTag.RIBs}
          {DefaultTag.Flux}
          {DefaultTag.TCA}
        </TagBox>
      </TagDiv>
      <TimeIdx>
        <Txt>교내 활동&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;교외 활동</Txt>
        <TimeFrame
          date={"2021.10.01"}
          text={"정보처리기능사 자격증 취득"}
          out
        />
        <TimeFrame date={"2022.06.01"} text={"PerfectContributionsView 라이브러리 개발"} out/>
        <TimeFrame date={"2022.06.02"} text={"Info 동아리 입부"} />
        <TimeFrame date={"2022.07.6~2023.12.01"} text={"iOStudy (교내 스터디)"} />
        <TimeFrame date={"2022.12.08~2022.12.09"} text={"2022AppJam"} out />
        <TimeFrame
          date={"2023.02.27~"}
          text={"공부: ADPattern"}
          out
        />
        <TimeFrame date={"2023.03.13~"} text={"info-iOS (동아리 스터디)"} />
        <TimeFrame
          date={"2023.04.07~2023.12.01"}
          text={"프로젝트: SecureMarshmallow"}
          highlight={"Orange"}
        />
        <TimeFrame
          date={"2023.04.25"}
          text={"원티드 iOS 프리온보딩 참여"}
          out
        />
        <TimeFrame
          date={"2023.05.18~2023.07.13"}
          text={"프로젝트: Today"}
          highlight={"Orange"}
        />

        <TimeFrame date={"2022.06.16~2022.11.09"} text={"XCameraKit 라이브러리 개발"} out />

        <TimeFrame
          date={"2023.08.08~2023.02.19"}
          text={"프로젝트: LookMonster"}
          highlight={"Orange"}
          out
        />
        <TimeFrame date={"2023.07.05~2023.07.07"} text={"교내 해커톤"} />
        <TimeFrame
          date={"2023.07.12~2023.07.14"}
          text={"데프콘 부스 운영"}
        />       
        <TimeFrame date={"2023.07.18"} text={"KWDC 컨퍼런스 참여"} out />
        <TimeFrame
          date={"2023.10.26~"}
          text={"프로젝트: 마음가짐"}
          highlight={"Orange"}
        />
        <TimeFrame date={"2023.11.13~"} text={"Tuist-Junha"} out />
        <TimeFrame date={"2023.12.13~"} text={"Graps"} out />
        <TimeFrame date={"2024.04.01~"} text={"AVSlider"} out />
        <TimeFrame
          date={"2024.03.28~"}
          text={"프로젝트: Shalo"}
          highlight={"Orange"}
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
