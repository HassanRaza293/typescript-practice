interface Chai {
    flavour:string;
    price:number;
    milk?:boolean
}

const masla:Chai ={flavour:"masla", price:1000}

interface Shop {
    readonly id:number;
    name:string
}

const shop:Shop = {id:12, name:"myshop"}
//shop.id = 1 can't change the readonly value


interface DiscountCalculator{
    (price:number):number;
}

const applyOn:DiscountCalculator = ((p)=>p-(p*0.20));
console.log(applyOn(100))


interface TeaMachine{
    start():void;
    stop():void;
}
const machine:TeaMachine = {
    start() {
    },

    stop() {
    },
}

interface ChaiFlavour{
    [flavour:string]:number;  //this is called index signature

}
//index signature used in interfaces when we dont know the number of properties and name
//but we know the data type of keys and values


const chaiFlavour:ChaiFlavour = {
    "hello":2.3,
    "sldld":2.3,
    "hesllo":2.3,
    "helslo":2.3,
    "hellso":2.3,
}


interface User{
    name:string
}

interface User{
age:number
}


const u :User={    //interfaces can be merged in to one object
    name:"Hassan Raza",
    age:20
}

interface A {a:string}
interface B{b:string}

interface C extends A,B{}