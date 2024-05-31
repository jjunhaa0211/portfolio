import { A, H3, Img, P, Tags, Top, URLBox, URLItem, Lefter, Details } from "../../../components/layout/projectLayout";
import { GIcon } from "../../../../components/GIcon";
import { Txt } from "../../../../components/Txt";
import { DefaultTag, keyOfDefaultTag } from "../../../../components/Tag";
import useMoonerDown from "../../../../utils/editor/hook/useMoonerDown";

const WeatherCard = () => {
    const { Result } = useMoonerDown(`### 개요
    리액트를 공부하면서 웹을 통해 앱을 개발하는 것에 큰 흥미를 가지게 되었습니다. 많은 사람들이 아침에 오늘 입고 갈 옷을 결정할 때 날씨를 참고하는데, 이를 더 쉽게 하기 위해 오늘의 전반적인 날씨를 한눈에 보여줄 수 있는 크로스 플랫폼 앱을 개발하기로 했습니다.

    ### 구현 기능
    - 오픈 API를 상용해서 서버와 통신
    - API 데이터 가공 및 예외 처리
    - 안드로이드, iOS에서 위치 데이터 받아오기

    ### 성능 강화
    ###### TS로 리펙토링
    \`리펙토링 이유\`
    기존 JS는 동적 타입 언어로, 변수의 타입이 런타임에 결정됩니다 이를 TS에서는 정적 타입 시스템을 도입하여 코드 작성 중에 타입 오류를 미리 발견할 수 있어 성능을 개선할 수 있습니다.
    ###### 세세한 컴포넌트 분리
    \`리펙토링 이유\`
    간단한 뷰를 만드는 데 많은 컴포넌트를 분리할 필요는 없지만, 앱 개발 경험상 하나의 MVC 구조를 만드는 것은 코드의 가독성을 현저히 떨어뜨릴 수 있습니다. 그래서 저는 레고를 조립하는 느낌으로 코드를 작성했습니다.`);

    const { Result: Result2 } =
    useMoonerDown(`
    ### 📚 회고
    이번 프로젝트를 진행하면서 제가 세운 목표는 옷을 좋아하는 제가 매번 번거롭게 다른 날씨들을 확인하지 않고 지금 당장의 날씨의 초점을 맞추어 보고 싶어서 프로젝트를 진행하게 되었습니다.
    Expo를 사용해서 RN을 경헙해볼 수 있었습니다. 기존 웹개발에서 컴포넌트를 분리하지 않고 커스텀을 만들 때 따로 뺴주는 작업이 iOS 개발과 비슷하여 익숙했습니다.
    컴포넌트를 분리하고 오픈 API를 사용해 데이터를 가공해보는 경험을 가질 수 있었고 JS로 구현 후 TS로 리펙과정을 거치면서 타입의 중요성을 깨달았습니다.
    추후 EXPO를 사용하는 것이 아닌 CLI를 사용해 코드를 리펙후 배포를 해볼 예정입니다.
    `);
    return <>
        <Top>
            <GIcon icon={"WeatherCard"} width={"100px"}/>
            <Txt typography={"H0"}>WeatherCard <Txt typography={"P1"}>2024.05.27 ~ 2024.05.29</Txt></Txt>
        </Top>
        <Tags>{["TS", "ReactNative", "axios"].map((v) => DefaultTag[v as keyOfDefaultTag])}</Tags>

        <URLBox>
      <URLItem
          icon={"WeatherCard"}
          text={"오늘하루의 날씨를 알려주는 어플리케이션"}
        >
          <Txt>한줄 요약</Txt>
        </URLItem>
      </URLBox>

        <URLBox>
            <URLItem icon={"Github"} url={"https://github.com/jjunhaa0211/WEATHERCARD"}>
                <Txt>Github</Txt>
            </URLItem>
        </URLBox>

        <Lefter>
        <Img
          url={"banner/WeatherCardBanner.webp"}
          width={"100%"}
          border={"0"}
          align={"center"}
        />
      </Lefter>
        {Result}
        {Result2}
      <H3>세부 사항</H3>
      <Details>
        <summary>앱 화면</summary>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", paddingBottom: 30 }}>
            <Img
              url={"WeatherCard/WeatherCardiOS.webp"}
              width={"30%"}
              border={"0"}
              align={"center"}
            />
          </div>
        </div>
      </Details>
    </>
}

export default WeatherCard;