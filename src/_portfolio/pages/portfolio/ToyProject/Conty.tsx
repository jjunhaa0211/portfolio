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
  } from "../../../components/layout/projectLayout";
  import { GIcon } from "../../../../components/GIcon";
  import { Txt } from "../../../../components/Txt";
  import { DefaultTag, keyOfDefaultTag } from "../../../../components/Tag";
  import useMoonerDown from "../../../../utils/editor/hook/useMoonerDown";
  
  const Conty = () => {
    // const { Result } = useMoonerDown(`### 개요
    // 대덕소프트웨어마이스터고에서 진행하는 소프트웨어 공학 수업의 일환으로, 개발자들이 자신만의 포트폴리오를 쉽게 생성하고 관리할 수 있는 웹사이트를 개발하는 프로젝트입니다. 대부분 개발자가 자신의 능력과 경험을 효과적으로 보여줄 수 있는 포트폴리오의 필요성을 느끼지만, 실제로 이를 구현하기까지는 많은 어려움이 따릅니다. 이러한 문제를 해결하고자, 템플릿을 제공하는 포트폴리오 생성 웹사이트를 개발하였습니다.
  
    //   ### 구현 기능
    //   - 포트폴리오를 제공
    //   - 반응형 웹사이트 제공
    //   - 깃허브 링크 클론 기능
    //   - PDF 변환 기능
  
    //   ### 주요 업무 및 상세 역할
    //   - 일정 관리, 기획, 팀원 관리를 담당하는 프로젝트 매니저(PM) 역활 수행
    //   - Auth 부분 서버 연동 및 뷰 개발
    //   - 전체적인 코드 리뷰 및 리펙토링
  
    //   ### 문제 해결
    //   \`문제 상황\`
    //   CSS 파일과 HTML 파일에 대한 길이 및 파일 증가
    //   \`해결 방안\`
    //   tsx 파일을 사용해서 함수형으로 HTML 파일을 내보낼 수 있도록 하고 TS 파일을 동시에 작성할 수 있으며 styled-components를 사용해서 TS 파일에 CSS 파일을 추가할 수 있게 되어서 문제를 해결했습니다.
    //   `);

    const { Result } = useMoonerDown(`준비중입니다.`);
  
    // const { Result: Result2 } = useMoonerDown(`
    //   ### 📚 회고
    //   리액트를 사용하여 웹 뷰를 구성하는 경험을 통해, 전반적인 웹 레이아웃 작업에 대한 이해를 넓혔습니다. 특히, flex 개념을 통해 웹 디자인의 유연성에 대해 배울 수 있었고, 프론트엔드 팀원들과 함께 웹 사이트를 만드는 과정에서 스타일 컴포넌트와 tsx 파일 사용법에 대해 학습하는 등, 프론트엔드 개발에 대한 실질적인 경험을 쌓을 수 있었습니다.
    //   프로젝트 초기 설정부터 디자인을 기반으로 한 뷰 구성까지의 과정을 경험하며, 웹 사이트 개발에 관한 관심이 깊어지게 되었습니다. 현재는 SCSS를 도입하여 스타일링의 효율성을 높이고 있으며, axios 대신 React-Query를 활용해 서버의 부하를 줄이는 캐싱 작업에 집중하고 있습니다. 이를 통해, 웹의 라우터 개념 및 브라우저의 동작 방식에 대한 이해도를 높이는 등 웹 개발에 대한 지식을 꾸준히 확장해 나가고 있습니다.
    //   마지막으로 현재까지 웹 개발을 지속적으로 공부하며, 프로젝트를 성공적으로 발표했습니다.
    //   `);
    return (
      <>
        <Top>
          <GIcon icon={"Conty"} width={"100px"} />
          <Txt typography={"H0"}>
          Conty <Txt typography={"P1"}>2024.07.29 ~ 2024.07.30</Txt>
          </Txt>
        </Top>
        <Tags>
          {["Swift", "Snpkit", "GoogleMobileAds"].map(
            (v) => DefaultTag[v as keyOfDefaultTag]
          )}
        </Tags>
  
        <URLBox>
          <URLItem
            icon={"Conty"}
            text={"이쁘고 귀여운 이모티콘들을 콘티에서 만나봐요~ 0.o"}
          >
            <Txt>한줄 요약</Txt>
          </URLItem>
          <URLItem
            icon={"Github"}
            url={"https://github.com/jjunhaa0211/Conty"}
          >
            <Txt>Github</Txt>
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
        {/* {Result2} */}
      </>
    );
  };
  
  export default Conty;
  