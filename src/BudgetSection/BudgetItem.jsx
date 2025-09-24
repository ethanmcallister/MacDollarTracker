import { useState, useRef, useEffect } from "react";
import useOutsideClick from '../hooks/useOutsideClick';
import './BudgetItem.css'

export default function BudgetItem( {idx, itemName, modifyItemName, addToPlannedAmount, handleRemoveItem} ) {

    const [plannedAmount, setPlannedAmount] = useState(0);
    const [receivedAmount, setReceivedAmount] = useState(0);
    const [isEditingPlanned, setIsEditingPlanned] = useState(true);
    const [isEditingItemName, setIsEditingItemName] = useState(false);
    const [editedItemName, setEditedItemName] = useState("");
    const [itemClicked, setItemClicked] = useState(false);

    const plannedInputRef = useRef(null);
    const plannedLastAmount = useRef(0);

    // on initial render, focus the planned input
    useEffect(() => {
        plannedInputRef.current.focus();
    }, [])

    const handlePlannedClick = () => {
        setIsEditingPlanned(true);
    }

    const handleInputChange = (e) => {
        if (e.target.value.length <= 30) {
            setEditedItemName(e.target.value);
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleInputSubmit();
        }
        else if (e.key === 'Escape') {
            if (isEditingPlanned) {
                setIsEditingPlanned(false);
                return;
            }
            setIsEditingItemName(false);                 
        }
    }

    const handleInputSubmit = () => {
        if (editedItemName.length > 0 || isEditingPlanned) {
            if (isEditingPlanned) {
                handlePlannedSubmit();
                return;
            }
            modifyItemName(idx, editedItemName);
            setIsEditingItemName(false);
        }
        else {
            setIsEditingItemName(false);                 
        }
    }

    const handlePlannedSubmit = () => {
        setIsEditingPlanned(false);
        addToPlannedAmount(plannedAmount - plannedLastAmount.current);
        plannedLastAmount.current = plannedAmount;
    }

    const handleClickOutside = () => {
        setItemClicked(false);
    }

    const ref = useOutsideClick(handleClickOutside);

    let style;
    if (itemClicked) {
        style = {
            border: '3px solid white',
            backgroundColor: 'rgb(86, 85, 85)',
            borderRadius: '3px',
            width: '95%',
        };
    }
    else {
        style = {
            width: '90%',
            padding: '0 5%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            color: 'white',
        };
    }
    

    return (
        <div className="budget-item-container" onClick= {() => setItemClicked(true)} style={style} ref={ref} >
            {itemClicked && <img onClick={() => handleRemoveItem(idx, plannedAmount)} className="trash-can" src="./src/assets/trash-can.svg" alt="trash can button" />}
            <div className="budget-item-inner-container">
                {isEditingItemName ? (
                    <input
                        type="text"
                        className="modify-budget-item-input"
                        // value={itemName}
                        onChange={(e) => handleInputChange(e)}
                        onBlur={handleInputSubmit} // Exit editing mode on blur
                        onKeyDown={(e) => handleKeyDown(e)}
                        placeholder={"Item Name"}
                        autoFocus
                    />
                ) : (
                    <h4
                        className="item-title"
                        onClick={() => setIsEditingItemName(true)}
                    >
                        {itemName}
                    </h4>
                )}
                <div className="item-budget">
                    <div className="budget-amount-container">
                        {isEditingPlanned ? (
                            <input
                                ref={plannedInputRef}
                                type="text"
                                className="planned-budget-input"
                                onChange={(e) => setPlannedAmount(parseFloat(e.target.value))}
                                onBlur={() => setIsEditingPlanned(false)} // Exit editing mode on blur
                                onKeyDown={(e) => handleKeyDown(e)}
                                placeholder={plannedAmount.toFixed(2)}
                                autoFocus
                            />
                        ) : (
                            <p
                                id="planned-budget"
                                className="budget-amount"
                                onClick={handlePlannedClick}
                            >
                                $ {plannedAmount.toFixed(2)}
                            </p>
                        )}
        
                    </div>
                    <div className="budget-amount-container">
                        <p 
                            id="received-amount" 
                            className="budget-amount"
                        >
                        $ {receivedAmount.toFixed(2)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
