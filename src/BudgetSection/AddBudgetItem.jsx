import { useState } from "react";
import './AddBudgetItem.css'

export default function AddBudgetItem( {addItem, setIsAddingItem, setIsGroupActivelyAdding} ) {

    const [item, setItem] = useState("");

    const handleInputChange = (e) => {
        if (e.target.value === '\n') {
            console.log('enter pressed');
            handleInputSubmit();
        }
        else if (e.target.value.length <= 30) {
            setItem(e.target.value);
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleInputSubmit();
        }
        else if (e.key === 'Escape') {
            setIsAddingItem(false);                 
            setIsGroupActivelyAdding(false);
        }
    }

    const handleInputSubmit = () => {
        if (item.length > 0) {
            addItem(item);
        }
        else {
            setIsAddingItem(false);                 
            setIsGroupActivelyAdding(false);
        }
    }

    return (
        <div className="add-budget-item-container">
            <input 
                className="add-budget-item-input"
                type="text"
                value={item} 
                onChange={(e) => handleInputChange(e)}
                onBlur={handleInputSubmit}
                onKeyDown={handleKeyDown}
                placeholder="Item Name"
            />
        </div>
    )
}
