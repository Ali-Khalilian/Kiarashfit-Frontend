import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-5">
      <div className="w-100 bg-dark text-light text-center pt-3 d-flex flex-column justify-content-center align-items-center">
        <h2 className="brandshadow my-4">Kiarashfit.com</h2>
        <p className="border-bottom pb-2">
          نشانی : اصفهان - خیابان سه راه حکیم نظامی به طرف ارتش - بعد از خیابان
          مسجد اعظم - باشگاه ورزشی اکو
        </p>
        <div className="d-flex justify-content-center align-items-center mt-2">
          <div>
            <Link to="https://www.instagram.com/kiarashfit/" className="text-white">
              <BsInstagram className="pointer socialApp instagramApp" />
            </Link>
          </div>
          <div>
            <Link to="https://www.telegram.com" className="text-white">
              <BiLogoTelegram className="pointer socialApp mx-5 telegramApp" />
            </Link>
          </div>
          <div>
            <Link to="https://www.whatsapp.com" className="text-white">
              <BsWhatsapp className="pointer socialApp whatsApp" />
            </Link>
          </div>
        </div>
        <p className="mt-4">
          © طرح سایت/لوگو تنها متعلق به این وبسایت می‌باشد.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
