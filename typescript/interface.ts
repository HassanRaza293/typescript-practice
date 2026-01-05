// 🔹 Interface
// Used to define the shape of an object
// Mainly for object-oriented design
// Supports declaration merging
//supports inheritance

// 🔹 type
// Used to create a type alias
// Can represent objects, unions, primitives, tuples
// More flexible
//does not support inheritence

type ChaiOrder = {
    type:string,
    sugar:number,
    strong:boolean
}


function makeChai(order:ChaiOrder){
    console.log(order);
}

function serveChai(order:ChaiOrder){
    console.log(order);
}

type TeaRecipe ={
    water:number,
    milk:number
}

// class MasalaChai implements TeaRecipe{
//     water=100;
//     milk=10;

// }

interface CupSize{
    size:"small" | "large"
};

class Chai implements CupSize{
    size: "small" | "large" = "large";
}

interface Response {
    ok:true | false
};

class myRes implements Response{
    ok: boolean = true;
}

type TeaType = "masala" | "ginger" | "lemon"

function orderChai(t:TeaType){
    console.log(t);
}

type BaseChai = {teaLeave:number};
type  Extra = {masala:number}

type MasalaChai = BaseChai & Extra

const cup:MasalaChai = {
    teaLeave:2,
    masala:1
}

type User ={ readonly username:string, bio?:string}; //we cannot assign anything to the readonly property 

const u1:User = {username:"Hassan Raza"}
const u2:User = { username:"Hassan Raza", bio:"hassan.ai"}

