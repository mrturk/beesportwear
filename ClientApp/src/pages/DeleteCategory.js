import React, { useState, useEffect } from "react";
import axios from "axios";
import { message, Spin } from "antd";
import { useForm } from "react-hook-form";

export default function DeleteCategory(props) {

  const [spinnerStatus, setSpinnerStatus] = useState(false);
  const [categories, setCategories] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getCategories = () => {
    axios
      .get(`http://www.beesportwear.com/api/Product/getAllCategoriy`)
      .then((res) => {
        setCategories(res.data);
      });
  }

  useEffect(() => {
    getCategories()
  }, []);

  const success = () => {
    message.success("Kategori Silme Başarılı!");
  };

  const error = () => {
    message.error("Üzgünüz, bir hata oluştu, lütfen tekrar dene...");
  };



  const onSubmit = (data) => {
    setSpinnerStatus(true);
    axios
      .post(`http://www.beesportwear.com/api/Product/deleteCategory`, { id: data.kategori_id })
      .then((res) => {
        success();
        getCategories()
        setSpinnerStatus(false);
      })
      .catch((err) => {
        error()
        getCategories()
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
                  <h2>Kategori Sil</h2>
                  <div className="border"></div>
                </div>
              </div>

              <div className="col-3"></div>

              <div className="contact-form col-md-6 ">
                <form onSubmit={handleSubmit(onSubmit)}>

                  <div className="form-group">
                    <select
                      {...register("kategori_id", { required: true })}
                      type="text"
                      placeholder="Kategori"
                      className="form-control"
                    >
                      <option value="-1"> Lütfen Seçiniz</option>
                      {categories.map((x) => {
                        return (
                          <option value={x.id} id={x.id}>
                            {x.kategori_adi}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div>
                    <input
                      id="contact-submit"
                      type="submit"
                      className="btn btn-transparent"
                      value="Kategori Sil"
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
