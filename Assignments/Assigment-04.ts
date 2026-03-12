interface TransactionHx{
    TransactionHx:number[],  
    totalamount:number,
    totaldebited:number,
    totalcredited:number, 
}

let transactionHx: number[] = [50000, -2000,3000,-15000,-200,-300,4000,-3000];

let totalamount = 0;
let totaldebited = 0;
let totalcredited = 0;

let debitCount = 0;
let creditCount = 0;

for(let i = 0; i < transactionHx.length; i++){

    let amount = transactionHx[i];

    // Credit
    if(amount > 0){
        totalcredited += amount;
        creditCount++;
    }

    // Debit
    else{
        totaldebited += amount;
        debitCount++;
    }

    // Suspicious Transaction
    if(amount > 10000 || amount < -10000){
        console.log("Suspicious credit/debit transaction:", amount);
    }

    // Remaining Balance
    totalamount += amount;
}

console.log("Total Credit Transactions:", creditCount);
console.log("Total Debit Transactions:", debitCount);

console.log("Total Amount Credited:", totalcredited);
console.log("Total Amount Debited:", totaldebited);

console.log("Remaining Balance:", totalamount);


// for of loop 

interface Trnshx{
    TnxHistory:number[],
    TotalAmount:number,
    Totaldebited:number,
    Totalcredited:number,
    SuspuciousAmount:number,
}


let TnxHistory:number[]=[2000,2333,-23,98,-563,21432,-13000]
    
let TotalAmount:number=0,
Totaldebited:number=0,
Totalcredited:number=0,
SuspuciousAmount:number=0

for(let amount of TnxHistory){
    if(amount>0){
        Totalcredited+=amount;
        
    }
    else{
         Totaldebited +=amount;
    }
    if(amount>10000 || amount <-10000){
        
        SuspuciousAmount++;
    }

    TotalAmount+=amount
}
console.log("total amount:"   +TotalAmount);
console.log("total credited:" +Totalcredited);
console.log("total debited:" +Totaldebited);
console.log("suspicous transaction:" +SuspuciousAmount);