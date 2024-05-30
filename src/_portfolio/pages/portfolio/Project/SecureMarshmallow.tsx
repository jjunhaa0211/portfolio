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
import Video from "./smPreView.mp4";

const SecureMarshmallow = () => {
  const { Result } = useMoonerDown(`### 개요
    개발자가 프로젝트를 할 때 기능에는 열심히 하지만 보안 측면을 소홀히 하는 경향이 있다고 판단했습니다.
    그래서 저희는 보안을 중요시하는 애플리케이션을 개발하기로 결정했습니다.
    이 프로젝트의 주요 목표는 공격자가 애플리케이션을 어떻게 공격하는지 이해하고, 개발자가 이를 어떻게 방어할 수 있는지에 대한 연구하는 프로젝트입니다.
    ### 역할
    프로젝트 PM과 iOS 앱개발 및 iOS 보안을 담당했습니다.
    ##### PM
    - 일정 관리, 기획, 그리고 팀원 관리
    ^^프로젝트를 시작할 때, 워터폴 방법론을 활용하여 철저한 요구사항 분석과 프로젝트 기획을 진행했습니다.
    ^^그러나, 프로젝트 팀원 간의 기능 이슈가 발생하면서 애자일 방법론으로의 전환을 결정하게 되었습니다.
    ^^이 과정에서, 개별 기능에만 집중하는 것이 아니라 팀원 간의 원활한 소통을 통해 문제를 해결하는 방법의 중요성을 깨달았습니다.
    ^^이 경험을 프로젝트의 성공은 효율적인 방법론과 팀원 간의 협력에 기반을 두고 있음을 강조하고자 합니다.
    
    ##### iOS
    - 로컬 저장과 보안 관리
    - 여러 로컬 DB를 사용해서 텍스트 또는 사진을 저장하는 기능 구현
    - 탈옥된 기기에서 앱을 접근하는 것을 막는 기능 구현
    - 캡쳐 금지 기능 및 스크린샷 추적 기능 구현
    - 앱 내의 캐시 삭제 기능 구현
    - 앱 내의 OS 접근 기능 구현
    - 앱 위장 아이콘 기능 구현
    
    ##### iOS Security
    - 뷰의 에러 찾기와 메모리 접근으로 앱 강제 종료
    - 탈옥된 기기를 사용하여 Frida로 앱의 UI 강제 변경
    - LLDB를 사용해서 뷰의 에러 발견
    - Frida를 사용하여 앱 강제 종료 및 악성 알럿 성공
    - UserDefaults 데이터 무단 침입 성공
    
    ### 문제 상황과 해결점
    
    ###### Main CollectionViewController에서 collectionViewCell 이동 문제 해결
    \`문제 상황\`
    아이폰 OS에서 제공하는 위젯의 위치를 변경하는 기능을 구현하려 할 때, 셀을 드래그하여 이동시키려 해도 셀과 해당 셀의 인덱스가 변경되지 않는 문제가 발생했습니다.
    \`해결 방법\`
    💡 \`UILongPressGestureRecognize\` 를 사용해서 롱 프레스가 감지하면 가상의 셀 뷰의 활용방법을 생각
    1. 가상 Cell 뷰를 활용해서 드래그 중인 Cell 표현하기
    ^^시작단계에서 사용자가 Cell을 길게 누르는 것을 감지합니다. 이때 \`began\` 메소드를 활동화 시켜서 사용자에게 드래그 중인 셀의 모습을 보여주기 위한 가상의 뷰를 생성합니다. 이렇게 해서 위 문제에서 위젯을 꾹 누르는 기능을 구현할 수 있었습니다.
    2. 셀의 위치 변경하기
    ^^사용자가 Cell의 위치를 변경하기 시작하면, \`changed\` 상태가 활성화되어서 사용자가 Cell을 드래그하는 동안 collectionView의 Cell 위치를 실시간 업데이트 후 리로드를 시켜줍니다.
    3. 이동 작업의 완료 처리
    ^^사용자가 Cell 이동을 완료하면 \`ended\` 상태가 활성화되어 이동 작업이 끝나게 되고, 가상의 Cell 뷰를 화면에서 제거합니다. 만약 가상의 뷰가 다른 Cell 위에 위치해 있었다면, 그 뷰를 삭제합니다.`);

  const { Result: Result2 } =
    useMoonerDown(`###### UserDefaults 데이터 불투명성 문제 해결
    \`문제 상황\`
    탈옥된 기기에서 UserDefaults를 접근해서 코드를 뜯게 되면 UserDefaults의 저장 내용이 무엇인지 나오는 문제가 발생했습니다.
    \`해결 방법\`
    첫번째 시도
    - UserDefaults를 암호화 해서 사용자에게 복호화 방법을 진행할려고 했습니다. 하지만 정해진 복호화 양식은 사용자가 코드를 보고 유추할 수 있다는 의견이 보안팀에서 나왔습니다.
    두번째 시도
    - keychain을 사용해서 애플이 제공해주는 암호화 방법을 선택했습니다.
    - keychain을 사용하면 모든 항목이 암호화 되어 이슈를 해결할 수 있습니다.
    추가적인 방법을 도입
    - 저희 팀에서는 탈옥된 기기를 막자는 의견이 나왔고 서칭을 해본 결과 IOSSecuritySuite를 사용해서 탈옥 감지 모듈을 찾아낸 후 탈옥 모듈일 경우 앱에 접근도 하지 못하게 nil을 반환해서 강제 종료 하도록 개발했습니다.
    
    ##### 스크린샷 감지 모듈 문제 해결
    \`문제 상황\`
    사용자가 캡처를 하였을 때 경고창이 나오도록 하는 기능 문제와 찍힌 캡처의 시간이 나오도록 하는 문제가 발생했습니다.
    \`해결 방법\`
    💡 UIApplication을 사용하여 **\`userDidTakeScreenshotNotification\`**을 구독하는 코드를 작성하고, OperationQueue.main을 사용하여 앱이 실행되는 동안 계속해서 감시하도록 하였습니다. 앱에서 스크린샷이 감지되면 이를 Date 배열로 받아와서 UserDefaults에 저장하는 방식을 사용하였습니다.
    
    ### 📚 회고
    MVP 아키텍처를 처음 다뤄보면서 낯설었지만, 핵심 원리를 파악하면서 점차 익숙해졌습니다.
    MVP를 적용하니 **개발 속도가 향상**되었고, **책임을 분할**하여 개발 과정을 보다 체계적으로 관리할 수 있었습니다.
    프로젝트를 통해 MVP의 개념과 장점을 **직접 경험하면서 이해**할 수 있었습니다.
    iOS 보안을 적용하는 과정에서는 다양한 경험을 쌓을 수 있었습니다.
    탈옥 감지 라이브러리 사용부터 코드 난독화까지 경험했고, 앱 내의 캐시를 삭제하는 방법과 OS 접근 등 보안 분야를 도전해 보았습니다.
    이뿐만 아니라 직접 **버전이 낮은 아이폰을 구매하여서 직접 탈옥**을 시도하였고 **Frida를 사용**하여서 앱의 접근해보았습니다. 소스코드를 뜯어보는 작업과 강제로 앱을 종료하는 작업을 구현했습니다.
    공격자의 시점에서 앱에 어떻게 침입할까? 많은 고민을 해보았으며 방어자(개발자)시점에서 어떻게 해야지 침입자를 막을 수 있을까? 많은 고민을 해보았습니다.
    그러나 아쉬운 점은 앱은 **서버와 다르게 앱을 배포할 때 개별 사용자**를 위한 앱을 만들어야한다는 점이 아쉬웠습니다. 이로 인해 침입자가 앱 환경을 뚫는 것이 매우 어려워졌고, 코드를 공개하지 않았다는 가정하에 **탈옥을 통한 접근 방법**만 허용되었습니다.
    하지만 방어자 시점에서 탈옥을 차단하는 라이브러리를 사용하여 공격자가 할일이 없어졌습니다. 때문에 이러한 상황에서 기밀앱 또는 위장앱을 만들어 보자! 라는 생각에 스크린샷 및 앱 접근 시간 등을 통한 위장아이콘 및 백그라운드 온보딩 기능을 만들었습니다.
    위 마시멜로 프로젝트를 통해서 많은 보안 관련 기능을 사용해보면서 앞으로는 **안전하고 신뢰할 수 있는 앱을 개발하는 개발자**로서 사용자가 안정감을 느낄 수 있도록 최선을 다하자는 생각이 들었습니다.
    `);

  return (
    <>
      <Top>
        <GIcon icon={"SM"} width={"100px"} />

        <Txt typography={"H0"}>
          SecureMarshmallow <Txt typography={"P1"}>2023.06.07~2023.08.04</Txt>
        </Txt>
      </Top>
      <Tags>
        {["Swift", "Snpkit", "Then", "IOSSecuritySuite", "RxSwift", "MVP", "frida"].map((v) => {
          return DefaultTag[v as keyOfDefaultTag];
        })}
      </Tags>

      <URLBox>
      <URLItem
          icon={"SM"}
          text={"공격자가 애플리케이션을 어떻게 공격하는지 이해하고, 개발자가 이를 어떻게 방어할 수 있는지에 대한 연구하는 프로젝트"}
        >
          <Txt>한줄 요약</Txt>
        </URLItem>
      </URLBox>

      <URLBox>
        <URLItem
          icon={"Github"}
          url={"https://github.com/SecureMarshmallow/SecureMarshmallow_iOS_V3"}
        >
          <Txt>Github</Txt>
        </URLItem>
      </URLBox>
      <Lefter>
        <Img
          url={"banner/smBanner.webp"}
          width={"100%"}
          border={"0"}
          align={"center"}
        />
      </Lefter>

      {Result}
      <Details>
        <summary>동작 화면</summary>
        <div style={{ display: "flex" }}>
          <video src={Video} width={300} controls></video>
        </div>
      </Details>
      <br></br>
      {Result2}

      <H3>세부 사항</H3>
      <Details>
        <summary>앱 화면</summary>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", paddingBottom: 30 }}>
            <Img
              url={"secureMarshmallow/s1.png"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
            <Img
              url={"secureMarshmallow/s2.png"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
            <Img
              url={"secureMarshmallow/s3.png"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
            <Img
              url={"secureMarshmallow/s4.png"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
          </div>
          <div style={{ display: "flex", paddingBottom: 30 }}>
            <Img
              url={"secureMarshmallow/s5.png"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
            <Img
              url={"secureMarshmallow/s6.png"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
            <Img
              url={"secureMarshmallow/s7.png"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
            <Img
              url={"secureMarshmallow/s8.png"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
          </div>
          <div style={{ display: "flex", paddingBottom: 30 }}>
            <Img
              url={"secureMarshmallow/s9.png"}
              width={"60%"}
              border={"0"}
              align={"center"}
            />
            <Img
              url={"secureMarshmallow/s10.png"}
              width={"60%"}
              border={"0"}
              align={"center"}
            />
            <Img
              url={"secureMarshmallow/s11.png"}
              width={"60%"}
              border={"0"}
              align={"center"}
            />
          </div>
        </div>
      </Details>
    </>
  );
};

export default SecureMarshmallow;
