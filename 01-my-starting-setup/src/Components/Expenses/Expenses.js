import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';
import React, {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';
// import Card from "../UI/Card";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear => {
    
    setFilteredYear(selectedYear);
  }

const filteredExpenses = props.items.filter(expense => {
  return expense.date.getFullYear().toString() === filteredYear;
});


return (
  <div>
    <div className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler} />
      <ExpensesChart expense={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
      
      
    </div>
  </div>
);
}

export default Expenses;