import React from "react";
import imgdetails from "../assets/imgdetails.png";
import { Wrapper, Row, Col, useMediaQuery } from "./Layouts";
import { PrimaryBtn } from "./Buttons";
import { H1 } from "./Typography";
const Details = () => {
  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <Wrapper style={{ background: "#000" }}>
      <Wrapper pt="5rem" className="container">
        <Row>
          <Col md={6}>
            <H1
              ls="3px"
              className={`text-white fw-bold ${isResponsive && "text-center"}`}
            >
              tech
            </H1>
            <Wrapper
              size="22px"
              pt="15px"
              color="#16a092"
              className={isResponsive && "text-center"}
            >
              We are a Creative Agency- By <span className="fw-bold">tech</span>
            </Wrapper>
            <Wrapper
              size="16px"
              color="white"
              pt="20px"
              lh="1.5rem"
              className={isResponsive && "text-center"}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Wrapper>
            <PrimaryBtn
              className={`btn ${
                isResponsive && "d-flex flex-row w-100 justify-content-center"
              }`}
            >
              <a href="#About" className="text-white text-decoration-none">
                About more
              </a>
            </PrimaryBtn>
          </Col>
          <Col md={6}>
            <Wrapper
              mt={isResponsive && "2rem"}
              className="d-flex justify-content-end"
            >
              <img src={imgdetails} alt="" className="w-100 " />
            </Wrapper>
          </Col>
        </Row>
      </Wrapper>
    </Wrapper>
  );
};

export default Details;
