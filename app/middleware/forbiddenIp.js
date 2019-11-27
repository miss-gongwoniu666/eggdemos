module.exports = options => {
    return async function forbiddenIp(ctx, next) {
        console.log('forbidden', 333);
        var host = ctx.hostname; // ip
        const result = options.ip.some((item) => {
            return item === host;
        })
        if (result) {
            ctx.body = '你的域名被禁止访问了';
            ctx.status = 403;
        } else {
            await next();
            console.log('forbidden', 444)
        }
    }
}