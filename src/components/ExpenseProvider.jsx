import {useState, useEffect} from 'react'
import ExpenseContext from './Context'

// eslint-disable-next-line react/prop-types
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
    return (
        <ExpenseContext.Provider value={{expense, addExpense}}>
            {children}
        </ExpenseContext.Provider>
    )
} 
export default ExpenseProvider