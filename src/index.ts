import { default as axios } from 'axios';
import * as cheerio from 'cheerio';

let main = (function(): void {
    axios
        .get('http://news.baidu.com/')
        .then((res) => {
            let data: string = res.data;
            // console.log(data);
            getHotnews(data);
            return;
        })
        .catch((e) => {
            console.log(e);
            return;
        });
})();

let getHotnews = function(data: string) {
    let $ = cheerio.load(data);
    let re = [];
    $('#pane-news ul li a').each((index, element) => {
        re.push({ index: index, headline: $(element).text(), link: $(element).attr('href') });
    });
    console.log(re);
};
