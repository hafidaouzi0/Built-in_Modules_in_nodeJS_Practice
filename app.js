const amount=9;
if(amount<10){
    console.log("small number");
}
else{
        console.log("large number");

}
    console.log("my first node app");


    //globals : NO window
    //__dirname : the path of the current directory

    //setInterval(() => {  console.log("hello"); }, 1000);

    //modules
  

    //note: every file in node is a module

    const users=require("./users");
    const sayHi=require("./functions");

    sayHi(users.name);
    sayHi(users.lastName);
    sayHi(users.age);