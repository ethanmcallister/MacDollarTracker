import { useState } from 'react'
import './Budget.css'

import BudgetGroup from './BudgetGroup.jsx' 

function Budget() {

  const [isGroupActivelyAdding, setIsGroupActivelyAdding] = useState(false);

  const stateProps = {
    isGroupActivelyAdding,
    setIsGroupActivelyAdding,
  }
  
  return (
    <>
      <div id='budget-wrapper'> 
        <div id='budget-title-container'>
            <h1 id='budget-title'>September 2025</h1> 
        </div>
        <div id='budget-content'>
            <BudgetGroup name={"Income"} {...stateProps} />
            <BudgetGroup name={"Giving"} {...stateProps} />
            <BudgetGroup name={"Transportation"} {...stateProps} />
            <BudgetGroup name={"Food"} {...stateProps} />
            <BudgetGroup name={"Personal"} {...stateProps} />
            <BudgetGroup name={"Insurance"} {...stateProps} />
        </div>
        <footer>Copyright © 2025 Ethan McAllister. All Rights Reserved.</footer>
      </div>
    </>
  )
}

export default Budget
