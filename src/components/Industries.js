import React from "react";
import banking from "../assets/banking.png";
// import eduction from "../assets/education.png";
import technical from "../assets/technical.png";
import hospital from "../assets/hospital.png";
import binance from "../assets/binance.png";
import { Wrapper } from "./Layouts";
import { H2 } from "./Typography";
import styled from "styled-components";
const ColIndus = styled.div`
  padding: 1em;
  margin: 8px;
  background: transparent;
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  color: #fff;
  text-align: center;
  border: var(--primary-color) 2px solid;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const IndustryData = [
  { src: banking, title: "Banking" },

  { src: binance, title: "Markets" },
  {
    src: hospital,
    title: "Education",
  },
  { src: technical, title: "Manufacturing" },

  { src: hospital, title: "Healthcare" },

  { src: banking, title: "Banking" },
];
const Industries = () => {
  return (
    <Wrapper bg="#000">
      <Wrapper className="container">
        <Wrapper
          color="#16a092"
          ls="8px"
          weight="bold"
          pt="3rem"
          className="fs-5 "
        >
          Industries we serves
        </Wrapper>
        <H2 className="text-white">
          Managed IT Services customized for your industry
        </H2>
        <Wrapper className="feature pb-5 ">
          <Wrapper pt="5rem" className="grid">
            <div className="row">
              {IndustryData.map((val, index) => {
                return (
                  <>
                    <div key={index} className="col-lg-2 col-md-4 col-sm-2">
                      <ColIndus>
                        <img src={val.src} alt="" className="w-50" />
                        <h6 className="mt-3">{val.title}</h6>
                      </ColIndus>
                    </div>
                  </>
                );
              })}
            </div>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default Industries;
