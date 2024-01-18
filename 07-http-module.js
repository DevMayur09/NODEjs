const http = require('http');

const server = http.createServer((req,res) =>{
    
    if(req.url === '/'){
        res.end('Welcome to Our Homeage');
    }

    if(req.url === '/about'){
        res.end('Welcome to Our About Page');
    }

    res.end(`
        <h1>Oops !</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">Home</a>
    `);
})

server.listen(5000);