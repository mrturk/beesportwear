import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Nav() {
  const [responseData, setResponseData] = useState([]);
  const names = ["a", "b"];
  useEffect(() => {
    axios
      .get("http://www.beesportwear.com/api/Product/getAllCategoriy")
      .then((response) => {
        setResponseData(response.data);
        console.log(response.data);
        localStorage.setItem("category", JSON.stringify(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <header class="navigation fixed-top">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand logo" href="index.html">
              <img
                style={{ width: "50px", borderRadius: "50%" }}
                class="logo-default"
                src="images/logobeesport.PNG"
                alt="logo"
              />
              <img
                style={{ width: "50px", borderRadius: "50%" }}
                class="logo-white"
                src="images/logobeesport.PNG"
                alt="logo"
              />
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
                <li class="nav-item">
                  <Link class="nav-link" to={"/"}>
                    Anasayfa
                  </Link>
                </li>
                <li class="nav-item ">
                  <Link class="nav-link" to={"/Hakkimizda"}>
                    Hakkımızda
                  </Link>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Kategoriler
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    {responseData.map((response) => (
                      <Link
                        key={response.id}
                        class="dropdown-item"
                        to={"/Product/" + response.id}
                      >
                        {response.kategori_adi}
                      </Link>
                    ))}
                  </div>
                </li>
                <li class="nav-item ">
                  <Link class="nav-link" to={"/Iletisim"}>
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
