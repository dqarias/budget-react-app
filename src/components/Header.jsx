import React from 'react'
import NewBudget from './NewBudget'

const Header = ({budget, setBudget, isValidBudget, setIsValidBudget}) => {
  return (
    <header>
        <h1>Managment Budget</h1>
        {isValidBudget ? 
        <div>valid</div> : <NewBudget
        budget={budget}
        setBudget={setBudget}
        setIsValidBudget={setIsValidBudget} />}
    </header>
  )
}

export default Header