import React, { useState } from "react";
const Nav = (props) => {

  return (
    <>
      <header class="navigation fixed-top">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand logo" href="/">
              <h2 class="logo-default" style={{ color: "black" }}>Bee SportsWear</h2>
              <h2 class="logo-white" style={{ color: "white" }}>Bee SportsWear</h2>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navigation"
              aria-controls="navigation"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navigation">
              <ul class="navbar-nav ml-auto text-center">

                <li class="nav-item ">
                  <a class="nav-link" onClick={() => props.setActivePage("Home")}>
                    Anasayfa
                  </a>
                </li>

                <li class="nav-item ">
                  <a class="nav-link" onClick={() => props.setActivePage("Products")} >
                    Ürünler
                  </a>
                </li>

                {!props.loginStatus && <li class="nav-item ">
                  <a class="nav-link" onClick={() => props.setActivePage("About")}>
                    Hakkımızda
                  </a>
                </li>}

                {!props.loginStatus && <li class="nav-item ">
                  <a class="nav-link" onClick={() => props.setActivePage("Services")} >
                    Hizmetler
                  </a>
                </li>}

                {!props.loginStatus && <li class="nav-item ">
                  <a class="nav-link" onClick={() => props.setActivePage("Contact")}>
                    İletişim
                  </a>
                </li>}


                {props.loginStatus && <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Ürün
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="404.html">Ürün Ekle</a>
                    <a class="dropdown-item" href="blog.html">Ürün Sil</a>
                  </div>
                </li>}

                {props.loginStatus && <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Kategori
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="404.html">Kategori Ekle</a>
                    <a class="dropdown-item" href="blog.html">Kategori Sil</a>
                  </div>
                </li>}

                {!props.loginStatus && < li class="nav-item ">
                  <a class="nav-link" onClick={() => props.setActivePage("Login")}>
                    Giriş Yap
                  </a>
                </li>}

                {props.loginStatus && < li class="nav-item ">
                  <a class="nav-link" onClick={() => props.setLoginStatus(false)}>
                    Çıkış Yap
                  </a>
                </li>}

              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Nav;