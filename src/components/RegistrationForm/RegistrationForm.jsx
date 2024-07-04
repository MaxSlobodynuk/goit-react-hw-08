import { useId } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

const addContactValidation = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("The field is required"),
  email: Yup.string().email("Email format").required("The field is required"),
  password: Yup.string()
    .min(7, "Too short!")
    .max(50, "Too long!")
    .required("The field is required"),
});

const RegistrationForm = () => {
  const fieldID = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    actions.resetForm();
  };

  return (
    <div className={css.registrationFormContainer}>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={addContactValidation}
      >
        <Form className={css.registrationForm}>
          <label htmlFor={`${fieldID}-name`} className={css.formLabel}>
            Username
            <Field
              type="text"
              name="name"
              id={`${fieldID}-name`}
              className={css.formInput}
            />
            <ErrorMessage
              name="name"
              component="div"
              className={css.errorMessage}
            />
          </label>

          <label htmlFor={`${fieldID}-email`} className={css.formLabel}>
            Email
            <Field
              type="email"
              name="email"
              id={`${fieldID}-email`}
              className={css.formInput}
            />
            <ErrorMessage
              name="email"
              component="div"
              className={css.errorMessage}
            />
          </label>

          <label htmlFor={`${fieldID}-password`} className={css.formLabel}>
            Password
            <Field
              type="password"
              name="password"
              id={`${fieldID}-password`}
              className={css.formInput}
            />
            <ErrorMessage
              name="password"
              component="div"
              className={css.errorMessage}
            />
          </label>

          <button
            type="submit"
            className={css.submitButton}
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
