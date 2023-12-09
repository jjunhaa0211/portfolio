import { GBody } from "../../components/layout/globalLayouts";
import { Txt } from "../../components/Txt";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header, { toMain } from "../components/Header";

const ProjectPage = () => {
    const nav = useNavigate();
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return <>
        <Box>
            <Txt onClick={() => toMain(nav)} clickable>&lt; 돌아가기</Txt>
            <Outlet/>
        </Box>
    </>
}

const Box = styled.div`
  display: flex;
  padding: 150px 450px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
`

export default ProjectPage;