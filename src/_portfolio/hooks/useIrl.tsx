import { useParams } from "react-router-dom";
import { decode, encode } from "punycode";

export interface IRL {
    name: string,
    verify: boolean
}

export interface IRLData {
    irl: IRL,
    key: string
}

const debug = false;

const useIrl = (): IRLData => {
    const { irl: irlString } = useParams();

    try {
        if (irlString) {
            if (debug) console.log("HASH ===============================")
            let p = window.atob(irlString)
            if (debug) console.log(p);
            p = p.split('').reverse().join('')
            if (debug) console.log(p);
            p = p.split('-').reverse().join('')
            if (debug) console.log(p);
            p = p.split('').reverse().join('')
            if (debug) console.log(p);
            p = p.split('_').reverse().join('')
            if (debug) console.log(p);
            p = p.split('').reverse().join('');
            if (debug) console.log(p);
            p = window.atob(p);
            if (debug) console.log(p);
            p = decodeURI(p).replaceAll("%3A", ":").replaceAll("%2C", ",");
            if (debug) console.log(p);
            p = '{"' + p.replaceAll("$", '":"').replaceAll("#", '","') + '}'
            if (debug) console.log("COMPLETE : " + p);
            if (debug) console.log("HASH ===============================")
            const obj = JSON.parse(p);
            Object.keys(obj).forEach(key => {
                if (typeof (obj[key]) === "string") {
                    obj[key] = decode(obj[key]);
                }
            });
            return {
                irl: obj as IRL,
                key: irlString
            } as IRLData;
        }
    } catch (ignore: any) {
    }
    return {
        irl: {
            name: "Mooner510",
            verify: false
        },
        key: irlString
    } as IRLData;
}

const addRandom = (str: string, key: string) => {
    let list = str.split('');
    for (let i = Math.floor(Math.random() * 2) + 1; i >= 0; i--) {
        list.splice(Math.floor(Math.random() * list.length), 0, key);
    }
    return list.join('');
}

export const recompile = (obj: any) => {
    Object.keys(obj).forEach(key => {
        if (typeof (obj[key]) === "string") {
            obj[key] = encode(obj[key]);
        }
    });
    let str = JSON.stringify(obj)
    if (debug) console.log("RECOMPILE ===============================")
    if (debug) console.log(str);
    str = str.substring(2, str.length - 1).replaceAll('":"', "$").replaceAll('","', "#")
    // console.log(str);
    // str = encodeURI(str);
    if (debug) console.log(str);
    let p = window.btoa(str);
    if (debug) console.log(p);
    p = p.split('').reverse().join('');
    if (debug) console.log(p);
    p = addRandom(p, "_")
    if (debug) console.log(p);
    p = p.split('_').reverse().join('_')
    if (debug) console.log(p);
    p = p.split('').reverse().join('')
    if (debug) console.log(p);
    p = addRandom(p, "-")
    if (debug) console.log(p);
    p = p.split('-').reverse().join('-')
    if (debug) console.log(p);
    p = p.split('').reverse().join('')
    if (debug) console.log(p);
    p = window.btoa(p)
    if (debug) console.log(p);
    p.split('').reverse().join('')
    if (debug) console.log("FINAL : " + p);
    if (debug) console.log("RECOMPILE ===============================")
    return p;
}

export default useIrl;