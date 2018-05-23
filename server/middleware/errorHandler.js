exports.logErrors = (err, req, res, next) => {
    console.error("<------------------------LOG ERRORS HIT ------------------->");
    console.error(err.stack);
    next(err);
};

exports.erroHandler =  (err, req, res, next) => {
    res.status(500);
    res.render("error", { error: err });
};
