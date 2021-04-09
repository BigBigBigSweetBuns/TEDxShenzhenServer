var express = require('express');
var router = express.Router();
const Dao = require("../dao/speakersDAO");
const speakersDAO = new Dao;
/* GET events listing. */
const returnFilterArr = function (data) {
    if (typeof data == "object" && data.length > 0)
        return {
            code: 0,
            message: "获取成功",
            result: data,
        }
    else
        return {
            code: 406,
            message: "服务器无法根据客户端请求的内容特性完成请求"
        }
}
const returnFilterObj = function (obj) {
    var arr = Object.getOwnPropertyNames(obj);
    if (arr.length != 0)
        return {
            code: 0,
            message: "获取成功",
            result: obj,
        }
    else
        return {
            code: 406,
            message: "服务器无法根据客户端请求的内容特性完成请求"
        }
}
const pageNum = 12;

router.get('/', function (req, res, next) {
    const params = req.query;
    let data = null;
    if (params.path) {
        data = speakersDAO.selectPath(params.path);
    } else if (params.id) {
        data = speakersDAO.selectId(params.id);
    }
    res.json(returnFilterObj(data));
})
router.get('/list', function (req, res, next) {
    const params = req.query;
    let index = (params.page - 1) * pageNum;// 锁定每次请求数量为10
    let data = null;
    data = speakersDAO.selectList(pageNum, index);
    res.json(returnFilterArr(data));
});
router.get('/list/division', function (req, res, next) {
    const params = req.query;
    const division = params.division.split(",");
    console.log(division);
    let index = Infinity
    if (params.page && params.page - 1 > 0) {
        index = (params.page - 1) * pageNum;// 锁定每次请求数量
    }
    let data = null;
    data = speakersDAO.selectListDivision(division);
    res.json(returnFilterArr(data));
});

module.exports = router;