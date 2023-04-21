import React from 'react'
import { useState, useEffect } from 'react';
import { formatNumber } from '../helpers';

const ControlBudget = ({budget, expenses}) => {

    const [expense, setExpense] = useState(0)
    const [available, setAvailable] = useState(0)

    useEffect(() => {
      const totalExpense = expenses.reduce((acc, exp) => acc + Number(exp.quantity), 0)
      const totalAvailable = budget - totalExpense
      setExpense(totalExpense)
      setAvailable(totalAvailable)
    }, [expenses])
    
   console.log(expense)

  return (
    <div className='container-budget container shadow two-columns'>
        <div>
            <p>Graph</p>
        </div>
        <div className='content-budget'>
            <p>
                <span>Budget:</span> {formatNumber(budget)}
            </p>
            <p>
                <span>Available:</span> {formatNumber(available)}
            </p>
            <p> 
                <span>Expenses:</span> {formatNumber(expense)}
            </p>

        </div>
    </div>
  )
}

export default ControlBudget