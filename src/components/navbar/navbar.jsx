import React from "react";
import { logo } from "../../images";
import { navLinkData } from "../data";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="fixed left-0 top-0 w-full h-[88px] bg-white z-20">
      <main className="max-w-[1440px] mx-auto w-full h-full flex justify-between">
        <NavLink to={"/"} className="flex justify-start items-center">
          <img
            className="w-[100px] h-[88px] object-contain"
            src={logo}
            alt=""
          />
        </NavLink>
        <section className="flex flex-col items-end justify-center">
          <div>+998 93 515 80 84</div>
          <div className="flex justify-start items-center gap-6">
            {navLinkData.map((item, idx) => (
              <NavLink
                to={item.link !== "dropdown" && item.link}
                key={idx}
                className={"relative group"}
              >
                <h1 className="uppercase clamp4 text-thin font-bold">
                  {item.title}
                </h1>
                <div className="w-full h-[2px]">
                  {pathname === item.link && (
                    <div className="w-full h-[2px] bg-primary"></div>
                  )}
                </div>
                {item.submenu && (
                  <div>
                    <div className="absolute group-hover:block hover:block hidden">
                      <div className="relative bg-white mt-[40px] p-4 w-full whitespace-nowrap flex flex-col gap-2">
                        <div className="absolute w-[20px] h-[20px] -top-[10px] bg-white rotate-45 "></div>
                        {item.submenu.map((item, idx) => (
                          <NavLink to={item.link} key={idx}>
                            <h1 className="font-[500] uppercase clamp4">
                              {item.title}
                            </h1>
                            {pathname === item.link ? (
                              <div className="w-full h-[2px] bg-primary"></div>
                            ) : (
                              <div className="w-full h-[2px]"></div>
                            )}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </NavLink>
            ))}
          </div>
        </section>
      </main>
    </nav>
  );
};

export default Navbar;
