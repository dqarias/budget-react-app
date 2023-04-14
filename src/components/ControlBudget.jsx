import React from 'react'

const ControlBudget = ({budget}) => {

    const formatNumber = (number) => {
        return Number(number).toLocaleString("en-US", {style:"currency", currency:"USD"});
    }

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
                <span>Available:</span> {formatNumber(0)}
            </p>
            <p> 
                <span>Expenses:</span> {formatNumber(0)}
            </p>

        </div>
    </div>
  )
}

export default ControlBudget