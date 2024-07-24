import { Link } from "react-router-dom";
import Body from "../Components/Body";
import HomeCards from "../Components/HomeCards";
import riceGeneral from "../Recidish_Images/CoconutRice.jpg";
import soupGeneral from "../Recidish_Images/BitterLeafSoup.jpg";
import stew from "../Recidish_Images/stew.jpg";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function RiceRecipes() {
  const [Posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  let jwt = localStorage.getItem("token");

  useEffect(() => {
    async function fetchBored() {
      setLoading(true); // Start loading
      try {
        const response = await fetch(
          `https://recidishbackend.onrender.com/api/post/`,
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );

        const data = await response.json();
        setPosts(data.posts);
        setLoading(false); // End loading
      } catch (error) {
        setLoading(false);
      }
    }

    fetchBored();
  }, [jwt]);

  return (
    <Body>
      <div
        id="cards"
        className={`px-[4%] min-h-[10vh] my-2 mb-[1rem] flex flex-col gap-2 sm:mx-auto sm:w-[95%] sm:grid ${
          Posts.length === 0 ? "sm:grid-cols-1" : "sm:grid-cols-3"
        } sm:gap-x-16 sm:gap-y-8`}
      >
        {loading ? (
          <div className="flex justify-center items-center min-h-[20vh]">
            <ClipLoader size={50} color={"black"} loading={loading} />
          </div>
        ) : Posts.length === 0 ? (
          <p className="text-center text-black text-[1rem]  mt-[1rem] font-poppins font-light block w-[100%]  md:text-[2rem] md:w-[100%]">
            No Recipe found
          </p>
        ) : (
          <>
            {Posts.filter((post) => post.category === "stew").length > 0 ? (
              Posts.filter((post) => post.category === "stew")
                .reverse()
                .map((post) => {
                  let slicedSteps = post.text.slice(0, 50);

                  let img;
                  if (!post.img && post.category === "rice") {
                    img = riceGeneral;
                  } else if (!post.img && post.category === "soup") {
                    img = soupGeneral;
                  } else if (!post.img && post.category === "stew") {
                    img = stew;
                  } else if (post.img) {
                    img = post.img;
                  }

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
                })
            ) : (
              <p className="text-center text-black md:text-[2rem] mt-[1rem] font-poppins  sm:w-[100%]">
                No Recipe found
              </p>
            )}
          </>
        )}
      </div>
    </Body>
  );
}
