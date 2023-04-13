import React from 'react'

const NewBudget = ({budget, setBudget}) => {
    const handleOnChange = (e) => {
        setBudget(e.target.value)
    }
  return (
    <div className='container-budget container shadow'>
        <form className='form'>
            <div className='field'>
                <label htmlFor="">Define your budget</label>
                <input
                className='new-budget' 
                type="text"
                placeholder='Add your budget'
                value={budget}
                onChange={handleOnChange} />
                <input type="submit" value='Add'/>
            </div>

        </form>
    </div>
  )
}

export default NewBudget