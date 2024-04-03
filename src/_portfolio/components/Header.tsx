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
  const priv = localStorage.getItem("prev");
  if (priv && priv === `/${key}`) nav(-1);
  else nav(`/${key}`);
};

const Header = () => {
  const { key } = useIrl();
  const media = useMediaQuery({ query: "(min-width: 768px)" });
  const nav = useNavigate();

  useEffect(() => {
    localStorage.setItem("prev", localStorage.getItem("cur") ?? "");
    localStorage.setItem("cur", location.pathname);
  }, [location.pathname]);

  const siteMap = getSitemap(location.pathname);

  return (
    <>
      <Helmet>
        <title>{siteMap.title}</title>
        <link rel="icon" href={siteMap.image} />
        <meta name="title" content={siteMap.title} />
        <meta name="description" content={siteMap.description} />
        <meta property="og:title" content={siteMap.title} />
        <meta property="og:image" content={siteMap.image} />
        <meta property="og:url" content={siteMap.url} />
        <meta property="og:description" content={siteMap.description} />
        <meta property="twitter:title" content={siteMap.title} />
        <meta property="twitter:image" content={siteMap.image} />
        <meta name="twitter:description" content={siteMap.description} />
      </Helmet>
      <Box
        initial={{
          translateY: "-50px",
        }}
        animate={{
          translateY: "0px",
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <HeaderInner>
          <Txt typography={"H4"} onClick={() => toMain(nav, key)} clickable>
            jjunhaa0211
          </Txt>
        </HeaderInner>
        {media && location.pathname === `/${key}` && (
          <>
            <Txt
              typography={media ? "P1" : "P0"}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              clickable
            >
              Home
            </Txt>
            <Txt
              typography={media ? "P1" : "P0"}
              onClick={() => {
                  const projectElement = document.getElementById("about");
                  if (projectElement) {
                    const elementRect = projectElement.getBoundingClientRect();
                    const absoluteElementTop =
                      elementRect.top + window.pageYOffset;
                    const middlePoint =
                      absoluteElementTop - window.innerHeight / 2;
                    window.scrollTo({
                      top: middlePoint + 400,
                      behavior: "smooth",
                    });
                  }
              }}
              clickable
            >
              About
            </Txt>
            <Txt
              typography={media ? "P1" : "P0"}
              onClick={() => {
                const projectElement = document.getElementById("project");
                if (projectElement) {
                  const elementRect = projectElement.getBoundingClientRect();
                  const absoluteElementTop =
                    elementRect.top + window.pageYOffset;
                  const middlePoint =
                    absoluteElementTop - window.innerHeight / 2;
                  window.scrollTo({
                    top: middlePoint + 500,
                    behavior: "smooth",
                  });
                }
              }}
              clickable
            >
              Project
            </Txt>
            <Txt
              typography={media ? "P1" : "P0"}
              onClick={() => {
                const projectElement = document.getElementById("Library");
                if (projectElement) {
                  const elementRect = projectElement.getBoundingClientRect();
                  const absoluteElementTop =
                    elementRect.top + window.pageYOffset;
                  const middlePoint =
                    absoluteElementTop - window.innerHeight / 2;
                  window.scrollTo({
                    top: middlePoint + 500,
                    behavior: "smooth",
                  });
                }
              }}
              clickable
            >
              Library
            </Txt>
            <Txt
              typography={media ? "P1" : "P0"}
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ block: "center", behavior: "smooth" });
              }}
              clickable
            >
              Contact
            </Txt>
          </>
        )}
      </Box>
      <Background>
        <Outlet />
      </Background>
    </>
  );
};

const Background = styled.div`
  width: 100vw;
  height: 100%;
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
`;

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
  backdrop-filter: blur(24px);
  background: rgba(0,0,0,0.8);

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
`;

export default Header;
