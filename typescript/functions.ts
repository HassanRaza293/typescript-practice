function makeChai(type:string, cups:number){
    console.log(`Making ${cups} cups of ${type} chai`);
}

makeChai("Masla", 3);

function ingredients(order:{
    type:string,
    cups:number,
    size: "large"|"small"

}):number{
return order.cups;
}

console.log(ingredients({type:"masala",cups:10, size:"large"}))
