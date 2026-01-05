class Chai {
    flavour:string;
    price:number;
    constructor(flavour:string, price:number){
        this.flavour = flavour; //this is used to refer the new object
        this.price = price;
    }
}

const obj = new Chai("masal", 23);
console.log(obj);

class ModernChai{
    private _sugar = 2;
    get sugar(){
        return this._sugar;
    } 
    set sugar(_sugar:number){
        if(_sugar>5){
            throw new Error("Too sweet");
            this._sugar = _sugar;
        }
    }
}



class myChai{
    protected token:string = "12322";  //protected is used when we need to use property inside the class or inherit it another class 
}
class coffee extends myChai{
    getToken(){
        this.token;
    }
}

class Heater{
    heat(){}
}

class Cold{
    constructor(private heat:Heater){}
    getHeater(){
    return this.heat.heat;
    }
}


abstract class brew{
    abstract show():void;
    abstract getNum():number;
}

class HotCoffee extends brew {
show(): void {
    
}
getNum(): number {
return 8;   
}
}