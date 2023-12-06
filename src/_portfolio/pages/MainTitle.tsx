import styled from "styled-components";
import { Txt } from "../../components/Txt";
import { useMediaQuery } from "react-responsive";

const MainTitle = () => {
    const media = useMediaQuery({ query: "(min-width: 768px)" });

    return <Box>
        <Header>
            <HeaderInner>
                <Txt typography={"H3"}>Mooner510</Txt>
            </HeaderInner>
            {media && <>
                <Txt typography={"P2"}>Home</Txt>
                <Txt typography={"P2"}>About</Txt>
                <Txt typography={"P2"}>Project</Txt>
                <Txt typography={"P2"}>Contact</Txt>
            </>}
        </Header>
        <Body>
            <p style={{ fontSize: "32px" }}>
                <Txt typography={"H0Weak"}>당신에게</Txt> <Txt
                typography={"H0"}
                nativeColor={"linear-gradient(91deg, #FF81F2 21.62%, #AD9FFF 62.56%)"}></Txt>
                <Txt typography={"H0Weak"}>을 만드는</Txt>
            </p>
            <p>
                <Txt typography={"H0"}
                     nativeColor={"linear-gradient(89deg, #B5FF93 0.12%, #FDFF9E 39.43%)"}>문성화</Txt><Txt
                typography={"H0Weak"}>입니다</Txt>
            </p>
        </Body>
    </Box>;
};

const TextBox = styled.div`
  display: flex;
`

const Body = styled.div`
  display: flex;
  height: 500px;
  padding: 150px 200px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  align-self: stretch;

  @media (max-width: 1000px) {
    padding: 100px 30px;
  }
`

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
`

const Header = styled.div`
  width: calc(100vw - 320px);
  height: 60px;
  display: flex;
  padding: 20px 160px;
  justify-content: center;
  align-items: flex-end;
  gap: 60px;

  @media (max-width: 768px) {
    width: calc(100vw - 160px);
    padding: 20px 80px;
  }
`

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default MainTitle;