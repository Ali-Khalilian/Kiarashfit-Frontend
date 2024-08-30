import React, { useEffect, useState } from "react";
import Separator from "../separator/Separator";
import { BiEdit, BiSolidUserPlus } from "react-icons/bi";
import { Form, Formik } from "formik";
import Input from "../inputs/Input";
import SubmitButton from "../inputs/SubmitButton";
import { RegisterSchema } from "../../utils/validations/schema";
import { RegisterValues } from "../../utils/initialValues/InitialValues";
import axios from "../../api/axios";
import { useNavigate, useParams } from "react-router-dom";

// 12345678aA!

const Register = () => {
  const { userid } = useParams();

  const navigate = useNavigate();

  const onSubmit = (values, actions) => {

    if (userid) {
console.log(values);

      
      axios
        .get("/users/getUser", {
          params: {
            id: userid,
          },
        })
        .then(() => {
          values = { ...values, id: userid };
        })
        .then(() => {
          axios
            .put("/users/editUser", values)
            .then((res) => {
              // setUser(res.data.updatedUsers);
              console.log(res.data);
              
            })
            .catch((err) => err);
          actions.setSubmitting(false);
          navigate(-1);
        })
        .catch((err) => {
          console.log(err);
        });

    } else {
      axios
      .post("/register", JSON.stringify(values), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((res) => {
        actions.setSubmitting(false);
        console.log(res);
        actions.resetForm();
        // redirect to login page
      })
      .catch((err) => {
        actions.setSubmitting(false);
        console.log(err.response);
      });
    }
  };

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (userid) {
      axios
        .get("/users/getUser", {
          params: {
            id: userid,
          },
        })
        .then((res) => {
          const savedData = {
            firstname: res.data.firstname,
            lastname: res.data.lastname,
            mobile: res.data.mobile,
            email: res.data.email,
            password: "",
            confirmPassword: "",
          };
          setData(savedData);
        });
    }
  }, []);

  return (
    <>
      <Separator text={userid ? "ویرایش" : "ثبت نام"} initiallyVisible={true} />
      <div className="d-flex justify-content-center align-items-center">
        <div className="registerform bg-dark text-light text-light py-5 px-4">
          <div className="text-center mb-4">
            {userid ? <BiEdit fontSize="80px" /> : <BiSolidUserPlus fontSize="80px" />}
          </div>
          <Formik
            initialValues={data || RegisterValues}
            validationSchema={RegisterSchema}
            onSubmit={onSubmit}
            validateOnBlur={false}
            validateOnChange={true}
            validateOnMount
            enableReinitialize
          >
            {(formik) => {
              return (
                <Form>
                  <div className="row">
                    <div className="col-md-6">
                      <Input
                        type="text"
                        name="firstname"
                        id="firstName"
                        label="نام"
                      />
                    </div>
                    <div className="col-md-6">
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

                  <Input
                    type="email"
                    name="email"
                    id="Email"
                    label="ایمیل(اختیاری)"
                  />

                  <Input
                    type="password"
                    name="password"
                    id="Password"
                    label="رمز عبور"
                  />

                  <Input
                    type="password"
                    name="confirmPassword"
                    id="ConfirmPassword"
                    label="رمز عبور"
                  />
                  <SubmitButton formik={formik} name={userid ? "ویرایش" : "افزودن"} />
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Register;
