import { useState, useEffect } from 'react'
import Header from './components/Header'
import ListExpense from './components/ListExpense'
import Modal from './components/Modal'
import { generateId } from './helpers'
import IconNewExpense from './img/new-expense.svg'

function App() {
  const [expenses, setExpenses] = useState([])
  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)
  const [expenseEdit, setExpenseEdit] = useState({}) 
  
  useEffect(()=>{
    if(Object.keys(expenseEdit).length > 0){
      setModal(true)
      setTimeout(()=>{
      setAnimateModal(true)
    }, 500)
    }
  }, [expenseEdit])

  const handleClick = () => {
    setModal(true)
    setExpenseEdit({})
    setTimeout(()=>{
      setAnimateModal(true)
    }, 500)
  }

  const handleExpense = (expense) => {
    if(expense.id){
      const updateExpense = 
      expenses.map(prevState => prevState.id === expense.id ? expense : prevState)
      expense.date = Date.now();
      setExpenses(updateExpense)
      
    }else{
      expense.id = generateId();
      expense.date = Date.now();
      setExpenses((prevState)=>[...prevState, expense])
    }
    setAnimateModal(false)
        setTimeout(() => {
            setModal(false) 
        }, 500);
  }

  const handleDeleteExpense = (id) => {
          const expenseUpdate = expenses.filter(expense => expense.id !== id)
          setExpenses(expenseUpdate)
  }

  return (
    <div className={modal ? 'fixed' : ''}>
      <Header 
      budget={budget}
      setBudget={setBudget}
      isValidBudget={isValidBudget}
      setIsValidBudget={setIsValidBudget}
      expenses={expenses}/>
      {isValidBudget && (
      <>
        <main>
          <ListExpense 
          expenses={expenses}
          setExpenseEdit={setExpenseEdit}
          handleDeleteExpense={handleDeleteExpense} />
        </main>
        <div 
        className='new-expense'
        onClick={handleClick}>
          <img src={IconNewExpense} alt="icon new expense" />
        </div>
      </>)}

      {modal && 
        <Modal 
        setModal={setModal}
        animateModal={animateModal}
        setAnimateModal = {setAnimateModal}
        handleExpense = {handleExpense}
        expenseEdit={expenseEdit}
        />}
      
    </div>
  )
}

export default App
