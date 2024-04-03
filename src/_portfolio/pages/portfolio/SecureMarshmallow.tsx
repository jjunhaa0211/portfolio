import { H3, H4, H5, Img, Lefter, P, Tags, Top, P2, Block_2 } from "../../components/layout/projectLayout";
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

        <Lefter>
            <Img url={"banner/smBanner.webp"} width={"100%"} border={"0"} align={"center"}/>
        </Lefter>

        <H3>개요</H3>
        <P>개발자가 프로젝트를 할 때 기능에는 열심히 하지만 보안 측면을 소홀히 하는 경향이 있다고 판단했습니다.</P>
        <P>그래서 저희는 보안을 중요시하는 애플리케이션을 개발하기로 결정했습니다.</P>
        <P>이 프로젝트의 주요 목표는 공격자가 애플리케이션을 어떻게 공격하는지 이해하고, 개발자가 이를 어떻게 방어할 수 있는지에 대한 연구하는 프로젝트입니다.</P>

        <H3>역활</H3>
        <P>프로젝트 PM과 iOS 앱개발 및 iOS 보안을 담당했습니다.</P>
        <H5>PM</H5>
        <P>• 일정 관리, 기획, 그리고 팀원 관리</P>
        <P2>프로젝트를 시작할 때, 워터폴 방법론을 활용하여 철저한 요구사항 분석과 프로젝트 기획을 진행했습니다.</P2>
        <P2>그러나, 프로젝트 팀원 간의 기능 이슈가 발생하면서 애자일 방법론으로의 전환을 결정하게 되었습니다.</P2>
        <P2>이 과정에서, 개별 기능에만 집중하는 것이 아니라 팀원 간의 원활한 소통을 통해 문제를 해결하는 방법의 중요성을 깨달았습니다.</P2>
        <P2>이 경험을 프로젝트의 성공은 효율적인 방법론과 팀원 간의 협력에 기반을 두고 있음을 강조하고자 합니다.</P2>

        <H5>iOS</H5>
        <P>• 로컬 저장과 보안 관리</P>
        <P2>여러 로컬 DB를 사용해서 텍스트 또는 사진을 저장하는 기능 구현</P2>
        <P2>탈옥된 기기에서 앱을 접근하는 것을 막는 기능 구현</P2>
        <P2>캡쳐 금지 기능 및 스크린샷 추적 기능 구현</P2>
        <P2>앱 내의 캐시 삭제 기능 구현</P2>
        <P2>앱 내의 OS 접근 기능 구현</P2>
        <P2>앱 위장 아이콘 기능 구현</P2>

        <H5>iOS Security</H5>
        <P>• 뷰의 에러 찾기와 메모리 접근으로 앱 강제 종료</P>
        <P2>탈옥된 기기를 사용하여 Frida로 앱의 UI 강제 변경</P2>
        <P2>LLDB를 사용해서 뷰의 에러 발견</P2>
        <P2>Frida를 사용하여 앱 강제 종료 및 악성 알럿 성공</P2>
        <P2>UserDefaults 데이터 무단 침입 성공 = 고민중</P2>

        <H3>성능 개선 및 이슈</H3>
        <H5>Main CollectionViewController에서 collectionViewCell 이동 문제 해결</H5>
        <Block_2> 문제 상황 </Block_2>
        <P>아이폰 OS에서 제공하는 위젯의 위치를 변경하는 기능을 구현하려 할 때, 셀을 드래그하여 이동시키려 해도 셀과 해당 셀의 인덱스가 변경되지 않는 문제가 발생했습니다.</P>
        <Block_2> 해결 방법 </Block_2>
        <P>💡 `UILongPressGestureRecognizer` 를 사용해서 롱 프레스가 감지하면 가상의 셀 뷰의 활용방법을 생각</P>
        <P>1. 가상 Cell 뷰를 활용해서 드래그 중인 Cell 표현하기</P>
        <P>시작단계에서 사용자가 Cell을 길게 누르는 것을 감지합니다. 이때 `began` 메소드를 활동화 시켜서 사용자에게 드래그 중인 셀의 모습을 보여주기 위한 가상의 뷰를 생성합니다. 이렇게 해서 위 문제에서 위젯을 꾹 누르는 기능을 구현할 수 있었습니다.</P>
        <P>2. 셀의 위치 변경하기</P>
        <P>사용자가 Cell의 위치를 변경하기 시작하면, `changed` 상태가 활성화되어서 사용자가 Cell을 드래그하는 동안 collectionView의 Cell 위치를 실시간 업데이트 후 리로드를 시켜줍니다.</P>
        <P>3. 이동 작업의 완료 처리</P>
        <P>사용자가 Cell 이동을 완료하면 `ended` 상태가 활성화되어 이동 작업이 끝나게 되고, 가상의 Cell 뷰를 화면에서 제거합니다. 만약 가상의 뷰가 다른 Cell 위에 위치해 있었다면, 그 뷰를 삭제합니다.</P>

        <H5>UserDefaults 데이터 불투명성 문제 해결</H5>
        <Block_2> 문제 상황 </Block_2>
        <P>탈옥된 기기에서 UserDefaults를 접근해서 코드를 뜯게 되면 UserDefaults의 저장 내용이 무엇인지 나오는 문제가 발생했습니다.</P>
        <Block_2> 해결 방법 </Block_2>
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
        <Block_2> 문제 상황 </Block_2>
        <P>사용자가 스크린샷을 찍으면 경고창이 호출되지만, 설정 페이지에 정확한 세부 정보가 표시되지 않고 있습니다. 또한, 사용자가 스크린샷을 찍어도 경고창이 표시되지 않는 문제가 발생하고 있습니다.</P>
        <P>`해결 방법`</P>
        <P>💡 UIApplication을 사용하여 **`userDidTakeScreenshotNotification`**을 구독하는 코드를 작성하고, OperationQueue.main을 사용하여 앱이 실행되는 동안 계속해서 감시하도록 하였습니다. 앱에서 스크린샷이 감지되면 이를 Date 배열로 받아와서 UserDefaults에 저장하는 방식을 사용하였습니다.</P>

        <H3>📚 회고</H3>
        <P>- 처음에는 MVP 구조를 다루는 것이 낯설었지만, MVP의 핵심 원리를 이해하고 공부하면서, 간단한 토이 프로젝트에서는 개발 속도가 빠를 수 있다는 것을 깨달았습니다. 또한 MVP는 MVC보다 책임을 분활시킬 수 있어서 개발 과정을 보다 체계적으로 관리할 수 있었습니다. 위 프로젝트를 통해 MVP의 개념과 장점에 대해 심도 있게 이해할 수 있었습니다.</P>
        <P>- iOS 보안을 적용하는 과정에서는 다양한 흥미로운 상황들을 경험했습니다. 탈옥된 모듈을 판별해주는 라이브러리부터 코드 난독화까지 다양한 보안 관련 라이브러리를 사용하고 데이터를 효율적으로 관리하는 방법을 배웠습니다. 이를 통해 iOS 앱의 보안 측면에서의 중요성을 깨달을 뿐만 아니라 실제로 이러한 보안 기술을 구현하고 적용하는 경험을 쌓을 수 있었습니다.</P>
    </>
}

export default SecureMarshmallow;