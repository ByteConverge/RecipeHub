import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Body from "../Components/Body";
import ReviewForm from "../Components/ReviewForm";
import Footer from "../Components/Footer";



export default function LoggedIn() {
  const [Post, setPost] = useState({});
  let { id } = useParams();
  let jwt = localStorage.getItem("token");
    console.log(id);
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
    <>
      <div className="bg-[#F7EEEE] flex flex-col min-h-[100vh] ">
        {/*  */}
        <div
          id="hero"
          style={{ backgroundImage: `url(${Post.img})` }}
          className={`bg-center min-h-[60vh] grid place-items-center sm:min-h-[90vh] bg-cover w-[95%] mx-auto `}
        ></div>
        {/*  */}
        <div
          id="cards"
          className="px-[4.5%]  md:px-[6%] min-h-[10vh] mt-10 flex flex-col py-4 md:gap-2   md:py-[6%] md:w-[85%] mx-auto md:items-start bg-white -translate-y-[7rem]  rounded-tl-[60px]  rounded-tr-[60px]"
        >
          <figure className="w-full h-[15rem] md:h-[20rem] md:w-[30rem]">
            <img
              src={Post.img}
              alt={Post.title}
              className="w-full h-full  object-cover "
            />
          </figure>

          <h1 className="text-xl text-[27px] md:text-[48px]  text-center lg:text-left font-inter font-bold md:font-medium my-2 sm:mt-4 lg:mt-4 text-gray-800 italic">
            {Post.title}
          </h1>
          <div className="font-poppins ">
            <h1 className="font-bold font-poppins md:text-[30px] md:font-semibold">
              Ingredients:
            </h1>
            <div className="font-poppins md:leading-[40px]  md:px-[6%] md:text-[25px]">
              {Post.ingredients}
            </div>
          </div>

          <div className="font-poppins">
            <h2 className="font-bold font-poppins md:text-[30px] md:font-semibold">
              How to prepare:
            </h2>
            <ul className="list-disc pl-6 px-4 font-poppins md:pl-[2.5rem] md:leading-[30px] md:text-[25px] ">
              {stepsArray.map((step, index) => (
                <li key={index} className="mt-2 ">
                  {step}
                </li>
              ))}
              {/* {
            Post.text
          } */}
            </ul>
            {/* review */}
            {Post && <ReviewForm id={id} />}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
