const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports.generateToken = (user) => {
    return jwt.sign(
        { id: user.id, username: user.username },
        process.env.SECRET_KEY,
        { expiresIn: '1h' }
    );
};
