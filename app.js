const student={
    name:"tanuj",
    marks:94.4,
    printmarks:function(){
        console.log("marks=",this.marks);
    },
    
};
//class & constructor
class toyotacar{
    constructor(brand,milage){
this.brand=brand;
this.milage=milage;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
}

let fortuner=new toyotacar("fortuner",10);//constructor
let lexus=new toyotacar("LEXUS",12);//constructor


//inheritance
class parent{
    hello(){
        console.log("hello");
    }
    hii(){
        console.log("hii");
    }
}
class child extends parent{

}
let obj=new child();

//example-2
class person{
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}
class engineer extends person{
    work(){
        console.log("problem solving");
    }
}
let tanuj=new engineer(); 

//super keyword
class Person{
    constructor(name){
        this.species="homo sapiens";
        this.name="name";
    }
}
class engineer extends person{
    constructor(name){
super(name);//to envoke parent class constructor  
    }
    work(){
        super.eat();
        console.log("problem solving");
    }
}
let engobj=new engineer("shraddha");
