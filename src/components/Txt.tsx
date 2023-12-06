import { CSSProperties, HTMLAttributes } from 'react';
import { FontStyles, keyOfFontStyles } from "../styles/font";
import { Colors, keyOfColors } from "../styles/color";
import styled from "styled-components";
import { Animations } from "../styles/animations";

interface Props extends HTMLAttributes<HTMLSpanElement> {
    typography?: keyOfFontStyles;
    style?: CSSProperties;
    color?: keyOfColors;
    nativeColor?: string;
    width?: string;
    height?: string;
    anim?: boolean;
    clickable?: boolean;
    center?: boolean;
    right?: boolean;
    left?: boolean;
}

export const Txt = (
    {
        typography = 'P2',
        color = 'White0',
        nativeColor,
        style,
        width,
        height,
        center,
        right,
        left,
        anim,
        clickable,
        ...props
    }: Props) => {
    return (
        nativeColor ?
            <TextNativeSpan
                style={{
                    color: Colors[color],
                    width: width,
                    height: height,
                    textAlign: center ? 'center' : right ? 'right' : left ? 'left' : 'unset',
                    cursor: clickable ? "pointer" : "default",
                    ...FontStyles[typography],
                    ...style,
                }}
                $background={nativeColor}
                anim={anim}
                {...props}
            /> :
            <TextSpan
                style={{
                    color: Colors[color],
                    width: width,
                    height: height,
                    textAlign: center ? 'center' : right ? 'right' : left ? 'left' : 'unset',
                    cursor: clickable ? "pointer" : "default",
                    ...FontStyles[typography],
                    ...style,
                }}
                anim={anim}
                {...props}
            />
    );
};

const TextSpan = styled.span<{ anim?: boolean }>`
  margin: 0;
  padding: 0;
  line-height: 1.2;
  opacity: ${props => props.anim ? 0 : 1};
  animation: ${props => props.anim ? "1s cubic-bezier(0.22, 1, 0.36, 1) ${Animations.showAnim(\"-6px\")} forwards" : undefined};
`

const TextNativeSpan = styled.span<{ anim?: boolean, $background: string }>`
  margin: 0;
  padding: 0;
  line-height: 1.2;
  opacity: ${props => props.anim ? 0 : 1};
  background: ${props => props.$background};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${props => props.anim ? "1s cubic-bezier(0.22, 1, 0.36, 1) ${Animations.showAnim(\"-6px\")} forwards" : undefined};
`