import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact: { id, name } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <p className={css.text}>{name}</p>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </>
  );
};
export default Contact;
