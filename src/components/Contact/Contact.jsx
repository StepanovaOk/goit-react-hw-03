import styles from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ contact, onDeleteContact }) => {
  const { name, number } = contact;

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contacts}>
        <p>
          <FaUser size="16" /> {name}
        </p>
        <p>
          <FaPhone size="16" />
          {number}
        </p>
      </div>
      <button
        className={styles.btnDelete}
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
