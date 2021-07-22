import React, { useState } from "react";
import "../css/expenseItem.css";
import ExpenseDate from "./ExpenseDate";

import Card from "./Card";

function ExpenseItem({ title, amount, date }) {
  const [titleText] = useState(title);

  //We wrapped it in our customer Card component that will get the default
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{titleText}</h2>
      </div>
      <div className="expense-item__price">${amount}</div>
    </Card>
  );
}

export default ExpenseItem;
