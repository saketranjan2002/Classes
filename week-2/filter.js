

let input = [1,2,3,4,5,6];


// filter logic
const filterLogic = (i) => {
    if(i%2) 
        return 0;
    return 1;
}

let ans = input.filter(filterLogic);
console.log(ans);


// mostly call backs are used
console.log(input.filter((i)=>{
    if(i%3==0) return 1;
    return 0;
}));

