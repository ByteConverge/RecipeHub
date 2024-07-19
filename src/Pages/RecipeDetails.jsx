import  { useEffect, useState } from "react";
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
    }

    fetchPost();
  }, [jwt, id]);

  return (
    <Body>
      <div
        id="cards"
        className="px-4 sm:px-8 lg:px-24 min-h-[10vh] my-4 mt-10 flex flex-col gap-4 sm:gap-6 bg-[#DEAA72] rounded-2xl py-6 sm:py-8 lg:py-12 sm:w-[90%] lg:w-[95%] mx-auto"
      >
        <p className="text-3xl sm:text-4xl lg:text-5xl text-center font-poppins font-semibold">
          Recipe
        </p>
        <figure className="w-full h-60 sm:h-80 lg:h-96 flex justify-center sm:w-[50%]  sm:mx-auto">
          <img
            src={Post.img}
            alt={Post.title}
            className="w-full h-full rounded-2xl object-cover"
          />
        </figure>
        <h1 className="text-xl sm:text-2xl lg:text-4xl text-center font-inter font-bold mt-4 sm:mt-6">
          {Post.title}
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-justify sm:text-center font-poppins px-4 sm:px-0 mt-4 sm:mt-6">
          {Post.text}
        </p>
      </div>
    </Body>
  );
}
