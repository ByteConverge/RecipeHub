/* eslint-disable no-unused-vars */
import { NavLink, Outlet } from "react-router-dom";
import Body from "../Components/Body";
import { useEffect, useState } from "react";

export default function Recipes() {
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

      const data = await response.json();
      console.log(data.posts);
      setPosts(data.posts);
    }

    fetchBored();
  }, [jwt]);

  const linkClassNames =
    "text-[12px] bg-[#DEAA72] rounded-[10px] p-[7px] grid place-items-center font-inter lg:rounded-[20px] lg:font-normal lg:text-[20px] lg:px-[28px] lg:py-[8px]";
  const activeClassNames = "bg-[#806345] text-white";

  return (
    <Body>
      <ul className="px-[6%] min-h-[1vh] my-2 grid grid-cols-2 justify-start gap-2 sm:w-[95%] sm:mx-auto sm:my-7 sm:gap-[34px] sm:flex ">
        <li>
          <NavLink
            end
            to="/loggedIn/Recipes"
            className={({ isActive }) =>
              isActive
                ? `${linkClassNames} ${activeClassNames}`
                : linkClassNames
            }
          >
            All Recipes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/loggedIn/Recipes/riceRecipes"
            className={({ isActive }) =>
              isActive
                ? `${linkClassNames} ${activeClassNames}`
                : linkClassNames
            }
          >
            Rice Recipes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/loggedIn/Recipes/stewRecipes"
            className={({ isActive }) =>
              isActive
                ? `${linkClassNames} ${activeClassNames}`
                : linkClassNames
            }
          >
            Stew Recipes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/loggedIn/Recipes/soupRecipes"
            className={({ isActive }) =>
              isActive
                ? `${linkClassNames} ${activeClassNames}`
                : linkClassNames
            }
          >
            Soup Recipes
          </NavLink>
        </li>
       
      </ul>

      <Outlet />
    </Body>
  );
}
