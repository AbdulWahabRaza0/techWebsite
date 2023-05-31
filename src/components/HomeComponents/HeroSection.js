import React from "react";
import { useMediaQuery, Wrapper } from "../Layouts";
import ParticlesBg from "./ParticlesBg/ParticlesBg";
const HeroSection = () => {
  const isResponsive = useMediaQuery({
    query: "(max-width: 517px)",
  });
  return (
    <>
      <ParticlesBg />
      <Wrapper>
        <Wrapper height="90vh" className="container d-flex align-items-center">
          <Wrapper className="pt-5">
            <Wrapper
              fontFamily="Arial, sans-serif"
              className="mb-0 mt-0"
              color="white"
              ls="3px"
              size={isResponsive ? "15px" : "18px"}
              pl={isResponsive && "1rem"}
            >
              We Build
            </Wrapper>
            <Wrapper
              color="white"
              weight="700"
              size={isResponsive ? "30px" : "51px"}
              pl={isResponsive && "1rem"}
              transition={isResponsive && "0.6s ease-in-out"}
            >
              Agile Software
              <br />
              Development Teams
            </Wrapper>
            <Wrapper
              ml={isResponsive && "1rem"}
              className="services-hero"
              color="#16A092"
              weight="600"
              size="18px"
              lHeight="27px"
            >
              <div data-aos="fade-up-right">
                Blockchain | Artificial intilligence | Data Science | Ecommerce
                | DevOps
              </div>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default HeroSection;
