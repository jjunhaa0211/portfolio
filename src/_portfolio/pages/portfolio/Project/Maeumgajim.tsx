import {
  H3,
  P,
  Tags,
  Top,
  URLBox,
  URLItem,
  Lefter,
  Img,
  H5,
  P2,
  P3,
  Details,
  Block_2,
} from "../../../components/layout/projectLayout";
import { GIcon } from "../../../../components/GIcon";
import { Txt } from "../../../../components/Txt";
import { DefaultTag, keyOfDefaultTag } from "../../../../components/Tag";
import YouTube from "react-youtube";
import { useMediaQuery } from "react-responsive";
import useMoonerDown from "../../../../utils/editor/hook/useMoonerDown";
import Video1 from "./메트로눔.mp4";
import Video2 from "./피클.mp4";
import Video3 from "./mgd4.mp4";
import { color } from "framer-motion";

const Maeumgajim = () => {
  const media = useMediaQuery({ query: "(min-width: 768px)" });
  const { Result } = useMoonerDown(`##### 프로젝트 관리자(PM)로서의 경험
  프로젝트를 진행하면서 프로젝트 관리자(PM)로서 느낀 점은, 팀원간의 소통과 개발 프로세스에 대한 중요성이었습니다.
  팀원 간의 소통을 강화하기 위해 여러 노력을 했음에도 불구하고, 인원이 많아짐에 따라 소통의 어려움과 불만이 생기기도 했습니다.
  특히, 일부 분야가 다른 분야보다 뒤처지는 상황에서는 프로젝트 이탈 위기도 겪었습니다.
  이러한 문제를 해결하기 위해, 늦어진 분야에게 추가 개발 기간을 부여하고, 다른 분야는 이시간을 활용하여 코드의 질을 높이는 리펙토링 작업을 진행하게 했습니다.
  이러한 조치를 통해 팀원 간의 워크플로우가 조화를 이루기 시작하였습니다. 또한 동아리 장기 프로젝트인 만큼 6개월을 넘기며 프로젝트에 지친 팀원이 생기는 문제에 직면하였고 누구 한병이라도 빠지면 배포도 못하는 상황이 었습니다. 인원을 추가하기에는 여러문제가 발생할 것을 우려되어 고민을 했습니다. 저희 인원은 프론트엔드 5명과 iOS 2명, 안드로이드 2명, 백엔드 3명, 데브옵스 2명으로 구성되어있었습니다. 저의 판단으로 부분 웹뷰를 도입했습니다.
  iOS, 안드로이드는 현재 첫 배포에는 웹뷰를 사용하다가 추후에 앱 최적화를 하는 것을 목표로 하면서 문제를 해결하였으며 프로젝트를 단위 배포하기로 했습니다.
  
  ##### iOS 개발자로서의 경험  
  iOS 개발자로서 이번 프로젝트에서는 MVVM 아키텍처와 Tuist 구조 설계를 경험했습니다.
  슈퍼앱 개발의 일환으로, 하나의 클래스도 코드의 질을 떨어뜨리지 않기 위해 노력했습니다.
  클린 아키텍처 도입으로 서버 간 통신 코드를 깔끔하게 구현했으며, 직접 개발한 Logger를 통해 앱 내 에러 위치와 성능 개선을 했습니다.
  RxFlow를 도입해 코디네이터 기반 로직을 구상하고, 유닛 테스트와 UI 테스트를 위해 VoiceOver 기반의 Mango 라이브러리를 만들었습니다. 그리고 헬스 관련 라이브러리 MindGymKit을 개발하였습니다.
  그리고 스냅샷 테스트를 통해 이미지 기반의 소통을 가능하게 했으며, XCameraKit을 사용한 카메라 기능 구현, 데모앱 작업을 통해 프로젝트 빌드 시간 단축 등을 경험했습니다. 또한 데브옵스와 협업을 통해 Tuist 배포 방식과 xcode cloud를 통한 배포 방식, Tuist 타겟 관리 이론, Pickle 기능에서의 우선순위 큐 알고리즘을 적용해보는 경험을 갖게 되었습니다.`);

  const { Result: Result1 } =
    useMoonerDown(`- 각 Feature 간의 **독립적인 개발 환경**을 보장하기 위해 Feature Interface 도입
  - 모듈을 분리하여 **응집도를 높이고** **결합도가 낮은** 환경을 구축
  - Demo를 통해서 앱을 **개별 환경에서 테스트** 가능
  - 모든 Feature 모듈에는 테스트를 작성하여 **높은 신뢰성**과 **유지보수 개선**
  `);

  const { Result: Result2 } =
    useMoonerDown(`- Presentation, Data, Domain Layer를 분리해서 의존성을 효율적으로 관리했습니다
  - 전체적인 클린아키텍처를 적용했습니다.
  - MVVM Pattern으로 UI와 비즈니스 로직 분리
  - inout을 사용해서 효울적인 MVVM 구축`);

  const { Result: Result3 } = useMoonerDown(`###### 클린 아키텍처 분활 문제
  \`문제 상황\`
  클린 아키텍처를 도입하면서 모듈 구조를 Data, Domain, Network를 분리하였으나 서로 모듈간의 **의존성이 꼬여서** Network가 Data를 알고 있고 Domain과 Data가 **서로 순환이 일어나고** 있는 문제가 발생했습니다.
  \`해결 방법\`
  💡모듈 로직을 Domain과 Network를 Data 의존성을 부여하는 그래프로 변경하여 프로젝트 내에서 Domain인 Network를 가지거나 Domain이 Data를 알게 되면 에러가 나오도록 처리하였습니다. 그리고 코드 내에서 **프로토콜을 사용**하여 통신하는 구조로 바꾸어서 모든 모듈에는 전 단계의 프로토콜을 만들어줌으로써 **ViewModel과 UseCase간의 통신을 원활**하게 하였으며 이 밖에서 프로토콜을 사용하여 Repository, service로직을 **서로 다른 모듈에서 접근**할 수 있도록 구현했습니다.
  
  ###### 스냅샷 테스트와 VoiceOver 테스트 도입
  \`문제 상황\`
  마음가짐 프로젝트가 커지면서 빌드 시간이 오래 걸리고 QA를 진행하면서 바로바로 빌드하는 것에 대한 **번거로움**을 느꼈습니다. 빌드의 시간은 캐시를 삭제 할때 마다 늘어만 갔으며 **팀원 간의 소통에 부재**도 발생하였고 무엇보다 **회의 시간이 길어지는 문제**가 발생했습니다.
  \`해결 방법\`
  Snapshot Test를 도입하면서 팀원이 원하는 코드를 테스트를 실행하여 스크린샷 파일을 **빌드 파일보다 훨씬 빨리 가져올 수 있게 되었습니다.** 또한 VoiceOver를 도입하면서 QA 시간에 정해진 UI를 테스트할 수 있도록 뱅크샐러드에서 만든 AXSnapshot 수정해서 만든 **Mango라는 마음가짐 전용 테스트** 라이브러리를 개발하게 되었습니다. 이로인해서 iOS 개발자들은 Snapshot Test를 도입하면서 **소통 시간을 단축**하였고 Mango를 사용하여 프로젝트의 **QA 시간을 단축**할 수 있습니다.`);

  const { Result: Result4 } = useMoonerDown(`
  ### 현재의 마음가짐
  마음가짐은 오는 6월 초에 배포될 예정입니다. 이미 TestFlight를 통해 **배포 준비가 완료**되었고, 현재는 xcodeCloud에도 업로드된 상태입니다. 처음에 14명으로 시작한 마음가짐 프로젝트는 이제 3기를 맞이하여 20명의 개발자들과 함께 개발을 진행하고 있습니다. 이 프로젝트에는 **데브옵스 2명**, **iOS 개발자 5명**, **백엔드 개발자 4명**, **플러터 개발자 3명**, **프론트엔드 개발자 6명**이 참여하고 있어 대규모 프로젝트로 성장했습니다.
  프론트들과 **웹뷰에 적용**에 대해서 참여해 볼 수 있는 경험을 하였고 백엔드 팀원과의** API 통신을 경험**해보고 데브옵스에게 **iOS 배포 방법**에 대해서 함께 고민해보는 시간을 가질 수 있었습니다.
  초기에는 **"좋은 코드란 무엇일까?"**에 대한 고민을 많이 했습니다.** 마음가짐** 프로젝트를 진행하며 좋은 코드를 작성하는 방법에 대해 고민하고, 이를 적용해보았습니다. 팀원들과 함께 코드를 구체화하고, 다양한 아키텍처를 도입하며 슈퍼앱을 만들기 위해 노력했습니다.
  앞으로도 프로젝트에 지속적으로 참여하여 후배들에게 더 좋은 코드를 보여줄 수 있도록 노력할 것입니다. 더 많은 사람들이 건강해질 때까지 항상 새로운 마음가짐으로 쉬지 않고 달릴 예정입니다!`);

  const { Result: Result5 } = useMoonerDown(
    `모듈화를 통한 **빌드 속도 (19.5초 -> 8.2초) 단축**`
  );

  return (
    <>
      <Top>
        <GIcon icon={"마음가짐"} width={"100px"} />
        <Txt typography={"H0"}>
          마음가짐 <Txt typography={"P1"}>2023.09.18~</Txt>
        </Txt>
      </Top>
      <Tags>
        {[
          "Swift",
          "Snpkit",
          "Then",
          "RxSwift",
          "RxFlow",
          "Moya",
          "OAuth",
          "swiftSnapshotTesting",
          "Tuist",
          "xcodeCloud",
          "MVVM"
        ].map((v) => DefaultTag[v as keyOfDefaultTag])}
      </Tags>

      <URLBox>
        <URLItem
          icon={"마음가짐"}
          text={
            "운동 숏폼 시청, 루틴, 운동 방법 등을 제공하는 종합 헬스 애플리케이션"
          }
        >
          <Txt>한줄 요약</Txt>
        </URLItem>
      </URLBox>

      <URLBox>
        <URLItem
          icon={"Github"}
          url={"https://github.com/MaeumGaGym/MaeumGaGym_iOS"}
        >
          <Txt>Github (Project)</Txt>
        </URLItem>
        <URLItem
          icon={"Github"}
          url={"https://github.com/MaeumGaGym/MindGymKit"}
        >
          <Txt>Github (Health Library)</Txt>
        </URLItem>
        <URLItem icon={"Github"} url={"https://github.com/MaeumGaGym/Mango"}>
          <Txt>Github (Testing Library)</Txt>
        </URLItem>
        <URLItem
          icon={"Github"}
          url={"https://github.com/MaeumGaGym/MaeumGaGym-iOS-Structure"}
        >
          <Txt>Github (Tuist Structure)</Txt>
        </URLItem>
      </URLBox>

      <Lefter>
        <Img
          url={"banner/mgBanner.webp"}
          width={"100%"}
          border={"0"}
          align={"center"}
        />
      </Lefter>

      <H3>개요</H3>
      <P>
        운동 숏폼 시청, 루틴, 운동 방법 등을 제공하는 종합 헬스
        애플리케이션입니다. 한국건강증진개발원과 대한비만학회가 공동 진행한 연구
        결과의 따르면 국민 10명 중 4명은 코로나 이전과 비교해 체중이 증가했다고
        합니다. 체중 증가의 주된 이유로는 일상생활에서의 활동량 감소(52.1%) 혹은
        운동 감소(34.3%)가 가장 큰 원인이라고 합니다. 이런 체중 증가 및 운동
        감소 문제를 해결하는 것이 마음가짐의 목적입니다. 6월말 1차 배포를 앞두고
        있습니다.
      </P>

      <H3>역할</H3>
      <P>프로젝트 PM과 iOS 앱개발(70%)을 담당했습니다.</P>
      <H5>PM</H5>
      <P>• 일정 관리 및 기획 개발 과정 관리</P>
      <P2>
        프로젝트의 첫 단계부터 배포까지, 15명의 팀원을 성공적으로 이끌었습니다.
        이 과정에서, 정보 구조화(IA) 설계부터 팀 운영의 효율성을 증대하기 위해
        에자엘(Agile)을 도입했습니다.
      </P2>
      <P2>
        매주, 프로젝트 리더(PL)로부터 진행 상황과 이슈에 대한 상세한 보고를 받아
        검토하고, 개발 프로세스 진행관리와 프로젝트 리더(PL)와 정기적인 소통을
        통해 팀을 체계적으로 관리했습니다. 이러한 과정을 통해, 모든 팀원이
        동일한 목표를 향해 일체감을 가지고 개발할 수 있도록 조력했습니다.
      </P2>
      <P2>
        팀원들이 불합리하다고 느낄 수 있는 기능 요구나 겪는 어려움에 대해서는,
        직접 해결 방안을 모색하며 팀원들의 신뢰를 얻는 프로젝트
        매니저(PM)가 되기 위해 지속적으로 노력했습니다.
      </P2>

      <H5>iOS</H5>
      <P>• 프로젝트의 구조 설계자</P>
      <P2>
        Tuist를 사용하여 iOS 팀원의 효율적인 프로젝트 환경을 제공할 수
        있도록 모듈 설계와 모듈에 맞는 아키텍쳐를 설계했습니다.
      </P2>
      <P2>
        마음가짐 모듈은 SOLID를 준수하고 있기 때문에 OOP를 지키기 위해서 하나의
        모듈에 하나의 기능을 테스트할 수 있도록 데모앱을 진행하고,
      </P2>
      <P2>
        이를 통해 하나의 기능을 분산하고 따로 데모로 빼내주어 기능마다 앱을
        설계함으로 러닝 타임을 감소시켰습니다.
      </P2>
      <P2>{Result5}</P2>
      <P>• iOS 개발자</P>
      <P2>RxSwift + MVVM을 사용하여 inout 개념 도입</P2>
      <P2>
        MVVM을 보다 쉽게 사용하기 위해서 제네릭을 통한 View와 ViewModel 연결
        방식 채택
      </P2>
      <P2>
        클린 아키텍처를 도입하고 Data, Domain, Network를 사용하여 서버 연동 구현
      </P2>
      <P2>Coordinator Pattern + RxFlow를 도입하여 화면 이동 관리</P2>
      <H3>문제 상황과 해결점</H3>
      {Result3}

      <H3>회고</H3>
      {Result}

      {Result4}

      <H3>세부 사항</H3>
      <Details>
        <summary>Tuist 구조도</summary>
        <div style={{ display: "flex" }}>
          <Img
            url={"mg/mgGraph.webp"}
            width={"100%"}
            border={"0"}
            align={"center"}
          />
          {Result1}
        </div>
      </Details>
      <Details>
        <summary>아키텍처 로직</summary>
        <div style={{ display: "flex" }}>
          <Img
            url={"mg/마음가짐구조.webp"}
            width={"100%"}
            border={"0"}
            align={"center"}
          />
          {Result2}
        </div>
      </Details>
      <Details>
        <summary>앱 화면</summary>
        <div style={{ display: "flex", flexDirection: "column", rowGap: 24 }}>
          <div style={{ display: "flex" }}>
            <Img
              url={"mg/온보딩.webp"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
            <Img
              url={"mg/약관.webp"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
            <Img
              url={"mg/닉네임.webp"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
            <Img
              url={"mg/메인.webp"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
          </div>
          <div style={{ display: "flex" }}>
            <Img
              url={"mg/mgp5.webp"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
            <Img
              url={"mg/mgp3.webp"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
            <Img
              url={"mg/mgp1.webp"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
            <Img
              url={"mg/mgp4.webp"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
          </div>
          <div style={{ display: "flex" }}>
            <Img
              url={"mg/mgp2.webp"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
            <Img
              url={"mg/mgp6.webp"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <video
                src={Video1}
                controls
                style={{ width: "80%", objectFit: "cover" }}
              ></video>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <video
                src={Video2}
                controls
                style={{ width: "80%", objectFit: "cover" }}
              ></video>
            </div>
          </div>
        </div>
      </Details>
      <Details style={{ alignItems: "center" }}>
        <summary>개발 UI</summary>
        <div style={{ display: "flex" }}>
          <Img
            url={"mg/마음가짐바탕.webp"}
            width={"80%"}
            border={"0"}
            align={"center"}
          />
          <Img
            url={"mg/마짐.webp"}
            width={"60%"}
            border={"0"}
            align={"center"}
          />
          <Img
            url={"mg/마음가짐프로젝트.webp"}
            width={"80%"}
            border={"0"}
            align={"center"}
          />
                  <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}>
            <video
              src={Video3}
              controls
              style={{ width: "100%", objectFit: "contain" }}
            ></video>
          </div>
        </div>
          <div style={{ display: "flex" }}>
            <Img
              url={"mg/마음가짐사진.webp"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
            <Img
              url={"mg/마음가짐사진2.webp"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
          </div>
      </Details>
    </>
  );
};

export default Maeumgajim;
