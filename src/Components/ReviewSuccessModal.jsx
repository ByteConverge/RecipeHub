

export default function ReviewSuccessModal() {
  return (
    <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50  flex items-center justify-center p-4 sm:p-8">
      <div
        id="modal"
        className="modal bg-white p-5 rounded-lg shadow-lg w-[60%] sm:w-[45%] max-w-[200px] h-[45%] max-h-[200px] flex flex-col justify-center items-center"
      >
        <div className="flex items-center mb-3">
          <h2 className="text-[1.25rem] text-center t">
            Thanks for the review
          </h2>
        </div>

        <p className="w-[50%] bg-[#DEAA72] grid place-items-center rounded-[2rem]">
          
        </p>
      </div>
    </div>
  );
}
