import React, {createContext, useState} from "react"; 
export const TransactionContext = createContext();
export const TransactionProvider = props => {
    const [transactions, setTransactions] = useState([
        {
            category: "",
            amount: ""
        }
    ]); 
    const [balance, setBalance] = useState(
        {
            income: 0, 
            expense: 0
        }
    ); 
    const input = { balance: [balance, setBalance], transactions: [transactions, setTransactions] };
    return (
        <TransactionContext.Provider value={input}>
            {props.children}
        </TransactionContext.Provider>
    );}