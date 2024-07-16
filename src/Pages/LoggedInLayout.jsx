import { Outlet } from "react-router-dom";

import LoggedInNavbar from "../Components/LoggedInNavbar";
import LoggedInHeroSection from "../Components/LoggedInHeroSection";
import Footer from "../Components/Footer";
import NumberData from "../Components/NumberData";

export default function LoggedInLayout() {
  return (
    <>
      <LoggedInNavbar />
      <LoggedInHeroSection />
        <NumberData />

      <Outlet />

      <Footer />
    </>
  );
}
