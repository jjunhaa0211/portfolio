import { CSSProperties, HTMLAttributes } from 'react';
import { FontStyles, keyOfFontStyles } from "../styles/font";
import { Colors, keyOfColors } from "../styles/color";
import styled from "styled-components";
import { Animations } from "../styles/animations";
import { motion, MotionProps } from "framer-motion";

type Props = HTMLAttributes<HTMLSpanElement> & MotionProps & {
    typography?: keyOfFontStyles;
    style?: CSSProperties;
    color?: keyOfColors;
    nativeColor?: string;
    width?: string;
    height?: string;
    margin?: string;
    anim?: boolean;
    clickable?: boolean;
    center?: boolean;
    right?: boolean;
    left?: boolean;
    justify?: boolean;
    $lineheight?: string;
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
        margin,
        right,
        left,
        anim,
        justify,
        clickable,
        $lineheight,
        ...props
    }: Props) => {
    const innerStyle: CSSProperties = {
        color: Colors[color],
        width: width,
        height: height,
        textAlign: justify ? 'justify' : center ? 'center' : right ? 'right' : left ? 'left' : 'unset',
        cursor: clickable ? "pointer" : "default",
        margin: margin ?? "0",
        ...FontStyles[typography],
        ...style,
    };

    return (
        nativeColor ? <TextNativeSpan style={innerStyle} $background={nativeColor} $lineheight={$lineheight} anim={anim} {...props}/> :
            <TextSpan style={innerStyle} $lineheight={$lineheight} anim={anim} {...props}/>
    );
};

const TextSpan = styled(motion.span)<{ $lineheight?: string, anim?: boolean }>`
  margin: 0;
  padding: 0;
  line-height: ${props => props.$lineheight ?? "1.2"};
  opacity: ${props => props.anim ? 0 : 1};
  animation: ${props => props.anim ? "1s cubic-bezier(0.22, 1, 0.36, 1) ${Animations.showAnim(\"-6px\")} forwards" : undefined};
`

const TextNativeSpan = styled(motion.span)<{ $lineheight?: string, anim?: boolean, $background: string }>`
  margin: 0;
  padding: 0;
  line-height: ${props => props.$lineheight ?? "1.2"};
  opacity: ${props => props.anim ? 0 : 1};
  background: ${props => props.$background};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${props => props.anim ? "1s cubic-bezier(0.22, 1, 0.36, 1) ${Animations.showAnim(\"-6px\")} forwards" : undefined};
`