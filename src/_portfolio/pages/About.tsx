import { Txt } from "../../components/Txt";
import { GIcon } from "../../components/GIcon";
import { DefaultTag } from "../../components/Tag";
import TimeFrame from "../../components/TimeFrame";
import { GBody } from "../../components/layout/globalLayouts";
import styled from "styled-components";

const About = () => {
    return <GBody>
        <Txt typography={"H0"}>About</Txt>
        <ProfileDiv>
            <GIcon icon={"Profile"} width={"160px"} height={"160px"}/>
            <ProfileInner>
                <Txt typography={"H2"}>문성화</Txt>
                <Txt typography={"H4"}>Game Client Developer</Txt>
                <Txt>"당신에게 가치있는 사람이 되는 것이 목표입니다."</Txt>
            </ProfileInner>
        </ProfileDiv>
        <ProfileDescription>
            <Txt center>여러 분야의 개발을 할 수 있지만, 그 중에서도 게임 개발을 가장 좋아합니다.</Txt>
            <Txt center>내가 할 수 있는 것과 도전 하고 싶은 것을 모두 시도해보며 다양한 분야와 같이 소통이 가능한 개발자입니다.</Txt>
        </ProfileDescription>
        <TagDiv>
            <TagInnerDiv>
                {DefaultTag.unity}
                {DefaultTag.springBoot}
                {/*{DefaultTag.android}*/}
                {DefaultTag.react}
                {DefaultTag.spigot}
            </TagInnerDiv>
            <TagInnerDiv>
                {DefaultTag.csharp}
                {DefaultTag.java}
                {DefaultTag.kotlin}
                {DefaultTag.html}
                {DefaultTag.javaScript}
                {DefaultTag.typeScript}
            </TagInnerDiv>
        </TagDiv>
        <TimeIdx>
            <Txt>교내 활동&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;교외 활동</Txt>
            <TimeFrame date={"2022.04.04"} text={"게임 개발 동아리 Team.QSS 입부"}/>
            <TimeFrame date={"2022.03.07~"} text={"프로젝트: SkyblockRemake (SBR)"} highlight={"Orange"} out/>
            <TimeFrame date={"2022.04.29~2022.05.30"} text={"프로젝트: RicePaper"} highlight={"Orange"}/>
            <TimeFrame date={"2022.04.29~2022.05.30"} text={"프로젝트: Lite24"} highlight={"Orange"} out/>
            <TimeFrame date={"2022.04.29~2022.05.30"} text={"프로젝트: BeatTable"} highlight={"Orange"}/>
            <TimeFrame date={"2022.12.07~2022.12.09"} text={"대한민국 소프트웨어대전, 소프트웨이브 2022 Team.QSS 부스 운영"} highlight={"Green0"}/>
            <TimeFrame date={"2022.12.09"} text={"정보처리기능사 자격증 취득"} out/>
            <TimeFrame date={"2023.01.29~2023.02.28"} text={"대전광역시노숙인종합지원센터 내부망 구축"} out/>
            {/*<TimeFrame date={"2022.02.03~2022.02.07"} text={"프로젝트: Minigame-Master*"} highlight={"Orange"}/>*/}
            <TimeFrame date={"2023.03.01~"} text={"게임 개발 동아리 Team.QSS 부장"}/>
            <TimeFrame date={"2023.04.03~2023.04.06"} text={"2023년 지방기능경기대회 - 게임 개발 (금상)"} highlight={"Green0"} out/>
            <TimeFrame date={"2023.05.13"} text={"2023 PlayX4 참여"} out/>
            <TimeFrame date={"2023.05.20"} text={"TOPCIT 19회 정기평가 - 473점"} out/>
            <TimeFrame date={"2023.05.26"} text={"컴퓨터그래픽스운용기능사 자격증 취득"} out/>
            <TimeFrame date={"2023.07.06"} text={"2023년 교내 해커톤 대회: Mars (게임) (전체 3위)"} highlight={"Green0"}/>
            <TimeFrame date={"2023.07.12"} text={"교내 프로젝트 공모전 '데프콘' BeatTable 부스 운영"}/>
            {/*<TimeFrame date={"2023.07.17~2023.07.23"} text={"프로젝트: PrivateChat*"} highlight={"Orange"} out/>*/}
            <TimeFrame date={"2023.08.12~"} text={"프로젝트: Genshin-Calculator"} highlight={"Orange"} out/>
            <TimeFrame date={"2023.09.07~2023.12.03"} text={"프로젝트 실무: 전염병으로부터 살아남기"} highlight={"Orange"}/>
            <TimeFrame date={"2023.10.28"} text={"TOPCIT 20회 정기평가 - 638점"} out/>
            <Right><Txt typography={"P1"}>프로젝트 이름에 <Txt color={"Green0"}>*</Txt>는 가칭</Txt></Right>
        </TimeIdx>
    </GBody>;
};

const Right = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const TimeIdx = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`

const TagInnerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
`

const TagDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  align-self: stretch;
`

const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`

const ProfileInner = styled.div`
  display: flex;
  padding: 24px 0;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
`

const ProfileDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
`

export default About;