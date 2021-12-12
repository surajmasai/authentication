module.exports = function (permittedRoles) {

    return function (req, res, next) {
        //first get the user from the req
        user = req.user.user

        //check if the roles on the user have any of the role oin permitted
        isAllowed = false;
        user.roles.map(role => {

            if (permittedRoles.includes(role)) {

                isAllowed = true;
            }
        });

        //if not then throw an error

        if (!isAllowed)

            return res.status(401).json({
                status: "failed",
                message: "you are not allowed to acces this",
            });

        //if yes then next()

        next();
    }
}