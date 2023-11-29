module.exports = (err, req, res, next)=>{
    console.log("loglama", err.message); // loglama => vinston
    next(err)
};