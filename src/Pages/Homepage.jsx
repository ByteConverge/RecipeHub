
import Body from "../Components/Body"
import flavorDish from "../Recidish_Images/flavorDish.jpg";
import flavorDishTwo from "../Recidish_Images/flavorDish2.jpg";
import spaghetti from "../Recidish_Images/spaghettiJPEG.jpg"
import chickenPasta from "../Recidish_Images/ChickenPasta.jpg"
import porridge from "../Recidish_Images/Porridge.jpg"
import jellofRice from "../Recidish_Images/Jellof Rice.jpg"
import RecipeIcon from "../Recidish_Images/RecipesHome.svg"


import HomeCards from "../Components/HomeCards";

export default function Homepage() {
  return (
    <>
      <Body>
        {/*numbers  */}

        {/* Cards section */}

        {/*  */}
        <main className="px-[4%] min-h-[100vh] my-2 md:w-[95%] md:mx-auto flex flex-col gap-[1.3rem] mt-[2.5rem]">
          {/* welcome Flavors one */}
          <div
            id="welcomeFlavors"
            className=" min-h-[50vh] mb-2  flex flex-col md:flex-row gap-2 md:flex  md:mb-[10px] md:w-[100%] md:gap-3  md:h-[80vh] md:justify-between "
          >
            {/* texts */}
            <div
              id="heading--text"
              className="flex flex-col h-[50%] gap-0 mb-1 md:w-[50%] md:h-100% md:gap-0  "
            >
              {/* h1 */}
              <h1 className="text-left text-[#996D3E] font-semibold font-poppins  md:text-[30px] md:mb-[1rem] md:text-left">
                Welcome to the Flavors of Nigeria!
              </h1>
              <p className="text-left font-poppins text-[.8rem]  md:text-left md:text-[21px] md:font-normal md:leading-[35px] ">
                Discover, Cook, and Share Amazing Recipes Welcome to Recidish,
                your go-to hub for all things culinary! Whether you are a
                seasoned chef or a kitchen novice, our app is designed to
                inspire and assist you in creating mouth-watering dishes right
                from the comfort of your home.
              </p>

              <p className="text-left font-poppins text-[.8rem]  md:text-left md:text-[21px] md:font-normal md:leading-[35px]mb-3  ">
                Plan your meals with ease using our integrated meal planning
                tool. Select recipes for the week, generate shopping lists, and
                stay organized in the kitchen. Eating well has never been so
                effortless. Plus, our instructional videos offer additional
                guidance and inspiration.
              </p>
              <p className="text-left font-poppins text-[.8rem]  md:text-left md:text-[21px] md:font-normal md:leading-[35px]mb-3  ">
                Plan your meals with ease using our integrated meal planning
                tool. Select recipes for the week, generate shopping lists, and
                stay organized in the kitchen. 
              </p>
            </div>
            {/* imageFlavorOne */}
            <figure
              id="img"
              className="min-h-[30vh]   md:rounded-[25px] md:w-[47%] md:flex md:items-center  "
            >
              <img
                src={flavorDish}
                alt=""
                className="h-[100%] w-[100%]  md:rounded-[25px]  md:h-[80%] md:w-[
              70%]  "
              />
            </figure>
          </div>
          {/* WelcomeFlavorsTwo */}
          <div
            id="welcomeFlavorsTwo"
            className="min-h-[50vh] mb-2  flex flex-col gap-2 md:flex  md:mb-[3rem] md:w-[100%] md:gap-8 md:flex-row-reverse md:justify-between "
          >
            <div
              id="text"
              className="flex flex-col gap-0 md:w-[50%] md:h-100% md:gap-0 md:self-center "
            >
              {/* h1 */}
              <h1 className="text-left text-[#996D3E] font-semibold font-poppins md:text-[30px]  md:mb-[1rem] md:text-left">
                Explore Our Recipe Collection
              </h1>
              <p className=" text-left font-poppins text-[.8rem]  md:text-left md:text-[21px] md:font-normal md:leading-[35px]">
                Dive into our extensive collection of recipes from around the
                world. From classic comfort foods to exotic delicacies, we have
                got something for every palate. Easily browse by cuisine,
                dietary preferences, or meal type, and find the perfect recipe
                to suit any occasion.
              </p>
              <p className=" text-left font-poppins text-[.8rem] mb-3  md:text-left md:text-[21px] md:font-normal md:leading-[35px] ">
                We believe that anyone can cook, and our step-by-step
                instructions make it easy. Each recipe includes detailed
                directions, ingredient lists, and cooking tips to ensure your
                dishes turn out perfectly every time. Plus, our instructional
                videos offer additional guidance and inspiration.
              </p>
            </div>
            {/*  */}
            <figure
              id="img"
              className="min-h-[30vh]   sm:rounded-[25px] md:w-[47%] md:flex md:items-center "
            >
              <img
                src={flavorDishTwo}
                alt=""
                className="h-[100%] w-[100%]  md:rounded-[25px]  md:h-[80%] md:w-[
              70%] "
              />
            </figure>
          </div>

          {/*  */}
        </main>
        {/*  */}
        <div
          id="Recipes"
          className="px-[4%] min-h-[5vh]   mt-[1rem] flex gap-4 justify-center items-center   md:mx-auto md:w-[95%] md:flex md:justify-start md:gap-3 md:min-h-[10vh] "
        >
          <h1 className="text-[20px] text-[#996D3E] font-semibold md:font-inter md:text-[50px]  md:font-normal  md:min-h-3">
            Recipes
          </h1>
          <img src={RecipeIcon} alt="" className="h-[1.5rem] md:h-[3rem]" />
        </div>
        {/*CARDS  */}
        <div
          id="cards"
          className="px-[4%] min-h-[10vh] my-2  mb-[1rem] flex flex-col gap-2  md:mx-auto md:w-[95%] md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-8 "
        >
          <HomeCards
            title={"Spaghetti"}
            recipeImg={spaghetti}
            steps={
              " Chicken Pasta is a comforting and creamy dish that combines..."
            }
          />
          <HomeCards
            title={"Chicken pasta"}
            recipeImg={chickenPasta}
            steps={
              " Chicken Pasta is a comforting and creamy dish that combines..."
            }
          />
          <HomeCards
            title={"Porridge"}
            recipeImg={porridge}
            steps={
              " Chicken Pasta is a comforting and creamy dish that combines..."
            }
          />
          <HomeCards
            title={"Jellof Rice"}
            recipeImg={jellofRice}
            steps={
              " Chicken Pasta is a comforting and creamy dish that combines..."
            }
          />
        </div>
      </Body>
    </>
  );
}
