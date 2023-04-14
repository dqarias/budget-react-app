import React from 'react'
import { useState } from 'react'
import Message from './Message'

const NewBudget = ({budget, setBudget}) => {

    const [message, setMessage] = useState('')
    const handleOnChange = (e) => {
        setBudget(e.target.value)
    }

    const handleBudget = (e) => {
        e.preventDefault()
        if (!Number(budget) || Number(budget) < 0){
            setMessage('is an invalid budget')
        }else{
            console.log('valid')
        }
    }

  return (
    <div className='container-budget container shadow'>
        <form onSubmit={handleBudget} className='form'>
            <div className='field'>
                <label htmlFor="">Define your budget</label>
                <input
                className='new-budget' 
                type="text"
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