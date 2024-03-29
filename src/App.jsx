import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

import { nanoid } from "nanoid";
import Contact from "./components/Contact/Contact";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  const [contacts, setContacts] = useState(() => {
    const contacts = window.localStorage.getItem("contacts");
    return JSON.parse(contacts);
  });

  const [filterValue, setFilterValue] = useState("");

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  const onAddUser = (formData) => {
    const finalUser = {
      ...formData,
      id: nanoid(),
    };

    setContacts([...contacts, finalUser]);
  };

  const onDeleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddUser={onAddUser} />
      <SearchBox
        filterValue={filterValue}
        handleFilterChange={handleFilterChange}
      />
      <ContactList
        contacts={contacts}
        filterValue={filterValue}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}

export default App;
