//shallow copy is where object where is shares same reference point
// deep copy is wehre its object does not share same reference point

const myArr = [0,1,2,3,4]
const players =["asif ali","naseem shah"];
const myArr2 = new Array(1,2,3,4);
console.log(myArr[2])
console.log(players[1])


myArr.unshift(9)
myArr.shift()

console.log(myArr);
console.log(myArr.includes(9))//includes returns the values in boolean
console.log(myArr.indexOf(3)) //if this returns -1 this means value does not exiyts

//slice , splice
console.log("A",myArr);
const myn1 = myArr.slice(1,3);//splice extracts the the values but does not changes the orignal array
console.log(myn1);

const myn2 = myArr.splice(1,3); //splice also extracts values and changes the orignal array
console.log(myn2);

