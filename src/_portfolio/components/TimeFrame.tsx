import styled from "styled-components";
import { GIcon } from "../../components/GIcon";
import { Txt } from "../../components/Txt";
import { keyOfColors } from "../../styles/color";
import { useMediaQuery } from "react-responsive";
import { motions } from "../framer/motions";

const TimeFrame = (props: { date: string, text: string, highlight?: keyOfColors, out?: boolean }) => {
    const media = useMediaQuery({ query: "(max-width: 768px)" });

    return <Box y={15}>
        <Left>
            {!props.out && <>
                <Txt typography={media ? "P0" : "P1"} right>{props.date}</Txt>
                <Txt typography={media ? "P0" : "P3"} color={props.highlight ? props.highlight : "White0"} right>{props.text}</Txt>
            </>}
        </Left>
        <GIcon icon={"Indexer"} width={"24px"} height={"60px"}/>
        <Right>
            {props.out && <>
                <Txt typography={media ? "P0" : "P1"}>{props.date}</Txt>
                <Txt typography={media ? "P0" : "P3"} color={props.highlight ? props.highlight : "White0"}>{props.text}</Txt>
            </>}
        </Right>
    </Box>;
};

const Left = styled.div`
  display: flex;
  height: 38px;
  padding: 0 15px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  flex: 1 0 0;

  @media (max-width: 768px) {
    padding: 0;
  }
`

const Right = styled.div`
  display: flex;
  height: 38px;
  padding: 0 15px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1 0 0;

  @media (max-width: 768px) {
    padding: 0 5px;
  }
`

const Box = styled(motions.fadeDiv)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`

export default TimeFrame;