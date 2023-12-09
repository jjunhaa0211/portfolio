import { useParams } from "react-router-dom";

export interface IRL {
    name: string,
    verify: boolean
}

const useIrl = () => {
    const { irl: irlString } = useParams();

    try {
        if (irlString) {
            // console.log("HASH ===============================")
            let p = window.atob(irlString)
            // console.log(p);
            p = p.split('').reverse().join('')
            // console.log(p);
            p = p.split('-').reverse().join('')
            // console.log(p);
            p = p.split('').reverse().join('')
            // console.log(p);
            p = p.split('_').reverse().join('')
            // console.log(p);
            p = p.split('').reverse().join('');
            // console.log(p);
            p = window.atob(p);
            // console.log(p);
            p = decodeURI(escape(p)).replaceAll("%3A", ":").replaceAll("%2C", ",");
            // console.log("COMPLETE : " + p);
            // console.log("HASH ===============================")
            return JSON.parse(p) as IRL;
        }
    } catch (ignore: any) {
    }
    return {
        name: "Mooner510",
        verify: false
    } as IRL;
}

const addRandom = (str: string, key: string) => {
    let list = str.split('');
    for (let i = Math.floor(Math.random() * 4) + 3; i >= 0; i--) {
        list.splice(Math.floor(Math.random() * list.length), 0, key);
    }
    return list.join('');
}

export const recompile = (obj: any) => {
    let str = JSON.stringify(obj)
    str = unescape(encodeURI(str));
    // console.log("RECOMPILE ===============================")
    let p = window.btoa(str);
    // console.log(p);
    p = p.split('').reverse().join('');
    // console.log(p);
    p = addRandom(p, "_")
    // console.log(p);
    p = p.split('_').reverse().join('_')
    // console.log(p);
    p = p.split('').reverse().join('')
    // console.log(p);
    p = addRandom(p, "-")
    // console.log(p);
    p = p.split('-').reverse().join('-')
    // console.log(p);
    p = p.split('').reverse().join('')
    // console.log(p);
    p = window.btoa(p)
    // console.log(p);
    p.split('').reverse().join('')
    // console.log("FINAL : " + p);
    // console.log("RECOMPILE ===============================")
    return p;
}

export default useIrl;