import { GBody } from "../../components/layout/globalLayouts";
import { Txt } from "../../components/Txt";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header, { toMain } from "../components/Header";

const ProjectPage = () => {
    const nav = useNavigate();
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return <Big>
        <Box>
            <Txt onClick={() => toMain(nav)} clickable>&lt; 돌아가기</Txt>
            <br/>
            <Outlet/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Txt onClick={() => toMain(nav)} clickable>&lt; 돌아가기</Txt>
        </Box>
    </Big>
}

const Big = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const Box = styled.div`
  display: flex;
  max-width: 1000px;
  width: 70%;
  padding: 150px 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;

  @media (max-width: 768px) {
    width: 85%;
  }
`

export default ProjectPage;