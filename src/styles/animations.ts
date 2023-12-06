import { keyframes } from "styled-components";

export class Animations {
    static showAnim = (from: string) => keyframes`
      from {
        opacity: 0;
        transform: translateY(${from});
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    `
    static hideAnim = (to: string) => keyframes`
      from {
        opacity: 1;
        transform: translateY(0);
      }
      to {
        opacity: 0;
        transform: translateY(${to});
      }
    `
    static showBlur = (to: string) => keyframes`
      from {
        backdrop-filter: blur(0px);
      }
      to {
        backdrop-filter: blur(${to});
      }
    `
    static hideBlur = (from: string) => keyframes`
      from {
        backdrop-filter: blur(${from});
      }
      to {
        backdrop-filter: blur(0px);
      }
    `
    static changeHeight = (from: string, to: string) => keyframes`
      from {
        height: ${from};
      }
      to {
        height: ${to};
      }
    `
}