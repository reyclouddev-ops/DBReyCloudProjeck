const ApiKey =
require("./apikey");

module.exports = function(req,res,next){

    const key =
        req.headers["x-api-key"];

    if(!key)
        return res.status(401).json({
            success:false,
            message:"API KEY REQUIRED"
        });

    const data =
        ApiKey.verify(key);

    if(!data)
        return res.status(403).json({
            success:false,
            message:"API KEY INVALID"
        });

    req.user=data;

    next();

}
