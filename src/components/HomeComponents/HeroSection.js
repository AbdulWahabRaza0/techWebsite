import React from "react";
import { useMediaQuery, Wrapper, SpanWrapper } from "../Layouts";
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
              className="mb-0 mt-0"
              color="white"
              ls="3px"
              size={isResponsive ? "15px" : "12px"}
              pl={isResponsive && "1rem"}
            >
              We Build
            </Wrapper>
            <Wrapper
              color="white"
              ls="3px"
              size={isResponsive ? "30px" : "35px"}
              pl={isResponsive && "1rem"}
              transition={isResponsive && "0.6s ease-in-out"}
            >
              Agile{" "}
              <SpanWrapper color="rgb(255, 255, 255)">Software</SpanWrapper>{" "}
              <br />
              Development Teams
            </Wrapper>
            <Wrapper
              ml={isResponsive && "1rem"}
              className="services-hero"
              style={{ color: "#16A092" }}
              fontFamily={"'Gilroy-Bold', sans-serif"}
              weight="600"
              size="12px"
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
