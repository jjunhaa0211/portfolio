import { A, H1, H2, H3, Img, Lefter, P, Tags, Top, URLBox, URLItem } from "../../components/layout/projectLayout";
import { GIcon } from "../../../components/GIcon";
import { Txt } from "../../../components/Txt";
import { DefaultTag } from "../../../components/Tag";

const RicePaper = () => {
    return <>
        <Top>
            <GIcon icon={"RicePaper"} width={"100px"}/>
            <Txt typography={"H0"}>RicePaper <Txt typography={"P1"}>22.04.29~22.05.30</Txt></Txt>
        </Top>
        <Tags>{[DefaultTag.java, DefaultTag.html, DefaultTag.javaScript]}</Tags>

        <URLBox>
            <URLItem icon={"Github"} url={"https://github.com/Mooner510/RicePaper"}>
                <Txt>Github (Web)</Txt>
            </URLItem>
            <URLItem icon={"Github"} url={"https://github.com/Mooner510/RicePaperBot"}>
                <Txt>Github (Bot Client)</Txt>
            </URLItem>
            <URLItem icon={"Web"} url={"https://mooner510.github.io/RicePaper"}>
                <Txt>웹사이트</Txt>
            </URLItem>
        </URLBox>

        <H3>📖 요약</H3>
        <P>전국의 학교 급식을 Discord로 손쉽게 보고 급식 시간이 다가오면 DM으로 이번 급식을 알려주는 서비스</P>

        <H3>🧑 개발 내용</H3>
        <P>- Discord의 Bot을 Java로 개발하여 RicePaper 봇 개발</P>
        <P>- 학교 급식의 칼로리, 영양성분을 포함하여 모든 급식 정보 조회 기능</P>
        <P>- 급식 시간 20~40분 전에 DM으로 다음 급식 정보 DM 푸시 알림 기능</P>
        <P>- 매번 학교를 입력할 필요 없이 나의 학교 등록 기능</P>

        <H3>📚 회고</H3>
        <P>- MySQL같이 서버가 필요한 DB가 아닌 SQLite를 이용하여 더 간단하고 가볍게 데이터를 저장해보는 경험을 가졌다.</P>
        <P>- React와 같은 라이브러리/프레임 워크 등을 사용하지 않고 오직 바닐라 HTML/JavaScript로 사이트를 제작해본 경험을 가질 수 있었다.</P>
        <P>- 처음으로 하는 분야였지만, 쉽게 익힐 수 있었고 문제가 생길 때 마다 Docs 혹은 인터넷 검색으로 빠르게 해결할 수 있었다.</P>
        <P>- 다른 분야를 전공으로 한 사람들과 더 원활하게 소통할 수 있게 되었다.</P>
    </>
}

export default RicePaper;