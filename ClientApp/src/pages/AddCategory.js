import React, { useState, useEffect } from "react";
import axios from "axios";
import { message, Spin } from "antd";
import { useForm } from "react-hook-form";

export default function AddCategory(props) {

  const [spinnerStatus, setSpinnerStatus] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  const success = () => {
    message.success("Kategori Ekleme Başarılı!");
  };

  const error = () => {
    message.error("This is an error message");
  };

  const onSubmit = (data) => {
    setSpinnerStatus(true);
    axios
      .post(`http://www.beesportwear.com/api/Product/addCatecory`, data)
      .then((res) => {
        success();
        setSpinnerStatus(false);
      })
      .catch((err) => {
        error()
        setSpinnerStatus(false);
      });

  };

  return (
    <>
      <Spin size={"large"} spinning={spinnerStatus} style={{ width: "100%", height: "100%" }}>
        <section className="contact-us" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="title text-center">
                  <h2>Kategori Ekle</h2>
                  <div className="border"></div>
                </div>
              </div>

              <div className="col-3"></div>

              <div className="contact-form col-md-6 ">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <input
                      {...register("kategori_adi", { required: true })}
                      type="text"
                      placeholder="Kategori Adı"
                      className="form-control"
                    />
                  </div>

                  <div>
                    <input
                      id="contact-submit"
                      type="submit"
                      className="btn btn-transparent"
                      value="Kategori Ekle"
                    />
                  </div>
                </form>
              </div>

              <div className="col-3"></div>
            </div>
          </div>
        </section>
      </Spin>
    </>
  );
}
