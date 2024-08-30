import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../inputs/Input";
import SubmitButton from "../inputs/SubmitButton";
import Separator from "../separator/Separator";
import {BodySchema} from "../../utils/validations/schema"
import useBody from "../../hooks/useBody";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const AddBody = () => {
  const { setBodies } = useBody();
  const navigate = useNavigate();
  const { bodyId } = useParams();
  const axiosPrivate = useAxiosPrivate();

  const [data, setData] = useState({
    title: "",
  });
  const initialValues = {
    bodyImage: "",
    title: "",
  };

  const onSubmit = (values, actions) => {
    if (bodyId) {
      axiosPrivate
        .get(`/bodyChanges/getOne`, {
          params: {
            id: bodyId,
          },
        })
        .then(() => {
          values = { ...values, id: bodyId };
        })
        .then(() => {
          axiosPrivate
            .put(`/bodyChanges/update`, values, {
              headers: { "Content-Type": "multipart/form-data" },
            })
            .then((res) => setBodies(res.data.updatedBodies))
            .catch((err) => err.message);
          actions.setSubmitting(false);
          navigate(-1);
      })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      let formData = new FormData();
      formData.append("bodyImage", values.bodyImage);
      formData.append("title", values.title);
      axiosPrivate
        .post(`/bodyChanges/add`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then(() => {
          actions.resetForm();
          actions.setSubmitting(false);
          return navigate(-1);
        })
        .catch((err) => {
          return console.log(err.message);
        });
    }
  };

  useEffect(() => {
    if (bodyId) {
      axiosPrivate
        .get(`/bodyChanges/getOne`, {
          params: {
            id: bodyId,
          },
        })
        .then((res) => {
          const savedData = {
            title: res.data.title,
          };
          setData(savedData);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, []);

  return (
    <>
      <Separator
        text={bodyId ? "ویرایش تغییرات" : "افزودن تغییرات"}
        initiallyVisible={true}
      />
      <div className="d-flex justify-content-center align-items-center">
        <div className="registerform bg-dark text-light text-light py-5 px-4">
          <Formik
            initialValues={data || initialValues}
            validationSchema={BodySchema}
            onSubmit={onSubmit}
            enableReinitialize
          >
            {(formik) => {
              return (
                <Form>
                  <div className="form-row">
                    <input
                      type="file"
                      name="bodyImage"
                      id="BodyImage"
                      label="عکس بدن"
                      accept="image/*"
                      onChange={(e) =>
                        formik.setFieldValue("bodyImage", e.target.files[0])
                      }
                    />
                  </div>
                  <div className="form-row">
                    <Input
                      type="text"
                      name="title"
                      id="Title"
                      label="عنوان تغییرات"
                    />
                  </div>
            
                  <SubmitButton
                    formik={formik}
                    name={bodyId ? "ویرایش" : "افزودن"}
                  />
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default AddBody;
