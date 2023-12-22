import { H3, Img, Lefter, P, Tags, Top, URLBox, URLItem } from "../../components/layout/projectLayout";
import { GIcon } from "../../../components/GIcon";
import { Txt } from "../../../components/Txt";
import { DefaultTag, keyOfDefaultTag } from "../../../components/Tag";
import YouTube from "react-youtube";
import { useMediaQuery } from "react-responsive";

const SurvivalFromTheEpidemic = () => {
    const media = useMediaQuery({ query: "(min-width: 768px)" });

    return <>
        <Top>
            <GIcon icon={"JunSal"} width={"100px"}/>
            <Txt typography={"H0"}>전염병으로부터 살아남기 <Txt typography={"P1"}>2023.09.07~2023.12.03</Txt></Txt>
        </Top>
        <Tags>{["unity", "csharp"].map(v => DefaultTag[v as keyOfDefaultTag])}</Tags>

        <URLBox>
            <URLItem icon={"Github"} url={"https://github.com/Survival-From-Epidemic/Survival-From-Epidemic"}>
                <Txt>Github</Txt>
            </URLItem>
        </URLBox>

        <H3>📖 요약</H3>
        <P>학교에 퍼지는 전염병을 방역하며 살아남아야 하는 게임</P>

        <H3>📄 개발 내용</H3>
        <P>- 학생 시각화: 전염병에 걸린 학생 혹은 기숙사 이동 등을 시각화 해주는 기능</P>
        <Img url={"junsal/img.png"}/>
        <P>- 패널: 학생을 관리하며 정책을 펼치고 학교에 서비스를 제공해주는 메뉴</P>
        <Lefter>
            <Img url={"junsal/img_1.png"}/>
            <Img url={"junsal/img_2.png"}/>
            <Img url={"junsal/img_3.png"}/>
        </Lefter>
        <Lefter>
            <Img url={"junsal/img_4.png"}/>
            <Img url={"junsal/img_5.png"}/>
            <Img url={"junsal/img_6.png"}/>
        </Lefter>
        <P>- 전염병 알고리즘: 학생이 전염병에 걸리고 확산되며 회복되는 알고리즘</P>

        <H3>결과물 - 3분 스피드런(클리어)</H3>
        <YouTube style={media ? {} : {
            display: "flex",
            width: "100%",
            justifyContent: "center"
        }} videoId={"rkduRZOb56k"} opts={{ playerVars: { modestbranding: 1, rel: 0 } }}/>

        <H3>결과물 - 배속(실패)</H3>
        <YouTube style={media ? {} : {
            display: "flex",
            width: "100%",
            height: "auto",
            justifyContent: "center"
        }} videoId={"_ge7BqLkIZw"} opts={{ playerVars: { modestbranding: 1, rel: 0 } }}/>
    </>
}

export default SurvivalFromTheEpidemic;