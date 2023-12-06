import styled from "styled-components";
import { Colors } from "../styles/color";
import { Txt } from "./Txt";

interface ButtonProps {
    text: string,
    onClick: () => void
}

const Button = ({ text, onClick }: ButtonProps) => {
    return (
        <Btn onClick={() => onClick()}>
            <Txt typography={"P2"} onClick={() => onClick()} clickable>{text}</Txt>
        </Btn>
    );
};

const Btn = styled.button`
  border: none;
  cursor: pointer;
  background-color: ${Colors.Black5};
  color: ${Colors.White0};
  padding: 2px 10px;
  border-radius: 5px;
`

export default Button;