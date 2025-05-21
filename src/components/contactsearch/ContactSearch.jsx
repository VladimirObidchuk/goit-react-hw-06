import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./ContactSearch.module.css";

const ContactSearch = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault();
    dispatch(changeFilter(e.target.value.trim()));
    console.log(e.target.value);
  };

  return (
    <div className={css}>
      <input type="text" name="search" onChange={handleChange} />
    </div>
  );
};
export default ContactSearch;
