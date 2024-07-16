import NumbersRates from "./NumbersRates";

export default function NumberData() {
  return (
    <div
      id="numbers"
      className="px-[6%] min-h-[4vh] my-2 flex  justify-between gap-2 sm:w-[95%] sm:mx-auto sm:my-7"
    >
      <NumbersRates />
      <NumbersRates />
      <NumbersRates />
    </div>
  );
}
