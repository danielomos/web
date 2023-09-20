import React from "react";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const CustomLoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <ClipLoader css={override} size={150} color={"#123abc"} loading={true} />
    </div>
  );
};

export default CustomLoadingSpinner;

