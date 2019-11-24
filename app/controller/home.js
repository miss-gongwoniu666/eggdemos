const Controller = require('egg').Controller;

class HomeController extends Controller {
  //  获取/路径下的body文案
  async index(){
    const {ctx} = this;
    ctx.body = 'hello world';
  }
}
module.exports = HomeController;