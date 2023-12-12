import { Txt } from "../../components/Txt";
import { GBody } from "../../components/layout/globalLayouts";
import { useMediaQuery } from "react-responsive";
import { URLBox, URLItem } from "./layout/projectLayout";

const Contact = () => {
    const media = useMediaQuery({ query: "(min-width: 768px)" });
    // const irl = useIrl();

    return <GBody>
        <a id={"contact"}><Txt typography={"H0"}>Contact</Txt></a>

        <URLBox $width={media ? "50%" : "80%"}>
            <URLItem icon={"Github"} url={"https://github.com/Mooner510"}>
                <Txt>Github</Txt>
            </URLItem>
            <URLItem icon={"Discord"} text={"mooner510"}>
                <Txt>Discord</Txt>
            </URLItem>
            <URLItem icon={"Email"} url={"mailto:lmck510@gmail.com"}>
                <Txt>Email</Txt>
            </URLItem>
        </URLBox>
    </GBody>;
};

export default Contact;