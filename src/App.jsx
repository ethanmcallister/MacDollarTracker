import { useState } from 'react'

import './App.css'
import Menu from './LeftMenu/Menu.jsx'
import Budget from './BudgetSection/Budget.jsx'
import SummarySection from './SummarySection/SummarySection.jsx'

function App() {

  return (
    <>
    <div id='wrapper'>
      <Menu />
      <Budget />
      <SummarySection />
    </div>
    </>
  )
}

export default App
