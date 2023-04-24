import React from 'react'
import { useState, useEffect } from 'react';
import { formatNumber } from '../helpers';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'

const ControlBudget = ({budget, expenses}) => {

    const [expense, setExpense] = useState(0)
    const [available, setAvailable] = useState(0)
    const [percentage, setPercentage] = useState(0)

    useEffect(() => {
      const totalExpense = expenses.reduce((acc, exp) => acc + Number(exp.quantity), 0)
      const totalAvailable = budget - totalExpense
      const newPercentage = (((budget - totalAvailable) / budget)*100).toFixed(2)
      
      setExpense(totalExpense)
      setAvailable(totalAvailable)
      setTimeout(() => {
        setPercentage(newPercentage)
      }, 1500);
    }, [expenses])
    
   console.log(expense)

  return (
    <div className='container-budget container shadow two-columns'>
        <div>
            <CircularProgressbar
            style={buildStyles({
                pathColor: '#060229',
                trailColor: '#f5f5f5'
            })}
            value={percentage}
            text={`${percentage}%`} />
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