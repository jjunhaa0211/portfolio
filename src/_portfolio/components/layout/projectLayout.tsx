import { Txt } from "../../../components/Txt";
import styled from "styled-components";
import { useState } from "react";
import { useAnimation } from "framer-motion";
import { motions } from "../../framer/motions";

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
export const Img = ({ url, width, height, children, align, border, ...props }: {
    url: string,
    width?: string,
    height?: string,
    border?: string,
    align?: "center" | "flex-start" | "flex-end"
} & {
    [_: string]: any
}) => {
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
        <DisplayDiv $display={show}>
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
                    width={"70%"}
                    height={"70%"}
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

export const Tags = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 8px;
`

export const Lefter = styled.div`
  display: flex;
  width: 100%;
`

export const DisplayDiv = styled.div<{ $display: boolean }>`
  display: ${props => props.$display ? "block" : "none"};
`

export const Background = styled(motions.keyDiv)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  backdrop-filter: blur(8px);
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