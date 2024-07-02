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

const NFCProject = () => {
  const { Result } = useMoonerDown(`### 개요
    최근 사회적으로 큰 이슈가 되고 있는 NFC 리더기를 사용한 소액 결제 절도 사건을 계기로, NFC 인식기를 만들어보고자 했습니다. 본 프로젝트는 NFC 기술을 활용하여 사용자의 **NFC를 정보를 보여주는 앱**을 만드는 것을 목표로 하고 있습니다.
    
    ### 구현 기능
    - NFC 리더기 기능 구현
    - 다중 NFC 저장 기능 구현
    - NFC 형식 처리 구현`);

  const { Result: Result2 } = useMoonerDown(`
  ### 앱 실행 화면`);

  const { Result: Result3 } = useMoonerDown(`
  ### 회고
  \`CoreNFC\`를 사용해서 NFC를 구현해보았습니다. \`NearField Communication TagReading\`를 capability에 추가하고 NFCManager를 추가하여 NFC 관련 메소드들을 공부해보는 계기가 되었습니다. \`startLookingForTag\`를 사용해서 NFC를 읽고 받은 \`NFCNDEFMessage\` 메소드를 처리해주는 작업을 통해서 사용자에게 보다 자세한 NFC 메세지를 전달하는 작업을 했습니다. 그리고 \`NFCNDEFPayload\`를 extension 하여 사용자에게 보다 자세한 NFC 형식을 텍스트화 했습니다. NFC를 사용해서 이벤트를 처리해보는 작업을 하면서 \`CoreNFC\`를 공부해보고 이해대한 이해도가 높아질 수 있었습니다. 추후에 NFC를 통한 결제 시스템을 구축해보겠다는 목표가 생겼습니다!`);

  return (
    <>
      <Top>
        <GIcon icon={"NFC"} width={"100px"} />
        <Txt typography={"H0"}>
          삑-학생입니다~ <Txt typography={"P1"}>2023.06.16~2023.11.09</Txt>
        </Txt>
      </Top>
      <Tags>{["Swift", "CoreNFC"].map((v) => DefaultTag[v as keyOfDefaultTag])}</Tags>

      <URLBox>
      <URLItem
          icon={"NFC"}
          text={"NFC 기술을 이용한 NFC 리더기 개발 프로젝트"}
        >
          <Txt>한줄 요약</Txt>
      </URLItem>
        <URLItem
          icon={"Github"}
          url={"https://github.com/jjunhaa0211/NFC-Swift"}
        >
          <Txt>Github (Project)</Txt>
        </URLItem>
      </URLBox>

      <Lefter>
        <Img
          url={"banner/NFCBanner.webp"}
          width={"100%"}
          border={"0"}
          align={"center"}
        />
      </Lefter>

      {Result}
      {Result2}
      <Lefter>
        <Img
          url={"NFC/NFC1.webp"}
          width={"80%"}
          border={"0"}
          align={"center"}
        />
        <Img
          url={"NFC/NFC2.webp"}
          width={"80%"}
          border={"0"}
          align={"center"}
        />
        <Img
          url={"NFC/NFC3.webp"}
          width={"80%"}
          border={"0"}
          align={"center"}
        />
        <Img
          url={"NFC/NFC4.webp"}
          width={"80%"}
          border={"0"}
          align={"center"}
        />
        <Img
          url={"NFC/NFC5.webp"}
          width={"80%"}
          border={"0"}
          align={"center"}
        />
        <Img
          url={"NFC/NFC6.webp"}
          width={"80%"}
          border={"0"}
          align={"center"}
        />
      </Lefter>

      {Result3}
    </>
  );
};

export default NFCProject;
