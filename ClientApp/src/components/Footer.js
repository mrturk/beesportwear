import React from "react";
export default function Footer() {
  return (
    <>
      <footer id="footer" className="bg-one">
        <div className="top-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-lg-3">
                <h3>Hakkımızda</h3>
                <p>
                  Bee SportsWear
                </p>
              </div>

              <div className="col-sm-3 col-md-3 col-lg-3">
                <ul>
                  <li>
                    <h3>Hizmetler</h3>
                  </li>
                  <li>
                    <a href="#">Graphic Design</a>
                  </li>
                  <li>
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <a href="#">Web Development</a>
                  </li>
                </ul>
              </div>

              <div className="col-sm-3 col-md-3 col-lg-3">
                <ul>
                  <li>
                    <h3>Hızlı Bağlantılar</h3>
                  </li>
                  <li>
                    <a href="#">İşbirlikleri</a>
                  </li>
                  <li>
                    <a href="#">Hakkımızda</a>
                  </li>
                  <li>
                    <a href="#">İletişim</a>
                  </li>
                </ul>
              </div>

              <div className="col-sm-3 col-md-3 col-lg-3">
                <ul>
                  <li>
                    <h3>Sosyal medyadan bize ulaşın</h3>
                  </li>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">Youtube</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <h5>Copyright 2021. All rights reserved.</h5>
          <h6>
            Design and Developed by <a href="">Yunus Emre Çıracı</a>
          </h6>
          <h6>
            Distributed by <a href="">Kaan B.</a>
          </h6>
        </div>
      </footer>
    </>
  );
}
