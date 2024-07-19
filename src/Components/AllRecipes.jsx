import { Link } from "react-router-dom";
import Body from "../Components/Body";
import HomeCards from "../Components/HomeCards";
import riceGeneral from "../Recidish_Images/CoconutRice.jpg";
import soupGeneral from "../Recidish_Images/BitterLeafSoup.jpg";
import stew from "../Recidish_Images/stew.jpg";
import { useEffect, useState } from "react";

export default function AllRecipes() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  let jwt = localStorage.getItem("token");

  useEffect(() => {
    async function fetchPosts() {
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
      setFilteredPosts(data.posts);
    }

    fetchPosts();
  }, [jwt]);

  const handleSearch = () => {
    if (searchTerm) {
      const filtered = posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts);
    }
  };

  return (
    <Body>
      <div className="px-[6%] min-h-[1vh] my-3 flex  justify-start gap-2 sm:w-[95%] sm:mx-auto sm:my-7 sm:gap-[7px] sm:flex ">
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="  sm:h-[8vh] sm:w-[30rem] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#966d59] sm:text-[24px] sm:font-poppins"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-[#966d59] text-white rounded-md shadow-sm hover:bg-[#966d59] focus:outline-none   focus:ring-2 focus:ring-[#5a3d2f] sm:w-[10rem] sm:text-[1rem] sm:grid place-items-center font-poppins font-extralight sm:h-[8vh]"
        >
          Search
        </button>
      </div>

      <div
        id="cards"
        className={`px-[4%] min-h-[10vh] my-2  mb-[1rem] flex flex-col gap-2  sm:mx-auto sm:w-[95%] sm:grid ${
          filteredPosts.length === 0 ? "sm:grid-cols-1" : "sm:grid-cols-3"
        } sm:gap-x-16 sm:gap-y-8 `}
      >
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => {
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
                  title={post.title}
                  recipeImg={img}
                  steps={slicedSteps}
                />
              </Link>
            );
          })
        ) : (
          <p className="text-center text-lg mt-4">No search results found</p>
        )}
      </div>
    </Body>
  );
}
