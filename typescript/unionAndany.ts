let subs :number|string='1M'; 
let apiRequestStatus:'pending'|'success'|'error' = 'pending';
let airlineSeat: 'aisle' | 'window' | 'middle' = 'aisle';

airlineSeat = 'middle'
console.log(airlineSeat)

const orders  = ['12','10','28','45']
let currentOrder:string|undefined;  // undefined let us know that the variable is declared but the default value is undefined

for(let order of orders){
    if(order === '20'){
        currentOrder = order;
        break;
    }
    currentOrder = "11";
}

console.log(currentOrder);