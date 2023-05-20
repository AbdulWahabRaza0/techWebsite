import React from "react";
import ServicesHero from "../serviceComponents/ServiceHero";
import CustomSoftwareSec from "../serviceComponents/CustomSoftwareSec";
// import ServiceDetails from "../serviceComponents/ServiceDetails";
// import ServiceTestimonial from '../serviceComponents/ServiceTestimonial'
import Testimonial from "../components/Testimonial";
import ServicesSec from "../components/ServicesSec";
const ServicesPage = () => {
  return (
    <>
      <ServicesHero />
      <CustomSoftwareSec />
      <ServicesSec heading={false} />
      <Testimonial />
    </>
  );
};

export default ServicesPage;
