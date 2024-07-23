/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaCheckCircle, FaExclamationCircle, FaTimes } from "react-icons/fa";

const ForgotPasswordModal = ({closeModal}) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    setMessage("");

    try {
      const response = await fetch(
        "https://recidishbackend.onrender.com/api/auth/forgotpassword",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      setMessage(data.message);
      setIsError(false);
    } catch (error) {
      console.error("Error sending request:", error);
      setMessage("An error occurred. Please try again later.");
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 sm:p-8">
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
          <button
            onClick={() => {
              closeModal(false);
            }}
            className="absolute top-2 right-3 text-black "
          >
            <FaTimes className="text-xl" />
          </button>
          <h3 className="text-2xl font-poppinsMedium   mb-4 text-center text-black">
            Forgot Password
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block  text-sm font-poppins mb-2"
              >
                Email Address:
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border rounded-lg focus:ring-black focus:outline-black  "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#a18361] text-white py-3 rounded-lg font-semibold hover:bg-[#a18361]focus:outline-none focus:ring-2 focus:ring-[#a18361] disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Request Password Reset"}
            </button>
            {message && (
              <div
                className={`mt-4 p-4 rounded-lg ${
                  isError
                    ? "bg-red-100 text-red-700"
                    : "bg-green-100 text-green-700"
                } flex items-center`}
              >
                {isError ? (
                  <FaExclamationCircle className="mr-2 text-xl" />
                ) : (
                  <FaCheckCircle className="mr-2 text-xl" />
                )}
                <p>{message}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
