import React, { useState } from "react";
import axios from 'axios';
import { Modal } from 'antd';

const ModalContentStyle = {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
}

export default function Products(props) {

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
            <div style={{ backgroundColor: "black", width: "100vw", height: "90px" }}></div>
            <section className="portfolio section-sm" id="portfolio">
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-lg-12">


                            <div className="title text-center">
                                <h2>Ürünler</h2>
                                <div className="border"></div>
                            </div>


                            <div className="row filtr-container">

                                {/* <ProductModal /> */}

                                {props.products.map(i => {
                                    return (

                                        <div key={i.id.toString()} className="col-md-3 col-sm-6 col-xs-6 filtr-item " data-category="mix, design" >
                                            <div className="portfolio-block">
                                                <img className="img-fluid" src={"images/portfolio/portfolio-1.jpg"} />
                                                <div>
                                                    <div className="caption" onClick={function (e) {
                                                        showModal(i);
                                                    }}>
                                                        <a className="search-icon" >
                                                            <i className="tf-ion-ios-search-strong"></i>
                                                        </a>
                                                        <h4><a>Ürün Detayları</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })}


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
