/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";



export default function AboutPage() {
  return (
    <>
      {/* Homepage body */}
      <main className="px-[4%] min-h-[50vh] my-2 sm:w-[95%] sm:mx-auto">
        <div id="what we offer" className="sm:min-h-[5vh]  ">
          <h1 className="text-[#996D3E] sm:text-[40px] font-poppins text-[20px] font-medium">
            What we offer
          </h1>
          <p className="sm:text-[21px] sm:font-[400] font-poppins text-justify ">
            At Recidish, we provide a comprehensive collection of authentic
            Nigerian recipes, complete with detailed instructions, ingredient
            lists, and cooking tips. Our goal is to make it easy for you to
            recreate the flavors of Nigeria in your own kitchen, no matter where
            you are in the world.
          </p>
          <ul className="sm:text-[24px] sm:font-[400] list-inside font-poppins pl-2 pr-3 ">
            <li className="list-disc text-justify">
              Authentic Recipes: Each recipe on our site is carefully curated to
              ensure authenticity and taste. From traditional classics to modern
              twists, we offer a wide range of dishes that showcase the
              diversity of Nigerian cuisine.
            </li>
            <li className="list-disc text-justify">
              Step-by-Step Guides: Our recipes are designed to be easy to
              follow, with clear step-by-step instructions and helpful tips.
              Whether you are a novice cook or an experienced chef, you will
              find everything you need to create delicious Nigerian meals.
            </li>
            <li className="list-disc text-justify ">
              Community Engagement: We believe that food brings people together.
              Our platform allows you to share your own recipes, rate and review
              others, and connect with fellow Nigerian food enthusiasts. Join
              our community and be inspired by the culinary creations of others.
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
