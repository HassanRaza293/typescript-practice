function getData(kind:string | number ){
    if(typeof kind ==='string'){
        return `Making ${kind} proud`
    }
    return `Chai order:${kind}`
}

function serveChai(msg?:string){
    if(msg){
        return `Serving ${msg}`;
    }
    return `Serving default masala chai `
}

function orderChai(size:'small'|'medium'|'large'|number){
    if(size==="small"){
        return `small cutting chai...`
    }
    if(size==="medium" || size=="large"){
        return `more than small cutting chai...`
    }
    return `Please get #${size} cups.`;
}

console.log(orderChai(4));

class KulhadChai {
    serve(){
        return `Serving Kulhad Chai`;
    }
}
class Cutting {
    serve(){
        return `Serving cutting Chai`;
    }
}

function serve(chai: KulhadChai | Cutting){
    if(chai instanceof KulhadChai){
        return chai.serve();
    }
}

type ChaiOrder = {
    type:string
    sugar:number
}

function isChaiOrder(obj:any):obj is ChaiOrder{
    return (typeof obj ==="object" && 
        obj!==null && 
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )    
}

function serveOrder(item:ChaiOrder|string){
    if(isChaiOrder(item)){
        return `serving ${item.type} chai with ${item.sugar} cups of sugar.`;
    }
    return `Serving custom chai:${item}`;
}

console.log(serveOrder({type:"Hassan Raza", sugar:10}))


type Drinks = {
    type:string
    cups:number
}

function isDrink(obj:any):obj is Drinks{
    return (typeof obj ==="object" &&
            obj!=null &&
            typeof obj.type ==="string"&&
            typeof obj.cups ==="number" 
    )
}


function serveDrinks(item:Drinks|string){
if(isDrink(item)){
    return `${item.cups} of ${item.type}`
}
return `${item} has 20 cups sugar here.`

}

console.log(serveDrinks({type:"coffee", cups:10}))
