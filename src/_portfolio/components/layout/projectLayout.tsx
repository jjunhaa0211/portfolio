import { Txt } from "../../../components/Txt";
import styled from "styled-components";
import { useState } from "react";
import { useAnimation } from "framer-motion";
import { motions } from "../../framer/motions";
import { useMediaQuery } from "react-responsive";
import { keyOfIcons } from "../../../styles/icons";
import { GIcon } from "../../../components/GIcon";
import { Colors } from "../../../styles/color";

export const Top = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 60px;

  img {
    border-radius: 10px;
  }
`
export const H1 = ({ ...props }) => <Txt margin={"26px 0 0 0"} typography={"H1"} {...props}/>
export const H2 = ({ ...props }) => <Txt margin={"22px 0 0 0"} typography={"H2"} {...props}/>
export const H3 = ({ ...props }) => <Txt margin={"22px 0 0 0"} typography={"H3"} {...props}/>
export const H4 = ({ ...props }) => <Txt margin={"14px 0 0 0"} typography={"H4"} {...props}/>
export const P = ({ ...props }) => <Txt typography={"P2"} $lineheight={"1.5"} {...props}/>
export const A = styled.a`
  color: dodgerblue !important;
`

export const Img = ({ url, width, height, children, align, border, ...props }: {
    url: string,
    width?: string,
    height?: string,
    border?: string,
    align?: "center" | "flex-start" | "flex-end"
} & {
    [_: string]: any
}) => {
    const media = useMediaQuery({ query: "(min-width: 768px)" });
    const anim = useAnimation()
    const [show, setShow] = useState<boolean>(false);

    return <>
        <ImgDiv $align={align}>
            <Image
                onClick={() => {
                    setShow(true);
                    anim.start("show");
                }}
                width={width}
                height={height}
                $border={border}
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
                src={`${process.env.PUBLIC_URL}/img/${url}`}
                {...props}
            >
                {children}
            </Image>
        </ImgDiv>
        <DisplayDiv $display={show} $position={"fixed"}>
            <Background
                animate={anim}
                duration={0.5}
                show={{ opacity: 1 }}
                hide={{ opacity: 0 }}
                onClick={() => {
                    anim.start("hide");
                    setTimeout(() => {
                        setShow(false)
                    }, 500);
                }}
            >
                <Image
                    width={media ? "70%" : "90%"}
                    height={media ? "70%" : "80%"}
                    $border={border}
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
                    src={`${process.env.PUBLIC_URL}/img/${url}`}
                    {...props}
                >
                    {children}
                </Image>
            </Background>
        </DisplayDiv>
    </>
}

export const URLItem = ({ icon, url, text, children }: {
    icon: keyOfIcons,
    url?: string,
    text?: string,
    children?: any
}) => {
    const media = useMediaQuery({ query: "(min-width: 768px)" });
    return <URLDiv>
        <GIcon icon={icon} width={"24px"} height={"24px"} border={"6px"}/>
        {url ?
            (media ? <>
                {children}<Txt> : </Txt><Txt><A href={url} target={"_blank"}>{url.replace("mailto:", "")}</A></Txt>
            </> : <URLDev>
                {children}<Txt><A href={url}>{url.replace("mailto:", "")}</A></Txt>
            </URLDev>)
            : !text && (media ? <>
            {children}<Txt> : </Txt><Txt color={"Orange"}>Private Repository</Txt>
        </> : <URLDev>
            {children}<Txt color={"Orange"}>Private Repository</Txt>
        </URLDev>)}
        {text && (media ? <>{children}<Txt> : </Txt><Txt>{text}</Txt></> : <URLDev>
            {children}<Txt>{text}</Txt>
        </URLDev>)}
    </URLDiv>;
}

const URLDev = styled.div`
  display: flex;
  flex-direction: column;
`

const URLDiv = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

export const URLBox = styled.div<{ $width?: string }>`
  margin: 12px 0;
  padding: 16px 20px;
  display: flex;
  gap: 20px;
  width: ${props => props.$width ?? "calc(100% - 40px)"};
  border-radius: 12px;
  border: 1px ${Colors.White5} solid;
  flex-direction: column;
`

export const Tags = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 8px;
`

export const Lefter = styled.div`
  display: flex;
  width: 100%;
`

export const DisplayDiv = styled.div<{ $display: boolean, $position?: string }>`
  position: ${props => props.$position ?? "unset"};
  display: ${props => props.$display ? "block" : "none"};
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 50;
`

export const Background = styled(motions.keyDiv)`
  backdrop-filter: blur(8px);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ImgDiv = styled.div<{ width?: string, height?: string, $align?: string }>`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: ${props => props.$align ?? "flex-start"};
  cursor: pointer;
`

const Image = styled.img<{ width?: string, height?: string, $border?: string }>`
  width: ${props => props.width ?? "100%"};
  height: ${props => props.height ?? "auto"};
  border-radius: ${props => props.$border ?? "16px"};
  object-fit: contain;
`