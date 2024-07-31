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
  import Video1 from "../../../../assets/자기주도영상.mp4";
  import Video2 from "../../../../assets/자기주도영상2.mp4";
  
  const JAGIJUDO = () => {
 
    const { Result } = useMoonerDown(`### 개요
        처음에는 영어 공부를 하기 위한 단어장을 만들려고 하였습니다. 영어 단어장, 퀴즈, 번역기 등등의 기능을 만들고나니 사회적 약자인 노인, 시각 장애인, 청각 장애인은 어떻게 영어 공부를 할까? 라는 생각이 들어서 프로젝트를 시작하게 되었습니다.
        시각이 불편한 사람에게는 VoiceOver를 사용해서 귀로 들려주고 귀가 불편한 청각 장애인분들을 위해서는 애플의 텍스트 크기를 증가했을 때 앱이 유동적으로 커지게 하는 것이 목표로 개발을 시작했습니다.
        
        ### 구현 기능
        - 번역기를 기능 구현
        - 번역기 즐겨찾기 구현
        - 개발 단어장 추가 및 삭제, 수정
        - 나만의 단어 퀴즈 구현
        - 정밀 체점 기능 구현
        - 강의로 공부하는 기능 구현
        - 강의 대본 번역 기능 구현
        - AI를 사용한 스피킹 연습 기능 구현
        `);
    
      const { Result: Result2 } = useMoonerDown(`
      ### 회고
      영어 단어장을 개발하면서 CoreData에 대한 이해도를 높였으며 복잡한 데이터를 구조화해서 저장할 때 편리하다는 것을 꺠닳았고 이번 프로젝트에서 일반적인 네비게이션 이동이 아닌 코디네이터 패턴을 사용해서 네비게이션을 조정하는 방법을 알았습니다.
      프로젝트에서 장애인을 위한 기능을 개발한 만큼 VoiceOver에 대해서 깊게 공부할 수 있었고 VoiceOver 사용에 능숙해졌습니다. 그리고 폰트를 고정으로 주는 것이 아닌 유동적을 주면서 사용자의 폰트크기에 따라 변경할 수 있도록 만들 수 있었습니다.
      ChatGPT API를 사용하여 AI를 사용한 스피킹 연습이 가능하도록 만들었는데 AVFoundation의 사진 기능과 영상 기능이 아닌 보이스 기능도 담당하는 것을 알았으며 이를 활용해서 AI에게 서버가 들어오면 이를 읽어주는 기능을 만들 수 있었습니다.
      번역기 역시 기존 파파고 번역기를 사용하지 못해서 깃허브에 번역기 API를 수동으로 서버로 켜서 작업을 진행했습니다. 현재 프로젝트는 번역기 API를 배포하지 못해 앱스토어에 배포는 하지 못하였지만 제가 영어 공부를 하면서 실제 단어 암기장으로 사용하고 있습니다!`);
      return (
        <>
          <Top>
            <GIcon icon={"JAGIJUDO"} width={"100px"} />
            <Txt typography={"H0"}>
              자기주도 <Txt typography={"P1"}>2024.07.09~2024.07.17</Txt>
            </Txt>
          </Top>
          <Tags>{["Swift", "CoreData", "ChatGPT"].map((v) => DefaultTag[v as keyOfDefaultTag])}</Tags>
    
          <URLBox>
          <URLItem
              icon={"JAGIJUDO"}
              text={"시각 및 청각 장애인용 통합 학습 플랫폼"}
            >
              <Txt>한줄 요약</Txt>
          </URLItem>
            <URLItem
              icon={"Github"}
              url={"https://github.com/jjunhaa0211/JAGIJUDO"}
            >
              <Txt>Github (Project)</Txt>
            </URLItem>
          </URLBox>
    
          <Lefter>
            <Img
              url={"banner/JagijudoBanner.webp"}
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
                url={"JAGIJUDO/J1.png"}
                width={"80%"}
                border={"0"}
                align={"center"}
              />
              <Img
                url={"JAGIJUDO/J2.png"}
                width={"80%"}
                border={"0"}
                align={"flex-end"}
              />
              <Img
                url={"JAGIJUDO/J3.png"}
                width={"80%"}
                border={"0"}
                align={"center"}
              />
              <Img
                url={"JAGIJUDO/J4.png"}
                width={"80%"}
                border={"0"}
                align={"center"}
              />
              <Img
                url={"JAGIJUDO/J5.png"}
                width={"80%"}
                border={"0"}
                align={"center"}
              />
            </div>
            <div style={{ display: "flex", width: "120%", marginTop: "10px" }}>
              <Img
                url={"JAGIJUDO/J6.png"}
                width={"80%"}
                border={"0"}
                align={"center"}
              />
              <Img
                url={"JAGIJUDO/J7.png"}
                width={"80%"}
                border={"0"}
                align={"flex-end"}
              />
              <Img
                url={"JAGIJUDO/J8.png"}
                width={"80%"}
                border={"0"}
                align={"center"}
              />
              <Img
                url={"JAGIJUDO/J9.png"}
                width={"80%"}
                border={"0"}
                align={"center"}
              />
              <Img
                url={"JAGIJUDO/J10.png"}
                width={"80%"}
                border={"0"}
                align={"center"}
              />
            </div>
    
          <div style={{ display: "flex", width: "120%", marginTop: "10px" }}>
            <Img
              url={"JAGIJUDO/J11.png"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
            <Img
              url={"JAGIJUDO/J12.png"}
              width={"80%"}
              border={"0"}
              align={"flex-end"}
            />
            <Img
              url={"JAGIJUDO/J13.png"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
            <Img
              url={"JAGIJUDO/J14.png"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
            <Img
              url={"JAGIJUDO/J15.png"}
              width={"80%"}
              border={"0"}
              align={"center"}
            />
          </div>
          </Details>

          <Details>
          <summary>보이스오버 화면</summary>
          <video
                src={Video1}
                controls
                style={{ width: "20%", objectFit: "cover" }}
            ></video>
                      <video
                src={Video2}
                controls
                style={{ width: "20%", objectFit: "cover" }}
            ></video>
          </Details>
    
          {Result2}
        </>
      );
    };    
  
  export default JAGIJUDO;
  