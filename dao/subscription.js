const fs = require("fs");
function getDate() {
    let myDate = new Date();
    let month = myDate.getMonth() > 9 ? myDate.getMonth() + 1 : "0" + (myDate.getMonth() + 1);
    let date = myDate.getDate() > 9 ? myDate.getDate() : "0" + myDate.getDate();
    return myDate.getFullYear().toString() + month.toString() + date.toString();
}
const subscriptionDAO = function () {
    this.select = function (file) {
        fs.readFile(file, 'utf-8', function (err, data) {
            if (err) {
                return "err";
            }
            else
                return data;
        })
    };
    this.write = function (data) {
        let file = "./" + getDate() + ".txt";
        fs.writeFile(file, data + "\n", { 'flag': 'a' }, (err) => {
            console.log("hello")
            if (err) {
                return "err";
            }
            return "ok";
        })
    }
}

module.exports = subscriptionDAO;