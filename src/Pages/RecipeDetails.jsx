import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Body from "../Components/Body";

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
    <Body>
      <div
        id="cards"
        className="px-4 sm:px-8 lg:px-24 min-h-[10vh] my-4 mt-10 flex flex-col gap-1 sm:gap-2 lg:gap-4 rounded-2xl py-4 sm:py-6 lg:py-8 sm:w-[90%] lg:w-[80%] mx-auto lg:items-start"
      >
        <p className="text-3xl sm:text-4xl lg:text-5xl text-center lg:text-left font-poppins font-semibold text-gray-900">
          Recipe
        </p>
        <figure className="w-full h-60 sm:h-80 lg:h-96 flex justify-center lg:justify-start sm:w-[50%] lg:w-full sm:mx-auto">
          <img
            src={Post.img}
            alt={Post.title}
            className="w-full h-full rounded-2xl object-cover shadow-lg"
          />
        </figure>
        <h1 className="text-xl sm:text-2xl lg:text-4xl text-center lg:text-left font-inter font-bold mt-2 sm:mt-4 lg:mt-4 text-gray-800">
          {Post.title}
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-justify lg:text-left sm:text-center font-poppins px-4 sm:px-0 mt-2 sm:mt-4 lg:mt-4 text-gray-700">
          Ingredients: {Post.ingredients}
        </p>

        <div className="text-base sm:text-lg lg:text-xl text-justify lg:text-left sm:text-center font-poppins px-4 sm:px-0 mt-2 sm:mt-4 lg:mt-4 text-gray-700">
          <h2 className="font-bold">Steps:</h2>
          <ol className="list-decimal pl-5">
            {stepsArray.map((step, index) => (
              <li key={index} className="mt-2">
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Body>
  );
}
