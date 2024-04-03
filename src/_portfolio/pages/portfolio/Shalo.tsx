import { A, H3, Img, P, Tags, Top, URLBox, URLItem } from "../../components/layout/projectLayout";
import { GIcon } from "../../../components/GIcon";
import { Txt } from "../../../components/Txt";
import { DefaultTag, keyOfDefaultTag } from "../../../components/Tag";

const Shalo = () => {
    return <>
        <Top>
            <GIcon icon={"Shalo"} width={"100px"}/>
            <Txt typography={"H0"}>Shalo <Txt typography={"P1"}>2023.08.12~</Txt></Txt>
        </Top>
        <Tags>{["unity", "csharp"].map(v => DefaultTag[v as keyOfDefaultTag])}</Tags>

        <URLBox>
            <URLItem icon={"Github"} url={"https://github.com/AVFNS/Shalo"}>
                <Txt>Github</Txt>
            </URLItem>
        </URLBox>

        <H3>📖 요약</H3>
        <P>모바일로 손쉽게 영상을 편집하는 툴</P>
    </>
}

export default Shalo;