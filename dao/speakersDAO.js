const filter = {
    getDetail: function (data) { // 过滤 文章详情页 所需的数据
        return {
            id: data.id,   // ID
            protarit: {
                src: data.protarit.src,
                alt: data.protarit.alt,
            },
            contentHTML: data.contentHTML,
            path: data.path,
        }
    },
    getList: function (data) {
        return {
            id: data.id,   // 文章ID
            name: data.name,   // speaker 姓名 
            protarit: {            // 肖像 
                src: data.protarit.src,
                alt: data.protarit.alt,
            },
            path: data.path
        }
    }
}
const speakersDAO = function () {
    this.data = require("../data/speakers.js");
    this.selectId = function (id) { // 判断 id 获取
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id == id) {
                return filter.getDetail(this.data[i]);
            }
        }
        return null;
    };
    this.selectPath = function (path) { // 判断 path 获取
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].path == path) {
                return filter.getDetail(this.data[i]);
            }
        }
        return null;
    };
    this.selectList = function (num, index = 0) { // 展示所有
        let i = this.data.length - 1 - index, n = 1;
        let arr = [];
        while (n <= num && i >= 0) {
            arr.push(filter.getList(this.data[i]));
            i--;
            n++;
        }
        return arr;
    }
    this.selectListDivision = function (division) {
        let i = this.data.length - 1;// 倒序递增
        let arr = [];
        while (i >= 0) {
            for (let y = 0; y < division.length; y++) {
                if (division[y] == this.data[i].division) {
                    arr.push(filter.getList(this.data[i]));
                }
            }
            i--;
        }
        return arr;
    }
}
module.exports = speakersDAO