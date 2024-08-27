export const loggingMiddleware = (req, res, next) => {
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    console.log('From Middleware : Request is comming');
    console.log('Request Ip : ' + req.ip);
    console.log('Request Method : ' + req.method);
    console.log(ip);
    next();
    console.log('From Middleware : Response is going');
}