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

// we will Nodemon to run this server if there are any changes in the code
// we can install nodemon globally using npm install -g nodemon
// or we can install it locally using npm install nodemon --save-dev
// then we can run the server using nodemon http.js
// we can also use pm2 to run the server in production mode
// pm2 is a process manager for Node.js applications
// add all the port range for real time communication
//like 0-1023 are reserved for system
// 1024-49151 are registered ports
// 49152-65535 are dynamic or private ports
// so we can use any port from 1024 to 65535 for our application
// for example we can use port 3000, 8080, 5000 etc
// we can also use port 80 for http server but it requires root privileges