import { Link } from "react-router-dom";
import Xlogo from "../Recidish_Images/Xlogo.svg";
import facebookLogo from "../Recidish_Images/facebookLogo.svg";
import googleLogo from "../Recidish_Images/googleLogo.svg";
import logoWhite from "../Recidish_Images/logoWhite.png";

let currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-black p-6 md:p-12 flex flex-col items-center md:items-start border-t border-gray-800 min-h-[50vh] md:min-h-[40vh]">
      <div className="flex w-full flex-col md:flex-row items-center justify-between sm:justify-start md:pl-16 gap-4 md:gap-4 mb-6">
        <figure className=" md:w-28   h-[3rem] w-[3.4rem] sm:h-[4.1rem] sm:w-[6rem] grid place-items-center">
          <img
            src={logoWhite}
            alt="Recidish Logo"
            className="h-[3ren] w-[4rem] sm:w-[7rem] sm:h-[5rem]"
          />
        </figure>
        <div className="flex gap-6 md:gap-8">
          <Link  className="text-white text-base md:text-lg">
            Our Communities
          </Link>
          <Link  className="text-white text-base md:text-lg">
            Help
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between w-full items-center md:items-start gap-6 md:gap-8">
        <div className="flex flex-col md:w-[60%] text-center md:text-left gap-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 text-sm md:text-lg">
            <Link  className="text-white">
              Legal & Privacy
            </Link>
            <Link  className="text-white">
              User Agreement
            </Link>
            <Link  className="text-white">
              Privacy & Cookie Policy
            </Link>
            <Link  className="text-white">
              Online Service Updates
            </Link>
            <Link className="text-white">
              Security
            </Link>
            <Link  className="text-white">
              Cookie Preferences
            </Link>
          </div>
          <p className="text-white text-sm md:text-base">
            &copy; {currentYear} Recidish
          </p>
        </div>
        <div className="flex flex-col items-center  gap-6 md:gap-2 md:items-center">
          <h3 className="text-white text-base md:text-lg sm:text-center">Contact Us</h3>
          <div className="flex gap-4 md:gap-2">
            <Link
              
              className="grid place-items-center w-10 h-10 md:w-12 md:h-12"
            >
              <img src={Xlogo} alt="X" className="h-8 w-8 md:h-10 md:w-10" />
            </Link>
            <Link
             
              className="grid place-items-center w-10 h-10 md:w-12 md:h-12"
            >
              <img
                src={facebookLogo}
                alt="Facebook"
                className="h-8 w-8 md:h-10 md:w-10"
              />
            </Link>
            <Link
              
              className="grid place-items-center w-10 h-10 md:w-12 md:h-12"
            >
              <img
                src={googleLogo}
                alt="Google"
                className="h-8 w-8 md:h-10 md:w-10"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
