import React, {memo} from "react";
import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = props => {
  return (
    <CustomButtonContainer {...props}>{props.children}</CustomButtonContainer>
  );
};

export default memo(CustomButton);
