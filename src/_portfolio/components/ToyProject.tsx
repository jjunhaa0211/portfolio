import { Colors } from "../../styles/color";
import { DefaultTag, keyOfDefaultTag, TagBox } from "../../components/Tag";
import styled from "styled-components";
import { keyOfIcons } from "../../styles/icons";
import { GIcon } from "../../components/GIcon";
import { Txt } from "../../components/Txt";
import { useMediaQuery } from "react-responsive";
import { motions } from "../framer/motions";
import { useState } from "react";
import { useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ToyProject = (props: {
  icon: keyOfIcons;
  name: string;
  date: string;
  tags: keyOfDefaultTag[];
  description: string;
  link: string;
}) => {
  const media = useMediaQuery({ query: "(min-width: 768px)" });
  const anim = useAnimation();
  const nav = useNavigate();
  const [show, setShow] = useState<boolean>(false);

  return (
    <TopBox
      show={{ backgroundColor: "#00000066" }}
      hide={{ backgroundColor: "#00000000" }}
      animate={anim}
    >
      <Box
        y={35}
        onClick={() => {
          nav(props.link);
        }}
        className="kfc"
      >
        <GIcon
          icon={props.icon}
          width={media ? "120px" : "60px"}
          height={media ? "120px" : "60px"}
          css={{ borderRadius: "12px" }}
        />
        <DetailBox className="gun">
          <TitleBox>
            <Txt typography={media ? "H5" : "H7"}>{props.name}</Txt>
            <Txt typography={media ? "P1" : "P0"}>{props.date}</Txt>
          </TitleBox>
          <TagBox>{props.tags.map((v) => DefaultTag[v])}</TagBox>
          {!media && (
            <Txt typography={media ? "P2" : "P1"}>{props.description}</Txt>
          )}
        </DetailBox>
      </Box>
      {media && (
        <DisplayDiv $display={show}>
          <Background
            delay={0}
            animate={anim}
            show={{ opacity: 1 }}
            hide={{ opacity: 0 }}
            onMouseOver={() => {
              if (!media) return;
              anim.start("hide");
              setTimeout(() => {
                setShow(false);
              }, 300);
            }}
          />
          <SubTitle
            delay={0}
            $down={false}
            animate={anim}
            show={{ opacity: 1, translateY: "0px" }}
            hide={{ opacity: 0, translateY: "-15px" }}
          >
            <div style={{ height: "5px" }} />
            <Txt typography={"P1"} center>
              (클릭하여 자세히 보기)
            </Txt>
          </SubTitle>
          <SubTitle
            delay={0}
            $down={true}
            animate={anim}
            show={{ opacity: 1, translateY: "0px" }}
            hide={{ opacity: 0, translateY: "15px" }}
          >
            <Txt center>{props.description}</Txt>
            <div style={{ height: "5px" }} />
          </SubTitle>
        </DisplayDiv>
      )}
    </TopBox>
  );
};

const Background = styled(motions.keyDiv)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DisplayDiv = styled.div<{ $display: boolean }>`
  display: ${(props) => (props.$display ? "block" : "none")};
`;

const TopBox = styled(motions.keyDiv)`
  width: 100%;
  cursor: pointer;
  border-radius: 24px;
  transition: 0.3s;
  * {
    cursor: pointer !important;
  }

  &:hover {
    transform: scale(1.02) translateY(-8px);
    box-shadow: 0 8px 24px 0 rgba(152, 180, 220, 0.4);
  }

  @media (max-width: 768px) {
    width: calc(100vw - 25px);
    height: auto;
  }
`;

const SubTitle = styled(motions.keyDiv)<{ $down: boolean }>`
  z-index: 20;
  width: 300px;
  height: 220px;
  position: absolute;
  padding: 0 35px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: ${(props) => (props.$down ? "flex-end" : "flex-start")};
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`;

const DetailBox = styled.div`
  display: flex;
  padding: 0px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;
`;

const Box = styled(motions.fadeDiv)<{ $show: boolean }>`
  display: flex;
  width: 280px;
  /* height: 220px; */
  padding: 0 35px;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border-radius: 24px;
  background-color: rgb(20, 20, 20);
  cursor: pointer;

  @media (max-width: 768px) {
    width: calc(100% - 30px);
    height: calc(100% - 30px);
    padding: 10px;
  }
`;

export default ToyProject;
