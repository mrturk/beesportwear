import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
// import './custom.css'
import { Layout } from "./components/LandingPage";
import 'antd/dist/antd.css';

export default class App extends Component {
  static displayName = App.name;

  componentDidMount() {

    // const script = document.createElement("script");
    // script.src = "/plugins/slick/slick.min.js";
    // script.type = "text/javascript"
    // script.async = true;
    // script.onload= () => console.log("slick loaded");
    // document.body.appendChild(script);

    // // // this.instance.appendChild(script)

    // const script2 = document.createElement("script");
    // script2.src = "/plugins/bootstrap/js/bootstrap.min.js";
    // script2.async = true;
    // document.body.appendChild(script2);

    // const script3 = document.createElement("script");
    // script3.src = "/plugins/parallax/jquery.parallax-1.1.3.js";
    // script3.async = true;
    // document.body.appendChild(script3);


  }

  render() {
    return (
      <Layout />
    );
  }
}
