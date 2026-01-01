let promise = new Promise((resolve,reject)=>{
    console.log("I am Promise");
    resolve("fulfiled")
})

// function getData(dataId , getNextData){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data", dataId)
//             if(getNextData){
//                 getNextData();
//             }
//         },2000)
//     })
// }


function aysncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success...")
        }, 4000)
    })
}

function aysncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success...")
        }, 6000)
    })
}

console.log("fetching data1 ....");

let p1 = aysncFunc1();
let p2 = aysncFunc2();
p1.then((res)=>{
    console.log(res)
    console.log("fetching data 2...") 
},
)
p2.then((res)=>{
    console.log(res)
}, )
