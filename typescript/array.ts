const nums:number[]= [23,23,12,32]; //this is how we declared string here 
console.log(nums);
let chaiTuple:[string,number]; // this is how we declare a tuple here . 
chaiTuple= ["masala", 20]; // allows us to add different data types in single array

let chaiExtra:[string,number,boolean?];
chaiExtra= ["masala", 20];
chaiExtra.push("hassan")

const enum chai{ //enum is used to strict user into few options
    Low=1,      //its auto increments the values if dont define others
    Medium=2,
    High =3
}
console.log(chaiExtra);