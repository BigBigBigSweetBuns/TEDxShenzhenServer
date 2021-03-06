const filter = {
    getDetail: function (data) { // 过滤 文章详情页 所需的数据
        return {
            id: data.id,   // 视频ID
            title: data.title,   // 标题
            contentHTML: data.contentHTML, // 视频介绍
            createTS: data.createTS,  // 创建时间
            video: {
                type: data.video.type,
                src: data.video.src,
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
            createTS: data.createTS,
            path: data.path
        }
    }
}
const videosDAO = function () {
    this.data = require("../data/videos.js");
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
    this.selectListAuthorID = function (authorID) { // 通过判断 作者id 获取
        let arr = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].authorID == authorID) {
                arr.push(filter.getList(this.data[i]));
            }
        }
        return arr;
    };
    this.selectListDivision = function (page_num, index = 0, division) { // index 为展示过数量,当前应展示第几个
        let i = this.data.length - 1;// 倒序递增
        let n = 1; // 展示的数量计数
        let arr = [];
        if (index < i + 1) {  //当跳过的数小于总长度
            while (n <= page_num && i >= 0) {
                for (let y = 0; y < division.length; y++) {
                    if (division[y] == this.data[i].division) {
                        if (index > 0) {
                            index--;
                        } else {
                            arr.push(filter.getList(this.data[i]));
                            n++;
                        }
                        break;
                    }
                }
                i--;
            }

        }
        return arr;
    }
}
module.exports = videosDAO;