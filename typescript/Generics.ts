//generics are the general functions, 
// meaning that these are reusable, 
// write once use with many datatypes

function wrapArray<T>(item:T ){
return [item];
}

wrapArray("masala")
wrapArray(42)
wrapArray({flavour:"Ginger"});

function pair<A,B>(a:A, b:B):[A,B]{
    return [a,b];
}

pair("masla",20)
pair("masala",{flavour:"Ginger"})

interface Box<T>{
    content:T;  //value of content show be the same of interface type
}

const numberBox:Box<number> = {content:10}; //here its number


interface ApiPromise <T>{
    status:number,
    data:T
}

const res:ApiPromise<{flavour:string}> = {
    status:200,
    data:{flavour:"masala"}
}