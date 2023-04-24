import React from 'react'
import Expense from './Expense'

const ListExpense = ({expenses, setExpenseEdit}) => {
  return (
    <div className='list-expense container'>
        <h2>{expenses.length > 0 ? <p>Expense</p>: <p>There is not expense</p>}</h2>
        {expenses.map(expense => (
            <Expense key={expense.id} expense={expense} setExpenseEdit={setExpenseEdit}/>
        ))}
    </div>
  )
}

export default ListExpense