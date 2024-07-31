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
  
  const JunNote = () => {
 
    const { Result } = useMoonerDown(`### 개요
      리액트를 사용하여 반응형 웹뷰를 iOS에 연결하는 것을 목표로 프로젝트를 시작했습니다. 간단한 메모장 서비스를 만들면서 리액트에 대해 이해하고 iOS와 웹뷰를 상호작용하게 하는 것이 목표입니다. 웹뷰를 사용해 반응형으로 만들게 되면 어떤 UI 화면이든 크기에 따라 유동적으로 바뀌기 때문에 모든 디바이스를 지원할 수 있을 것이라 생각하여 웹뷰에 대해 이해해보고자 프로젝트를 시작했습니다.      
      ### 구현 기능
        - 노트 CRDU 기능
        - 마크다운 및 사진 파일 노트 추가하기 기능
        - 태그별 노트 저장 기능
        - 노트 보관 기능
        - 태그 추가하기 기능
        - 핀을 통한 고정하기 기능
        - 방문 기록 확인하기 기능
        - 쓰래기통 기능 구현
        - 반응형 뷰 구현
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
          <GIcon icon={"JunNote"} width={"100px"} />
          <Txt typography={"H0"}>
            준노트 <Txt typography={"P1"}>2024.06.25~2024.07.04</Txt>
          </Txt>
        </Top>
        <Tags>{["TS", "ReactNative", "axios"].map((v) => DefaultTag[v as keyOfDefaultTag])}</Tags>
  
        <URLBox>
        <URLItem
            icon={"JunNote"}
            text={"macOS, iOS, iPad를 지원하는 나만의 메모장"}
          >
            <Txt>한줄 요약</Txt>
        </URLItem>
          <URLItem
            icon={"Github"}
            url={"https://github.com/jjunhaa0211/JMemo"}
          >
            <Txt>Github (Project)</Txt>
          </URLItem>
          <URLItem
            icon={"AppStore"}
            url={"https://apps.apple.com/kr/app/%EC%A4%80%EB%85%B8%ED%8A%B8/id6505130882"}
          >
            <Txt>AppStore</Txt>
          </URLItem>
        </URLBox>
  
        <Lefter>
          <Img
            url={"banner/JunNoteBanner.webp"}
            width={"100%"}
            border={"0"}
            align={"center"}
          />
        </Lefter>
  
        {Result}

        <Details>
            <summary>UI 화면</summary>
            <div style={{ display: "flex", width: "120%", marginTop: "10px" }}>
              <Img
                url={"junNote/JN1.png"}
                width={"80%"}
                border={"0"}
                align={"center"}
              />
              <Img
                url={"junNote/JN2.png"}
                width={"80%"}
                border={"0"}
                align={"flex-end"}
              />
              <Img
                url={"junNote/JN3.png"}
                width={"80%"}
                border={"0"}
                align={"center"}
              />
              <Img
                url={"junNote/JN4.png"}
                width={"80%"}
                border={"0"}
                align={"center"}
              />
              <Img
                url={"junNote/JN5.png"}
                width={"80%"}
                border={"0"}
                align={"center"}
              />
            </div>
            <div style={{ display: "flex", width: "120%", marginTop: "10px" }}>
              <Img
                url={"junNote/JN6.png"}
                width={"80%"}
                border={"0"}
                align={"center"}
              />
              <Img
                url={"junNote/JN7.png"}
                width={"80%"}
                border={"0"}
                align={"flex-end"}
              />
              <Img
                url={"junNote/JN8.png"}
                width={"80%"}
                border={"0"}
                align={"center"}
              />
              <Img
                url={"junNote/JN9.png"}
                width={"80%"}
                border={"0"}
                align={"center"}
              />
              <Img
                url={"junNote/JN10.png"}
                width={"80%"}
                border={"0"}
                align={"center"}
              />
            </div>
    
          <div style={{ display: "flex", width: "120%", marginTop: "10px" }}>
            <Img
              url={"junNote/JN11.png"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
            <Img
              url={"junNote/JN12.png"}
              width={"80%"}
              border={"0"}
              align={"flex-end"}
            />
            <Img
              url={"junNote/JN13.png"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
            <Img
              url={"junNote/JN14.png"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
            <Img
              url={"junNote/JN15.png"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
          </div>
          </Details>
        {Result2}
      </>
    );
  };
  
  export default JunNote;
  