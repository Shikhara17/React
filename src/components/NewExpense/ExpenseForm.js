import "./ExpenseForm.css";
import React, { useState } from "react";
const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    
  };
  //   const [userInput, setUserInput] = useState({
  //     title: "",
  //     amount: "",
  //     date: "",
  //   });
  //   const titleChangeHandler = (event) => {
  //     setUserInput((prevstate)=>{
  //         return ({ ...prevstate, title:event.target.value})
  //     })
  //   };
  //react schedules state updates and donot preform them instantly.
  //if there are enormous amounts of updates we might end up with an outdated
  //snapshot if we follow the previous approach..(check the commits)
  //prevState is something which react handles and tracks the scheduled states so we can operate on updatedstate

  //   const amountChangeHandler = (event) => {
  //     setUserInput((prevstate)=>{
  //         return ({ ...prevstate, amount:event.target.value})
  //     })
  //   };

  //   const dateChangeHandler = (event) => {
  //     setUserInput((prevstate)=>{
  //         return ({ ...prevstate, date:event.target.value})
  //     })
  //   };

  // const inputChangeHandler = (identifier, value) => {
  //   if (identifier === "title") {
  //     setTitle(value);
  //   } else if (identifier === "amount") {
  //     setAmount(value);
  //   } else {
  //     setDate(value);
  //   }
  // };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        {/* <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={(event)=>inputChangeHandler('title',event.target.value)} />
        </div> */}
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            onChange={dateChangeHandler}
            min="2019-01-01"
            step="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
