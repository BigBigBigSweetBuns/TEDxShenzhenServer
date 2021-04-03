var express = require('express');
var router = express.Router();
const Dao = require("../dao/newsDAO");
const newsDAO = new Dao;
/* GET events listing. */
const returnFilter = function (data) {
    if (data && typeof data == "object" && data.length > 0)
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
router.get('/list', function (req, res, next) {
    const params = req.query;
    let pageNum = 3;
    let index = (params.page - 1) * pageNum;// 锁定每次请求数量为10
    let data = null;
    data = newsDAO.selectList(pageNum, index);
    res.json(returnFilter(data));
});

module.exports = router;