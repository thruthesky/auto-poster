var Nightmare = require('nightmare');
var argv = require('yargs').argv;



class Facebook {
    nightmare;
    constructor() {
        this.nightmare = Nightmare({
            // show: true,
            // openDevTools: { mode: 'detach' },
            typeInterval: 20
        });
        this.nightmare.useragent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:54.0) Gecko/20100101 Firefox/54.0");
    }


    async run() {
        await this.login();
        await this.post();
        await this.end();
    }

    async login() {
        // console.log("login()");
        await this.nightmare.goto("https://m.facebook.com")
            .wait('[name="email"]')
            .type('[name="email"]', argv._[0])
            .type('[name="pass"]', argv._[1])
            .click('[name="login"]')
            .wait('img[alt*="Nam"]')
            .evaluate(() => { })
            .then(() => { });
        return;
    }

    async post() {
        // console.log('post()');
        return await this.nightmare
            .goto( argv._[2])
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
                // console.log('Done with url: ', argv._[2]);
            });
    }

    async end() {
        // console.log("end()");
        return this.nightmare.end().then(() => { });
    }
}


if (argv._.length < 3) {
    console.log("Input ID, Password, URL");
}
else {
    (new Facebook()).run();
}
