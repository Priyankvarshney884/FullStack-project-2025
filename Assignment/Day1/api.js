const express = require('express');
const app = express();

const port = 3000; // Define the port on which the server will run
const hostname = 'localhost'; // Define the hostname on which the server will run

app.get('/greet',(req,res)=>{
    const name = req.query.name;
    if(name)
    {
        res.send(`Hello, ${name}!`);
    }
    else
    {
        res.send('Hello, Guest!');
    }
    
})
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
