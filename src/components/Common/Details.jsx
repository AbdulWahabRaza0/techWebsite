import React from "react";
import imgdetails from "../../assets/imgdetails.png";
import { Wrapper, Row, Col, useMediaQuery, SpanWrapper } from "../Layouts";
import { PrimaryBtn } from "../Buttons";
import { H1 } from "../Typography";
const Details = (props) => {
  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <Wrapper style={{ background: "#000" }} width="100%">
      <Wrapper pt="5rem" className="container">
        <Row className="align-items-center">
          <Col md={6} data-aos="fade-right">
            <H1
              size="45px"
              // weight="100"
              // ls="5px"

              className={`text-white ${isResponsive && "text-center"}`}
            >
              {props.title}
            </H1>
            <Wrapper
              size="32px"
              // pt="5px"
              color="#16a092"
              weight="600"
              className={isResponsive && "text-center"}
            >
              {props.page === "home" && (
                <>
                  {" "}
                  We are a Creative Agency- By{" "}
                  <SpanWrapper weight="600">tech</SpanWrapper>
                </>
              )}
              {props.page === "services" && (
                <>
                  <span className="fw-bold">
                    Web applications, portable applications, mixed undertakings,
                    and then some.350 + projects | Since 2017
                  </span>
                </>
              )}
            </Wrapper>
            {props.page === "home" && (
              <Wrapper
                size="18px"
                color="#bfcdd5"
                pt="10px"
                lh="1.7rem"
                width="90%"
                weight="300"
                // fontFamily="Tinos, serif"
                style={{
                  textJustify: "distribute-all-lines",
                  hyphens: "auto",
                  textAlign: "justify",
                }}
                className={isResponsive && "text-center"}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum hashchhchchc been the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </Wrapper>
            )}
            {props.page === "services" && (
              <>
                <Wrapper
                  color="#bfcdd5"
                  fontFamily="Tinos, serif"
                  lHeight="35px"
                  size="16px"
                  className={`mt-4 ${isResponsive && "ms-4"}`}
                >
                  <li>
                    Advanced tech stack such as
                    Elixir,ruby-on-rails,flutter,kotlin,lonic,mean,python etc{" "}
                  </li>
                  <li>
                    intregration of advanced technologies such as artificial
                    intelligence,big data etc{" "}
                  </li>
                  <li>Daily stand-up meetings with products managers </li>
                  <li>Staffing with 2 weaks </li>
                  <li> try risk free-trial </li>
                </Wrapper>
              </>
            )}

            <PrimaryBtn
              pt="7px"
              pb="7px"
              className={`btn ${
                isResponsive &&
                "d-flex flex-row w-100 justify-content-center mb-5"
              }`}
            >
              <a href="#About" className="text-white text-decoration-none px-4">
                {props.btnName}
              </a>
            </PrimaryBtn>
          </Col>
          <Col md={6} data-aos="fade-left">
            {props.page === "home" && (
              <Wrapper
                mt={isResponsive && "2rem"}
                className="d-flex justify-content-end"
              >
                <img src={imgdetails} alt="" className="w-100 " />
              </Wrapper>
            )}
            {props.page === "services" && (
              <Wrapper
                bg="#16a092"
                className="w-100 p-5 h-100 d-flex justify-content-center align-items-center"
              >
                <div>
                  <h1 className="text-center display-5 fw-bold text-white">
                    GROW YOUR BUSSINESS
                  </h1>
                  <Wrapper
                    fontFamily="Tinos, serif"
                    className="text-center text-white"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Wrapper>
                </div>
              </Wrapper>
            )}
          </Col>
        </Row>
      </Wrapper>
    </Wrapper>
  );
};

export default Details;
