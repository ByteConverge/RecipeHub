import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Body from "../Components/Body";
import ReviewForm from "../Components/ReviewForm";
export default function LoggedIn() {
  const [Post, setPost] = useState({});
  let { id } = useParams();
  let jwt = localStorage.getItem("token");

  useEffect(() => {
    async function fetchPost() {
      const response = await fetch(
        `https://recidishbackend.onrender.com/api/post/id/${id}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      const data = await response.json();
      setPost(data.post);
      console.log(data.post);
    }

    fetchPost();
  }, [jwt, id]);

  const getStepsArray = (text) => {
    if (!text) return [];
    return text
      .split(/\d+\.\s|\.\s|\n/)
      .filter(Boolean)
      .map((step) => step.trim());
  };

  const stepsArray = getStepsArray(Post.text);

  return (
    <div
      id="cards"
      className="px-4 sm:px-8 lg:px-[6%] min-h-[10vh] my-4 mt-10 flex flex-col py-4 md:gap-2   md:py-4 md:w-[95%] mx-auto lg:items-start md:"
    >
      <figure className="w-full h-[15rem] md:h-[20rem] md:w-[30rem]">
        <img
          src={Post.img}
          alt={Post.title}
          className="w-full h-full  object-cover "
        />
      </figure>

      <h1 className="text-xl text-[27px] md:text-[48px]  text-center lg:text-left font-inter font-medium md:font-medium mt-2 sm:mt-4 lg:mt-4 text-gray-800 italic">
        {Post.title}
      </h1>
      <div className="text-base sm:text-lg lg:text-xl text-justify lg:text-left sm:text-center font-poppins sm:px-0 mt-2 sm:mt-4 lg:mt-4 text-gray-700 ">
        <h1 className="font-poppinsMedium">Ingredients:</h1>
        <div className="md:leading-[30px]">{Post.ingredients}</div>
      </div>

      <div className="text-base sm:text-lg lg:text-xl text-justify lg:text-left sm:text-center font-poppins  sm:px-0 mt-2 sm:mt-4 lg:mt-4 text-gray-700 ">
        <h2 className="font-poppinsMedium">How to prepare:</h2>
        <ul className="list-disc pl-5 md:pl-[2.5rem] md:leading-[30px] ">
          {stepsArray.map((step, index) => (
            <li key={index} className="mt-2">
              {step}
            </li>
          ))}
        </ul>
        {/* review */}
      
        <ReviewForm id={id}/>

      
      </div>
    </div>
  );
}
