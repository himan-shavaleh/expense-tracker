import { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  // defining states
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  // change handlers
  const changeTitleHandler = (e) => {
    setTitle(e.target.value);
  };
  const changeDateHandler = (e) => {
    setDate(e.target.value);
  };
  const changeAmountHandler = (e) => {
    setAmount(e.target.value);
  };
  const submitFormHandler = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Math.random(),
      title: title,
      amount: amount,
      date: new Date(date),
    };

    setTitle("");
    setAmount("");
    setDate("");
    props.onSubmitExpense(newExpense);
  };
  return (
    <form onSubmit={submitFormHandler}>
      <div className="wrapper">
        <div className="input-group">
          <label htmlFor="title">TITLE</label>
          <input
            onChange={changeTitleHandler}
            value={title}
            type="text"
            id="title"
          />
        </div>
        <div className="input-group">
          <label htmlFor="date">DATE</label>
          <input
            onChange={changeDateHandler}
            value={date}
            type="date"
            id="date"
          />
        </div>
        <div className="input-group">
          <label htmlFor="amount">amount</label>
          <input
            onChange={changeAmountHandler}
            value={amount}
            type="text"
            id="amount"
          />
        </div>
      </div>

      <input id="addBtn" type="submit" value="add expense" />
    </form>
  );
};
export default NewExpenseForm;
