//here is an example of how to use async fs with callbacks
//cuz we can try it with promises and more ways for less code
//like async , await 
const {readFile,writeFile, read}=require("fs");


readFile('./first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first=result;
    readFile("./second.txt",'utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second=result;
       
        writeFile("./asyncResult.txt",`here is the result: ${first} ,${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log("success",result);
            readFile("./asyncResult.txt",'utf8',(err,result)=>{
                if(err){
                    console.log(err);
                    return;
                }
                console.log(result);
            })
        })
        
    })
    
})