import { useState } from "react";

import './TransactionSection.css'
import Transaction from "./Transaction.jsx";

const transactions = [
  { id: 0, name: "Smith's", amount: 10.5, date: "09/03" },
  { id: 1, name: "Walmart", amount: 50, date: "09/02" },
  { id: 2, name: "Amazon", amount: 80, date: "09/01" },
  { id: 3, name: "Maverik", amount: 1.23, date: "09/01" },
];

export default function TransactionSection() {

  const transactionItems = transactions.map(trans => 
    <li key={trans.id} className="transaction-item">
      <Transaction name={trans.name} amount={trans.amount} date={trans.date} />
    </li>
  )

  return (
    <>
      <div id="transactions-wrapper">
        <div id="transactions-title-container">
          <h1>Transactions</h1>
        </div>
        <ul id="transactions-list">
          {transactionItems}
          {transactionItems}
          {transactionItems}
          {transactionItems}
        </ul>
      </div>
    </>
  );
}
