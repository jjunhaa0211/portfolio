import React, { CSSProperties, HTMLAttributes } from "react";
import { keyOfIcons } from "../styles/icons";
import { GLinkImage } from "./GLinkImage";
import { Simulate } from "react-dom/test-utils";
import { _icon } from "../utils/utils";

interface Props extends HTMLAttributes<HTMLImageElement> {
    height?: string,
    width?: string,
    css?: CSSProperties,
    onClick?: (event: React.MouseEvent<HTMLImageElement>) => void,
    clickable?: boolean,
    icon: keyOfIcons;
}

export const GIcon = ({ width, height, css, icon, onClick, clickable, ...props }: Props) => {
    return (
        <GLinkImage
            height={height}
            width={width}
            css={css}
            onClick={onClick}
            clickable={clickable}
            url={_icon(icon)}
            {...props}
        />
    )
}