import React, { useState } from "react";
import "../css/newExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAddExpense }) => {
  const [newExpense, setNewExpense] = useState(false);

  const handleClick = () => {
    setNewExpense(true);
  };
  // console.log("true>? " + newExpense);
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    setNewExpense(false);
  };

  const handleCancelClick = () => {
    setNewExpense(false);
  };

  return (
    <div className="new-expense">
      {!newExpense && <button onClick={handleClick}>Add New Expense</button>}
      {newExpense && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          cancel={handleCancelClick}
        />
      )}
    </div>
  );
};

export default NewExpense;
