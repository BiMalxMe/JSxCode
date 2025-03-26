let a=new Date()
// console.log('year: '+a.getFullYear())
// console.log("Months: "+a.getMonth())
// console.log("Day: "+a.getDay())
// console.log('Hours: '+a.getHours())
// console.log('Minutes'+a.getMinutes())
// console.log('Seconds'+a.getSeconds())
// console.log('Time'+a.getTime())


//calling the currenttime evry one seconds

function getCurrentTime(){
    let current=new Date();
    let Hours= current.getHours();
    let Minutes=current.getMinutes();
    let Seconds= current.getSeconds();
    console.log(Hours+':'+Minutes+':'+Seconds);
}
// setInterval(() => {
//     getCurrentTime
// }, 1000);

setInterval(getCurrentTime,1000);