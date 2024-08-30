import React from "react";
import { NavLink } from "react-router-dom";
import { FaBloggerB } from "react-icons/fa6";
import { MdVideoLibrary } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { AiFillPhone } from "react-icons/ai";
import { IoLogOut } from "react-icons/io5";
import { BiSolidUser,BiBody,BiSolidLockOpenAlt} from "react-icons/bi";

const Navbar = () => {

  const signOut = async () => {
      console.log("logOut");
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbackground">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-light fs-4 brandshadow" to="/">
          کیارش فیت
        </NavLink>

        <span className="text-light mx-2 d-none d-lg-block">|</span>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <NavLink
              className="nav-link hover-underline-animation mt-2 mt-lg-0"
              to="/articles"
            >
              <span className="nav-icon"><FaBloggerB fontSize="1.3em" /></span>
              مقالات
            </NavLink>

            <NavLink
              className="nav-link hover-underline-animation mt-2 mt-lg-0"
              to="/bodyChanges"
            >
              <span className="nav-icon"><BiBody fontSize="1.3em" /></span>
              تغییرات بدنی
            </NavLink>

            {/* <NavLink
              className="nav-link hover-underline-animation mt-2 mt-lg-0"
              to="/videos"
            >
              <span className="nav-icon"><MdVideoLibrary fontSize="1.3em" /></span>
              ویدیوها
            </NavLink> */}

            <NavLink
              className="nav-link hover-underline-animation mt-2 mt-lg-0"
              to="/contact"
            >
              <span className="nav-icon"><AiFillPhone fontSize="1.3em" /></span>
              تماس با ما
            </NavLink>
            <NavLink
              className="nav-link hover-underline-animation mt-2 mt-lg-0"
              to="/profile"
            >
              <span className="nav-icon"><BiSolidUser fontSize="1.3em" /></span>
              پروفایل
            </NavLink>
            <NavLink
              className="nav-link hover-underline-animation mt-2 mt-lg-0"
              to="/login"
            >
              <span className="nav-icon"><BiSolidLockOpenAlt fontSize="1.3em" /></span>
              ورود / ثبت نام
            </NavLink>

            <NavLink
              className="nav-link hover-underline-animation mt-2 mt-lg-0"
              to="/adminpanel"
            >
              <span className="nav-icon"><RiAdminFill fontSize="1.3em" /></span>
              ورود ادمین
            </NavLink>
         
            <NavLink
              className="nav-link hover-underline-animation mt-2 mt-lg-0"
              onClick={signOut}
              to="/logout"
            >
              <span className="nav-icon"><IoLogOut fontSize="1.3em" /></span>
              خروج
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
