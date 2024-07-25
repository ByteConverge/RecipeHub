
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem("token");

    // Set isLoggedIn to false
    localStorage.setItem("isLoggedIn", "false");

    // Redirect to home page
    navigate("/");
  };

  return (
    <div className="max-w-full md:max-w-4xl mx-auto p-4 bg-[#DEAA72] shadow-md rounded-lg h-[100vh] bg-cover " >
      <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between">
        <div className="flex items-center mb-4 md:mb-0"></div>
        <div className="flex flex-col items-center md:items-start">
          <button
            className="px-4 py-2 bg-[#996D3e] text-white rounded-md mb-2 hover:bg-[#DEAA72] hover:ring-black hover:ring-1 font-inter"
            onClick={handleLogout}
          >
            Logout
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 w-[100%]">
            <Link className="font-inter">
             Back
            </Link>
          </button>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-white md:text-[3rem] font-inter">Favorite Recipes</h3>
        {/* <ul className="mt-2 space-y-2">
          <li className="p-2 bg-gray-100 rounded-md">Spaghetti Carbonara</li>
          <li className="p-2 bg-gray-100 rounded-md">Chicken Teriyaki</li>
          <li className="p-2 bg-gray-100 rounded-md">Chocolate Lava Cake</li>
        </ul> */}
      </div>
    </div>
  );
};

export default Profile;
