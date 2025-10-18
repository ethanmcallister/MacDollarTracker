import { useState } from "react";

import './SummaryList.css';
import SummaryIncomeItem from "./SummaryIncomeItem";
import SummarySpendingItem from "./SummarySpendingItem";

export default function SummaryList() {
    const imperial = "#ED2939";

    return (
        <>
            <div className="summary-section">
                <h3 className="summary-section-title">Net Income</h3>
                <SummaryIncomeItem name={"Total Income"} amount={"10,071.32"} color={"green"} />
                <SummaryIncomeItem name={"Total Expenses"} amount={"2,798.37"} color={imperial} />
                {/* {should be red if neg} */}
                <SummaryIncomeItem name={"Net Income/Loss"} amount={"7,281.95"} color={"white"} /> 
            </div>
            <div className="summary-section">
                <h3 className="summary-section-title">Spending</h3>
                <SummarySpendingItem name={"Giving"}/>
                <SummarySpendingItem name={"Transportation"}/>
                <SummarySpendingItem name={"Food"}/>
                <SummarySpendingItem name={"Personal"}/>
                <SummarySpendingItem name={"Insurance"}/>
            </div>
        </>
    );
}
