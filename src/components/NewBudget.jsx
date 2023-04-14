import React from 'react'
import { useState } from 'react'
import Message from './Message'

const NewBudget = ({budget, setBudget, isValidBudget, setIsValidBudget}) => {

    const [message, setMessage] = useState('')
    const handleOnChange = (e) => {
        setBudget(e.target.value)
    }

    const handleBudget = (e) => {
        e.preventDefault()
        if (!budget || budget < 0){
            return setMessage('is an invalid budget')
        }
            setMessage('')
            setIsValidBudget(true)
            console.log(budget)
    }

  return (
    <div className='container-budget container shadow'>
        <form onSubmit={handleBudget} className='form'>
            <div className='field'>
                <label htmlFor="">Define your budget</label>
                <input
                className='new-budget' 
                type="number"
                placeholder='Add your budget'
                value={budget}
                onChange={handleOnChange} />
                <input type="submit" value='Add'/>
                {message && <Message type="error">{message}</Message>}
            </div>

        </form>
    </div>
  )
}

export default NewBudget