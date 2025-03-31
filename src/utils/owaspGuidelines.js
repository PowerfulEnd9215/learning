module.exports = {
    hashPassword: function(password) {
        const bcrypt = require('bcrypt');
        const saltRounds = 10;
        return bcrypt.hashSync(password, saltRounds);
    },

    validatePassword: function(password, hashedPassword) {
        const bcrypt = require('bcrypt');
        return bcrypt.compareSync(password, hashedPassword);
    },

    sanitizeInput: function(input) {
        const sanitizeHtml = require('sanitize-html');
        return sanitizeHtml(input, {
            allowedTags: [],
            allowedAttributes: {}
        });
    },

    validateEmail: function(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    generateSecureToken: function() {
        const crypto = require('crypto');
        return crypto.randomBytes(32).toString('hex');
    }
};