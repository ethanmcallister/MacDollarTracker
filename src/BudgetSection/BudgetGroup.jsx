import { useState } from "react";
import './BudgetGroup.css'
import BudgetItem from "./BudgetItem.jsx";
import AddBudgetItem from "./AddBudgetItem.jsx";

export default function BudgetGroup({name, isGroupActivelyAdding, setIsGroupActivelyAdding}) {

    const [items, setItems] = useState([]);
    const [isAddingItem, setIsAddingItem] = useState(false);

    const addItem = (item) => {
        setItems([...items, <BudgetItem key={items.length} item={item}/>]);
        setIsGroupActivelyAdding(false);
        setIsAddingItem(false);
    }

    const handleAddItem = () => {
        if (isGroupActivelyAdding) return;
        setIsGroupActivelyAdding(true);
        setIsAddingItem(true);
    }

    return (
        <div id="budget-group-container">
            <div className="budget-group-title-container">
                <h3 className="budget-group-title">{name}</h3>
                <div className="budget-group-amounts-container">
                    <h4 className="budget-group-planned">Planned</h4>
                    <h4 className="budget-group-received">Received</h4>
                </div>
            </div>
            <div className="budget-group-items-container">
                {items}
            </div>
            <div className="budget-group-add-item-container">
                {isAddingItem && <AddBudgetItem addItem={addItem} setIsAddingItem={setIsAddingItem} setIsGroupActivelyAdding={setIsGroupActivelyAdding}/>}
            </div>
            <div onClick={handleAddItem}>
                <p className="budget-group-btn">Add Item</p>
            </div>
        </div>
    )
}
