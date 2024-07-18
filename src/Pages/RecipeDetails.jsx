
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
        className={`px-[6%] min-h-[10vh] my-2  mb-[1rem] flex flex-col gap-2  sm:mx-auto sm:w-[95%] sm:grid ${
          Post.length === 0 ? "sm:grid-cols-1" : "sm:grid-cols-3"
        } sm:gap-x-16 sm:gap-y-8 `}
      >
        <figure >
            <img src={Post.img} alt="" />
        </figure>
        <h1  className=" text-[1.6rem] text-center">
          {Post.title}
        </h1>
         <p className="text-justify
         ">{Post.text}</p>
      </div>
    </Body>
  );
}
