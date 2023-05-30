//typography
import styled from "styled-components";

const H1 = styled.h1`
  @font-face {
    font-family: "Gilroy-Black.eot";
    src: url("../fonts/Gilroy-Black.ttf") format("truetype");
  }
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : "'Gilroy-Black', sans-serif"};
  font-style: normal;
  text-transform: ${(props) => (props.tt ? props.tt : "")};
  font-weight: ${(props) => (props.weight ? props.weight : "")};
  line-height: ${(props) => (props.lHeight ? props.lHeight : "")};
  font-size: ${(props) => (props.size ? props.size : "")};
  color: ${(props) => (props.color ? props.color : "")};
  text-decoration: ${(props) => (props.td ? props.td : "")};
  letter-spacing: ${(props) => (props.ls ? props.ls : "")};
  padding: ${(props) => (props.p ? props.p : "")};
  padding-left: ${(props) => (props.pl ? props.pl : "")};
  padding-right: ${(props) => (props.pr ? props.pr : "")};
  padding-top: ${(props) => (props.pt ? props.pt : "")};
  padding-bottom: ${(props) => (props.pb ? props.pb : "")};
  margin-left: ${(props) => (props.ml ? props.ml : "")};
  margin-right: ${(props) => (props.mr ? props.mr : "")};
  margin-top: ${(props) => (props.mt ? props.mt : "")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "")};
  margin: ${(props) => (props.m ? props.m : "")};
  background: ${(props) => (props.bg ? props.bg : "")};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "")};
`;
const H2 = styled.h2`
  @font-face {
    font-family: "Gilroy-Black.eot";
    src: url("../fonts/Gilroy-Black.ttf") format("truetype");
  }
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : "'Gilroy-Black', sans-serif"};
  font-style: normal;
  text-transform: ${(props) => (props.tt ? props.tt : "")};
  font-weight: ${(props) => (props.weight ? props.weight : "")};
  line-height: ${(props) => (props.lHeight ? props.lHeight : "")};
  font-size: ${(props) => (props.size ? props.size : "")};
  color: ${(props) => (props.color ? props.color : "")};
  text-decoration: ${(props) => (props.td ? props.td : "")};
  letter-spacing: ${(props) => (props.ls ? props.ls : "")};
  padding: ${(props) => (props.p ? props.p : "")};
  padding-left: ${(props) => (props.pl ? props.pl : "")};
  padding-right: ${(props) => (props.pr ? props.pr : "")};
  padding-top: ${(props) => (props.pt ? props.pt : "")};
  padding-bottom: ${(props) => (props.pb ? props.pb : "")};
  margin-left: ${(props) => (props.ml ? props.ml : "")};
  margin-right: ${(props) => (props.mr ? props.mr : "")};
  margin-top: ${(props) => (props.mt ? props.mt : "")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "")};
  margin: ${(props) => (props.m ? props.m : "")};
  background: ${(props) => (props.bg ? props.bg : "")};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "")};
`;
const H3 = styled.h3`
  @font-face {
    font-family: "Gilroy-Black.eot";
    src: url("../fonts/Gilroy-Black.ttf") format("truetype");
  }
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : "'Gilroy-Black', sans-serif"};
  font-style: normal;
  text-transform: ${(props) => (props.tt ? props.tt : "")};
  font-weight: ${(props) => (props.weight ? props.weight : "")};
  line-height: ${(props) => (props.lHeight ? props.lHeight : "")};
  font-size: ${(props) => (props.size ? props.size : "")};
  color: ${(props) => (props.color ? props.color : "")};
  text-decoration: ${(props) => (props.td ? props.td : "")};
  letter-spacing: ${(props) => (props.ls ? props.ls : "")};
  padding: ${(props) => (props.p ? props.p : "")};
  padding-left: ${(props) => (props.pl ? props.pl : "")};
  padding-right: ${(props) => (props.pr ? props.pr : "")};
  padding-top: ${(props) => (props.pt ? props.pt : "")};
  padding-bottom: ${(props) => (props.pb ? props.pb : "")};
  margin-left: ${(props) => (props.ml ? props.ml : "")};
  margin-right: ${(props) => (props.mr ? props.mr : "")};
  margin-top: ${(props) => (props.mt ? props.mt : "")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "")};
  margin: ${(props) => (props.m ? props.m : "")};
  background: ${(props) => (props.bg ? props.bg : "")};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "")};
`;
const H4 = styled.h4`
  @font-face {
    font-family: "Gilroy-Black.eot";
    src: url("../fonts/Gilroy-Black.ttf") format("truetype");
  }
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : "'Gilroy-Black', sans-serif"};
  font-style: normal;
  text-transform: ${(props) => (props.tt ? props.tt : "")};
  font-weight: ${(props) => (props.weight ? props.weight : "")};
  line-height: ${(props) => (props.lHeight ? props.lHeight : "")};
  font-size: ${(props) => (props.size ? props.size : "")};
  color: ${(props) => (props.color ? props.color : "")};
  text-decoration: ${(props) => (props.td ? props.td : "")};
  letter-spacing: ${(props) => (props.ls ? props.ls : "")};
  padding: ${(props) => (props.p ? props.p : "")};
  padding-left: ${(props) => (props.pl ? props.pl : "")};
  padding-right: ${(props) => (props.pr ? props.pr : "")};
  padding-top: ${(props) => (props.pt ? props.pt : "")};
  padding-bottom: ${(props) => (props.pb ? props.pb : "")};
  margin-left: ${(props) => (props.ml ? props.ml : "")};
  margin-right: ${(props) => (props.mr ? props.mr : "")};
  margin-top: ${(props) => (props.mt ? props.mt : "")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "")};
  margin: ${(props) => (props.m ? props.m : "")};
  background: ${(props) => (props.bg ? props.bg : "")};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "")};
`;
const H5 = styled.h5`
  @font-face {
    font-family: "Gilroy-Black.eot";
    src: url("../fonts/Gilroy-Black.ttf") format("truetype");
  }
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : "'Gilroy-Black', sans-serif"};
  font-style: normal;
  text-transform: ${(props) => (props.tt ? props.tt : "")};
  font-weight: ${(props) => (props.weight ? props.weight : "")};
  line-height: ${(props) => (props.lHeight ? props.lHeight : "")};
  font-size: ${(props) => (props.size ? props.size : "")};
  color: ${(props) => (props.color ? props.color : "")};
  text-decoration: ${(props) => (props.td ? props.td : "")};
  letter-spacing: ${(props) => (props.ls ? props.ls : "")};
  padding: ${(props) => (props.p ? props.p : "")};
  padding-left: ${(props) => (props.pl ? props.pl : "")};
  padding-right: ${(props) => (props.pr ? props.pr : "")};
  padding-top: ${(props) => (props.pt ? props.pt : "")};
  padding-bottom: ${(props) => (props.pb ? props.pb : "")};
  margin-left: ${(props) => (props.ml ? props.ml : "")};
  margin-right: ${(props) => (props.mr ? props.mr : "")};
  margin-top: ${(props) => (props.mt ? props.mt : "")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "")};
  margin: ${(props) => (props.m ? props.m : "")};
  background: ${(props) => (props.bg ? props.bg : "")};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "")};
`;
const H6 = styled.h6`
  @font-face {
    font-family: "Gilroy-Black.eot";
    src: url("../fonts/Gilroy-Black.ttf") format("truetype");
  }
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : "'Gilroy-Black', sans-serif"};
  font-style: normal;
  text-transform: ${(props) => (props.tt ? props.tt : "")};
  font-weight: ${(props) => (props.weight ? props.weight : "")};
  line-height: ${(props) => (props.lHeight ? props.lHeight : "")};
  font-size: ${(props) => (props.size ? props.size : "")};
  color: ${(props) => (props.color ? props.color : "")};
  text-decoration: ${(props) => (props.td ? props.td : "")};
  letter-spacing: ${(props) => (props.ls ? props.ls : "")};
  padding: ${(props) => (props.p ? props.p : "")};
  padding-left: ${(props) => (props.pl ? props.pl : "")};
  padding-right: ${(props) => (props.pr ? props.pr : "")};
  padding-top: ${(props) => (props.pt ? props.pt : "")};
  padding-bottom: ${(props) => (props.pb ? props.pb : "")};
  margin-left: ${(props) => (props.ml ? props.ml : "")};
  margin-right: ${(props) => (props.mr ? props.mr : "")};
  margin-top: ${(props) => (props.mt ? props.mt : "")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "")};
  margin: ${(props) => (props.m ? props.m : "")};
  background: ${(props) => (props.bg ? props.bg : "")};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "")};
`;
const P = styled.p`
  @font-face {
    font-family: "Gilroy-Black.eot";
    src: url("../fonts/Gilroy-Black.ttf") format("truetype");
  }
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : "'Gilroy-Black', sans-serif"};
  font-style: normal;
  text-transform: ${(props) => (props.tt ? props.tt : "")};
  font-weight: ${(props) => (props.weight ? props.weight : "")};
  line-height: ${(props) => (props.lHeight ? props.lHeight : "18px")};
  font-size: ${(props) => (props.size ? props.size : "16px")};
  color: ${(props) => (props.color ? props.color : "")};
  text-decoration: ${(props) => (props.td ? props.td : "")};
  letter-spacing: ${(props) => (props.ls ? props.ls : "")};
  padding: ${(props) => (props.p ? props.p : "")};
  padding-left: ${(props) => (props.pl ? props.pl : "")};
  padding-right: ${(props) => (props.pr ? props.pr : "")};
  padding-top: ${(props) => (props.pt ? props.pt : "")};
  padding-bottom: ${(props) => (props.pb ? props.pb : "")};
  margin-left: ${(props) => (props.ml ? props.ml : "")};
  margin-right: ${(props) => (props.mr ? props.mr : "")};
  margin-top: ${(props) => (props.mt ? props.mt : "")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "")};
  margin: ${(props) => (props.m ? props.m : "")};
  background: ${(props) => (props.bg ? props.bg : "")};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "")};
`;
export { H1, H2, H3, H4, H5, H6, P };
