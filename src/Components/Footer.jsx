import { Link } from "react-router-dom";
import Xlogo from "../Recidish_Images/Xlogo.svg";
import facebookLogo from "../Recidish_Images/facebookLogo.svg";
import googleLogo from "../Recidish_Images/googleLogo.svg";
import logo from "../Recidish_Images/RecidishLogo.png";

let currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-black p-6 md:p-12 flex flex-col items-center md:items-start border-t border-gray-800 min-h-[50vh] md:min-h-[40vh] text-white">
      <div className="flex flex-col md:flex-row w-full justify-between items-center gap-6 md:gap-12 mb-6">
        <figure className="h-[3rem] w-[3rem] sm:h-[4rem] sm:w-[4rem]">
          <img src={logo} alt="Recidish Logo" className="h-full w-full" />
        </figure>
        <div className="flex gap-6 md:gap-12">
          <Link className="hover:text-gray-400 transition duration-200 text-lg">
            Our Communities
          </Link>
          <Link className="hover:text-gray-400 transition duration-200 text-lg">
            Help
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between w-full gap-6 md:gap-12">
        <div className="flex flex-col md:w-[60%] text-center md:text-left gap-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 text-base md:pr-[15%]">
            <Link className="hover:text-gray-400 transition duration-200">
              Legal & Privacy
            </Link>
            <Link className="hover:text-gray-400 transition duration-200">
              User Agreement
            </Link>
            <Link className="hover:text-gray-400 transition duration-200">
              Privacy & Cookie Policy
            </Link>
            <Link className="hover:text-gray-400 transition duration-200">
              Online Service Updates
            </Link>
            <Link className="hover:text-gray-400 transition duration-200">
              Security
            </Link>
            <Link className="hover:text-gray-400 transition duration-200">
              Cookie Preferences
            </Link>
          </div>
          <p className="text-sm md:text-base">&copy; {currentYear} Recidish</p>
        </div>
        <div className="flex flex-col items-center md:items-start gap-6">
          <h3 className="text-lg md:text-xl">Contact Us</h3>
          <div className="flex gap-4 md:gap-6">
            <Link className="w-10 h-10 md:w-12 md:h-12 hover:opacity-75 transition duration-200">
              <img src={Xlogo} alt="X" className="h-8 w-8 md:h-10 md:w-10" />
            </Link>
            <Link className="w-10 h-10 md:w-12 md:h-12 hover:opacity-75 transition duration-200">
              <img
                src={facebookLogo}
                alt="Facebook"
                className="h-8 w-8 md:h-10 md:w-10"
              />
            </Link>
            <Link className="w-10 h-10 md:w-12 md:h-12 hover:opacity-75 transition duration-200">
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
