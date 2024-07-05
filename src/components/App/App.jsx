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

import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations.js";
import { selectIsRefreshing } from "../../redux/auth/selectors.js";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";


export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return null;
  }

  return (
    <Layout>
      {/* {loading && <Loader />} */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/contacts"
            element={<PrivateRoute component={<ContactPage />} />}
          />
          <Route
            path="/register"
            element={<RestrictedRoute component={<RegisterPage />} />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute component={<LoginPage />} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
