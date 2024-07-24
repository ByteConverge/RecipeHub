/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */



export default function ReviewForm({id}) {
  


  return (
    <form className="mt-9 mx-auto">
      <textarea
        name=""
        id=""
        placeholder="Leave us a review"
        className="h-[150px] w-[60%] p-3 font-poppins bg-[#F7EEEE] rounded-xl md:w-[500px] md:h-[394px] md:rounded-[14px] "
      ></textarea>
      <p className="font-poppins text-[#32201C] md:text-[20px] md:font-normal">
        Do you recommend this recipe?
      </p>
      <div className="flex gap-10 w-[50%]">
        <div id="no" className="flex gap-1">
          <p> No</p>
          <input type="radio" />
        </div>
        <div id="yes" className="flex gap-1">
          <p>Yes</p>
          <input type="radio" />
        </div>
      </div>
      <button
        type="submit"
        className="bg-[#996D3E] h-[2rem] w-[50%] text-white rounded-[1rem] md:h-[41px] md:text-[15px]"
      >
        Submit
      </button>
    </form>
  );
}
