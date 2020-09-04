const createLogger = require('./logger.js');

const getResponse = (statusCode, messageTemplate) => message => {
    const stringyfiedMessage = (typeof message === 'string')
        ? message
        : JSON.stringify(message);

    return {
        statusCode: statusCode ,
        headers: {
            'Content-Type': 'application/json',
        },
        body: messageTemplate.replace('__MESSAGE__', stringyfiedMessage)
    }
};

const getErrorResponse = getResponse(500, '{ message: "__MESSAGE__" }');
const getSuccessResponse = getResponse(200, '__MESSAGE__');

async function handler(event, context, callback) {
    let data = [];
    const log = createLogger();

    log.info('New Request')

    try {
        // TODO: do something
    } catch (error) {
        log.error(error.toString())
        return callback(null, getErrorResponse(error));
    }

    callback(null, getSuccessResponse(data))
}

exports.handler = handler;
