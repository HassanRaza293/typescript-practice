type Tea = {
    name:string;
    price:number;
    indegredients:any[]
}


const adrakChai : Tea = {
    name:"Adrak Chai",
    price:23,
    indegredients:["ginger", 1]
}

console.log(adrakChai.indegredients);

type Cup = {size:string}
let smallCup:Cup = {size:"200ml"};

let bigCup  = {size:"500ml", material:"steel"};
smallCup = bigCup   

type Brew = {brewTime:number};
const coffee = {brewTime:5, beans:"Arabica"}
const chaiBrew:Brew = coffee

type User  = {
    username:string,
    password:string
}

const  u:User= {username:"hassan", password:"123"}

type Item = {name:string, quantity:number};
type Address = {street:string, pin:number};

type Order ={
    id:string;
    item:Item[];
    address:Address
}

type Chai = {
    name:string,
    price:number,
    isHot:boolean
}


const updateChai = (updates:Partial<Chai>)=>{
    console.log("updating chai with", updates);
}

updateChai({price:25})
updateChai({isHot:false})
updateChai({})

type chaiInfo = {
name:string;
price:number;
isHot:boolean;
ingredients:string[]
}

type BasicChaiInfo = Pick<Chai,"name"| "price">;

const BasicChaiInfo ={
name:"hassan",
price:122
}

type ChaiNew ={
    name:string;
    price:number;
    isHot:boolean;
    secretIngredients:string
}

type PublicCahi  = Omit<ChaiNew,"secretIngredients">;

const PublicCahi={name:"HASSAN", price:100, isHot:true}