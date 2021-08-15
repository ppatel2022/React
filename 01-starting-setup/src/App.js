import Expenses from "./Components/Expenses/Expenses";

const App = () => {
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
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
