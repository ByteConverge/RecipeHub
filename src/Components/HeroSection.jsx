/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import friedRice from "../Recidish_Images/Fried-Rice-two.png";
import pounded from "../Recidish_Images/PoundedYam-Soup.png";
import riceStew from "../Recidish_Images/Rice-Stew.png";
import crisp from "../Recidish_Images/Crisp-.png";
import CoconutRice from '../Recidish_Images/CoconutRice.jpg'
import bgChicken from '../Recidish_Images/bgImgChciken.jpg'

export default function HeroSection() {
  let bgImg = [friedRice, pounded, riceStew, crisp , CoconutRice , bgChicken];
  const [bgIndex, setBgIndex] = useState(1);
  const intervalDuration = 2500;

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => {
        return prevIndex === bgImg.length - 1 ? 0 : prevIndex + 1;
      });
    }, intervalDuration);
    return () => clearInterval(interval);
  }, [bgImg.length, intervalDuration]);
  return (
    <div
      id="hero"
      style={{ backgroundImage: `url(${bgImg[0]})` }}
      className={`bg-center min-h-[60vh] grid place-items-center sm:h-[100vh] `}
    >
      <div
        id="hero--texts"
        className="w-[90%] mx-auto mt-[4%] h-[50vh] md:h-[80%] rounded-[1rem] bg-black bg-opacity-70 p-9 text-white flex flex-col text-center justify-center gap-4 md:w-[80%] md:gap-7"
      >
        <h1 className=" text-[20px] sm:text-[35px] font-inter  md:font-normal">
          Discover Delicious Recipes
        </h1>
        <p className="self-center p-1 text-[13px]   w-[100%] font-inter md:text-[20px] md:w-[65%] sm:text-[24px]  md:text-center ">
          Welcome to Recidish - Your ultimate destination for culinary
          inspiration! Explore a world of flavors and discover mouth-watering
          recipes tailored to your taste buds. Whether you are a seasoned chef
          or just starting your cooking journey, our service offers a diverse
          collection of recipes to suit every skill level and dietary
          preference.
        </p>
        <Link
          to="/signUp"
          className=" bg-[#996D3E] text-[white] rounded-[10px] self-center  grid place-items-center w-[7rem] h-[2.5rem] font-inter  md:text-[20px] md:w-[25%] md:h-[15%] md:text-black "
        >
          Get Started
        </Link>
      </div>
      {/* */}
    </div>
  );
}
