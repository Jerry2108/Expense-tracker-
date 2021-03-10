import React, { useState, useContext } from "react";
import { TransactionContext } from "./TransactionContext"; 

const cardStyle1 = {
    width: "20rem", 
    height: "8rem", 
    color: "#3500D3"
}; 
const cardStyle2 = {
    width: "20rem",
    height: "8rem",
    color: "#f13c20"
}; 
function PrintIncomeExpenses() {
    const input = useContext(TransactionContext);
    
    const [balance, setBalance] = input.balance;
   
       return(
        <div class = "row">
            <div class="col card lg" style={cardStyle1}>
                <div class="card-header" style={{ color: "black"}}>
                    <b>Income</b>
                    <img src="https://img.icons8.com/plasticine/50/000000/economic-improvement.png" />
                </div>
                <div class="card-body">
                    <p class="money plus">+${balance.income}</p>
                </div>
            </div>
            <div class="col card lg" style={cardStyle2}>
                <div class="card-header" style={{ color: "black"}}>
                    <b>Expense </b>
                    <img src="https://img.icons8.com/cotton/50/000000/card-in-use--v1.png" />
                </div>
                <div class="card-body">
                    <p class="money minus">-${balance.expense}</p>
                </div>
            </div>
          
        </div>); 
}
export default PrintIncomeExpenses; 
