import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "../css/expenses.css";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";

function Expenses({ expenses }) {
  const [selectedDate, setSelectedDate] = useState("2021");

  const handleSubmitDate = (dates) => {
    setSelectedDate(dates);
  };
  console.log("in expenses" + selectedDate);
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={selectedDate}
          onSubmitDate={handleSubmitDate}
        />
        {expenses.map((expenses) => {
          return (
            <div>
              <ExpenseItem
                key={expenses.id}
                title={expenses.title}
                amount={expenses.amount}
                date={expenses.date}
              />
            </div>
          );
        })}
      </Card>
    </div>
  );
}
export default Expenses;
