import { Txt } from "../../components/Txt";
import styled from "styled-components";
import { motions } from "../framer/motions";
import { useMediaQuery } from "react-responsive";
import { NavigateFunction, NavLink, Outlet, useNavigate, useNavigation } from "react-router-dom";
import { useEffect, useState } from "react";

export const toMain = (nav: NavigateFunction) => {
    const priv = localStorage.getItem("prev")
    if (priv && priv === "/") nav(-1);
    else nav("/");
}

const Header = () => {
    const media = useMediaQuery({ query: "(min-width: 768px)" });
    const nav = useNavigate();

    useEffect(() => {
        localStorage.setItem("prev", localStorage.getItem("cur") ?? "");
        localStorage.setItem("cur", location.pathname);
        console.log("head");
    }, [])

    return <>
        <Box
            initial={{
                translateY: "-50px"
            }}
            animate={{
                translateY: "0px"
            }}
            transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1]
            }}
        >
            <HeaderInner>
                <Txt typography={"H4"}
                     onClick={() => toMain(nav)}
                     clickable>Mooner510</Txt>
            </HeaderInner>
            {media && <>
                <Txt typography={"P1"}>Home</Txt>
                <Txt typography={"P1"}>About</Txt>
                <Txt typography={"P1"}>Project</Txt>
                <Txt typography={"P1"}>Contact</Txt>
            </>}
        </Box>
        <Background>
            <Outlet/>
        </Background>
    </>
}

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #000 0%, #160023 35.42%, #070417 60.42%, #000C1F 83.74%, #000 100%);
`

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
`

const Box = styled(motions.fadeDiv)`
  position: fixed;
  z-index: 100;
  width: calc(100vw - 320px);
  height: 50px;
  display: flex;
  padding: 20px 160px;
  justify-content: center;
  align-items: flex-end;
  gap: 60px;
  backdrop-filter: blur(6px);

  @media (max-width: 768px) {
    width: calc(100vw - 160px);
    padding: 20px 80px;
  }
`

export default Header;