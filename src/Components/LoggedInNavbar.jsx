import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import profile from "../Recidish_Images/ProfileIcon.svg";
import logo from "../Recidish_Images/RecidishLogo.png";
// import logo2 from "../Recidish_Images/logoWhite.png";

const LoggedInNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
       bg-[#ffffff] sticky top-0 sm:bg-transparent justify-between items-center  h-[10dvh] font-inter  sm:px-[10.5%] sm:absolute sm:w-[100%] sm:pt-6 sm:min-h-[11dvh] sm:py-2 z-30 shadow-sm shadow-black sm:shadow-none`}
    >
      <div className="flex items-center">
      
        
        <figure className="h-[2rem] w-[2rem] sm:h-[3rem] sm:w-[3.7rem] sm:block ">
          <img src={logo} alt="" className="h-[100%] w-[100%]" />
        </figure>
      </div>

      <ul className="hidden sm:flex sm:px-3 sm:self-center sm:justify-start sm:min-w-[50%] sm:gap-5 font-poppins">
        <li className="sm:text-[20px]">
          <NavLink
          end
            className={({ isActive }) =>
              isActive ? "text-[#fff]  underline" : "text-[#fff]"
            }
            to="/loggedIn"
          >
            Home
          </NavLink>
        </li>
        <li className="sm:text-[20px] sm:font-normal">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#fff] underline" : "text-[#fff]"
            }
            to="/loggedIn/Recipes"
          >
            Recipes
          </NavLink>
        </li>
        <li className="sm:text-[20px] sm:font-normal">
          <NavLink
          to="/payment"
            className={ "text-[#fff]"
            }
          >
            Premium
          </NavLink>
        </li>
        <li className="sm:text-[20px]">
          <NavLink
            className={({ isActive }) =>
              isActive ? " text-white underline" : "text-[#fff]"
            }
            to="/addRecipe"
          >
            Add Recipes
          </NavLink>
        </li>
        <li className="sm:text-[20px]"></li>
      </ul>

      <button
        onClick={toggleMenu}
        className="sm:hidden ml-auto text-white focus:outline-none"
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
            ? "flex flex-col items-center text-[20px] gap-5 pt-4 px-2 fixed bg-[#f6dec5] top-[10dvh] left-0 h-[90dvh] w-screen sm:hidden"
            : "hidden"
        } sm:flex sm:flex-row sm:w-30 sm:gap-[30px]`}
      >
        <li className="nav-item sm:hidden">
          <NavLink
            to="/loggedIn"
           
            onClick={toggleMenu}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item sm:hidden">
          <NavLink
            to="/loggedIn/Recipes"
           
            onClick={toggleMenu}
          >
            Recipes
          </NavLink>
        </li>
        <li className="nav-item sm:hidden">
          <NavLink
           to='/payment'
            // onClick={toggleMenu}
          >
            Premium
          </NavLink>
        </li>
        <li className="nav-item sm:hidden">
          <NavLink
            to="/addRecipe"
           
            onClick={toggleMenu}
          >
            Add Recipes
          </NavLink>
        </li>

        <li
          id="navItem"
          className="nav-item flex gap-2 sm:w-[8rem] sm:h-[3rem] sm:items-center"
        >
          <Link to='/dashboard' className="font-bold flex h-[100%] w-[100%] sm:h-[2.5rem] sm:w-[2.5rem]">
            <img
              src={profile}
              alt=""
              className="sm:w-[100%] sm:h-[100%] sm:bg-white sm:rounded-[50%]"
            />
          </Link>
          <p className="inline font-inter sm:text-[20px] sm:text-white">
            Profile
          </p>
        </li>
      </ul>
    </nav>
  );
};

export default LoggedInNavbar;
