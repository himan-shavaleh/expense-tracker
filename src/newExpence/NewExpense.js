import React, { useState } from "react";
import Card from "../UI/Card";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";
const NewExpense = (props) => {
  const [openform, setOpenForm] = useState(false);
  const openFormHandler = () => {
    setOpenForm(!openform);
  };
  const saveExpenseHandler = (expense) => {
    props.onSaveExpense(expense);
    setOpenForm(false);
  };
  return (
    <Card>
      {!openform && (
        <button className="openBtn" onClick={openFormHandler}>
          open add form
        </button>
      )}
      {openform && <NewExpenseForm onSubmitExpense={saveExpenseHandler} />}
      {openform && <button onClick={openFormHandler}>close Form</button>}
    </Card>
  );
};
export default NewExpense;
