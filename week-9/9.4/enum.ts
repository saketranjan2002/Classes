// Enums are used to define named constants


type typePressed = "up" | "down" | "left" | "right";
function doSomething(typed : typePressed):void{

}


// enums are used for more human readablility
enum Direction {
    up,
    dowm,
    left,
    right
}

function doSomething1(types : Direction):void{
    if(types == Direction.up){

    }
}
doSomething1(Direction.up);

console.log(Direction.up);    // give 1
console.log(Direction.dowm);  // give 2
console.log(Direction.left);  // give 3
console.log(Direction.right); // give 4

// can also give values explicity to enum
enum Direction1{
    up = "up",
    down = "down"
}
console.log(Direction1.up); // give up



// can use enums for status code

enum statusCode {
    "OK" = 200,
    "NOTFOUND" = 404
}

// res.status(statusCode.NOTFOUND) -> more readable