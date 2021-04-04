const ossBaseURL = "https://tedxshenzhen.oss-cn-shenzhen.aliyuncs.com/news/"
// 数据结构
const structure = {
    id: 0,                       // 文章ID
    thumbnail: {                 // 主图，主要在列表中显示
        src: "/thumbnail.jpg",
        alt: "thumbnail",
    },
    title: "title",              // 文章标题
    introduction: "introuction", // 视频简短介绍
    contentHTML: "",              // 视频介绍
    videos: {
        type: "iframe",          // 视频引用的类型 iframe / src
        src: "",                 // 是firame时，指向网址，是src时，指向文件
    },
    createTS: "",              // 创建时间  时间戳
    authorID: 0,                 // 作者ID
    path: "/",         // 前端页面访问，路由索引
}
const data = [
    {
        id: 1,
        thumbnail: {
            src: "/thumbnail.jpg",
            alt: "thumbnail",
        },
        title: "为什么他们对陌生人只能沉默",
        introduction: "选择性缄默症患者在沉默中忍受痛苦。他们常常被忽视而得不到治疗，尤其是在像中国这样的发展中国家。",
        contentHTML: "<p>选择性缄默症患者在沉默中忍受痛苦。他们常常被忽视而得不到治疗，尤其是在像中国这样的发展中国家。提高对这种焦虑症的认识至关重要，因为在采取行动帮助患者之前，我们首先需要了解这种病症。心理学家露丝·佩雷德尼克（Ruth Perednik）一生都专注于帮助患有选择性缄默症的儿童找到他们自己的声音。</p><p>Ruth Perednik，英国出生的以色列儿童心理学家，选择性缄默症领域的先驱。在过去20年中，她一直专注于治疗选择性缄默症和其他焦虑症患儿，并开发了一种基于认知行为学的选择性缄默症治疗方法，成功地帮助了</p>",
        video: {
            type: "iframe",
            src: "//player.bilibili.com/player.html?aid=92253943&bvid=BV1m7411N79n&cid=157428581&page=1",
        },
        createTS: "",
        authorID: 0,
        path: "why-they-can-only-be-silent-to-strangers",
    }, {
        id: 2,
        thumbnail: {
            src: "/thumbnail.jpg",
            alt: "thumbnail",
        },
        title: "我们的基础教育需要如何重新思考？ | 葛庆飞@TEDxShenzhen",
        introduction: "都说基础教育要改革，孩子的教育要创新。但怎样的方向更适合现在的孩子呢？",
        contentHTML: "<p>都说基础教育要改革，孩子的教育要创新。但怎样的方向更适合现在的孩子呢？葛庆飞老师给我们来带了一个全科融合教学的新视角。</p><p>葛庆飞10年来投身基础教育研究，针对现在教育的弊端，独创了一套全新的教学理念，经过上百孩子的配合测试，逐渐形成了覆盖从小学到高三的全套全科融合式教学体系。其创新教育的理念近期开始引起多家媒体的关注，并成功入围央视逐梦年代栏目，成为中国企业品牌创新的代表。</p>",
        video: {
            type: "iframe",
            src: "//player.bilibili.com/player.html?aid=93021353&bvid=BV11E411E7DZ&cid=158712044&page=1",
        },
        createTS: "",
        authorID: 0,
        path: "how-do-we-need-to-rethink-our-basic-education",
    }, {
        id: 3,
        thumbnail: {
            src: "/thumbnail.jpg",
            alt: "thumbnail",
        },
        title: "通过行走感受土地与自我的力量 | 半落@TEDxShenzhen",
        introduction: "研究美国国家步道对于美国特别是美国青年人的影响、朝圣之路对于欧洲的重要影响，以及西南联大的迁徙对于学生成长产生的深刻影响",
        contentHTML: "<p>他用27 年时间，走过中国31个省市自治区，在大部分省待了超过一个月时间。自2011年至今，带领上万人以各种形式行走在中国大地上。他研究了美国国家步道对于美国特别是美国青年人的影响、朝圣之路对于欧洲的重要影响，以及西南联大的迁徙对于学生成长产生的深刻影响，希望陪伴青年人通过止语徒步中感受我们的国家。</p><p>半落，曾为海军航空兵军官，在北海舰队、东海舰队服役。现为究径止语徒步创始人，在国内开辟了24条9-10天的止语徒步线路，结合重要历史文化节点，陪伴中国年轻人在行走中了解自己，感受中华。</p>",
        video: {
            type: "iframe",
            src: "//player.bilibili.com/player.html?aid=93272539&bvid=BV1hE411771M&cid=159227228&page=1",
        },
        createTS: "",
        authorID: 0,
        path: "Feel-the-power-of-the-land-and-self-by-walking",
    }, {
        id: 4,
        thumbnail: {
            src: "/thumbnail.jpg",
            alt: "thumbnail",
        },
        title: "当创造成为一种习惯, 生活便再也不会平凡 | 谷逍驰@TEDxShenzhen",
        introduction: "就像大多数的“天才”设定，谷逍驰在剑桥大学的时候辍学并带领团队，探索着下一代的计算机技术：为我们的“虚拟世界”创造“真实”",
        contentHTML: "<p>就像大多数的“天才”设定，谷逍驰在剑桥大学的时候辍学并带领团队，探索着下一代的计算机技术：为我们的“虚拟世界”创造“真实”——开发出了全球第一套无线力反馈手套系统。带上手套，我们可以在家里的沙发上学习做饭、在虚拟的游戏空间里划桨冲浪…</p><p>谷逍驰是Dexta Robotics 的创始人兼 CEO，个人拥有数十项全球范围专利，现专注于构建下一代基于空间计算的通讯及交互系统。他曾入选由Facebook的天使投资人Peter Thiel遴选的泰尔奖学金20位20岁以下创业者；在22岁被授</p>",
        video: {
            type: "iframe",
            src: "//player.bilibili.com/player.html?aid=93358562&bvid=BV1cE4114798&cid=159331430&page=1",
        },
        createTS: "",
        authorID: 0,
        path: "when-creation-becomes-a-habit",
    }
];
function videosInit() {
    let output = [];
    for (let i = 0; i < data.length; i++) { // 将src补全
        output.push(data[i]);
        output[i].thumbnail.src = ossBaseURL + data[i].thumbnail.src;
    }
    return output;
}
module.exports = videosInit();