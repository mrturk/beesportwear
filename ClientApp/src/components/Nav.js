import React, { useState, useEffect } from "react";
import axios from 'axios';


const Nav = (props) => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {

    axios.get(`http://www.beesportwear.com/api/Product/getAllCategoriy`)
      .then(res => {

        setCategories(res.data);
      })

  }, [])

  const onClickCategori = (categoriId) => {
    props.setActivePage("Products");
    props.getProductsByCategory(categoriId);
  }

  const getHeader = () => {
    return (
      <>
        <h2 className="logo-default">SportWear</h2>
        <h2 className="logo-white" >SportWear</h2>
      </>
    );
  }

  return (
    <>
      <header className="navigation fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand logo" href="/" style={{ display: 'flex' }}>
              <h2 style={{ color: "#CEE124" }}>Bee </h2>  {props.activePage === "Products" ? getHeader() : <h2 style={{ color: "black" }}> SportWear</h2>}

            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navigation"
              aria-controls="navigation"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navigation">
              <ul className="navbar-nav ml-auto text-center">

                <li className="nav-item ">
                  <a className="nav-link" onClick={() => props.setActivePage("Home")}>
                    Anasayfa
                  </a>
                </li>

                {true && <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Ürünler
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">

                    {categories.map(i => {
                      return (<a key={i.id.toString()} className="dropdown-item" onClick={() => onClickCategori(i.id)}>{i.kategori_adi}</a>);
                    })}
                    {/* <a className="dropdown-item" href="blog.html">Kategori Sil</a> */}
                  </div>
                </li>}

                {!props.loginStatus && <li className="nav-item ">
                  <a className="nav-link" onClick={() => props.setActivePage("About")}>
                    Hakkımızda
                  </a>
                </li>}

                {!props.loginStatus && <li className="nav-item ">
                  <a className="nav-link" onClick={() => props.setActivePage("Services")} >
                    Hizmetler
                  </a>
                </li>}

                {!props.loginStatus && <li className="nav-item ">
                  <a className="nav-link" onClick={() => props.setActivePage("Contact")}>
                    İletişim
                  </a>
                </li>}


                {props.loginStatus && <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Ürün
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" onClick={() => props.setActivePage("AddProduct")}>Ürün Ekle</a>
                    <a className="dropdown-item" onClick={() => props.setActivePage("DeleteProduct")}>Ürün Sil</a>
                  </div>
                </li>}

                {props.loginStatus && <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Kategori
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" onClick={() => props.setActivePage("AddCategory")}>Kategori Ekle</a>
                    <a className="dropdown-item" onClick={() => props.setActivePage("DeleteCategory")}>Kategori Sil</a>
                  </div>
                </li>}

                {!props.loginStatus && < li className="nav-item ">
                  <a className="nav-link" onClick={() => props.setActivePage("Login")}>
                    Giriş Yap
                  </a>
                </li>}

                {props.loginStatus && < li className="nav-item ">
                  <a className="nav-link" onClick={() => props.setLoginStatus(false)}>
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