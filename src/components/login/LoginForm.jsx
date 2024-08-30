import React, { Fragment } from "react";
import Separator from "../separator/Separator";
import { FaUserCheck } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import SubmitButton from "../inputs/SubmitButton";
import Input from "../inputs/Input";
import { LoginSchema } from "../../utils/validations/schema";
import { LoginValues } from "../../utils/initialValues/InitialValues";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const Login = () => {
  const { setAuth } = useAuth();

  const axiosPrivate = useAxiosPrivate();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = async (values, actions) => {
    try {
      const response = await axiosPrivate.post("/auth", values, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      setAuth({ accessToken: response.data.accessToken });

      actions.resetForm();
      navigate(from, { replace: true });
    } catch (err) {
      actions.setSubmitting(false);
      console.log(err);
    }
  };

  return (
    <Fragment>
      <Separator text="ورود" initiallyVisible={true} />
      <div className="d-flex justify-content-center align-items-center">
        <div className="registerform bg-dark text-light text-light py-5 px-4">
          <div className="text-center mb-4">
            <FaUserCheck fontSize="80px" />
          </div>
          <Formik
            initialValues={LoginValues}
            validationSchema={LoginSchema}
            onSubmit={onSubmit}
            validateOnBlur={false}
            validateOnChange={true}
            validateOnMount
          >
            {(formik) => {
              return (
                <Form>
                  <div className="form-row">
                    <Input
                      type="text"
                      name="mobile"
                      id="Mobilephone"
                      label="شماره همراه"
                    />
                  </div>
                  <div className="form-row">
                    <Input
                      type="password"
                      name="password"
                      id="Password"
                      label="رمز عبور"
                    />
                  </div>
                  <SubmitButton formik={formik} name="ورود" />
                </Form>
              );
            }}
          </Formik>
          <div className="mt-4">
            <p>
              برای ثبت نام
              <Link to="/register" className="mx-2 link-success link">
                کلیک
              </Link>
              کنید
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
