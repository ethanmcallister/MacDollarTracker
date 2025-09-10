import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Menu from './LeftMenu/Menu.jsx'
import Budget from './BudgetSection/Budget.jsx'
import TransactionSection from './TransactionSection/TransactionSection.jsx'

function App() {

  return (
    <>
    <div id='wrapper'>
      <Menu />
      <Budget />
      <TransactionSection />
    </div>
    </>
  )
}

export default App
