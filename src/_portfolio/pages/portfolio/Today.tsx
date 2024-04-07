import {
  H3,
  P,
  Tags,
  Top,
  Img,
  Lefter,
  URLBox,
  URLItem,
  Details,
  H5,
  P2,
  Block_2
} from "../../components/layout/projectLayout";
import { GIcon } from "../../../components/GIcon";
import { Txt } from "../../../components/Txt";
import { DefaultTag } from "../../../components/Tag";
import useMoonerDown from "../../../utils/editor/hook/useMoonerDown";

const Today = () => {
  const {Result} = useMoonerDown(`
  ### 개요
아이패드를 활용하여 손쉽게 인생 네컷 및 폴라로이드 사진을 만들고 꾸미고 보정할 수 있는 서비스
### 프로젝트 주요 기능
##### 인생네컷 기능
- 사진 4개를 갤러리에서 가져와서 사용자가 정해놓은 프레임에 사진을 추가합니다.
- 인생네컷 전용 프레임을 추가할 수 있습니다.
##### 폴라로이드 기능
- 사용자가 갤러리에서 사진을 한장 가져와서 정해놓은 프레임에 사진을 추가합니다.
- 폴라로이드 전용 프레임을 추가할 수 있습니다.
- 수정한 폴라로이드를 사진앱에 저장할 수 있습니다.
##### 스티커 기능
- 사용자가 스티커를 사용해서 자신이 선택한 인생네컷 또는 폴라로이드에서 스티커를 자유롭게 추가 및 조정할 수 있습니다.
- 스티커의 크기, 모양을 조절하고 삭제할 수 있습니다.
##### 카메라 기능
- 자신이 원하는 포즈를 제공해서 포즈에 맞게 사진을 찍을 수 있습니다.
- 화면 전환이 가능합니다.
- 화면을 확대 및 축소할 수 있습니다.
- 카메라가 아래를 향하면 경고를 알려줍니다.
- 화면을 터치에서 사진을 찍을 수 있습니다.
- n초 후에 사진을 찍도록 설정할 수 있습니다.
### 문제 상황과 해결점
###### 사진 로컬 저장 문제
\`문제 상황\`
폴라로이드를 편집하고 전체적인 폴라로이드를 로컬에 저장해야하는 문제가 있었습니다.
\`해결 방법\`
  `)

  const {Result: Result2} = useMoonerDown(`
  ### 📚 회고
  이번 프로젝트를 진행하면서, 처음으로 사진 관련 코드를 깊게 다루게 되었습니다.
  이전까지 경험해보지 못한 복잡한 기능들로 인해, 클래스 하나가 700줄을 넘어서는 등 코드 관리에 어려움을 겪었습니다.
  이 과정에서 저와 같이 사진 코드에 어려움을 겪는 이들을 위해서 XCameraKit을 개발하게 되었습니다.
  또한 프로젝트를 통해 카메라 앱을 개발하면서, 시뮬레이터에서 구현할 수 없는 기능들을 직접 학슴하며 경험을 쌓는 시간을 가질 수 있었습니다.
  그리고 부스 운영을 통해 직접 사용자들과 소통하며 그들이 원하는 기능과 니즈를 파악하는 중요성을 깨닫게 되었습니다.
  이번 경험을 통해, 단순히 기능 구현에 초점을 맞추는 것에서 벗어나, 코드의 질을 향상시키고 적합한 아키텍처를 적용하는 것의 중요성을 깊이 이해하게 되었습니다.
  코드의 질이 낮고 아키텍처가 잘못 적용되었을 때, 가독성이 떨어지고 코드의 흐름을 파악하기 힘들다는 것을 절실하게 느꼈습니다.
  `)
  return (
    <>
      <Top>
        <GIcon icon={"Today"} width={"100px"} />
        <Txt typography={"H0"}>
          Today <Txt typography={"P1"}>2022.04.29~2022.05.30</Txt>
        </Txt>
      </Top>
      <Tags>
        {[
          DefaultTag.Swift,
          DefaultTag.Then,
          DefaultTag.RxSwift,
          DefaultTag.RxCocoa,
          DefaultTag.XCameraKit,
          DefaultTag.AVFoundation,
        ]}
      </Tags>

      <URLBox>
        <URLItem
          icon={"Github"}
          url={"https://github.com/TodayAsWell/Today-Memory-iOS"}
        >
          <Txt>Github</Txt>
        </URLItem>
      </URLBox>

      <Lefter>
        <Img
          url={"banner/todayBanner.webp"}
          width={"100%"}
          border={"0"}
          align={"center"}
        />
      </Lefter>

      {Result}

      {/* <H3>개요</H3>
      <P>
        아이패드를 활용하여 손쉽게 인생 네컷 및 폴라로이드 사진을 만들고 꾸미고
        보정할 수 있는 서비스
      </P>

      <H3>🧑 프로젝트 주요 기능</H3>
      <H5>인생네컷 기능</H5>
      <P2>
      • 사진 4개를 갤러리에서 가져와서 사용자가 정해놓은 프레임에 사진을
        추가합니다.
      </P2>
      <P2>• 인생네컷 전용 프레임을 추가할 수 있습니다.</P2>

      <H5>폴라로이드 기능</H5>
      <P2>
      • 사용자가 갤러리에서 사진을 한장 가져와서 정해놓은 프레임에 사진을
        추가합니다.
      </P2>
      <P2>• 폴라로이드 전용 프레임을 추가할 수 있습니다.</P2>
      <P2>• 수정한 폴라로이드를 사진앱에 저장할 수 있습니다.</P2>

      <H5>스티커 기능</H5>
      <P2>
      • 사용자가 스티커를 사용해서 자신이 선택한 인생네컷 또는 폴라로이드에서
        스티커를 자유롭게 추가 및 조정할 수 있습니다.
      </P2>
      <P2>• 스티커의 크기, 모양을 조절하고 삭제할 수 있습니다.</P2>

      <H5>카메라 기능</H5>
      <P2>
      • 자신이 원하는 포즈를 제공해서 포즈에 맞게 사진을 찍을 수 있습니다.
      </P2>
      <P2>• 화면 전환이 가능합니다.</P2>
      <P2>• 화면을 확대 및 축소할 수 있습니다.</P2>
      <P2>• 카메라가 아래를 향하면 경고를 알려줍니다.</P2>
      <P2>• 화면을 터치에서 사진을 찍을 수 있습니다.</P2>
      <P2>• n초 후에 사진을 찍도록 설정할 수 있습니다.</P2>

      <H3>문제 상황과 해결점</H3>
      <H5>사진 로컬 저장 문제</H5>
      <Block_2> 문제 상황 </Block_2>
      <P>
      폴라로이드를 편집하고 전체적인 폴라로이드를 로컬에 저장해야하는 문제가 있었습니다.
      </P> */}
      {/* <Block_2>해결 방법</Block_2> */}
      <div style={{ display: "flex", width: "100%", marginTop: "-15px" }}>
        <Img
          url={"today/todayImage1.webp"}
          width={"90%"}
          border={"0"}
          align={"center"}
          style={{ paddingLeft: "50px" }}
        />
        <P style={{ width: "200%", paddingLeft: "60px", color: "White" }}>
        UIGraphicsImageRenderer를 사용하여 현재 화면을 이미지로 캡처하는 기능을 구현했습니다. 이를 통해 편집된 폴라로이드를 하나의 이미지로 합성했습니다.
UIImageWriteToSavedPhotosAlbum 함수를 활용하여 합성된 이미지를 사용자의 로컬 갤러리에 저장하는 기능을 구현했습니다. 저장 성공 여부에 따른 콜백 처리를 통해 사용자에게 적절한 피드백을 제공했습니다.
        </P>
      </div>
      {Result2}

      {/* <H3>📚 회고</H3>
      <P>
        이번 프로젝트를 진행하면서, 처음으로 사진 관련 코드를 깊게 다루게
        되었습니다.
      </P>
      <P>
        이전까지 경험해보지 못한 복잡한 기능들로 인해, 클래스 하나가 700줄을
        넘어서는 등 코드 관리에 어려움을 겪었습니다.
      </P>
      <P>
        이 과정에서 저와 같이 사진 코드에 어려움을 겪는 이들을 위해서
        XCameraKit을 개발하게 되었습니다.
      </P>
      <P>
        또한 프로젝트를 통해 카메라 앱을 개발하면서, 시뮬레이터에서 구현할 수
        없는 기능들을 직접 학슴하며 경험을 쌓는 시간을 가질 수 있었습니다.
      </P>
      <P>
        그리고 부스 운영을 통해 직접 사용자들과 소통하며 그들이 원하는 기능과
        니즈를 파악하는 중요성을 깨닫게 되었습니다.
      </P>
      <P>
        이번 경험을 통해, 단순히 기능 구현에 초점을 맞추는 것에서 벗어나, 코드의
        질을 향상시키고 적합한 아키텍처를 적용하는 것의 중요성을 깊이 이해하게
        되었습니다.
      </P>
      <P>
        코드의 질이 낮고 아키텍처가 잘못 적용되었을 때, 가독성이 떨어지고 코드의
        흐름을 파악하기 힘들다는 것을 절실하게 느꼈습니다.
      </P> */}

    <br></br>
      <Details>
        <summary>부스 운영</summary>
        <div style={{ display: "flex" }}>
          <Img
            url={"today/booth3.png"}
            width={"80%"}
            border={"0"}
            align={"center"}
          />
          <Img
            url={"today/booth1.png"}
            width={"80%"}
            border={"0"}
            align={"flex-end"}
          />
          <Img
            url={"today/booth2.png"}
            width={"80%"}
            border={"0"}
            align={"center"}
          />
          <Img
            url={"today/booth4.png"}
            width={"80%"}
            border={"0"}
            align={"center"}
          />
        </div>
      </Details>
      <Details>
        <summary>앱 화면</summary>
        <div style={{ display: "flex" }}>
          <Img
            url={"today/today4.png"}
            width={"90%"}
            border={"0"}
            align={"center"}
          />
          <Img
            url={"today/today5.png"}
            width={"90%"}
            border={"0"}
            align={"center"}
          />
          <Img
            url={"today/today1.png"}
            width={"90%"}
            border={"0"}
            align={"center"}
          />
          <Img
            url={"today/today2.png"}
            width={"90%"}
            border={"0"}
            align={"flex-end"}
          />
          <Img
            url={"today/today3.png"}
            width={"90%"}
            border={"0"}
            align={"center"}
          />
        </div>
      </Details>
    </>
  );
};

export default Today;
