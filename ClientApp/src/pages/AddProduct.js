import React, { useState, useEffect } from "react";
import axios from "axios";
import { message } from "antd";
import { useForm } from "react-hook-form";

export default function AddProduct(props) {
  const [categories, setCategories] = useState([]);
  var formData = new FormData();

  useEffect(() => {
    axios
      .get(`http://www.beesportwear.com/api/Product/getAllCategoriy`)
      .then((res) => {
        setCategories(res.data);
      });
  }, []);

  const success = () => {
    message.success("Ürün Ekleme Başarılı!");
  };

  const error = () => {
    message.error("Ürünü eklerken bir hata ile karşılaşıldı...");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    formData.append("aciklama", data.aciklama);
    formData.append("kategori_id", data.kategori_id);
    formData.append("urun_cinsi", data.urun_cinsi);
    formData.append("fiyat", data.fiyat);
    formData.append("img", data.img[0]);
    console.log(formData);

    axios
      .post(`http://www.beesportwear.com/api/Product/addProduct`, formData)
      .then((res) => {
        console.log(res);
        success();
      })
      .catch((err) => {
        console.log(err);
        error();
      });
  };

  return (
    <>
      <section className="contact-us" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title text-center">
                <h2>Ürün Ekle</h2>
                <div className="border"></div>
              </div>
            </div>

            <div className="col-3"></div>

            <div className="contact-form col-md-6 ">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <select
                    {...register("kategori_id")}
                    type="text"
                    placeholder="Kategori"
                    className="form-control"
                  >
                    {categories.map((x) => {
                      return (
                        <option value={x.id} id={x.id}>
                          {x.kategori_adi}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="form-group">
                  <input
                    {...register("urun_cinsi", { required: true })}
                    type="text"
                    placeholder="Ürün cinsi"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <input
                    {...register("fiyat", { required: true })}
                    type="number"
                    placeholder="Fiyat"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <input
                    {...register("aciklama", { required: true })}
                    type="textarea"
                    placeholder="Açıklama"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <input
                    {...register("img", { required: true })}
                    type="file"
                    placeholder="Görsel"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <input
                    id="contact-submit"
                    type="submit"
                    className="btn btn-transparent"
                    value="Ürün Ekle"
                  />
                </div>
              </form>
            </div>

            <div className="col-3"></div>
          </div>
        </div>
      </section>
    </>
  );
}
