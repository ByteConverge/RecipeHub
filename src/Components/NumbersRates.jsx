/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


export default function NumbersRates({num , text , color}) {
  return (
    <div className="flex flex-col">
      <figure className="flex justify-center gap-2 items-center">
        <span className={`h-[10px] w-[10px] rounded-[50%] bg-${color}-500`}></span>
        <h1 className=" font-bold sm:text-[32px] font-inter   ">{num}</h1>
      </figure>
      <p className="text-[12px] font-inter font-medium sm:text-[20px] ">{text}</p>
    </div>
  );
}
