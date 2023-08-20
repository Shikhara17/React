import Expense from "./components/expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
const App=() =>{
  const data = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28)
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12)
    }
  ];
  const addExceptionHandler=expenses=>{
    console.log(expenses)
  }
  return (
    <div>
      <NewExpense onAddExpense={addExceptionHandler}/>
      {/* Syntax can be used as object destructring while calling and syntx 2 */}
      {/* <ExpenseItem expense={expenses[0]}></ExpenseItem> */}
      <Expense expenses={data}></Expense>
    </div>
  );
}

export default App;
