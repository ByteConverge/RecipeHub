/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Recommend from "./Recommend";

export default function ReviewForm({ id, modal }) {
  const [text, setReply] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate();

  let jwt = localStorage.getItem("token");

  console.log("Id", id);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(text);
    if (text.trim().length === 0) {
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://recidishbackend.onrender.com/api/post/reply/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
          body: JSON.stringify({ text: text }),
        }
      );

      console.log(response);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else if (response.ok) {
       
        setIsLoading(false);
        modal(true);
        setTimeout(() => {
          modal(false);
          window.location.reload(); // Refresh the page
        }, 2000);
      }

      const data = await response.json();
      console.log("Success:", data);

      // Clear the input field after successful submission
      setReply("");
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };

  return (
    <form className="mt-9 mx-auto" onSubmit={handleSubmit}>
      <textarea
        name="text"
        id=""
        placeholder="Leave us a review"
        className="h-[150px] w-[60%] p-3 font-inter bg-[#F7EEEE] rounded-xl md:w-[500px] md:h-[200px] md:rounded-[14px]"
        value={text}
        onChange={(e) => setReply(e.target.value)}
      ></textarea>
      <p className="font-inter text-[#32201C] md:text-[20px] md:font-normal">
        Do you recommend this recipe?
      </p>
      <Recommend id={id} />
      <button
        disabled={isLoading ? true : false}
        type="submit"
        className={`${
          isLoading ? "bg-[#ddb284]" : "bg-[#996D3E]"
        } h-[2rem] w-[50%] text-white rounded-[1rem] md:h-[41px] md:text-[15px]`}
      >
        {isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
