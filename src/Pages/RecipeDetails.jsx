
import Body from "../Components/Body";
// import HomeCards from "../Components/HomeCards";
// import riceGeneral from "../Recidish_Images/CoconutRice.jpg";
// import soupGeneral from "../Recidish_Images/BitterLeafSoup.jpg";
// import stew from "../Recidish_Images/stew.jpg";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function LoggedIn() {

  const [Post, setPost] = useState([]);
  let param  = useParams()

  console.log(param.id);

  let jwt = localStorage.getItem("token");

  useEffect(() => {
    async function fetchBored() {
      const response = await fetch(
        `https://recidishbackend.onrender.com/api/post/id/${param.id}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      //   console.log(response);

      const data = await response.json();

      console.log(data);
      console.log(data.post);
      setPost(data.post);
    }

    fetchBored();
  }, [jwt , param.id]);

  return (
    <Body>
      <div
        id="cards"
        className={`px-[6%] min-h-[10vh] my-2  mt-[2.5rem] flex flex-col gap-2  sm:mx-auto sm:w-[95%] sm:grid 
         sm:grid-cols-1 bg-[#DEAA72] sm:rounded-[3rem] py-[1rem] sm:py-[2rem]
       `}
      >
        <p className="text-[30px]  text-center font-poppins  sm:text-[3rem]  ">
          Recipe
        </p>
        <figure className="w-[100%] h-[60vh] sm:h-[70vh] sm:w-[60%] sm:mx-auto ">
          <img
            src={Post.img}
            alt=""
            className="w-[100%] h-[100%] rounded-[16px] "
          />
        </figure>
        <h1 className=" text-[1.5rem] text-center font-inter font-bold  sm:text-[40px]">
          {Post.title}
        </h1>
        <p
          className="text-center font-poppins text-[1rem]  sm:text-[1.5rem] sm:text-center
         "
        >
          {Post.text}
        </p>
      </div>
    </Body>
  );
}
