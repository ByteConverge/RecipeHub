/* eslint-disable no-unused-vars */
import Modal from "./Modal";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import googleImg from "../Recidish_Images/googleLogo.svg";
import facebookImg from "../Recidish_Images/fb-sign.svg";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+|~=`{}[\]:";'<>?,./])[A-Za-z\d!@#$%^&*()_+|~=`{}[\]:";'<>?,./]{6,10}$/;
    return passwordPattern.test(password);
  };

  //  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  const validate = () => {
    let tempErrors = {};

    if (!validateEmail(formData.email)) {
      tempErrors.email = "Email is not valid.";
    }

    if (!validatePassword(formData.password)) {
      tempErrors.password =
        "Password must be 6-10 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
    }

    if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let tempErrors = { ...errors };

    if (name === "email" && !validateEmail(value)) {
      tempErrors.email = "Email is not valid.";
    } else {
      delete tempErrors.email;
    }

    if (name === "password" && !validatePassword(value)) {
      tempErrors.password =
        "Password must be 6-10 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
    } else {
      delete tempErrors.password;
    }

    setErrors(tempErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
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
    if (!validateEmail(email)) {
      return;
    }
    if (!validatePassword(password)) {
      return;
    }

    if (password !== confirmPassword) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "Passwords do not match",
      }));
      setFormData((prevData) => ({
        ...prevData,
        confirmPassword: "",
      }));
      return;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "",
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        form: "",
      }));
    }

    if (validate()) {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://recidishbackend.onrender.com/api/auth/register",
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
            navigate("/signIn");
          }, 3000);
        } else {
          setErrors({ api: "User with Email already exist" });
          setTimeout(() => {
            setErrors({ api: "" });
          }, 6000);
          console.log(response);
        }

        const data = await response.json();
        console.log(data.newUser._id);
        localStorage.setItem("userId", data.newUser._id);

        console.log(data);
      } catch (error) {
        setIsLoading(false);
        setErrors({ api: "failed to signup " });
        console.log(error);
      }
    }
  };

  return (
    <>
      <form
        id="form section"
        className="text-white flex flex-col justify-start gap-2 px-5  items-center h-[100%] w-[100%] sm:h-[90%] sm:w-[80%] sm:justify-start sm:gap-0  sm:py-0"
        onSubmit={handleSubmit}
      >
        {/* h1{sign Up} */}
        <h1 className="  w-[100%]  flex flex-col font-bold sm:mb-2 text-[25px]">
          Sign Up
        </h1>
        {/* form content */}
        <div
          id="form-content"
          className=" w-[100%] h-[90%] flex flex-col gap-1 sm:gap-0  "
        >
          {/* error message top*/}
          {errors.form && (
            <p className=" text-red-500 text-center rounded text-[9px] font-poppins">
              {errors.form}
            </p>
          )}
          {errors.api && (
            <p className=" text-red-500 text-center rounded text-[.7rem]  ">
              {errors.api}
            </p>
          )}

          {/* check */}

          {/*Name Email Password div  */}
          <div
            id="NameEmailPassword"
            className="flex flex-col gap-1 mb-4 sm:gap-0"
          >
            {/* Name */}
            <div id="name--field" className="mb-2 sm:mb-2">
              <label htmlFor="email" className="  text-[13px]">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="sm:text-[13px] px-2 block w-full border-white border-solid bg-black bg-opacity-50 focus:outline-none focus:border-white rounded-xl h-[2.5rem]  border-[0.772px] sm:h-[25px] "
              />
            </div>
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
                className="sm:text-[13px] px-2 block w-full border-white  border-solid bg-black bg-opacity-50 focus:outline-none focus:border-white rounded-xl h-[2.5rem]  border-[0.772px] sm:h-[25px]"
              />
              {errors.email && (
                <span className=" pl-4 mt-2 text-red-500 text-[11px] block bg-black ">
                  {errors.email}
                </span>
              )}
            </div>
            {/* password */}
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
                className="sm:text-[13px] px-2 block w-full border-white  border-solid bg-black bg-opacity-50 focus:outline-none focus:border-white rounded-xl h-[2.5rem]  border-[0.772px] sm:h-[25px]"
              />
              {errors.password && (
                <span className="text-red-500 text-[9px] block bg-black mt-2">
                  {errors.password}
                </span>
              )}
            </div>
            {/* password confirm */}
            <div className="mb-2 sm:mb-1">
              <label htmlFor="confirmPassword" className="text-[13px]">
                Confirm Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className="sm:text-[13px] px-2 block w-full border-white  border-solid bg-black bg-opacity-50 focus:outline-none focus:border-white rounded-xl h-[2.5rem]  border-[0.772px] sm:h-[25px] "
              />
              {errors.confirmPassword && (
                <span className=" pl-4 mt-2 text-red-500 text-[11px] block bg-black">
                  {errors.confirmPassword}
                </span>
              )}
            </div>
            {/* Show password */}
            <div className="flex w-full justify-between items-center sm:relative sm:bottom-2 sm:h-[10%] sm:mt-1 sm:pl-2 sm:pt-3">
              <span className="flex gap-1 pl-2 sm:pl-0">
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                />
                <label htmlFor="check" className="text-[13px]">
                  Show password
                </label>
              </span>
            </div>
          </div>
          {/* Sign Up button */}
          <div className="signin w-full sm:mx-auto">
            <button
              className={`signin-button w-full ${
                isLoading ? "bg-[#6a614b]" : "bg-[#996D3E]"
              } rounded-3xl h-[3rem] mb-2 text-[14px] sm:h-[27px] font-poppinsMedium `}
              id="signUp"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-t-4 border-b-4 border-white border-solid rounded-full animate-spin mx-auto"></div>
              ) : (
                "Sign Up"
              )}
            </button>
            {/*  */}
            <p className="w-full text-[13px]">
              Have an account? <Link to="/signIn">Sign In</Link>
            </p>
          </div>
          {/* Or */}
          <div className="flex gap-1 justify-center items-center my-2 sm:text-[13px]">
            <span className="w-full h-[1px] bg-white"></span> OR
            <span className="w-full h-[1px] bg-white"></span>
          </div>
          {/*social-media-signin  */}
          <div id="SocialMediaSignings" className="flex flex-col gap-3">
            {/* google signing */}
            <a
              id="google-signin"
              href="#"
              className=" flex bg-white text-black justify-center items-center gap-1 p-1 rounded-3xl"
            >
              <img src={googleImg} alt="" className="h-[1.5rem]" />
              <h1 className="text-[14px]">Continue with Google</h1>
            </a>
            {/* facebook sign in */}
            <a
              id="facebook-signin"
              href="#"
              className="flex items-center bg-white text-black justify-center gap-1 p-1 rounded-3xl "
            >
              <img
                src={facebookImg}
                alt=""
                className="h-[1.6rem] translate-y-1"
              />
              <h1 className="text-[14px]">Continue with Facebook</h1>
            </a>
          </div>
        </div>
      </form>
      {isModalOpen && (
        <Modal topMessage="Success" message="You have signed up succesfully" />
      )}
    </>
  );
}
