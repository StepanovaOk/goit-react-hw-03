import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      validationSchema={userCardSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          <span>Name</span>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" className="error" />
        </label>
        <label>
          <span>Number</span>
          <Field type="text" name="number" />
          <ErrorMessage name="number" component="div" className="error" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
