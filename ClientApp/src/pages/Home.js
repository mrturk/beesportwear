import React, { useEffect, useState } from "react";
import { Modal } from "antd";

const ModalContentStyle = {
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
};

export default function Home(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({
    id: null,
    kategori_adi: "",
    urun_cinsi: "",
    fiyat: null,
    aciklama: "",
    img_url: "",
  });

  const showModal = (productInfo) => {
    setCurrentProduct(productInfo);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
              <h2>Bee Sport Wear</h2>
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
              <h2>Bee Sport Wear</h2>
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
              <h2>Bee SportsWear</h2>
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

      <section className="blog" id="blog">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title text-center ">
                <h2>
                  {" "}
                  Popüler <span className="color">Ürünler</span>
                </h2>
                <div className="border"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
