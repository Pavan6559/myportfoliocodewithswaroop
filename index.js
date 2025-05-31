var a=5;
var b=6;
var c=a+b;
const pi=3.14; // if a variable should not be changed anytime it was assigned by 
// const data type

console.log(c);
console.log(pi);
{
    let d=10;
}
//console.log(d); // here it will show some error because d is defined by let data type
// but it will be not defined outside the brackets but the console is out of brackets 
// but if we also bring console inside then it will work perfectly

// some examples
let name="john";
const age=10;
var isstudent=true;
let numbers=[1,2,3,4,5];
//let person={name:"alice",age:25}; 

// functions in js
// function definition
function fn(){
    console.log("function executed");
}
// function call
fn();



// if else loops
let num=10;
if(num>0){
    console.log("positive number");
}
else if(num<0){
    console.log("negative number");
}
else{
    console.log("zero");
}



// for loop 
for(let i=0;i<5;i++){
    console.log("iteration "+ i);
}


// increment
var ab=5;
console.log(ab--); //will print 5 and ab value will be 4
console.log(++ab); //initially the value of ab is increased to 5 and is printed
// generally the logic is like in c language


//array
let fruits=["apple","banana","orange"];
fruits.push("grape"); // it will put some info into the fruits next to orange
fruits.pop(); // removing the last information from the array
console.log(fruits);

let person = { name:"alice", age:25 }; // kind of structures  
person.age=26;
console.log(person);

// template literals
const names="pavan";
console.log(`hello,${names}!`);