import Contact from "../Contact/Contact";

const ContactList = ({ contacts, filterValue, onDeleteContact }) => {
  const filteredContacts = contacts.filter((contact) =>
    contact.name.includes(filterValue.toLowerCase())
  );

  return (
    <div>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          onDeleteContact={() => onDeleteContact(contact.id)}
        />
      ))}
    </div>
  );
};

export default ContactList;
