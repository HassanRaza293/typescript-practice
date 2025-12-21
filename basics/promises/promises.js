const promiseOne = new Promise(function(resolve, reject){
    //Do an aysnc task
    //DB call, cryptography, network
    setTimeout(function(){
        console.log("Aysnc task is complete")
    resolve()
    }, 1000)
})


promiseOne.then(function(){
    console.log("Promise Consumed"); 
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Aysnc task 2 done");
        resolve()
    },1000)
}).then(function(){
    console.log("Aysnc 2 task resolved");
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"hassan", email:"hasssan@gmail.com"})
    },2000)
})


promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(()=>{

        let error = false;
        if(!error){
            resolve({username:"Hassan",email:"hassan@gmail.com"})
        }
        else{
            reject("Aysnc task could not resolved")
        }
        
    }, 2000)
    
})

promiseFour
.then((user)=>{console.log(user);
return user.username;})

.then((username)=>{
console.log(username);})

.catch((error)=>{
    console.log(error);
})

.finally(()=>console.log("The promise is either resolved or rejects"))


const promiseFive = new Promise(function(resolve,reject){
setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username:"Hassan",email:"hassan@gmail.com"})
        }
        else{
            reject("Aysnc task could not resolved")
        }
    }, 2000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}
//async function waits till processes gets completed and then only moves further
//async cannot handle errors directly, we need specify try catch  separartely

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https:\\jsonplaceholder.typcode.com/users')
//         console.log(response);
//         const data = await response.json();
//         console.log(data);
        
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

fetch('https:\\api.github.com/users/hiteshchoudhary')  
.then((response)=>{
return response.json()
})
.then((data)=>{
console.log(data) 
})
.catch((error)=>console.log(error))
