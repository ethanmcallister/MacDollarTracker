import { useState, useRef } from "react";

import './BudgetGroup.css'
import BudgetItem from "./BudgetItem.jsx";
import AddBudgetItem from "./AddBudgetItem.jsx";

export default function BudgetGroup({name, isGroupActivelyAdding, setIsGroupActivelyAdding}) {

    const [items, setItems] = useState([]);
    const [isAddingItem, setIsAddingItem] = useState(false);
    const [plannedTotal, setPlannedTotal] = useState(0);

    const addItem = (itemName) => {
        setItems([...items, { idx: items.length, itemName: itemName } ]);
        setIsGroupActivelyAdding(false);
        setIsAddingItem(false);
    }

    const handleAddItem = () => {
        if (isGroupActivelyAdding) return;
        setIsGroupActivelyAdding(true);
        setIsAddingItem(true);
    }

    const modifyItemName = (idx, newItemName) => {

        // Create a new array with the updated item
        const newItems = items.map((item, index) => {
            if (index === idx) {
                return { idx: index, itemName: newItemName };
            }
            return item;
        });

        setItems(newItems); // Update the state with the new array
    };

    const addToPlannedAmount = (amount) => {
        setPlannedTotal(plannedTotal + amount);
    }

    const handleRemoveItem = (idx, amount) => {
        // create a copy of items where the the idx of the item to be removed is set to -1
        const newItems = items.map((item, index) => {
            if (index === idx) {
                return { idx: -1, itemName: "" };
            }
            return item;
        });
        setItems(newItems);
        setPlannedTotal(plannedTotal - amount);
    }

    const handleClickGroupTitle = () => {
        alert(`You clicked on the ${name} group title!`);
        // Future feature: Edit group name
        // another feature: remove group button and capability
    }

    return (
        <div id="budget-group-container">
            <div className="budget-group-title-container">
                <h3 onClick={handleClickGroupTitle} className="budget-group-title">{name}</h3>
                <div className="budget-group-amounts-container">
                    <h4 
                        className="budget-group-planned"
                    >
                        Planned
                    </h4>
                    <h4 
                        className="budget-group-received"
                    >
                        { name === "Income" ? "Received" : "Spent" }
                    </h4>
                </div>
            </div>
            <div className="budget-group-items-container">
                {items.map((item, index) => (
                    // only create a BudgetItem if the idx is not -1
                    item.idx !== -1 &&
                    <BudgetItem key={index} idx={item.idx} itemName={item.itemName} modifyItemName={modifyItemName} addToPlannedAmount={addToPlannedAmount} handleRemoveItem={handleRemoveItem} />
                ))}

            </div>
            <div className="budget-group-add-item-container">
                {isAddingItem && <AddBudgetItem addItem={addItem} setIsAddingItem={setIsAddingItem} setIsGroupActivelyAdding={setIsGroupActivelyAdding} />}
            </div>
            <div className="budget-group-final-row">
                <div onClick={handleAddItem} className="add-item-btn-container">
                    <p className="budget-group-btn">Add Item</p>
                </div>
                <div className="budget-group-totals-container">
                    <div className="budget-total-amount">
                        <strong className="budget-total">$ {plannedTotal.toFixed(2)}</strong>
                    </div>
                    <div className="budget-total-amount">
                        <strong className="budget-total">$ 0.00</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}
