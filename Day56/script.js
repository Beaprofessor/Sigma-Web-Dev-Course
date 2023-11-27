console.log("Hello I am conditional tutorial ")


let age = 0;
// let grace = 2;

// age+=grace;
// console.log(age);
// console.log(age + grace);
// console.log(age - grace);
// console.log(age * grace);
// console.log(age / grace);
// console.log(age ** grace);
// console.log(age % grace);

/*
I am a 
Multiline 
comment

*/


if (age == 18) {
    console.log("U can drive");
}

else if (age == 0) {
    console.log("Are u kidding ???")
}
else {
    console.log("u cannot drive");
}


let a = 5;
let b = 7;
let c = a > b ? (a - b) : (b - a);
console.log(c);

/* 
Translates to 
a = 5 
b = 7

if(a>b){
    let c = a-b;
}
else{
    let c = b-a;
}



*/