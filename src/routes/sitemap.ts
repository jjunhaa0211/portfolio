export interface SiteData {
    title: string,
    url: string,
    description: string,
    image: string,
}

export const getSitemap = (key: string): SiteData => {
    key = key.endsWith("/") ? key.substring(0, key.length - 1) : key;
    if (sitemap[key]) return sitemap[key]
    return sitemap[""]
}

const sitemap: { [p: string]: SiteData } = {
    "": {
        title: "Portfolio - Junha",
        url: `${process.env.PUBLIC_URL}`,
        description: "언제나 품질과 구조를 최우선하는 박준하입니다.",
        image: `${process.env.PUBLIC_URL}/icon/junha06.webp`
    },
    "/project/SecureMarshmallow": {
        title: "SecureMarshmallow - Junha",
        url: `${process.env.PUBLIC_URL}/project/SecureMarshmallow`,
        description: "사용자의 개인정보를 안전하게 : SecureMarshmallow🔓",
        image: `${process.env.PUBLIC_URL}/icon/sm.webp`
    },
    "/project/LookMonster": {
        title: "LookMonster - Junha",
        url: `${process.env.PUBLIC_URL}/project/LookMonster`,
        description: "🎱 개성을 찾아 스타일을 공유하는 트렌디한 패션 앱 🥋",
        image: `${process.env.PUBLIC_URL}/icon/monster.webp`
    },
    "/project/Today": {
        title: "Taday - Junha",
        url: `${process.env.PUBLIC_URL}/project/Today`,
        description: "아이패드를 활용하여 손쉽게 인생 네컷 및 폴라로이드 사진을 만들고 꾸미고 보정할 수 있는 서비스",
        image: `${process.env.PUBLIC_URL}/icon/today.webp`
    },
    "/project/Maeumgajim": {
        title: "Maeumgajim - Junha",
        url: `${process.env.PUBLIC_URL}/project/Maeumgajim`,
        description: "쌈@뽕한 헬스 앱을 찾는다면 마음가짐",
        image: `${process.env.PUBLIC_URL}/icon/Maeumgajim.webp`
    },
    "/project/Shalo": {
        title: "Shalo - Junha",
        url: `${process.env.PUBLIC_URL}/project/`,
        description: "영상편집 서비스",
        image: `${process.env.PUBLIC_URL}/icon/Shalo.webp`
    }
}

export type keyOfSitemap = keyof typeof sitemap;