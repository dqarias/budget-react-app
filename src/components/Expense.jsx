import React from 'react'
import { formatDate } from '../helpers'

import IconSaving from '../img/icon_saving.svg'
import IconHome from '../img/icon_home.svg'
import IconFood from '../img/icon_food.svg'
import IconExpense from '../img/icon_expense.svg'
import IconLeisure from '../img/icon_leisure.svg'
import IconHealth from '../img/icon_health.svg'
import IconSuscriptions from '../img/icon_suscriptions.svg'


const IconDictionary = {
    saving : IconSaving, 
    food : IconFood,
    home : IconHome,
    expense : IconExpense,
    leisure : IconLeisure,
    health : IconHealth,
    suscriptions : IconSuscriptions
}

const Expense = ({expense}) => {
    const {id, name, quantity ,category, date} = expense
  return (
    <div className='expense shadow'>
        <div className='content-expense'>
            <img 
                src={IconDictionary[category]}
                alt="Icon expense" />
            <div className='description-expense'>
                <p className='category'>{category}</p>
                <p className='name-expense'>{name}</p>
                <p className='date-expense'>
                    Add on: {''}
                    <span>{formatDate(date)}</span>
                </p>
            </div>
        </div>
        <p className='quantity-expense'>${quantity}</p>
    </div>
  )
}

export default Expense