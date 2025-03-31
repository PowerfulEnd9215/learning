const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const { promisify } = require('util');

exports.protect = async (req, res, next) => {
    let token;
    
    // Check if token is provided in the Authorization header
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    // If no token, return an error
    if (!token) {
        return res.status(401).json({
            status: 'fail',
            message: 'You are not logged in! Please log in to get access.'
        });
    }

    // Verify the token
    try {
        const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
        
        // Check if user still exists
        const currentUser = await User.findById(decoded.id);
        if (!currentUser) {
            return res.status(401).json({
                status: 'fail',
                message: 'The user belonging to this token no longer exists.'
            });
        }

        // Grant access to protected route
        req.user = currentUser;
        next();
    } catch (err) {
        return res.status(401).json({
            status: 'fail',
            message: 'Invalid token. Please log in again.'
        });
    }
};

exports.restrictTo = (...roles) => {
    return (req, res, next) => {
        // Check if the user has the required role
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                status: 'fail',
                message: 'You do not have permission to perform this action.'
            });
        }
        next();
    };
};