import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Products from "../pages/Products";



import Home from "../pages/Home";
export default function Routes() {

  const [loginStatus, setLoginStatus] = useState(false);
  const [activePage, setActivePage] = useState("Home");

  const returnPageByName = () => {

    let props = {
      loginStatus,
      activePage,
      setLoginStatus,
      setActivePage,
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

      default:
        return <Home />;
    }
  }

  return (
    <Router>
      <Nav
        loginStatus={loginStatus}
        setLoginStatus={setLoginStatus}
        activePage={activePage}
        setActivePage={setActivePage}
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