var express = require('express');
var router = express.Router();
const Dao = require("../dao/newsDAO");
const newsDAO= new Dao;
/* GET events listing. */
router.get('/', function (req, res, next) {
    const params = req.query;
    let data = null;
    if (params.path) {
        data = newsDAO.selectPath(params.path.toLowerCase());
    } else if (params.id) {
        data = newsDAO.selectId(params.id);
    }
    if (data && typeof data == "object") {
        res.json({
            code: 0,
            message: "获取成功",
            result: data,
        });
    } else {
        res.json({
            code: 406,
            message: "服务器无法根据客户端请求的内容特性完成请求"
        })
    }
});

module.exports = router;