import { useState } from "react";
import './BudgetItem.css'

export default function BudgetItem( {item} ) {

    // [isEditingPlanned, setIsEditingPlanned] = useState(false);

    return (
        <div className="budget-item-container">
            <h4 className="item-title">{item}</h4>
            <div className="item-budget">
                <div className="budget-amount-container">
                    <p 
                        id="planned-budget" 
                        className="budget-amount"
                        onClick={() => alert("Clicked Received")}
                    >
                    $0.00
                    </p>
                </div>
                <div className="budget-amount-container">
                    <p 
                        id="received-amount" 
                        className="budget-amount"
                    >
                    $0.00
                    </p>
                </div>
            </div>
        </div>
    )
}
