
import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"
import HeroSection from "../Components/HeroSection"
import Footer from "../Components/Footer"
import NumberData from "../Components/NumberData"


export default function Layout() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <NumberData />
    <Outlet />

    <Footer />
    </>
  )
}

