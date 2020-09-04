const lambda = require('./index.js')

function callback(error, response) {
    console.log(response);
}

const apiLoginEvent = {
    resource: '/api/login',
    path: '/api/login',
    httpMethod: 'POST',
    headers: {
        'Accept-Encoding': 'gzip, deflate, br',
        'CloudFront-Forwarded-Proto': 'https',
        'CloudFront-Is-Desktop-Viewer': 'true',
        'CloudFront-Is-Mobile-Viewer': 'false',
        'CloudFront-Is-SmartTV-Viewer': 'false',
        'CloudFront-Is-Tablet-Viewer': 'false',
        'CloudFront-Viewer-Country': 'US',
        'Content-Type': 'application/javascript',
        Host: 'fyh97xotvd.execute-api.eu-west-2.amazonaws.com',
        'Postman-Token': '7162dd76-9ace-4fe0-996b-bb5bc6d4d5f4',
        'User-Agent': 'Amazon CloudFront',
        Via: '1.1 7b4a490cbf8618afeab9ef9e754bca44.cloudfront.net (CloudFront), 1.1 3746550ac2cf89851f01a575c7b680a6.cloudfront.net (CloudFront)',
        'X-Amz-Cf-Id': 'e9oC6PtJZio5OLADpc-DMHMJ2bMFNcKCy_zg1xouBteN_4_6dOfmyA==',
        'X-Amzn-Trace-Id': 'Root=1-5f52975c-2c44159c287fe31ecfdba0c6',
        'X-Forwarded-For': '51.146.55.198, 64.252.152.93, 130.176.6.151',
        'X-Forwarded-Port': '443',
        'X-Forwarded-Proto': 'https'
    },
    multiValueHeaders: {
        'Accept-Encoding': [ 'gzip, deflate, br' ],
        'CloudFront-Forwarded-Proto': [ 'https' ],
        'CloudFront-Is-Desktop-Viewer': [ 'true' ],
        'CloudFront-Is-Mobile-Viewer': [ 'false' ],
        'CloudFront-Is-SmartTV-Viewer': [ 'false' ],
        'CloudFront-Is-Tablet-Viewer': [ 'false' ],
        'CloudFront-Viewer-Country': [ 'US' ],
        'Content-Type': [ 'application/javascript' ],
        Host: [ 'fyh97xotvd.execute-api.eu-west-2.amazonaws.com' ],
        'Postman-Token': [ '7162dd76-9ace-4fe0-996b-bb5bc6d4d5f4' ],
        'User-Agent': [ 'Amazon CloudFront' ],
        Via: [
            '1.1 7b4a490cbf8618afeab9ef9e754bca44.cloudfront.net (CloudFront), 1.1 3746550ac2cf89851f01a575c7b680a6.cloudfront.net (CloudFront)'
        ],
        'X-Amz-Cf-Id': [ 'e9oC6PtJZio5OLADpc-DMHMJ2bMFNcKCy_zg1xouBteN_4_6dOfmyA==' ],
        'X-Amzn-Trace-Id': [ 'Root=1-5f52975c-2c44159c287fe31ecfdba0c6' ],
        'X-Forwarded-For': [ '51.146.55.198, 64.252.152.93, 130.176.6.151' ],
        'X-Forwarded-Port': [ '443' ],
        'X-Forwarded-Proto': [ 'https' ]
    },
    queryStringParameters: null,
    multiValueQueryStringParameters: null,
    pathParameters: null,
    stageVariables: null,
    requestContext: {
        resourceId: 'm4oqki',
        resourcePath: '/api/login',
        httpMethod: 'POST',
        extendedRequestId: 'SWyWcFDjLPEFqag=',
        requestTime: '04/Sep/2020:19:37:00 +0000',
        path: '/production/api/login',
        accountId: '708961971619',
        protocol: 'HTTP/1.1',
        stage: 'production',
        domainPrefix: 'fyh97xotvd',
        requestTimeEpoch: 1599248220384,
        requestId: '54cb98ab-09cd-4765-80a0-ba4075885b90',
        identity: {
            cognitoIdentityPoolId: null,
            accountId: null,
            cognitoIdentityId: null,
            caller: null,
            sourceIp: '64.252.152.93',
            principalOrgId: null,
            accessKey: null,
            cognitoAuthenticationType: null,
            cognitoAuthenticationProvider: null,
            userArn: null,
            userAgent: 'Amazon CloudFront',
            user: null
        },
        domainName: 'fyh97xotvd.execute-api.eu-west-2.amazonaws.com',
        apiId: 'fyh97xotvd'
    },
    body: '{ "username": "bernhard.riemann", "password": "1866" }',
    isBase64Encoded: false
}

const apiValidateEvent = {
    ...JSON.parse(JSON.stringify(apiLoginEvent)),
    resource: '/api/validate',
    path: '/api/validate',
}
apiValidateEvent.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJlcm5oYXJkLnJpZW1hbm4iLCJpYXQiOjE1OTkyNTEwODB9.q_77XA5N-ioLkhuqRyMi8PbYzYQirg4BoT1PX9dVr9w';

// lambda.handler(apiLoginEvent, {}, callback);
lambda.handler(apiValidateEvent, {}, callback);
