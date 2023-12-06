import styled from "styled-components";
import { Animations } from "../styles/animations";

const AnimShowTable = styled.div<{ delay?: string, gap?: string }>`
  display: flex;
  flex-direction: column;
  gap: ${props => props.gap || "16px"};
  align-self: stretch;
  animation: 1s cubic-bezier(0.22, 1, 0.36, 1) ${Animations.showAnim("-20px")} forwards${props => props.delay || ""};
`

export default AnimShowTable;