// npm init -y
// tsc --init
// tsc -b <- converts a.ts to a.js
// node a.js to the js file




// ts is a syntactical lang 
// browser understands only js 
// ts gets converted into js



const x : number = 1;
console.log(x);


function hello(str : String){
   console.log("hello " + str);
}

// this function returns a number
function sum(num1 : number, num2 : number) : number{
    return num1 + num2; 
}

// tyoe inference -> ts can infer the return type even if not mentioned
function sum1(num1 : number, num2 : number){
    return num2 + num1;
}

hello("saoklm");
console.log(sum(1,2));
console.log(sum1(1,22));


function ageCheck(age : number) : void {
    console.log(age>18 ? true : false);
}

function wrapperFunc(func : (num : number) => void ){
    setTimeout(func,1000);
}

wrapperFunc((num : number=1)=>{
    console.log(num);
});


interface User{
    firstName : string,
    email? : string,         // ? implies email is optional
    age : number
}


function isLegal(user : User) : boolean {
    if(user.age > 18){
        return true;
    }return false;
}

// implementing an interface

interface Person{
    name: string;
    age: number;
    greet(phrase: string): void;
}

class Employee implements Person{
    name: string;
    age: number;

    constructor(n:string,a:number){           // -> need this constructor to assign the name and age (variables)
        this.name = n;
        this.age = a;
    }

    greet(phrase: string): void {
        console.log(`${phrase} ${name}`);
        
    }

}