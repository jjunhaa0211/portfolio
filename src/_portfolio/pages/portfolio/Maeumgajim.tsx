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
} from "../../components/layout/projectLayout";
import { GIcon } from "../../../components/GIcon";
import { Txt } from "../../../components/Txt";
import { DefaultTag, keyOfDefaultTag } from "../../../components/Tag";
import YouTube from "react-youtube";
import { useMediaQuery } from "react-responsive";
import useMoonerDown from "../../../utils/editor/hook/useMoonerDown";

const Maeumgajim = () => {
  const media = useMediaQuery({ query: "(min-width: 768px)" });
  const {Result} = useMoonerDown(`### 회고
  ##### 프로젝트 관리자(PM)로서의 경험
  프로젝트를 진행하면서 PM(프로젝트 관리자)으로서 느낀 점은, 팀원간의 소통과 개발 프로세스에 대한 중요성이었습니다.
  팀원 간의 소통을 강화하기 위해 여러 노력을 했음에도 불구하고, 인원이 많아짐에 따라 소통의 어려움과 불만이 생기기도 했습니다.
  특히, 일부 분야가 다른 분야보다 뒤처지는 상황에서는 프로젝트 이탈 위기도 겪었습니다.
  이러한 문제를 해결하기 위해, 늦어진 분야에게 추가 개발 기간을 부여하고, 다른 분야는 이시간을 활용하여 코드의 질을 높이는 리펙토링 작업을 진행하게 했습니다.
  이러한 조치를 통해 팀원 간의 워크플로우가 조화를 이루기 시작하였습니다. 또한 3년간의 장기 프로젝트인 만큼 6개월을 넘기며 프로젝트에 지친 팀원이 생기는 문제에 직면하였고 누구 한병이라도 빠지면 배포도 못하는 상황이 었습니다. 인원을 추가하기에는 여러문에가 발생하여서 고민을 했습니다. 저희 인원은 프론트엔드 5명과 iOS 2명, 안드로이드 2명, 백엔드 3명, 데브옵스 2명으로 구성되어있었습니다. 저의 판단으로 부분 웹뷰를 도입했습니다.
  iOS, 안드로이드는 현재 첫 배포에는 웹뷰를 사용하다가 추루에 앱 최적화를 하는 것을 목표로 하면서 문제를 해결하였으며 프로젝트를 단위 배포하기로 했습니다.
  
  ##### iOS 개발자로서의 경험  
  iOS 개발자로서 이번 프로젝트에서는 MVVM 아키텍처와 Tuist 구조 설계를 경험했습니다.
  슈퍼앱 개발의 일환으로, 하나의 클래스도 코드의 질을 떨어뜨리지 않기 위해 노력했습니다.
  클린 아키텍처 도입으로 서버 간 통신 코드를 깔끔하게 구현했으며, 직접 개발한 Logger를 통해 앱 내 에러 위치와 성능 개선을 했습니다.
  RxFlow를 도입해 코디네이터 기반 로직을 구상하고, 유닛 테스트와 UI 테스트를 위해 VoiceOver 기반의 Mango 라이브러리를 만들었습니다. 그리고 헬스 관련 라이브러리 MindGymKit을 개발하였습니다.
  그리고 스냅샷 테스트를 통해 이미지 기반의 소통을 가능하게 했으며, XCameraKit을 사용한 카메라 기능 구현, 데모앱 작업을 통해 프로젝트 빌드 시간 단축 등을 경험했습니다. 또한 데브옵스와 협업을 통해 Tuist 배포 방식과 xcode cloud를 통한 배포 방식, Tuist 타겟 관리 이론, Pickle 기능에서의 우선순위 큐 알고리즘을 적용해보는 경험을 갖게되었습니다.`)

  return (
    <>
      <Top>
        <GIcon icon={"마음가짐"} width={"100px"} />
        <Txt typography={"H0"}>
          마음가짐 <Txt typography={"P1"}>2022.10.26~2022.12.09</Txt>
        </Txt>
      </Top>
      <Tags>
        {["unity", "csharp"].map((v) => DefaultTag[v as keyOfDefaultTag])}
      </Tags>

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
        감소 문제를 해결하는 것이 마음가짐의 목적입니다. 4월 4일 1차 배포를
        앞두고 있습니다.
      </P>

      <H3>역할</H3>
      <P>프로젝트 PM과 iOS 앱개발(70%)을 담당했습니다.</P>
      <H5>PM</H5>
      <P>• 일정 관리 및 기획 개발 과정을 주도</P>
      <P2>
        프로젝트의 첫 단계부터 배포까지, 14명의 팀원을 성공적으로 이끌었습니다.
        이 과정에서, 정보 구조화(IA) 설계부터 팀 운영의 효율성을 증대하기 위해
        에자엘(Agile)을 도입했습니다.
      </P2>
      <P2>
        매주, 프로젝트 리더(PL)로부터 진행 상황과 이슈에 대한 상세한 보고를 받아
        검토하고, 개발 프로세스 진행관리와 PL과의 정기적인 소통을 통해 팀을 체계적으로 관리했습니다.
        이러한 과정을 통해, 모든 팀원이 동일한 목표를 향해 일체감을 가지고
        개발할 수 있도록 조력했습니다.
      </P2>
      <P2>
        팀원들이 불합리하다고 느낄 수 있는 기능 요구나 겪는 어려움에 대해서는,
        직접 앞장서 해결 방안을 모색하며 팀원들의 신뢰를 얻는 프로젝트
        매니저(PM)가 되기 위해 지속적으로 노력했습니다.
      </P2>

      <H5>iOS</H5>
      <P>• 프로젝트의 구조 설계자</P>
      <P2>
        Tuist를 사용하여 저희 iOS 팀원들이 효율적인 프로젝트 환경을 경험할 수
        있도록 모듈 설계와 모듈에 맞는 아키텍쳐 설계를 했습니다.
      </P2>
      <P2>
        마음가짐 모듈은 SOLID를 준수하고 있어서 OOP를 지키기 위해서 하나의
        모듈에 하나의 기능을 테스트할 수 있도록 데모앱을 진행했습니다.
      </P2>
      <P2>
        이를 통해서 하나의 기능을 분산해서 따로 데모로 빼주면서 기능마다 앱을
        설계함으로 러닝 타임을 줄일 수 있었습니다.
      </P2>
      <P2>
        각각의 모듈은 모듈에 맞는 프레임워크를 지정해주면서 메모리 소모와 컴파일
        속도를 빠르게 가져오는 것을 알 수 있습니다.
      </P2>
      <P2>대충 성능 이미지</P2>
      <Details>
        <summary>Tuist 구조도</summary>
        <div style={{ display: "flex" }}>
          <Img
            url={"mg/mgGraph.webp"}
            width={"80%"}
            border={"0"}
            align={"center"}
          />
        </div>
      </Details>
      {Result}
    </>
  );
};

export default Maeumgajim;
