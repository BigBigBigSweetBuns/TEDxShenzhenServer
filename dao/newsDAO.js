const filter = {
    getDetail: function (data) { // 过滤 文章详情页 所需的数据
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
    },
    getList: function (data) {
        return {
            id: data.id,   // 文章ID
            title: data.title,   // 标题
            introduction: data.introduction,  // 简短介绍
            thumbnail: {            // 主图
                src: data.thumbnail.src,
                alt: data.thumbnail.alt,
            },
            createTS: "",
            path: data.path
        }
    }
}

const newsDAO = function () {
    this.data = require("../data/news.js");
    this.selectId = function (id) { //通过判断 文章id 获取
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id == id) {
                return filter.getDetail(this.data[i]);
            }
        }
        return null;
    };
    this.selectPath = function (path) { // 通过判断 文章路由path 获取
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].path == path) {
                return filter.getDetail(this.data[i]);
            }
        }
        return null;
    };
    this.selectList = function (num, index = 0) {
        let i = this.data.length - 1 - index, n = 1;
        let arr = [];
        while (n <= num && i >= 0) {
            arr.push(filter.getList(this.data[i]));
            i--;
            n++;
        }
        return arr;
    }
}
module.exports = newsDAO;