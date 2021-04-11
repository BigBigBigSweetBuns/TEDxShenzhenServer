const ossPortraitlBaseURL = "https://tedxshenzhen.oss-cn-shenzhen.aliyuncs.com/speakers/portrait";
const ossEffectPictureBaseURL = "https://tedxshenzhen.oss-cn-shenzhen.aliyuncs.com/speakers/effectpicture";

const structure = {
    id: 0, // 讲者ID
    portrait: {  // 肖像图
        src: "/portrait.jpg",
        alt: "portrait",
    },
    name: "name",  // 讲者姓名
    contentHTML: "contentHTML", //介绍
    division: "2021", // 2021年的讲者
    path: "/" // 页面路由
};
const data = [
    {
        id: 1, // 讲者ID
        portrait: {  // 肖像图
            src: "/johnli.jpg",
            alt: "portrait",
        },
        effectPicture: {
            src: "/johnli.jpg",
            alt: "portrait",
        },
        name: "John Li",  // 讲者姓名
        contentHTML:
            "<p>John Li，毕业于美国加州大学数学与物理专业，后于美国南加州大学物理系量子信息方向NSF全奖攻读博士, 自诩为一个非典型数学家。</p><p>John 近十余年专注研究数学引擎技术，现正自主研发中国首个的完备数学引擎——让天下没有难做的数学。致力于把任何难题抽象成数学问题，再用数学引擎将其攻克。相关领域包括但不限于：用数学引擎做科普，用数学引擎做教育，用数学引擎做科研，用数学引擎做信息技术开发等。</p>",
        division: "2021", // 2021年的讲者
        path: "/2021-johnli",
    }, {
        id: 2, // 讲者ID
        portrait: {  // 肖像图
            src: "/gongjiaqin.jpg",
            alt: "portrait",
        },
        effectPicture: {
            src: "/gongjiaqin.jpg",
            alt: "portrait",
        },
        name: "龚槚钦",  // 讲者姓名
        contentHTML: "<p>龚槚钦，极飞科技联合创始人，巴黎第九大学、清华大学、北京国家会计学院联合博士研究生。</p><p>曾任凤凰卫视海外特约记者，国家地理学会理事会成员，福布斯中国2018 U30 封面人物。</p><p></p>作为一名从事农村经济发展和社会创新研究的企业家，龚槚钦自2013年回国以来，一直致力于前沿技术在农业生产中的推广应用和效益研究。</p><p>极飞科技(XAG)是世界领先的智能科技公司，通过开发机器人和 AI 技术，提升人类农业的生产效率。</p><p>2016年，龚槚钦主持创办了极飞学院，当前已累计培养了9万多名智慧农业应用人才。</p>", //介绍
        division: "2021", // 2021年的讲者
        path: "/2021-gongjiaqin",
    }, {
        id: 3,
        portrait: {
            src: "/guanhaoguang.jpg",
            alt: "portrait",
        },
        effectPicture: {
            src: "/guanhaoguang.jpg",
            alt: "portrait",
        },
        name: "关浩光",
        contentHTML: "<p>关浩光，中欧国际工商学院管理学副教授，研究领域主要集中在工作与家庭的平衡、培训、领导力和偏差行为。</p><p>关博士在国际知名学术期刊，包括《管理学会杂志》、《应用心理学杂志》等，上发表过60+篇文章，近期发表的文章包括职场内卷、职场霸凌等内容领域。关博士的研究成果被引用2000+次，并且曾荣获美国管理学会和工业和组织心理学协会颁发的杰出研究奖。</p>",
        division: "2021",
        path: "/2021-guanhaoguang",
    }, {
        id: 4,
        portrait: {
            src: "/haoxiaosai.jpg",
            alt: "portrait",
        },
        effectPicture: {
            src: "/haoxiaosai.jpg",
            alt: "portrait",
        },
        name: "郝晓赛",
        contentHTML: "<p>郝晓赛，清华大学建筑学博士，国家一级注册建筑师，教授，现任北京建筑大学建筑系主任。</p><p>她和医院打了20年交道。从非典时期作为北京小汤山医院设计团队成员之一和医生们并肩抗疫，到赴英、美访学，走访荷兰、德国、日本、韩国等国研习医疗建筑，通过对比探究社会环境对医疗建筑设计的影响，再到带领研究团队大量调研以北京地区为主的本土医院建筑，掌握我国医生患者医院环境使用体验一手资料......她跨越了建筑师、医疗建筑研究者和建筑教育工作者三重身份，只为了解答一个问题：我们的医院该如何变得更好？</p>",
        division: "2021",
        path: "/2021-haoxiaosai",
    }, {
        id: 5,
        portrait: {
            src: "/leiluozuhe.jpg",
            alt: "portrait",
        },
        effectPicture: {
            src: "/leiluozuhe.jpg",
            alt: "portrait",
        },
        name: "磊落组合",
        contentHTML: "<p>“磊落”于2013年成军，由中国资深音乐人王磊与建筑设计师、键盘手乐乐二人组成。王磊上世纪九十年代初开始从事音乐工作，曾任“苍蝇”乐队、“红桃5”乐队、“鲍家街43号”乐队贝斯手。乐乐自幼师从上海音乐学院前教授胡天俦，并毕业于澳大利亚悉尼大学建筑系。 </p><p>作为一个艺术流行音乐家组合，他们的音乐作品带有强烈的叙事感，风格丰富多彩，每一首乐曲都似乎是电影原声一般，充满倾诉性。自2013年成军以来，磊落二人一直持续创作，在不同类型学的范畴里不受牵制地自由摸索着，至此已发行5张全长录音室专辑及多首单曲。</p><p>2019年5月，磊落签约文投控股&哆啦音乐。</p>",
        division: "2021",
        path: "/2021-leiluozuhe",
    }, {
        id: 6,
        portrait: {
            src: "/leiyuxi.jpg",
            alt: "portrait",
        },
        effectPicture: {
            src: "/leiyuxi.jpg",
            alt: "portrait",
        },
        name: "雷雨霫",
        contentHTML: "<p>雷雨霫，NANOxARCH®（材料乘以设计™）创始人兼首席执行官。作为一位社会创新企业家与好奇的探索者，雨霫一直在为跨学科的“X”寻找可能的解决方案，希望通过创意及努力使得人与自然之间，及人与人之间的关系可以更加平衡一些。</p><p>源于材料研究的背景和对“如何通过材料改善空间及产品的可持续性”的好奇， 雨霫自2011年开始在美国读研期间开始筹备NANOxARCH至今，2018年10月正式成立再造个空间（深圳）材料设计有限公司，以ANOxARCH®（材料乘以设计™）为品牌。</p><p>雨霫曾入选2020 Tatler Gen.T “亚洲新锐先锋” 榜单、2019年Homeward Bound全球女科学家气候变化南极行动项目、2018年福布斯中国 “30位30岁以下精英”榜单、2017年哈佛SEED社会创新种子社区Fellow等，她毕业于美国新罕布什尔大学 (化学硕士, 纳米材料研究方向)和中南民族大学（材料化学学士）。 </p>",
        division: "2021",
        path: "/2021-leiyuxi",
    }, {
        id: 7,
        portrait: {
            src: "/liuxiangzi.jpg",
            alt: "portrait",
        },
        effectPicture: {
            src: "/liuxiangzi.jpg",
            alt: "portrait",
        },
        name: "刘湘子",
        contentHTML: "<p>刘湘子，亚洲首位登上美国林肯艺术中心的梵呗歌者、梵呗“狮子吼”唱法传承人、中国著名梵呗艺术家、梵呗音乐的传播者和推广者。</p><p>他创造性地把梵呗与现代音乐结合起来，把几近失传的“狮子吼”技法和梵文佛教经咒完美地融入到音乐创作中。</p><p>在长期与梵呗音乐的交融中，刘湘子悟出了在浮躁时代获取“安心”的方式，也体会出如何辩证看待“利他与利己”的关系。</p><p>刘湘子所理解的梵呗文化并非教人“出世”，相反，是在教人如何“大隐隐于世”如何正确认识自己并激发正能量，从而更好地经营生活，热爱生活。</p>",
        division: "2021",
        path: "/2021-liuxiangzi",
    }, {
        id: 8,
        portrait: {
            src: "/lixia.jpg",
            alt: "portrait",
        },
        effectPicture: {
            src: "/lixia.jpg",
            alt: "portrait",
        },
        name: "李霞",
        contentHTML: "<p>李霞，Power Solution深圳市诚信诺科技有限公司创始人，荣获2018亚洲开发银行新能源领袖，中国金牌社会企业，企业入选人大商学院案例，清华经管学院案例库及SAGE BUSINESS CASE。</p><p>李女士自2009年起致力于为世界BOP（金字塔底层）贫困人口提供耐用、实用、可负担的清洁能源产品，至今为全球3000+万贫困人口提供太阳能灯照明，减少碳排300+万吨。</p>",
        division: "2021",
        path: "/2021-lixia",
    }, {
        id: 9,
        portrait: {
            src: "/lushiyu.jpg",
            alt: "portrait",
        },
        effectPicture: {
            src: "/lushiyu.jpg",
            alt: "portrait",
        },
        name: "陆诗雨",
        contentHTML: "<p>陆诗雨，腾讯研究院高级研究员，从事与数字科技相关的社会研究，包括老年人、残障人群的数字使用，以及数字科技参与乡村振兴和社会救助。</p><p>作为主笔研究并撰写《吾老之域：老年人微信生活与家庭微信反哺》《社交的尺度——社交网络斋戒实验》等，发表论文、文章20余篇，长期致力于将“人的视角”引入到科技发展的语境，探索科技向善的行动路径。</p>",
        division: "2021",
        path: "/2021-lushiyu",
    }, {
        id: 10,
        portrait: {
            src: "/renxinni.jpg",
            alt: "portrait",
        },
        effectPicture: {
            src: "/renxinni.jpg",
            alt: "portrait",
        },
        name: "韧心旎",
        contentHTML: "<p>韧心旎（Sherill），美国心旎性格成长工作室创始人兼首席咨询师，硕士毕业于美国哥伦比亚大学心理咨询专业，任华盛顿州教育厅学生社交情绪学习项目特聘顾问。</p><p>2015年创立美国心旎性格成长工作室，通过提供咨询服务，线上课程，支持小组，以及新媒体内容创作，普及心理健康知识，帮助更多人拥有发展与维护自我精神健康的意识和方法，释放生命潜能。</p>",
        division: "2021",
        path: "/2021-renxinni",
    }, {
        id: 11,
        portrait: {
            src: "/wanglingjie.jpg",
            alt: "portrait",
        },
        effectPicture: {
            src: "/wanglingjie.jpg",
            alt: "portrait",
        },
        name: "王令杰",
        contentHTML: "<p>王令杰，艺术家，是郝经芳&王令杰艺术家组合成员，现工作生活于法国米卢斯和中国上海。</p><p>郝经芳&王令杰的创作关注自然界的细微变化，以及人们对其发生的感知。主要媒介包括装置和影像。通过运用材料科学及工程学原理创作的作品呈现了对认知、情感与自然之间关系的探索，传达了一种交织着理性与感性色彩的形而上的思考。艺术与工科的双重专业背景，有效推动了艺术家对物质与精神世界之间终极共性的探求。</p><p>郝经芳&王令杰的创作作品和创作计划经常呈现于国内、国际的各个艺术机构和画廊，其中包括：第十四届里昂双年展、法国巴黎东京宫、蓬皮杜艺术和文化中心、尤伦斯沙丘美术馆、上海当代艺术博物馆等。他们参与拍摄制作的纪录长片《女工》获得瑞士苏黎世“The Global Skin”评委奖、凯撒奖纪录片提名。</p><p>在他们的创作命题之外，王令杰现同时在上海视觉艺术学院 Roy Ascott Technoetic Art 大师班任教，思考艺术和创作的边界，及其对更广泛社会群体的意义。</p>",
        division: "2021",
        path: "/2021-wanglingjie",
    }, {
        id: 12,
        portrait: {
            src: "/wangyile.jpg",
            alt: "portrait",
        },
        effectPicture: {
            src: "/wangyile.jpg",
            alt: "portrait",
        },
        name: "王亦乐",
        contentHTML: "<p>王亦乐，建筑设计师、键盘手、磊落组合制作人。从小师从上海音乐学院前教授胡天俦，并于2010毕业于澳大利亚悉尼大学建筑系。</p><p>毕业后，就职于中国先锋设计事务所都市实践Urbanus，在深圳和北京参与事务所的展陈和建筑设计工作，亦曾就职于世界顶尖科学艺术教育机构PNSO，担任国际事务总监及英文同声翻译。</p><p>2013年，亦乐与中国资深音乐人、贝斯手王磊组建磊落声音艺术工作室，并同时成立艺术流行组合“磊落”，致力于发展跨界音乐项目合作计划。</p><p>在严格的古典音乐教育和近现代美学研究为基础的前提下，多年系统接触各类音乐类型。成军以来，磊落二人一直持续创作，在不同类型学的范畴里不受牵制地自由摸索着，至此已发行5张全长录音室专辑及多首单曲，并在全国十座城市举办了超过三十场公益音乐创作分享会活动。</p>",
        division: "2021",
        path: "/2021-wangyile",
    }, {
        id: 13,
        portrait: {
            src: "/xuexiaona.jpg",
            alt: "portrait",
        },
        effectPicture: {
            src: "/xuexiaona.jpg",
            alt: "portrait",
        },
        name: "薛晓娜",
        contentHTML: "<p>薛晓娜，曾经的IT白领，目前是一家国际非营利组织的资深项目经理。</p><p>2004年，她在澳大利亚伍伦贡大学获得通信工程专业硕士学位后，回国投入公益事业，成为国际计划（美国）陕西代表处的项目经理，主要负责信息技术类的公益项目。</p><p>特别是在陕西、云南和宁夏促进乡村女童平等参与STEM教育的项目。她参与研发、设计和实施的公益项目已经惠及6万多名乡村儿童和年轻女性，帮助Ta们争取到充分且平等地学习机会。</p>",
        division: "2021",
        path: "/2021-xuexiaona",
    }, {
        id: 14,
        portrait: {
            src: "/yangxin.jpg",
            alt: "portrait",
        },
        effectPicture: {
            src: "/yangxin.jpg",
            alt: "portrait",
        },
        name: "杨欣",
        contentHTML: "<p>杨欣，江河探险家、自然摄影师、四川省绿色江河环境保护促进会会长。</p><p>1984年开始长江摄影和探险考察，1994年-2005年，创建“四川省绿色江河环境保护促进会”，在可可西里建成中国民间第一个自然保护站，致力于可可西里藏羚羊保护。</p><p>2005年-2010年，在长江源持续开展“冰川变化监测”等调查，呼吁关注长江源生态环境的严峻状况。</p><p>2011年-2020年，在长江源建立中国民间第二个自然保护站——长江源水生态环境保护站。通过“垃圾换食品”、“守护斑头雁”等系列项目实施，推动了长江源生态环境保护进程。</p><p>杨欣曾获得“地球奖”、“母亲河奖”、“2006绿色年度人物奖”，并带领他的绿色江河团队几乎获得了中国所有的生态环保类奖项。同时，杨欣用20年的时间完成了7本图册的拍摄、撰写和编辑出版，其中《中国长江》1000张图片，30万文字，为长江最完整和最权威的图册。</p>",
        division: "2021",
        path: "/2021-yangxin",
    }, {
        id: 15,
        portrait: {
            src: "/zhoufang.jpg",
            alt: "portrait",
        },
        effectPicture: {
            src: "/zhoufang.jpg",
            alt: "portrait",
        },
        name: "周芳",
        contentHTML: "<p>周芳（PAUPAU），自然纪录片导演、资深水下影像师、户外探险家、留美管理学博士。</p><p>国际潜水教练协会NAUI潜水教练，中国太平洋学会海洋影视分会秘书长，潜行全球拍摄保育鲨鱼的代表人，因为拍摄大量鲨鱼题材，被媒体称作“全球追鲨鱼的女孩”。</p><p>系列海洋生态纪录片《潜行天下》栏目创始人、总编导，大型系列纪录片《水下中国》《潜行中国》总导演。</p><p>曾执导多部水下纪录片，2018 年执导的全球首部中国大型水下系列纪录片《水下中国》和《潜行中国》均获得国家广电重点扶持项目；2020年执导作品《水下中国》获得国家广电总局优秀纪录片大奖；拍摄过包括自然纪录片《水下中国》 CCTV《蔚蓝之境》 CCTV《国家公园》 电影 《海盗王》 国家博物馆《海底家园》在内的多个水下作品。</p>",
        division: "2021",
        path: "/2021-zhoufang",
    }
];
const videosInit = function () {
    let output = [];
    for (let i = 0; i < data.length; i++) { // 将src补全
        output.push(data[i]);
        output[i].portrait.src = ossPortraitlBaseURL + data[i].portrait.src;
        output[i].effectPicture.src = ossEffectPictureBaseURL + data[i].effectPicture.src;
    }
    return output;
}
module.exports = videosInit();