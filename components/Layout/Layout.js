import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import SeoHead from "../SeoHead";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  return (
    <>
    <ToastContainer  />
      <SeoHead title='Remacify' />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
