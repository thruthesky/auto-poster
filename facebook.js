"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
var Nightmare = require('nightmare');
var argv = require('yargs').argv;
const cheerio = require("cheerio");
var LocalStorage = require('node-localstorage').LocalStorage;
let localStorage = new LocalStorage('./localStroage');
var options = [];
class Facebook {
    constructor() {
        let v = localStorage.getItem(argv._[2]);
        if (v == this.today()) {
            this.log("facebook has been posted already for: " + v);
            process.exit();
        }
        this.nightmare = Nightmare({
            show: true,
            openDevTools: { mode: 'detach' },
            typeInterval: 20
        });
        this.nightmare.useragent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:54.0) Gecko/20100101 Firefox/54.0");
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            this.log("facebook begin: " + argv._[2]);
            yield this.login();
            yield this.post();
            yield this.end();
            this.log("facebook end");
        });
    }
    login() {
        return __awaiter(this, void 0, void 0, function* () {
            let html = yield this.nightmare.goto("https://m.facebook.com")
                .wait('[name="email"]')
                .type('[name="email"]', argv._[0])
                .type('[name="pass"]', argv._[1])
                .click('[name="login"]')
                .wait('img[alt*="Nam"]')
                .evaluate(() => {
                return document.querySelector('html').innerHTML;
            })
                .then(html => html);
            const $body = cheerio.load(html)('body');
            let txt = $body.find('input[type="submit"]').val();
            if (txt == 'OK') {
                this.log("login success");
            }
            return;
        });
    }
    post() {
        return __awaiter(this, void 0, void 0, function* () {
            let html = yield this.nightmare
                .goto(argv._[2])
                .wait('textarea')
                .type('textarea', 'http://witheng.com/william/index.html')
                .click('[name="view_post"]')
                .wait(3000)
                .evaluate(() => {
                return document.querySelector('html').innerHTML;
            })
                .then(html => html);
            const $body = cheerio.load(html)('body');
            if ($body.find('[role="article"] > h3 > a')) {
                let txt = $body.find('[role="article"] > h3 > a').text();
                console.log("text: ", txt);
                if (txt.indexOf("You have ") != -1) {
                    this.log("facebook post success but pending.");
                    localStorage.setItem(argv._[2], this.today());
                }
            }
            else if ($body.find('abbr')) {
                let txt = $body.find('abbr').eq(0).text();
                if (txt == 'Just now') {
                    this.log("facebook post success.");
                    localStorage.setItem(argv._[2], this.today());
                }
            }
        });
    }
    end() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.nightmare.end().then(() => { });
        });
    }
    log(msg) {
        if (typeof msg !== 'string' && typeof msg !== 'number') {
            msg = JSON.stringify(msg);
        }
        let dt = new Date().toISOString().
            replace(/T/, ' ').
            replace(/\..+/, '');
        fs.appendFileSync('auto-post.log', `[${dt}] ${msg}` + "\n");
    }
    today() {
        let d = new Date();
        return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
    }
}
options = argv._;
if (options.length < 3) {
    console.log("Input ID, Password, URL !");
}
else {
    (new Facebook()).run();
}
//# sourceMappingURL=facebook.js.map