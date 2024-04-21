import {
    H3,
    H4,
    Img,
    Lefter,
    P,
    Tags,
    Top,
    URLBox,
    URLItem,
    Details,
  } from "../../../components/layout/projectLayout";
  import { GIcon } from "../../../../components/GIcon";
  import { Txt } from "../../../../components/Txt";
  import { DefaultTag, keyOfDefaultTag } from "../../../../components/Tag";
  import useMoonerDown from "../../../../utils/editor/hook/useMoonerDown";
  
  const AppLinkProject = () => {
    return (
      <>
        <Top>
          <GIcon icon={"Link"} width={"100px"} />
          <Txt typography={"H0"}>
          NFC <Txt typography={"P1"}>2023.06.16~2023.11.09</Txt>
          </Txt>
        </Top>
        <Tags>{["Swift"].map((v) => DefaultTag[v as keyOfDefaultTag])}</Tags>
  
        <URLBox>
          <URLItem
            icon={"Github"}
            url={"https://github.com/jjunhaa0211/XCameraKit"}
          >
            <Txt>Github (Project)</Txt>
          </URLItem>
        </URLBox>
  
        <Lefter>
          <Img
            url={
              "banner/LinkBanner.webp"}
            width={"100%"}
            border={"0"}
            align={"center"}
          />
        </Lefter>
  
        <H3>개요</H3>
      </>
    );
  };
  
  export default AppLinkProject;
  