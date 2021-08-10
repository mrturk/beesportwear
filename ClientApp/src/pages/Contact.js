import React from "react";
export default function Contact(props) {
  return (
    <>
      <section class="single-page-header">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2>Bizimle İletişime Geçin</h2>
              <ol class="breadcrumb header-bradcrumb">

              </ol>
            </div>
          </div>
        </div>
      </section>

      <section class="contact-us" id="contact">
        <div class="container">
          <div class="row">


            <div class="col-12">
              <div class="title text-center" >
                <h2>Bizimle İletişime Geçin</h2>
                <p>Öneri ve Şikayetleriniz için bize ulaşın.</p>
                <div class="border"></div>
              </div>
            </div>

            <div class="contact-details col-md-6 " >
              <h3>İletişim Adresleri</h3>
              <p>Aşağıdaki adres ve bağlantılardan' da bizlere ulaşabilirsiniz.</p>
              <ul class="contact-short-info" >
                <li>
                  <i class="tf-ion-ios-home"></i>
                  <span>Merkez, Bolu, Türkiye</span>
                </li>
                <li>
                  <i class="tf-ion-android-phone-portrait"></i>
                  <span>Phone: +880-31-000-000</span>
                </li>
                <li>
                  <i class="tf-ion-android-globe"></i>
                  <span>Fax: +880-31-000-000</span>
                </li>
                <li>
                  <i class="tf-ion-android-mail"></i>
                  <span>Email: hello@meghna.com</span>
                </li>
              </ul>

              <div class="social-icon">
                <ul>
                  <li><a href="#"><i class="tf-ion-social-facebook"></i></a></li>
                  <li><a href="#"><i class="tf-ion-social-twitter"></i></a></li>
                  <li><a href="#"><i class="tf-ion-social-dribbble-outline"></i></a></li>
                  <li><a href="#"><i class="tf-ion-social-linkedin-outline"></i></a></li>
                </ul>
              </div>

            </div>

            <div class="contact-form col-md-6 " >
              <form id="contact-form" method="post" role="form">
                <div class="form-group">
                  <input type="text" placeholder="Ad" class="form-control" name="name" id="name" />
                </div>

                <div class="form-group">
                  <input type="email" placeholder="E-mail" class="form-control" name="email" id="email" />
                </div>

                <div class="form-group">
                  <input type="text" placeholder="Konu" class="form-control" name="subject" id="subject" />
                </div>

                <div class="form-group">
                  <textarea rows="6" placeholder="Mesaj" class="form-control" name="message" id="message"></textarea>
                </div>

                <div id="success" class="success">
                  Teşekkürler, mailiniz gönderildi :)
                </div>

                <div id="error" class="error">
                  Üzgünüz.. ne olduğunu bilmiyoruz, tekrar deneyin :(
                </div>
                <div id="cf-submit">
                  <input type="submit" id="contact-submit" class="btn btn-transparent" value="Gönder" />
                </div>

              </form>
            </div>


          </div>
        </div>
      </section>




    </>
  )
}
