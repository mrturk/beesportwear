import React from 'react';
import { Footer, NavMenu, Content, Slider } from ".";
import Contact from './Contact';
import { Fragment, useEffect } from "react";

const Layout = () => {

  useEffect(() => {

    

  },[])

  return (
    <Fragment>
      <NavMenu />
      <Slider />
      <Content />
      <Contact />

      <Footer />
    </Fragment>
  );
}

export default Layout