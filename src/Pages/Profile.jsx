import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "" });
  const [showModal, setShowModal] = useState(false);
  const [loading , setIsLoading] = useState(true)
  let jwt = localStorage.getItem("token");

  useEffect(() => {
    window.scrollTo(0, 0);
    const userId = localStorage.getItem("userId");

    if (userId) {
      fetch(`https://recidishbackend.onrender.com/api/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
        .then((response) => response.json())
        .then((user) => {
          setUser(user.data);
          console.log(user.data);
          setIsLoading(false)
        })
        .catch((error) => console.error("Error fetching user data:", error));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.setItem("isLoggedIn", "false");
    navigate("/");
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
   if (loading) {
     return (
       <div className="flex items-center justify-center min-h-screen">
         <div className="w-12 h-12 border-t-4 border-b-4 border-gray-900 rounded-full animate-spin"></div>
       </div>
     );
   }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r bg-[#f3e2d0]  p-4">
      <div className="w-full md:max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center p-6 bg-[#DEAA72] text-white">
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0 md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold">{user.name}</h2>
            <p className="text-lg md:text-xl">{user.email}</p>
          </div>
          <div className="flex flex-col md:flex-row md:ml-auto mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-2">
            <button
              className="px-4 py-2 bg-[#996D3e] text-white rounded-md hover:bg-[#DEAA72] hover:ring-2 hover:ring-white font-inter"
              onClick={handleShowModal}
            >
              Logout
            </button>
            <Link
              to="/loggedIn"
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 w-full inline-block text-center font-inter"
            >
              Back
            </Link>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-lg md:text-2xl font-semibold text-gray-800 font-inter mb-4">
            Favorite Recipes
          </h3>
          {/* <ul className="mt-2 space-y-2">
            <li className="p-2 bg-gray-100 rounded-md">Spaghetti Carbonara</li>
            <li className="p-2 bg-gray-100 rounded-md">Chicken Teriyaki</li>
            <li className="p-2 bg-gray-100 rounded-md">Chocolate Lava Cake</li>
          </ul> */}
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Log out of account?</h2>
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
