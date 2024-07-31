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
    준노트 프로젝트에서 제일 뜻 깊은 경험은 웹 뷰와 iOS를 서로 상호작용하는 것이었습니다. iOS에서 WKScriptMessageHandler의 didReceive를 통해서 프론트에 메세지를 식별하여 현재 핀의 상태를 알려주는 알람을 만들었습니다.
    이를 통해 웹뷰를 통해서 js와 양방향 통신을 하는 것을 배울 수 있었습니다. 그리고 웹 프로그래밍을 하면서 실제로 구현을 직접해보고 미디어 쿼리를 사용한 반응형 레이아웃을 구현해보면서 레이아웃이 실시간으로 변하는 것이 흥미로웠습니다. 
    이를 통해서 iPad, MacOS, iOS를 지원할 수 있는 앱을 만들 수 있었습니다. 위 프로젝트를 진행하면서 VisitHistoryWebView라는 iOS의 웹 브라우징 히스토리를 관리하는 라이브러리를 만들게 되었습니다.
    현재 웹서버는 github-pages를 통해서 웹이 배포되어있습니다.
    본래는 Local Storage를 사용한 사용자 메모저장을 하여서 앱스토어에 출시하였으나 쿠기를 사용한 방법을 하고자 임의에 데이터를 넣어놓은 상태입니다. 현재는 준노트를 애플스토어에서 만나볼 수 있습니다.`);
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
  