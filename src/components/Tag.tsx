import styled from "styled-components";
import { Txt } from "./Txt";
import { keyOfColors } from "../styles/color";

export interface TagProps {
    name: string,
    backgroundColor: string,
    textColor: keyOfColors
}

const Tag = (props: TagProps) => {
    return <Box color={props.backgroundColor}>
        <Txt typography={"P1"} color={props.textColor}>{props.name}</Txt>
    </Box>;
};

export const DefaultTag = {
    unity: <Tag name={"Unity"} backgroundColor={"#767676"} textColor={"White0"}/>,
    springBoot: <Tag name={"SpringBoot"} backgroundColor={"#77bc1f"} textColor={"Black0"}/>,
    android: <Tag name={"Android"} backgroundColor={"#319d46"} textColor={"White0"}/>,
    react: <Tag name={"React.js"} backgroundColor={"#61dafb"} textColor={"Black0"}/>,
    spigot: <Tag name={"Spigot"} backgroundColor={"#b4842c"} textColor={"White0"}/>,
    csharp: <Tag name={"C#"} backgroundColor={"#0A9910"} textColor={"White0"}/>,
    java: <Tag name={"Java"} backgroundColor={"#CA7010"} textColor={"White0"}/>,
    kotlin: <Tag name={"Kotlin"} backgroundColor={"#A930E7"} textColor={"White0"}/>,
    html: <Tag name={"HTML/CSS"} backgroundColor={"#E75212"} textColor={"White0"}/>,
    javaScript: <Tag name={"JavaScript"} backgroundColor={"#F4DC1C"} textColor={"Black0"}/>,
    typeScript: <Tag name={"TypeScript"} backgroundColor={"#55A5FF"} textColor={"Black0"}/>,
}

const Box = styled.div<{ color: string }>`
  display: flex;
  padding: 3px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 43px;
  background: ${props => props.color};
`
export default Tag;