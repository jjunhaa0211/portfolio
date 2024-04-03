import { H3, P, Tags, Top, URLBox, URLItem } from "../../components/layout/projectLayout";
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
            <URLItem icon={"Github"} url={"https://github.com/Mooner510/BeatTable"}>
                <Txt>Github</Txt>
            </URLItem>
        </URLBox>

        <H3>📖 요약</H3>
        <P>테이블 형식의 색다른 리듬게임</P>

        <H3>📄 개발 내용</H3>
        <P>- 테이블(표) 형식의 노트를 리듬에 맞추어 키보드 혹은 발판을 이용해 누르는 게임</P>
        <P>- 노래 선택, 추가 기능</P>
        <P>- 선배와 같이 펌프 발판 제작</P>

        <H3>처음 개발 완료</H3>
        <P>음악: TheFatRat - Unity</P>
        <YouTube style={media ? {} : {
            display: "flex",
            width: "100%",
            justifyContent: "center"
        }} videoId={"o1Ij7mpcq7c"} opts={{ playerVars: { modestbranding: 1, rel: 0 } }}/>

        <H3>최종 결과물</H3>
        <P>음악: MIMI - ハナタバ</P>w
        <YouTube style={media ? {} : {
            display: "flex",
            width: "100%",
            height: "auto",
            justifyContent: "center"
        }} videoId={"c9qiY5hV_og"} opts={{ playerVars: { modestbranding: 1, rel: 0 } }}/>
    </>
}

export default Maeumgajim;