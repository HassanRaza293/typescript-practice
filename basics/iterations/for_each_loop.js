const coding = ["js", "rb", "py", "java", "c++"];

// coding.forEach(function(item){
//     console.log(item);
// }


coding.forEach((item)=>{
    console.log(item);
});

function printMe(item){
    console.log(item);
}

coding.forEach(printMe);

coding.forEach(item => console.log(item));

coding.forEach((item, index,arr) => {
    console.log(`Index: ${index}, Value: ${item}, Array: ${arr}`);
}); 

const myCoding = [ 
    {language:"java", languageFileName:"java"},
    {language:"python", languageFileName:"py"},
    {language:"javascript", languageFileName:"js"}
]

myCoding.push({language:"ruby", languageFileName:"rb"});

myCoding.forEach((item,index)=>{
    console.log(`Index:${index}, Language:${item.language}`); 
})

const values = coding.forEach((item, index, arr) => {

}
);