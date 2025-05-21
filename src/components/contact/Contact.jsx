import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact: { id, name, tel } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <div className={css.blockInfo}>
        <p className={css.text}>Name: {name}</p>
        <p className={css.text}>tel: {tel}</p>
      </div>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </>
  );
};
export default Contact;
