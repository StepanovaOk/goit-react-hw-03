import { useState } from "react";
import "./App.css";
import Contact from "./components/Contact/Contact";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [filterValue, setFilterValue] = useState("");

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <SearchBox
        filterValue={filterValue}
        handleFilterChange={handleFilterChange}
      />
      <ContactList contacts={contacts} filterValue={filterValue} />
    </div>
  );
}

export default App;
