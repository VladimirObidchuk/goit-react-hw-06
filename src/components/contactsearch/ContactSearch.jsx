import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./ContactSearch.module.css";

const ContactSearch = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault();
    const val = e.target.value.trim();
    dispatch(changeFilter(val));
  };

  return (
    <div className={css}>
      <input type="text" name="search" onChange={handleChange} />
    </div>
  );
};
export default ContactSearch;
