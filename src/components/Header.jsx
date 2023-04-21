import React from 'react'
import NewBudget from './NewBudget'
import ControlBudget from './ControlBudget'

const Header = ({budget, setBudget, isValidBudget, setIsValidBudget, expenses}) => {
  return (
    <header>
        <h1>Managment Budget</h1>
        {isValidBudget ? 
        <ControlBudget
        expenses={expenses}
        budget={budget} /> : 
        <NewBudget
        budget={budget}
        setBudget={setBudget}
        setIsValidBudget={setIsValidBudget} />}
    </header>
  )
}

export default Header