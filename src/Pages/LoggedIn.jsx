import Body from "../Components/Body";
import HomeCards from "../Components/HomeCards";
import spaghetti from "../Recidish_Images/spaghettiJPEG.jpg";
import chickenPasta from "../Recidish_Images/ChickenPasta.jpg";
import porridge from "../Recidish_Images/Porridge.jpg";
import jellofRice from "../Recidish_Images/Jellof Rice.jpg";

export default function LoggedIn() {
  return (
    <Body>
      <div
        id="cards"
        className="px-[4%] min-h-[10vh] my-2  mb-[1rem] flex flex-col gap-2  sm:mx-auto sm:w-[95%] sm:grid sm:grid-cols-2 sm:gap-x-16 sm:gap-y-8 "
      >
        <HomeCards title={"Spaghetti"} recipeImg={spaghetti} />
        <HomeCards title={"Chicken pasta"} recipeImg={chickenPasta} />
        <HomeCards title={"Porridge"} recipeImg={porridge} />
        <HomeCards title={"Jellof Rice"} recipeImg={jellofRice} />
      </div>
    </Body>
  );
}
