const jwt = require('jsonwebtoken');

const NOT_SO_SECRET = 'wrigbsr3745839y608ejh$%^&*GEFehe&*fegrgr7924ht';

function generateToken(username) {
    const payload = { data: { username } };
    const token = jwt.sign(payload, NOT_SO_SECRET, { expiresIn: '1d' });
    return token;
}

function validateToken(token) {
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, NOT_SO_SECRET);
    } catch(err) {
        return null;
    }

    return decodedToken;
}

module.exports = {
    generateToken,
    validateToken,
}


