import React, { useState } from "react"; 
import Header from "./components/Header"; 
import PrintIncomeExpenses from "./components/IncomeExpenses"; 
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction"; 
import {TransactionProvider} from "./components/TransactionContext"; 
/*const style = {
    backgroundColor: "#5880E9"
};*/
function App() {
    return (
        <TransactionProvider>
        <div class="top">
        <Header />
        <PrintIncomeExpenses />
        <TransactionList />
        <AddTransaction />
        </div>
        </TransactionProvider>
        ); 

   }
export default App;
