const isJSON = require('koa-is-json');
const zlib = require('zlib');

module.exports = options => {
    return async function gzip(ctx, next) {
        console.log('gzip', 111);
        await next();
        console.log('gzip', 222);
        // 后续中间件执行完成后将响应体转换成 gzip
        let body = ctx.body;
        // console.log('ctx.body', ctx.body);
        if (!body) return;
        console.log('ctx.length', ctx.length);

        // 支持 options.threshold
        if (options.threshold && ctx.length < options.threshold) return;

        if (isJSON(body)) body = JSON.stringify(body);
        // 设置 gzip body，修正响应头
        const stream = zlib.createGzip();
        stream.end(body);
        ctx.body = stream;
        // console.log(stream, '压缩之后');
        ctx.set('Content-Encoding', 'gzip');
    };
};