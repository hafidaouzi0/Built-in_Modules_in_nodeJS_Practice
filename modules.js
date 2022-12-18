// built-in Modules
const os=require('os');

//gives info about the current user
const user=os.userInfo();
const upTime=os.uptime();
console.log(`the computer uptimeis : ${upTime}`);
console.log(user);
const info={
name:os.type(),
release:os.release(),
totalMem:os.totalmem(),
freeMem:os.freemem()

}
console.log(info);