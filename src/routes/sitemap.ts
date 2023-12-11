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
        title: "Portfolio - Mooner510",
        url: `${process.env.PUBLIC_URL}`,
        description: "당신에게 가치있는 게임을 만드는 Mooner510입니다.",
        image: `${process.env.PUBLIC_URL}/icon/mooner510.webp`
    },
    "/project/skyblock": {
        title: "SkyblockRemake - Mooner510",
        url: `${process.env.PUBLIC_URL}/project/skyblock`,
        description: "마인크래프트 서버 중 하나인 Hypixel의 Skyblock 미니게임을 리메이크 한 것으로, 내 마음대로 변경해 플레이 할 수 있게 해주는 Spigot 플러그인",
        image: `${process.env.PUBLIC_URL}/icon/sbr.webp`
    },
    "/project/lite24": {
        title: "Lite24 - Mooner510",
        url: `${process.env.PUBLIC_URL}/project/lite24`,
        description: "마인크래프트 서버 Lite24(LiteNetworks)를 직접 운영하고 유지보수 한 프로젝트",
        image: `${process.env.PUBLIC_URL}/icon/lite24.webp`
    },
    "/project/rice-paper": {
        title: "RicePaper - Mooner510",
        url: `${process.env.PUBLIC_URL}/project/rice-paper`,
        description: "전국의 학교 급식을 Discord로 손쉽게 보고 급식 시간이 다가오면 DM으로 이번 급식을 알려주는 서비스",
        image: `${process.env.PUBLIC_URL}/icon/rp.webp`
    },
    "/project/beat-table": {
        title: "BeatTable - Mooner510",
        url: `${process.env.PUBLIC_URL}/project/beat-table`,
        description: "테이블 형식의 색다른 리듬게임",
        image: `${process.env.PUBLIC_URL}/icon/beatTable.webp`
    },
    "/project/genshin-calculator": {
        title: "Genshin Calculator - Mooner510",
        url: `${process.env.PUBLIC_URL}/project/genshin-calculator`,
        description: "'원신' 게임의 각종 시스템을 더욱 효율적으로 하기 위해 계산해주는 서비스",
        image: `${process.env.PUBLIC_URL}/icon/paimon.webp`
    },
    "/project/survival-from-the-epidemic": {
        title: "Genshin Calculator - Mooner510",
        url: `${process.env.PUBLIC_URL}/project/genshin-calculator`,
        description: "'원신' 게임의 각종 시스템을 더욱 효율적으로 하기 위해 계산해주는 서비스",
        image: `${process.env.PUBLIC_URL}/icon/paimon.webp`
    },
}

export type keyOfSitemap = keyof typeof sitemap;