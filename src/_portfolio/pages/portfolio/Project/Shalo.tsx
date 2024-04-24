import { A, H3, Img, P, Tags, Top, URLBox, URLItem, Lefter, Details } from "../../../components/layout/projectLayout";
import { GIcon } from "../../../../components/GIcon";
import { Txt } from "../../../../components/Txt";
import { DefaultTag, keyOfDefaultTag } from "../../../../components/Tag";
import useMoonerDown from "../../../../utils/editor/hook/useMoonerDown";

const Shalo = () => {
    const { Result } = useMoonerDown(`### 개요
    영상 편집에 대한 관심을 바탕으로, 이 분야의 작업 방식에 대해 호기심을 느끼게 되었습니다. 이러한 관심을 실현하기 위해, 필터 적용, 영상 속도 조절 등의 기능을 포함하는 영상 편집 툴을 직접 개발해보는 프로젝트를 시작하게 되었습니다. 이번 프로젝트의 목표는 모바일을 통해 누구나 쉽게 영상을 편집할 수 있는 도구를 개발하는 것입니다.
    ### 역할
    - iOS 앱개발을 담당했습니다.
    ##### iOS
    - 다양한 필터를 적용할 수 있는 기능 구현
    - 여러가지 툴을 사용해서 영상을 수정하는 기능
    - 내보내기 기능
    - 스크롤을 사용해서 툴의 정도 설정 기능
    - 다국어 지원
    
    ### 문제 상황과 해결점
    ###### MVP를 활용해 코드 길이 줄이기
    \`문제 상황\`
    코드의 길이가 300줄에서 400줄까지 길어지는 문제가 발생했습니다. 코드의 가독성이 떨어지고 모든 기능을 하나의 ViewController에 넣어버리는 문제가 발생했습니다.
    \`해결 방법\`
    💡 기존의 뷰의 요소를 분할하는 방법을 채택했습니다. 예를 들어, collectionView와 같은 경우 dataSource와 layout을 별도의 클래스로 분리하고 상속을 통해 코드 길이를 줄이기 위해 노력했습니다. 또한, 함수의 길이를 10줄로, 클래스의 길이를 200줄로 제한하는 200/10원칙을 준수하고, 상속을 통해 코드를 간소화하는 작업을 진행했습니다.`);

  const { Result: Result2 } =
    useMoonerDown(`
    ###### 노티피케이션 관련 코드 리팩토링
    \`문제 상황\`
    프로젝트 초기에는 노티피케이션을 예약할 때 매번 새로운 AppDelegate 인스턴스를 생성하는 문제가 있었습니다. 이로 인해 노티피케이션을 제대로 예약하지 못하는 문제가 발생했습니다. 또한, 알림 권한을 요청하는 부분이 호출되지 않아 사용자에게 알림 권한을 요청하지 않고 노티피케이션을 보내려고 했을 때도 문제가 있었습니다.  마지막으로, 앱이 백그라운드에서 동작처리가 원할하지 않는 문제 또한 발생했습니다.
    \`해결 방법\`
    💡 노티피케이션 관련 코드를 리팩토링하여 개선하였습니다. 먼저, AppDelegate 인스턴스를 매번 새로 생성하는 부분을 수정하여 현재 실행 중인 앱의 AppDelegate 인스턴스를 사용하도록 변경했습니다. 이렇게 함으로써 노티피케이션을 제대로 예약할 수 있게 되었습니다. 또한, 앱이 처음 실행될 때나 특정 사용자 동작에 따라 알림 권한을 요청하는 코드를 추가하여 사용자에게 알림 권한을 요청할 수 있도록 하였습니다. 마지막으로, 백그라운드에서 노티피케이션을 받았을 때의 동작을 구현하여 사용자가 노티피케이션을 탭했을 때 앱이 적절히 동작하도록 수정하였습니다. 이러한 변경으로 사용자에게 노티피케이션을 통해 비디오 저장 결과를 효과적으로 전달할 수 있게 되었습니다.

    ###### AVPlayerItem의 상태 변화 감지 부재
    \`문제 상황\`
    AVPlayerItem 상태 변화를 감지 하지 않아서 비동기적 로딩 문제와 재생 준비 완료 이벤트 처리 부재가 발생했습니다. 재생을 시도할 때 PlayerItem이 아직 로딩되지 않은 경우에는 재생이 되지 않는 문제가 발생했습니다.
    \`해결 방법\`
    💡 AVPlayerItem의 상태 변화를 감지하여 재생 가능한 상태가 되었을 때 작업을 처리 해야한다고 생각했습니다.  이를 위해서 KVO(Key-Value Observing)를 활용하여 AVPlayerItem의 "status" 속성을 관찰하고, 상태가 .readyToPlay로 변경되었을 때 처리를 할 수 있도록 구현했습니다. 비동기적 로딩 문제를 해결하고, 재생 가능한 상태가 되었을 때에 UI 업데이트를 해서 화면을 누르면 영상이 재생되도록 구현했습니다.

    ### 📚 회고
    이번 프로젝트를 진행하면서 제가 세운 목표는 **비디오 편집기를 제작**하는 것이었습니다. 저는 사용자가 직접 필터를 적용하고 만들 수 있는 기능을 구현하는 것을 통해 **Core Image의 작동 원리를 깊이 이해**하고, CIContext를 활용하여 비디오를 일반 비디오 파일로 변환하는 과정을 경험하고자 했습니다. 프로젝트를 통해 **Core Image, Core Graphics, Core Animation**과 같은 핵심 프레임워크를 직접 사용해보면서 이미지 처리 및 비디오 편집에 필요한 기술을 탐구할 수 있었습니다.
특히, 필터를 직접 만들어보며 관련 기술에 대한 이해를 더욱 넓힐 수 있었습니다. 또한, UIKit을 활용해 StackView를 이용한 레이아웃을 구성함으로써 효율적인 레이아웃 설계 방법에 대해 깊이 이해할 수 있었습니다.
마지막으로, **다국어 지원**을 추가하면서 Localizable을 경험해보고, 앱 내 속도 조정, 노출 기울기 조절 등 다양한 기능을 구현하면서 비디오 편집에 필요한 전반적인 지식을 쌓을 수 있었습니다. 추후에는 필터와 기능만 있는 것이 아닌 컷편집 기능을 구현해보고자 하는 욕심이 생겼습니다.
    `);
    return <>
        <Top>
            <GIcon icon={"Shalo"} width={"100px"}/>
            <Txt typography={"H0"}>Shalo <Txt typography={"P1"}>2024.03.28 ~ 2024.04.24</Txt></Txt>
        </Top>
        <Tags>{["Swift", "Snpkit", "Then", "CoreImage", "MVC"].map((v) => DefaultTag[v as keyOfDefaultTag])}</Tags>

        <URLBox>
      <URLItem
          icon={"Shalo"}
          text={"누구나 쉽게 만들 수 있는 모바일 영상 편집 애플리케이션"}
        >
          <Txt>한줄 요약</Txt>
        </URLItem>
      </URLBox>

        <URLBox>
            <URLItem icon={"Github"} url={"https://github.com/AVFNS/Shalo"}>
                <Txt>Github</Txt>
            </URLItem>
        </URLBox>

        <Lefter>
        <Img
          url={"banner/sharkBanner.webp"}
          width={"100%"}
          border={"0"}
          align={"center"}
        />
      </Lefter>
        {Result}
      {Result2}
      <H3>세부 사항</H3>
      <Details>
        <summary>앱 화면</summary>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", paddingBottom: 30 }}>
            <Img
              url={"Sh/sh1.webp"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
            <Img
              url={"Sh/sh2.webp"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
            <Img
              url={"Sh/sh3.webp"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
            <Img
              url={"Sh/sh4.webp"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
          </div>
          <div style={{ display: "flex", paddingBottom: 30 }}>
            <Img
              url={"Sh/sh5.webp"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
            <Img
              url={"Sh/sh6.webp"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
            <Img
              url={"Sh/sh7.webp"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
            <Img
              url={"Sh/sh8.webp"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
          </div>
          <div style={{ display: "flex", paddingBottom: 30 }}>
            <Img
              url={"Sh/sh9.webp"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
            <Img
              url={"Sh/sh10.webp"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
            <Img
              url={"Sh/sh11.webp"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
            <Img
              url={"Sh/sh12.webp"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
          </div>
        </div>
      </Details>
    </>
}

export default Shalo;