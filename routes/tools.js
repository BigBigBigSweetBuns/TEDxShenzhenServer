var express = require('express');
var router = express.Router();
const Dao = require("../dao/subscription.js");
const subscriptionDAO = new Dao;
const fs = require("fs");

function getDate() {
    let myDate = new Date();
    let month = myDate.getMonth() > 9 ? myDate.getMonth() + 1 : "0" + (myDate.getMonth() + 1);
    let date = myDate.getDate() > 9 ? myDate.getDate() : "0" + myDate.getDate();
    return myDate.getFullYear().toString() + month.toString() + date.toString();
}

const returnFilter = function (boolean) {
    if (boolean)
        return {
            code: 0,
            message: "提交成功",
        }
    else
        return {
            code: 406,
            message: "服务器无法根据客户端请求的内容特性完成请求"
        }
}

router.post('/subscription', function (req, res, next) {
    //todo fs为异步请求需要调整
    const params = req.body;
    const file = "/srv/emailFile/subscription/" + getDate() + ".txt";
    subscriptionDAO.write(params.email, file, (r) => {
        res.json(returnFilter(r))
    });
})
router.post('/unsubscription', function (req, res, next) {
    //todo fs为异步请求需要调整
    const params = req.body;
    const file = "/srv/emailFile/unsubscription/" + getDate() + ".txt";
    subscriptionDAO.write(params.email, file, (r) => {
        res.json(returnFilter(r))
    });
})
// router.post("/download", function (req, res, next) {
//     res.set({
//         "Content-Type": "application/octet-stream",//告诉浏览器这是一个二进制文件
//         "Content-Disposition": "attachment; filename=1.txt"//告诉浏览器这是一个需要下载的文件
//     });
//     fs.createReadStream('./20210423.txt').pipe(res);
// })

module.exports = router;