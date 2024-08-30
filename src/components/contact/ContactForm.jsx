import { Form, Formik } from "formik";
import React from "react";
import Input from "../inputs/Input";
import SubmitButton from "../inputs/SubmitButton";
import { EmailValues } from "../../utils/initialValues/InitialValues";
import { EmailSchema } from "../../utils/validations/schema";
import  { useRef } from "react";
import emailjs from "@emailjs/browser";


const ContactForm = () => {
  const form = useRef();
  const sendEmail = (values, actions) => {
    emailjs
      .sendForm(
        "service_bk1868i",
        "template_vkgcxqf",
        form.current,
        "SGqn2x5I7SXOJciEX"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(values);
          actions.resetForm()
          actions.setSubmitting(false)
        },
        (error) => {
          console.log(error);
          actions.setSubmitting(false)
        }
      );
  };
  return (
    <div className="w-100 h-100">
      <Formik
        initialValues={EmailValues}
        validationSchema={EmailSchema}
        onSubmit={sendEmail}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {(formik) => {
          return (
            <Form ref={form}>
              <Input type="email" name="email" id="Email" label="ایمیل" />

              <Input type="text" name="subject" id="Subject" label="موضوع" />
              <Input
                type="textarea"
                name="description"
                id="Description"
                label="متن"
                as="textarea"
              />
              <SubmitButton
                name="ارسال"
                formik={formik}
                customClass="btn btn-success text-center mt-4 p-2 p-md-2 w-25"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ContactForm;
