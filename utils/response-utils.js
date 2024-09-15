const buildResponse = (statusCode, body) => {
    return {
        statusCode,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };
};

module.exports = {
    buildResponse
};
