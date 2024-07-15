import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // This effect can be removed if you don't need the menu to close on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`flex ${isMenuOpen && "sticky top-0 "} px-[7.2%]
       bg-[#ffffff] sticky top-0 sm:bg-transparent justify-between items-center  h-[10dvh] font-inter sm:px-[10.5%] sm:absolute sm:w-[100%] sm:pt-6 sm:min-h-[11dvh] sm:py-2`}
    >
      <div className="flex items-center ">
        {" "}
        {/* Optional: Set logo container width on larger screens */}
        <NavLink
          exact
          to="/"
          className="text-black text-xl font-bold sm:text-white"
        >
          Logo
        </NavLink>
      </div>

      <button
        onClick={toggleMenu}
        className={`sm:hidden ml-auto text-white focus:outline-none`}
      >
        {isMenuOpen ? (
          <AiOutlineClose className="text-2xl text-black" />
        ) : (
          <AiOutlineMenu className="text-2xl text-black" />
        )}
      </button>

      <ul
        className={`${
          isMenuOpen
            ? "flex flex-col gap-5 pt-4 px-2 fixed bg-red-300  top-[10dvh] left-0 h-[90dvh] w-screen sm:hidden  h-90vh"
            : "hidden"
        } sm:flex sm:flex-row sm:w-30 sm:gap-[30px] `}
      >
        <li className="nav-item sm:hidden">
          <NavLink exact to="/" ClassName="text-white font-bold">
            Home
          </NavLink>
        </li>
        <li className="nav-item font-inter  sm:py-[12px] sm:px-[32px] sm:h-12 sm:w-28   sm:grid sm:place-items-center sm:bg-[#DEAA72] sm:rounded-[5px]  sm:text-[#000] sm:text-[20px] sm:font-semibold  ">
          <Link
            to="/signIn"
            ClassName="text-white font-bold sm:h-[100%] sm:w-[100%]"
          >
            Login
          </Link>
        </li>
        <li className="nav-item h-12 w-28 font-inter sm:grid sm:place-items-center sm:bg-[#996D3E] sm:rounded-[5px]  sm:text-[#EAE9E9] sm:text-[20px] sm:font-semibold  ">
          <Link
            to="/signUp"
            ClassName="text-white font-bold sm:h-[100%] sm:w-[100%] "
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
