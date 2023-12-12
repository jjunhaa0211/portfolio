import { A, H3, Img, P, Tags, Top, URLBox, URLItem } from "../../components/layout/projectLayout";
import { GIcon } from "../../../components/GIcon";
import { Txt } from "../../../components/Txt";
import { DefaultTag, keyOfDefaultTag } from "../../../components/Tag";

const GenshinCalculator = () => {
    return <>
        <Top>
            <GIcon icon={"Paimon"} width={"100px"}/>
            <Txt typography={"H0"}>Genshin Calculator <Txt typography={"P1"}>2023.08.12~</Txt></Txt>
        </Top>
        <Tags>{["unity", "csharp"].map(v => DefaultTag[v as keyOfDefaultTag])}</Tags>

        <URLBox>
            <URLItem icon={"Web"} url={"https://genshin-calculator-beta.vercel.app"}>
                <Txt>Web</Txt>
            </URLItem>
            <URLItem icon={"Github"}>
                <Txt>Github</Txt>
            </URLItem>
        </URLBox>

        <H3>📖 요약</H3>
        <P>'원신' 게임의 각종 시스템을 더욱 효율적으로 하기 위해 계산해주는 서비스</P>

        <H3>📄 개발 내용</H3>
        <P>- 무기 비경 계산기: 무기를 돌파하기 위해 몇 번 비경(던전)을 돌아야 하는지, 얼마나 많은 레진(던전 이용료)이 필요한지 계산</P>
        <Img url={"/genshin-calculator-beta.vercel.app_forgery.webp"} width={"40%"}/>
        <P>- 특성 비경 계산기: 캐릭터의 특성을 강화하기 위해 몇 번 비경(던전)을 돌아야 하는지, 얼마나 많은 레진(던전 이용료)이 필요한지 계산</P>
        <Img url={"/genshin-calculator-beta.vercel.app_mastery.webp"} width={"40%"}/>
        <P>- 캐릭터 사용률과 누적 뽑은 횟수 비교 그래프</P>

        <H3>배포</H3>
        <P>Vercel을 이용하여 배포되어 있습니다: <A href={"https://genshin-calculator-beta.vercel.app"}
                                      target={"_blank"}>https://genshin-calculator-beta.vercel.app</A></P>
    </>
}

export default GenshinCalculator;