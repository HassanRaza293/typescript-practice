for(let i = 50; i > 0; i--){
    console.log("Iteration number: " + i);
    if(i==20){
        break;
    }
}
for(let i = 0; i<20; i++){
    console.log("Iteration number: " + i);
    if(i==10){
        console.log("Skipping iteration 20");
        continue;
    }
}

for(let i=0; i<=10; i++){
    for(let j=0; j<=10; j++){
        console.log(`i: ${i}, j: ${j}`);
    }

}


let myArray = ['hassan', 'ahmed', 'sara', 'lina'];

for(let i = 0; i < myArray.length; i++){
    console.log(`Index: ${i}, Value: ${myArray[i]}`);


}