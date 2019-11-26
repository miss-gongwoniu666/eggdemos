const Controller = require('egg').Controller;

class HomeController extends Controller {
    //  获取/路径下的body文案
    async index() {
        const { ctx } = this;
        // ctx.body = 'welcome to eggjs';
        await ctx.render('/index.tpl');
    }
}
module.exports = HomeController;