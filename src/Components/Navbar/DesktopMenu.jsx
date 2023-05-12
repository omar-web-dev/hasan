import { FaPhoneVolume } from "react-icons/fa";
import { Link } from "react-router-dom";

function DesktopMenu() {

  return (
    <div className="lg:block hidden">
      {/************************ desktop menu start here *************************/}

      <ul className="flex gap-12 items-center">
        <li className="relative">
          <Link
            className="flex items-center uppercase text-[15px] font-Inter font-bold"
            to={"/"}
          >
            Home
          </Link>
        </li>
        <li className="relative">
          <Link
            className="flex items-center uppercase text-[15px] font-Inter font-bold"
            to={"/service"}
          >
            Service
          </Link>
        </li>
        <li className="relative">
          <Link
            className="flex items-center uppercase text-[15px] font-Inter font-bold"
            to={"/about-us"}
          >
            About Us
          </Link>
        </li>
        <li className="relative">
          <Link
            className="flex items-center uppercase text-[15px] font-Inter font-bold"
            to={"/fqa"}
          >
            FQA
          </Link>
        </li>
        <li className="relative">
          <Link
            className="flex items-center uppercase text-[15px] font-Inter font-bold"
            to={"/blog"}
          >
            Blog
          </Link>
        </li>
        <li className="relative">
          <Link
            className="flex items-center uppercase text-[15px] font-Inter font-bold"
            to={"/contact"}
          >
            Contact
          </Link>
        </li>
        <p className="px-2 py-2 bg-[#8e9172]  rounded-full  ">
          <button className="flex justify-center items-center px-4 py-2 bg-[#ffcc1d] text-black font-bold rounded-full">
            <FaPhoneVolume />
            LETS TALK
          </button>
        </p>
      </ul>

      {/************************ desktop menu end here *************************/}
    </div>
  );
}

export default DesktopMenu;
