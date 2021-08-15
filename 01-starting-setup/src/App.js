import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
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
      date: new Date(2021, 1, 6),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <p> This is also Visible.</p>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
     
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    
    </div>
  );
}

export default App;
