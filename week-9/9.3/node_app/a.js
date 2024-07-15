"use strict";
// npm init -y
// tsc --init
// tsc -b <- converts a.ts to a.js
// node a.js to the js file
// ts is a syntactical lang 
// browser understands only js 
// ts gets converted into js
const x = 1;
console.log(x);
function hello(str) {
    console.log("hello " + str);
}
// this function returns a number
function sum(num1, num2) {
    return num1 + num2;
}
// tyoe inference -> ts can infer the return type even if not mentioned
function sum1(num1, num2) {
    return num2 + num1;
}
hello("saoklm");
console.log(sum(1, 2));
console.log(sum1(1, 22));
function ageCheck(age) {
    console.log(age > 18 ? true : false);
}
function wrapperFunc(func) {
    setTimeout(func, 1000);
}
wrapperFunc((num = 1) => {
    console.log(num);
});
