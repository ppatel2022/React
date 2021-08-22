import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2021, 2, 28),
    },
    { id: "e2", 
      title: "Rice", 
      amount: 23.32, 
      date: new Date(2021, 3, 19), 
    },
    {
      id: "e3",
      title: "Electic bill",
      amount: 134.76,
      date: new Date(2021, 5, 8),
    },
    {
      id: "e4",
      title: "Frying Oil",
      amount: 56.43,
      date: new Date(2022, 8, 18),
    },
    {
      id: "e4",
      title: "Charging Cabel",
      amount: 16.98,
      date: new Date(2020, 5, 12),
    },
    {
      id: "e4",
      title: "Chocolate Candy",
      amount: 36.43,
      date: new Date(2020, 3, 6),
    },
  ];

  const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
    const addExpenseHandler = (expense) => {
      setExpenses( (prevExpenses) => {
        return [expense, ...prevExpenses];});
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
