import { Txt } from "../../components/Txt";
import { GIcon } from "../../components/GIcon";
import { DefaultTag, TagBox } from "../../components/Tag";
import TimeFrame from "./TimeFrame";
import { GBody } from "../../components/layout/globalLayouts";
import styled from "styled-components";
import { motion } from "framer-motion";
import { motions } from "../framer/motions";
import useIrl from "../hooks/useIrl";
import { useMediaQuery } from "react-responsive";
import { URLBox, URLItem } from "./layout/projectLayout";

const Contact = () => {
    const media = useMediaQuery({ query: "(min-width: 768px)" });
    const irl = useIrl();

    return <GBody>
        <a id={"contact"}><Txt typography={"H0"}>Contact</Txt></a>

        <URLBox $width={media ? "50%" : "80%"}>
            <URLItem icon={"Github"} url={"https://github.com/Mooner510"}>
                <Txt>Github</Txt>
            </URLItem>
            <URLItem icon={"Discord"} text={"mooner510"}>
                <Txt>Discord</Txt>
            </URLItem>
            <URLItem icon={"Email"} url={"mailto:mooner510@gmail.com"}>
                <Txt>Email</Txt>
            </URLItem>
        </URLBox>
    </GBody>;
};

const Right = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const TimeIdx = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`

const TagDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  align-self: stretch;
`

const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`

const ProfileInner = styled(motions.fadeDiv)`
  display: flex;
  padding: 24px 0;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`

const ProfileDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`

export default Contact;