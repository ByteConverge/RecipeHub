import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../Recidish_Images/RecidishLogo.png"
import logo2 from "../Recidish_Images/recipeHub.png"
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
       bg-[#ffffff] sticky top-0 sm:bg-transparent justify-between items-center  h-[10dvh] font-inter sm:px-[10.5%] sm:absolute sm:w-[100%] sm:pt-6 sm:min-h-[11dvh] sm:py-2 shadow-sm shadow-black sm:shadow-none`}
    >
      <div className="flex items-center ">
        <figure className="h-[3rem] w-[3.4rem] sm:h-[5rem] sm:w-[7rem] relative right-[20%]  sm:hidden ">
          <img src={logo} alt="" className="h-[100%] w-[100%] " />
        </figure>
        <figure className="h-[3rem] w-[3.4rem] sm:h-[4.1rem] sm:w-[6rem] sm:block hidden">
          <img src={logo2} alt="" className="h-[100%] w-[100%] " />
        </figure>
      </div>
      {/* Links */}
      <ul className="hidden sm:flex sm:px-3 sm:self-center sm:justify-start sm:min-w-[50%] sm:gap-5 font-poppins ">
        <li className="sm:text-[20px] font-semibold">
          <NavLink className="text-[#fff]" to="/">
            Home
          </NavLink>
        </li>

        <li className="sm:text-[20px] sm:font-semibold ">
          <NavLink to="/addRecipe" className="text-[#fff]   ">
            About
          </NavLink>
        </li>
      </ul>

      <button
        onClick={toggleMenu}
        className={`sm:hidden ml-auto text-white focus:outline-none`}
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
            ? "flex flex-col text-center gap-5 pt-4 px-2 fixed bg-[#f6dec5]  top-[10dvh] left-0 h-[90dvh] w-screen sm:hidden  h-90vh"
            : "hidden"
        } sm:flex sm:flex-row sm:w-30 sm:gap-[30px] `}
      >
        <li className="nav-item sm:hidden">
          <NavLink
            exact
            to="/"
            ClassName="text-white font-bold"
            onClick={toggleMenu}
          >
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
        <li className="nav-item h-12 w-[100%] sm:w-28 font-inter sm:grid sm:place-items-center sm:bg-[#996D3E] sm:rounded-[5px]  sm:text-[#EAE9E9] sm:text-[20px] sm:font-semibold  ">
          <Link
            to="/signUp"
            ClassName="text-white font-bold sm:h-[100%] sm:w-[100%] text-center w-[100%]"
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
