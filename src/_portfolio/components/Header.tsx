import { Txt } from "../../components/Txt";
import styled from "styled-components";
import { motions } from "../framer/motions";
import { useMediaQuery } from "react-responsive";
import { Link, NavigateFunction, NavLink, Outlet, useNavigate, useNavigation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { getSitemap } from "../../routes/sitemap";

export const toMain = (nav: NavigateFunction) => {
    const priv = localStorage.getItem("prev")
    if (priv && priv === "/") nav(-1);
    else nav("/");
}

const Header = () => {
    const media = useMediaQuery({ query: "(min-width: 768px)" });
    const nav = useNavigate();

    // const title = document.querySelector("head > title");
    // const fav = document.querySelector("head > link");
    // if (title && fav) {
    //     title.innerHTML = t('title');
    //     fav.setAttribute("href", _icon(_types[props.type].icon));
    // }

    useEffect(() => {
        localStorage.setItem("prev", localStorage.getItem("cur") ?? "");
        localStorage.setItem("cur", location.pathname);
    }, [location.pathname]);

    return <>
        <Helmet>
            <title>{getSitemap(location.pathname).title}</title>
            <link rel="icon" href={getSitemap(location.pathname).image}/>
            <meta name="title" content={getSitemap(location.pathname).title}/>
            <meta name="description" content={getSitemap(location.pathname).description}/>
            <meta property="og:title" content={getSitemap(location.pathname).title}/>
            <meta property="og:title" content={getSitemap(location.pathname).title}/>
            <meta property="og:image" content={getSitemap(location.pathname).image}/>
            <meta property="og:url" content={getSitemap(location.pathname).url}/>
            <meta property="og:description" content={getSitemap(location.pathname).description}/>
        </Helmet>
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
                     clickable $break={"normal"}>Mooner510</Txt>
            </HeaderInner>
            {media && <>
                <Txt typography={"P1"} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                     clickable $break={"normal"}>Home</Txt>
                <Txt typography={"P1"} onClick={() => document.getElementById("about")?.scrollIntoView({ block: "center", behavior: 'smooth' })}
                     clickable $break={"normal"}>About</Txt>
                <Txt typography={"P1"} onClick={() => document.getElementById("project")?.scrollIntoView({ block: "center", behavior: 'smooth' })}
                     clickable $break={"normal"}>Project</Txt>
                <Txt typography={"P1"} onClick={() => document.getElementById("about")?.scrollIntoView({ block: "center", behavior: 'smooth' })}
                     $break={"normal"} clickable>Contact</Txt>
            </>}
        </Box>
        <Background>
            <Outlet/>
        </Background>
    </>
}

const Background = styled.div`
  width: 100vw;
  height: 100%;
  background: linear-gradient(180deg, #000 0%, #160023 35.42%, #070417 60.42%, #000C1F 83.74%, #000 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  padding: 20px 200px;
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