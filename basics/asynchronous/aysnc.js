// Js is an aysnchronous language
// Js is single threaded language means it will execute code line one by one




// function  hello(){
//     console.log("hello");
// }

// console.log("1");
// setTimeout(hello, 0);
// Promise.resolve(()=>{
//     resolve("A");
//     console.log("2")

// })
// .then((user)=>console.log("user:", user.resolve))


// function getData(dataId, getNextData){
// setTimeout(()=>{
//     console.log("data", dataId)
//     if(getNextData){
//         getNextData();
//     }
// },2000);

// }

// getData(1, ()=>{getData(2,()=>{getData(3, ()=>{getData(4)})})})
//callback hell: Nested callbacks stacked below one another forming a pyramid  structure 
function sumData(num1, num2, callBack){
console.log(num1,num2),    
setTimeout(()=>{console.log(num1*num2);
if(callBack){
callBack() }
},2000); 

}


sumData(2,4, ()=>{sumData(4,3)})
