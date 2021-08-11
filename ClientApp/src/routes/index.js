import React, { useState } from "react";
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


import axios from 'axios';

import Home from "../pages/Home";
export default function Routes() {

  const [loginStatus, setLoginStatus] = useState(true);
  const [activePage, setActivePage] = useState("Home");
  const [products, setProducts] = useState([]);



  const getProductsByCategory = (categoriId) => {
    axios.get(`http://www.beesportwear.com/api/Product/${categoriId}`)
      .then(res => {
        setProducts(res.data);
      })
  }



  const returnPageByName = () => {

    let props = {
      loginStatus,
      activePage,
      setLoginStatus,
      setActivePage,
      getProductsByCategory,
      products,
      // allProducts,
      // getAllProductsByCategories,
    }

    switch (activePage) {
      case "Home":
        return <Home {...props} />
      case "Contact":
        return <Contact {...props} />
      case "About":
        return <About {...props} />
      case "Contact":
        return <Contact {...props} />
      case "Services":
        return <Services {...props} />
      case "Products":
        return <Products {...props} />
      case "Login":
        return <Login {...props} />
      case "DeleteProduct":
        return <DeleteProduct {...props} />
      case "AddProduct":
        return <AddProduct {...props} />
      case "AddCategory":
        return <AddCategory {...props} />

      default:
        return <Home />;
    }
  }

  return (
    <Router>
      <Nav
        id="Navbar"
        loginStatus={loginStatus}
        setLoginStatus={setLoginStatus}
        activePage={activePage}
        setActivePage={setActivePage}
        getProductsByCategory={getProductsByCategory}
      // getAllProductsByCategories={getAllProductsByCategories}
      />
      {returnPageByName()}
      <Footer />
    </Router>
  );
}

{/* <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/Contact" component={() => <Contact />} />
        <Route exact path="/About" component={() => <About />} />
        <Route exact path="/Services" component={() => <Services />} />
        <Route exact path="/Products" component={() => <Products />} />
      </Switch> */}