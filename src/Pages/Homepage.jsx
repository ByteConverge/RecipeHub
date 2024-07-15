import Navbar from "../Components/Navbar"
import HeroSection from "../Components/HeroSection"
import Footer from "../Components/Footer"
import Body from "../Components/Body"
import flavorDish from "../Recidish_Images/flavorDish.jpg";
import flavorDishTwo from "../Recidish_Images/flavorDish2.jpg";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Body>
        <main className="min-h-[100vh] my-[1rem] sm:w-[95%] sm:mx-auto ">
          {/* welcome Flavors one */}
          <div
            id="welcomeFlavors"
            className="min-h-[80vh] sm:flex  sm:mb-[3rem] sm:w-[100%] sm:gap-3  sm:h-[80vh]"
          >
            <div
              id="text"
              className="flex flex-col h-[50%] gap-3 sm:w-[50%] sm:h-100% sm:gap-0 "
            >
              {/* h1 */}
              <h1 className="text-center text-[#88633b] font-bold sm:text-[30px] sm:mb-[1rem] sm:text-left">
                Welcome to the Flavors of Nigeria!
              </h1>
              <p className="text-center text-[.8rem] sm:text-[19.5px] sm:text-left">
                Discover, Cook, and Share Amazing Recipes Welcome to Recidish,
                your go-to hub for all things culinary! Whether you are a
                seasoned chef or a kitchen novice, our app is designed to
                inspire and assist you in creating mouth-watering dishes right
                from the comfort of your home.
              </p>
              <p className="text-center text-[.8rem] sm:text-[20px] sm:text-left">
                Plan your meals with ease using our integrated meal planning
                tool. Select recipes for the week, generate shopping lists, and
                stay organized in the kitchen. Eating well has never been so
                effortless.
              </p>
           
            </div>
            {/* imageFlavorOne */}
            <div
              id="img"
              className="min-h-[50vh] sm:h-[100%]  sm:rounded-[25px] "
            >
              <img
                src={flavorDish}
                alt=""
                className="h-[100%] w-[100%] sm:rounded-[25px]"
              />
            </div>
          </div>
          {/* WelcomeFlavorsTwo */}
          <div
            id="welcomeFlavorsTwo"
            className="min-h-[80vh] sm:flex  sm:mb-[3rem] sm:w-[100%] sm:gap-8 sm:flex-row-reverse sm:justify-between "
          >
            <div
              id="text"
              className="flex flex-col gap-3 sm:w-[50%] sm:h-100% sm:gap-0 sm:self-center "
            >
              {/* h1 */}
              <h1 className=" text-center text-[#88633b] font-bold sm:text-[30px] sm:mb-[1rem] sm:text-left">
                Explore Our Recipe Collection
              </h1>
              <p className=" text-center text-[.8rem] sm:text-[21px] sm:text-left">
                Dive into our extensive collection of recipes from around the
                world. From classic comfort foods to exotic delicacies, we have
                got something for every palate. Easily browse by cuisine,
                dietary preferences, or meal type, and find the perfect recipe
                to suit any occasion.
              </p>
              <p className=" text-center text-[.8rem] sm:text-[21px] sm:text-left">
                Plan your meals with ease using our integrated meal planning
                tool. Select recipes for the week, generate shopping lists, and
                stay organized in the kitchen. Eating well has never been so
                effortless.
              </p>
            </div>
            {/*  */}
            <div
              id="img"
              className="h-[50vh] sm:h-[100%] sm:w-[50%] sm:rounded-[25px]] "
            >
              <img
                src={flavorDishTwo}
                alt=""
                className="h-[100%] w-[100%] sm:rounded-[25px]"
              />
            </div>
          </div>

          {/*  */}
        </main>
      </Body>
      <Footer />
    </>
  );
}
