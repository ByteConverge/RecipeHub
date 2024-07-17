

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import AddRecipeForm from "../Components/AddRecipeForm";
import AddRecipeImg from "../Recidish_Images/Jellof Rice.jpg"


export default function AddRecipes() {
 
 
  return (
    // Background Overall
    <div
      id="backgroundOverall"
      className={` w-[100%] min-h-[100vh] sm:bg-cover sm:bg-no-repeat sm:grid sm:place-items-center `}
      style={{ backgroundImage: `url(${AddRecipeImg})` }}
    >
      {/* form wrapper black--cover*/}
      <div
        id="form wrapper"
        className="w-[100%] min-h-[100vh] bg-black bg-opacity-30  backdrop-blur sm:bg-transparent flex flex-col justify-center items-center  sm:w-[50%] sm:min-h-[95vh]  sm:rounded-[40px] sm:px-[59px] sm:py-[15px] "
      >
       <AddRecipeForm />
      </div>
    </div>
  );
}


