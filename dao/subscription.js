const fs = require("fs");

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
    this.write = function (data, file, callback) {
        fs.writeFile(file, data + "\n", { 'flag': 'a' }, (err) => {
            if (err) {
                console.log(err);
                callback(false)
            }
            callback(true)
        })
    }
}

module.exports = subscriptionDAO;