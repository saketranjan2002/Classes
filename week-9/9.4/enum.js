"use strict";
// Enums are used to define named constants
function doSomething(typed) {
}
// enums are used for more human readablility
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["dowm"] = 1] = "dowm";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
function doSomething1(types) {
    if (types == Direction.up) {
    }
}
doSomething1(Direction.up);
console.log(Direction.up); // give 1
console.log(Direction.dowm); // give 2
console.log(Direction.left); // give 3
console.log(Direction.right); // give 4
// can also give values explicity to enum
var Direction1;
(function (Direction1) {
    Direction1["up"] = "up";
    Direction1["down"] = "down";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.up); // give up
// can use enums for status code
var statusCode;
(function (statusCode) {
    statusCode[statusCode["OK"] = 200] = "OK";
    statusCode[statusCode["NOTFOUND"] = 404] = "NOTFOUND";
})(statusCode || (statusCode = {}));
// res.status(statusCode.NOTFOUND) -> more readable
