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
        description: "당신에게 가치있는 게임을 만드는 Mooner510입니다.",
        image: `${process.env.PUBLIC_URL}/icon/junha06.webp`
    },
    "/project/skyblock": {
        title: "SecureMarshmallow - Junha",
        url: `${process.env.PUBLIC_URL}/project/skyblock`,
        description: "🎱 개성을 찾아 스타일을 공유하는 트렌디한 패션 앱 🥋",
        image: `${process.env.PUBLIC_URL}/icon/sbr.webp`
    },
    "/project/lite24": {
        title: "Lite24 - Mooner510",
        url: `${process.env.PUBLIC_URL}/project/lite24`,
        description: "🎱 개성을 찾아 스타일을 공유하는 트렌디한 패션 앱 🥋",
        image: `${process.env.PUBLIC_URL}/icon/lite24.webp`
    },
    "/project/rice-paper": {
        title: "Taday - Junha",
        url: `${process.env.PUBLIC_URL}/project/rice-paper`,
        description: "아이패드를 활용하여 손쉽게 인생 네컷 및 폴라로이드 사진을 만들고 꾸미고 보정할 수 있는 서비스",
        image: `${process.env.PUBLIC_URL}/icon/rp.webp`
    },
    "/project/beat-table": {
        title: "Maeumgajim - Mooner510",
        url: `${process.env.PUBLIC_URL}/project/beat-table`,
        description: "쌈@뽕한 헬스 앱을 찾는다면 마음가짐",
        image: `${process.env.PUBLIC_URL}/icon/beatTable.webp`
    },
    "/project/genshin-calculator": {
        title: "Shalo - Mooner510",
        url: `${process.env.PUBLIC_URL}/project/genshin-calculator`,
        description: "'원신' 게임의 각종 시스템을 더욱 효율적으로 하기 위해 계산해주는 서비스",
        image: `${process.env.PUBLIC_URL}/icon/Shalo.webp`
    },
    "/project/survival-from-the-epidemic": {
        title: "Shalo - Mooner510",
        url: `${process.env.PUBLIC_URL}/project/genshin-calculator`,
        description: "'원신' 게임의 각종 시스템을 더욱 효율적으로 하기 위해 계산해주는 서비스",
        image: `${process.env.PUBLIC_URL}/icon/Shalo.webp`
    },
}

export type keyOfSitemap = keyof typeof sitemap;