module.exports = {
    keys: 'gongjurui',
    // this.config.news
    news: {
        pageSize: 5,
        serverUrl: 'https://hacker-news.firebaseio.com/v0',
    },
    // 配置： view模版插件
    view: {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.tpl': 'nunjucks',
        },
    },
    // 配置 需要的中间件，数组顺序即为中间件的加载顺序 todo
    // middleware: ['gzip'],

    // // 配置 gzip 中间件的配置
    // gzip: {
    //     threshold: 1024, // 小于 1k 的响应体不压缩
    // },
    middleware: ['forbiddenIp'],
    forbiddenIp: {
        ip: ['localhost']
    }
};