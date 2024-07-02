import {
  H3,
  H4,
  Img,
  Lefter,
  P,
  Tags,
  Top,
  URLBox,
  URLItem,
  H5,
  Block_2,
  Details,
} from "../../../components/layout/projectLayout";
import { GIcon } from "../../../../components/GIcon";
import { Txt } from "../../../../components/Txt";
import { DefaultTag, keyOfDefaultTag } from "../../../../components/Tag";
import styled from "styled-components";
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import useMoonerDown from "../../../../utils/editor/hook/useMoonerDown";

const VisitHistoryWebView = () => {

  const { Result } = useMoonerDown(`### 개요
    WebView를 공부하면서 크롬의 방문 기록 기능을 구현하려고 했습니다. 크롬의 시크릿 모드처럼 임시로 배열 메모리에 데이터를 보관하는 것이 아닌, 일반적인 창에서는 사용자가 방문한 웹 링크를 지속적으로 저장해야 한다는 것을 알게 되었습니다. 
    다양한 저장 방법을 경험하고 사용자가 자유롭게 방문 기록을 저장하고 관리할 수 있는 라이브러리를 개발하게 되었습니다.
    
    ### 개발 이슈
    ##### 어떻게 해야 여러 저장 방식을 하나의 클래스에서 채택할 수 있을까?
    \`문제 상황\`
    기존 처음 라이브러리 구조를 설계할 때는 arrayHistoryManager, UserDefaultsHistoryManager, keychainHistoryManager 형식으로 만들게 되었습니다. 이러한 구조는 코드의 중복을 많이 불러오는 문제가 생겼습니다.
    이뿐만 아니라 객체를 저장하는 클래스가 하나가 아니라 3개라서 사용자에게 번거로움을 줄 수 있다고 판단했습니다.
    \`해결 방법\`
    💡 사용자가 storageType을 통해서 어떤 저장 방식을 저장할지를 선택하고 저희는 switch를 통해서 사용자가 설정한 저장 방식으로 저장할 수 있도록 구현했습니다.`);

  const { Result: Result1 } = useMoonerDown(`### 📚 회고
    VisitHistoryWebView 라이브러리를 개발하면서 Swift의 여러 저장 방식에 대해서 경험해볼 수 있었습니다. Webkit 라이브러리를 함께 사용하면서 URL은 일반적인  변환이 되지 않는 다는 사실을 알 수 있습니다.
    Keychain을 직접 구현해보면서 제가 어떤 형식으로 저장되는지와 Security 라이브러리를 어떻게 사용해야 하는지를 배울 수 있었습니다. 
    현재 저장되어있는 저장소에 데이터가 추가되면 데이터를 세는 기능과 방문기록을 검색하는 기능 부분 삭제, 전체 삭제 기능을 구현하면서 다양한 저장 방식을 사용해보고 활용할 수 있는 능력을 기를 수 있었습니다.
    추후에는 WebView 사용자를 위해서 ViewController 자체를 방문기록 뷰로 제공해줄 예정입니다.`);
  return (
    <>
      <Top>
        <GIcon icon={"VisitHistoryWebView"} width={"100px"} />
        <Txt typography={"H0"}>
          VisitHistoryWebView <Txt typography={"P1"}>2024.06.30 ~</Txt>
        </Txt>
      </Top>
      <Tags>
        {["Swift", "WebKit"].map((v) => DefaultTag[v as keyOfDefaultTag])}
      </Tags>

      <URLBox>
        <URLItem
          icon={"VisitHistoryWebView"}
          text={"웹 브라우징 히스토리를 관리하는 Swift 라이브러리"}
        >
          <Txt>한줄 요약</Txt>
        </URLItem>
        <URLItem
          icon={"Github"}
          url={"https://github.com/jjunhaa0211/VisitHistoryWebView"}
        >
          <Txt>Github (Project)</Txt>
        </URLItem>
      </URLBox>

      <Lefter>
        <Img
          url={"banner/VisitHistoryWebViewBanner.webp"}
          width={"100%"}
          border={"0"}
          align={"center"}
        />
      </Lefter>
      {Result}
      <br />
      {Result1}
    </>
  );
};

export default VisitHistoryWebView;

const Good = styled.div`
  display: flex;
  width: calc(100% - 80px);
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  padding: 0 40px;
  align-self: stretch;
`;
