import { useState } from "react";

import './SummarySection.css'
import TransactionList from "./TransactionList.jsx";
import SummaryList from "./SummaryList.jsx";

export default function SummarySection() {
  const [isViewingSummary, setIsViewingSummary] = useState(false);

  return (
    <>
      <div id="summary-wrapper">
        <div id="summary-tabs-container">
          <h2 
            className="summary-tab" 
            onClick={() => setIsViewingSummary(false)} 
            style={!isViewingSummary ? {borderBottom: "3px solid rgb(80, 127, 210)"} : {}}
          >
            Transactions
          </h2> 
          <h2 
            className="summary-tab" 
            onClick={() => setIsViewingSummary(true)}
            style={isViewingSummary ? {borderBottom: "3px solid rgb(80, 127, 210)"} : {}}
          >
            Summary
          </h2>
        </div>
        <div id="summary-content">
          {!isViewingSummary && <TransactionList />}
          {isViewingSummary && <SummaryList />}
        </div>
      </div>
    </>
  );
}
