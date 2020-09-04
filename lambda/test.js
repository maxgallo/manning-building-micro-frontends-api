const lambda = require('./index.js')

function callback(error, response) {
    console.log(response);
}

lambda.handler({}, {}, callback)
