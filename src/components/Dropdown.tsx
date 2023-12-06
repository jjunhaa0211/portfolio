import styled from "styled-components";
import { Colors } from "../styles/color";
import { useState } from "react";
import { Txt } from "./Txt";
import { useTranslation } from "react-i18next";

interface DropdownProps {
    content: string[];
    selected: string;
    setFunc: (selected: string) => void;
}

const Dropdown = ({ content, selected, setFunc }: DropdownProps) => {

    const { t: option } = useTranslation("option");

    const [click, setClick] = useState<boolean>(false);
    const height = content.length * 30;
    const clickContent = (selected: string) => {
        setFunc(selected);
        setClick(false);
    };
    return (
        <Container>
            <DropBox height={click ? height : 30}>
                <Content onClick={() => setClick((v) => !v)} selected>
                    <Txt typography={"P2"} clickable>
                        {option(selected)}
                    </Txt>
                    <Icon $click={click}></Icon>
                </Content>
                {click &&
                    content
                        .filter((v) => v !== selected)
                        .map((v, i) => (
                            <Content key={i} onClick={() => clickContent(v)}>
                                <Txt typography={"P2"}>{option(v)}</Txt>
                            </Content>
                        ))}
            </DropBox>
        </Container>
    );
};

export default Dropdown;

const Icon = styled.div<{ $click: boolean }>`
  width: 8px;
  height: 8px;
  transition: 0.2s;
  transform: ${(props) => (props.$click ? "rotate(180deg)" : "rotate(0)")};
`;
const Container = styled.div`
  position: relative;
  height: 30px;
  width: 200px;
  transition: 0.1s;
`;
const Content = styled.div<{ selected?: boolean }>`
  width: calc(100% - 20px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.805px 10px;
  border-radius: 5px;
  transition: 0.1s;
  background-color: ${(props) => (props.selected ? Colors.Black4 : "none")};
`;
const DropBox = styled.div<{ height: number }>`
  width: 200px;
  height: ${(props) => props.height}px;
  border-radius: 5px;
  background-color: ${Colors.Black5};
  display: flex;
  flex-direction: column;
  justify-content: start;
  cursor: pointer;
  transition: 0.3s;
  position: absolute;
  overflow-y: hidden;
`;
