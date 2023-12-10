import styled from "styled-components";
import { Txt } from "./Txt";
import { keyOfColors } from "../styles/color";
import { useMediaQuery } from "react-responsive";

export interface TagProps {
    name: string,
    backgroundColor: string,
    textColor: keyOfColors
}

const Tag = (props: TagProps) => {
    const media = useMediaQuery({ query: "(min-width: 768px)" });

    return <Box color={props.backgroundColor}>
        <Txt typography={media ? "P1" : "P0"} color={props.textColor}>{props.name}</Txt>
    </Box>;
};

export const DefaultTag = {
    unity: <Tag key={"Unity"} name={"Unity"} backgroundColor={"#767676"} textColor={"White0"}/>,
    springBoot: <Tag key={"SpringBoot"} name={"SpringBoot"} backgroundColor={"#77bc1f"} textColor={"Black0"}/>,
    android: <Tag key={"Android"} name={"Android"} backgroundColor={"#319d46"} textColor={"White0"}/>,
    react: <Tag key={"React"} name={"React.js"} backgroundColor={"#61dafb"} textColor={"Black0"}/>,
    spigot: <Tag key={"Spigot"} name={"Spigot"} backgroundColor={"#b4842c"} textColor={"White0"}/>,
    csharp: <Tag key={"C#"} name={"C#"} backgroundColor={"#0A9910"} textColor={"White0"}/>,
    java: <Tag key={"Java"} name={"Java"} backgroundColor={"#CA7010"} textColor={"White0"}/>,
    kotlin: <Tag key={"Kotlin"} name={"Kotlin"} backgroundColor={"#A930E7"} textColor={"White0"}/>,
    html: <Tag key={"HTML"} name={"HTML/CSS"} backgroundColor={"#E75212"} textColor={"White0"}/>,
    javaScript: <Tag key={"TypeScript"} name={"JavaScript"} backgroundColor={"#F4DC1C"} textColor={"Black0"}/>,
    typeScript: <Tag key={"JavaScript"} name={"TypeScript"} backgroundColor={"#55A5FF"} textColor={"White0"}/>,
    sql: <Tag key={"SQL"} name={"SQL"} backgroundColor={"#767676"} textColor={"White0"}/>,
    sqlite: <Tag key={"SQLite"} name={"SQLite"} backgroundColor={"#5799fd"} textColor={"White0"}/>,
}

export type keyOfDefaultTag = keyof typeof DefaultTag;

export const TagBox = styled.div<{ $align?: string }>`
  width: 100%;
  display: flex;
  justify-content: ${props => props.$align ?? "flex-start"};
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
`

const Box = styled.div<{ color: string }>`
  display: flex;
  padding: 3px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 43px;
  background: ${props => props.color};

  @media (max-width: 768px) {
    padding: 2px 8px;
  }
`
export default Tag;