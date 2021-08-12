import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Products from "../pages/Products";
import DeleteProduct from "../pages/DeleteProduct";
import AddProduct from "../pages/AddProduct";
import AddCategory from "../pages/AddCategory";
import DeleteCategory from "../pages/DeleteCategory";


import axios from "axios";

import Home from "../pages/Home";
export default function Routes() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [activePage, setActivePage] = useState("Home");
  const [products, setProducts] = useState([]);
  const [productsSpinnerStatus, setProductsSpinnerStatus] = useState(false);

  const getProductsByCategory = (categoriId) => {
    setProductsSpinnerStatus(true);
    axios
      .get(`http://www.beesportwear.com/api/Product/${categoriId}`)
      .then((res) => {
        setProducts(res.data);
        setProductsSpinnerStatus(false);
      }).catch(err => {
        setProductsSpinnerStatus(false);
      })
  };


  const returnPageByName = () => {
    let props = {
      loginStatus,
      activePage,
      setLoginStatus,
      setActivePage,
      getProductsByCategory,
      products,
      productsSpinnerStatus
      // allProducts,
      // getAllProductsByCategories,
    };

    switch (activePage) {
      case "Home":
        return <Home {...props} />;
      case "Contact":
        return <Contact {...props} />;
      case "About":
        return <About {...props} />;
      case "Contact":
        return <Contact {...props} />;
      case "Services":
        return <Services {...props} />;
      case "Products":
        return <Products {...props} />;
      case "Login":
        return <Login {...props} />;
      case "DeleteProduct":
        return <DeleteProduct {...props} />;
      case "AddProduct":
        return <AddProduct {...props} />;
      case "AddCategory":
        return <AddCategory {...props} />;
      case "DeleteCategory":
        return <DeleteCategory {...props} />;

      default:
        return <Home />;
    }
  };

  return (
    <Router>
      <Nav
        id="Navbar"
        loginStatus={loginStatus}
        setLoginStatus={setLoginStatus}
        activePage={activePage}
        setActivePage={setActivePage}
        getProductsByCategory={getProductsByCategory}
      />
      {returnPageByName()}
      <Footer />
    </Router>
  );
}
