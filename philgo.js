var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Nightmare = require('nightmare');
var argv = require('yargs').argv;
var Philgo = (function () {
    function Philgo() {
        this.nightmare = Nightmare({
            // show: true,
            // openDevTools: { mode: 'detach' },
            typeInterval: 20
        });
        this.nightmare.useragent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:54.0) Gecko/20100101 Firefox/54.0");
    }
    Philgo.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.login()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.post()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.end()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Philgo.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var redirect, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("login()");
                        redirect = encodeURIComponent(argv._[2]);
                        url = "https://www.philgo.com/?module=member&action=login_submit&submit=1&url_return=" + redirect + "&id=" + argv._[0] + "&password=" + argv._[1];
                        console.log("url: ", url);
                        return [4 /*yield*/, this.nightmare.goto(url)
                                .wait('.login-simple-message')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Philgo.prototype.post = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('post()');
                        return [4 /*yield*/, this.nightmare
                                .wait('.post_write [name="subject"]')
                                .insert('.post_write [name="subject"]', "여러 한인업체에서 돈 훔치고 도망간 피노이 William")
                                .insert('.post_write [name="content"]', "<img src=\"https://file.philgo.com/data/upload/8/1711788\" class=\"modal_window\">\n<p>2017\uB144 7\uC6D4 17\uC77C. \uC559\uD5EC\uB808\uC2A4 \uCF5C\uC13C\uD130\uC5D0\uC11C \uD68C\uC0AC\uB3C8\uC744 \uD6A1\uB839\uD558\uC5EC \uB3C4\uB9DD\uC744 \uCCE4\uC2B5\uB2C8\uB2E4.</p>\n<p>\uC870\uC0AC\uD574 \uBCF4\uB2C8, \uD55C\uAD6D \uC5C5\uCCB4\uB9CC \uCC3E\uC544\uB2E4\uB2C8\uBA74\uC11C \uC5EC\uB7EC\uAD70\uB370\uC5D0\uC11C \uB3C8 \uBB38\uC81C\uB97C \uC77C\uC73C\uD0A4\uACE0 \uB3C4\uB9DD\uCCE4\uC73C\uBA70 \uADF8 \uC190\uC2E4\uC561\uC774 \uC0C1\uB2F9\uD569\uB2C8\uB2E4.</p>\n<p>\uD55C\uAD6D\uC5D0\uC11C \uC77C\uD55C \uC801\uC774 \uC788\uC5B4 \uD55C\uAD6D\uB9D0\uC744 \uC798 \uD569\uB2C8\uB2E4. \uADF8\uB798\uC11C \uD55C\uAD6D \uD68C\uC0AC\uB9CC \uCC3E\uC544\uB2E4\uB2C8\uBA74\uC11C \uBC18\uBCF5\uC801\uC73C\uB85C \uD6A1\uB839\uC744 \uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.</p>\n<p>\uD55C\uAD6D\uC5D0 \uC788\uC744 \uB54C \uBD80\uD130 \uD6A1\uB839\uD558\uC5EC \uD55C\uAD6D\uC5D0\uC11C \uCD94\uBC29, \uBCF4\uB77C\uCE74\uC774 \uD55C\uAD6D \uC5EC\uD589\uC0AC, \uC559\uD5EC\uB808\uC2A4 \uC2DD\uB2F9, \uC800\uD76C \uCF5C\uC13C\uD130 \uB4F1 \uC5EC\uB7EC \uC5C5\uCCB4\uC5D0\uC11C \uD6A1\uB839 \uD588\uC74C\uC744 \uD655\uC778\uD588\uACE0 \uADF8 \uAE08\uC561\uC774 \uD53C\uD574 \uAE08\uC561\uC774 \uB9C9\uB300\uD569\uB2C8\uB2E4.</p>\n<p>\uACBD\uCC30\uC5D0 2\uAC74\uC774 \uC811\uC218\uB418\uC5B4\uC838 \uC788\uB294 \uAC83\uC744 \uD655\uC778\uD588\uC2B5\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uC0AC\uAC74 \uC811\uC218\uB9CC \uB418\uC5B4\uC838 \uC788\uACE0, \uACE0\uC18C\uB294 \uC548\uB418\uC5B4\uC788\uB294 \uC0C1\uD0DC\uC778 \uAC83 \uAC19\uC2B5\uB2C8\uB2E4.</p>\n<p>\uC9C0\uAE08 \uACBD\uCC30 \uC2E0\uACE0 \uC811\uC218 \uC911\uC774\uBA70 \uC5EC\uB7EC\uAC00\uC9C0 \uC99D\uBA85 \uC11C\uB958\uB97C \uAC00\uC838 \uC624\uB77C\uB294\uB370, \uBC88\uAC70\uB86D\uC9C0\uB9CC, \uAF2D \uACE0\uC18C\uB97C \uD560 \uC608\uC815\uC785\uB2C8\uB2E4.</p>\n<p>\uD55C\uAD6D\uB9D0\uC744 \uC798\uD574\uC11C \uD2C0\uB9BC\uC5C6\uC774 \uB610 \uD55C\uAD6D \uC0AC\uB78C\uC744 \uB4F1\uCE58\uB824\uACE0 \uD560 \uAC83\uC774\uBBC0\uB85C \uC720\uC758 \uD574 \uC8FC\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.</p>\n<p>\uBCF4\uC2DC\uBA74 \uAF2D \uACBD\uCC30\uC11C\uB85C \uC5F0\uB77D \uBD80\uD0C1\uB4DC\uB9BD\uB2C8\uB2E4.</p>\n<div>\uC774\uB984 : William Marquez Pasamonte \n\uC0DD\uB144\uC6D4\uC77C : March 12, 1990\nGender : Male ( often female )</div>\n")
                                .click('.post_write_submit')
                                .wait('.jbutton.plus')];
                    case 1:
                        _a.sent();
                        console.log('post() done');
                        return [2 /*return*/];
                }
            });
        });
    };
    Philgo.prototype.end = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("end()");
                return [2 /*return*/, this.nightmare.end().then(function () { })];
            });
        });
    };
    return Philgo;
}());
if (argv._.length < 3) {
    console.log("Input ID, Password, URL");
}
else {
    (new Philgo()).run();
}
