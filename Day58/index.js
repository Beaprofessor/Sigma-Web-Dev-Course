console.log("Heyy , this is the video of the FUNCTIONS!!!!");

// console.log("Hey Harry you are nice ")
// console.log("Hey Harry you are good ")
// console.log("Hey Harry your tshirt is nice ")
// console.log("Hey Harry your course is also very great!!!")




function nice(name){
    console.log("Hey " + name + " is a nice boy");
    console.log("Hey " + name + " is a good boy");
    console.log("Hey " + name + " your tshirt is also nice!");
    console.log("Hey " + name + " your course is also Great!!!!");

}

nice("Harrry");
nice("Rohan");


function sum(a,b,c=3) {
    // console.log(a+b);
    return a + b + c ;
}

result1 = sum(8,1 ,34); /*Ab idhr special value bhi de sakte hai apn C ki */
result2 = sum(23,1);
result3 = sum(8,24);


console.log("The sum of these two numbers is: " , result1);
console.log("The sum of these two numbers is: " , result2);
console.log("The sum of these two numbers is: " , result3);



const func1 = (x) => {
    console.log("Heyy I am an arrow function " , x);
}

func1(2123);
func1(12342);
func1(34);



//   The PRACTICE SET.......

// Question....
// Write  a function to find mean of 5 number .

function mean(a,b,c,d,e){
    console.log((a+b+c+d+e)/5);
}

mean(1,2,3,4,5);