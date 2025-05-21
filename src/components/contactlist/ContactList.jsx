import css from "./ContactList.module.css";
import Contact from "../contact/Contact";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filterValue = useSelector((state) => state.filters.name);

  //   const filteredContacts = (contacts || []).filter((contact) =>
  //     contact.name?.toLowerCase().includes(filter?.toLowerCase() || "")
  //   );
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => {
        return (
          <li className={css.item} key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
