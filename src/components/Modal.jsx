import React from 'react'
import { useState } from 'react'
import CloseBtn from '../img/close.svg'
import Message from './Message'

const Modal = ({setModal, animateModal, setAnimateModal, handleExpense}) => {
const [name, setName] = useState('')
const [quantity, setQuantity] = useState(0)
const [category, setCategory] = useState('')
const [message, setMessage] = useState('')


    const handleCloseModal = () => {
        setAnimateModal(false)
        setTimeout(() => {
            setModal(false) 
        }, 500);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if ([name, quantity, category].includes('')){
            setMessage('All the fields are mandatory')
            setTimeout(() => {
                setMessage('')
            }, 2000);
            return
        }
      
        handleExpense({name, quantity, category})
        setName('')
        setQuantity('')
        setCategory('')
    }

  return (
    <div className='modal'>
        <div className='close-modal'>
            <img 
                src={CloseBtn} 
                alt="close modal"
                onClick={handleCloseModal}
                 />
        </div>
        <form 
        className={`form ${animateModal ? 'animate' : 'close'}`}
        onSubmit={handleSubmit} >
            <legend>New Expense</legend>
            {message && <Message type='error'>{message}</Message>}
            <div className='field'>
                <label htmlFor="name">Expense's Name</label>
                <input 
                    id='name'
                    type="text"
                    value={name}
                    placeholder='Add expense name'
                    onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className='field'>
                <label htmlFor="quantity">Expense's Name</label>
                <input 
                    id='quantity'
                    type="number"
                    value={quantity}
                    placeholder='Add expense quantity: fi. 300'
                    onChange={(e)=>setQuantity(e.target.value)}
                     />
            </div>
            <div className='field'>
                <label htmlFor="category">Category</label>
                <select 
                    id="category"
                    value={category}
                    onChange={(e)=>setCategory(e.target.value)}
                >
                    <option value="">-- Select</option>
                    <option value="savings">Savings</option>
                    <option value="food">Food</option>
                    <option value="home">Home</option>
                    <option value="expenses">General Expenses</option>
                    <option value="leisure">Leisure</option>
                    <option value="Health">health</option>
                    <option value="suscriptions">Suscriptions</option>
                </select>
            </div>
            <input type="submit" value='Add Expense' />
        </form>
    </div>
  )
}

export default Modal