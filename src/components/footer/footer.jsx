import React from "react";
import { logo } from "../../images";
import { navLinkData } from "../data";
import { NavLink } from "react-router-dom";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <footer className="w-full bg-secondaryBg">
      <main className="max-w-[1440px] w-11/12 mx-auto flex flex-col gap-2 py-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-[24px]">
          <img
            className="w-[100px] h-[88px] object-contain"
            src={logo}
            alt=""
          />
          <div className="flex flex-col gap-2 text-thin items-start justify-start">
            {navLinkData.map((item, idx) => (
              <NavLink to={item.link} key={idx}>
                <div>{item.title}</div>
              </NavLink>
            ))}
          </div>
          <div className="flex flex-col justify-start items-start gap-3">
            <div className="flex items-center justify-start gap-2">
              <FaMapLocationDot className="text-thin text-[30px]" />
              <h1 className="clamp4 text-thin">
                г. Карши, Г. Гулом МСГ, ул. Насаф, д. 6/4
              </h1>
            </div>
            <div className="flex items-center justify-start gap-2">
              <FaPhoneAlt className="text-thin text-[24px]" />
              <h1 className="clamp4 text-thin">+998 (93) 515-80-84</h1>
            </div>
            <div className="flex items-center justify-start gap-2">
              <TfiEmail className="text-thin text-[24px]" />
              <h1 className="clamp4 text-thin">
                tnodir@gmail.com
                <br />
                www.expressautomatica.uz
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-thin w-full h-[1px]"></div>
        <div className="flex flex-col gap-2">
          <h1>©2005-2024 </h1>
          <h1>
            Строительная компания «EXPRESS AUTOMATICA» Строительство, Ремонт и
            реконструкция зданий, отделка офисов.
          </h1>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
