var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var Nightmare = require('nightmare');
var argv = require('yargs').argv;
class Facebook {
    constructor() {
        this.nightmare = Nightmare({
            typeInterval: 20
        });
        this.nightmare.useragent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:54.0) Gecko/20100101 Firefox/54.0");
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.login();
            yield this.post();
            yield this.end();
        });
    }
    login() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.nightmare.goto("https://m.facebook.com")
                .wait('[name="email"]')
                .type('[name="email"]', argv._[0])
                .type('[name="pass"]', argv._[1])
                .click('[name="login"]')
                .wait('img[alt*="Nam"]')
                .evaluate(() => { })
                .then(() => { });
            return;
        });
    }
    post() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('post()');
            return yield this.nightmare
                .goto(argv._[2])
                .wait(3000)
                .wait('textarea')
                .wait(3000)
                .type('textarea', 'http://www.philgo.com/?1273287271')
                .wait(2500)
                .click('[name="view_post"]')
                .wait(3000)
                .evaluate(() => {
            })
                .then(() => {
                console.log('Done with url: ', argv._[2]);
            });
        });
    }
    end() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.nightmare.end().then(() => { });
        });
    }
}
if (argv._.length < 3) {
    console.log("Input ID, Password, URL");
}
else {
    (new Facebook()).run();
}
//# sourceMappingURL=facebook.js.map