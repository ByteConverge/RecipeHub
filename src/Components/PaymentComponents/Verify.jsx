import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VerifyPayment = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  let ref = localStorage.getItem("reference");
  let paystack = localStorage.getItem("paystack");
  console.log(ref);
  console.log(paystack);

  const handleVerifyPayment = () => {
    setLoading(true);
    setMessage("");

    fetch(
      `https://recidishbackend.onrender.com/api/payment/verify?reference=${ref}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        if (data.data.status === "success") {
          console.log(data);
          setMessage("Payment verified successfully!");
          setTimeout(() => {
            navigate("/premium");
          }, 2000);
        } else if (data.data.status === "abandoned") {
          setMessage("Payment verification failed. Please try again.");
          console.log(data);
        }
      })
      .catch((error) => {
        setLoading(false);
        setMessage("An error occurred. Please try again.");
        console.error("Error:", error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center font-inter">
          Verify Payment
        </h2>
        <p className="font-inter mb-6 text-center text-gray-600 ">
          Click the button below to verify your payment.
        </p>
        <button
          onClick={handleVerifyPayment}
          disabled={loading}
          className={`w-full py-3 px-4 rounded ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-700"
          } text-white font-semibold transition duration-300 ease-in-out font-inter`}
        >
          {loading ? "Verifying..." : "Verify Payment"}
        </button>
        {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
        <div className="text-center mt-2">
          <p className="font-inter">Not Redirected to paystack?</p>
          <a
            href={paystack}
            target="_blank"
            className=" underline w-full mt-[3rem] text-green-500 font-inter"
          >
            click to make payment
          </a>
        </div>
      </div>
    </div>
  );
};

export default VerifyPayment;
