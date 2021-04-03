const ossBaseURL = "https://tedxshenzhen.oss-cn-shenzhen.aliyuncs.com/news";
const HTMLBaseURL = "http://www.tedxshenzhen.cn/html/";
//
// 数据结构
const structure = {
    id: 0,                       // 文章ID
    banner: {                    // 文章头图
        src: "/banner.jpg",      // 相对路径
        alt: "banner",           // 图片不显示时介绍
    },
    thumbnail: {                 // 主图，主要在列表中显示
        src: "/thumbnail.jpg",
        alt: "thumbnail",
    },
    title: "title",              // 文章标题
    introduction: "introuciont", // 文章简短介绍
    article: {
        type: "iframe",          // 文章引用的类型  iframe / HTML
        src: "/",                // 相对位置
    },
    createTS: "",              // 创建时间  时间戳
    authorID: 0,                 // 作者ID
    path: "/changed-by",         // 前端页面访问，路由索引
}
const newsData = [{
    id: 1,
    banner: {
        src: "/changed-by/banner.jpg",
        alt: "banner",
    },
    thumbnail: {
        src: "/changed-by/thumbnail.jpg",
        alt: "thumbnail",
    },
    title: "TEDxShenzhen2021年度大会预告 | 浪潮之后，迎接改变",
    introduction: "刚刚离去的2020年，是一场全球性的巨变。突如其来的疫情，带来工作方式、消费习惯、出行活动等各个方面的改变，甚至重新审视起个体于世界的联系，包括生命观、价值观......",
    article: {
        type: "iframe",
        src: "changed-by.html",
    },
    createTS: "",
    authorID: 0,
    path: "/changed-by",
}, {
    id: 2,
    banner: {
        src: "/TEDxShenzhen2021Annual/banner.jpg",
        alt: "banner",
    },
    thumbnail: {
        src: "/TEDxShenzhen2021Annual/thumbnail.jpg",
        alt: "thumbnail",
    },
    title: "TEDxShenzhen2021年度大会正式开启售票 | Changed by 改变/改变",
    introduction: "曾经，地球这个巨⼤的⻮轮随着全球化发展⽇以继夜地转动着，引导⼈类离开原地探索了世界的各个⻆落。 但在过去⼀年，这个巨⼤的⻮轮仿佛突然生锈了⼀般卡住，惊慌的⼈类⼜回归到闭塞的世界⾥⽆法相通: ",
    article: {
        type: "iframe",
        src: "TEDxShenzhen2021Annual.html",
    },
    createTS: "",
    authorID: 0,
    path: "/tedxshenzhen2021annual",
}];
function newsInit() {
    let output = [];
    for (let i = 0; i < newsData.length; i++) { // 将src补全
        output.push(newsData[i]);
        output[i].banner.src = ossBaseURL + newsData[i].banner.src;
        output[i].article.src = HTMLBaseURL + newsData[i].article.src;
    }
    return output;
}
module.exports = newsInit();