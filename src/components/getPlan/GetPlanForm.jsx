import React from "react";
import { FastField, Form, Formik } from "formik";
import Input from "../inputs/Input";
import SubmitButton from "../inputs/SubmitButton";
import { PlanValues } from "../../utils/initialValues/InitialValues";
import { PlanSchema } from "../../utils/validations/schema";
import { Link } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";



const GetPlanForm = () => {
  const axiosPrivate = useAxiosPrivate();

  const onSubmit = (values, actions) => {
    let formData = new FormData();
    formData.append("firstname", values.firstname);
    formData.append("lastname", values.lastname);
    formData.append("mobile", values.mobile);
    formData.append("email", values.email);
    formData.append("hight", values.hight);
    formData.append("weight", values.weight);
    formData.append("age", values.age);
    formData.append("workout", values.workout);
    formData.append("history", values.history);
    formData.append("illness", values.illness);
    formData.append("description", values.description);
    formData.append("goal", values.goal);
    formData.append("file1", values.file1);
    formData.append("file2", values.file2);
    formData.append("file3", values.file3);
    formData.append("file4", values.file4);
  
    axiosPrivate
      .post("/orders/add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res.data);
        actions.resetForm();
        actions.setSubmitting(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="col-12 col-lg-7">
      <div>
        <Formik
          initialValues={PlanValues}
          validationSchema={PlanSchema}
          onSubmit={onSubmit}
          validateOnBlur={false}
          validateOnChange={true}
          validateOnMount
        >
          {(formik) => {
            return (
              <Form>
                <div className="row">
                  <div className="col-6">
                    <Input
                      type="text"
                      name="firstname"
                      id="firstName"
                      label="نام"
                    />
                  </div>
                  <div className="col-6">
                    <Input
                      type="text"
                      name="lastname"
                      id="LastName"
                      label="نام خانوادگی"
                    />
                  </div>
                </div>

                <Input
                  type="text"
                  name="mobile"
                  id="Mobilephone"
                  label="شماره همراه"
                />

                <Input type="email" name="email" id="Email" label="ایمیل" />
                <hr className="my-4" />

                <div className="row">
                  <div className="col-6">
                    <Input
                      type="number"
                      name="hight"
                      id="Hight"
                      label="قد"
                      min="100"
                      max="999"
                      step="0.001"
                    />
                  </div>
                  <div className="col-6">
                    <Input
                      type="number"
                      name="weight"
                      id="Weight"
                      label="وزن"
                      min="1"
                      max="999"
                      step="0.001"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <Input
                      type="number"
                      name="age"
                      id="Age"
                      label="سن"
                      min="10"
                      max='99'
                    />
                  </div>
                  <div className="col-6">
                    <Input
                      type="number"
                      name="workout"
                      id="Workout"
                      label="تعداد جلسات تمرین"
                      min="1"
                      max="6"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <Input
                      type="textarea"
                      name="history"
                      id="History"
                      label="سابقه تمرین"
                      as="textarea"
                    />
                  </div>
                  <div className="col-6">
                    <Input
                      type="textarea"
                      name="illness"
                      id="Illness"
                      label="آسیب دیدگی و بیماری"
                      as="textarea"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <Input
                      type="textarea"
                      name="goal"
                      id="Goal"
                      label="هدف"
                      as="textarea"
                    />
                  </div>
                  <div className="col-6">
                    <Input
                      type="textarea"
                      name="description"
                      id="Description"
                      label="توضیحات"
                      as="textarea"
                    />
                  </div>
                </div>

                <hr className="my-4" />

                <div className="mb-4">
                  <h3 className="text-center fw-bolder">تصاویر بدن</h3>
                  <h6 className="text-center text-secondary">
                    لطفا تصاویر خود را بدون فیگور ارسال کنید
                  </h6>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                  <input
                    type="file"
                    name="file1"
                    id="File1"
                    label="از جلو"
                    accept="image/*"
                    onChange={(e) =>
                      formik.setFieldValue("file1", e.target.files[0])
                    }
                  />
                  <input
                    type="file"
                    name="file2"
                    id="File2"
                    label="از بغل"
                    accept="image/*"
                    onChange={(e) =>
                      formik.setFieldValue("file2", e.target.files[0])
                    }
                  />
                  <input
                    type="file"
                    name="file3"
                    id="File3"
                    label="از پشت"
                    accept="image/*"
                    onChange={(e) =>
                      formik.setFieldValue("file3", e.target.files[0])
                    }
                  />
                </div>
                <div className="row">
                  <input
                    type="file"
                    name="file4"
                    id="File4"
                    label="آخرین برنامه خود (اختیاری)"
                    accept="image/*"
                    onChange={(e) =>
                      formik.setFieldValue("file4", e.target.files[0])
                    }
                  />
                </div>

                <div className="form-check my-3 fs-5">
                  <FastField name="checkRules">
                    {({ field, meta }) => {
                      return (
                        <>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            name="checkRules"
                            id="flexCheckIndeterminate"
                            {...field}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckIndeterminate"
                          >
                            با
                            <Link
                              to="/getPlan/rules"
                              className="fw-bolder text-success"
                            >
                              {" "}
                              قوانین {""}
                            </Link>
                            موافقت میکنم .
                          </label>
                          {meta.touched && meta.error ? (
                            <small className="text-center d-block text-danger">
                              {meta.error}
                            </small>
                          ) : null}
                        </>
                      );
                    }}
                  </FastField>
                </div>
                <SubmitButton formik={formik} name="پرداخت" />
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default GetPlanForm;
