/* eslint-disable react/prop-types */
import { FaCheckCircle } from "react-icons/fa";
import "tailwindcss/tailwind.css";

export default function Modal({ topMessage, message }) {
  return (
    <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 sm:p-8">
      <div
        id="modal"
        className="modal bg-white p-5 rounded-lg shadow-lg w-[60%] sm:w-[45%] max-w-[200px] h-[45%] max-h-[200px] flex flex-col justify-center items-center"
      >
        <div className="flex items-center mb-3">
          <FaCheckCircle className="text-green-400 text-2xl mr-2" />
          <h2 className="text-[1.25rem] text-center text-green-400">
            {topMessage}
          </h2>
        </div>
        <p className="text-[0.875rem] text-center">{message}</p>
      </div>
    </div>
  );
}
