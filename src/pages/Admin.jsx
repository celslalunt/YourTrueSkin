import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const AddProduct = () => {
  const [display, setDisplay] = useState("none");
  const addItems = () => {
    fetch("http://localhost:2000/products", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        productName: formik.values.productName,
        productImage: formik.values.productImage,
        desc: formik.values.desc,
        price: formik.values.price,
      }),
    })
      .then((res) => {
        {
          setDisplay("block");
          setTimeout(() => {
            setDisplay("none");
          }, 2000);
          document.getElementById("form-submit").reset();
        }
      })
      .catch((err) => {
        console.log("Error     ", err);
      });
  };
  const formik = useFormik({
    initialValues: {
      productName: "",
      productImage: "",
      desc: "",
      price: "",
    },
    onSubmit: addItems,
    validationSchema: yup.object().shape({
      productName: yup.string().required().min(3),
      productImage: yup.string().required().min(3),
      price: yup.number().required().min(3),
    }),
  });

  const handleForm = (e) => {
    const { target } = e;
    formik.setFieldValue(target.name, target.value);
  };
  return (
    <div>
      <div className="container-fluid d-flex gap-5 justify-content-center flex-wrap vh-100">
        <div className="row">
          <div className="col-md-12">
            <div className="card mt-5">
              <div className="card-body">
                <div
                  className="alert alert-success"
                  style={{ display: `${display}` }}
                  role="alert"
                >
                  Data product tersimpan.
                </div>
                <form
                  id="form-submit"
                  onSubmit={formik.handleSubmit}
                  className=""
                >
                  <div className="row mb-2">
                    <div className="col-md-4">
                      <label className="form-label">Product Name</label>
                    </div>
                    <div className="col-md-8">
                      <input
                        onChange={handleForm}
                        className={`form-control ${
                          formik.errors.productName ? "is-invalid " : ""
                        }`}
                        type="text"
                        placeholder="Product Name"
                        name="productName"
                      />
                      {formik.errors.productName ? (
                        <div className="invalid-feedback">
                          This field is required
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-md-4">
                      <label className="form-label">Image</label>
                    </div>
                    <div className="col-md-8">
                      <input
                        onChange={handleForm}
                        className={`form-control ${
                          formik.errors.productImage ? "is-invalid " : ""
                        }`}
                        type="text"
                        placeholder="Image Source"
                        name="productImage"
                      />
                      {formik.errors.productImage ? (
                        <div className="invalid-feedback">
                          This field is required
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-md-4">
                      <label className="form-label">Description</label>
                    </div>
                    <div className="col-md-8">
                      <input
                        onChange={handleForm}
                        className={`form-control ${
                          formik.errors.desc ? "is-invalid " : ""
                        }`}
                        type="text"
                        placeholder="Description"
                        name="desc"
                      />
                      {formik.errors.desc ? (
                        <div className="invalid-feedback">
                          This field is required
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-md-4">
                      <label className="form-label">Price</label>
                    </div>
                    <div className="col-md-8">
                      <input
                        onChange={handleForm}
                        className={`form-control ${
                          formik.errors.price ? "is-invalid " : ""
                        }`}
                        type="text"
                        placeholder="Price"
                        name="price"
                      />
                      {formik.errors.price ? (
                        <div className="invalid-feedback">
                          This field is required
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-md-12">
                      <button className="btn-add btn rounded-pill w-100 mt-3">
                        <b>Add</b>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
