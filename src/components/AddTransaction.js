import React, { useState, useContext } from "react";
import { TransactionContext } from "./TransactionContext";

const style = {
    width: "20rem"
};


function AddTransaction() {
    const [category, updateCategory] = useState("");
    const [amount, updateAmount] = useState("");
    const input = useContext(TransactionContext);
    const [balance, setBalance] = input.balance;
    const [transactions, setTransactions] = input.transactions;
    function update() {
        const sign = amount.charAt(0);
        console.log(balance.income + parseFloat(amount.slice(1)));
        setTransactions(prevValue =>
            [
                ...prevValue,
                {
                    category: category,
                    amount: amount
                }]
        );
        setBalance(prevValue => {
            if (sign === '+') {
                return {
                    income: prevValue.income + Number(amount.slice(1)),
                    expense: prevValue.expense
                };
            }
            else if (sign === '-') {
                console.log(typeof (prevValue.expense));
                return {
                    income: prevValue.income,
                    expense: prevValue.expense + Number(amount.slice(1))
                };
            }
        });

    }
    return (

        <div class="add transaction">

            <h3><b>Add new transaction</b></h3>
            <hr></hr>
            <form>
                <div className = "form">
                <label for="text">Text:</label><br/>
                    <input type="text" id="item" name="item" placeholder="Enter category..." style={style}
                        value={category} onChange= {(e) => updateCategory(e.target.value)} />
                </div>
                <div className = "form">
                    <label for="amount">Amount <br />(-expense, +income)</label><br/>
                    <input type="text" name="amount" id="amount" placeholder="Enter amount..." style={style}
                        value={amount} onChange={(e) => updateAmount(e.target.value)} />
                </div>
                <button type="button" class="btn btn-dark" onClick={update}>Add transaction</button>
            </form>
        </div>
    );
}
export default AddTransaction;
