import { useState } from "react";
import './BudgetItem.css'

export default function BudgetItem( {item} ) {
    return (
        <div className="budget-item-container">
            <h4 className="item-title">{item}</h4>
            <div className="item-budget">
                <div>
                    <p className="planned-budget">$0.00</p>
                </div>
                <div>
                    <p className="received">$0.00</p>
                </div>
            </div>
        </div>
    )
}
