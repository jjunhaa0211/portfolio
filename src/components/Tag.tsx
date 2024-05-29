import styled from "styled-components";
import { Txt } from "./Txt";
import { keyOfColors } from "../styles/color";
import { useMediaQuery } from "react-responsive";

export interface TagProps {
  name: string;
  backgroundColor: string;
  textColor: keyOfColors;
}

const Tag = (props: TagProps) => {
  const media = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <Box color={props.backgroundColor}>
      <Txt typography={media ? "P1" : "P0"} color={props.textColor}>
        {props.name}
      </Txt>
    </Box>
  );
};

export const DefaultTag = {
  Swift: (
    <Tag
      key={"Swift"}
      name={"Swift"}
      backgroundColor={"#ff4400"}
      textColor={"White0"}
    />
  ),
  Snpkit: (
    <Tag
      key={"Snpkit"}
      name={"Snpkit"}
      backgroundColor={"#ffe419"}
      textColor={"Black0"}
    />
  ),
  Kingfisher: (
    <Tag
      key={"Kingfisher"}
      name={"Kingfisher"}
      backgroundColor={"#61dafb"}
      textColor={"Black0"}
    />
  ),
  Then: (
    <Tag
      key={"Then"}
      name={"Then"}
      backgroundColor={"#b4842c"}
      textColor={"White0"}
    />
  ),
  Lottie: (
    <Tag
      key={"Lottie"}
      name={"Lottie"}
      backgroundColor={"#0A9910"}
      textColor={"White0"}
    />
  ),
  IOSSecuritySuite: (
    <Tag
      key={"IOSSecuritySuite"}
      name={"IOSSecuritySuite"}
      backgroundColor={"#CA7010"}
      textColor={"White0"}
    />
  ),
  RealmSwift: (
    <Tag
      key={"RealmSwift"}
      name={"RealmSwift"}
      backgroundColor={"#A930E7"}
      textColor={"White0"}
    />
  ),
  RxCocoa: (
    <Tag
      key={"RxCocoa"}
      name={"RxCocoa"}
      backgroundColor={"#E75212"}
      textColor={"White0"}
    />
  ),
  XCameraKit: (
    <Tag
      key={"XCameraKit"}
      name={"XCameraKit"}
      backgroundColor={"#55A5FF"}
      textColor={"White0"}
    />
  ),
  AVFoundation: (
    <Tag
      key={"AVFoundation"}
      name={"AVFoundation"}
      backgroundColor={"#767676"}
      textColor={"White0"}
    />
  ),
  RIBs: (
    <Tag
      key={"RIBs"}
      name={"RIBs"}
      backgroundColor={"#fe00aa"}
      textColor={"White0"}
    />
  ),
  RxFlow: (
    <Tag
      key={"RxFlow"}
      name={"RxFlow"}
      backgroundColor={"#1b1be5"}
      textColor={"White0"}
    />
  ),
  PinLayout: (
    <Tag
      key={"PinLayout"}
      name={"PinLayout"}
      backgroundColor={"#b305c2"}
      textColor={"White0"}
    />
  ),
  FlexLayout: (
    <Tag
      key={"FlexLayout"}
      name={"FlexLayout"}
      backgroundColor={"#ff4da0"}
      textColor={"White0"}
    />
  ),
  Swinject: (
    <Tag
      key={"Swinject"}
      name={"Swinject"}
      backgroundColor={"#251eee"}
      textColor={"White0"}
    />
  ),
  Moya: (
    <Tag
      key={"Moya"}
      name={"Moya"}
      backgroundColor={"#aaa7f8"}
      textColor={"White0"}
    />
  ),
  RxSwift: (
    <Tag
      key={"RxSwift"}
      name={"RxSwift"}
      backgroundColor={"#780aed"}
      textColor={"White0"}
    />
  ),
  // RxTest: (
  //   <Tag
  //     key={"RxTest"}
  //     name={"RxTest"}
  //     backgroundColor={"#85cfa6"}
  //     textColor={"White0"}
  //   />
  // ),
  MVVM: (
    <Tag
      key={"MVVM"}
      name={"MVVM"}
      backgroundColor={"#6311e8"}
      textColor={"White0"}
    />
  ),
  MVC: (
    <Tag
      key={"MVC"}
      name={"MVC"}
      backgroundColor={"#431aa8"}
      textColor={"White0"}
    />
  ),
  MVP: (
    <Tag
      key={"MVP"}
      name={"MVP"}
      backgroundColor={"#72bb0b"}
      textColor={"White0"}
    />
  ),
  TCA: (
    <Tag
      key={"TCA"}
      name={"TCA"}
      backgroundColor={"#a50af2"}
      textColor={"White0"}
    />
  ),
  Tuist: (
    <Tag
      key={"Tuist"}
      name={"Tuist"}
      backgroundColor={"#6b72fc"}
      textColor={"White0"}
    />
  ),
  CoreImage: (
    <Tag
      key={"CoreImage"}
      name={"CoreImage"}
      backgroundColor={"#a91132"}
      textColor={"White0"}
    />
  ),
  OAuth: (
    <Tag
      key={"OAuth"}
      name={"OAuth"}
      backgroundColor={"#2b2b2b"}
      textColor={"White0"}
    />
  ),
  swiftSnapshotTesting: (
    <Tag
      key={"swiftSnapshotTesting"}
      name={"swiftSnapshotTesting"}
      backgroundColor={"#009102"}
      textColor={"White0"}
    />
  ),
  FamilyControls: (
    <Tag
      key={"FamilyControls"}
      name={"FamilyControls"}
      backgroundColor={"#ff7b00"}
      textColor={"White0"}
    />
  ),
  CoreNFC: (
    <Tag
      key={"CoreNFC"}
      name={"CoreNFC"}
      backgroundColor={"#543fbc"}
      textColor={"White0"}
    />
  ),
  Socket: (
    <Tag
      key={"Socket.IO"}
      name={"Socket.IO"}
      backgroundColor={"rgb(255, 0, 208)"}
      textColor={"White0"}
    />
  ),
  xcodeCloud: (
    <Tag
    key={"xcodeCloud"}
    name={"xcodeCloud"}
    backgroundColor={"rgb(44, 139, 255)"}
    textColor={"White0"}
  />
  ),
  githubAction: (
    <Tag
    key={"Github Action"}
    name={"Github Action"}
    backgroundColor={"rgb(255, 111, 0)"}
    textColor={"White0"}
  />
  ),
  JS: (
    <Tag
    key={"JS"}
    name={"JS"}
    backgroundColor={"rgb(255, 234, 0)"}
    textColor={"Black0"}
  />
  ),
  TS: (
    <Tag
    key={"TS"}
    name={"TS"}
    backgroundColor={"rgb(51, 142, 246)"}
    textColor={"White0"}
  />
  ),
  ReactNative: (
    <Tag
    key={"ReactNative"}
    name={"ReactNative"}
    backgroundColor={"rgb(0, 85, 183)"}
    textColor={"White0"}
  />
  ),
  React: (
    <Tag
    key={"React"}
    name={"React"}
    backgroundColor={"rgb(34, 13, 187)"}
    textColor={"White0"}
  />
  ),
  SCSS: (
    <Tag
    key={"SCSS"}
    name={"SCSS"}
    backgroundColor={"rgb(227, 46, 255)"}
    textColor={"White0"}
  />
  ),
  axios: (
    <Tag
    key={"axios"}
    name={"axios"}
    backgroundColor={"rgb(108, 186, 255)"}
    textColor={"Black0"}
  />
  )
};

export type keyOfDefaultTag = keyof typeof DefaultTag;

export const TagBox = styled.div<{ $align?: string }>`
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.$align ?? "flex-start"};
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
`;

const Box = styled.div<{ color: string }>`
  display: flex;
  padding: 3px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 43px;
  background: ${(props) => props.color};

  @media (max-width: 768px) {
    padding: 3px 8px;
  }
`;
export default Tag;
