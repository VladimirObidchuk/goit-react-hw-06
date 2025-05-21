import "modern-normalize";
import "./App.css";
import ContactForm from "./contactform/ContactForm";
import ContactList from "./contactlist/ContactList";
import ContactSearch from "./contactsearch/ContactSearch";

// import SearchBar from "./searchbar/SearchBar";
// import TaskList from "./tasklist/TaskList";

export default function App() {
  return (
    <div className="main">
      <ContactForm />
      <ContactSearch />
      <ContactList />
    </div>
  );
}
