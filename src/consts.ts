// temporally, for pre-mvp
export const tempRecommendations: RecommendationItemValue[] = [
    {
        title: "Frieren: Beyond Journey's End",
        imageSrc: "https://cdn.myanimelist.net/images/anime/1015/138006l.jpg",
        score: 10
    },
    {
        title: "Violet Evergarden",
        imageSrc: "https://cdn.myanimelist.net/images/anime/1795/95088l.jpg",
        score: 10
    },
    {
        title: "Your Lie in April",
        imageSrc: "https://cdn.myanimelist.net/images/anime/1405/143284.jpg",
        score: 9
    },
    {
        title: "Clannad: After Story",
        imageSrc: "https://cdn.myanimelist.net/images/anime/1299/110774.jpg",
        score: 8
    },
    {
        title: "Angel Beats!",
        imageSrc: "https://cdn.myanimelist.net/images/anime/1244/111115.jpg",
        score: 8
    },
    {
        title: "Plastic Memories",
        imageSrc: "https://cdn.myanimelist.net/images/anime/4/72750.jpg",
        score: 7
    },
    {
        title: "Solo Leveling Season 2: Arise from the Shadow",
        imageSrc: "https://cdn.myanimelist.net/images/anime/1463/145502l.jpg",
        score: 6
    }
];

export type RecommendationItemValue = {
    title: string,
    imageSrc: string,
    score: number
};