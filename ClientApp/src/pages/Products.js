import React, { useState } from "react";
import { Spin } from "antd";

export default function Products(props) {



  return (
    <>
      <Spin size={"large"} spinning={props.productsSpinnerStatus} style={{ width: "100%", height: "100%" }}>
        <div
          style={{ backgroundColor: "black", width: "100vw", height: "90px" }}
        ></div>
        <section className="portfolio section-sm" id="portfolio">
          <div className="container-fluid">
            <div className="row ">
              <div className="col-lg-12">
                <div className="title text-center">
                  <h2>Ürünler</h2>
                  <div className="border"></div>
                </div>

                <div className="row filtr-container">
                  {props.products.map((i) => {
                    return (
                      <div
                        key={i.id.toString()}
                        className="col-md-3 col-sm-6 col-xs-6 filtr-item "
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
