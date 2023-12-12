import { H3, Img, Lefter, P, Tags, Top } from "../../components/layout/projectLayout";
import { GIcon } from "../../../components/GIcon";
import { Txt } from "../../../components/Txt";
import { DefaultTag } from "../../../components/Tag";

const SkyblockRemake = () => {
    return <>
        <Top>
            <GIcon icon={"SBR"} width={"100px"}/>
            <Txt typography={"H0"}>SkyblockRemake <Txt typography={"P1"}>2022.03.07~</Txt></Txt>
        </Top>
        <Tags>{[DefaultTag.spigot, DefaultTag.java, DefaultTag.sql, DefaultTag.sqlite]}</Tags>

        {/*<URLBox>*/}
        {/*    <URLItem icon={"Github"}>*/}
        {/*        <Txt>Github</Txt>*/}
        {/*    </URLItem>*/}
        {/*</URLBox>*/}

        <H3>📖 요약</H3>
        <P>마인크래프트 서버 중 하나인 Hypixel의 Skyblock 미니게임을 리메이크 한 것으로, 내 마음대로 변경해 플레이 할 수 있게 해주는 Spigot 플러그인</P>

        <H3>📄 개발 내용</H3>
        <P>- RPG 게임의 기본적인 능력치, 무기, 갑옷, 펫, 장신구, 포션 등 각종 아이템</P>
        <P>- 플레이어를 따라다니며 특수 능력 혹은 능력치를 제공하는 펫 기능</P>
        <Img url={"sbr/img.png"} width={"65%"}/>
        <P>- 커스텀 능력치 및 능력 무기</P>
        <Lefter>
            <Img url={"sbr/img_1.png"} width={"85%"} border={"0"} align={"center"}/>
            <Img url={"sbr/img_4.png"} width={"85%"} border={"0"} align={"center"}/>
            <Img url={"sbr/img_2.png"} width={"85%"} border={"0"} align={"center"}/>
        </Lefter>
        <P>- 커스텀 마법 부여(인챈트)</P>
        <Lefter>
            <Img url={"sbr/img_10.png"} width={"90%"} align={"center"}/>
            <Img url={"sbr/img_5.png"} width={"90%"} align={"center"}/>
        </Lefter>
        {/*<P>- 커스텀 플레이어 목록</P>*/}
        {/*<Img url={"sbr/img_7.png"} width={"65%"}/>*/}
        <P>- 커스텀 물약(포션) 효과</P>
        <Lefter>
            <Img url={"sbr/img_8.png"} width={"90%"} align={"center"}/>
            <Img url={"sbr/img_9.png"} width={"90%"} align={"center"}/>
        </Lefter>
        <P>- 도전과제: 일정량 아이템을 수집할 경우 해당 아이템의 수집도가 증가하고 커스텀 레시피가 활성화 됨</P>
        <Lefter>
            <Img url={"sbr/img_12.png"} width={"90%"} align={"center"}/>
            <Img url={"sbr/img_11.png"} width={"90%"} align={"center"}/>
            <Img url={"sbr/img_13.png"} width={"90%"} align={"center"}/>
        </Lefter>
        {/*<P>- 플레이어 데이터와 맵 데이터 등을 SQLite라는 가벼운 DB로 저장</P>*/}
        {/*<P>- 모든 데이터 구성 파일을 DB가 아닌 XML, JSON, YAML 등으로 파싱 가능하게 하여 파일만 수정하면 즉시 게임이 바뀔 수 있도록 Config 기능 제작</P>*/}
        {/*<Lefter>*/}
        {/*    <Img url={"sbr/img_15.png"} width={"90%"} align={"center"}/>*/}
        {/*    <Img url={"sbr/img_18.png"} width={"90%"} align={"center"}/>*/}
        {/*</Lefter>*/}
        {/*<P>- 은행: 저축, 출금, 이자 기능</P>*/}
        {/*<Lefter>*/}
        {/*    <Img url={"sbr/img_17.png"} width={"90%"} align={"center"}/>*/}
        {/*    <Img url={"sbr/img_16.png"} width={"90%"} align={"center"}/>*/}
        {/*</Lefter>*/}

        <H3>📚 회고</H3>
        <P>- 최적화에 신경을 써가며 코드를 작성하게 되었다.</P>
        {/*<P>- 개발을 할 때마다 개발 일지를 작성하여 개발하는 것을 기록할 수 있어 좋았다.</P>*/}
        {/*<P>- 실제로 운영과 유지보수를 해보며 플레이어들과 소통해보는 경험을 가질 수 있었다.</P>*/}
        {/*<P>- 직접 SQL을 작성하였기에 SQL문도 간결하게 줄이고, 최적화 하는 방법을 배웠다.</P>*/}
        <P>- 버그가 있을 때마다 구글링과 이전에 작성한 코드와 비교 등을 하여 이제는 구글링 없이도 버그에 능숙하게 대응할 수 있게 되었다.</P>
        {/*<P>- XML, JSON, YAML의 특징과 장단점을 확실히 알아 게임에서 어떤 상황에 더 알맞을지 알 수 있게 되었습니다.</P>*/}
        {/*<P>- Java의 Reflection을 알고, 런타임에 직접 접근해 코드를 수정해보는 경험을 얻을 수 있었다.</P>*/}
        <P>- 한 언어를 깊게 공부할 수 있었다. 다른 언어들을 쉽게 배울 수 있게 되었다.</P>
    </>
}

export default SkyblockRemake;