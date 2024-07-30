
import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"
import HeroSection from "../Components/HeroSection"
import Footer from "../Components/Footer"
import NumberDataNot from "../Components/NumberDataNot"


export default function Layout() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <NumberDataNot />
    <Outlet />

    <Footer />
    </>
  )
}

