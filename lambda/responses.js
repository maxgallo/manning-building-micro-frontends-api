// implementing ~jsend https://github.com/omniti-labs/jsend

const getResponse = status => (statusCode, data) => {
    const body = {
        status,
        data,
    };

    const stringyfiedBody = JSON.stringify(body);

    return {
        statusCode: statusCode ,
        headers: {
            'Content-Type': 'application/json',
        },
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
