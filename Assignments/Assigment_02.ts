// interface loanapplication{
//      name:string,
//      salary:number,
//      credtScore:number,
//      isEmployed:boolean,
//      debt_income_ratio:number,
// }
// function evaluateLoanApplication(customer:loanapplication):string{
//     if(customer.credtScore>750) {
//         return "eligible"
      
//     }
//     else if(customer.credtScore>650 && 
//         customer.credtScore<=750 && 
//         customer.debt_income_ratio<=40)
//         {
//         if(customer.salary>=50000 && customer.isEmployed){
//             return "eligible"
        
//         }
//         return "not eligible"
//     }  
//     return "not eligible"
// }
// let application1:loanapplication={
//     name:"obul",
//     salary:6000,
//     credtScore:700,                     
//     isEmployed:true,
//     debt_income_ratio:30
// }
// console.log(evaluateLoanApplication(application1));

interface Onlinepayment{
Cutstomername:string,
Restaurantname:string,
OrderAmount:number,
DeliveryDistance:number,
PaymentStatus:string,
RestaurantStatus:string
}

function ProcessOrder(confirmOrder:Onlinepayment):string{
 if(confirmOrder.RestaurantStatus==="open" && confirmOrder.PaymentStatus==="paid" && confirmOrder.DeliveryDistance<=5){
    return "Order Processed"
 }  else if(confirmOrder.RestaurantStatus==="open" && confirmOrder.PaymentStatus==="Unpaid"){
    return "Payment Pending"
 }
 else if(confirmOrder.RestaurantStatus==="closed"){
    return "Restaurant Closed"
 }
return "Order cannot be processed"
}
 let order1:Onlinepayment={
    Cutstomername:"obul",
    Restaurantname:"Pizza Hut",
    OrderAmount:20,
    DeliveryDistance:3,
    PaymentStatus:"paid",
    RestaurantStatus:"open"
 }
 console.log(ProcessOrder(order1));
 
   


