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
              size={isResponsive ? "15px" : "25px"}
              pl={isResponsive && "1rem"}
            >
              We Build
            </Wrapper>
            <Wrapper
              color="white"
              weight="bold"
              ls="3px"
              size={isResponsive ? "30px" : "70px"}
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
              className="services-hero fw-bold"
              style={{ color: "#16A092" }}
            >
              Blockchain | Artificial intilligence | Data Science | Ecommerce |
              DevOps
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default HeroSection;
