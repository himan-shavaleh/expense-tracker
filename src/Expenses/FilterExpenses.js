const FilterExpenses = (props) => {
  const changeFilterYearHandler = (e) => {
    props.onSetFilterYear(e.target.value);
  };
  return (
    <select onChange={changeFilterYearHandler} name="year" id="year">
      <option value="2019">2019</option>
      <option value="2020">2020</option>
      <option value="2021">2021</option>
      <option value="2022">2022</option>
    </select>
  );
};
export default FilterExpenses;
