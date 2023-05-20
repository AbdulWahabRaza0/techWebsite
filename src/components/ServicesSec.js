import React from "react";
import blockchain from "../assets/blockchain.png";
import ai from "../assets/ai.png";
import datasci from "../assets/datasci.png";
import devops from "../assets/devops.png";
import iot from "../assets/iot.png";
import ecommerce from "../assets/ecommerce.png";
import { Wrapper, useMediaQuery, Card } from "./Layouts";
import { H2, H3, P } from "./Typography";
import styled from "styled-components";
const SectionStyle = styled.section`
  width: 100%;
  display: grid;
  place-items: center;
  background: #000;
  padding: ${(props) => (props.p ? props.p : "")};
`;

const CardsData = [
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
const ServicesSec = (props) => {
  const isResponsive = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const isResponsiveMore = useMediaQuery({
    query: "(min-width: 992px)",
  });
  return (
    <>
      <SectionStyle p={isResponsive && "0 2rem"}>
        <Wrapper pt="5rem" className="container">
          {props.heading && (
            <>
              <Wrapper
                width="100%"
                className="d-flex flex-wrap justify-content-center"
              >
                <H2 ls="3vpx" className="text-center text-white fw-bold fs-1 ">
                  {" "}
                  What we do ?
                </H2>
                <div className="what d-flex justify-content-center mt-4">
                  <P size="17px" color="white" className=" w-75 text-center">
                    We hire top 5% of the available talent, and provide you with
                    technically proficient and motivated team members for the
                    following technologies on staff augomentation model.
                  </P>
                </div>
              </Wrapper>
            </>
          )}
          <Wrapper className="d-flex flex-wrap pt-5">
            {CardsData.map((val, index) => {
              return (
                <>
                  <Wrapper
                    key={index}
                    maxW={
                      (isResponsiveMore && "0 0 33.33%") ||
                      (isResponsive && "50%")
                    }
                    flex={
                      (isResponsiveMore && " 33.33%") ||
                      (isResponsive && "0 50%")
                    }
                    width={!isResponsive && !isResponsiveMore && "100%"}
                    p="0 1em 1em 1em"
                    className="text-center"
                  >
                    <Card>
                      <div className="icon-wrapper">
                        <img src={val.src} alt="" style={{ width: "63px" }} />
                      </div>
                      <H3
                        size="20px"
                        weight="600"
                        color="white"
                        margin="1rem 0"
                        ls="3px"
                        className="text-white"
                      >
                        {val.title}
                      </H3>
                      <P
                        className="text-white"
                        color="white"
                        size="15px"
                        lHeight="1.6"
                        ls="0.03em"
                      >
                        {val.desc}
                      </P>
                    </Card>
                  </Wrapper>
                </>
              );
            })}
          </Wrapper>
        </Wrapper>
      </SectionStyle>
    </>
  );
};

export default ServicesSec;
