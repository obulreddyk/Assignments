//conditional statements
//if_else statement => when we don't know the results
//Switch -case statement => when we know the results
//nested if_else statement => when we have multiple conditions inside the if_else statement
let percentage:number=99;
if(percentage>=90){
    console.log("Grade: A");
    if(percentage>=95){
        console.log("Excellent");
    }
    else{
        console.log("Good");
    }
}  
else if(percentage>=80){
    console.log("Grade: B");
    if(percentage>=85){
        console.log("Very Good");
    }
    else{
        console.log("Good");
    }   
}

//switch-case statement => when we know the results will conyinue upto a certain point and then break the loop
let env:string="production";
switch(env){
    case "development":
        console.log("Development environment");
        break;
    case "staging":
        console.log("Staging environment");
        break;
    case "production":
        console.log("Production environment");
        break;
    default:
        console.log("Invalid environment");
}