const { getSuccessResponse, getFailResponse } = require('./responses');
const { generateToken, validateToken } = require('./token');

function handleLoginApi(log, requestBody) {
    const credentials = {
        'bernhard.riemann': '1866',
        'alan.turing': '1954',
    };

    let isAuthorized = false;
    let body = {};

    try {
        body = JSON.parse(requestBody);
        if (credentials[body.username] === body.password) {
            isAuthorized = true;
        }
    } catch (err) {
        log.error('An error occurred while parsing body request');
    }

    if (!isAuthorized) {
        const message = 'Sorry, your credentials are not valid';
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
    // TODO: return songs
    console.log(decodedToken);
    return getSuccessResponse(200, { songs: [] })
}

module.exports = {
    handleLoginApi,
    handleSongsApi,
    handleValidateApi,
};
