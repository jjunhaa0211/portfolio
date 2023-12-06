import styled from "styled-components";
import { Colors } from "../styles/color";

const Line = (props: { horizontal?: boolean, vertical?: boolean, flex?: boolean }) => {
    return (
        <>
            {props.flex ? props.vertical && !props.horizontal ? <FlexBox width={"1px"} height={""}/> :
                <FlexBox width={""} height={"1px"}/> : props.vertical && !props.horizontal ?
                <Box width={"1px"} height={"100%"}/> : <Box width={"100%"} height={"1px"}/>}
        </>
    )
}

const Box = styled.div<{ width: string, height: string }>`
  width: ${props => props.width};
  height: ${props => props.height};
  align-self: stretch;
  background: ${Colors.Black5};
`

const FlexBox = styled.div<{ width: string, height: string }>`
  width: ${props => props.width};
  height: ${props => props.height};
  align-self: stretch;
  background: ${Colors.Black5};
  display: flex;
`

export default Line;