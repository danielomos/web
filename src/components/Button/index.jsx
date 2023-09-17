import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[37px]" };
const variants = {
  outline: { blue_gray_100: "border border-blue_gray-100 border-solid" },
  fill: {
    gray_900_01: "bg-gray-900_01 text-white-A700",
    deep_orange_600: "bg-deep_orange-600 text-white-A700",
  },
};
const sizes = { xs: "p-[25px] sm:px-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["blue_gray_100", "gray_900_01", "deep_orange_600"]),
};

export { Button };
