import { Link } from "react-router-dom";
import Body from "../Components/Body";
import HomeCards from "../Components/HomeCards";
import riceGeneral from "../Recidish_Images/CoconutRice.jpg";
import soupGeneral from "../Recidish_Images/BitterLeafSoup.jpg";
import stew from "../Recidish_Images/stew.jpg";

import { useEffect, useState } from "react";

export default function AllRecipes() {
  const [Posts, setPosts] = useState([]);

  let jwt = localStorage.getItem("token");

  useEffect(() => {
    async function fetchBored() {
      const response = await fetch(
        `https://recidishbackend.onrender.com/api/post/`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      //   console.log(response);

      const data = await response.json();

      console.log(data.posts);
      setPosts(data.posts);
    }

    fetchBored();
  }, [jwt]);

  return (
    <Body>
      <div
        id="cards"
        className={`px-[4%] min-h-[10vh] my-2  mb-[1rem] flex flex-col gap-2  sm:mx-auto sm:w-[95%] sm:grid ${
          Posts.length === 0 ? "sm:grid-cols-1" : "sm:grid-cols-3"
        } sm:gap-x-16 sm:gap-y-8 `}
      >
        {Posts &&
          [...Posts]
            .reverse().map((post) => {
              let slicedSteps = post.text.slice(0, 50);

              let img;
              if (!post.img && post.category === "rice") {
                img = riceGeneral;
              } else if (!post.img && post.category == "soup") {
                img = soupGeneral;
              } else if (!post.img && post.category == "stew") {
                img = stew;
              } else if (post.img) {
                img = post.img;
              }

              console.log(post._id);

              return (
                <Link key={post._id} to={`/loggedIn/Recipes/${post._id}`}>
                  <HomeCards
                    key={post.id}
                    title={post.title}
                    recipeImg={img}
                    steps={slicedSteps}
                  />
                </Link>
              );
            })}
        {Posts.length === 0 && (
          <p className="text-center text-[1rem] mt-[1rem] font-poppins block  w-[100%] sm:w-[100%]">
            Loading Posts...
          </p>
        )}
      </div>
    </Body>
  );
}
