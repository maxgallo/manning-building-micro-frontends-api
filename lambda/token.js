const jwt = require('jsonwebtoken');

const NOT_SO_SECRET = 'wrigbsr3745839y608ejh$%^&*GEFehe&*fegrgr7924ht';

function generateToken(username) {
    const payload = { username };
    const token = jwt.sign(payload, NOT_SO_SECRET);
    return token;
}

module.exports = {
    generateToken,
}


