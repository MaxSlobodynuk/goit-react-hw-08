import { Route, Routes } from "react-router-dom";
import { useState, lazy, Suspense, useEffect } from "react";
import Layout from "../Layout/Layout.jsx";

// import RestrictedRoute from "./RestrictedRoute.jsx";
// import PrivateRoute from "./PrivateRoute.jsx";
import css from "./App.module.css";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage.jsx"));
const ContactPage = lazy(() => import("../../pages/ContactsPage/ContactsPage.jsx"));
const RegisterPage = lazy(() => import("../../pages/RegistrationPage/RegistrationPage.jsx"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage.jsx"));

// import { useDispatch, useSelector } from "react-redux";
// import { refreshUser } from "../redux/auth/operations.js";
// import { selectIsRefreshing } from "../redux/auth/selectors.js";

export default function App() {
//   const [loading, setLoading] = useState(false);
//   const dispatch = useDispatch();
//   const isRefreshing = useSelector(selectIsRefreshing);

//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);

//   if (isRefreshing) {
//     return null;
//   }

  return (
    <Layout>
      {/* {loading && <Loader />} */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

// import { useDispatch, useSelector } from "react-redux";
// import ContactForm from "../ContactForm/ContactForm";
// import ContactList from "../ContactList/ContactList";
// import SearchBox from "../SearchBox/SearchBox";
// import css from "./App.module.css";
// import { fetchContacts } from "../../redux/contactsOps";
// import { useEffect } from "react";
// import { selectError, selectLoading } from "../../redux/contactsSlice";

// const App = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectLoading);
//   const isError = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div className={css.container}>
//       <h1 className={css.title}>Phonebook</h1>
//       <ContactForm />
//       <SearchBox />
//       <ContactList />
//       {isLoading && <p>Loading...</p>}
//       {isError && (
//         <p>Whoops, something went wrong! Please try reloading this page!</p>
//       )}
//     </div>
//   );
// };

// export default App;
