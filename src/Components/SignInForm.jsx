/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaFacebook,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import ForgotPasswordModal from "./ForgotPasswordModal";
import Modal from "./Modal";
import googleImg from "../Recidish_Images/googleLogo.svg";
// import facebookImg from "../Recidish_Images/fb-sign.svg";

export default function SignInForm() {
  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isForgotPwdModal , setisForgotPwdModal] = useState(false)

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  // const validatePassword = (password) => {
  //   const passwordPattern =
  //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
  //   return passwordPattern.test(password);
  // };

  const validate = () => {
    let tempErrors = {};
    if (!validateEmail(formData.email)) {
      tempErrors.email = "Email is not valid.";
    }
    // if (!validatePassword(formData.password)) {
    //   tempErrors.password = "Password is not valid.";
    // }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let tempErrors = { ...errors };
    if (name === "email" && !validateEmail(value)) {
      tempErrors.email = "Email is not valid.";
    } else {
      delete tempErrors.email;
    }
    setErrors(tempErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (!email || !password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        form: "All fields are required",
      }));
      setTimeout(() => {
        setErrors((prevErrors) => ({
          ...prevErrors,
          form: "",
        }));
      }, 2000);
      return;
    }

    if (validate()) {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://recidishbackend.onrender.com/api/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
        setIsLoading(false);
        if (response.ok) {
          setIsSubmitted(true);
          setIsModalOpen(true);
          window.localStorage.setItem("isLoggedIn", "true");
          setTimeout(() => {
            navigate("/loggedIn");
          }, 3000);
        } else {
          setErrors({ api: "Incorrect Email or password" });
          setTimeout(() => {
            setErrors({ api: "" });
          }, 6000);
          console.log(response);
        }
        const data = await response.json();
        localStorage.setItem("token", data.accessToken);
      } catch (error) {
        setIsLoading(false);
        setErrors({ api: "Poor Network. Try again! " });
        setTimeout(() => {
          setErrors({ api: " " });
        }, 3000);
        console.log(error);
      }
    }
  };

  return (
    <>
      <form
        id="form section"
        className="text-white flex flex-col justify-start gap-5 px-5 py-7 items-center h-[100%] w-[98%] -mt-14 sm:h-[90%] sm:w-[80%] sm:justify-start sm:gap-0 sm:font-poppins sm:-mt-0"
        onSubmit={handleSubmit}
      >
        <h1 className="text-[25px] w-[100%] flex flex-col justify-en sm:mb-5 font-poppins font-bold sm:text-[25px]">
          Sign In
        </h1>
        {/* social-media-signin */}
        <div id="SocialMediaSignings" className="flex flex-col gap-3 w-full">
          {/* google signing */}
          <a
            id="google-signin"
            href="#"
            className="flex items-center bg-white text-black justify-center gap-1 p-1 rounded-3xl"
          >
            <img src={googleImg} alt="" className="h-[1.5rem]" />
            <h1 className="sm:text-[14px]">Continue with Google</h1>
          </a>
          {/* facebook sign in */}
          <a
            id="facebook-signin"
            href="#"
            className="flex items-center bg-white text-black justify-center gap-1 p-1 rounded-3xl font-poppins"
          >
            <FaFacebook className="text-blue-600 text-xl mr-2" />
            <h1 className="sm:text-[14px]">Continue with Facebook</h1>
          </a>
        </div>
        {/* Or */}
        <div className="flex gap-1 justify-center items-center my-2 w-[100%] font-poppins">
          <span className="w-[50%] h-[1px] bg-white"></span> OR
          <span className="w-[50%] h-[1px] bg-white"></span>
        </div>
        {/* form content */}
        <div
          id="form-content"
          className="w-[100%] h-[90%] flex flex-col gap-1 sm:gap-0"
        >
          {/* error messages top */}
          {errors.form && (
            <p className="text-red-500 text-center text-[10px] rounded font-poppins">
              {errors.form}
            </p>
          )}
          {errors.api && (
            <p className="text-red-500 text-center rounded font-poppins text-[10px]">
              {errors.api}
            </p>
          )}
          {/* Email and Password */}
          <div
            id="NameEmailPassword"
            className="flex flex-col font-poppins gap-1 mb-4 sm:gap-0"
          >
            {/* Email */}
            <div className="mb-2 sm:mb-1">
              <label htmlFor="email" className="text-[13px]">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="sm:text-[13px] px-2 block w-full border-white font-poppins border-solid bg-black bg-opacity-50 focus:outline-none focus:border-white rounded-xl h-[2.5rem] sm:h-[1.7rem] sm:py-1 border-[0.772px]"
              />
              {errors.email && (
                <p className="text-red-500 text-[10px] mt-1">{errors.email}</p>
              )}
            </div>
            {/* Password */}
            <div className="mb-2 sm:mb-1">
              <label htmlFor="password" className="text-[13px]">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="sm:text-[13px] px-2 block w-full border-white font-poppins border-[0.772px] border-solid bg-black bg-opacity-50 focus:outline-none focus:border-white rounded-xl h-[2.5rem] sm:h-[1.7rem] sm:py-1"
              />
              {errors.password && (
                <p className="text-red-500 text-[10px] mt-1">
                  {errors.password}
                </p>
              )}
            </div>
            {/* Show password */}
            <div className="flex w-full justify-between font-poppins sm:relative sm:bottom-2 sm:min-h-[10%] sm:mt-4 sm:px-1">
              <span className="pl-1 sm:pl-0 flex gap-1">
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                />
                <label htmlFor="check" className="text-[13px]">
                  Show password
                </label>
              </span>
              <span className="font-poppins text-[13px] cursor-pointer" onClick={()=>{setisForgotPwdModal(true)}}>Forgot password?</span>
            </div>
          </div>
          {/* Sign Up button */}
          <div className="signin w-full sm:mx-auto font-poppins">
            <button
              className={`signin-button w-full ${
                isLoading ? "bg-[#6a614b]" : "bg-[#996D3E]"
              } rounded-3xl h-[3rem] mb-2 sm:h-[27px] font-poppinsMedium sm:text-[12px]`}
              id="signUp"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-t-4 border-b-4 border-white border-solid rounded-full animate-spin mx-auto "></div>
              ) : (
                "Sign In"
              )}
            </button>
            <p className="w-full font-poppins pl-[1.5%] text-[13px]">
              Have an account? <Link to="/signUp">Sign Up</Link>
            </p>
          </div>
        </div>
      </form>
     { isModalOpen &&

       <Modal
         topMessage="Success"
         message="Login successful."
       />

     }
     {isForgotPwdModal &&
      <ForgotPasswordModal closeModal={setisForgotPwdModal} />
     }
      
    </>
  );
}
