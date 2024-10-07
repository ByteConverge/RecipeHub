import { useEffect, useState } from "react";
import NumbersRates from "./NumbersRates";

let jwt = localStorage.getItem("token");

export default function NumberData() {
  const [posts, setPosts] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      // setIsLoading(true);
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
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        // setIsLoading(false);
      }
    }

    fetchPosts();
  }, [jwt]);

  const totalReviews = posts.reduce(
    (acc, post) => acc + (post.replies ? post.replies.length : 0),
    0
  );

  return (
    <div
      id="numbers"
      className="px-[6%] min-h-[4vh] my-2 flex justify-between gap-2 sm:w-[95%] sm:mx-auto sm:my-7"
    >
      
        
    
        <>
          <NumbersRates
            num={posts.length}
            text={"Original recipes"}
            color={"red"}
          />

          <NumbersRates num={totalReviews} text={"Reviews"} color={"blue"} />
          
          <NumbersRates num={"..."} text={"re-cooked recipes"} color={"blue"} />
        </>
    
    </div>
  );
}
