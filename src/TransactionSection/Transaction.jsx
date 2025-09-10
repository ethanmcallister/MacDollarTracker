import { useState } from "react";

import './Transaction.css'

function Transaction({name, amount, date}) {
  return (
    <>
      <div className="transaction">
        <p>{date}</p>
        <p>{name}</p>
        <p>${amount}</p>
      </div>
    </>
  )
}

export default Transaction;
