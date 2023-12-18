import {useState, useContext} from 'react'
import ExpenseContext from './Context'

function AddExpenseForm() {
    const [name, setName] = useState('')
    const [cost, setCost] = useState('')
    const {addExpense} = useContext(ExpenseContext)

    const onSubmit = (e) => {
        e.preventDefault()
        addExpense(name, cost)
        setName('')
        setCost('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Expense Name' required='required' />
            <input type='number' value={cost} onChange={(e) => setCost(e.target.value)} placeholder='Cost' required='required' />
            <button type='submit'>Add</button>
        </form>
    )
}

export default AddExpenseForm