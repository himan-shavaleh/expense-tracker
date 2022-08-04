import ExpenceItem from "./ExpenceItem";
import "./ExpencesList.css";
const ExpencesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="empty">found no expences</h2>;
  }
  return (
    <ul className="expencesList">
      {props.items.map((item) => (
        <ExpenceItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
};
export default ExpencesList;
