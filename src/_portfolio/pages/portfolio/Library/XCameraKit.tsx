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

const XCameraKit = () => {
  const { Result } = useMoonerDown(`## SPM:
    **For iOS 14+ projects:** 💜
    \`\`\`swift
    let spm = SwiftPackageManagerDependencies([
    .remote(url: "https://github.com/jjunhaa0211/XCameraKit", requirement: .upToNextMinor(from: "1.1.1"))
    ])
    \`\`\`
    Getting Started
    -----------
    ### Info.plist 📄
    - **How to allow camera access**:
    \`\`\`swift
    Privacy - Camera Usage Description // To access the camera, you must put it in info 🤙
    \`\`\`
    - **How to allow album access**:
    \`\`\`swift
    Privacy - Photo Library Additions Usage Description //In order to access the album, it is mandatory to put it in info 🤙
    \`\`\`
    ### XCamera 📸
    - **How to declare camera code**:
    \`\`\`swift
    var cameraView: XCamera!
    \`\`\`
    - **How to run the camera**:
    \`\`\`swift
    cameraView.startRunning()
    \`\`\`
    - **To stop the camera you need to do as below**:
    \`\`\`swift
    cameraView.stopRunning()
    \`\`\`
    - **How to use the camera aspect ratio**:
    \`\`\`swift
    cameraView.setAspectRatio() // Defulat fullScreen
    cameraView.setAspectRatio(.square) //square 1 : 1
    cameraView.setAspectRatio(.full) //fullScreen UIView bounds
    cameraView.setAspectRatio(.portrait) // lengthScreen 16 : 9
    cameraView.setAspectRatio(.landscape) // landscapeScreen 16 : 9
    cameraView.setAspectRatio(.custom(width: 1000, height: 200)) //custom
    \`\`\`
    - **Set the background color of the camera**:
    \`\`\`swift
    cameraView.setBackgroundColor(.black) //UIColor
    \`\`\`
    - **Turn the camera's flash off and on**:
    \`\`\`swift
    // Turn on to turn on the flash and turn off to turn off the flash.
    cameraView.setFlashMode(.off) // Default is off.
    \`\`\`
    - **How to change camera orientation**:
    \`\`\`swift
    // there is a .front and a .back
    cameraView.setCameraPosition(.front) // Defulat back
    \`\`\`
    - **How to get the cornerRadius of the camera itself**:
    \`\`\`swift
    cameraView.setCameraCornerRadius(100.0)
    \`\`\`
    ### printing method 🖨️
    - **How to convert to pdf and print**:
    \`\`\`swift
    //go to print Options
    let imageToPrint = UIImage(named: "aaaa")!
    printImageAsPDF(image: imageToPrint)
    \`\`\``);

  const { Result: Result2 } =
    useMoonerDown(`**XCameraKit**를 개발하면서 저는 AVFoundation에 대한 이해도를 한층 더 높일 수 있었습니다. 사용자가 함수의 기능과 파라미터를 보다 쉽게 이해할 수 있도록, 함수에대한 설명을 추가함으로써 **사용자 경험을 개선**하고자 했습니다. 더불어, 사용자가 카메라를 보다 유능하게 제어할 수 있도록 다양한 기능을 추가했습니다. 예를 들어, 카메라의 **화면 비율을 변경**하거나 **플래시 모드**를 설정할 수 있는 기능, 그리고 **핀치 제스처**를 사용하여 카메라의 **줌 레벨을 조절**할 수 있는 기능을 구현했습니다. 이 외에도, 이미지를 **PDF로 변환**할 수 있는 기능과 에어드랍을 통해 지원하는 인쇄기에 바로 프린트할 수 있는 기능을 추가했습니다.
    이 프로젝트를 진행하면서, 남을 생각하며 코드를 구현하는방법을 배웠으며, 다양한 에러 처리 과정을 경험했습니다.`);

  return (
    <>
      <Top>
        <GIcon icon={"XCameraKit"} width={"100px"} />
        <Txt typography={"H0"}>
          XCameraKit <Txt typography={"P1"}>2023.06.16~2023.11.09</Txt>
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
          url={"banner/xcamerakit.webp"}
          width={"100%"}
          border={"0"}
          align={"center"}
        />
      </Lefter>

      <H3>개요</H3>
      <P>
        이 라이브러리는 카메라 코드를 간편하게 활용할 수 있도록 만들어졌습니다.
        카메라 기능을 구현하는 과정에서 겪은 어려움을 고려하여, 누구나 쉽게
        카메라를 다룰 수 있도록 설계되었습니다. 사용자가 코드를 쉽게 이해하고
        활용할 수 있도록 함으로써, 카메라 기능을 간편하게 추가할 수 있도록
        돕고자 합니다.
      </P>

      <H3>회고</H3>
      {Result2}

      <Details>
        <summary>사용방법</summary>
        <div style={{ display: "flex", width: "120%", marginTop: "10px" }}>
          {Result}
        </div>
      </Details>
    </>
  );
};

export default XCameraKit;
