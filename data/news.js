const ossBaseURL = "https://tedxshenzhen.oss-cn-shenzhen.aliyuncs.com/news/";
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
        src: "2021AnnualConferencePreview/banner.jpg",
        alt: "banner",
    },
    thumbnail: {
        src: "2021AnnualConferencePreview/thumbnail.jpg",
        alt: "thumbnail",
    },
    title: "TEDxShenzhen2021年度大会预告 | 浪潮之后，迎接改变",
    introduction: "刚刚离去的2020年，是一场全球性的巨变。突如其来的疫情，带来工作方式、消费习惯、出行活动等各个方面的改变，甚至重新审视起个体于世界的联系，包括生命观、价值观...",
    article: {
        type: "iframe",
        src: "2021AnnualConference-preview.html",
    },
    createTS: "1614614400",
    authorID: 0,
    path: "/2021AnnualConference-preview",
}, {
    id: 2,
    banner: {
        src: "2021AnnualConference_officially_open/banner.jpg",
        alt: "banner",
    },
    thumbnail: {
        src: "2021AnnualConference_officially_open/thumbnail.jpg",
        alt: "thumbnail",
    },
    title: "TEDxShenzhen2021年度大会正式开启售票 | Changed by 改变/改变",
    introduction: "曾经，地球这个巨⼤的⻮轮随着全球化发展⽇以继夜地转动着，引导⼈类离开原地探索了世界的各个⻆落...",
    article: {
        type: "iframe",
        src: "2021AnnualConference-officially-open.html",
    },
    createTS: "1616169600",
    authorID: 0,
    path: "/2021AnnualConference-officially-open",
}, {
    id: 3,
    banner: {
        src: "2021AnnualConference-speaker-list/banner.jpg",
        alt: "banner",
    },
    thumbnail: {
        src: "2021AnnualConference-speaker-list/thumbnail.jpg",
        alt: "thumbnail",
    },
    title: "TEDxShenzhen2021年度大会 | 第二批讲者名单出炉",
    introduction: "人类文明的每一次进步，都是因为我们能在适应万变中积极地做出改变，无论是什么样的变化，我们在不断关注探讨的同时，就能赋予其正面的意义...",
    article: {
        type: "iframe",
        src: "2021AnnualConference-speaker-list.html",
    },
    createTS: "1616688000",
    authorID: 0,
    path: "/2021AnnualConference-speaker-list",
}, {
    id: 4,
    banner: {
        src: "2021AnnualConferenceRegistration/banner.jpg",
        alt: "banner",
    },
    thumbnail: {
        src: "2021AnnualConferenceRegistration/thumbnail.jpg",
        alt: "thumbnail",
    },
    title: "TEDxShenzhen2021年度大会报名 | 温故知新",
    introduction: "每一次进步，每一次革命，无论朝着哪个方向发展，值得被探讨的，都可以让我们收获更多，更多的思想，更多的认知模式，去面对更多的机遇与可能...",
    article: {
        type: "iframe",
        src: "2021AnnualConference-registration.html",
    },
    createTS: "1617206400",
    authorID: 0,
    path: "/2021AnnualConference-registration",
}];
function newsInit() {
    let output = [];
    for (let i = 0; i < newsData.length; i++) { // 将src补全
        output.push(newsData[i]);
        output[i].banner.src = ossBaseURL + newsData[i].banner.src;
        output[i].thumbnail.src = ossBaseURL + newsData[i].thumbnail.src;
        output[i].article.src = HTMLBaseURL + newsData[i].article.src;
    }
    return output;
}
module.exports = newsInit();