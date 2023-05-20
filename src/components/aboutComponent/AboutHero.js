import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, useMediaQuery } from "../Layouts";
import { PrimaryBtn } from "../Buttons";
const AboutHero = () => {
  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <>
      <Wrapper
        bg="linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url(https://www.capgemini.com/de-de/wp-content/uploads/sites/8/2022/08/GettyImages-1181008199.jpg)"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: " center",
        }}
        className="bg-About-page"
      >
        <Wrapper height="90vh" className="container d-flex align-items-center">
          <div className="wrapper pt-5">
            <Wrapper
              color="white"
              size="25px"
              ls="3px"
              ml={isResponsive && "8px"}
            >
              tech
            </Wrapper>
            <Wrapper
              color="white"
              weight="bold"
              ls="3px"
              size="70px"
              ml={isResponsive && "14px"}
              className="hero-heading-about-page"
            >
              About us
            </Wrapper>
            <Wrapper
              width={isResponsive ? "310px" : "610px"}
              ml={isResponsive && "14px"}
              size={isResponsive && "14px"}
              className="about-hero fw-bold pb-1"
              style={{ color: "#16A092" }}
            >
              Proudly serving the world’s top asset finance and leasing
              companies with smart software technology for over four decades.
            </Wrapper>
            <Link to="/contact">
              <PrimaryBtn
                bg={isResponsive ? "#16a092" : "transparent"}
                className="fs-5 rounded text-white mt-4"
              >
                Get in touch
              </PrimaryBtn>
            </Link>
          </div>
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default AboutHero;
