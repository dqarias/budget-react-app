import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import { generateId } from './helpers'
import IconNewExpense from './img/new-expense.svg'

function App() {
  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)
  const [expenses, setExpenses] = useState([])

  const handleClick = () => {
    setModal(true)
    
    setTimeout(()=>{
      setAnimateModal(true)
    }, 500)
  }

  const handleExpense = (expense) => {
    expense.id = generateId();
    setExpenses((prevState)=>[...prevState, expense])
    setAnimateModal(false)
        setTimeout(() => {
            setModal(false) 
        }, 500);
  }

  return (
    <div>
      <Header 
      budget={budget}
      setBudget={setBudget}
      isValidBudget={isValidBudget}
      setIsValidBudget={setIsValidBudget}/>
      {isValidBudget && 
      (<div 
      className='new-expense'
      onClick={handleClick}>
        <img src={IconNewExpense} alt="icon new expense" />
      </div>)}

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
