import Card from "../UI/Card";
import "./ExpenceDate.css";
const ExpenceDate = (props) => {
  const day = props.date.getDate();
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();

  return (
    <Card className="date">
      <div className="content">
        <p>{day}</p>
        <p>{month}</p>
        <p>{year}</p>
      </div>
    </Card>
  );
};
export default ExpenceDate;
