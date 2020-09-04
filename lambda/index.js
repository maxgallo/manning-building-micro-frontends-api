const createLogger = require('./logger.js');
const { generateToken, validateToken } = require('./token');
const { getSuccessResponse, getErrorResponse, getFailResponse } = require('./responses');

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
        return getFailResponse(401, { message });
    }

    const tokenRegex = /bearer\s(.*)/i;
    let token;
    try {
        [, token] = headers.Authorization.match(tokenRegex);
    } catch(e) {
        const message = 'An error occurred while parsing the Authorization header';
        log.error(message)
        return getFailResponse(401, { message })
    }

    const isTokenValid = validateToken(token);

    if (!isTokenValid) {
        const message = 'JWT token is not valid';
        log.error(message)
        return getFailResponse(401, { message })
    }

    return null;
}

function handleValidateApi(log, headers) {
    const error = validateRequest(log, headers);
    if (error) {
        return error;
    }

    return getSuccessResponse(200, {});
}

function handleMyMusicApi() {

}


async function handler(event, context, callback) {
    const log = createLogger();
    const { path, body, headers } = event;
    log.info(`New request at path ${path}`);

    const apiType = path ? path.replace('/api/', '') : '';

    let response = {};
    switch (apiType) {
        case 'login':
            response = handleLoginApi(log, body);
            break;
        case 'validate':
            response = handleValidateApi(log, headers);
            break;
        case 'mymusic':
            response = handleMyMusicApi(log);
            break;
        default:
            const message = `Sorry, I don't recognise the url: ${path}`;
            log.error(message);
            response = getFailResponse(404, { message });
    }

    callback(null, response)
}

exports.handler = handler;
