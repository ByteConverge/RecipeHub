

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import AddRecipeForm from "../Components/AddRecipeForm";
import AddRecipeImg from "../Recidish_Images/Jellof Rice.jpg"



export default function AddRecipes() {
 
 
  return (
    
      
      <div
        id="backgroundOverall"
        className=" w-[100%] min-h-[100vh] sm:bg-cover sm:bg-no-repeat sm:grid sm:place-items-center bg-[#f7EEEE] "
      >
        {/* form wrapper black--cover*/}
        <div
          id="form wrapper"
          className="w-[95%] mx-auto min-h-[100vh] bg-opacity-30  md:bg-transparent flex flex-col justify-center items-center  md:w-[50%] md:min-h-[95vh] sm:rounded-[40px] md:px-[59px]  
        "
        >
          <AddRecipeForm />
        </div>
      </div>

    
  );
}


