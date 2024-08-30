import React from "react";
import Info from "./Info";
import ContactForm from "./ContactForm";
import { FaTelegramPlane } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";

const ContactContent = () => {
  return (
    <div className="w-100 h-100 d-flex justify-content-between flex-wrap flex-md-nowrap">
      
      <div className="w-100 h-100">
        <Info
          icon={<GrInstagram fontSize="30px" />}
          text="پشتیبانی در دایرکت صفحه اینستاگرام"
        />
        <Info
          icon={<FaTelegramPlane fontSize="30px" />}
          text="پشتیبانی در تلگرام"
        />
        <Info
          icon={<BsWhatsapp fontSize="30px" />}
          text="پشتیبانی در واتساپ 09221234567"
        />
      </div>
      <div className="mx-5 my-5"></div>
      <ContactForm />
    </div>
  );
};

export default ContactContent;
