import { useContext } from "react"
import ExpenseContext from "./Context"

function ExpenseList() {
    const { expenses } = useContext(ExpenseContext);
  
    return (
      <ul>
        {expenses?.map((expense, index) => (
          <li key={index}>
            {expense.name}: {expense.cost}
          </li>
        ))}
      </ul>
    );
  }

export default ExpenseList
