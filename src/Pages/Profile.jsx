
import { useNavigate } from "react-router-dom";

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
    <div className="max-w-full md:max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="w-16 h-16 mr-4 flex-shrink-0">
            <img
              className="w-full h-full object-cover rounded-full"
              src="https://via.placeholder.com/150"
              alt="User Avatar"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Chef Profile</h2>
            <p className="text-gray-600">Loves Italian & Asian Cuisine</p>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md mb-2 hover:bg-blue-600"
            onClick={handleLogout}
          >
            Logout
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
            Settings
          </button>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Favorite Recipes</h3>
        <ul className="mt-2 space-y-2">
          <li className="p-2 bg-gray-100 rounded-md">Spaghetti Carbonara</li>
          <li className="p-2 bg-gray-100 rounded-md">Chicken Teriyaki</li>
          <li className="p-2 bg-gray-100 rounded-md">Chocolate Lava Cake</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
