import { Link } from "react-router-dom";
import Body from "../Components/Body"
import HomeCards from "../Components/HomeCards";

import { useEffect, useState } from "react";


export default function Recipes() {
  const [Posts, setPosts] = useState([]);
 
  let jwt = localStorage.getItem("token")

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
          [...Posts].reverse().map((post) => {
            return (
              <Link key={post.id} to="/signUp">
                <HomeCards
                  key={post.id}
                  title={post.title}
                  Img={post.img}
                  steps={post.text}
                />
              </Link>
            );
          })}
        {Posts.length === 0 && (
          <p className="text-center text-[2rem] font-poppins block  w-[100%] sm:w-[100%]">
            Loading Posts...
          </p>
        )}
      </div>
    </Body>
  );
}

