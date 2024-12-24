const jwt = require('jsonwebtoken');
const { CustomException } = require('../utils');

const authenticate = (request, response, next) => {
    try {
    // Extract the accessToken from cookies
        const { accessToken } = request.cookies;

        if (!accessToken) {
            throw CustomException('No access token provided. Access denied!', 401);
        }

        // Verify the token
        const verification = jwt.verify(accessToken, process.env.JWT_SECRET);
        if (!verification) {
            throw CustomException('Invalid token. Access denied!', 401);
        }

        // Attach the user ID to the request object for downstream use
        request.userID = verification._id;

        // Proceed to the next middleware
        return next();
    } catch (err) {
        const status = err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError' ? 401 : 500;
        const message =
            err.name === 'TokenExpiredError' ? 'Token expired. Please log in again!' :
                err.message || 'Authentication failed!';

        return response.status(status).send({
            error: true,
            message
        });
    }
};

module.exports = authenticate;
