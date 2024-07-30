import { Link } from "react-router-dom";
import Body from "../Components/Body";
import HomeCards from "../Components/HomeCards";
import riceGeneral from "../Recidish_Images/CoconutRice.jpg";
import soupGeneral from "../Recidish_Images/BitterLeafSoup.jpg";
import stew from "../Recidish_Images/stew.jpg";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function LoggedIn() {
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

  useEffect(() => {
    if (searchTerm) {
      const filtered = posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts);
    }
  }, [searchTerm, posts]);

  return (
    <Body>
      <div className="px-[6%] min-h-[10vh] my-3 flex justify-start gap-2 sm:w-[95%] sm:mx-auto sm:my-7 sm:gap-[7px] sm:flex">
        <div className="relative w-full sm:w-[30rem]">
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:h-[8vh] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-[#966d59] sm:text-[24px] sm:font-poppins"
          />
          <FaSearch className="absolute top-3 right-3 text-gray-500" />
        </div>
      </div>

      <div
        id="cards"
        className={`px-[4%] min-h-[10vh] my-2 mb-[1rem] flex flex-col gap-2 sm:mx-auto sm:w-[95%] sm:grid ${
          filteredPosts.length === 0 ? "sm:grid-cols-1" : "sm:grid-cols-3"
        } sm:gap-x-16 sm:gap-y-8`}
      >
        {filteredPosts.length > 0 ? (
          [...filteredPosts].reverse().map((post) => {
            let slicedSteps = post.text.slice(0, 10);
            let slicedTitle = post.title.slice(0, 25);

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
              <Link key={post._id} to={`/loggedIn/recipeDetails/${post._id}`}>
                <HomeCards
                  key={post._id}
                  title={slicedTitle}
                  recipeImg={img}
                  steps={slicedSteps}
                  review={post.replies.length}
                />
              </Link>
            );
          })
        ) : (
          <p className="text-center text-lg mt-4">loading...</p>
        )}
      </div>
    </Body>
  );
}
