import React from "react";
import building from "../../assets/building.png";
import { Wrapper, useMediaQuery } from "../Layouts";
import { H1, P } from "../Typography";
import styled from "styled-components";
import { PrimaryBtn } from "../Buttons";
const ContactFormStyle = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-gap: 6rem;
`;
const InputStyle = styled.input`
  width: 100%;
  padding: 17px;
  border: none;
  outline: none;
  background: #191919;
  color: #fff;
  font-size: 1.1rem;
  margin-bottom: 0.7rem;
  border-radius: 10px;
`;
const TextAreaStyle = styled.textarea`
  width: 100%;
  padding: 17px;
  border: none;
  outline: none;
  background: #191919;
  color: #fff;
  font-size: 1.1rem;
  margin-bottom: 0.7rem;
  border-radius: 10px;
  resize: none;
  height: 200px;
`;
const ContactUs = () => {
  const isResponsiveHighest = useMediaQuery({
    query: "(max-width: 1570px)",
  });
  const isResponsiveNormal = useMediaQuery({
    query: "(max-width: 1090px)",
  });
  const isResponsiveLow = useMediaQuery({
    query: "(max-width: 1000px)",
  });
  return (
    <>
      <Wrapper bg="#000">
        <ContactFormStyle
          p={isResponsiveHighest ? "0px 3%" : "0px 15%"}
          transition={
            (isResponsiveHighest && ".2s") || (isResponsiveNormal && "0.3s")
          }
          className="container align-items-center"
          style={{
            gridGap: isResponsiveNormal ? "2rem" : "6rem",
            gridTemplateColumns: isResponsiveLow ? "1fr" : " repeat(2, 2fr)",
          }}
        >
          <Wrapper style={{ order: isResponsiveLow && 2 }}>
            <H1
              weight="bold"
              ls="2px"
              size={"60px"}
              color="aliceblue"
              mb="20px"
            >
              Contact <span>us</span>
            </H1>
            <P
              mb="3.8rem"
              ls="1px"
              lHeight="26px"
              size={isResponsiveNormal ? "16px" : "15px"}
              color="#16a092"
            >
              i am available for freelancer work connect with me via phone
              :032219903230 or email: info@tech.com
            </P>
            <form className="position-relative mt-5" action="">
              <InputStyle
                data-aos="fade-up"
                type=""
                placeholder="your name"
                required
              />
              <InputStyle
                data-aos="fade-up"
                type=""
                placeholder="email"
                required
              />
              <InputStyle
                data-aos="fade-up"
                type=""
                placeholder="write a subject"
                required
              />
              <TextAreaStyle
                data-aos="fade-up"
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Your message"
                required
              ></TextAreaStyle>
              <PrimaryBtn
                data-aos="zoom-in"
                hoverBg="transparent"
                hoverTransform="scale(1.1)"
                bg="#16a092"
                weight="700"
                className="btn btn-simision text-white ps-5 pe-5"
                style={{ border: "1px solid #16a092" }}
              >
                Submit
              </PrimaryBtn>
            </form>
          </Wrapper>
          <Wrapper>
            <img
              data-aos="fade-up-left"
              style={{
                maxWidth: "100%",
                borderRadius: "10px",
                marginBottom: isResponsiveLow && "30px",
              }}
              className={isResponsiveLow && "text-center"}
              width={isResponsiveLow ? "100%" : "720px"}
              height="auto"
              src={building}
              alt=""
            />
          </Wrapper>
        </ContactFormStyle>
      </Wrapper>
    </>
  );
};

export default ContactUs;
