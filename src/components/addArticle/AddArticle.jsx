import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../api/axios";
import { ArticleSchema } from "../../utils/validations/schema";
import Input from "../inputs/Input";
import SubmitButton from "../inputs/SubmitButton";
import Separator from "../separator/Separator";
import useArticle from "../../hooks/useArticle";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const AddArticle = () => {
  const axiosPrivate = useAxiosPrivate();

  const { setArticles } = useArticle();
  const navigate = useNavigate();
  const { articleId } = useParams();
  const [data, setData] = useState({
    articleImage: "",
    title: "",
    introduction: "",
    description: "",
  });

  const initialValues = {
    articleImage: null,
    title: "",
    introduction: "",
    description: "",
  };

  const onSubmit = (values, actions) => {
    if (articleId) {
      axiosPrivate
        .get(`/articles/getOne`, {
          params: {
            id: articleId,
          },
        })
        .then(() => {
          values = { ...values, id: articleId };
        })
        .then(() => {
          axiosPrivate
            .put(`/articles/update`, values, {
              headers: { "Content-Type": "multipart/form-data" },
            })
            .then((res) => {
              setArticles(res.data.updatedArticles);
            })
            .catch((err) => err.message);
          actions.setSubmitting(false);
          navigate(-1);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      let formData = new FormData();
      formData.append("articleImage", values.articleImage);
      formData.append("title", values.title);
      formData.append("introduction", values.introduction);
      formData.append("description", values.description);
      axiosPrivate
        .post(`/articles/add`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then(() => {
          actions.resetForm();
          actions.setSubmitting(false);
          return navigate(-1);
        })
        .catch((err) => {
          return console.log(err);
        });
    }
  };

  useEffect(() => {
    if (articleId) {
      axiosPrivate
        .get(`/articles/getOne`, {
          params: {
            id: articleId,
          },
        })
        .then((res) => {
          const savedData = {
            title: res.data.title,
            introduction: res.data.introduction,
            description: res.data.description,
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
        text={articleId ? "ویرایش مقاله" : "افزودن مقاله"}
        initiallyVisible={true}
      />
      <div className="d-flex justify-content-center align-items-center">
        <div className="registerform bg-dark text-light text-light py-5 px-4">
          <Formik
            initialValues={data || initialValues}
            validationSchema={ArticleSchema}
            onSubmit={onSubmit}
            enableReinitialize
          >
            {(formik) => {
              return (
                <Form>
                  <div className="form-row">
                    <input
                      type="file"
                      name="articleImage"
                      id="ArticleImage"
                      label="عکس مقاله"
                      accept="image/*"
                      onChange={(e) =>
                        formik.setFieldValue("articleImage", e.target.files[0])
                      }
                    />
                  </div>
                  <div className="form-row">
                    <Input
                      type="text"
                      name="title"
                      id="Title"
                      label="عنوان مقاله"
                    />
                  </div>
                  <div className="form-row">
                    <Input
                      type="text"
                      name="introduction"
                      id="Introduction"
                      label="مقدمه"
                      as="textarea"
                    />
                    <Input
                      type="textarea"
                      name="description"
                      id="Description"
                      label="متن"
                      as="textarea"
                    />
                  </div>
                  <SubmitButton
                    formik={formik}
                    name={articleId ? "ویرایش" : "افزودن"}
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

export default AddArticle;
