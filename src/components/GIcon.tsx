import React, { CSSProperties, HTMLAttributes } from "react";
import { keyOfIcons } from "../styles/icons";
import { GLinkImage } from "./GLinkImage";
import { _icon } from "../utils/utils";

interface Props extends HTMLAttributes<HTMLImageElement> {
    height?: string,
    width?: string,
    border?: string,
    css?: CSSProperties,
    onClick?: (event: React.MouseEvent<HTMLImageElement>) => void,
    clickable?: boolean,
    icon: keyOfIcons;
}

export const GIcon = ({ width, height, css, border, icon, onClick, clickable, ...props }: Props) => {
    return (
        <GLinkImage
            height={height}
            width={width}
            css={css}
            border={border}
            onClick={onClick}
            clickable={clickable}
            url={_icon(icon)}
            {...props}
        />
    )
}