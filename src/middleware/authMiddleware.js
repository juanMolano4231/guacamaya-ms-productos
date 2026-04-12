const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
    const token = req.cookies?.accessToken;

    if (!token) {
        return res.status(401).json({ message: 'Missing access token' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = {
            id: decoded.sub,
            role: decoded.role
        };

        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
}

module.exports = { authenticate };