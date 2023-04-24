import React from 'react'
import Expense from './Expense'

const ListExpense = ({expenses, setExpenseEdit, handleDeleteExpense}) => {
  return (
    <div className='list-expense container'>
        <h2>{expenses.length > 0 ? <p>Expense</p>: <p>There is not expense</p>}</h2>
        {expenses.map(expense => (
            <Expense 
            key={expense.id} 
            expense={expense} 
            setExpenseEdit={setExpenseEdit}
            handleDeleteExpense={handleDeleteExpense}/>
        ))}
    </div>
  )
}

export default ListExpense