import React, { useEffect, useState } from "react";
import { Modal } from "antd";

const ModalContentStyle = {
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
}


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
        <ol className="carousel-indicators" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" style={{ marginTop: "-50px" }}></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1" style={{ marginTop: "-50px" }}></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2" style={{ marginTop: "-50px" }}></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="images/client-logo/Home1_.jpeg"
              alt="First slide"
              style={{ width: "99vw", height: "99vh" }}
            />
            <div className="carousel-caption d-none d-md-block" style={{ alignContent: "center", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
              <h2>Bee Sport Wear</h2>
            </div>
          </div>
          <div className="carousel-item" style={{ width: "100vw", height: "98vh" }}>
            <img
              className="d-block w-100"
              src="images/client-logo/Home2_.jpeg"
              alt="Second slide"
              style={{ width: "100vw", height: "100vh" }}
            />
            <div className="carousel-caption d-none d-md-block" style={{ alignContent: "center", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
              <h2>Bee Sport Wear</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="images/client-logo/Home3_.jpeg"
              alt="Third slide"
              style={{ width: "100vw", height: "100vh" }}
            />
            <div className="carousel-caption d-none d-md-block" style={{ alignContent: "center", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
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
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <section className="blog" id="blog">
        <div className="container">
          <div className="row">

            <div className="col-12">
              <div className="title text-center ">
                <h2> Popüler <span className="color">Ürünler</span></h2>
                <div className="border"></div>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus facere accusamus,
                  reprehenderit libero
                  inventore nam.</p> */}
              </div>
            </div>

            <Modal title="Ürün Detayı" visible={isModalVisible} footer={<div></div>} onOk={handleOk} onCancel={handleCancel} width={"50vw"} height={"70vh"}>
              <div className="container-fluid" >
                <div className="row " >
                  <div className="col-md-6 col-sm-6 col-xs-6 filtr-item" style={{ height: "50vh" }}>
                    <img style={{ height: "50vh", width: "inherit" }} src={"images/portfolio/portfolio-1.jpg"} />
                  </div>


                  <div className="col-md-6 col-sm-6 col-xs-6 filtr-item" style={{ height: "50vh", width: "inherit" }}>


                    <div className="container-fluid" >
                      <div className="row " >
                        <div className="col-md-6 col-sm-6 col-xs-6 filtr-item" ><h4 title={"Fiyat:"} style={ModalContentStyle}>Fiyat:</h4></div>
                        <div className="col-md-6 col-sm-6 col-xs-6 filtr-item" ><h5 title={currentProduct.fiyat + " ₺"}>{currentProduct.fiyat} ₺</h5></div>
                      </div>
                    </div>

                    <div className="container-fluid" >
                      <div className="row " >
                        <div className="col-md-6 col-sm-6 col-xs-6 filtr-item" ><h4 title={"Kategori:"} style={ModalContentStyle}>Kategori:</h4></div>
                        <div className="col-md-6 col-sm-6 col-xs-6 filtr-item" ><h5 title={currentProduct.kategori_adi}>{currentProduct.kategori_adi}</h5></div>
                      </div>
                    </div>

                    <div className="container-fluid" >
                      <div className="row " >
                        <div className="col-md-6 col-sm-6 col-xs-6 filtr-item" ><h4 title={"Ürün Tipi:"} style={ModalContentStyle}>Ürün Tipi:</h4></div>
                        <div className="col-md-6 col-sm-6 col-xs-6 filtr-item" ><h5 title={currentProduct.urun_cinsi}>{currentProduct.urun_cinsi}</h5></div>
                      </div>
                    </div>

                    <div className="container-fluid" >
                      <div className="row " >
                        <div className="col-md-6 col-sm-6 col-xs-6 filtr-item" ><h4 title={"Ürün Açıklaması:"} style={ModalContentStyle}>Ürün Açıklaması:</h4></div>
                        <div className="col-md-6 col-sm-6 col-xs-6 filtr-item" ><h5 title={currentProduct.aciklama}>{currentProduct.aciklama}</h5></div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </Modal>




          </div>
        </div>
      </section>
    </>
  );
}
