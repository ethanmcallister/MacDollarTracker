import { useState } from "react";

import Transaction from "./Transaction";

const transactions = [
  { id: 0, name: "Smith's", amount: 10.5, date: "09/03" },
  { id: 1, name: "Walmart", amount: 50, date: "09/02" },
  { id: 2, name: "Amazon", amount: 80, date: "09/01" },
  { id: 3, name: "Maverik", amount: 1.23, date: "09/01" },
];

export default function TransactionList() {
    
  const transactionItems = transactions.map(trans => 
    <li key={trans.id} className="transaction-item">
      <Transaction name={trans.name} amount={trans.amount} date={trans.date} />
    </li>
  )

  return (
    <ul id="transactions-list">
        {transactionItems}
        {transactionItems}
        {transactionItems}
        {transactionItems}
    </ul>
  );
}
