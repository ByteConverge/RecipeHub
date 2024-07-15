/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import signInImg from "../Recidish_Images/sign-in-bgImage.svg";
import SignInForm from "../Components/SignInForm";


function SignInPage() {
 



 
  return (
    // Background Overall
    <div
      id="backgroundOverall"
      className={` w-[100%] min-h-[100dvh] sm:bg-cover sm:bg-no-repeat sm:grid sm:place-items-center `}
      style={{ backgroundImage: `url(${signInImg})` }}
    >
      {/* form wrapper black--cover*/}
      <div
        id="form wrapper"
        className="w-[100%] min-h-[100vh] bg-black bg-opacity-80 flex flex-col justify-center items-center  sm:w-[50%] sm:min-h-[95vh]  sm:rounded-[40px] sm:px-[59px] sm:py-[15px] "
      >
       <SignInForm /> 
       
      </div>
    </div>
  );
}

export default SignInPage;
