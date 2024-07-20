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
} from "../../../components/layout/projectLayout";
import { GIcon } from "../../../../components/GIcon";
import { Txt } from "../../../../components/Txt";
import { DefaultTag, keyOfDefaultTag } from "../../../../components/Tag";
import useMoonerDown from "../../../../utils/editor/hook/useMoonerDown";

const LookMonster = () => {
  const { Result } = useMoonerDown(`### 개요
**개성을 찾아 스타일을 공유하는 트렌디한 패션 앱**
### 역할
저는 전체적인 기획을 독자적으로 수행하고, IA도 직접 설계하면서 앱의 기획이 견고하게 이루어지도록 힘썼습니다.
Tuist 모듈을 최적화해서 RIBs 아키텍처에 맞도록 설계하는 작업을 했습니다.
RIBs 아키텍처를 사용해서 SOLID 원칙을 기반으로 가독성과 확장성을 높이는 역할을 했으며 요번 프로젝트에서 복잡한 시스템 설계 및 최적화하였으며 효율적인 프로젝트 관리 능력을 갖추기 위해 노력했습니다.
애플리케이션과 확장성을 높게하고 쉘스크립트와 GithubAction 사용해서 CI를 구축했습니다.
유지보수가 편리하도록 디자인 시스템 구축을 주요 핵심으로 구성했습니다.`);

  const { Result: Result2 } = useMoonerDown(`### 문제 상황과 해결점
###### xcode DemoApp 분활 문제
\`문제 상황\`
앱의 빌드 시간과 메모리 최적화를 위해 staticLibrary와 dynamicLibrary로 모듈을 분할하는 과정에서 Tuist는 성공적으로 작동했으나, Xcode에서 의존성 문제로 인해 앱 실행이 실패하는 문제가 발생했습니다.`);

  const { Result: Result3 } = useMoonerDown(`### 📚 회고
  프로젝트를 시작하게 된 주된 목적은 복잡한 프로젝트 구조를 설계하고, 적합한 아키텍처를 적용해보며, 효율적인 코드 작성법을 탐구하는 데 있었습니다. 
  이를 위해 프로젝트의 모듈을 세분화하고 단일 책임 원칙(SRP)을 준수하며, 응집도를 높이고, 결합도를 낮추려는 의도를 가지고 시작했습니다. 
  초기에는 이러한 접근 방식이 프로젝트의 관리 및 유지 보수성을 향상시킬 것이라 생각했습니다. 그러나, 모듈을 지나치게 세분화한 결과, 프로젝트의 복잡성이 오히려 증가했으며 과도한 모듈 분리가 개발자에게 혼란을 주고, 작은 단위의 기능이 독립된 모듈을 가지는 것이 반드시 이점만을 가져다주지 않는다는 점을 깨닫게 되었습니다.
  이 과정에서 얻은 장점들도 분명했습니다. 모듈을 세분화함으로써 모듈 간의 의존성을 명확히 파악할 수 있었고, 데모 앱을 활용하여 빠른 컴파일 시간의 이점을 경험할 수 있었습니다. 특히, Tuist를 사용하지 않은 모듈에 비해 메모리 성능이 개선된 것을 확인할 수 있었으며, Tuist를 통한 빌드 설정 관리의 편리함도 큰 장점으로 느꼈습니다.
   RIBs 아키텍처를 사용하면서 테스트 코드 작성에는 직접적으로 도전하지 않았으나, 데모 앱을 만들면서 MOCK 파일을 통해 테스트를 간편하게 수행할 수 있는 장점을 발견했습니다.
   이러한 경험은 향후 프로젝트에서도 유용하게 활용될 것입니다. 
   iOS 개발뿐 아니라 혼자 DB 구조를 짜보고 IA를 만들어봄으로써 명세서도 직접 만들어보면서 프로젝트 초기 기획에 대한 능력을 키울 수 있었습니다.
   비록 프로젝트를 성공적으로 마감하지는 못했지만, 이번 프로젝트를 통해 아키텍처 설계와 모듈 분리에 있어서 균형과 적절한 세분화의 중요성을 깊이 이해하게 되었습니다. 또한, 프로젝트 성공을 위해서는 기술적 측면만이 아닌, 이러한 설계 원칙들을 어떻게 적용하고 조정하는지에도 크게 좌우된다는 점을 체감했습니다.`);

  const { Result: Result4 } =
    useMoonerDown(`Tuist의 의존성 문제를 해결하기 위해 **Xcode Build Setting**을 점검한 결과, **bundleId의 중복이 문제의 원인**임을 발견했습니다. 각 모듈은 고유한 아이디를 가져야 하는데, 중복된 bundleId로 인해 DemoApp을 찾을 수 없는 상황이었습니다.

  처음에는 C**FBundleIdentifier를 Info.plist 시점에 설정**하려 했으나, 이 방법은 코드에서 부모 객체를 참조해야 하는 문제를 야기했습니다. 따라서, tuist generate 시점에서 \`PRODUCT_BUNDLE_IDENTIFIER\`에 \`BUNDLE_ID_SUFFIX\`를 추가함으로써 bundleId의 중복 문제를 해결하고, 각 앱을 개별적으로 관리할 수 있도록 조치했습니다.
  
  이러한 접근 방식을 통해 모듈 분할 과정에서 발생한 의존성 문제를 성공적으로 해결할 수 있었습니다.`);

  const { Result: Result5 } = useMoonerDown(`###### UserInterface 모듈
  이 모듈은 사용자 인터페이스를 관리하며, \`invertedBualTargetProjectWithDemoApp\` 함수를 사용하여 **Implement(구현)** 및 **Interface(인터페이스)** 모듈을 생성합니다. 이 구조를 통해** 의존성 주입을 통해 복잡성**을 줄입니다.

  ###### 핵심 아키텍처 모듈
  UserInterface 모듈과 함께, 모든 UserInterface 모듈에는 클린 아키텍처를 위해 만들어진 **Data와 Domain 모듈이 필수적으로 포함**됩니다. 이러한 모듈들은 \`invertedBualTargetProject\`로 만들어지며, DemoApp과 같은 별도의 UI 테스트가 필요하지 않습니다. 하지만 사용자가 유닛 테스트 필요로 한다면 tuist 내의 Project 파일에 \`test: true\`로 설정하면 XCTest를 사용할 수 있습니다. 또한, Network나 TokenManager와 같은 다른 모듈들도 마찬가지로 \`invertedBualTargetProject\`로 구현됩니다.
  
  ###### RIBs 최적화
  모든 모듈은 RIBs 아키텍처에 최적화되어 설계되었습니다. **Implement** 부분에는 \`Builder\`, \`Interactor\`, \`Router\`, \`ViewController\`가 구성되고, 인터페이스 부분에는 \`Listener\`가 구현되어 의존성 주입(DI)이 설정됩니다.
  
  ###### Core 모듈의 구조
  Core 모듈은 복잡성과 결합도를 관리하기 위해 여러 **파일 타겟(Targets)으로 분리**되어 있습니다. 이를 통해 파일 형태의 모듈로 구성되어 있습니다. 이러한 구조는 개발 및 유지보수의 효율성을 높입니다.
  
  ###### Design System
  모든 컴포넌트는 UITableView에 모아서 개발자가 쉽게 확인할 수 있도록 데모앱에 포함됩니다.
  `);

  return (
    <>
      <Top>
        <GIcon icon={"LookMonster"} width={"100px"} />
        <Txt typography={"H0"}>
          LookMonster <Txt typography={"P1"}>2023.08.17~2023.11.07</Txt>
        </Txt>
      </Top>
      <Tags>
        {["Swift", "Snpkit", "RxSwift", "Tuist", "githubAction", "RIBs"].map(
          (v) => DefaultTag[v as keyOfDefaultTag]
        )}
      </Tags>

      <URLBox>
        <URLItem
          icon={"LookMonster"}
          text={"개성을 찾아 스타일을 공유하는 트렌디한 패션 애플리케이션"}
        >
          <Txt>한줄 요약</Txt>
        </URLItem>
      </URLBox>

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

      {Result}
      {Result2}
      <div style={{ display: "flex", width: "100%", marginTop: "10px" }}>
        <Img
          url={"LM/lmApps.webp"}
          width={"50%"}
          border={"0"}
          align={"center"}
          style={{ paddingLeft: "50px" }}
        />
        <P style={{ width: "200%", paddingLeft: "60px", color: "White" }}>
          {Result4}
        </P>
      </div>

      <br></br>
      {Result3}

      <H3>세부 사항</H3>
      <Details>
        <summary>Tuist 구조 설명</summary>
        <div style={{ display: "flex", width: "120%", marginTop: "10px" }}>
          <Img
            url={"LM/LMS.webp"}
            width={"100%"}
            border={"0"}
            align={"center"}
            style={{ paddingLeft: "50px" }}
          />
          <P style={{ width: "200%", paddingLeft: "60px" }}>{Result5}</P>
        </div>
        <summary>혼자 작성한 IA 명세서</summary>

        <Img
          url={"LM/LookMonster.jpg"}
          width={"100%"}
          border={"0"}
          align={"center"}
          style={{ paddingLeft: "50px" }}
        />
        <button
          onClick={() =>
            window.open(
              "https://miro.com/welcomeonboard/U3lMU1BveVh2TXhuS0lpc3hqdGM3YnZpd1liOHFsbVVRbWY3SlR2eUF1VGRrNFV5a3hUc2laWTZKM2MxTGRvWXwzNDU4NzY0NTU5MjcyMjMxNjYwfDI=?share_link_id=154871885807",
              "_blank"
            )
          }
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#ff4400",
            color: "white",
            border: "none",
            borderRadius: "5px",
            marginTop: "10px",
            marginLeft: "24px",
          }}
        >
          IA 명세서 자세히 보러가기
        </button>
      </Details>
    </>
  );
};

export default LookMonster;
