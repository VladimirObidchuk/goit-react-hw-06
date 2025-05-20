import { useDispatch } from "react-redux";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsSlice";

const ContactForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      addContact({
        id: crypto.randomUUID(),
        name: form.elements.text.value,
      })
    );
    console.log(" form", form.elements.text.value);
    form.reset();
  };
  return (
    <form className={css.search} onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        placeholder="Enter contact name...."
        className={css.field}
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
