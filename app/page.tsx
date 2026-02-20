import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainServices from "./components/MainServices";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Contact from "./components/Contact";
import {Process} from "./components/Process";
import { Gallery } from "./components/Gallery";
export default function Home() {
  return (
    <>

    <Header/>
    <Hero/>
    <MainServices/>
    <Features/>
    <Process/>
    <Contact/>
    <Gallery/>
    <Footer/>
    </>
    
  );
}
