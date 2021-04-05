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
    division: "",                // 分类  演讲 talk / 表演活动  Performances / 视频 video
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
        division: "talk",
        createTS: "",
        authorID: 0,
        path: "/why-they-can-only-be-silent-to-strangers",
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
        division: "talk",
        createTS: "",
        authorID: 0,
        path: "/how-do-we-need-to-rethink-our-basic-education",
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
        division: "talk",
        createTS: "",
        authorID: 0,
        path: "/Feel-the-power-of-the-land-and-self-by-walking",
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
        division: "talk",
        createTS: "",
        authorID: 0,
        path: "/when-creation-becomes-a-habit",
    }, {
        id: 5,
        thumbnail: {
            src: "/thumbnail.jpg",
            alt: "thumbnail",
        },
        title: "降低碳排放的“偏方” | 韩农@TEDxShenzhen",
        introduction: "你以为的“碳排放”只来自工业和汽车？原来农业也会产生“碳排放”！",
        contentHTML: "<p>你以为的“碳排放”只来自工业和汽车？原来农业也会产生“碳排放”！如何解决这个当今全球性的环境议题呢？除了大众了解的减能减排，韩农和他的科技团队，花了十年的时间致力于研究和实践如何让土壤微生物来帮忙减少碳排放。</p><p>韩农，有机农业专家，特石生态循环有机农业产业化模式创始人，作为中国最早从事生态有机农业系统性研究和实践的企业家之一。</p>",
        video: {
            type: "iframe",
            src: "//player.bilibili.com/player.html?aid=93358912&bvid=BV1wE41147Nc&cid=159366144&page=1",
        },
        division: "talk",
        createTS: "",
        authorID: 0,
        path: "/reduce-carbon-emissions",
    }, {
        id: 6,
        thumbnail: {
            src: "/thumbnail.jpg",
            alt: "thumbnail",
        },
        title: "洞穴是没有光的星球 | 刘佳@TEDxShenzhen",
        introduction: "洞穴是什么？是另一个没有光的“星球”。",
        contentHTML: "<p>洞穴是什么？是另一个没有光的“星球”。中国探洞数量最多的探洞者刘佳将带领我们感受了洞穴下的世界，告诉我们，人类与洞穴之间还能有怎么样的联系？</p><p>刘佳被誉为是“当代徐霞客”，从2004年至今的16年间，一直潜行在隐秘的洞穴世界，如今已成长为中国地穴探险的先锋，中国探洞界一姐。她是2016美国国家地理年度探险人物评选中国区十大提名探险家之一，中国第二深竖洞纪录保持者。</p>",
        video: {
            type: "iframe",
            src: "//player.bilibili.com/player.html?aid=93418974&bvid=BV1gE41147ki&cid=159471085&page=1",
        },
        division: "talk",
        createTS: "",
        authorID: 0,
        path: "/the-cave-is-a-planet-without-light",
    }, {
        id: 7,
        thumbnail: {
            src: "/thumbnail.jpg",
            alt: "thumbnail",
        },
        title: "能否通过建筑解决城市发展的自我矛盾 | 张之杨@TEDxShenzhen",
        introduction: "“城市更新”是城市现代化过程中一定面临的议题。",
        contentHTML: "<p>“城市更新”是城市现代化过程中一定面临的议题。一边是城市的记忆和温情，一边是城市高速发展的经济和功能需求，这两者就一定矛盾吗？鱼和熊掌是否能兼得？</p><p>张之杨，独立建筑师，深圳“局内设计(Ingame office)”创始人/主创设计师。</p>",
        video: {
            type: "iframe",
            src: "//player.bilibili.com/player.html?aid=93577452&bvid=BV1FE411t7xR&cid=159759636&page=1",
        },
        division: "talk",
        createTS: "",
        authorID: 0,
        path: "/building-city-Developmental-self-contradiction",
    }, {
        id: 8,
        thumbnail: {
            src: "/thumbnail.jpg",
            alt: "thumbnail",
        },
        title: "丛林 | XY Pattern@TEDxShenzhen",
        introduction: "“Wonder”象征着奇迹同时也表述着对未知的发现及探索的精神...",
        contentHTML: "<p>“Wonder”象征着奇迹同时也表述着对未知的发现及探索的精神，XY PATTERN声 音艺术小组将用命名为“丛林”的音乐现场来试图传达XY PATTERN心中的“Wonder” 精神，同时也想让大家再次尊重个体的感觉系统，在体验中收集自我感觉创造新的可能。</p><p>XY Pattern 声音艺术小组是由徐小国与李言增于2015年共同创建，其创作涉及声音、影像、装置等艺术形式。</p><p>XY Pattern 意在提供一种融合化的工作方式，在感知与体验的双重层面中传达其艺术诉求，主要运用电子原声乐器及影像、装置交织实现场域化的艺术实践。</p>",
        video: {
            type: "iframe",
            src: "//player.bilibili.com/player.html?aid=93577128&bvid=BV1ZE41147Yi&cid=159759559&page=1",
        },
        division: "performances",
        createTS: "",
        authorID: 0,
        path: "/wonder",
    }, {
        id: 10,
        thumbnail: {
            src: "/thumbnail.jpg",
            alt: "thumbnail",
        },
        title: "听潮 | 叶破 周贵东 刘静芸 @TEDxShenzhen",
        introduction: "过塑造现场灵音声境之旅，与专业舞蹈家周贵东及刘静芸共同诠释精神意识中的原始空间...",
        contentHTML: "<p>过塑造现场灵音声境之旅，与专业舞蹈家周贵东及刘静芸共同诠释精神意识中的原始空间，构建时间、肢体与振动频率间最纯粹的契合。</p><p>叶破@IZEN，策展人、艺术总监、音乐顾问、跨媒体艺术家、即兴声域配乐、DJ Producer 及声频疗愈师。</p><p>富电影感的声域，虚幻噪音，简约钢琴，抽像电子，超过12年与众多音乐人、艺术家、舞蹈家合作及即兴演出经验。</p><p>周贵东，旅美青年舞蹈独立艺术家。2014年开始驻美国纽约并与来自世界各地的艺术家们交流创作，主要专注在舞蹈运动的放松技术和人体身心学、运动学、及身心治疗学方面，潜心钻研关于接触即兴和创意舞蹈的开发。</p></p>刘静芸，当代舞者，擅长环境即兴与接触即兴。</p>",
        video: {
            type: "iframe",
            src: "//player.bilibili.com/player.html?aid=93573885&bvid=BV1fE41147HS&cid=159546113&page=1",
        },
        division: "performancesk",
        createTS: "",
        authorID: 0,
        path: "/listen-to-the-tide",
    }, {
        id: 11,
        thumbnail: {
            src: "/thumbnail.jpg",
            alt: "thumbnail",
        },
        title: "工厂流水线工人到纽约程序员 | 孙玲@TEDxShenzhen",
        introduction: "在意识到需要改变自己的20岁，她用全部家当自主学习完成软件编程、掌握英语能力...",
        contentHTML: "<p>媒体称孙玲为“励志网红”，出生成长于湖南娄底一个小村镇的她，12岁经历初中被迫辍学、19岁高考失利，当过理发学徒、工厂流水线生产女工。</p><p>在意识到需要改变自己的20岁，她用全部家当自主学习完成软件编程、掌握英语能力，在10年时间的不懈努力之下，她成功申请到美国留学，现作为程序员在美国Google办公室工作。</p>",
        video: {
            type: "iframe",
            src: "//player.bilibili.com/player.html?aid=93418742&bvid=BV1gE41147BX&cid=159812600&page=1",
        },
        division: "talk",
        createTS: "",
        authorID: 0,
        path: "/Assembly-line-workers-become-New-York-programmers",
    }, {
        id: 12,
        thumbnail: {
            src: "/thumbnail.jpg",
            alt: "thumbnail",
        },
        title: "我们每周会吃下多少塑料？关于无塑化社会的践行 | 雒晓彬@TEDxShenzhen",
        introduction: "研究了7年环保事业的雒晓彬说，事实上我们每周在无形当中都吃进去了一张信用卡大小的塑料。",
        contentHTML: "<p>研究了7年环保事业的雒晓彬说，事实上我们每周在无形当中都吃进去了一张信用卡大小的塑料。而面对塑料对我们的不断侵蚀，雒晓彬将告诉我们该如何反抗。</p><p>雒晓彬，深圳蜗牛妈妈科技有限公司创始人，拥有六年以上世界500强上市公司高管经历，从事环保NGO工作七年，环太平洋⽆塑星球联盟创始⼈之一，被大家称为“蜗牛哥”。</p>",
        video: {
            type: "iframe",
            src: "//player.bilibili.com/player.html?aid=93614747&bvid=BV18E411s7kw&cid=159820594&page=1",
        },
        division: "talk",
        createTS: "",
        authorID: 0,
        path: "/how-much-plastic-do-we-eat-every-week",
    }, {
        id: 13,
        thumbnail: {
            src: "/thumbnail.jpg",
            alt: "thumbnail",
        },
        title: "脑机接口将如何帮助残障人士回归生活 | 韩璧丞@TEDxShenzhen",
        introduction: "一位右臂截肢的少女为何能用双手在钢琴上弹奏出美妙的歌曲？",
        contentHTML: "<p>一位右臂截肢的少女为何能用双手在钢琴上弹奏出美妙的歌曲？</p><p>答案是“脑机接口”。全球脑机接口领域五位创新者之一的韩壁丞博士将介绍如何将脑机接口技术用于帮助残障人士，并在未来能够帮助更多人恢复社会功能。</p><p>韩璧丞的脑机接口公司BrainCo、新型脑控义肢公司BrainRobotics，在美国评选的世界十大脑机接口公司中占据两席重地。</p><p>他与特斯拉的创始人伊隆·马斯克（Elon Musk）一同被美国媒体评为脑机接口领域五位创新者之一 ，2017年被百年科技杂志MIT《麻省理工科技评论》评选为</p>",
        video: {
            type: "iframe",
            src: "//player.bilibili.com/player.html?aid=93616248&bvid=BV1bE411s7Zi&cid=159819840&page=1",
        },
        division: "talk",
        createTS: "",
        authorID: 0,
        path: "/help-people-with-disabilities-return-to-life",
    }, {
        id: 14,
        thumbnail: {
            src: "/thumbnail.jpg",
            alt: "thumbnail",
        },
        title: "独一无二的美食秘方是什么？ | 罗朗@TEDxShenzhen",
        introduction: "是什么让你的食物变得独一无二？不是你的家乡，也不是你的文化，而是对于食物的...",
        contentHTML: "<p>是什么让你的食物变得独一无二？不是你的家乡，也不是你的文化，而是对于食物的热爱，以及尝试的勇气，让食物变得独一无二。在美食家罗朗来看，美食和其他艺术形式一样，都能起到连接人心的作用。</p><p>罗朗，主厨，作家，环保主义者。美国驻中国大使馆两任大使的行政总厨及官邸总管, 《美食与美酒》杂志2016年中国100名最具影响力的人物之一。</p>",
        video: {
            type: "iframe",
            src: "//player.bilibili.com/player.html?aid=93419120&bvid=BV1gE41147SX&cid=159819167&page=1",
        },
        division: "talk",
        createTS: "",
        authorID: 0,
        path: "/what-is-the-unique-recipe-for-gourmet-food",
    }, {
        id: 15,
        thumbnail: {
            src: "/thumbnail.jpg",
            alt: "thumbnail",
        },
        title: "把建筑空间变成巨型玩具——快乐建筑学 | 阮文韬Manfred Yuen@TEDxShenzhen",
        introduction: "阮文韬意识到，作为建筑师，我们不应该只关注于冰冷的建筑形式，材料和规模，更应该致力...",
        contentHTML: "<p>从世界级事务所到回归香港本土，通过一系列志愿者的工作——为单身老人修缮公屋，为要被消灭的“排档”去说服政府……阮文韬意识到，作为建筑师，我们不应该只关注于冰冷的建筑形式，材料和规模，更应该致力于关注和创造建筑可以提供的东西，就是快乐和幸福。</p><p>阮文韬，GROUNDWORK元新建城创办人，阮文韬具有多重身份——建筑师、专栏作家、电台节目嘉宾主持、大学讲师。而在多重身份的构成下，他执着追求设计的梦想和敢为人先的精神，他的设计结合了人文与美学带给建筑不一样的生命。</p><p>自2007年创办Groun</p>",
        video: {
            type: "iframe",
            src: "//player.bilibili.com/player.html?aid=93419120&bvid=BV1gE41147SX&cid=159819167&page=1",
        },
        division: "talk",
        createTS: "",
        authorID: 0,
        path: "/happy-Architecture",
    }, {
        id: 16,
        thumbnail: {
            src: "/thumbnail.jpg",
            alt: "thumbnail",
        },
        title: "TEDxShenzhen活动花絮",
        introduction: "TEDxShenzhen活动花絮～～来了解我们的幕后吧～",
        contentHTML: "<p>TEDxShenzhen活动花絮～～</p><p>来了解我们的幕后吧～</p>",
        video: {
            type: "iframe",
            src: "//player.bilibili.com/player.html?aid=286180148&bvid=BV1pf4y11772&cid=207626010&page=1",
        },
        division: "video",
        createTS: "",
        authorID: 0,
        path: "/tedxshenzhen-2019-tidbits",
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