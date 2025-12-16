const arr = [1, 2, 3, 4, 5];

for (const element of arr) {
    console.log(element);
}

const greetings = "Hello World";
for(const greet of greetings){
    console.log(`Each of chaqracter: ${greet}`);
}

// Maps

const map = new Map();
map.set('Pak', 'Paksistan');    
map.set('Ind', 'India');
map.set('Ind', 'India');
map.set('SL', 'Sri Lanka');

console.log(map);

for (const [key, value] of map) {
    console.log("Key: " + key + ", Value: " + value);
}

// const myObject = {'game': 'Football', 'player': 'Ronaldo', 'team': 'Manchester United'};


// for (const [element] in myObject) {
//     console.log(element);
// }