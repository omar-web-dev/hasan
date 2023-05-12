import { FaCaretRight  } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className=" bg-[#054ada]">
      <div className="container mx-auto py-8 px-8 max-w-[1200px] ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-between">
          {/* *** first section */}
          <div className="w-full  md:text-left">
            <img
              className="h-12  mb-4"
              src="https://redoyislam.com/wp-content/uploads/2021/12/redoy-1-150x59.png"
              alt="Logo"
            />
            <p className="text-gray-100">
              We’re a full-service SEO company that specializes in WordPress
              website design and Wordpress SEO. Our team has over seven years of
              experience with web design, word press optimization, and
              high-quality SEO. We believe in putting your satisfaction first at
              RedoyIslam. We will do everything possible for you by providing
              top notch workmanship on all projects undertaken while maintaining
              integrity across the entire engagement period, whether it is new
              clients coming back again or new business ventures starting up too
              .
            </p>
          </div>
          {/* *** meddle section */}
          <div className="w-full md:px-10 ">
            <h5 className="uppercase text-gray-100 font-bold mb-4">
              WordPress services
            </h5>
            <nav className="mb-4">
              <ul>
                <li className="flex items-center text-gray-200">
                  <FaCaretRight className="mr-3" />
                  <Link to="/">
                    Home
                  </Link>
                </li>
                <li className="flex items-center text-gray-200">
                  <FaCaretRight className="mr-3" />
                  <Link to="/">
                    Home
                  </Link>
                </li>
                <li className="flex items-center text-gray-200">
                  <FaCaretRight className="mr-3" />
                  <Link to="/">
                    Home
                  </Link>
                </li>
                <li className="flex items-center text-gray-200">
                  <FaCaretRight className="mr-3" />
                  <Link to="/home">
                    Home
                  </Link>
                </li>
                <li className="flex items-center text-gray-200">
                  <FaCaretRight className="mr-3" />
                  <Link to="/">
                    Home
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* *** last section */}
          <form className="w-full text-gray-100">
            <div>
              <p className="sm_pre_text">+88 88888 8888</p>
              <p className="sm_pre_text">yourname@host.bd</p>
            </div>
            <div className="mb-4 mt-2">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email address"
              />
            </div>
            <p className="px-2 py-2 bg-[#8e9172]  rounded-full transition duration-300 hover:bg-[#ffcc1d] transform hover:scale-40 ">
              <button className="w-full px-4 py-2 bg-[#ffcc1d] text-black font-bold rounded-full transition duration-300 hover:bg-[#ffcc1d] transform text-xl  hover:scale-80">
                SUBSCRIBE
              </button>
            </p>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
