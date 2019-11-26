const Controller = require('egg').Controller;

class paramsController extends Controller {
    //  获取/路径下的body文案
    async getParams() {
        const {
            ctx
        } = this;
        // 获取/params/:id 下面的id
        const params = ctx.params.id;
        const querySource = ctx.query.source; // ?之后的参数，多个该方法只获取第一个
        const querysFlag = JSON.stringify(ctx.queries.flag); // ?之后的参数，获取所有id的参数

        ctx.body = `获取到的二级参数id=${params}，query参数source=${querySource}， queries参数：${querysFlag}`;

    }
}
module.exports = paramsController;