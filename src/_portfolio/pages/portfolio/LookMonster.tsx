import { H3, H4, Img, Lefter, P, Tags, Top, URLBox, URLItem } from "../../components/layout/projectLayout";
import { GIcon } from "../../../components/GIcon";
import { Txt } from "../../../components/Txt";
import { DefaultTag, keyOfDefaultTag } from "../../../components/Tag";

const LookMonster = () => {
    return <>
        <Top>
            <GIcon icon={"LookMonster"} width={"100px"}/>
            <Txt typography={"H0"}>Lite24 <Txt typography={"P1"}>2022.08.08~2023.02.19</Txt></Txt>
        </Top>
        <Tags>{["spigot", "java", "sql", "sqlite"].map(v => DefaultTag[v as keyOfDefaultTag])}</Tags>

        <URLBox>
            <URLItem icon={"Github"} url={"https://github.com/LookMonster/LookMonster-iOS"}>
                <Txt>Github (Project)</Txt>
            </URLItem>
            <URLItem icon={"Github"} url={"https://github.com/LookMonster/LooMonster-iOS-Structure"}>
                <Txt>Github (Structure)</Txt>
            </URLItem>
        </URLBox>

        <H3>📖 요약</H3>
        <P>개성을 찾아 스타일을 공유하는 트렌디한 패션 앱</P>

        <H3>📄 개발 내용</H3>

        {/* <H4>1. BungeeAPI</H4>
        <P>마인크래프트 서버를 2개 이상을 배포한 후 각 서버를 하나의 프록시로 연결하는 소프트웨어를 BungeeCord라고 한다. 해당 소프트웨어와 각 서버를 연결시키기 위한 플러그인 개발</P>
        <P>- 서버끼리의 플레이어 랭크 관리</P> */}
        {/*<P>- 서버와 서버끼리의 채팅 패킷 API, 각 서버의 플레이어의 마지막 위치 기록, 채팅 로그 기록 기능</P>*/}

        {/* <H4>2. LiteBungeeChat / LiteJoin</H4>
        <P>BungeeAPI의 채팅 패킷 API를 이용해 독립적으로 채팅을 보내고 접두사, 접미사 동작, 서버 내의 채팅 브로드캐스팅 중재 플러그인</P>
        <P>서버 접속 혹은 연결을 종료하였을 때의 알림 및 플레이어의 위치를 BungeeAPI 플러그인으로 전송, 번지코드끼리의 연결 상태 중재 플러그인</P>
        <P>- 서버끼리의 플레이어 채팅 연동</P>
        <P>- 플레이어 랭크(등급)에 따라 접두사와 접미사 변경</P> */}
        {/*<P>- 서버 접속 / 나갈때의 액션바 알림</P>*/}
        {/*<P>- 채팅 키워드 알림 기능</P>*/}

        {/* <H4>3. MoonerEco</H4>
        <P>Valut API와 연동이 가능한 경제(돈) 플러그인 개발</P>
        <P>- 플레이어에게 '경제' 개념을 도입, 돈을 소지할 수 있도록 해줌</P>
        <P>- 플레이어간의 돈 송금 기능</P> */}
        {/*<P>- 서버 내의 모든 경제 시스템과 연동 가능한 API 제공</P>*/}

        {/* <H4>4. MoonerSethome</H4>
        <P>현재 위치를 집으로 설정해 어디서든지 집으로 자유롭게 순간 이동이 가능한 기능을 제공하는 플러그인 개발</P>
        <P>- 현재 위치를 집으로 등록하여 원할 때 다시 돌아올 수 있는 기능</P> */}
        {/*<P>- Lands 플러그인과 연동이 가능하도록 하여 다른 플레이어의 땅에서 집 등록을 할 수 없도록 할 수 있음</P>*/}

        {/* <H4>5. InventoryShare</H4>
        <P>번지코드와 연결된 하위 서버끼리 모든 데이터를 연동할 수 있도록 해주는 플러그인 개발</P>
        <P>- 번지코드의 하위 서버끼리 인벤토리 데이터, 포션 데이터, 체력, 배고픔 데이터 연동 가능</P> */}
        {/*<P>- 비동기 작업을 통해 더 빠른 연동이 가능함</P>*/}

        {/* <H4>6. Lands</H4>
        <Lefter>
            <Img url={"lite24/img_6.png"} width={"85%"} align={"center"}/>
            <Img url={"lite24/img_9.png"} width={"85%"} align={"center"}/>
            <Img url={"lite24/unknown.webp"} width={"85%"} align={"center"}/>
        </Lefter>
        <P>자신만의 땅을 구입하여 다른 플레이어가 간섭하지 못하도록 할 수 있는 플러그인 개발</P>
        <P>- 자신의 땅에 다른 플레이어를 멤버로 등록하여, 해당 플레이어만 자신의 땅과 상호작용이 가능하도록 할 수 있음</P>
        <P>- 땅에 다른 플레이어가 들어올 수 없도록 제한할 수 있음</P>
        <P>- 땅에서 작물이 자라거나 몹이 스폰되는 등 각종 설정이 가능함</P>

        <H3>📚 회고</H3>
        <P>- 동기 / 비동기 작업의 중요성과 장단점을 확실히 알 수 있었다.</P>
        <P>- 실제로 거대한 서버를 운영하는 것이였기 때문에 많은 어려움을 겪었었다. 하지만 그럴때마다 포기하지 않고 꾸준히 개발한 덕분에 13일이라는 짧은 시간 만에 모든 플러그인을 만들 수 있었다.</P>
        <P>- 약 5달간 서버를 실제로 운영했으며, 그 경험 덕분에 재대로된 버그 픽스와 플레이어로부터의 피드백을 듣고 조치 혹은 반영, 꾸준한 플레이어와의 소통, 지속적이고 반복적이지 않은 업데이트가 중요하다는 것을 알았다.</P>
        <P>- 수 많은 플러그인과 게임 기획, 개발을 하며 어떤 알고리즘을 사용해야 더욱 효율적인지, 어떤 상황에선 어떤 코드가 더 좋은지 등을 알 수 있게 되었다.</P> */}
    </>
}

export default LookMonster;