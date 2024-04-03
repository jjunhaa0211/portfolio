import React, { CSSProperties, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLImageElement> {
    height?: string,
    width?: string,
    css?: CSSProperties,
    border?: string,
    onClick?: (event: React.MouseEvent<HTMLImageElement>) => void,
    clickable?: boolean,
    url: string;
}

export const GLinkImage = ({ width, height, css, url, border, onClick, clickable, ...props }: Props) => {
    return (
        <img
            style={{
                margin: 0,
                padding: 0,
                width: width,
                height: height,
                minWidth: width,
                minHeight: height,
                borderRadius: border,
                objectFit: "cover",
                cursor: onClick || clickable ? "pointer" : "default",
                ...css
            }}
            onContextMenu={v => v.preventDefault()}
            onDragStart={v => v.preventDefault()}
            onDrag={v => v.preventDefault()}
            onDragEnd={v => v.preventDefault()}
            onDragStartCapture={v => v.preventDefault()}
            onDragCapture={v => v.preventDefault()}
            onDragEndCapture={v => v.preventDefault()}
            onContextMenuCapture={v => v.preventDefault()}
            onKeyDown={v => v.preventDefault()}
            onKeyDownCapture={v => v.preventDefault()}
            onClick={onClick}
            alt={""}
            src={url}
            {...props}
        />
    )
}