import { H3, H4, Img, Lefter, P, Tags, Top, URLBox, URLItem, H5, Block_2 } from "../../../components/layout/projectLayout";
import { GIcon } from "../../../../components/GIcon";
import { Txt } from "../../../../components/Txt";
import { DefaultTag, keyOfDefaultTag } from "../../../../components/Tag";

const AVSlider = () => {
    return <>
        <Top>
            <GIcon icon={"AVSlider"} width={"100px"}/>
            <Txt typography={"H0"}>AVSlider <Txt typography={"P1"}>2022.06.11~</Txt></Txt>
        </Top>
        <Tags>{["Swift"].map(v => DefaultTag[v as keyOfDefaultTag])}</Tags>

        <URLBox>
            <URLItem icon={"Github"} url={"https://github.com/AVFNS/AVSlider"}>
                <Txt>Github</Txt>
            </URLItem>
        </URLBox>

        <video src="https://github.com/AVFNS/AVSlider/assets/102890390/ace7900a-d8bc-4ff7-962a-ab0d019f356c" width={300} controls></video>

        <H3>개요</H3>
        <P>AVSlider는 애플 스타일의 커스텀 UISlider 만들었으나 UISlider의 제약이 많아서 UIControl 및 UIGestureRecognizerDelegate를 사용해서 만들었습니다.</P>

        <H3>문제 상황과 해결점</H3>
        <H5>Slider 이동 문제</H5>
        <Block_2> 문제 상황 </Block_2>
        <P></P>
        <Block_2> 해결 방법 </Block_2>
        <P>💡 `UILongPressGestureRecognizer` 를 사용해서 롱 프레스가 감지하면 가상의 셀 뷰의 활용방법을 생각</P>
        <P>1. 가상 Cell 뷰를 활용해서 드래그 중인 Cell 표현하기</P>
        <P>시작단계에서 사용자가 Cell을 길게 누르는 것을 감지합니다. 이때 `began` 메소드를 활동화 시켜서 사용자에게 드래그 중인 셀의 모습을 보여주기 위한 가상의 뷰를 생성합니다. 이렇게 해서 위 문제에서 위젯을 꾹 누르는 기능을 구현할 수 있었습니다.</P>
        <P>2. 셀의 위치 변경하기</P>
        <P>사용자가 Cell의 위치를 변경하기 시작하면, `changed` 상태가 활성화되어서 사용자가 Cell을 드래그하는 동안 collectionView의 Cell 위치를 실시간 업데이트 후 리로드를 시켜줍니다.</P>
        <P>3. 이동 작업의 완료 처리</P>
        <P>사용자가 Cell 이동을 완료하면 `ended` 상태가 활성화되어 이동 작업이 끝나게 되고, 가상의 Cell 뷰를 화면에서 제거합니다. 만약 가상의 뷰가 다른 Cell 위에 위치해 있었다면, 그 뷰를 삭제합니다.</P>
    </>
}

export default AVSlider;