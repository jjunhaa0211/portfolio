import { CSSProperties, HTMLAttributes } from "react";
import { FontStyles, keyOfFontStyles } from "../styles/font";
import { Colors, keyOfColors } from "../styles/color";
import styled from "styled-components";
import { motion, MotionProps } from "framer-motion";

type Props = HTMLAttributes<HTMLSpanElement> &
  MotionProps & {
    typography?: keyOfFontStyles;
    color?: keyOfColors;
    nativeColor?: string;
    margin?: string;
    anim?: boolean;
    clickable?: boolean;
    center?: boolean;
    right?: boolean;
    left?: boolean;
    justify?: boolean;
    $lineheight?: string;
    breakWord?: boolean;
  };

export const Txt = ({
  typography = "P2",
  color = "White0",
  nativeColor,
  center,
  margin = "0",
  right,
  left,
  anim,
  justify,
  clickable,
  $lineheight,
  breakWord,
  ...props
}: Props) => {
  const innerStyle: CSSProperties = {
    color: Colors[color],
    textAlign: justify
      ? "justify"
      : center
      ? "center"
      : right
      ? "right"
      : left
      ? "left"
      : "unset",
    cursor: clickable ? "pointer" : "default",
    margin: margin,
    wordBreak: breakWord ? "break-word" : "keep-all",
    lineHeight: $lineheight ?? "1.2",
    ...FontStyles[typography],
  };

  return nativeColor ? (
    <TextNativeSpan
      style={innerStyle}
      $background={nativeColor}
      anim={anim}
      {...props}
    />
  ) : (
    <TextSpan style={innerStyle} anim={anim} {...props} />
  );
};

const TextSpan = styled(motion.span)<{ anim?: boolean }>`
  margin: 0;
  padding: 0;
  opacity: ${(props) => (props.anim ? 0 : 1)};
  animation: ${(props) =>
    props.anim
      ? '1s cubic-bezier(0.22, 1, 0.36, 1) ${Animations.showAnim("-6px")} forwards'
      : undefined};
`;

const TextNativeSpan = styled(motion.span)<{
  anim?: boolean;
  $background: string;
}>`
  margin: 0;
  padding: 0;
  opacity: ${(props) => (props.anim ? 0 : 1)};
  background: ${(props) => props.$background};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${(props) =>
    props.anim
      ? '1s cubic-bezier(0.22, 1, 0.36, 1) ${Animations.showAnim("-6px")} forwards'
      : undefined};
`;
