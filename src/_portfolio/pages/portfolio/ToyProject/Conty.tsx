import {
    A,
    H3,
    Img,
    P,
    Tags,
    Top,
    URLBox,
    URLItem,
    Lefter,
    Details,
    H2,
  } from "../../../components/layout/projectLayout";
  import { GIcon } from "../../../../components/GIcon";
  import { Txt } from "../../../../components/Txt";
  import { DefaultTag, keyOfDefaultTag } from "../../../../components/Tag";
  import useMoonerDown from "../../../../utils/editor/hook/useMoonerDown";
  
  const Conty = () => {
 
    const { Result } = useMoonerDown(`### 개요
        특수 문자 이모티콘을 사용하는 친구들을 보고 직접 만들기 시작했습니다. 기존 앱들은 광고가 너무 많아서, 2개 이상을 복사하려면 30초짜리 광고를 봐야 했습니다. 처음에는 제가 사용하려고 만들기 시작했지만, 개발을 하면서 기초적인 MVC를 구현하고 코드를 점차 고도화하면서 개발하는 것이 재미있을 것 같아 시작하였으며 하단 광고 배너를 추가해보고 싶어서 이 프로젝트를 시작하게 되었습니다.

        리액트를 사용하여 반응형 웹뷰를 iOS에 연결하는 것을 목표로 프로젝트를 시작하였습니다. 간단한 메모장 서비스를 만들면서 리액트에 대해 이해를 하고 iOS와 웹뷰를 상호작용하게 하는 것이 목표입니다.
        웹뷰를 사용해 반응형으로 만들게 되면 어떤 UI 화면이든 크기에 따라 유동적으로 바뀌기 때문에 어떤 디바이스든지 전부 지원이 가능할 것 같았으며 웹뷰에 대해 이해를 해보고자 프로젝트를 시작했습니다.
        
        ### 구현 기능
         - 장르별 이모티콘 제공 기능
         - 특수 문자 이모티콘 제공 기능
         - 아스키 아트 제공 기능
          - 한번의 터치로 복사되는 기능
          - 최근 사용한 특수문자 보기 기능
          - 하단 구글 광고 보여주기
        `);
    
      const { Result: Result2 } = useMoonerDown(`
      ### 회고
      하루라는 시간 안에 만든 프로젝트로써 기능 구현 및 UI 제작까지는 8시간이 걸렸습니다. 하지만 애플 심사 때문에 이틀을 소모하게 되었습니다.
      이번 프로젝트를 하면서 UIPasteboard를 사용하여 데이터를 복사할 수 있는 방법을 공부할 수 있었습니다. GoogleMobileAds를 사용하여 앱 하단의 배너를 추가하는 방법에 대해서 배우고 이를 통한 수익 창출까지 도전해보았습니다.
      추후 개발적인 측면에서 추가할 기능은 복사되었을 때 바로 공유하기 버튼을 하단에 놓아서 복사한 이모티콘을 바로 내보낼 수 있는 기능과 즐겨찾기 기능을 추가할 예정이고 유지보수적인 측명에서는 애플 워치, 맥북 등등을 지원할 계획이며 현재 MVC인 프로젝트를 TCA로 바꾸며 RxSwift를 전면 도입할 생각입니다. 현재 앱스토어에서 *콘티(Conty)*를 만나볼 수 있습니다.
      `);
      return (
        <>
          <Top>
            <GIcon icon={"Conty"} width={"100px"} />
            <Txt typography={"H0"}>
              콘티(Conty) <Txt typography={"P1"}>2024.07.29~2024.07.30</Txt>
            </Txt>
          </Top>
          <Tags>{["Swift", "Snpkit", "GoogleMobileAds"].map((v) => DefaultTag[v as keyOfDefaultTag])}</Tags>
    
          <URLBox>
          <URLItem
              icon={"Conty"}
              text={"특수문자를 활용한 이모티콘 제공 플랫폼"}
            >
              <Txt>한줄 요약</Txt>
          </URLItem>
            <URLItem
              icon={"Github"}
              url={"https://github.com/jjunhaa0211/Conty"}
            >
              <Txt>Github (Project)</Txt>
            </URLItem>
            <URLItem
              icon={"AppStore"}
              url={"https://apps.apple.com/kr/app/%EC%BD%98%ED%8B%B0-conty/id6590610378"}
            >
              <Txt>AppStore</Txt>
            </URLItem>
          </URLBox>
    
          <Lefter>
            <Img
              url={"banner/Contybanner.webp"}
              width={"100%"}
              border={"0"}
              align={"center"}
            />
          </Lefter>
    
          {Result}

          <H2>UI 화면</H2>
          <div style={{ display: "flex", width: "120%", marginTop: "10px" }}>
              <Img
                url={"Conty/C1.webp"}
                width={"80%"}
                border={"0"}
                align={"center"}
              />
              <Img
                url={"Conty/C2.webp"}
                width={"80%"}
                border={"0"}
                align={"flex-end"}
              />
              <Img
                url={"Conty/C3.webp"}
                width={"80%"}
                border={"0"}
                align={"center"}
              />
              <Img
                url={"Conty/C4.webp"}
                width={"80%"}
                border={"0"}
                align={"center"}
              />
              <Img
                url={"Conty/C5.webp"}
                width={"80%"}
                border={"0"}
                align={"center"}
              />
            </div>
          {Result2}
        </>
      );
    };    
  
  export default Conty;
  