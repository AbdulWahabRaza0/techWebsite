import React from "react";
import Details from "../components/Details";
import HeroSection from "../components/HeroSection";
import ServicesSec from "../components/ServicesSec";
import DeliveredSec from "../components/DeliveredSec";
import HugeSec from "../components/HugeSec";
import Industries from "../components/Industries";
import Testimonial from "../components/Testimonial";
import LetsTalk from "../components/LetsTalk";
import ContactUs from "../components/ContactUs";
const Home = () => {
  return (
    <>
      <HeroSection />
      <Details />
      <ServicesSec heading={true} />
      <DeliveredSec />
      <HugeSec />
      <Industries />
      <Testimonial />
      <LetsTalk />
      <ContactUs />
    </>
  );
};

export default Home;
