import { useState } from "react";
import Card from "../UI/Card";
import FilterExpenses from "./FilterExpenses";
import ExpencesList from "./ExpencesList";
import ExpenceChart from "./ExpenceChart";
const Expenses = (props) => {
  const [filteredYear, setFilterdYear] = useState("2019");

  const setFilterdYearHandler = (filteredYear) => {
    setFilterdYear(filteredYear);
  };
  const filteredExpences = props.items.filter(
    (expe) => expe.date.getFullYear() === +filteredYear,
  );

  return (
    <Card>
      <FilterExpenses onSetFilterYear={setFilterdYearHandler} />
      <ExpenceChart expences={filteredExpences} />
      <ExpencesList items={filteredExpences} />
    </Card>
  );
};
export default Expenses;
