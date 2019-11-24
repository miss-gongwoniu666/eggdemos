
const { Service } = require('egg');
class NewsService extends Service {
  // 获取service的list数据
  async list(page = 1) {
    const { serverUrl, pageSize } = this.config.news;
    const {data} = await this.ctx.curl('https://registry.npm.taobao.org/egg/latest', {
      // data: {
      //   orderBy: '"$key"',
      //   startAt: `"${pageSize * (page - 1)}"`,
      //   endAt: `"${pageSize * page - 1}"`,
      // },
      timeout: 3000,
      dataType: 'json',
    });
    const {maintainers} =data;

    return maintainers;
  };

}

module.exports = NewsService;