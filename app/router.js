module.exports = app => {
    const { router, controller, middleware } = app;

    const gzip = middleware.gzip({ threshold: 200 });
    router.get('/', controller.home.index);
    // 获取url参数ID和query参数
    router.get('/param/:id', controller.params.getParams);
    // 获取列表文件
    router.get('/news', controller.news.list);
    // 路由中使用中间件
    router.get('/gzip', gzip, controller.news.gzipList);
}