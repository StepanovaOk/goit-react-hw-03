const Contact = ({ contact, onDeleteContact }) => {
  const { name, number } = contact;

  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <button
        onClick={(id) => {
          onDeleteContact(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
