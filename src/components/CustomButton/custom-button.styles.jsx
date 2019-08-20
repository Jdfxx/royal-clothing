import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid white;

    &:hover {
      background-color: black;
      color: white;
      border: 1px solid black;
    }
`;

const googleSignInButtonStyle = css`
     background-color:  #4285f4;
     color: white;

     &:hover {
        background-color: #357ae8;
        border: none;
     }
`;

const getButtonStyle = props => {
  if (props.isGoogleSignIn) {
    return googleSignInButtonStyle;
  }
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;

  &:disabled {
    background-color: #4a4a4a;
    cursor: not-allowed;
  }
  ${getButtonStyle}  
`;
