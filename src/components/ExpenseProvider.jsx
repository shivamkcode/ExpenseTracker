import {useState, useEffect} from 'react'
import ExpenseContext from './Context'

function ExpenseProvider({ children }) {
    const [expense, setExpense] = useState(() => {
      const localData = localStorage.getItem('expense');
      return localData ? JSON.parse(localData) : [];
    });
  
    useEffect(() => {
      localStorage.setItem('expense', JSON.stringify(expense));
    }, [expense]);
  
    const addExpense = (name, cost) => {
        setExpense([...expense, {name, cost}])
    }

    const deleteExpense = (index) => {
        const newExpenses = expense.filter((expense, i) => i !== index);
        setExpense(newExpenses);
      };

    return (
        <ExpenseContext.Provider value={{expense, addExpense, deleteExpense}}>
            {children}
        </ExpenseContext.Provider>
    )
} 
export default ExpenseProvider