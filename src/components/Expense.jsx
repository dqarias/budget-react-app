import React from 'react';
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import 'react-swipeable-list/dist/styles.css'
import { formatDate } from '../helpers'

import IconSaving from '../img/icon_saving.svg'
import IconHome from '../img/icon_home.svg'
import IconFood from '../img/icon_food.svg'
import IconExpense from '../img/icon_expense.svg'
import IconLeisure from '../img/icon_leisure.svg'
import IconHealth from '../img/icon_health.svg'
import IconSuscriptions from '../img/icon_suscriptions.svg'


const IconDictionary = {
    savings : IconSaving, 
    food : IconFood,
    home : IconHome,
    expenses : IconExpense,
    leisure : IconLeisure,
    health : IconHealth,
    suscriptions : IconSuscriptions
}

const Expense = ({expense, setExpenseEdit, handleDeleteExpense}) => {
    const {id, name, quantity ,category, date} = expense
    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={()=>setExpenseEdit(expense)}>
                Edit
            </SwipeAction>
        </LeadingActions>
    )
    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction onClick={()=>handleDeleteExpense(id)}
            destructive={true}>
                Delete
            </SwipeAction>
        </TrailingActions>
    )

  return (
    <SwipeableList>
        <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}>
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
        </SwipeableListItem>
    </SwipeableList>
  )
}

export default Expense