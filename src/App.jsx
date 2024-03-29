import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

import { nanoid } from "nanoid";
import Contact from "./components/Contact/Contact";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";

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
