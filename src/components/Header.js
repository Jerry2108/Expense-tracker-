import React, { useState, useContext } from "react";
import { TransactionContext } from "./TransactionContext.js"; 
var headingStyle = {
	padding: "2%", 
	textAlign: "center"
};
var balanceStyle = {
	padding: "3%",
	marginTop: "20px"
};
function Header() {
	const input = useContext(TransactionContext);
	const [balance, setBalance] = input.balance;
	
	return (
		<div class="container">
			<h1 style={headingStyle}>Expense tracker</h1> 
			<div class="balance" style={balanceStyle}>
				<h4>My Budget</h4>
				<h1 id="balance">${balance.income - balance.expense}</h1>
			</div>
		</div> 
	)
}
export default Header; 