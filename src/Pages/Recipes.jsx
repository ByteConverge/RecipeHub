/* eslint-disable no-unused-vars */
import { NavLink , Outlet } from "react-router-dom";
import Body from "../Components/Body"
// import HomeCards from "../Components/HomeCards";
// import riceGeneral from "../Recidish_Images/CoconutRice.jpg"
// import soupGeneral from "../Recidish_Images/BitterLeafSoup.jpg"
// import stew from "../Recidish_Images/stew.jpg"

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
      <ul className="px-[6%] min-h-[1vh] my-2 flex  justify-start gap-2 sm:w-[95%] sm:mx-auto sm:my-7 sm:gap-[34px]">
        <li className="text-[12px] bg-[#DEAA72] rounded-[10px] p-[1px] grid place-items-center font-inter lg:rounded-[20px] lg:font-normal lg:text-[20px] lg:px-[28px] lg:py-[8px]">
          <NavLink to="/loggedIn/Recipes">All Recipes</NavLink>
        </li>
        <li className="text-[12px] bg-[#DEAA72] rounded-[10px] p-[1px] grid place-items-center font-inter lg:rounded-[20px] lg:font-normal lg:text-[20px] lg:px-[25px] lg:py-[8px]">
          <NavLink to="/loggedIn/Recipes/riceRecipes">Rice Recipes</NavLink>
        </li>
        <li className="text-[12px] bg-[#DEAA72] rounded-[10px] p-[1px] grid place-items-center font-inter lg:rounded-[20px] lg:font-normal lg:text-[20px] lg:px-[25px] lg:py-[8px]">
          <NavLink to="/loggedIn/Recipes/stewRecipes">Stew Recipes</NavLink>
        </li>
        <li className="text-[12px] bg-[#DEAA72] rounded-[10px] p-[1px] grid place-items-center font-inter lg:rounded-[20px] lg:font-normal lg:text-[20px] lg:px-[25px] lg:py-[8px]">
          <NavLink to="/loggedIn/Recipes/soupRecipes">Soup Recipes</NavLink>
        </li>
      </ul>

      <Outlet />
    </Body>
  );
}

