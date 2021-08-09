import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Panel from "../pages/Panel";
import Product from "../pages/Product";
export default function Routes() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Panel" component={Panel} />
        <Route exact path="/Product/:id" component={Product} />
      </Switch>
      <Footer />
    </Router>
  );
}
