import styled from "styled-components";
import { Txt } from "../../components/Txt";

const MainTitle = () => {
    return <Box>
        <Header>
            <HeaderInner>
                <Txt typography={"H3"}>Mooner510</Txt>
            </HeaderInner>
            <Txt typography={"P3"}>Home</Txt>
            <Txt typography={"P3"}>About</Txt>
            <Txt typography={"P3"}>Project</Txt>
            <Txt typography={"P3"}>Contact</Txt>
        </Header>
    </Box>;
};

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`

const Header = styled.div`
  display: flex;
  padding: 20px 160px;
  justify-content: center;
  align-items: flex-end;
  gap: 60px;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
`

export default MainTitle;