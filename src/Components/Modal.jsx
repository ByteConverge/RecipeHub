/* eslint-disable react/prop-types */


export default function Modal({topMessage , message}) {
  return (
    <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 grid place-items-center">
      <div
        id="modal"
        className="modal bg-white  p-5 rounded h-[20%] flex flex-col justify-center"
      >
        <h2 className="text-[1.5rem] mb-4 text-center text-green-400 font-inter">
          {topMessage}
        </h2>
        <p className="text-[1rem]">{message}</p>
      </div>
    </div>
  );
}
