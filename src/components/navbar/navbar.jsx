import { logo } from "../../images";
import { navLinkData } from "../data";
import { NavLink, useLocation } from "react-router-dom";
import { MdOutlinePhoneCallback } from "react-icons/md";
import Language from "./language";
import "./navbar.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Navbar = () => {
  const { pathname } = useLocation();

  useGSAP(() => {
    gsap
      .timeline({ delay: 0.5 })
      .fromTo(
        "nav .nav-container .logo",
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0 }
      )
      .fromTo(
        "nav .nav-container .tab",
        {
          opacity: 0,
          x: -20,
          ease: "power3.inOut",
        },
        { opacity: 1, x: 0, stagger: 0.2 }
      );

    gsap.timeline({ delay: 0.5 }).fromTo(
      [
        "nav  .phone-container .phone",
        "nav  .phone-container .lang",
      ],
      {
        opacity: 0,
        y: -10,
        ease: "power3.inOut",
      },
      { opacity: 1, y: 0, stagger: 0.3 }
    );
  });

  return (
    <nav className="fixed left-0 top-0 w-full h-[88px] bg-white z-20 shadow-md">
      <main className="nav-container max-w-[1440px] mx-auto w-11/12 h-full flex justify-between items-center">
        <NavLink
          to={"/"}
          className="logo mb-[-10px] flex justify-start items-center"
        >
          <img
            className="w-[150px] h-[88px] object-contain"
            src={logo}
            alt=""
          />
        </NavLink>
        <section className="nav-tab-container hidden md:flex justify-start items-center lg:gap-6 gap-3 ">
          {navLinkData.map((item, idx) => (
            <NavLink
              to={item.link !== "dropdown" && item.link}
              key={idx}
              className={"relative group tab"}
            >
              <div className="buttons">
                <button
                  className={`${
                    item.link === pathname ? "text-primary" : "text-thin"
                  } btn font-bold clamp5`}
                >
                  <span></span>
                  {item.title}
                </button>
              </div>
              {item.submenu && (
                <div>
                  <div className="absolute group-hover:block hover:block hidden">
                    <div className="relative bg-white mt-[40px] p-4 w-full whitespace-nowrap flex flex-col gap-2">
                      <div className="absolute w-[20px] h-[20px] -top-[10px] bg-white rotate-45 "></div>
                      {item.submenu.map((subItem, subIdx) => (
                        <NavLink
                          to={subItem.link}
                          key={subIdx}
                          className={"buttons"}
                        >
                          <button
                            className={`${
                              subItem.link === pathname
                                ? "text-primary"
                                : "text-thin"
                            } btn font-bold clamp5`}
                          >
                            <span></span>
                            {subItem.title}
                          </button>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </NavLink>
          ))}
        </section>
        <section className="phone-container flex items-center justify-center gap-3">
          <div className="phone flex items-center gap-3 rounded-3xl border border-primary p-2 cursor-pointer shadow-lg">
            <MdOutlinePhoneCallback className="text-md font-bold text-primary" />
            <h1 className="clamp5 font-bold text-primary">+998 93 515 80 84</h1>
          </div>
          <div className="lang z-30">
            <Language />
          </div>
        </section>
      </main>
    </nav>
  );
};

export default Navbar;
