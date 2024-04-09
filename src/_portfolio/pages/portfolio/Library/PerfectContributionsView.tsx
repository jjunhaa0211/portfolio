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

const PerfectContributionsView = () => {
  const { Result } = useMoonerDown(`### 개요
  개발 과정에서 **깃허브 기여도를 시각적으로 표현하는 기능**이 있었습니다. 위 기능을 만들기 위해서 UIView를 사용하여 반복문을 돌리는 과정에서 각 기여도의 색상을 다르게 표현하는 것이 어려웠고, 이러한 어려움은 다른 개발자들도 겪고 있을 것이라고 생각하여 만들게 되었습니다.
  
  ### 개발 이슈
  ##### 도형을 어떻게 그려야 할까?
  \`문제 상황\`
  Swift를 사용하여 사각형, 원, 삼각형 등 **다양한 도형을 그리는 방법에 대해 고민**해보았습니다. 하지만 UIView를 도형으로 사용할 경우 비율이 바뀌면 도형도 변형되는 문제가 발생했습니다. 또한 **여러 형태의 도형을 만드는 데 한계**를 느꼈습니다.
  이로 인해 화면에 정확하고 유연한 도형을 그리는 것이 어려워졌습니다.
  \`해결 방법\`
  💡 이 문제를 해결하기 위해** UIBezierPath 클래스를 활용**했습니다. 
  UIBezierPath는 수학적 계산을 통해 원하는 도형을 정확하게 그릴 수 있는 도구입니다. 예를 들어, \`addLine(to:)\`, \`addArc(withCenter:radius:startAngle:endAngle:clockwise:)\`와 같은 메서드를 사용하여 도형의 경로를 설정하고 그렸습니다. 이러한 방식으로 도형의 비율에 상관없이 정확한 모양을 유지할 수 있었습니다.
  이 과정에서 수학적 지식이 필요했습니다. 때문의 고등학교 수학 선생님에게 조언을 얻어서 삼각형과 다각형 같은 복잡한 도형의 경우에는 각도와 변의 길이를 계산할 수 있었습니다.
  
  ##### 도형의 개수를 어떻게 받아야할까?
  \`문제 상황\`
  이를 해결하기 위해서는 PContributionsView 클래스에 새로운 초기화 메서드를 추가할 수 있습니다. 예를 들어, 사용자로부터 행(row)과 열(column)의 개수를 받아서 도형 그리드를 생성하는 메서드를 추가할 수 있습니다.
  \`해결 방법\`
  사용자로부터 **행과 열의 개수에 대한 정보를 입력받아 이차원 배열**을 구성했습니다. 이 배열은 도형 그리드 생성에 필요한 기본 데이터로 활용하게 되는데요 각 요소는 특정 도형의 위치와 크기를 결정짓는데 사용되며 사용자의 입력에 따라 동적으로 도형 그리드를 구성하게 하면서 위 이슈를 해결했습니다.`);

  const { Result: Result1 } = useMoonerDown(`### 📚 회고
  처음으로 라이브러리를 **CocoaPods, SPM, 카르타고를 통해 배포**해 보며 다양한 플랫폼을 배포해보는 경험을 가졌으며 라이브러리 공개 후 몇몇 사용자와 소통하며 큰 뿌듯함을 느꼈고, 특히 한 사용자가 저의 라이브러리로 첫 앱을 만들었다는 사실에 기쁨을 느꼈습니다. 
  개발 과정에서 복잡 뷰 구현을 위한 수학적 지식의 중요성을 깨달았으며 본래 애니메이션도 지원하려고 하였지만 수학적 코드의 한계로 코드가 보기 어려워져서 추후에 개발할 예정입니다.
  마지막으로 위 경험은 앞으로의 개발 커뮤니티의 소통과 버전 관리의 능력 향상을 통한 지속적인 개발 능력 향상에 큰 성장을 이룰 수 있도록 했습니다!`);
  return (
    <>
      <Top>
        <GIcon icon={"PerfectContributionsView"} width={"100px"} />
        <Txt typography={"H0"}>
          PerfectContributionsView <Txt typography={"P1"}>2022.06.11~</Txt>
        </Txt>
      </Top>
      <Tags>{["Swift"].map((v) => DefaultTag[v as keyOfDefaultTag])}</Tags>

      <URLBox>
        <URLItem
          icon={"Github"}
          url={"https://github.com/jjunhaa0211/PerfectContributionsView"}
        >
          <Txt>Github (Project)</Txt>
        </URLItem>
      </URLBox>

      <Lefter>
        <Img
          url={"banner/PCViewBanner.webp"}
          width={"100%"}
          border={"0"}
          align={"center"}
        />
      </Lefter>
      {/* <Good>
        <H3>개요</H3>
        <P>
          개발 과정에서 깃허브 기여도를 시각적으로 표현하는 기능이 있었습니다.
          위 기능을 만들기 위해서 UIView를 사용하여 반복문을 돌리는 과정에서 각
          기여도의 색상을 다르게 표현하는 것이 어려웠고, 이러한 어려움은 다른
          개발자들도 겪고 있을 것이라고 생각하여 만들게 되었습니다.
        </P>
        <H3>개발 이슈</H3>
        <H5>도형을 어떻게 그려야 할까?</H5>
        <br />
        <Block_2> 문제 상황 </Block_2>
        <P>
          Swift를 사용하여 사각형, 원, 삼각형 등 다양한 도형을 그리는 방법에
          대해 고민해보았습니다. 하지만 UIView를 도형으로 사용할 경우 비율이
          바뀌면 도형도 변형되는 문제가 발생했습니다. 또한 여러 형태의 도형을
          만드는 데 한계를 느꼈습니다. 이로 인해 화면에 정확하고 유연한 도형을
          그리는 것이 어려워졌습니다.
        </P>
        <br />
        <Block_2> 해결 방법 </Block_2>
        <P>
          💡 이 문제를 해결하기 위해 UIBezierPath 클래스를 활용했습니다.
          UIBezierPath는 수학적 계산을 통해 원하는 도형을 정확하게 그릴 수 있는
          도구입니다. 예를 들어, `addLine(to:)`,
          `addArc(withCenter:radius:startAngle:endAngle:clockwise:)`와 같은
          메서드를 사용하여 도형의 경로를 설정하고 그렸습니다. 이러한 방식으로
          도형의 비율에 상관없이 정확한 모양을 유지할 수 있었습니다.
        </P>
        <P>
          이 과정에서 수학적 지식이 필요했습니다. 때문의 고등학교 수학
          선생님에게 조언을 얻어서 삼각형과 다각형 같은 복잡한 도형의 경우에는
          각도와 변의 길이를 계산할 수 있었습니다.
        </P>
        <br />

        <H5>도형의 개수를 어떻게 받아야할까?</H5>
        <br />
        <Block_2> 문제 상황 </Block_2>
        <P>
          이를 해결하기 위해서는 PContributionsView 클래스에 새로운 초기화
          메서드를 추가할 수 있습니다. 예를 들어, 사용자로부터 행(row)과
          열(column)의 개수를 받아서 도형 그리드를 생성하는 메서드를 추가할 수
          있습니다.
        </P>
        <br />
        <Block_2> 해결 방법 </Block_2>
        <P>
          사용자로부터 행과 열의 개수에 대한 정보를 입력받아 이차원 배열을
          구성했습니다. 이 배열은 도형 그리드 생성에 필요한 기본 데이터로
          활용하게 되는데요 각 요소는 특정 도형의 위치와 크기를 결정짓는데
          사용되며 사용자의 입력에 따라 동적으로 도형 그리드를 구성하게 하면서
          위 이슈를 해결했습니다.
        </P> */}
      {Result}

      <Details>
        <summary>도형 그리는 코드</summary>
        <div style={{ display: "flex", width: "100%" }}>
          <SyntaxHighlighter
            language="swift"
            style={atomOneDark}
            customStyle={{ padding: "40px", borderRadius: "16px" }}
          >
            {`public func createGrid(with data: [[Int]], shapeType: ShapeType = .rectangle) {
        
        let rectHeightCount = data.count
        let rectWidthCount = data.max(by: { $0.count < $1.count })!.count

        let width: Float = Float(self.bounds.width)
        let height: Float = Float(self.bounds.height)
                
        var rectWidth: Float = 10 // Default Value
        
        if rectWidthCount > 0 {

            let rectWidthVal = (width - (margin * 2) - (spacing * Float(rectWidthCount - 1))) / Float(rectWidthCount)

            let rectHeightVal = (height - (margin * 2) - (spacing * Float(rectHeightCount - 1))) / Float(rectHeightCount)

            if rectWidthVal > rectHeightVal {
                rectWidth = rectHeightVal
            } else {
                rectWidth = rectWidthVal
            }
        }

        var yCoord: Float = 0
        for i in data {
            var xCoord: Float = 0
            for x in i {
                drawShape(x: CGPoint(x: CGFloat(xCoord + margin), y: CGFloat(yCoord + margin)),
                          y: CGPoint(x: CGFloat(xCoord + margin + rectWidth), y: CGFloat(yCoord + margin + rectWidth)),
                          color: x,
                          shapeType: shapeType)
                xCoord = xCoord + rectWidth + spacing
            }
            yCoord = yCoord + rectWidth + spacing
        }
    }`}
          </SyntaxHighlighter>
        </div>
      </Details>
      <br />
      {Result1}
    </>
  );
};

export default PerfectContributionsView;

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
