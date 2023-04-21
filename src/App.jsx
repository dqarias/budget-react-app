import { useState } from 'react'
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
  
  const handleClick = () => {
    setModal(true)
    
    setTimeout(()=>{
      setAnimateModal(true)
    }, 500)
  }

  const handleExpense = (expense) => {
    expense.id = generateId();
    expense.date = Date.now();
    setExpenses((prevState)=>[...prevState, expense])
    setAnimateModal(false)
        setTimeout(() => {
            setModal(false) 
        }, 500);
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
          <ListExpense expenses={expenses}/>
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
        />}
      
    </div>
  )
}

export default App
