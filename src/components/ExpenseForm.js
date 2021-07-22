import React, { useState } from "react";
import "../css/expenseForm.css";

function ExpenseForm({ onSaveExpenseData, cancel }) {
  //Using multiple states to store the input data values

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // We could also use one single state to store the values.

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  //To store enteredTitle in userInput , we use the setUserInput fucntion and
  //store the e.target.value in there. But we cant leaeve out entered amount or
  //entered date so we use the spread opeartor to copy that first and overwrite the
  //enteredTitle value later. This is not perfect though
  // setUserInput({
  //   ...userInput,
  //   enteredTitle: event.target.value,
  // });

  //We can send the prevState as argument
  //     setUserInput((prevState) => {
  //       return {
  //         ...prevState,
  //         enteredTitle: event.target.value,
  //       };
  //     });
  //   };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput((prevState) => {
    //     return {
    //       ...prevState,
    //       enteredAmount: event.target.value,
    //     };
    //   });
    // };
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    //     setUserInput((prevState) => {
    //         return {...prevState , enteredDate: event.target.value}
    //     })

    //   };
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    // console.log(expenseData);
    onSaveExpenseData(expenseData); //Passing expensedata as a parameter and sending the value to its parent
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              onChange={titleChangeHandler}
              value={enteredTitle}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              onChange={amountChangeHandler}
              value={enteredAmount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
              value={enteredDate}
            />
          </div>
        </div>

        <div className="new-expense__actions">
          <button type="button" onClick={cancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </>
  );
}

export default ExpenseForm;
