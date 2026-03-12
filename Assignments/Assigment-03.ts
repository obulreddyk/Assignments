// function Marksdetails()
// {

//   let studentName:string[]=["suresh","mahesh","naresh"];
 
//   let marks:number[]=[85,90,92];

// }
// 1. Create two arrays to store student names ["Suresh","Mahesh","Naresh"] and
// marks [75, 80, 82] Add 10 marks to each students using assignment operators and
// store it into another array, after adding 10 marks identify the average marks of all
// students

// Expected Output:
// Updated Marks:
// Suresh: 85
// Mahesh: 90
// Naresh: 92
// Average Marks: 89.0

interface Assigment03{
    studentNames:string[],
    marks:number[],
    updatedMarks:number[],
    averageMarks:number
}
let studentNames:string[]=["Suresh","Mahesh","Naresh","Ramesh"];
let marks:number[]=[75, 80, 82, 85];
let updatedMarks:number[]=[];
let total:number=0;

for(let i=0;i<marks.length;i++){
    updatedMarks[i]=marks[i]+10;
    total +=updatedMarks[i];
    console.log(studentNames[i] + " : " + updatedMarks[i]);
let averageMarks:number=total/updatedMarks.length;
console.log("Average Marks: " + averageMarks);
}
// interface employeedetails{
interface Employeedetails{
    employyename: string[],
    employesalary: number[],
    employeHike: number[],
    averagesalary: number
}

let employee: Employeedetails = {
    employyename: ["obul","reddy","obulreddy"],
    employesalary: [10000,20000,30000],
    employeHike: [],
    averagesalary: 0
}

let total1 = 0;

for(let i = 0; i < employee.employesalary.length; i++){
    employee.employeHike[i] = employee.employesalary[i] + 10000;
    total1 += employee.employeHike[i];

    console.log(employee.employyename[i] + " : " + employee.employeHike[i]);
}

employee.averagesalary = total1 / employee.employeHike.length;

console.log("Average Salary: " + employee.averagesalary);


