// premitive

// 7 types:String,Number,Boolean,null,undefined,symbol,BigInt

// const score=100;
// const scoreValue=100.3;

// const isLoggedI  n=false;
// const outsideTemp=null;
// let userEmail=undefined;

// const id=Symbol('123');
// const anotherId=Symbol('123')
// console.log(id===anotherId)

// const bigNumber=1341311131313131313131n;

//Reference Type(Non-premetive)

//Array,objects,Functions

// const heros=["karan","Vishal","Sahil"];

// let myOBJ={
//     name:"karan",
//     age:22,
// }

// const myFunction=function(){
//     console.log("Hello")
// }

// console.log(typeof bigNumber);

// ==================================================================

//Stack(primitive),Heap(non-primitive)

// let MyYoutubeName="karanmohite.com"

// let anothername=MyYoutubeName
// anothername="VishalJadhav.com"

// console.log(MyYoutubeName)
// console.log(anothername)


let userOne={
    email:"mohitekaran18@gmail.com",
    upi:"karan@bl"
}

let userTwo=userOne

userTwo.email="Vishal@google.com"

console.log(userOne.email)
console.log(userTwo.email)