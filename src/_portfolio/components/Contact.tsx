import { Txt } from "../../components/Txt";
import { GBody } from "../../components/layout/globalLayouts";
import { useMediaQuery } from "react-responsive";
import { URLBox, URLItem } from "./layout/projectLayout";

const Contact = () => {
    const media = useMediaQuery({ query: "(min-width: 768px)" });

    return <GBody>
        <a id={"contact"}><Txt typography={"H0"}>Contact</Txt></a>

        <URLBox $width={media ? "50%" : "80%"}>
            <URLItem icon={"Github"} url={"https://github.com/jjunhaa0211"}>
                <Txt>Github</Txt>
            </URLItem>
            {/* <URLItem icon={"Tistroy"} url={"https://goodjunha060211.tistory.com"}>
                <Txt>Tel</Txt>
            </URLItem> */}
            <URLItem icon={"Discord"} text={"junha06"}>
                <Txt>Discord</Txt>
            </URLItem>
            <URLItem icon={"Email"} url={"mailto:goodjunha@gmail.com"}>
                <Txt>Email</Txt>
            </URLItem>
            <URLItem icon={"Email"} text={"010-8581-7469"}>
                <Txt>Tel</Txt>
            </URLItem>
        </URLBox>
    </GBody>;
};

export default Contact;