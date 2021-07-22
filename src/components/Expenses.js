import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "../css/expenses.css";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses({ expenses }) {
  const [selectedDate, setSelectedDate] = useState("2021");

  const handleSubmitDate = (dates) => {
    setSelectedDate(dates);
  };

  //We filter the items by comparing the date selected by the user and comparing it against
  //the date property of the expense object.
  const filtered = expenses.filter(
    (e) => e.date.getFullYear().toString() === selectedDate
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={selectedDate}
          onSubmitDate={handleSubmitDate}
        />
        <ExpensesChart expenses={filtered} />
        {filtered.length === 0 ? (
          <p className="noExpense">No Expenses Found</p>
        ) : (
          filtered.map((expenses) => (
            <ExpenseItem
              key={expenses.id}
              title={expenses.title}
              amount={expenses.amount}
              date={expenses.date}
            />
          ))
        )}
      </Card>
    </div>
  );
}
export default Expenses;
