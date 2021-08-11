import React from "react";
export default function About(props) {
  return (
    <>
      <section className="single-page-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 style={{ color: "white" }}>Hakkımızda</h2>
              <ol className="breadcrumb header-bradcrumb">
                {/* <li><a href="index.html">Home</a></li>
                                <li className="active">About Us</li> */}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="about-shot-info section-sm">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-20">
              <h2>
                Aklında Kalacağına
                <br /> Üstünde Kalsın
              </h2>
              <p>
                2020 Yılı Temmuz ayında açmış olduğumuz BeeSport erkek giyim
                mağazası üzerine faaliyete başlamış bulunmaktayız. Zorlu piyasa
                şartlarında başarıya ulaşmak için yenilikçi bir yapıyla
                insanların tercihlerini ve zevklerini baz alarak önümüze devamlı
                yeni hedefler koymaktayız. Hayal ettiğimiz gibi devam eden bu
                süreçte müşterilerimizi de hayallerine kavuşturduğumuza inanıyor
                ve bu şekilde emin adımlarla yolumuza devam ediyoruz.
              </p>
            </div>
            <div className="col-md-6">
              <img
                className="img-fluid"
                src="images/company/company-image.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
