import React, { useEffect, useState, useLayoutEffect, useCallback, useRef } from "react";
export default function Nav() {

  const [headerBlack, setHeaderBlack] = useState(false);

  const inputEl = useRef(null);

  useEffect(() => {
    let element = document.querySelector("header[class*='navigation fixed-top sticky-header']")
    if (element) setHeaderBlack(true);
    else setHeaderBlack(false);
  }, [inputEl])




  const elemRef = useCallback((node) => {
    if (node !== null) {
      let element = document.querySelector("header[class*='navigation fixed-top sticky-header']")
      if (element) setHeaderBlack(true);
      else setHeaderBlack(false);
    }
  }, [])

  return (
    <>
      <header class="navigation fixed-top" ref={inputEl}>
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
                  <a class="nav-link" href="/">
                    Anasayfa
                  </a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="/Products">
                    Ürünler
                  </a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="/About">
                    Hakkımızda
                  </a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="/Services">
                    Hizmetler
                  </a>
                </li>
                {/* <li class="nav-item ">
                  <a class="nav-link" href="portfolio.html">
                    Portfolio
                  </a>
                </li> */}
                {/* <li class="nav-item ">
                  <a class="nav-link" href="team.html">
                    Team
                  </a>
                </li> */}
                {/* <li class="nav-item ">
                  <a class="nav-link" href="pricing.html">
                    Pricing
                  </a>
                </li> */}
                <li class="nav-item ">
                  <a class="nav-link" href="/Contact">
                    İletişim
                  </a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="/Login">
                    Giriş Yap
                  </a>
                </li>
                {/* <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="404.html">
                      404 Page
                    </a>
                    <a class="dropdown-item" href="blog.html">
                      Blog Page
                    </a>
                    <a class="dropdown-item" href="single-post.html">
                      Blog Single Page
                    </a>
                  </div>
                </li> */}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
