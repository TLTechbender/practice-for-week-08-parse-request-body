const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;
const http = require('http');

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/
server=http.createServer((req,res)=>{
//res.setHeader('Content-Type','text/html');
//res.end("Good morning");
//res.statusCode=200;
console.log(`${req.method} ${req.url}`); //This just shows me the http verb and the url I am tryna access
let reqBody='';
req.on('data', (data)=>{
    reqBody +=data;
});
req.on('end', ()=>{
    let parsedBody = parseBody(reqBody);
    req.body=parsedBody;
    sendFormPage(req,res);
});
});

// Your code here
const port=5000;
server.listen(port,()=>console.log('Successfully started the server on port',port));
/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };