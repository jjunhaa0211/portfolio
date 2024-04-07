import {
  H3,
  H4,
  Img,
  Lefter,
  P,
  Tags,
  Top,
  URLBox,
  URLItem,
  P2,
  Details,
  H5,
  Block_2,
} from "../../components/layout/projectLayout";
import { GIcon } from "../../../components/GIcon";
import { Txt } from "../../../components/Txt";
import { DefaultTag, keyOfDefaultTag } from "../../../components/Tag";

const LookMonster = () => {
  return (
    <>
      <Top>
        <GIcon icon={"LookMonster"} width={"100px"} />
        <Txt typography={"H0"}>
          LookMonster <Txt typography={"P1"}>2022.08.08~2023.02.19</Txt>
        </Txt>
      </Top>
      <Tags>
        {["Swift", "RIBs", "Snpkit", "Then", "RxSwift", "RxCocoa"].map(
          (v) => DefaultTag[v as keyOfDefaultTag]
        )}
      </Tags>

      <URLBox>
        <URLItem
          icon={"Github"}
          url={"https://github.com/LookMonster/LookMonster-iOS"}
        >
          <Txt>Github (Project)</Txt>
        </URLItem>
        <URLItem
          icon={"Github"}
          url={"https://github.com/LookMonster/LooMonster-iOS-Structure"}
        >
          <Txt>Github (Structure)</Txt>
        </URLItem>
      </URLBox>

      <Lefter>
        <Img
          url={"banner/lookMonsterBanner.webp"}
          width={"100%"}
          border={"0"}
          align={"center"}
        />
      </Lefter>

      <H3>개요</H3>
      <P>개성을 찾아 스타일을 공유하는 트렌디한 패션 앱</P>

      <H3>역할</H3>
      <P2>
        Tuist 모듈을 최적화해서 RIBs 아키텍처에 맞도록 설계하는 작업을 했습니다.
        (아래 토글을 참고해주세요)
      </P2>
      <P2>
        RIBs 아키텍처를 사용해서 SOLID 원칙을 기반으로 가독성과 확장성을 높이는
        역할을 했으며 요번 프로젝트에서 복잡한 시스템 설계 및 최적화하였으며
        효율적인 프로젝트 관리 능력을 갖추기 위해 노력했습니다.
      </P2>
      <P2>
        애플리케이션과 확장성을 높게하고 쉘스크립트와 GithubAction 사용해서 CI를
        구축했습니다.
      </P2>
      <P2>
        유지보수가 편리하도록 디자인 시스템 구축을 주요 핵심으로 구성했습니다.
      </P2>

      <Details>
        <summary>Tuist 구조 설명</summary>
        {/* <Img url={"LM/LM.webp"} width={"100%"} border={"0"} align={"center"} /> */}
        <div style={{ display: "flex", width: "100%", marginTop: "10px" }}>
          <Img
            url={"LM/LMS.webp"}
            width={"100%"}
            border={"0"}
            align={"center"}
            style={{ paddingLeft: "50px" }}
          />
          <P style={{ width: "200%", paddingLeft: "60px" }}>
            asdfasdgasdgasgas
          </P>
        </div>
      </Details>

      <H3>문제 상황과 해결점</H3>
      <H5>xcode DemoApp 분활 문제</H5>
      <Block_2> 문제 상황 </Block_2>
      <P>
        앱의 빌드 시간과 메모리 최적화를 위해 staticLibrary와 dynamicLibrary로
        모듈을 분할하는 과정에서 Tuist는 성공적으로 작동했으나, Xcode에서 의존성
        문제로 인해 앱 실행이 실패하는 문제가 발생했습니다.
      </P>
      <Block_2>해결 방법</Block_2>
      <div style={{ display: "flex", width: "100%", marginTop: "10px" }}>
        <Img
          url={"LM/lmApps.webp"}
          width={"50%"}
          border={"0"}
          align={"center"}
          style={{ paddingLeft: "50px" }}
        />
        <P style={{ width: "200%", paddingLeft: "60px", color: "White" }}>
          Tuist의 의존성 문제를 해결하기 위해 Xcode Build Setting을 점검한 결과,
          bundleId의 중복이 문제의 원인임을 발견했습니다. 각 모듈은 고유한
          아이디를 가져야 하는데, 중복된 bundleId로 인해 DemoApp을 찾을 수 없는
          상황이었습니다. 처음에는 CFBundleIdentifier를 Info.plist 시점에
          설정하려 했으나, 이 방법은 코드에서 부모 객체를 참조해야 하는 문제를
          야기했습니다. 따라서, tuist generate 시점에서
          PRODUCT_BUNDLE_IDENTIFIER에 BUNDLE_ID_SUFFIX를 추가함으로써 bundleId의
          중복 문제를 해결하고, 각 앱을 개별적으로 관리할 수 있도록
          조치했습니다. 이러한 접근 방식을 통해 모듈 분할 과정에서 발생한 의존성
          문제를 성공적으로 해결할 수 있었습니다.
        </P>
      </div>

      <H3>📚 회고</H3>
      <P>
        프로젝트를 시작하게 된 주된 목적은 복잡한 프로젝트 구조를 설계하고,
        적합한 아키텍처를 적용해보며, 효율적인 코드 작성법을 탐구하는 데
        있었습니다. 이를 위해 프로젝트의 모듈을 세분화하고 단일 책임 원칙(SRP)을
        준수하며, 응집도를 높이고, 결합도를 낮추려는 의도를 가지고 시작했습니다.
        초기에는 이러한 접근 방식이 프로젝트의 관리 및 유지 보수성을 향상시킬
        것이라 생각했습니다. 그러나, 모듈을 지나치게 세분화한 결과, 프로젝트의
        복잡성이 오히려 증가했으며 과도한 모듈 분리가 개발자에게 혼란을 주고,
        작은 단위의 기능이 독립된 모듈을 가지는 것이 반드시 이점만을 가져다주지
        않는다는 점을 깨닫게 되었습니다. 이러한 과정에서 여러 어려움을 겪었지만,
        동시에 중요한 교훈을 얻을 수 있었습니다. 이 과정에서 얻은 장점들도
        분명했습니다. 모듈을 세분화함으로써 모듈 간의 의존성을 명확히 파악할 수
        있었고, 데모 앱을 활용하여 빠른 컴파일 시간의 이점을 경험할 수
        있었습니다. 특히, Tuist를 사용하지 않은 모듈에 비해 메모리 성능이 개선된
        것을 확인할 수 있었으며, Tuist를 통한 빌드 설정 관리의 편리함도 큰
        장점으로 느꼈습니다. RIBs 아키텍처를 사용하면서 테스트 코드 작성에는
        직접적으로 도전하지 않았으나, 데모 앱을 만들면서 MOCK 파일을 통해
        테스트를 간편하게 수행할 수 있는 장점을 발견했습니다. 이러한 경험은 향후
        프로젝트에서도 유용하게 활용될 것입니다. 비록 프로젝트를 성공적으로
        마감하지는 못했지만, 이번 프로젝트를 통해 아키텍처 설계와 모듈 분리에
        있어서 균형과 적절한 세분화의 중요성을 깊이 이해하게 되었습니다. 또한,
        프로젝트 성공을 위해서는 기술적 측면만이 아닌, 이러한 설계 원칙들을
        어떻게 적용하고 조정하는지에도 크게 좌우된다는 점을 체감했습니다.
      </P>
    </>
  );
};

export default LookMonster;
