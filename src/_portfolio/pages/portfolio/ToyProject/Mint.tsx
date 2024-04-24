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

const Mint = () => {
  const { Result } = useMoonerDown(`### 개요
    해커톤 주제로 안전 문제를 선택한 것은 사회적 지원과 안전한 생활 환경의 부재가 악화될 수 있는 사회 문제에 대한 대비책을 모색하기 위해서였습니다. 이와 더불어, 사회적 성향을 가진 문제를 해결하는 데도 도움이 될 것으로 판단했습니다.
    특히, 코로나 시대를 거치면서 정신 건강 문제가 악화되었음을 고려하여, 청년 및 노인들의 우울증과 같은 정신 질환에 대한 지원이 필요하다고 판단했습니다. 이러한 배경으로, 사회적 측면과 복지적 측면에서 중요성을 가지는 앱을 개발하게 되었습니다.
    
    ### 구현 기능
    - collectionView를 사용한 커스텀 토글
    - UILable 부분 컬러 넣기
    - stackView와 scrollview를 사용해서 구현
    - 버튼 클릭시 인스타 스토리 자동 업로드 구현
    - 자가진단 기능 구현
    `);

  const { Result: Result2 } = useMoonerDown(`
  ### 회고
  해당 프로젝트는 해커톤에서 디자이너 2명과 함께 진행한 것으로, 불과 2일이라는 짧은 시간 안에 **복잡한 사용자 인터페이스(UI)**를 개발하는 것을 목표로 삼았습니다. 이 과정에서 저는 특히 CollectionView에 대한 이해도를 심화시키는 데 중점을 두었습니다. 복잡한 UI 요소를 효과적으로 구현하기 위해서는 UICollectionViewFlowLayout의 커스터마이징에 대한 깊은 이해가 필수적이라는 점을 깨달을 수 있었습니다.
  이번 프로젝트를 통해 StackView와 ScrollView를 사용하여 **화면 내 스크롤을 구현하는 방법**에 대해서도 새로운 인사이트를 얻었습니다. StackView를 활용하여 레이아웃을 구성함으로써 **코드의 양을 줄이고**, 더욱 효율적으로 화면을 구성할 수 있었습니다. 특히, StackView를 사용할 때 화면이 깨지지 않도록 세심한 주의를 기울여야 했으며, 이 과정에서 다양한 레이아웃 이슈를 해결하는 능력을 키울 수 있었습니다.
  CollectionView에 관해서는, 기본적인 사용법을 넘어서 많은 커스텀 구현을 시도해보았습니다. 이를 통해 UICollectionViewFlowLayout을 비롯한 다양한 CollectionView 관련 기술에 대해 깊이 있게 이해할 수 있었고, 이는 제 UI 개발 능력을 한 단계 끌어올리는 계기가 되었습니다.`);
  return (
    <>
      <Top>
        <GIcon icon={"Mint"} width={"100px"} />
        <Txt typography={"H0"}>
          Mint <Txt typography={"P1"}>2023.06.16~2023.11.09</Txt>
        </Txt>
      </Top>
      <Tags>{["Swift"].map((v) => DefaultTag[v as keyOfDefaultTag])}</Tags>

      <URLBox>
      <URLItem
          icon={"Mint"}
          text={"코로나 시기로 마음이 힘든 사람들을 위한 자가진단 서비스 (해커톤)"}
        >
          <Txt>한줄 요약</Txt>
      </URLItem>
        <URLItem
          icon={"Github"}
          url={"https://github.com/jjunhaa0211/XCameraKit"}
        >
          <Txt>Github (Project)</Txt>
        </URLItem>
      </URLBox>

      <Lefter>
        <Img
          url={"banner/MintBanner.webp"}
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
            url={"Mint/mint1.webp"}
            width={"80%"}
            border={"0"}
            align={"center"}
          />
          <Img
            url={"Mint/mint2.webp"}
            width={"80%"}
            border={"0"}
            align={"flex-end"}
          />
          <Img
            url={"Mint/mint3.webp"}
            width={"80%"}
            border={"0"}
            align={"center"}
          />
          <Img
            url={"Mint/mint4.webp"}
            width={"80%"}
            border={"0"}
            align={"center"}
          />
          <Img
            url={"Mint/mint8.webp"}
            width={"80%"}
            border={"0"}
            align={"center"}
          />
        </div>
        <div style={{ display: "flex", width: "120%", marginTop: "10px" }}>
          <Img
            url={"Mint/mint5.webp"}
            width={"80%"}
            border={"0"}
            align={"center"}
          />
          <Img
            url={"Mint/mint6.webp"}
            width={"80%"}
            border={"0"}
            align={"flex-end"}
          />
          <Img
            url={"Mint/mint7.webp"}
            width={"80%"}
            border={"0"}
            align={"center"}
          />
          <Img
            url={"Mint/mint9.webp"}
            width={"80%"}
            border={"0"}
            align={"center"}
          />
          <Img
            url={"Mint/mint10.webp"}
            width={"80%"}
            border={"0"}
            align={"center"}
          />
        </div>

      <div style={{ display: "flex", width: "120%", marginTop: "10px" }}>
        <Img
          url={"Mint/mint11.webp"}
          width={"80%"}
          border={"0"}
          align={"center"}
        />
        <Img
          url={"Mint/mint12.webp"}
          width={"80%"}
          border={"0"}
          align={"flex-end"}
        />
        <Img
          url={"Mint/mint13.webp"}
          width={"80%"}
          border={"0"}
          align={"center"}
        />
        <Img
          url={"Mint/mint16.webp"}
          width={"80%"}
          border={"0"}
          align={"center"}
        />
        <Img
          url={"Mint/mint14.webp"}
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

export default Mint;
