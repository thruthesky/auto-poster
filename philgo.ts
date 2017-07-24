var fs = require('fs');
var Nightmare = require('nightmare');
var argv = require('yargs').argv;
import * as cheerio from 'cheerio';



var LocalStorage = require('node-localstorage').LocalStorage;
var localStorage = new LocalStorage('./localStroage');


class Philgo {
    nightmare;
    constructor() {

        let v = localStorage.getItem( argv._[2] );
        if ( v == this.today() ) {
            this.log("philgo has been posted already: " + v);
            process.exit();
        }

        this.nightmare = Nightmare({
            // show: true,
            // openDevTools: { mode: 'detach' },
            typeInterval: 10
        });
        this.nightmare.useragent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:54.0) Gecko/20100101 Firefox/54.0");

    }

    log(msg) {
        if (typeof msg !== 'string' && typeof msg !== 'number') {
            msg = JSON.stringify(msg);
        }
        let dt = new Date().toISOString().
            replace(/T/, ' ').      // replace T with a space
            replace(/\..+/, '')     // delete the dot and everything after
        fs.appendFileSync('auto-post.log', `[${dt}] ${msg}` + "\n");
    }


    today() {
        let d = new Date();
        return d.getFullYear() + '-' + ( d.getMonth() + 1 ) + '-' + d.getDate();
    }
    async run() {
        this.log("===> philgo begin");
        try {
            await this.login();
        }
        catch (e) {
            // console.log("error: ");
            this.log("philgo run() catch(e):");
            console.log(e);
            if ( e.message ) this.log(e);
            else this.log(e);
        }
        this.log("philgo finished.");
        process.exit();
    }



    async login() {
        // this.log("philgo login() .......");
        // console.log(argv);
        let redirect = encodeURIComponent("https://www.philgo.com/?module=post&action=write&post_id=" + argv._[2]);
        let url = `https://www.philgo.com/?module=member&action=login_submit&submit=1&url_return=${redirect}&id=${argv._[0]}&password=${argv._[1]}`;
        let html = await this.nightmare
            .goto(url)
            .wait('.post_write input[name="subject"]')
            .wait(500)
            .type('.post_write [name="subject"]', "여러 한인업체에서 돈 훔치고 도망간 피노이 William")
            .type('.post_write [name="content"]', `<img src="https://file.philgo.com/data/upload/8/1711788" class="modal_window">
<p>2017년 7월 17일. 앙헬레스 콜센터에서 회사돈을 횡령하여 도망을 쳤습니다.</p>
<p>조사해 보니, 한국 업체만 찾아다니면서 여러군데에서 돈 문제를 일으키고 도망쳤으며 그 손실액이 상당합니다.</p>
<p>한국에서 일한 적이 있어 한국말을 잘 합니다. 그래서 한국 회사만 찾아다니면서 반복적으로 횡령을 하고 있습니다.</p>
<p>한국에 있을 때 부터 횡령하여 한국에서 추방, 보라카이 한국 여행사, 앙헬레스 식당, 저희 콜센터 등 여러 업체에서 횡령 했음을 확인했고 그 금액이 피해 금액이 막대합니다.</p>
<p>경찰에 2건이 접수되어져 있는 것을 확인했습니다. 하지만 사건 접수만 되어져 있고, 고소는 안되어있는 상태인 것 같습니다.</p>
<p>지금 경찰 신고 접수 중이며 여러가지 증명 서류를 가져 오라는데, 번거롭지만, 꼭 고소를 할 예정입니다.</p>
<p>한국말을 잘해서 틀림없이 또 한국 사람을 등치려고 할 것이므로 유의 해 주시기 바랍니다.</p>
<p>보시면 꼭 경찰서로 연락 부탁드립니다.</p>
<div>이름 : William Marquez Pasamonte 
생년월일 : March 12, 1990
Gender : Male ( often female )</div>
`)
            .click('.post_write_submit')
            .wait(3000)
            .evaluate(() => {
                return document.querySelector('html').innerHTML;
            })
            .then(html => html);

        const $body = cheerio.load(html)('body');
        if ($body.find('.jbutton.plus').length) {
            this.log("post success.");
            localStorage.setItem( argv._[2], this.today() );
        }
        else this.log("post failed.");
    }

}


if (argv._.length < 3) {
    console.log("Input ID, Password, URL");
}
else {
    (new Philgo()).run();
}
