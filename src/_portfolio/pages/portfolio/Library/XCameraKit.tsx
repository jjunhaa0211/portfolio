import { H3, H4, Img, Lefter, P, Tags, Top, URLBox, URLItem } from "../../../components/layout/projectLayout";
import { GIcon } from "../../../../components/GIcon";
import { Txt } from "../../../../components/Txt";
import { DefaultTag, keyOfDefaultTag } from "../../../../components/Tag";

const XCameraKit = () => {
    return <>
        <Top>
            <GIcon icon={"XCameraKit"} width={"100px"}/>
            <Txt typography={"H0"}>XCameraKit <Txt typography={"P1"}>2022.06.11~</Txt></Txt>
        </Top>
        <Tags>{["Swift"].map(v => DefaultTag[v as keyOfDefaultTag])}</Tags>

        <URLBox>
            <URLItem icon={"Github"} url={"https://github.com/jjunhaa0211/XCameraKit"}>
                <Txt>Github (Project)</Txt>
            </URLItem>
        </URLBox>

        <H3>📖 요약</H3>
        <P>🎆 A library created to use the camera easily 🌌</P>

        <H3>📄 개발 내용</H3>
    </>
}

export default XCameraKit;