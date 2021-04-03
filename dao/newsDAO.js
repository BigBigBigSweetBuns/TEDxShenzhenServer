const filter = {
    getArticleDetail: function (data) { // 过滤 文章详情页 所需的数据
        return {
            id: data.id,   // 文章ID
            banner: {
                src: data.banner.src,
                alt: data.banner.alt,
            },
            title: data.title,   // 标题
            createTS: "",
            article: {
                type: data.article.type,
                src: data.article.src,
            },
            path: data.path,
        }
    }
}

const newsDAO = function () {
    this.data = require("../data/news.js");
    this.selectId = function (id) { //通过判断 文章id 获取
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id == id) {
                return filter.getArticleDetail(this.data[i]);
            }
        }
        return null;
    };
    this.selectPath = function (path) { // 通过判断 文章路由path 获取
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].path == path) {
                return filter.getArticleDetail(this.data[i]);
            }
        }
        return null;
    };
    this.selectList = function (pageNum) {
        return arr;
    }
}
module.exports = newsDAO;