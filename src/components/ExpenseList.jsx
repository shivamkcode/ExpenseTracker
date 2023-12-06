import { useContext } from "react"
import ExpenseContext from "./Context"

function ExpenseList() {
  const { expense, deleteExpense } = useContext(ExpenseContext);

  return (
    <ul>
      {expense?.map((expense, index) => (
        <li key={index}>
          <span>{expense.name}: ${expense.cost}</span>
          <button onClick={() => deleteExpense(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList
