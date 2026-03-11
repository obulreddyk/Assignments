// //operators=operators are used to perform the operations on the variables and values.// there are different types of operators in typescript.
// //there are 5 types of operators in typescript
// //1.arithmetic operators(+,-,*,/,%,++,--)
// //2.assignment operators(=,+=,-=,*=,/=,%=)
// //3.comparison operators(==,!=,===,!==,<,>,<=,>=)
// //4.logical operators(&&,||,!)
// //5.ternary operators(?)



// //1.arithmetic operators
// //addition(+)
// //subtraction(-)
// //multiplication(*)
// //division(/)
// //modulus(%)(returns the remainder of a division operation)
// //increment(++)
// //decrement(--)
// let a:number=10;
// let b:number=5;
// console.log(a+b);//addition
// console.log(a-b);//subtraction
// console.log(a*b);//multiplication
// console.log(a/b);//division
// console.log(a%b);//modulus
// a++;//increment//before and after rule will apply here
// console.log(a);
// b--;//decrement
// console.log(b);

// //2.assignment operators
// //assignment operator(=)
// let c:number=10;
// console.log(c);
// //addition assignment operator(+=)
// c+=5;//c=c+5
// console.log(c);
// //subtraction assignment operator(-=)
// c-=3;//c=c-3
// console.log(c);
// //multiplication assignment operator(*=)
// c*=2;//c=c*2
// console.log(c);
// //division assignment operator(/=)
// c/=4;//c=c/4
// console.log(c);
// //modulus assignment operator(%=)
// c%=3;//c=c%3
// console.log(c);

// //comparison operators      
// let x:number=10;
// let y:number=20;
// let z:any="10";
// console.log(x==z);//compare value only
// console.log(x===z);//compare value and data type    
// console.log(x!=y);//compare value only
// console.log(x!==z);//compare value and data type
// console.log(x>y);
// console.log(x<y);
// console.log(x>=y);
// console.log(x<=y);

// //logical operators
// let p:boolean=true;
// let q:boolean=false;
// console.log(p&&q);//logical AND
// console.log(p||q);//logical OR
// console.log(!p);//logical NOT
// let j:number=10;
// let k:number=20;
// console.log(j>k&&j<k);//logical AND
// console.log(j>k||j<k);//logical OR
// console.log(!(j>k));//logical NOT   

// //ternary operator

// let age:number=18;
// let result:string=age>=18?"You are an adult":"You are a minor";
// console.log(result);

// let number1:number=10;
// let number2:number=20;
// let max:number=number1>number2?number1:number2;
// console.log(max);

// let queryresponse:number=401;
// let  response:string=queryresponse===200?"success":"failure";
// console.log(response);


// let queryresponse01:number=401;
// let response01:string=queryresponse01===401?"unauthorized":"NOT";
// console.log(response01);




let age:number=18;
let creditScore:number=650;
let eligibility:string=age>18&&creditScore>750?"eligible":"not eligible";
console.log(eligibility);


let age1:number=25;
let creditScore1:number=800;
if(age>18&& age<60&&creditScore>750)
    {
    console.log("eligible");
} else{
    console.log("not eligible");
}
let age2:number=17;
let creditScore2:number=700;
eligibility=age>20&&age<60&&creditScore>750?"eligible":"not eligible";
console.log(eligibility);

