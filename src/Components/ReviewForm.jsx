/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function ReviewForm({ id }) {
  const [reply, setReply] = useState("");
   let jwt = localStorage.getItem("token");
  useEffect(() => {
    console.log(id);
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    
   let   replies = [reply] // Wrapping the single reply in an array
  

    try {
      const response = await fetch(
        `https://recidishbackend.onrender.com/post/reply/${id}`,
        {
         
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
          body: JSON.stringify(replies),
        }
      );
      const data = await response.json();
      console.log("Success:", data);
      // Clear the input field after successful submission
      setReply("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="mt-9 mx-auto" onSubmit={handleSubmit}>
      <textarea
        name="reply"
        id=""
        placeholder="Leave us a review"
        className="h-[150px] w-[60%] p-3 font-poppins bg-[#F7EEEE] rounded-xl md:w-[500px] md:h-[394px] md:rounded-[14px]"
        value={reply}
        onChange={(e) => setReply(e.target.value)}
      ></textarea>
      <p className="font-poppins text-[#32201C] md:text-[20px] md:font-normal">
        Do you recommend this recipe?
      </p>
      <div className="flex gap-10 w-[50%]">
        <div id="no" className="flex gap-1">
          <p>No</p>
          <input type="radio" name="recommendation" value="no" />
        </div>
        <div id="yes" className="flex gap-1">
          <p>Yes</p>
          <input type="radio" name="recommendation" value="yes" />
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
