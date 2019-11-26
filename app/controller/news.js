const Controller = require('egg').Controller;

class NewsController extends Controller {
    async list() {
        const { ctx, service } = this;
        const page = ctx.query.page || 1;
        const newsList = await service.news.list(page);
        await ctx.render('news/list.tpl', { list: newsList });
        // ctx.body = { id: res.id };
        // ctx.status = 201;
    }
    async gzipList() {
        const { ctx, service } = this;
        const page = ctx.query.page || 1;
        const newsList = await service.news.list(page);
        await ctx.render('news/gziplist.tpl', { list: JSON.stringify(newsList) });
    }


}

module.exports = NewsController;