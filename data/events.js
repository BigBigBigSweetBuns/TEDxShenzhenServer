const ossBaseURL = "https://tedxshenzhen.oss-cn-shenzhen.aliyuncs.com/events/";
//
// 数据结构
const structure = {
    id: 0,                       // 文章ID
    banner: {                    // 文章头图
        src: "/banner.jpg",      // 相对路径
        alt: "banner",           // 图片不显示时介绍
    },
    thumbnail: {                 // 主图，主要显示列表中
        src: "/thumbnail.jpg",
        alt: "thumbnail",
    },
    title: "title",              // 文章标题
    introduction: "introuciont", // 文章简短介绍
    article: {
        type: "html",            // 文章存放的类型
        src: "/",                // 相对位置
    },
    authorID: 0,                 // 作者ID
    path: "/changed-by",         // 前端页面访问，路由索引
}
const eventsData = [{
    id: 1,
    banner: {
        src: "/changed-by/images/banner.jpg",
        alt: "banner",
    },
    thumbnail: {
        src: "/changed-by/images/thumbnail.jpg",
        alt: "thumbnail",
    },
    title: "TEDxShenzhen2021年度大会预告 | 浪潮之后，迎接改变",
    introduction: "刚刚离去的2020年，是一场全球性的巨变。突如其来的疫情，带来工作方式、消费习惯、出行活动等各个方面的改变，甚至重新审视起个体于世界的联系，包括生命观、价值观......",
    article: {
        type: "html",
        src: "/changed-by/changed-by.html?versionId=CAEQHRiBgICi7Y7MxBciIDQ1MjRmOGZlNDg4OTQ3YzdiM2JjOTVjZjY4NDc2ZWFm",
    },
    authorID: 0,
    path: "/changed-by",
}];
function eventsInit() {
    let output = [];
    for (let i = 0; i < eventsData.length; i++) { // 将src补全
        output.push(eventsData[i]);
        output[i].banner.src = ossBaseURL + eventsData[i].banner.src;
        output[i].article.src = ossBaseURL + eventsData[i].article.src;
    }
    return output;
}
module.exports = eventsInit();