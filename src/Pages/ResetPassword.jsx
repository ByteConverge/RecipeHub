import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  let { reset } = useParams();
  console.log("logged",reset);
  console.log(useParams());
  let navigate = useNavigate();

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
    return passwordRegex.test(password);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validatePassword(password)) {
      setError(
        "Password must be 6-10 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
        `https://recidishbackend.onrender.com/api/auth/resetpassword/${reset}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            passwordtoken: reset,
            password: password,
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      console.log(data);
      setSuccess("Password reset successfully");
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        navigate("/signIn");
      }, 2000);
    } catch (err) {
      console.error("Error resetting password:", err);
      setError(err.message || "Error resetting password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6dec5]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-black font-poppins">
          Reset Password
        </h2>
        {error && <p className="text-red-600 mb-4 font-poppins">{error}</p>}
        {success && <p className="text-green-600 mb-4">{success}</p>}
        <form onSubmit={handleResetPassword}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 font-poppins">
              New Password:
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 font-poppins">
              Confirm Password:
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <label className="ml-2 block text-gray-700 text-sm font-poppins">
              Show Password
            </label>
          </div>
          <button
            type="submit"
            className="w-full text-white py-2 rounded-lg hover:bg-[#6c5742] focus:outline-none focus:ring-2 focus:ring-black bg-[#7d6348] font-poppins"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
