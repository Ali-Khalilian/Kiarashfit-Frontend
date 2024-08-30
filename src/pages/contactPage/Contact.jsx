import React from "react";
import ContactContent from "../../components/contact/ContactContent";
import Separator from "../../components/separator/Separator";

const Contact = () => {
  return (
    <section className="w-100 h-100 container">
        <Separator text="تماس با ما" initiallyVisible={true}/>
        <ContactContent/>
    </section>
  );
};

export default Contact;
