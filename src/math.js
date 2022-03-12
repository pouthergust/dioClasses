class Math {
    sum(a, b) {
        return a + b;
    }
    multiply(a, b, callback) {
        setTimeout(() => {
            callback(a * b);
        }, 2500);
    }
    printSum(req, res, a, b) {
        res.load('index', a + b);
    };
};
module.exports = Math;