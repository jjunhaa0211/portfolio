import styled from "styled-components";
import { Colors } from "../styles/color";
import { ChangeEvent, forwardRef, InputHTMLAttributes } from "react";
import { clamp } from "../utils/utils";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    width?: string;
    height?: string;
    center?: boolean;
    min?: number;
    max?: number;
    allowFloat?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const GInput = forwardRef<HTMLInputElement, Props>(({
                                                               width = "100%",
                                                               height = "30px",
                                                               center,
                                                               onChange,
                                                               ...props
                                                           }: Props, ref) => {
    return (
        <Input
            ref={ref}
            type={'text'}
            width={width}
            height={height}
            onChange={event => {
                if (event.currentTarget.value.replace(/[0-9]+/gi, "").length > 0) {
                    event.currentTarget.value = event.currentTarget.value.replace(/[^0-9]+/gi, "");
                } else if (event.currentTarget.value.length !== 0) {
                    event.currentTarget.value = `${clamp(+event.currentTarget.value, props.min ? props.min : 0, props.max ? props.max : 9999)}`;
                }
                if (onChange) onChange(event);
            }}
            {...props}
        />
    )
})

const Input = styled.input<{ width: string, height: string }>`
  margin: 0;
  border: none;
  background: none;
  font-family: "KoreanCheck", sans-serif;
  font-size: 14px;
  width: ${props => props.width};
  height: ${props => props.height};
  color: ${Colors.White0};
  text-align: center;
  background: ${Colors.Black3};
  border-radius: 5px;
  outline: none;

  &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
`