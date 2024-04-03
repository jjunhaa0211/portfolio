import { H3, P, Tags, Top, URLBox, URLItem } from "../../components/layout/projectLayout";
import { GIcon } from "../../../components/GIcon";
import { Txt } from "../../../components/Txt";
import { DefaultTag } from "../../../components/Tag";

const Today = () => {
    return <>
        <Top>
            <GIcon icon={"Today"} width={"100px"}/>
            <Txt typography={"H0"}>Today <Txt typography={"P1"}>2022.04.29~2022.05.30</Txt></Txt>
        </Top>
        <Tags>{[DefaultTag.Swift, DefaultTag.Then, DefaultTag.RxSwift, DefaultTag.RxCocoa, DefaultTag.XCameraKit, DefaultTag.AVFoundation ]}</Tags>

        <URLBox>
            <URLItem icon={"Github"} url={"https://github.com/TodayAsWell/Today-Memory-iOS"}>
                <Txt>Github</Txt>
            </URLItem>
        </URLBox>

        <H3>📖 요약</H3>
        <P>아이패드를 활용하여 손쉽게 인생 네컷 및 폴라로이드 사진을 만들고 꾸미고 보정할 수 있는 서비스</P>

        <H3>🧑 프로젝트 주요 기능</H3>
        <P>인생네컷 기능</P>
        <P>- 사진 4개를 갤러리에서 가져와서 사용자가 정해놓은 프레임에 사진을 추가합니다.</P>
        <P>- 인생네컷 전용 프레임을 추가할 수 있습니다.</P>

        <P>폴라로이드 기능</P>
        <P>- 사용자가 갤러리에서 사진을 한장 가져와서 정해놓은 프레임에 사진을 추가합니다.</P>
        <P>- 폴라로이드 전용 프레임을 추가할 수 있습니다.</P>

        <P>스티커 기능</P>
        <P>- 사용자가 스티커를 사용해서 자신이 선택한 인생네컷 또는 폴라로이드에서 스티커를 자유롭게 추가 및 조정할 수 있습니다.</P>
        <P>- 스티커의 크기, 모양을 조절하고 삭제할 수 있습니다.</P>

        <P>스티커 기능</P>
        <P>- 자신이 원하는 포즈를 제공해서 포즈에 맞게 사진을 찍을 수 있습니다.</P>
        <P>- 화면 전환이 가능합니다.</P>
        <P>- 화면을 확대 및 축소할 수 있습니다.</P>
        <P>- 카메라가 아래를 향하면 경고를 알려줍니다.</P>
        <P>- 화면을 터치에서 사진을 찍을 수 있습니다.</P>
        <P>- n초 후에 사진을 찍도록 설정할 수 있습니다.</P>

        <H3>📚 회고</H3>
        <P>- 사진관련 코드를 만드는 것이 너무 어려웠습니다. 기존에 사용해본적 없는 사진관련 코드를 건들다보니 코드가 복잡해지는 문제를 라이브러리 로 바꾸면서 전환하여 라이브러리와 앱을 동시에 만들 수 있는 좋은 경험을 했다고 생각합니다.경험을 가질 수 있었다.</P>
        <P>- 카메라 관련 프로젝트는 실제 모듈이 없으면 테스트가 안되기 때문에 아이패드 자체가 있어야 개발이 가능하다는 사실도 알았습니다.</P>
        <P>- 코드의 중요성을 깨달았습니다. 이유는 MVC에 대한 잘못된 이해로 프로젝트를 구성했을 때 프로젝트의 코드가 지저분해지고 500이상의 코드가 길어진다는 것을 알았습니다. 때문에 위 프로젝트를 기준으로 코드 스타일이 왜 중요하고 디자인 시스템이 왜 중요한지에 생각해보는 계기가 되었습니다.</P>
        <P>제가 ADPattern을 시작하게 된 계기가 되었습니다.</P>
    </>
}

export default Today;