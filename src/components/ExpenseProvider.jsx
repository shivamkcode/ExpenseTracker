import {useState} from 'react'
import ExpenseContext from './Context'
import PropTypes from 'prop-types';

function ExpenseProvider({ children }) {
    const [expense, setExpense] = useState([])

    const addExpense = (name, cost) => {
        setExpense([...expense, {name, cost}])
    }
    console.log(expense)
    return (
        <ExpenseContext.Provider value={{expense, addExpense}}>
            {children}
        </ExpenseContext.Provider>
    )
} 
ExpenseProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
export default ExpenseProvider