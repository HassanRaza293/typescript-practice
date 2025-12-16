const myNums = [1,2,3,4,5,6,7,8,9,10];

const myTotal = myNums.reduce((accumulator,currentvalue)=>{
    return accumulator + currentvalue; 
}, 0);

console.log("Total sum: " + myTotal);


const shoppinCart= [
    {itemName: 'Laptop', price: 30000},
    {itemName: 'Mouse', price: 1500},
    {itemName: 'Keyboard', price: 2000},
    {itemName: 'Monitor', price: 10000},
];

const totalPrice = shoppinCart.reduce((accumulator,currentvalue)=>{return accumulator + currentvalue.price}, 1000);
console.log("Total price of shopping cart: " + totalPrice);

//reduce function is used to reduce the numerical array to a single value by applying a function on each element of the array.