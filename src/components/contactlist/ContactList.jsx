import css from "./ContactList.module.css";
import Contact from "../contact/Contact";

const ContactList = () => {
  return (
    <ul className={css.list}>
      {/* {tasks.map((task) => {
        return (
          <li className={css.item} key={task.id}>
            <Contact data={task} />
          </li>
        );
      })} */}
    </ul>
  );
};
export default ContactList;
