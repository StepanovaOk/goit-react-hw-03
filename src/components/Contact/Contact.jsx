const Contact = ({ contact }) => {
  const { name, number } = contact;

  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <button>Delete</button>
    </div>
  );
};

export default Contact;
