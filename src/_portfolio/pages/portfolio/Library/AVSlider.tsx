import { H3, H4, Img, Lefter, P, Tags, Top, URLBox, URLItem } from "../../../components/layout/projectLayout";
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
            <URLItem icon={"Github"} url={"https://github.com/Grapghers/SwitGrap"}>
                <Txt>Github (main)</Txt>
            </URLItem>
            <URLItem icon={"Github"} url={"https://github.com/Grapghers/SwitGrapPluginSupport"}>
                <Txt>Github (Support)</Txt>
            </URLItem>
        </URLBox>

        <H3>📖 요약</H3>
        <P>개성을 찾아 스타일을 공유하는 트렌디한 패션 앱 sdaf</P>

        <H3>📄 개발 내용</H3>
    </>
}

export default AVSlider;