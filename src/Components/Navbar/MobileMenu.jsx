import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  return (
    <div className="">
      <div className="lg:hidden block ">
        {isOpen ? (
          <RxCross2 className="hidden" onClick={() => setIsOpen(!isOpen)} />
        ) : (
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="w-8 h-6 flex flex-col justify-between items-center mdl:hidden text-4xl text-[#64ffda] cursor-pointer overflow-hidden group"
          >
            <span className="w-full h-[5px] bg-[#ffcc1d] inline-flex transform group-hover:translate-x-1 transition-all ease-in-out duration-300"></span>

            <span className="w-full h-[5px] bg-[#64ffda] inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>

            <span className="w-full h-[5px] bg-[#ffcc1d] inline-flex transform group-hover:translate-x-1 transition-all ease-in-out duration-300"></span>
          </div>
        )}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-[#3657cd] z-0 w-3/4 custom-scroll top-0 right-0 max-h-screen absolute p-2 overflow-y-auto"
          >
            <div className="">
              <div className="cursor-pointer sticky top-2 z-50">
                <RxCross2
                  className="text-3xl hover:text-red-600 duration-200"
                  onClick={() => setIsOpen(!isOpen)}
                />
              </div>

              <div className="min-h-screen">
                <ul className="flex items-center flex-col mt-3 z-0">
                  <li>
                    <Link className="mobile-sub-menu-style" to={"/home"}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="mobile-sub-menu-style" to={"/service"}>
                      Service
                    </Link>
                  </li>
                  <li>
                    <Link className="mobile-sub-menu-style" to={"/about-us"}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="mobile-sub-menu-style" to={"/fqa"}>
                      FQA
                    </Link>
                  </li>
                  <li>
                    <Link className="mobile-sub-menu-style" to={"/contact-us"}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
export default MobileMenu;
