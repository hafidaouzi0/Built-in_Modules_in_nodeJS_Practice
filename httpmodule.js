//leraning http module
const http=require('http');
const server=http.createServer((req,res)=>{
  //  console.log(req);//refresh the page to get the console result

if(req.url === '/'){
    res.end("Welcome to our homepage")
}
if(req.url === '/about'){
    res.end("that's the about page")
    
}
res.end(`
<h1>Ooops ! wrong page</h1>
<p>it seems like you navigate to the wrong page</p>
<a href="/">Go back Home</a>
`)

   // res.write("Hey Welcome to our homePage");
    //res.end();
});
server.listen(7000);
//congrats we just created a server that listens on port 7000
//localhost:7000
