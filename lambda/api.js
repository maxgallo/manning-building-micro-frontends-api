const { getSuccessResponse, getFailResponse } = require('./responses');
const { generateToken, validateToken } = require('./token');
const { credentials, userSongs } = require('./users');

function handleLoginApi(log, requestBody) {
    let body = {};

    try {
        body = JSON.parse(requestBody);
    } catch (err) {
        log.error('An error occurred while parsing body request');
    }

    if (!body.username || !body.password) {
        const message = 'I wasn\'t able to find credentials in the body';
        log.error(message);
        return getFailResponse(401, { message });
    }

    if (credentials[body.username] !== body.password) {
        const message = 'Sorry, the credentials are not valid';
        log.error(message);
        return getFailResponse(401, { message });
    }

    const token = generateToken(body.username);
    return getSuccessResponse(200, { token });
}

function validateRequest(log, headers) {
    if (!headers || !headers.Authorization) {
        const message = 'Missing Authorization header';
        log.error(message)
        return [getFailResponse(401, { message })];
    }

    const tokenRegex = /bearer\s(.*)/i;
    let token;
    try {
        [, token] = headers.Authorization.match(tokenRegex);
    } catch(e) {
        const message = 'An error occurred while parsing the Authorization header';
        log.error(message)
        return [getFailResponse(401, { message })]
    }

    const decodedToken = validateToken(token);

    if (!decodedToken) {
        const message = 'JWT token is not valid';
        log.error(message)
        return [getFailResponse(401, { message })]
    }

    return [null, decodedToken];
}

function handleValidateApi(log, headers) {
    const [error] = validateRequest(log, headers);
    if (error) {
        return error;
    }

    return getSuccessResponse(200, {});
}

function handleSongsApi(log, headers) {
    const [error, decodedToken] = validateRequest(log, headers);
    if (error) {
        return error;
    }
    const { data: {username} } = decodedToken;

    const songs = userSongs[username] || [];

    if (songs.length <= 0) {
        log.info(`No songs found for user: "${username}"`)
    }
    return getSuccessResponse(200, { songs })
}

module.exports = {
    handleLoginApi,
    handleSongsApi,
    handleValidateApi,
};
