import styled from "styled-components";
const InputStyle = styled.input`
  width: 100%;
  height: ${(props) => (props.height ? props.height : "")};
  padding: 17px;
  border: none;
  outline: none;
  background: #191919;
  color: #fff;
  font-size: 1.1rem;
  margin-bottom: 0.7rem;
  border-radius: 10px;
`;
const TextAreaInputStyle = styled.textarea`
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
export { InputStyle, TextAreaInputStyle };
