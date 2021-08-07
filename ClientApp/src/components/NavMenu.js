import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header class="navigation fixed-top">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light">

            <a class="navbar-brand logo" href="index.html">
              <img class="logo-default" src="images/logo.png" alt="logo" />
              <img class="logo-white" src="images/logo-white.png" alt="logo" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
              aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navigation">
              <ul class="navbar-nav ml-auto text-center">
                <li class="nav-item dropdown active">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    Homepage
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="index.html">Homepage</a>
                    <a class="dropdown-item" href="onepage-slider.html">Onepage</a>
                    <a class="dropdown-item" href="onepage-text.html">Onepage 2</a>
                  </div>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="about.html">About Us</a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="service.html">Services</a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="portfolio.html">Portfolio</a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="team.html">Team</a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="pricing.html">Pricing</a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="contact.html">Contact</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    Pages
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="404.html">404 Page</a>
                    <a class="dropdown-item" href="blog.html">Blog Page</a>
                    <a class="dropdown-item" href="single-post.html">Blog Single Page</a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
