import React from "react";
import Details from "../components/Common/Details";
import HeroSection from "../components/HomeComponents/HeroSection";
import ServicesSec from "../components/Common/ServicesSec";
import DeliveredSec from "../components/HomeComponents/DeliveredSec";
import HugeSec from "../components/HomeComponents/HugeSec";
import IndustriesCard from "../components/Common/IndustriesCard";
import Testimonial from "../components/Common/Testimonial";
import LetsTalk from "../components/HomeComponents/LetsTalk";
import ContactUs from "../components/Common/ContactUs";
import banking from "../assets/banking.png";
import blockchain from "../assets/blockchain.png";
import ai from "../assets/ai.png";
import datasci from "../assets/datasci.png";
import devops from "../assets/devops.png";
import iot from "../assets/iot.png";
import ecommerce from "../assets/ecommerce.png";
import technical from "../assets/technical.png";
import hospital from "../assets/hospital.png";
import binance from "../assets/binance.png";
import { Wrapper } from "../components/Layouts";
import { H2 } from "../components/Typography";
const IndustryData = [
  { src: banking, title: "Banking" },

  { src: binance, title: "Markets" },
  {
    src: hospital,
    title: "Education",
  },
  { src: technical, title: "Manufacturing" },

  { src: hospital, title: "Healthcare" },

  { src: banking, title: "Banking" },
];
const ServiceCardsData = [
  {
    src: blockchain,
    title: "Blockchain Web3",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quisquam consequatur necessitatibus eaque.",
  },
  {
    src: ai,
    title: "Artificial Intelligence",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quisquam consequatur necessitatibus eaque",
  },
  {
    src: devops,
    title: "DevOps",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quisquam consequatur necessitatibus eaque",
  },
  {
    src: datasci,
    title: "Data Science",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque.",
  },
  {
    src: ecommerce,
    title: "Ecommerce",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quisquam consequatur necessitatibus eaque.",
  },
  {
    src: iot,
    title: "Internet of things",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quisquam consequatur necessitatibus eaque.",
  },
];

const Home = () => {
  return (
    <>
      <HeroSection />
      <Details title="tech" page="home" btnName="Let' talk" />
      <ServicesSec data={ServiceCardsData} heading={true} page="home" />
      <DeliveredSec />
      <HugeSec />
      <Wrapper bg="black">
        <Wrapper className="container" data-aos="fade-down">
          <Wrapper
            color="#16a092"
            ls="3px"
            weight="bold"
            pt="3rem"
            className="fs-5 "
            size="24px"
          >
            Industries we serves
          </Wrapper>
          <H2 className="text-white" size="30px">
            Managed IT Services customized for your industry
          </H2>
        </Wrapper>

        <IndustriesCard data={IndustryData} />
      </Wrapper>
      <Testimonial />
      <LetsTalk />
      <ContactUs />
    </>
  );
};

export default Home;
