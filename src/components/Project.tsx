import { Colors, keyOfColors } from "../styles/color";
import Tag, { TagProps } from "./Tag";
import styled from "styled-components";
import { keyOfIcons } from "../styles/icons";
import { GIcon } from "./GIcon";
import { Txt } from "./Txt";

const Project = (props: { icon: keyOfIcons, name: string, date: string, tags: JSX.Element[], description: string }) => {
    return <Box>
        <GIcon icon={props.icon} width={"180px"} height={"180px"} css={{ borderRadius: "12px" }}/>
        <DetailBox>
            <TitleBox>
                <Txt typography={"H3"}>{props.name}</Txt>
                <Txt typography={"P1"}>{props.date}</Txt>
            </TitleBox>
            <TagBox>
                {props.tags.map(value => value)}
            </TagBox>
            <Txt width={"100%"} height={"80px"}>{props.description}</Txt>
        </DetailBox>
    </Box>;
};

const TagBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  align-self: stretch;
`

const TitleBox = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
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

const Box = styled.div`
  display: flex;
  width: 660px;
  height: 220px;
  padding: 0 35px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  border-right: 3px solid ${Colors.White5};
  border-left: 3px solid ${Colors.White5};
`

export default Project;