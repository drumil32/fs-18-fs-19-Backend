export const loggingMiddleware = (req, res, next) => {
    console.log('From Middleware : Request is comming');
    console.log('Request Ip : ' + req.ip);
    console.log('Request Method : ' + req.method);
    next();
    console.log('From Middleware : Response is going');
}