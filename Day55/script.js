console.log("Hey this is THE DAY 55")

// SO aap jab bhi MODERN JS use kare uss time hamesha LET ka use kare....

let a = 5;
// a = a + 1;
// a = a + 12; This is POSSIBLE ;
let b = 6;
let c = "Professor";
let _a = 45;
// var 55b = "Heyyy"; THIS IS INVALID CAUSE VARIABLES KA NAME KABHI NUMBER SE START NI HO SAKTA HAI.....


// const a1 = 123;
// a1 = a1 + 12; THIS IS INVALID!!!! cause ye ek constant value hai thats it..
// Const cannot be never update or re-declarded.;;;

// console.log(a+b);
// console.log(typeof a ,  typeof b , typeof c)

// Ye idhar ek block mei respect karega LET , and iss value ko print karega and upar wali ko bhi print karega....
// So OUTPUT = 66 5 ye aayega....
{
    let a = 66;
    console.log(a)
}


// Aur agar mei idhr iss block mei var karu and upar bhi var karu toh wo ek global value declare hoyegi and fir output bas 66 66 dega.......
// Isse bachne ke liye "LET" use karna jaada better hai.... 

console.log(a)



// JAVASCRIPT have two type of DATATYPES!!!
// 1.PRIMITVE DATA TYPE
// 2.OBJECT - isse apan aese keh sakte hai ki ye ek user-defined datatype hota hai yaani ki apne mann pasand ka....



// THERE ARE 7 TYPES OF PRIMITVE DATATYPES....
console.log(" (NULL) (NUMBER) (STRING) (SYMBOL) (UNDEFINED) (BOOLEAN) (BIGINT) ")



let x = "harry bhai";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);



let obj = {
    "name": "harry",
    "job role": "coder",
    "is_handsome": true 
}

console.log(obj);
o.salary = "100cr";
console.log(obj);
o.salary = "500cr";
console.log(obj);