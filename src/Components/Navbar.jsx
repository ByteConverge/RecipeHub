import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../Recidish_Images/RecidishLogo.png"
// import logo2 from "../Recidish_Images/recipeHub.png"
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
      className={`flex ${isMenuOpen && "sticky top-0 "} px-[4%]
       bg-[#ffffff] sticky top-0 sm:bg-transparent justify-between items-center  h-[10dvh] font-inter md:px-[10.5%] md:absolute md:w-[100%] md:pt-6 md:min-h-[11dvh] md:py-2 shadow-sm shadow-black md:shadow-none`}
    >
      <div className="flex items-center ">
        <figure className="h-[3rem] w-[3.4rem] md:h-[5rem] md:w-[7rem] relative right-[20%]  md:hidden ">
          <img src={logo} alt="" className="h-[100%] w-[100%] " />
        </figure>
        <figure className="h-[3rem] w-[3.4rem] md:h-[4.1rem] md:w-[6rem] sm:block hidden">
          <img src={logo} alt="" className="h-[100%] w-[100%] " />
        </figure>
      </div>
      {/* Links */}
      <ul className="hidden md:flex md:px-3 md:self-center md:justify-start md:min-w-[50%] md:gap-5 font-poppins ">
        <li className="md:text-[20px] font-semibold">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-white underline" : "text-white "
            }
            to="/"
          >
            Home
          </NavLink>
        </li>

        <li className="md:text-[20px] md:font-semibold ">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-white underline" : "text-white "
            }
          >
            About
          </NavLink>
        </li>
      </ul>

      <button
        onClick={toggleMenu}
        className={`md:hidden ml-auto text-white focus:outline-none`}
      >
        {isMenuOpen ? (
          <AiOutlineClose className="text-2xl text-[#b33f05]" />
        ) : (
          <AiOutlineMenu className="text-2xl text-[#b33f05]" />
        )}
      </button>

      <ul
        className={`${
          isMenuOpen
            ? "flex flex-col text-center gap-5 pt-4 px-2 fixed bg-[#f6dec5]  top-[10dvh] left-0 h-[90dvh] w-screen md:hidden  h-90vh"
            : "hidden"
        } md:flex md:flex-row sm:w-30 md:gap-[30px] `}
      >
        <li className="nav-item md:hidden">
          <NavLink end to="/" onClick={toggleMenu}>
            Home
          </NavLink>
        </li>
        <li className="nav-item md:hidden">
          <NavLink
            to="/about"
           
            onClick={toggleMenu}
          >
            About
          </NavLink>
        </li>
        <li className="nav-item font-inter  md:py-[12px] md:px-[32px] md:h-12 md:w-28   md:grid md:place-items-center md:bg-[#DEAA72] md:rounded-[5px]  md:text-[#000] md:text-[20px] md:font-semibold  ">
          <Link
            to="/signIn"
            ClassName="text-white font-bold md:h-[100%] sm:w-[100%]"
          >
            Login
          </Link>
        </li>
        <li className="nav-item h-12 w-[100%] md:w-28 font-inter md:grid md:place-items-center md:bg-[#996D3E] md:rounded-[5px]  md:text-[#EAE9E9] md:text-[20px] md:font-semibold  ">
          <Link
            to="/signUp"
            ClassName="text-white font-bold md:h-[100%] sm:w-[100%] text-center w-[100%]"
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
