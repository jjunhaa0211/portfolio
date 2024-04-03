import styled, { keyframes } from "styled-components";
import { Txt } from "../../components/Txt";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import useIrl from "../hooks/useIrl";
import { _icon } from "../../utils/utils";
import { useNavigate } from "react-router-dom";

const MainTitle = () => {
  const navigate = useNavigate();
  const media = useMediaQuery({ query: "(min-width: 768px)" });
  const { irl } = useIrl();

  return (
    <>
      <Box>
        <Text>언제나 품질과 구조를 최우선하는</Text>
        <PointTxt>박준하 입니다.</PointTxt>
        <Container>
          <Light />
          <Item delay={0.4}>
            <img
              src={_icon("Today")}
              width={85}
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
            />
          </Item>
          <Item w={240} h={240} delay={0.2}>
            <img
              src={_icon("SM")}
              width={150}
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
            />
          </Item>
          <Item w={320} h={320}>
            <img
              src={_icon("마음가짐")}
              width={240}
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
            />
          </Item>
          <Item w={240} h={240} delay={0.2}>
            <img
              src={_icon("LookMonster")}
              width={150}
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
            />
          </Item>
          <Item delay={0.4}>
            <img
              src={_icon("Shalo")}
              width={85}
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
            />
          </Item>
        </Container>
      </Box>
    </>
  );
};

const size = keyframes`
  0%{
    width: 24px;
    height: 24px;
    bottom: -40px;
    padding: 0;
    background: rgb(40, 40, 40);
  }
  70% {
    width: 24px;
    height: 24px;
    bottom: 50%;
    padding: 0;
    background: rgb(23, 23, 23);
  }
  100% {
    width: calc(100% - 80px - 240px);
    height: calc(100dvh - 140px - 240px);
    bottom: 40px;
    background:rgb(12, 12, 12);
  }
`;
const txt = keyframes`
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  20% {
    opacity: 1;
    transform: translateY(0);
  }
  90% {
    color: white;
  }
  100% {
    color: rgb(137, 139, 142);
  }
`;
const textShine = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;
const up = keyframes`
  0% {
    transform: translateY(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;
const Item = styled(motion.div)<{ w?: number; h?: number; delay?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, rgb(18, 18, 18), rgb(24, 24, 24));
  width: ${(props) => props.w || 120}px;
  height: ${(props) => props.h || 120}px;
  animation: ${up} 0.6s forwards;
  animation-delay: ${(props) => `${4 + (props.delay || 0)}`}s;
  color: white;
  border-radius: 16%;
  font-size: 24px;
  opacity: 0;
  z-index: 5;

  &:hover {
    transform: scale(1.02) translateY(-8px);
    box-shadow: 0 8px 24px 0 rgba(152, 180, 220, 0.4);
  }
`;
const PointTxt = styled.p`
  background: linear-gradient(
    to right,
    #5f53cd 20%,
    #00affa 30%,
    #0190cd 70%,
    #4a60da 80%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 500% auto;
  animation: ${textShine} 4s ease-in-out infinite alternate, ${up} 0.6s forwards;
  opacity: 0;
  animation-delay: 3.4s;
  font-size: 120px;
  position: absolute;
  top: 280px;
  z-index: 10;
  font-weight: 900;
`;
const Text = styled.p`
  font-family: Pretendard, Protendard;
  font-weight: 600;
  animation: 4s ${txt} forwards;
  font-size: 32px;
  top: 200px;
  color: white;
  position: absolute;
  z-index: 10;
`;
const Light = styled.div`
  position: absolute;
  bottom: -360px;
  width: 100%;
  height: 1000px;
  background: radial-gradient(ellipse, rgb(62, 69, 79), transparent 70%);
  animation: ${up} 1s forwards;
  animation-delay: 4.2s;
  opacity: 0;
`;
const Container = styled.div`
  position: absolute;
  background: rgb(23, 23, 23);
  animation: 3s ${size} forwards;
  animation-delay: 1s;
  border-radius: 24px;
  overflow: hidden;
  bottom: -1000px;
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 16px;
  padding: 120px;
`;
const Box = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MainTitle;
