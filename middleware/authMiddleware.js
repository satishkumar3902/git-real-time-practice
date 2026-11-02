
const authMiddleware = (req, res, next) => {
    console.log("Request received:", req.method, req.url);
    next();
};

module.exports = authMiddleware;
