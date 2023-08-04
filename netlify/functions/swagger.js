import axios from 'axios'
exports.handler = async function (event, context) {
    let name = (event.queryStringParameters.name || 'unnamed').trim();
    return {
        statusCode: 200,
        headers: {
            'cache-control': 'public, max-age=' + MAX_AGE,
            'content-type': 'image/svg+xml'
        },
        body: identicon(name)
    };
};