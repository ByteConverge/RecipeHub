/* eslint-disable react/prop-types */


import blackStar from "../Recidish_Images/blackStar.svg";

export default function HomeCards({title , recipeImg , steps}) {
  return (
    <div
      id="card"
      className="border-[1px] solid border-black bg-[#F7EEEE] rounded-[1rem] pb-2 h-[40vh] sm:min-h-[65vh]"
    >
      <figure className="h-[75%] sm:h-[75%]">
        <img
          src={recipeImg}
          alt=""
          className="rounded-tr-[1rem] rounded-tl-[1rem] w-[100%] h-[100%]"
        />
      </figure>
      <div id="lowerSection" className="p-2  ">
        <div id="title-text" className="flex justify-start m-w-1/3 gap-3">
          <h1 className="font-bold font-poppins sm:text-[24px]">{title}</h1>
          <figure className="flex items-center gap-1">
            <img src={blackStar} alt="" className="h-4 w-4" />
            <p>{4.8}</p>
          </figure>
        </div>
        <p className="text-[10px] w-[60%] font-inter font-light sm:text-[14px] ">
         {steps}
        </p>
      </div>
    </div>
  );
}
