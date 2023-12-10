import { Colors, keyOfColors } from "../../styles/color";
import Tag, { keyOfDefaultTag, TagProps } from "../../components/Tag";
import styled from "styled-components";
import { keyOfIcons } from "../../styles/icons";
import { GIcon } from "../../components/GIcon";
import { Txt } from "../../components/Txt";
import { useMediaQuery } from "react-responsive";
import { motions } from "../framer/motions";
import { useState } from "react";
import { animate, useAnimate, useAnimation } from "framer-motion";
import { Background, DisplayDiv } from "./layout/projectLayout";

const Project = (props: { icon: keyOfIcons, name: string, date: string, tags: keyOfDefaultTag[], description: string }) => {
    const media = useMediaQuery({ query: "(min-width: 768px)" });
    const anim = useAnimation()
    const [show, setShow] = useState<boolean>(false);

    return <TopBox show={{ backgroundColor: Colors.Black1 }} hide={{ backgroundColor: Colors.Black0 }} animate={anim}>
        <Box
            y={35}
            onMouseOver={() => {
                setShow(true)
                anim.start("show");
            }}
            $show={show}>
            <GIcon icon={props.icon} width={media ? "120px" : "80px"} height={media ? "120px" : "80px"} css={{ borderRadius: "12px" }}/>
            <DetailBox>
                <TitleBox>
                    <Txt typography={"H3"}>{props.name}</Txt>
                    <Txt typography={"P1"}>{props.date}</Txt>
                </TitleBox>
                <TagBox>
                    {props.tags}
                </TagBox>
            </DetailBox>
        </Box>
        <DisplayDiv $display={show}>
            <Background
                animate={anim}
                show={{ opacity: 1 }}
                hide={{ opacity: 0 }}
                onMouseOver={() => {
                    anim.start("hide");
                    setTimeout(() => {
                        setShow(false)
                    }, 300);
                }}
            />
            <SubTitle
                $down={false}
                animate={anim}
                show={{ opacity: 1, translateY: "0px" }}
                hide={{ opacity: 0, translateY: "-15px" }}>
                <div style={{ height: "5px" }}/>
                <Txt typography={"P1"} center>(클릭하여 자세히 보기)</Txt>
            </SubTitle>
            <SubTitle
                $down={true}
                animate={anim}
                show={{ opacity: 1, translateY: "0px" }}
                hide={{ opacity: 0, translateY: "15px" }}>
                <Txt center>{props.description}</Txt>
                <div style={{ height: "5px" }}/>
            </SubTitle>
        </DisplayDiv>
    </TopBox>;
};

const TopBox = styled(motions.keyDiv)`
  width: 570px;
  height: 220px;
  cursor: pointer;
  background-color: ${Colors.Black0};
  transition: all 0.3s;
  border-radius: 20px;

  * {
    cursor: pointer !important;
  }

  @media (max-width: 768px) {
    width: 430px;
  }
`

const SubTitle = styled(motions.keyDiv)<{ $down: boolean }>`
  z-index: 20;
  width: 500px;
  height: 220px;
  position: absolute;
  padding: 0 35px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: ${props => props.$down ? "flex-end" : "flex-start"};

  @media (max-width: 768px) {
    width: 400px;
    padding: 0 15px;
  }
`

const TagBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  align-self: stretch;
`

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`

const DetailBox = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;
`

const Box = styled(motions.fadeDiv)<{ $show: boolean }>`
  position: ${props => props.$show ? "absolute" : "unset"};
  z-index: 20;
  display: flex;
  width: 500px;
  height: 220px;
  padding: 0 35px;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border-radius: 20px;
  border-right: 3px solid ${Colors.White5};
  border-left: 3px solid ${Colors.White5};
  cursor: pointer;

  //* {
  //  cursor: pointer !important;
  //}

  @media (max-width: 768px) {
    width: 400px;
    padding: 0 15px;
  }
`

export default Project;