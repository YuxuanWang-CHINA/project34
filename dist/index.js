"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var cheerio = require("cheerio");
var main = (function () {
    axios_1["default"]
        .get('http://news.baidu.com/')
        .then(function (res) {
        var data = res.data;
        getHotnews(data);
        return;
    })["catch"](function (e) {
        console.log(e);
        return;
    });
})();
var getHotnews = function (data) {
    var $ = cheerio.load(data);
    var re = [];
    $('#pane-news ul li a').each(function (index, element) {
        re.push({ index: index, headline: $(element).text(), link: $(element).attr('href') });
    });
    console.log(re);
};
//# sourceMappingURL=index.js.map