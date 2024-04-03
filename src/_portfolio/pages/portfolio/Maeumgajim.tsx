import { H3, P, Tags, Top, URLBox, URLItem, Lefter, Img } from "../../components/layout/projectLayout";
import { GIcon } from "../../../components/GIcon";
import { Txt } from "../../../components/Txt";
import { DefaultTag, keyOfDefaultTag } from "../../../components/Tag";
import YouTube from "react-youtube";
import { useMediaQuery } from "react-responsive";

const Maeumgajim = () => {
    const media = useMediaQuery({ query: "(min-width: 768px)" });

    return <>
        <Top>
            <GIcon icon={"마음가짐"} width={"100px"}/>
            <Txt typography={"H0"}>마음가짐 <Txt typography={"P1"}>2022.10.26~2022.12.09</Txt></Txt>
        </Top>
        <Tags>{["unity", "csharp"].map(v => DefaultTag[v as keyOfDefaultTag])}</Tags>

        <URLBox>
            <URLItem icon={"Github"} url={"https://github.com/MaeumGaGym/MaeumGaGym_iOS"}>
                <Txt>Github (Project)</Txt>
            </URLItem>
            <URLItem icon={"Github"} url={"https://github.com/MaeumGaGym/MindGymKit"}>
                <Txt>Github (Health Library)</Txt>
            </URLItem>
            <URLItem icon={"Github"} url={"https://github.com/MaeumGaGym/Mango"}>
                <Txt>Github (Testing Library)</Txt>
            </URLItem>
            <URLItem icon={"Github"} url={"https://github.com/MaeumGaGym/MaeumGaGym-iOS-Structure"}>
                <Txt>Github (Tuist Structure)</Txt>
            </URLItem>
        </URLBox>

        <Lefter>
            <Img url={"banner/mgBanner.webp"} width={"100%"} border={"0"} align={"center"}/>
        </Lefter>

        <H3>📖 요약</H3>
        <P>마음가짐</P>

        {/* <H3>최종 결과물</H3>
        <P>음악: MIMI - ハナタバ</P>w
        <YouTube style={media ? {} : {
            display: "flex",
            width: "100%",
            height: "auto",
            justifyContent: "center"
        }} videoId={"c9qiY5hV_og"} opts={{ playerVars: { modestbranding: 1, rel: 0 } }}/> */}
    </>
}

export default Maeumgajim;