import React, { useState } from 'react'
import ExpenseList from './Components/ExpenseList/ExpenseList'
import ExpenseFilter from './Components/ExpensesFilter/ExpenseFilter'
import ExpenseForm from './Components/ExpenseForm/ExpenseForm'

const App = () => {
  const [expenses, setExpenses]=useState([])

  const addItem = (data)=>{
    setExpenses(()=>{[...expenses, data]
    })
  }
  const deleteItem = (id)=>{
    setExpenses(expenses.filter(expense => expense.id!=id))
  }
  const filterItem =(cat) =>{
    setExpenses(expenses.filter(expense=> expense.category == cat))
  }
  return (
    <React.Fragment>
            <header><h1>Expense Tracker</h1></header>
            
            <ExpenseForm addExpense= {addItem}/>
            <ExpenseFilter filterItem={filterItem}/>
           <ExpenseList items={expenses} deleteItem={deleteItem}/>
o
    </React.Fragment>
   
  )
}

export default App