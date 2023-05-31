import React from "react";
import { Wrapper, useMediaQuery } from "../Layouts";
import { H1 } from "../Typography";
import { PrimaryBtn } from "../Buttons";
const HugeSec = () => {
  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <Wrapper bg="#000" className="pb-5">
      <Wrapper className="container">
        <H1
          size="45px"
          data-aos="fade-down-right"
          className={`text-white pt-5 display-4 fw-bold ${
            isResponsive && "text-center"
          }`}
        >
          Let's Tell Huge Stories Together
        </H1>
        <Wrapper
          className="d-flex justify-content-center"
          data-aos="fade-down-left"
        >
          <Wrapper
            width={isResponsive ? "470px" : "600px"}
            size={"18px"}
            color="#bfcdd5"
            className={`pt-4 ${isResponsive && "text-center"}`}
          >
            We are all wired for mobile. We develop brands as well as
            applications. Your most shrewd move will be to pick us. Your most
            shrewd move will be to pick us.shrewd move will be to pick us.
          </Wrapper>
        </Wrapper>
        <PrimaryBtn
          data-aos="zoom-in"
          pl="30px"
          pr="30px"
          pt="7px"
          pb="7px"
          width={isResponsive && "100%"}
          className={`btn mt-4 ${
            isResponsive &&
            "d-flex flex-row align-items-center justify-content-center"
          }`}
        >
          <a
            href="#Start"
            className="text-white text-decoration-none"
            style={{ fontWeight: 600 }}
          >
            Start now
          </a>
        </PrimaryBtn>
      </Wrapper>
    </Wrapper>
  );
};

export default HugeSec;
