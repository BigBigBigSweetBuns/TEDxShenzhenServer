var whitelist = ['http://localhost:8080', 'http://www.tedxshenzhen.cn', 'http://tedxshenzhen.cn'];
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
module.exports = corsOptions;