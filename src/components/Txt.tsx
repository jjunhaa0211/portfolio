import { CSSProperties, HTMLAttributes } from 'react';
import { FontStyles, keyOfFontStyles } from "../styles/font";
import { Colors, keyOfColors } from "../styles/color";
import styled from "styled-components";
import { Animations } from "../styles/animations";

interface Props extends HTMLAttributes<HTMLSpanElement> {
    typography?: keyOfFontStyles;
    style?: CSSProperties;
    color?: keyOfColors;
    width?: string;
    height?: string;
    anim?: boolean;
    clickable?: boolean;
    center?: boolean;
}

export const Txt = ({ typography = 'P2', color = 'White0', style, width, height, center, anim, clickable, ...props }: Props) => {
    return (
        anim ?
            <TextSpan
                style={{
                    color: Colors[color],
                    width: width,
                    height: height,
                    textAlign: center ? 'center' : 'unset',
                    cursor: clickable ? "pointer" : "default",
                    ...FontStyles[typography],
                    ...style,
                }}
                {...props}
            /> :
            <span
                style={{
                    margin: 0,
                    padding: 0,
                    color: Colors[color],
                    lineHeight: 1.6,
                    width: width,
                    height: height,
                    textAlign: center ? 'center' : 'unset',
                    cursor: clickable ? "pointer" : "default",
                    ...FontStyles[typography],
                    ...style,
                }}
                {...props}
            />
    );
};

const TextSpan = styled.span`
  margin: 0;
  padding: 0;
  line-height: 1.6;
  opacity: 0;
  animation: 1s cubic-bezier(0.22, 1, 0.36, 1) ${Animations.showAnim("-6px")} forwards;
`