import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Avatar from "./Avatar";
import NavUl from "./NavUl";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const closeNav = () => {
    setShowNav(false);
  };

  // handel body overflow
  const handelBodyOverflow = () => {
    document.body.style.overflow = showNav ? "hidden" : "auto";
  };

  // handle resize
  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      closeNav();
    }
  };

  useEffect(() => {
    handelBodyOverflow();
  }, [showNav]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        onClick={toggleNav}
        className="border z-10 bg-transparent cursor-pointer lg:hidden w-fit px-3 py-1 fixed top-2 left-3 border-slate-300 rounded-lg"
      >
        <AiOutlineMenu className="text-3xl " />
      </div>
      <div
        onClick={(e) => {
          e.stopPropagation();
          e.target == e.currentTarget ? toggleNav() : "";
        }}
        className={`max-lg:bg-black/40 z-10  max-lg:h-screen max-lg:fixed max-lg:top-0  max-lg:left-0  xl:col-span-2 max-lg:w-full lg:col-span-3 duration-100 ${
          showNav ? "opacity-100 visible" : "max-lg:opacity-0 max-lg:invisible"
        }`}
      >
        <aside
          className={`h-full  max-lg:w-[400px] bg-white  shadow-lg relative -translate-x-100 lg:translate-x-0 duration-300 ease-in ${
            showNav ? "translate-x-0" : ""
          } `}
        >
          {showNav && (
            <div className="flex justify-end py-3 px-2">
              <IoMdClose
                className="text-[27px] text-[#7f7f7f] hover:text-[#404040] duration-150 cursor-pointer"
                onClick={closeNav}
              />
            </div>
          )}

          <div className="sticky h-full top-0 h-screen bg-white w-full">
            <Avatar />
            <NavUl />
          </div>
        </aside>
      </div>
    </>
  );
};

export default Navbar;
