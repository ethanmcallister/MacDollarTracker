import { useState, useRef, useEffect } from "react";
import './AddBudgetItem.css'


export default function AddBudgetItem( {addItem, setIsAddingItem, setIsGroupActivelyAdding} ) {

    const [itemName, setItemName] = useState("");
    const addItemInputRef = useRef(null);

    useEffect(() => {
        addItemInputRef.current.focus();
    })

    const handleInputChange = (e) => {
        if (e.target.value.length <= 30) {
            setItemName(e.target.value);
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
        if (itemName.length > 0) {
            addItem(itemName, setItemName);
        }
        else {
            setIsAddingItem(false);                 
            setIsGroupActivelyAdding(false);
        }
    }


    return (
        <div className="add-budget-item-container">
            <input 
                ref={addItemInputRef}
                className="add-budget-item-input"
                type="text"
                value={itemName} 
                onChange={(e) => handleInputChange(e)}
                onBlur={handleInputSubmit}
                onKeyDown={handleKeyDown}
                placeholder="Item Name"
            />
        </div>
    )
}
