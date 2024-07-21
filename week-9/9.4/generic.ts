type input1 = string | number;

function funfunc(arg : input1[]): input1{
    return arg[0];
}

//unable to infer the type of funfunc(["122","1111"])
// console.log(funfunc(["122","1111"]).toUpperCase());    

// one can also pass ["sak",11,12]
funfunc([1,"sas","sasa",22]);
// can be resolved by by def input1 as
// type input1 = string[] | number[];



// therefore we use generic
function funfunc1<T>(arg : T[]): T{
    return arg[0];
}

console.log(funfunc1<string>(["saasas","habhb"]).toUpperCase());
console.log(funfunc1(["saasas","habhb"]).toUpperCase());   // ts can understand it is a string arr 
console.log(funfunc1<number>([11,12]));