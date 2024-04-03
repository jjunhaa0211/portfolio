import { H3, H4, H5, Img, Lefter, P, Tags, Top } from "../../components/layout/projectLayout";
import { GIcon } from "../../../components/GIcon";
import { Txt } from "../../../components/Txt";
import { DefaultTag } from "../../../components/Tag";

const SecureMarshmallow = () => {
    return <>
        <Top>
            <GIcon icon={"SM"} width={"100px"}/>
            <Txt typography={"H0"}>SecureMarshmallow <Txt typography={"P1"}>2023.04.07~2023.12.01</Txt></Txt>
        </Top>
        <Tags>{[DefaultTag.Swift, DefaultTag.Snpkit, DefaultTag.IOSSecuritySuite, DefaultTag.RealmSwift, DefaultTag.RxSwift, DefaultTag.RxCocoa]}</Tags>

        <H3>📖 요약</H3>
        <P>SecureMarshmallow 프로젝트는 사용자에 권한에 접근해서 iOS에서 보안을 향상시키는 것을 목표로한 프로젝트입니다.</P>

        <H3>📄 프로젝트 주요 기능</H3>
        <H5>안전한 메모 및 사진 저장</H5>
        <P>- 일상 속에 꼭 기억해야 하는 일들, 또는 일정들을 메모로 기록해 관리하세요. 🖌️</P>
        <P>- 일반적인 메모와 다르게 암호화되는 패스워드를 통해 관리됩니다. 🔐</P>
        <P>- 보관해야하는 사진들도 SecureMarshmallow를 통해 안전하게 관리하세요. 🔍🖌️</P>
        <P>- 패스워드와 같은 인증 절차를 통해 사생활을 보호할 수 있습니다. 🔑</P>

        <H5>디바이스의 보안 관리</H5>
        <P>- 디바이스의 상태를 안전하게 관리하세요. 📱</P>
        <P>- URL의 안전성을 검증하세요. ⚠️</P>
        <P>- 네트워크, 디바이스 배터리, 저장 공간 등에 대한 정보를 편하게 확인하세요. ✅</P>

        <H5>침입 탐지 및 추적</H5>
        <P>- 내 기기에 침입한 기록을 확인하세요. 💡</P>
        <P>- 내 기기를 대상으로 스크린샷을 시도되었는지 확인하세요! 🔥</P>
        <br></br>
        <Lefter>
            <Img url={"secureMarshmallow/s1.png"} width={"75%"} border={"0"} align={"center"}/>
            <Img url={"secureMarshmallow/s7.png"} width={"75%"} border={"0"} align={"center"}/>
            <Img url={"secureMarshmallow/s8.png"} width={"75%"} border={"0"} align={"center"}/>
        </Lefter>
        <Lefter>
            <Img url={"secureMarshmallow/s2.png"} width={"50%"} align={"center"}/>
            <Img url={"secureMarshmallow/s9.png"} width={"50%"} align={"center"}/>
        </Lefter>
        <Lefter>
            <Img url={"secureMarshmallow/s3.png"} width={"75%"} align={"center"}/>
            <Img url={"secureMarshmallow/s4.png"} width={"75%"} align={"center"}/>
            <Img url={"secureMarshmallow/s5.png"} width={"75%"} align={"center"}/>
        </Lefter>

        <H3>📖 성능 개선 및 이슈</H3>
        <H5>Main CollectionViewController에서 collectionViewCell 이동 문제 해결</H5>
        <P>`문제 상황`</P>
        <P>아이폰 OS에서 제공하는 위젯의 위치를 변경하는 기능을 구현하려 할 때, 셀을 드래그하여 이동시키려 해도 셀과 해당 셀의 인덱스가 변경되지 않는 문제가 발생했습니다.</P>
        <P>`해결 방법`</P>
        <P>💡 `UILongPressGestureRecognizer` 를 사용해서 롱 프레스가 감지하면 가상의 셀 뷰의 활용방법을 생각</P>
        <P>1. 가상 Cell 뷰를 활용해서 드래그 중인 Cell 표현하기</P>
        <P>시작단계에서 사용자가 Cell을 길게 누르는 것을 감지합니다. 이때 `began` 메소드를 활동화 시켜서 사용자에게 드래그 중인 셀의 모습을 보여주기 위한 가상의 뷰를 생성합니다. 이렇게 해서 위 문제에서 위젯을 꾹 누르는 기능을 구현할 수 있었습니다.</P>
        <P>2. 셀의 위치 변경하기</P>
        <P>사용자가 Cell의 위치를 변경하기 시작하면, `changed` 상태가 활성화되어서 사용자가 Cell을 드래그하는 동안 collectionView의 Cell 위치를 실시간 업데이트 후 리로드를 시켜줍니다.</P>
        <P>3. 이동 작업의 완료 처리</P>
        <P>사용자가 Cell 이동을 완료하면 `ended` 상태가 활성화되어 이동 작업이 끝나게 되고, 가상의 Cell 뷰를 화면에서 제거합니다. 만약 가상의 뷰가 다른 Cell 위에 위치해 있었다면, 그 뷰를 삭제합니다.</P>

        <H5>UserDefaults 데이터 불투명성 문제 해결</H5>
        <P>`문제 상황`</P>
        <P>탈옥된 기기에서 UserDefaults를 접근해서 코드를 뜯게 되면 UserDefaults의 저장 내용이 무엇인지 나오는 문제가 발생했습니다.</P>
        <P>`해결 방법`</P>
        <P>첫번째 방법</P>
        <P></P>
        <P>- UserDefaults를 암호화 해서 사용자에게 복호화 방법을 진행할려고 했습니다.</P>
        <P>- 문제점</P>
        <P>- 정해진 복호화 양식은 사용자가 코드를 보고 유추할 수 있다는 의견이 보안팀에서 나왔습니다.</P>
        <P></P>
        <P>두번째 방법</P>
        <P>- keychain을 사용해서 애플이 제공해주는 암호화 방법을 선택했습니다.</P>
        <P>- keychain을 사용하면 모든 항목이 암호화 되어 이슈를 해결할 수 있습니다.</P>
        <P></P>
        <P>추가적인 방법을 도입</P>
        <P></P>
        <P>- 저희 팀에서는 탈옥된 기기를 막자는 의견이 나왔고 서칭을 해본 결과 IOSSecuritySuite를 사용해서 탈옥 감지 모듈을 찾아낸 후 탈옥 모듈일 경우 앱에 접근도 하지 못하게 nil을 반환해서 강제 종료 하도록 개발했습니다.</P>

        <H5>스크린샷 감지 모듈 문제 해결</H5>
        <P>`문제 상황`</P>
        <P>사용자가 스크린샷을 찍으면 경고창이 호출되지만, 설정 페이지에 정확한 세부 정보가 표시되지 않고 있습니다. 또한, 사용자가 스크린샷을 찍어도 경고창이 표시되지 않는 문제가 발생하고 있습니다.</P>
        <P>`해결 방법`</P>
        <P>💡 UIApplication을 사용하여 **`userDidTakeScreenshotNotification`**을 구독하는 코드를 작성하고, OperationQueue.main을 사용하여 앱이 실행되는 동안 계속해서 감시하도록 하였습니다. 앱에서 스크린샷이 감지되면 이를 Date 배열로 받아와서 UserDefaults에 저장하는 방식을 사용하였습니다.</P>

        <H3>📚 회고</H3>
        <P>- 처음에는 MVP 구조를 다루는 것이 낯설었지만, MVP의 핵심 원리를 이해하고 공부하면서, 간단한 토이 프로젝트에서는 개발 속도가 빠를 수 있다는 것을 깨달았습니다. 또한 MVP는 MVC보다 책임을 분활시킬 수 있어서 개발 과정을 보다 체계적으로 관리할 수 있었습니다. 위 프로젝트를 통해 MVP의 개념과 장점에 대해 심도 있게 이해할 수 있었습니다.</P>
        <P>- iOS 보안을 적용하는 과정에서는 다양한 흥미로운 상황들을 경험했습니다. 탈옥된 모듈을 판별해주는 라이브러리부터 코드 난독화까지 다양한 보안 관련 라이브러리를 사용하고 데이터를 효율적으로 관리하는 방법을 배웠습니다. 이를 통해 iOS 앱의 보안 측면에서의 중요성을 깨달을 뿐만 아니라 실제로 이러한 보안 기술을 구현하고 적용하는 경험을 쌓을 수 있었습니다.</P>
    </>
}

export default SecureMarshmallow;