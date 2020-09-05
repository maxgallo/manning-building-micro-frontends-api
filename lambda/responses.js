function getHeaders(additionalHeaders) {
    return {
        'Access-Control-Allow-Origin': '*',
        'access-control-allow-methods' : 'OPTIONS,HEAD,GET,POST,PUT,PATCH,DELETE',
        'access-control-allow-headers' : 'Authorization,Content-Type,X-Amz-Date,X-Amz-Security-Token,X-Api-Key',
        ...additionalHeaders,
    };
}

// implementing ~jsend https://github.com/omniti-labs/jsend
const getResponse = status => (statusCode, data) => {
    const body = {
        status,
        data,
    };

    const stringyfiedBody = JSON.stringify(body);

    return {
        statusCode: statusCode ,
        headers: getHeaders({ 'Content-Type': 'application/json'}),
        body: stringyfiedBody,
    }
};

const getSuccessResponse = getResponse('success');
const getFailResponse = getResponse('fail');
const getErrorResponse = getResponse('error');

module.exports = {
    getSuccessResponse,
    getFailResponse,
    getErrorResponse,
};
