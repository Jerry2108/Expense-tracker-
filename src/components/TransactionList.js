import React, { useState, useContext } from "react";
import {TransactionContext} from "./TransactionContext"; 

const style1 = {
    width: "20rem",
    height: "40px", 
    borderStyle: "solid",
    borderRightColor: "#3500D3",
    borderRightWidth: "5px", 
    marginBottom: "10px"
};
const style2 = {
    width: "20rem",
    height: "40px",
    borderStyle: "solid",
    borderRightColor: "#f13c20", 
    borderRightWidth: "5px",
    marginBottom: "10px"
}
const rightText = {
    float: "right"
}; 
const leftText = {
    float: "left"
}; 

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

/*use map function for transactions*/
function TransactionList() {
    const input = useContext(TransactionContext);
    const [balance, setBalance] = input.balance;
    const [transactions, setTransactions] = input.transactions; 
  
    return (
        <div class="transaction">
            <h3>History</h3>
            <hr></hr>
            {
                transactions.map(item =>
                    <div style={item.amount.charAt(0) == '+' ? style1 : style2}>
                        <p style={leftText}>{item.category}</p>
                        <p style={rightText}>{item.amount}</p>
                    </div>)}
        </div>);
}
export default TransactionList; 
/*<h3>History</h3>
    <hr></hr>
            {
    transactions.map(item =>
        <div style={item.amount.charAt(0) == '+' ? style1 : style2}>
            <p style={leftText}>{item.category}</p>
            <p style={rightText}>{item.amount}</p>
        </div>)
}*/