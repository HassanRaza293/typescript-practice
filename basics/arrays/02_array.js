const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros) // merging a whole array into another is do able but not correct approach 
// console.log(marvel_heros[3][1])
const all_heros  =  marvel_heros.concat(dc_heros) // concat is the right approch for merging the arrays
// console.log(all_heros)

const all_arrays = [...marvel_heros, ...dc_heros] //spread operator spread values of an array into orignal values
console.log(all_arrays)

const real_another_array = all_heros.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Hitesh")); // checks whether its data type is array or not 
console.log(Array.from("Hitesh")); // this converts the string to an array 

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)) //this corverts single each item to an array