import "./ExpenseForm.css";
import React, { useState } from "react";
const ExpenseForm = () => {
  //   const [title, setTitle] = useState("");
  //   const [amount, setAmount] = useState("");
  //   const [date, setDate] = useState("");
  // const titleChangeHandler = (event) => {
  //     setTitle(event.target.value);
  //   };

  //   const amountChangeHandler = (event) => {
  //     setAmount(event.target.value);
  //   };

  //   const dateChangeHandler = (event) => {
  //     setDate(event.target.value);
  //   };
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const titleChangeHandler = (event) => {
    setUserInput((prevstate)=>{
        return ({ ...prevstate, title:event.target.value})
    })
  };
//react schedules state updates and donot preform them instantly.
//if there are enormous amounts of updates we might end up with an outdated
//snapshot if we follow the previous approach..(check the commits)
  const amountChangeHandler = (event) => {
    setUserInput((prevstate)=>{
        return ({ ...prevstate, amount:event.target.value})
    })
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevstate)=>{
        return ({ ...prevstate, date:event.target.value})
    })
  };

  return (
    <form>
      <div className="new-expense__controls">
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
