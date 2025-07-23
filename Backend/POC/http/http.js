const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write("<html> <head><title>Http</title></head><body>");
    res.write("<h1>Hello World!</h1>");
    res.write("</body></html>");
    res.end();
});

// specify the port and hostname
const port = 3000; // its define the port on which server will run
const hostname = 'localhost'; // its define the hostname on which server will run

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}
);