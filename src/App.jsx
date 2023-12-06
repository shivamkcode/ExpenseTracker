import React from 'react'
import ExpenseList from './components/ExpenseList'
import AddExpenseForm from './components/AddExpenseForm'
import ExpenseProvider from './components/ExpenseProvider'

function Expense() {
  return (
    <ExpenseProvider>
      <div>
        <h2>Expense Tracker</h2>
        <AddExpenseForm />
        <ExpenseList />
      </div>
    </ExpenseProvider>
  )
}

export default Expense
