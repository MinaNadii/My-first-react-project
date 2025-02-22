import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";

const MasterLayout = () => {
  const [isHome, setIsHome] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/" || pathname === "/home") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [pathname]);

  return (
    <>
      <div className="grid grid-cols-12">
        <Navbar />
        <div
          className={`col-span-12 lg:col-span-9 xl:col-span-10  h-full ${
            !isHome && "mx-[3%] md:mx-[15%] max-lg:mt-20"
          }`}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MasterLayout;
