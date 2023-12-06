import { useContext } from "react"
import ExpenseContext from "./Context"

function ExpenseList() {
    const { expense } = useContext(ExpenseContext);
  
    return (
      <ul>
        {expense?.map((expense, index) => (
          <li key={index}>
            {expense.name}: {expense.cost}
          </li>
        ))}
      </ul>
    );
  }

export default ExpenseList
