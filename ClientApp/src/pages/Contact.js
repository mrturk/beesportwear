import React from "react";
export default function Contact(props) {
  return (
    <>
      <section className="single-page-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 style={{ color: "white" }}>Bizimle İletişime Geçin</h2>
              <ol className="breadcrumb header-bradcrumb"></ol>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-us" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title text-center">
                <h2>Bizimle İletişime Geçin</h2>
                <p>Öneri ve Şikayetleriniz için bize ulaşın.</p>
                <div className="border"></div>
              </div>
            </div>

            <div className="contact-details col-md-6 ">
              <h3>İletişim Adresleri</h3>
              <p>
                Aşağıdaki adres ve bağlantılardan' da bizlere ulaşabilirsiniz.
              </p>
              <ul className="contact-short-info">
                <li>
                  <i className="tf-ion-ios-home"></i>
                  <span>Merkez, Bolu, Türkiye</span>
                </li>
                <li>
                  <i className="tf-ion-android-phone-portrait"></i>
                  <span>Phone: +905332321455</span>
                </li>
                <li>
                  <i className="tf-ion-android-mail"></i>
                  <span>Email: enes_1455@outlook.com</span>
                </li>
              </ul>

              <div className="social-icon">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=100063552826601">
                      <i className="tf-ion-social-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/beesport14/">
                      <i className="tf-ion-social-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="contact-form col-md-6 ">
              <form id="contact-form" method="post" role="form">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Ad"
                    className="form-control"
                    name="name"
                    id="name"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="form-control"
                    name="email"
                    id="email"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Konu"
                    className="form-control"
                    name="subject"
                    id="subject"
                  />
                </div>

                <div className="form-group">
                  <textarea
                    rows="6"
                    placeholder="Mesaj"
                    className="form-control"
                    name="message"
                    id="message"
                  ></textarea>
                </div>

                <div id="success" className="success">
                  Teşekkürler, mailiniz gönderildi :)
                </div>

                <div id="error" className="error">
                  Üzgünüz.. ne olduğunu bilmiyoruz, tekrar deneyin :(
                </div>
                <div id="cf-submit">
                  <input
                    type="submit"
                    id="contact-submit"
                    className="btn btn-transparent"
                    value="Gönder"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
