import { useId } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

const addContactValidation = Yup.object().shape({
  email: Yup.string().email("Email format").required("The field is required"),
  password: Yup.string()
    .min(7, "Too short!")
    .max(50, "Too long!")
    .required("The field is required"),
});

export default function LoginForm() {
  const fieldID = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {})
      .catch((error) => {
        console.error("Login failed. Check your email address or password");
        console.log(error);
      });
    actions.resetForm();
  };

  return (
    <div className={css.registrationFormContainer}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={addContactValidation}
      >
        <Form className={css.registrationForm}>
          <label htmlFor={`${fieldID}-email`} className={css.formLabel}>
            Email
            <Field
              type="email"
              name="email"
              id={`${fieldID}-email`}
              className={css.formInput}
            />
            <ErrorMessage
              className={css.errorMessage}
              name="email"
              component="div"
            />
          </label>

          <label htmlFor={`${fieldID}-password`} className={css.formLabel}>
            Password
            <Field
              className={css.formInput}
              type="password"
              name="password"
              id={`${fieldID}-password`}
            />
            <ErrorMessage
              className={css.errorMessage}
              name="password"
              component="div"
            />
          </label>

          <button className={css.submitButton} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
}
