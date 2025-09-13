import { useState } from "react";
import './BudgetGroup.css'
import BudgetItem from "./BudgetItem.jsx";
import AddBudgetItem from "./AddBudgetItem.jsx";

export default function BudgetGroup({name, isGroupActivelyAdding, setIsGroupActivelyAdding}) {

    const [items, setItems] = useState([]);
    const [isAddingItem, setIsAddingItem] = useState(false);

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
                {items.map((item, index) => (
                    <BudgetItem key={index} idx={item.idx} itemName={item.itemName} modifyItemName={modifyItemName} />
                ))}

            </div>
            <div className="budget-group-add-item-container">
                {isAddingItem && <AddBudgetItem addItem={addItem} setIsAddingItem={setIsAddingItem} setIsGroupActivelyAdding={setIsGroupActivelyAdding}/>}
            </div>
            <div onClick={handleAddItem} className="add-item-btn-container">
                <p className="budget-group-btn">Add Item</p>
            </div>
        </div>
    )
}
