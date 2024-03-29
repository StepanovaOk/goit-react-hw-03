import * as Yup from "yup";
import styles from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

const MAX_SYMBOLS_VALIDATION = 50;
const MIN_SYMBOLS_VALIDATION = 3;

const FORM_INITIAL_VALUES = {
  name: "",
  number: "",
};

const userCardSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .max(MAX_SYMBOLS_VALIDATION, `Too long`)
    .min(MIN_SYMBOLS_VALIDATION, `Too short`),
  number: Yup.string()
    .required("Required")
    .max(MAX_SYMBOLS_VALIDATION, `Too long`)
    .min(MIN_SYMBOLS_VALIDATION, `Too short`),
});

const ContactForm = ({ onAddUser }) => {
  const handleSubmit = (values, actions) => {
    onAddUser(values);
    actions.resetForm(FORM_INITIAL_VALUES);
  };

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.phonebook}>Phonebook</h1>
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        validationSchema={userCardSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <label className={styles.formItem}>
            <span>Name</span>
            <Field type="text" name="name" className={styles.inputField} />
            <ErrorMessage name="name" component="div" className="error" />
          </label>
          <label className={styles.formItem}>
            <span>Number</span>
            <Field type="text" name="number" className={styles.inputField} />
            <ErrorMessage name="number" component="div" className="error" />
          </label>
          <button type="submit" className={styles.btnSubmit}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
