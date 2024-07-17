import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import profile from "../Recidish_Images/ProfileIcon.svg"


const LoggedInNavbar = () => {
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

    const activeStyles = {
      fontWeight: "bold",
      TextDecoration: "underline",
    };

  return (
    <nav
      className={`flex ${isMenuOpen && "sticky top-0 "} px-[4%]
       bg-[#ffffff] sticky top-0 sm:bg-transparent justify-between items-center  h-[10dvh] font-inter  sm:px-[10.5%] sm:absolute sm:w-[100%] sm:pt-6 sm:min-h-[11dvh] sm:py-2 z-30`}
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
      {/* linksBigger screens */}

      <ul className="hidden sm:flex sm:px-3 sm:self-center sm:justify-start sm:min-w-[50%] sm:gap-5 font-poppins ">
        <li className="sm:text-[20px]">
          <NavLink
            className="text-[#fff]"
            to="/loggedIn"
            Style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Home
          </NavLink>
        </li>
        <li className="sm:text-[20px] sm:font-normal">
          <NavLink
            to="/loggedIn/Recipes"
            className="text-[#fff]"
            Style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Recipes
          </NavLink>
        </li>
        <li className="sm:text-[20px] sm:font-normal">
          <NavLink className="text-[#fff]">Premium</NavLink>
        </li>
        <li className="sm:text-[20px] ">
          <NavLink to="/addRecipe" className="text-[#fff] sm:font-normal ">
            Add Recipes
          </NavLink>
        </li>
      </ul>
      {/*  */}
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
            ? "flex flex-col items-center text-[20px] gap-5 pt-4 px-2 fixed bg-red-300  top-[10dvh] left-0 h-[90dvh] w-screen sm:hidden  h-90vh"
            : "hidden"
        } sm:flex sm:flex-row sm:w-30 sm:gap-[30px]  `}
      >
        <li className="nav-item sm:hidden">
          <Link
            to="/loggedIn"
            ClassName="text-white font-bold"
            onClick={toggleMenu}
          >
            Home
          </Link>
        </li>
        <li className="nav-item sm:hidden">
          <NavLink
            to="/loggedIn/Recipes"
            ClassName="text-white font-bold"
            onClick={toggleMenu}
          >
            Recipes
          </NavLink>
        </li>
        <li className="nav-item sm:hidden">
          <NavLink to="" ClassName="text-white font-bold" onClick={toggleMenu}>
            Premium
          </NavLink>
        </li>
        <li className="nav-item sm:hidden">
          <NavLink
            to="/addRecipe"
            ClassName="text-white font-bold"
            onClick={toggleMenu}
          >
            Add Recipes
          </NavLink>
        </li>

        <li
          id="navItem"
          className="nav-item  flex gap-2 sm:w-[8rem] sm:h-[3rem]sm:items-center "
        >
          <Link
            to=""
            ClassName="font-bold  flex h-[100%] w-[100%] sm:h-[100%] sm:w-[100%]  "
          >
            <img src={profile} alt="" className="sm:w-[100%] sm:h-[100%]" />
          </Link>
          <p className="inline font-inter sm:text-[20px] sm:text-white ">
            Profile
          </p>
        </li>
      </ul>
    </nav>
  );
};

export default LoggedInNavbar;
