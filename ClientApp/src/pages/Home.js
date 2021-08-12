import React, { useEffect, useState } from "react";
import { Modal, Spin } from "antd";
import axios from "axios";

const ModalContentStyle = {
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
};

export default function Home(props) {

  const [spinnerStatus, setSpinnerStatus] = useState(false);
  const [topProducts, setTopProducts] = useState([]);

  const [currentProduct, setCurrentProduct] = useState({
    id: null,
    kategori_adi: "",
    urun_cinsi: "",
    fiyat: null,
    aciklama: "",
    img_url: "",
  });

  const getProducts = () => {
    setSpinnerStatus(true);
    axios
      .get(`http://www.beesportwear.com/api/Product/getAllProduct`)
      .then((res) => {

        if (res.data.length) {
          let topProductIndexes = [];

          while (1) {
            let randomProductIndex = Math.floor(Math.random() * res.data.length);
            if (!topProductIndexes.includes(randomProductIndex) && topProductIndexes.length < 3) {
              topProductIndexes.push(randomProductIndex);
            }

            if (topProductIndexes.length === 3 || topProductIndexes.length === res.data.length) break;
          }

          let __topProducts = [];
          topProductIndexes.forEach(i => {
            __topProducts.push({
              id: res.data[i].id,
              kategori_adi: res.data[i].kategori_adi,
              urun_cinsi: res.data[i].urun_cinsi,
              fiyat: res.data[i].fiyat,
              aciklama: res.data[i].aciklama,
              img_url: res.data[i].img_url
            })
          });

          setTopProducts(__topProducts);
          setSpinnerStatus(false);
        }
        else {
          setSpinnerStatus(false);
        }


      }).catch(err => {
      })
  };

  useEffect(() => {

    getProducts();
  }, [])


  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
        style={{ height: "100vh", width: "100vw" }}
      >
        <ol
          className="carousel-indicators"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
            style={{ marginTop: "-50px" }}
          ></li>
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="1"
            style={{ marginTop: "-50px" }}
          ></li>
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="2"
            style={{ marginTop: "-50px" }}
          ></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://102169-290234-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2014/09/selvedgework-jeans-slider.jpg"
              alt="First slide"
              style={{ width: "99vw", height: "99vh" }}
            />
            <div
              className="carousel-caption d-none d-md-block"
              style={{
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <h2 style={{ color: "#CEE124" }}>Bee SportsWear</h2>
            </div>
          </div>
          <div
            className="carousel-item"
            style={{ width: "100vw", height: "98vh" }}
          >
            <img
              className="d-block w-100"
              src="https://www.tshirt.ae/wp-content/uploads/2018/02/Slider-hoodie-1.jpg"
              alt="Second slide"
              style={{ width: "100vw", height: "100vh" }}
            />
            <div
              className="carousel-caption d-none d-md-block"
              style={{
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <h2 style={{ color: "#CEE124" }}>Bee SportsWear</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://store.ferrari.com/cms/ycm/resource/blob/455382/198152de63f670486a3b73c647c9a160/slider-hp-t-shirt-data.jpg"
              alt="Third slide"
              style={{ width: "100vw", height: "100vh" }}
            />
            <div
              className="carousel-caption d-none d-md-block"
              style={{
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <h2 style={{ color: "#CEE124" }}>Bee SportsWear</h2>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <Spin size={"large"} spinning={spinnerStatus} style={{ width: "100%", height: "100%" }}>
        <div
          style={{ backgroundColor: "white", width: "100vw", height: "90px" }}
        ></div>
        <section className="portfolio section-sm" id="portfolio">
          <div className="container-fluid">
            <div className="row ">
              <div className="col-lg-12">
                {topProducts.length && <div className="title text-center">
                  <h2>Popüler Ürünler</h2>
                  <div className="border"></div>
                </div>}


                <div className="row filtr-container">
                  {topProducts.map((i) => {
                    return (
                      <div
                        key={i.id.toString()}
                        className="col-md-4 col-sm-6 col-xs-6 filtr-item "
                        data-category="mix, design"
                      >
                        <div className="portfolio-block">
                          <img className="img-fluid" src={i.img_url} />
                          <div>
                            <div className="caption">
                              <h4 style={{ color: "white" }}>
                                Fiyat: {i.fiyat} TL
                              </h4>
                              <h4 style={{ color: "white" }}>
                                Kategori: {i.kategori_adi}
                              </h4>
                              <h4 style={{ color: "white" }}>
                                Ürün Cinsi: {i.urun_cinsi}
                              </h4>
                              <h4 style={{ color: "white" }}>
                                Açıklama: {i.aciklama}
                              </h4>
                              <h4>
                                <a
                                  href="https://api.whatsapp.com/send?phone=+905332321455&text=Merhaba."
                                  target="_blank"
                                >
                                  ÜRÜN SİPARİŞİ İÇİN TIKLAYINIZ
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Spin>
    </>
  );
}
