const http = require('node:http');
const fs = require('node:fs')
const port = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/') {
        res.statusCode = 200;
        const data = fs.readFileSync('index.html')
        res.end(data.toString());
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.end('<h1> About Ananya Thakur </h1> <p> Hello World </p>');
    } else if (req.url === '/hello') {
        res.statusCode = 200;
        res.end('<h1> This is Ananya Thakur </h1> <p> Hello World </p>')
    } else {
        res.ananya;
        res.statusCode = 404;
        res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
