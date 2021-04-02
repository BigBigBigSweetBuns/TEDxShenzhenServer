const EventsDAO = function () {
    this.eventsData = require("../data/events.js"); //  数组
    this.selectId = function (id) {
        for (let i = 0; i < this.eventsData.length; i++) {
            if (this.eventsData[i].id == id) {
                return this.getArticleDetail(i);
            }
        }
        return null;
    };
    this.getArticleDetail = function (index) { // 获取数组的索引, 返回文章页所需的对象
        const element = this.eventsData[index];
        return {
            id: element.id,   // 文章ID
            banner: {
                src: element.banner.src,
                alt: element.banner.alt,
            },
            title: element.title,   // 标题
            article: {
                type: element.article.type,
                src: element.article.src,
            },
            path: element.path,
        }
    }
    this.selectList = function (pageNum) {
        let outputArr = [];
        for (let i = eventsData; i; i++) {
            outputArr.push(this.selectCard(i))

        }
        return outputArr;
    };
    this.selectCard = function (index) {
        return {
            id: element[index].id,   // 文章ID
            title: element[index].title,   // 标题
            introduction: element[index].introduction,  // 简短介绍
            thumbnail: {            // 主图
                src: element[index].thumbnail.src,
                alt: element[index].thumbnail.alt,
            },
            path: element.path
        }
    };
    this.selectCardId = function (id) {
        for (let i = 0; i < eventsData.length; i++) {
            const element = array[i];

            if (element.id == id) {
                return {
                    id: element.id,   // 文章ID
                    title: element.title,   // 标题
                    introduction: element.introduction,  // 简短介绍
                    thumbnail: {            // 主图
                        src: element.thumbnail.src,
                        alt: element.thumbnail.alt,
                    },
                }
            }
        }
        return code == 1;
    };
};
module.exports = EventsDAO;