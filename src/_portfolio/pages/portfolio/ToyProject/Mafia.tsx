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
  Details,
} from "../../../components/layout/projectLayout";
import { GIcon } from "../../../../components/GIcon";
import { Txt } from "../../../../components/Txt";
import { DefaultTag, keyOfDefaultTag } from "../../../../components/Tag";
import useMoonerDown from "../../../../utils/editor/hook/useMoonerDown";

const Mafia = () => {
  const { Result } = useMoonerDown(`### 개요
    소켓 통신의 이론을 공부하고 프로젝트에 적용하고자 했습니다. 처음에는 간단한 메시지 앱 개발을 생각했지만, 더 소켓 기능을 활용하고 싶었기에 제가 평소에 하던 게임 중 하나인 마피아 게임을 만들기로 결정했습니다. 그렇게 마피아 게임 개발에 시작하게되었습니다.
    
    ### 구현 기능
    - 소켓 IO를 사용해서 메세지 기능을 구현했습니다.
    - 게임 시작시 플레이어에게 직업을 부여하는 기능을 구현했습니다.
    - 밤이 되었을 때 마피아와 의사, 경찰이 스킬을 쓸 수 있도록 구현했습니다.
    - 투표 시간이 되었을 때 투표를 많이 받은 플레이어가 최후의 변론을 하고 플레이어를 살릴지 투표를 진행합니다.
    - 시간을 단축 또는 시간을 연장하는 기능을 구현했습니다.
    - 부분적인 단어들의 뜻을 볼 수 있도록 구현했습니다.

    ### 문제 상황과 해결점
      ###### 메세지 자가 반사 문제
      \`문제 상황\`
      메세지를 입력하고 전송했는데, 이 메세지가 다른 사용자에게만 보여야 하지만 저에게도 보여서 같은 문장이 두 번씩 나타나는 문제가 발생했습니다.
      \`해결 방법\`
      💡 항상 자기가 사용하는 사용 계정을 -1, 진행자가 0, 다른 사용자들이 index 순으로 명시를 해주었습니다. 이를 사용해서 사용자가 -1일 경우 numberIndex가 -1일 경우에는 onChat을 통해서 사용자의 메세지를 노란색으로 표기하고 다른 사용자에게만 보이도록 구현했습니다.`);

  const { Result: Result2 } = useMoonerDown(`
  ### 회고
  소켓 통신을 직접 구현해본 경험이 매우 유익했습니다.
  소켓을 통해 데이터를 수신하는 과정이 한번의 연결로 별도의 요청 없이도 지속적으로 연결되어 있는 점이 흥미로웠습니다. 또한, 사용자 간 메시지를 처리하면서 메시지 생성 과정이 재미있었습니다. 특정 시간에 스킬을 사용하거나 **투표를 할 수 있는 기능**을 구현하면서 소켓 통신에 대한 이해도가 더욱 높아졌습니다.
  사전에 Socket.IO에 대해 이론을 공부했을 때는 감이 잘 잡히지 않았지만, 실제 토이 프로젝트를 통해 진행하면서 **한층 더 성장**할 수 있었습니다.`);

  return (
    <>
      <Top>
        <GIcon icon={"Mafia"} width={"100px"} />
        <Txt typography={"H0"}>
          밤이 되었습니다!? <Txt typography={"P1"}>2024.04.16~2024.04.18</Txt>
        </Txt>
      </Top>
      <Tags>{["Swift"].map((v) => DefaultTag[v as keyOfDefaultTag])}</Tags>

      <URLBox>
        <URLItem icon={"Github"} url={"https://github.com/jjunhaa0211/임시"}>
          <Txt>Github (Project)</Txt>
        </URLItem>
      </URLBox>

      <Lefter>
        <Img
          url={"banner/MafiaBanner.webp"}
          width={"100%"}
          border={"0"}
          align={"center"}
        />
      </Lefter>

      {Result}
      {Result2}
    </>
  );
};

export default Mafia;
