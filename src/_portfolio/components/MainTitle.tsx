import styled from "styled-components";
import { Txt } from "../../components/Txt";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import useIrl from "../hooks/useIrl";

const MainTitle = () => {
  const media = useMediaQuery({ query: "(min-width: 768px)" });
  const { irl } = useIrl();

  return (
    <>
      <Box>
        <Body
          variants={{
            hidden: { opacity: 0 },
            visible: (i = 1) => ({
              opacity: 1,
              transition: {
                staggerChildren: 0.8,
                delayChildren: 0.5 * (i - 1),
              },
            }),
          }}
          initial={"hidden"}
          animate={"visible"}
        >
          <motion.div
            style={{
              display: "flex",
              fontSize: "32px",
              flexDirection: media ? "row" : "column",
            }}
            variants={{
              hidden: {
                opacity: 0,
                x: 20,
                transition: {
                  type: "spring",
                  damping: 12,
                  stiffness: 100,
                },
              },
              visible: {
                x: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  damping: 12,
                  stiffness: 100,
                },
              },
            }}
          >
            <Txt typography={media ? "H0Weak" : "H2Weak"}>당신에게</Txt>
            {media ? "\u00a0" : ""}
            <div>
              <Txt
                typography={media ? "H0" : "H2"}
                nativeColor={
                  "linear-gradient(91deg, #FF81F2 21.62%, #AD9FFF 62.56%)"
                }
                breakWord
              >
                가치있는 게임
              </Txt>
              <Txt typography={media ? "H0Weak" : "H2Weak"}>을</Txt>
              {"\u00a0"}
              <Txt typography={media ? "H0Weak" : "H2Weak"}>만드는</Txt>
            </div>
          </motion.div>
          <motion.p
            variants={{
              hidden: {
                opacity: 0,
                x: 20,
                transition: {
                  type: "spring",
                  damping: 12,
                  stiffness: 100,
                },
              },
              visible: {
                x: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  damping: 12,
                  stiffness: 100,
                },
              },
            }}
          >
            <Txt
              typography={media ? "H0" : "H2"}
              nativeColor={
                "linear-gradient(89deg, #B5FF93 0.12%, #FDFF9E 39.43%)"
              }
            >
              {irl.name}
            </Txt>
            <Txt typography={media ? "H0Weak" : "H2Weak"}>입니다</Txt>
          </motion.p>
        </Body>
      </Box>
    </>
  );
};

const Body = styled(motion.div)`
  display: flex;
  height: 500px;
  padding: 150px 200px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  align-self: stretch;

  @media (max-width: 768px) {
    padding: 100px 30px;
  }

  @media (min-width: 768px) and (max-width: 1000px) {
    padding: 120px 60px;
  }
`;

const Box = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MainTitle;
