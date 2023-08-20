import React,{useState} from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
const ExpenseItem=(props)=>{
  // const expenseDate = new Date(2023, 8, 17);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 6912;
  const [title,setTitle]=useState(props.title);
  
  const clickHandler=()=>{
    setTitle('updated');
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense=item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}


// syntax 2

// return (
//   <div className="expense-item">
//     <div>{props.expense.date.toISOString()}</div>
//     <div className="expense=item__description">
//       <h2>{props.expense.title}</h2>
//       <div className="expense-item__price">${props.expense.amount}</div>
//     </div>
//   </div>
// );
// }

//syntax 3- object destructering

// function ExpenseItem({date, title,amount}) {

//   return (
//     <div className="expense-item">
//       <div>{props.date.toISOString()}</div>
//       <div className="expense=item__description">
//         <h2>{props.title}</h2>
//         <div className="expense-item__price">${props.amount}</div>
//       </div>
//     </div>
//   );
// }

export default ExpenseItem;
