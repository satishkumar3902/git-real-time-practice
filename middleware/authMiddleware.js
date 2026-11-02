
const authMiddleware = (req, res, next) => {
    console.log("Request received:", req.method, req.url);
    console.log("hello world");
    next();
};

module.exports = authMiddleware;
