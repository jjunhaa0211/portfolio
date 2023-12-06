import { Animations } from "../../styles/animations";
import styled from "styled-components";


const AnimDiv = styled.div<{ $show?: boolean }>`
  overflow: hidden;
  animation: 1s cubic-bezier(0.22, 1, 0.36, 1) ${props => props.$show ? Animations.changeHeight("0", "66px") : Animations.changeHeight("66px", "0")} forwards;
  width: 100%;
`

export default AnimDiv;