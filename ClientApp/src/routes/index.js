import React from "react";
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
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Services" component={Services} />
        <Route exact path="/Products" component={Products} />
      </Switch>
      <Footer />
    </Router>
  );
}
