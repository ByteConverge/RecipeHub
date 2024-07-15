
import rice from "../Recidish_Images/Fried-chicken-explore.png";
import blackStar from "../Recidish_Images/blackStar.svg";

export default function HomeCards() {
  return (
    <div
      id="card"
      className="border-[1px] solid border-black rounded-[1rem] h-[45vh]"
    >
      <figure className="h-[70%]">
        <img
          src={rice}
          alt=""
          className="rounded-tr-[1rem] rounded-tl-[1rem] w-[100%] h-[100%]"
        />
      </figure>
      <div id="lowerSection" className="p-2">
        <div className="flex justify-between w-1/3 gap-3">
          <h1 className="font-bold">Porridge</h1>
          <figure className="flex items-center gap-1">
            <img src={blackStar} alt="" className="h-4 w-4" />
            <p>{4.8}</p>
          </figure>
        </div>
        <p className="text-[10px] w-[60%]">
          Chicken Pasta is a comforting and creamy dish that combines...
        </p>
      </div>
    </div>
  );
}
