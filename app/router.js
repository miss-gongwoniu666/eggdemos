module.exports = app => {
  const { router, controller } = app;
  router.get('/',controller.home.index);
  // 获取列表文件
  router.get('/news',controller.news.list);
  // 列表详情
  // router.get('/news/:id',controller.news.detail)
}