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
    <div className={css.seachContact}>
      <label htmlFor="search" className={css.label}>
        Search
      </label>
      <input
        id="search"
        type="text"
        name="search"
        onChange={handleChange}
        className={css.input}
        placeholder="Enter contact...."
      />
    </div>
  );
};
export default ContactSearch;
