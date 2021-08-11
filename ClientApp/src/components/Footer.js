import React from "react";
export default function Footer() {
  return (
    <>
      <footer id="footer" className="bg-one">
        <div className="top-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <ul>
                  <li>
                    <h1 style={{ color: "white" }}>
                      Sosyal medyadan bize ulaşın
                    </h1>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=100063552826601">
                      <h3>FaceBook</h3>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/beesport14/">
                      <h3>İnstagram</h3>
                    </a>
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
