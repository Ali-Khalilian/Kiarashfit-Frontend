
import { Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import SubmitButton from "../inputs/SubmitButton";
import NoData from "../noData/NoData";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const Order = ({ orders , setOrders }) => {
  const axiosPrivate = useAxiosPrivate();
  const onSubmit = (values, actions) => {
    axiosPrivate
      .post(`/users/userPlan`, values, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res.data);
        setOrders(res.data.updatedOrders)
        actions.setSubmitting(false);
      })
      .catch((err) => {
        console.log(err);
        actions.setSubmitting(false);
      });
  };

  return (
    <div className="wh100">
      {orders.length ? (
        orders.map((order, index) => (
          <div key={Math.random()} className="mb-3 w-75">
            <div id={`accordion${index}`}>
              <div className="card">
                <div className="card-header" id={`headingOne${index}`}>
                  <h5 className="mb-0">
                    <button
                      className="btn"
                      data-toggle="collapse"
                      data-target={`#collapseOne${index}`}
                      aria-expanded="true"
                      aria-controls={`collapseOne${index}`}
                    >
                      {`سفارش ${index + 1}`}
                    </button>
                  </h5>
                </div>

                <div
                  id={`collapseOne${index}`}
                  className="collapse"
                  aria-labelledby={`headingOne${index}`}
                  data-parent={`#accordion${index}`}
                >
                  <div className="card-body text-dark">
                    <div className="row">
                      <div className="col-12 col-md-4 mb-2">
                        نام: {order.firstname}
                      </div>
                      <div className="col-12 col-md-4 mb-2">
                        نام خانوادگی: {order.lastname}
                      </div>
                      <div className="col-12 col-md-4 mb-2">
                        موبایل: {order.mobile}
                      </div>
                      <div className="col-12 col-md-4 mb-2">
                        ایمیل: {order.email}
                      </div>
                      <div className="col-12 col-md-4 mb-2">
                        سن: {order.age}
                      </div>
                      <div className="col-12 col-md-4 mb-2">
                        وزن: {order.weight}
                      </div>
                      <div className="col-12 col-md-4 mb-2">
                        قد: {order.hight}
                      </div>
                      <div className="col-12 col-md-4 mb-2">
                        هدف: {order.goal}
                      </div>
                      <div className="col-12 col-md-4 mb-2">
                        تعداد جلسه: {order.workout}
                      </div>
                      <div className="col-12 col-md-4 mb-2">
                        بیماری: {order.illness}
                      </div>
                      <div className="col-12 col-md-4 mb-2">
                        سابقه تمرین: {order.history}
                      </div>
                      <div className="col-12 col-md-4 mb-2">
                        توضیحات: {order.description}
                      </div>
                      <div className="d-flex flex-wrap justify-content-around">
                        <Link
                          to={order.file1}
                          target="_blank"
                          download={true}
                          className="btn btn-light m-2 m-md-0"
                        >
                          دانلود عکس
                        </Link>
                        <Link
                          to={order.file2}
                          target="_blank"
                          download={true}
                          className="btn btn-light m-2 m-md-0"
                        >
                          دانلود عکس
                        </Link>
                        <Link
                          to={order.file3}
                          target="_blank"
                          download={true}
                          className="btn btn-light m-2 m-md-0"
                        >
                          دانلود عکس
                        </Link>
                        <Link
                          to={order.file4}
                          target="_blank"
                          download={true}
                          className="btn btn-light m-2 m-md-0"
                        >
                          دانلود عکس
                        </Link>
                      </div>
                      <hr className="my-3" />

                      <Formik
                        initialValues={{
                          userPlan: null,
                          mobile: order.mobile,
                          orderId: order._id,
                        }}
                        onSubmit={onSubmit}
                      >
                        {(formik) => {
                          return (
                            <Form  className="d-flex flex-column flex-md-row justify-content-center align-items-md-center">
                              <input
                                type="file"
                                name="userPlan"
                                id="UserPlan"
                                label="افزودن برنامه"
                                accept="image/*,application/pdf"
                                onChange={(e) =>
                                  formik.setFieldValue(
                                    "userPlan",
                                    e.target.files[0]
                                  )
                                }
                              />

                              <SubmitButton
                                formik={formik}
                                name={" افزودن برنامه"}
                                customClass="btn btn-success mt-4 mt-md-0"
                              />
                            </Form>
                          );
                        }}
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default Order;
