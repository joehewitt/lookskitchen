
var appjs = require('app.js');

module.exports = function(server, conf) {
    var app = new appjs.App({
        title: "Looks Kitchen Sink",
        client: "lookskitchen/lib/lookskitchen",
        cdn: conf.cdn,
        viewport: "width=768",
        webAppCapable: true,
        loader: "dynamic"
    });

    server.get(/^\/.*$/, app.route());
}
