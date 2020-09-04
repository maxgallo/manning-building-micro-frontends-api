const createLogger = require('./logger.js');
const { getFailResponse } = require('./responses');
const { handleLoginApi, handleValidateApi, handleSongsApi } = require('./api');

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
        case 'songs':
            response = handleSongsApi(log, headers);
            break;
        default:
            const message = `Sorry, I don't recognise the url: ${path}`;
            log.error(message);
            response = getFailResponse(404, { message });
    }

    callback(null, response)
}

exports.handler = handler;
