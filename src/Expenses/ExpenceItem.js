import ExpenceDate from "./ExpenceDate";
import Card from "../UI/Card";
import "./ExpenceItem.css";
const ExpenceItem = (props) => {
  return (
    <li className="expenceItem">
      <Card>
        <div className="right">
          <ExpenceDate date={props.date} />
          <p>{props.title}</p>
        </div>
        <h4 className="left">{props.amount}$</h4>
      </Card>
    </li>
  );
};
export default ExpenceItem;
