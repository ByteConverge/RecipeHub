import Navbar from "../Components/Navbar"
import HeroSection from "../Components/HeroSection"
import Footer from "../Components/Footer"
import Body from "../Components/Body"
import flavorDish from "../Recidish_Images/flavorDish.jpg";
import flavorDishTwo from "../Recidish_Images/flavorDish2.jpg";
import blackStar from '../Recidish_Images/blackStar.svg'
import test from "../Recidish_Images/fried-rice-leaf.png"
import rice from "../Recidish_Images/Fried-chicken-explore.png"
export default function Homepage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Body>
        {/*  */}
        <div
          id="numbers"
          className="px-[6%] min-h-[4vh] my-2 flex  justify-between gap-2 sm:w-[95%] sm:mx-auto"
        >
          {/*  */}
          <div className="flex flex-col">
            <figure className="flex justify-center gap-2 items-center">
              <span className="h-[10px] w-[10px] rounded-[50%] bg-red-400"></span>
              <h1>113k</h1>
            </figure>
            <p className="text-[12px]">Original recipes</p>
          </div>
          {/*  */}
          <div className="flex flex-col">
            <figure className="flex justify-center gap-2 items-center">
              <span className="h-[10px] w-[10px] rounded-[50%] bg-yellow-400"></span>
              <h1>113k</h1>
            </figure>
            <p className="text-[12px]">Original recipes</p>
          </div>
          {/*  */}
          <div className="flex flex-col">
            <figure className="flex justify-center gap-2 items-center">
              <span className="h-[10px] w-[10px] rounded-[50%] bg-blue-400"></span>
              <h1>113k</h1>
            </figure>
            <p className="text-[12px]">Original recipes</p>
          </div>
          {/*  */}
        </div>
        {/* SECTION TWO */}
        <div
          id="cards"
          className="px-[4%] min-h-[10vh] my-2 sm:w-[95%] mb-[1rem] flex flex-col gap-2 sm:mx-auto "
        >
          {/* Card */}
          <div
            id="card"
            className="border-[1px] solid border-black rounded-[1rem] h-[39vh]"
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
          {/* card two */}
          <div
            id="card"
            className="border-[1px] solid border-black rounded-[1rem] h-[39vh]"
          >
            <figure className="h-[70%]">
              <img
                src={test}
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
        </div>

        {/*  */}
        <main className="px-[4%] min-h-[100vh] my-2 sm:w-[95%] sm:mx-auto ">
          {/* welcome Flavors one */}
          <div
            id="welcomeFlavors"
            className="min-h-[50vh] mb-2  sm:flex  sm:mb-[3rem] sm:w-[100%] sm:gap-3  sm:h-[80vh]"
          >
            <div
              id="heading--text"
              className="flex flex-col h-[50%] gap-0 mb-1 sm:w-[50%] sm:h-100% sm:gap-0 "
            >
              {/* h1 */}
              <h1 className="text-center text-[#88633b] font-bold font-poppinsMedium sm:text-[30px] sm:mb-[1rem] sm:text-left">
                Welcome to the Flavors of Nigeria!
              </h1>
              <p className="text-justify text-[.8rem] sm:text-[19.5px] sm:text-left">
                Discover, Cook, and Share Amazing Recipes Welcome to Recidish,
                your go-to hub for all things culinary! Whether you are a
                seasoned chef or a kitchen novice, our app is designed to
                inspire and assist you in creating mouth-watering dishes right
                from the comfort of your home.
              </p>
              <p className="text-justify text-[.8rem] sm:text-[20px] sm:text-left">
                Plan your meals with ease using our integrated meal planning
                tool. Select recipes for the week, generate shopping lists, and
                stay organized in the kitchen. Eating well has never been so
                effortless.
              </p>
            </div>
            {/* imageFlavorOne */}
            <figure
              id="img"
              className="min-h-[30vh] sm:h-[100%]  sm:rounded-[25px] "
            >
              <img
                src={flavorDish}
                alt=""
                className="h-[100%] w-[100%] sm:rounded-[25px]"
              />
            </figure>
          </div>
          {/* WelcomeFlavorsTwo */}
          <div
            id="welcomeFlavorsTwo"
            className="min-h-[50vh] mb-2 sm:flex  sm:mb-[3rem] sm:w-[100%] sm:gap-8 sm:flex-row-reverse sm:justify-between "
          >
            <div
              id="text"
              className="flex flex-col gap-0 sm:w-[50%] sm:h-100% sm:gap-0 sm:self-center "
            >
              {/* h1 */}
              <h1 className=" text-center text-[#88633b] font-bold font-poppinsMedium sm:text-[30px] sm:mb-[1rem] sm:text-left">
                Explore Our Recipe Collection
              </h1>
              <p className=" text-justify font-inter text-[.8rem] sm:text-[21px] sm:text-left">
                Dive into our extensive collection of recipes from around the
                world. From classic comfort foods to exotic delicacies, we have
                got something for every palate. Easily browse by cuisine,
                dietary preferences, or meal type, and find the perfect recipe
                to suit any occasion.
              </p>
              <p className=" text-justify text-[.8rem] sm:text-[21px] sm:text-left">
                Plan your meals with ease using our integrated meal planning
                tool. Select recipes for the week, generate shopping lists, and
                stay organized in the kitchen. Eating well has never been so
                effortless.
              </p>
            </div>
            {/*  */}
            <figure
              id="img"
              className="min-h-[30vh] sm:h-[100%] sm:w-[50%] sm:rounded-[25px]] "
            >
              <img
                src={flavorDishTwo}
                alt=""
                className="h-[100%] w-[100%] sm:rounded-[25px]"
              />
            </figure>
          </div>

          {/*  */}
        </main>
      </Body>
      <Footer />
    </>
  );
}
