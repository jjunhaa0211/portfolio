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

const Maeumgajim = () => {
  const media = useMediaQuery({ query: "(min-width: 768px)" });

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
        검토하고, PL과의 정기적인 소통을 통해 팀을 체계적으로 관리했습니다.
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
      <P>• iOS 개발</P>
      <P2>
        홈 개발에서 걸음수 데이터를 받아오는 기능과 명언을 불러오는 기능
        마지막으로 루틴기능과 메트로늄 기능을 구현했습니다.
      </P2>
      <P2>숏폼 영상을 불러오는 기능을 구현했습니다.</P2>
      <P2>클린 아키텍처를 사용한 네트워크 모듈을 구축하였습니다.</P2>
      <P2>
        마음가짐의 디자인 시스템과 관련 코드의 의존성과 코드스타일 리펙토링을
        하였습니다.
      </P2>

      <H3>문제 상황과 해결점</H3>
      <H5>스크린샷 감지 모듈 문제 해결</H5>
      <Block_2> 문제 상황 </Block_2>
      <P>
        사용자가 스크린샷을 찍으면 경고창이 호출되지만, 설정 페이지에 정확한
        세부 정보가 표시되지 않고 있습니다. 또한, 사용자가 스크린샷을 찍어도
        경고창이 표시되지 않는 문제가 발생하고 있습니다.
      </P>
      <P>`해결 방법`</P>
      <P>
        💡 UIApplication을 사용하여 **`userDidTakeScreenshotNotification`**을
        구독하는 코드를 작성하고, OperationQueue.main을 사용하여 앱이 실행되는
        동안 계속해서 감시하도록 하였습니다. 앱에서 스크린샷이 감지되면 이를
        Date 배열로 받아와서 UserDefaults에 저장하는 방식을 사용하였습니다.
      </P>

      <H3>📚 회고</H3>
      <P></P>
    </>
  );
};

export default Maeumgajim;
