const http = require('http');
const url = 'http://nodeprogram.com';

http.get(url, (response) => {
    response.on('data', (chunk) => {
        console.log(chunk.toString('utf8'));
    });
    
    response.on('end', () => {
        console.log('response has ended');
    });
}).on('error', (e) => {
    console.log(`Got an error: ${e}`);
})
