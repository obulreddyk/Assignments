//primitive data types in typescript();


//number 
let num:number=5;
//string
let name:string="obu'red'l";

console.log(num);
console.log(name);
//boolean
let x:number=300;
let y:number=20;
let z:boolean=x>y;

console.log(z);
//null
let n:null=null;
console.log(n);
//undefined
let u:undefined=undefined;
console.log(u);

//union=union represent more than one datatype 
let employeId:string|number;
employeId="";
console.log(employeId);

//any = is used to store any data type .(unrecoommneded to use any data type because it can lead to errors in the code)
let data :any;
data="obul12345";
console.log(data);
//non-primitive data types in typescript
//object=the data type is used to store key and values 
interface emplooyedetaials{
    name: string,
    mobileNumber: number,
    email:string
    address:{
        city: string,
        state: string,
        country: string
    }
}
let employee:emplooyedetaials={
    name:"obul",
    mobileNumber:1234567890,
    email:"obul@example.com",
    address:{
        city:"Hyderabad",
        state:"Telangana",
        country:"India"
    }
}
employee.name="obulreddy";
employee.address.city='Warangal';
console.log(employee);

//ARRAY// we can store multiple values of the same data type in an array// we can also store multiple values of different data types in an array using  type.
let fruits: string[]=["apple","banana","orange"];
let prices: number[]=[10,10,10];
let fruitsandprices:(string|number)[]=["apple",10,"banana",10,"orange",10];
console.log(fruits);
console.log(prices);
console.log(fruitsandprices);

//tuple=the data type is used to store multiple values of different data types in a single variable// order of data types is important in tuple.
let employeeDetails:[string,number,string]=["obul",1234567890,"obul@example.com"];
console.log(employeeDetails);
//function=the data type is used to store a function in a variable.
//void=function that does not return any value.
function obul(name:string):void{
    console.log(`Hello, ${name}!`);
}
obul("obul");

//map=the data type is used to store key and values in a map.
//set =the data type is used to store unique values in a set.
let map:Map<string,number>=new Map();
map.set("apple",10);
map.set("banana",10);
map.set("orange",10);
console.log(map.get("apple"));
map.delete("orange");
console.log(map.has("orange"));

