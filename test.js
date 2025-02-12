// const isVerified = "";
// // if(isVerified === true){
// //     console.log("the user is varified");
// // }
// // else{
// //     console.log("the user is  not varified");  
// // }

// console.log(`${isVerified === true ? "the user is varified": "the user is  not varified"}`)

function getTimestring( time){
    //get hour and rest second
    const hour = parseInt(time / 3600);
    let remainingSecond= time % 3600;
    const minute = parseInt(remainingSecond /60);
    remainingSecond=  parseInt(remainingSecond/60);
    return `${hour} hour ${minute} minute ${remainingSecond} second ago`;
}
console.log( getTimestring(7865));