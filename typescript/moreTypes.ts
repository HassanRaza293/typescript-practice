// we use type when we need union and intersaction of the data types 
// we use interfaces when we need to define the shape of object

let response:any = "42";
let numericLength:number = (response as string ).length;

type Book ={
    name:string;
};


let bookString = '{"name":"who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book
console.log(bookObject)

let value:any;

value = "chai"
value = [1,2,3]
value.toUpperCase()

let newValue:unknown;

newValue = "chai"
newValue = [1,2,3]
newValue = 2.5

if(typeof newValue === "string"){ //whenever we use unknown we need to add special check with it
    newValue.toUpperCase()
}

try{}
catch(error){
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log("Error:", error);
}



const data:unknown = "chai aur code";
const  strData:string = data as string;

type  Role ="admin" | "user";

function redirectBasedOnRole(role:Role):void{
    if(role=="admin"){
        console.log("Redirecting to admin dashboard")
        {return;}
    }
    if(role=="user"){
        console.log("Redirecting to user dashboard")
        {return;}
    }
    role // its type will change to never because no value can be assigned to it

}