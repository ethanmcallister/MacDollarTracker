import { useState } from "react";

import './SummarySection.css'
import TransactionList from "./TransactionList.jsx";

export default function SummarySection() {


  return (
    <>
      <div id="summary-wrapper">
        <div id="summary-tabs-container">
          <h2 className="summary-tab">Transactions</h2>
          <h2 className="summary-tab">Summary</h2>
        </div>
        <TransactionList />
      </div>
    </>
  );
}
