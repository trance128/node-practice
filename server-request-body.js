const http = require('http');
const port = 3000;
http.createServer((request, response) => {
    console.log(request.headers);
    console.log(request.method);
    console.log(request.statusCode);
    console.log(request.url);

    if (request.method == 'POST') {
        let buff = '';
        request.on('data', function (chunk) {
            buff += chunk
        })
    }

    request.on('end', function () {
        console.log(`Body: ${buff}`);
    })
});