import React from "react";

const sizeClasses = {
  txtNunitoExtraBold50: "font-extrabold font-nunito",
  txtNunitoExtraBold75: "font-extrabold font-nunito",
  txtNunitoExtraBold40: "font-extrabold font-nunito",
  txtNunitoRegular25: "font-normal font-nunito",
  txtNunitoBold18: "font-bold font-nunito",
  txtNunitoExtraBold22: "font-extrabold font-nunito",
  txtNunitoRegular30: "font-normal font-nunito",
  txtKumbhSansExtraBold64: "font-extrabold font-kumbhsans",
  txtKumbhSansBold24: "font-bold font-kumbhsans",
  txtNunitoRegular20: "font-normal font-nunito",
  txtNunitoRegular22: "font-normal font-nunito",
  txtNunitoBold18DeeppurpleA400: "font-bold font-nunito",
  txtPoppinsExtraBold24: "font-extrabold font-poppins",
  txtNunitoBold40: "font-bold font-nunito",
  txtNunitoBold30: "font-bold font-nunito",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtKumbhSansRegular16: "font-kumbhsans font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
