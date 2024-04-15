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
import useMoonerDown from "../../../../utils/editor/hook/useMoonerDown";

const AVSlider = () => {
  const { Result } = useMoonerDown(`### 개요
    AVSlider는 애플의 디자인을 차용한 커스텀 UISlider를 개발하였으나, 기존 UISlider의 여러 제약 때문에 UIControl과 UIGestureRecognizerDelegate를 활용하여 새롭게 제작하였습니다.
    ### 개발 배경
    저는 음악 앱을 개발하고 있었고, 기존의 UISlider로는 제가 원하는 **커스터마이징이 제한적인 것을 발견**했습니다. 
    예를 들어서, Thumb을 숨기는 기능을 사용하려면 슬라이더가 음악을 끝까지 이동하지 않는 문제 등, 다양한 제약이 있었습니다. 또한, 사용자가 슬라이더를 클릭 했을 때 슬라이더가 확대되었다가 손을 떼면 원래 크기로 돌아가는 애플 스타일의 디자인을 구현하고 싶었습니다.
    이러한 배경에서, 기존의 UISlider를 사용받지 않고, 애플이 제공하는 UIControl을 기반으로 새로운 Slider 만들고자 했습니다.
    이 과정을 통해 제가 개발한 라이브러리를 다른 개발자가 사용하기를 바라며, 짧은 기간 동안 AVSlider를 개발하게 되었습니다.`);

  const { Result: Result2 } = useMoonerDown(`## 초기화
    \`AVSlider\`를 초기화하기
    \`\`\`swift
    let slider = AVSlider(frame: CGRect(x: 0, y: 0, width: 330, height: 12))
    \`\`\`
    이 코드는 너비가 330 포인트이고 높이가 12 포인트인 \`AVSlider\`를 생성합니다. 이후 필요에 따라 frame을 조정할 수 있습니다.
    
    ### 설정
    #### 배경색 설정
    \`AVSlider\`의 배경색을 설정할 수 있습니다.:
    \`\`\`swift
    slider.backgroundColor = UIColor.lightGray
    \`\`\`
    
    #### 프로그레스 바 색상 설정
    \`AVSlider\`의 프로그레스 바 색상을 설정합니다.:
    \`\`\`swift
    slider.tintColor = UIColor.red
    \`\`\`
    
    #### 이벤트 처리
    \`AVSlider\`의 값을 변경하는 경우를 처리하려면 \`valueChanged\` 이벤트를 감지합니다:
    \`\`\`swift
    slider.addTarget(self, action: #selector(sliderValueChanged(_:)), for: .valueChanged)
    
    @objc func sliderValueChanged(_ slider: AVSlider) {
        // 값 변경 시 처리할 작업 수행
    }
    \`\`\`
    
    ### 사용자 정의 설정
    #### 트래킹 모드 설정
    \`AVSlider\`의 트래킹 모드를 설정합니다. 가능한 옵션은 \`.offset\` 및 \`.absolute\`입니다:
    \`\`\`swift
    slider.trackingMode = .absolute
    \`\`\`
    
    ### 확장 모드 설정
    \`AVSlider\`의 확장 모드를 설정합니다. 가능한 옵션은 \`.onTouch\` 및 \`.onDrag\`입니다:
    \`\`\`swift
    slider.expansionMode = .onDrag
    \`\`\`
    
    ### 라벨 위치 추가
    \`AVSlider\`의 라벨 위치를 설정합니다. \`top\`과 \`bottom\`이 있습니다.
    \`\`\`swift
    slider.setValueLabelPosition(.top)
    \`\`\`
    
    ### expansionMode의 관하여
    \`AVSlider\`에서는 \`onTouch\`와 \`onDrag\`를 제공합니다.
    \`onTouch\`는 터치를 해서 Slider를 제어할 수 있고 \`onDrag\`는 무조건 드레그를 해서만 사용할 수 있습니다.
    \`\`\`swift
    $0.expansionMode = .onDrag
    \`\`\``);

    const {Result: Result3} = useMoonerDown(``)
  return (
    <>
      <Top>
        <GIcon icon={"AVSlider"} width={"100px"} />
        <Txt typography={"H0"}>
          AVSlider <Txt typography={"P1"}>2024.04.01~</Txt>
        </Txt>
      </Top>
      <Tags>{["Swift"].map((v) => DefaultTag[v as keyOfDefaultTag])}</Tags>

      <URLBox>
        <URLItem icon={"Github"} url={"https://github.com/AVFNS/AVSlider"}>
          <Txt>Github</Txt>
        </URLItem>
      </URLBox>

      <video
        src="https://github.com/AVFNS/AVSlider/assets/102890390/ace7900a-d8bc-4ff7-962a-ab0d019f356c"
        width={300}
        controls
      ></video>

      {Result}

      <Details>
        <summary>사용방법</summary>
        <div style={{ display: "flex", width: "120%", marginTop: "10px" }}>
          {Result2}
        </div>
      </Details>
    </>
  );
};

export default AVSlider;
