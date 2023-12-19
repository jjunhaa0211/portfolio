import { Txt } from "../../components/Txt";
import styled from "styled-components";
import { motions } from "../framer/motions";
import { useMediaQuery } from "react-responsive";
import { NavigateFunction, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { getSitemap } from "../../routes/sitemap";
import useIrl from "../hooks/useIrl";

export const toMain = (nav: NavigateFunction, key: string) => {
    const priv = localStorage.getItem("prev")
    if (priv && priv === `/${key}`) nav(-1);
    else nav(`/${key}`);
}

const Header = () => {
    const { key } = useIrl();
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

    const siteMap = getSitemap(location.pathname);

    return <>
        <Helmet>
            <title>{siteMap.title}</title>
            <link rel="icon" href={siteMap.image}/>
            <meta name="title" content={siteMap.title}/>
            <meta name="description" content={siteMap.description}/>
            <meta property="og:title" content={siteMap.title}/>
            <meta property="og:image" content={siteMap.image}/>
            <meta property="og:url" content={siteMap.url}/>
            <meta property="og:description" content={siteMap.description}/>
            <meta property="twitter:title" content={siteMap.title}/>
            <meta property="twitter:image" content={siteMap.image}/>
            <meta name="twitter:description" content={siteMap.description}/>
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
                     onClick={() => toMain(nav, key)}
                     clickable $break={"normal"}>Mooner510</Txt>
            </HeaderInner>
            {location.pathname === `/${key}` && <>
                <Txt typography={media ? "P1" : "P0"} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                     clickable $break={"normal"}>Home</Txt>
                <Txt typography={media ? "P1" : "P0"} onClick={() => {
                    document.getElementById("about")?.scrollIntoView({ block: "center", behavior: 'smooth' })
                }}
                     clickable $break={"normal"}>About</Txt>
                <Txt typography={media ? "P1" : "P0"} onClick={() => {
                    document.getElementById("project")?.scrollIntoView({ block: "center", behavior: 'smooth' })
                }}
                     clickable $break={"normal"}>Project</Txt>
                <Txt typography={media ? "P1" : "P0"} onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({ block: "center", behavior: 'smooth' })
                }}
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

  @media (min-width: 768px) and (max-width: 1000px) {
    width: calc(100vw - 120px);
    padding: 20px 60px;
    gap: 50px;
  }

  @media (max-width: 768px) {
    width: calc(100vw - 60px);
    padding: 20px 30px;
    gap: 30px;
  }
`

export default Header;