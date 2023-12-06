import React, { CSSProperties, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLImageElement> {
    height?: string,
    width?: string,
    css?: CSSProperties,
    onClick?: (event: React.MouseEvent<HTMLImageElement>) => void,
    clickable?: boolean,
    url: string;
}

export const GLinkImage = ({ width, height, css, url, onClick, clickable, ...props }: Props) => {
    return (
        <img
            style={{
                margin: 0,
                padding: 0,
                width: width,
                height: height,
                cursor: onClick || clickable ? "pointer" : "default",
                ...css
            }}
            onClick={onClick}
            alt={""}
            src={url}
            {...props}
        />
    )
}