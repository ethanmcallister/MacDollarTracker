import { useState } from "react";

import './SummaryList.css';
import SummarySpendingItem from "./SummarySpendingItem";

export default function SummaryList() {

    return (
        <>
            <div className="summary-section">
                <h3 className="summary-section-title">Net Income</h3>
            </div>
            <div className="summary-section">
                <h3 className="summary-section-title">Spending</h3>
                <SummarySpendingItem name={"Income"}/>
                <SummarySpendingItem name={"Giving"}/>
                <SummarySpendingItem name={"Transportation"}/>
                <SummarySpendingItem name={"Food"}/>
                <SummarySpendingItem name={"Personal"}/>
                <SummarySpendingItem name={"Insurance"}/>
                <SummarySpendingItem name={"Income"}/>
                <SummarySpendingItem name={"Giving"}/>
                <SummarySpendingItem name={"Transportation"}/>
                <SummarySpendingItem name={"Food"}/>
                <SummarySpendingItem name={"Personal"}/>
                <SummarySpendingItem name={"Insurance"}/>
                <SummarySpendingItem name={"Income"}/>
                <SummarySpendingItem name={"Giving"}/>
                <SummarySpendingItem name={"Transportation"}/>
                <SummarySpendingItem name={"Food"}/>
                <SummarySpendingItem name={"Personal"}/>
                <SummarySpendingItem name={"Insurance"}/>
                <SummarySpendingItem name={"Income"}/>
                <SummarySpendingItem name={"Giving"}/>
                <SummarySpendingItem name={"Transportation"}/>
                <SummarySpendingItem name={"Food"}/>
                <SummarySpendingItem name={"Personal"}/>
                <SummarySpendingItem name={"Insurance"}/>
                <SummarySpendingItem name={"Income"}/>
                <SummarySpendingItem name={"Giving"}/>
                <SummarySpendingItem name={"Transportation"}/>
                <SummarySpendingItem name={"Food"}/>
                <SummarySpendingItem name={"Personal"}/>
                <SummarySpendingItem name={"Insurance"}/>
            </div>
        </>
    );
}
