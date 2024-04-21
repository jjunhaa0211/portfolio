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
  Details,
} from "../../../components/layout/projectLayout";
import { GIcon } from "../../../../components/GIcon";
import { Txt } from "../../../../components/Txt";
import { DefaultTag, keyOfDefaultTag } from "../../../../components/Tag";
import useMoonerDown from "../../../../utils/editor/hook/useMoonerDown";

const ForcedBlockingSwift = () => {
  const { Result } = useMoonerDown(`### 개요
    평소에 제가 릴스를 하루 2~3시간 이상 본다는 사실을 스크린 타임에서 보았습니다. 이제를 릴스를 줄여야한다며 인스타를 지웠지만 다시 다운로드해서 보는 저를 보았습니다. 때문에 앱을 사용하지 못하게 막아버린다면? 그때는 진짜 안볼 것 같다고 생각했습니다. 어렸을때 아이패드에서 자녀안심 앱으로 앱이 막혔던 것을 기억하여 기능을 구현해보고자 합니다.
    
    ### 구현 기능
    - Uikit과 SwiftUI를 동시에 사용
    - 앱 차단 목록에서 앱을 선택하고 차단하기를 눌렀을 경우 앱이 제안되는 기능 구현
    - 해제 버튼을 눌르면 설정한 모든 제한을 해제하는 기능 구현
    
    ### 문제 상황과 해결점
    ###### SwiftUI와 UIkit 동시 사용 문제
    \`문제 상황\`
    FamilyControls를 사용하기 위해서는 SwiftUI를 사용했어야했습니다. 기존 UIKit을 사용하고 있어서 문제가 발생했습니다.
    \`해결 방법\`
    💡 SwiftUIView를 만들어 새 SwiftUI 뷰를 만들어 **FamilyControls** 기능을 구현했습니다. **UIKit과 SwiftUI를 통합**하기 위해서 **UIHostingController**를 사용하여 만들어진 SwiftUI 뷰를 UIKit 기반 뷰 컨트롤러에 통합하였습니다. 그리고 UIViewController에서 **UIHostingController**를 사용하여 **SwiftUI 뷰를 자식뷰로 받음**으로써 문제를 해결할 수 있었습니다`);

  const { Result: Result2 } = useMoonerDown(`
  ### 앱 실행 화면`);

  const { Result: Result3} =useMoonerDown(`
  ### 회고
  제가 기존에 마시멜로 프로젝트를 진행하면서 겪었던 어려움 중 하나는 바로 Target에 있는 capability 대한 이해도가 낮아서 코드를 구현 자체는 완료했었지만, capability 설정을 하지 않아 결국 프로젝트 기능에서 차단 기능을 빼고 진행하여 실패했던 경험이 있었습니다. 그러나 이 실패를 계기로 저는 **Xcode에 대해서 공부하기 시작**하였고, 그 과정에서 Target의 capability에 대해서도 자연스럽게 이해하게 되었습니다.
  **FamilyControls** 기능을 활용하여 **앱을 차단**하는 작업을 개발하면서 큰 성취감을 느꼈습니다. 기존에는 시간제한을 두어 앱 사용을 제어했지만, 이번에 기능은 제가 릴스와 유튜브 중독을 벗어나기 위해 만드는 프로젝트 이기 때문에 1분더보기, 15분 더 보기와 같은 기능을 추가하지 않아서 차단된 앱은 사용자가 차단을 해제하기 전까지는 절대 사용할 수 없게 하였습니다. 이번 프로젝트를 진행하면서 다른 앱에 접근하여 차단하는 기능을 구현한 것이 신기했습니다.
  또한, **SwiftUI와 UIKit을 함께 사용하는 독특한 경험**도 했습니다. FamilyControls와 같은 iOS의 최신 기능들은 주로 SwiftUI에서 지원되는데, 이를 SwiftUI로 개발한 뒤 UIKit에 통합하는 작업을 진행하면서 두 프레임워크 간의 연동 방법에 대해 많이 배울 수 있었습니다. 이 과정을 통해 SwiftUI와 UIKit의 각각의 장단점을 더 잘 이해할 수 있게 되었고, 앞으로도 이 두 프레임워크를 적절히 활용하여 더 많은 기능을 개발해 나가고 싶습니다.
  이번 프로젝트로 인해서 **capability에 대한 이해도를 높이고 SwiftUI와 UIKit을 동시 사용해보는 경험**을 가졌습니다!`)

  return (
    <>
      <Top>
        <GIcon icon={"ForcedBlockingSwift"} width={"100px"} />
        <Txt typography={"H0"}>
          릴스 중독이라고? 차단해!{" "}
          <Txt typography={"P1"}>2024.01.24~2024.01.25</Txt>
        </Txt>
      </Top>
      <Tags>{["Swift"].map((v) => DefaultTag[v as keyOfDefaultTag])}</Tags>

      <URLBox>
        <URLItem
          icon={"Github"}
          url={"https://github.com/jjunhaa0211/XCameraKit"}
        >
          <Txt>Github (Project)</Txt>
        </URLItem>
      </URLBox>

      <Lefter>
        <Img
          url={"banner/ForcedBlockingSwiftBanner.webp"}
          width={"100%"}
          border={"0"}
          align={"center"}
        />
      </Lefter>

      {Result}
      {Result2}
      <Lefter>
        <Img
          url={"ForcedBlockingSwift/ForcedBlockingSwift4.webp"}
          width={"80%"}
          border={"0"}
          align={"center"}
        />
        <Img
          url={"ForcedBlockingSwift/ForcedBlockingSwift3.webp"}
          width={"80%"}
          border={"0"}
          align={"flex-end"}
        />
        <Img
          url={"ForcedBlockingSwift/ForcedBlockingSwift1.webp"}
          width={"80%"}
          border={"0"}
          align={"center"}
        />
        <Img
          url={"ForcedBlockingSwift/ForcedBlockingSwift2.webp"}
          width={"80%"}
          border={"0"}
          align={"center"}
        />
      </Lefter>

      {Result3}
    </>
  );
};

export default ForcedBlockingSwift;
