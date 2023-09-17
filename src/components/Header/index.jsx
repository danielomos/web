import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

import { handleSectionNavigation } from "utils";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[7px] items-center justify-center w-[312px]">
          <Img
            className="h-[63px] md:h-auto object-cover w-[63px]"
            src="images/img_icon11.png"
            alt="iconEleven"
          />
          <Text
            className="common-pointer text-2xl md:text-[22px] text-deep_orange-600 sm:text-xl w-[151px]"
            size="txtPoppinsExtraBold24"
            onClick={() => navigate("/home1")}
          >
            <span className="text-gray-900 font-poppins text-left font-extrabold">
              Revo{" "}
            </span>
            <span className="text-deep_orange-600 font-poppins text-left font-semibold">
              Energy
            </span>
          </Text>
        </div>
        <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-center w-auto sm:w-full">
          <div className="bg-gray-50 flex flex-row gap-2.5 items-center justify-center md:px-10 sm:px-5 px-[52px] py-6 rounded-[37px] w-auto">
            <Text
              className="common-pointer text-gray-900_01 text-lg w-auto"
              size="txtPoppinsMedium18"
              onClick={() => navigate("/home1")}
            >
              <span className="text-gray-900_01 font-nunito text-left font-semibold">
                Home
              </span>
              <span className="text-gray-900_01 font-jost text-left font-normal">
                
              </span>
              <span className="text-gray-900_01 font-poppins text-left font-medium">
                {" "}
              </span>
            </Text>
            <Text
              className="common-pointer text-gray-900_01 text-lg w-auto"
              size="txtPoppinsMedium18"
              onClick={() => {
                handleSectionNavigation("block2");
              }}
            >
              <span className="text-gray-900_01 font-nunito text-left font-semibold">
                Our Story
              </span>
              <span className="text-gray-900_01 font-jost text-left font-normal">
                
              </span>
              <span className="text-gray-900_01 font-poppins text-left font-medium">
                {" "}
              </span>
            </Text>
            <Text
              className="common-pointer text-gray-900_01 text-lg w-auto"
              size="txtPoppinsMedium18"
              onClick={() => {
                handleSectionNavigation("block1");
              }}
            >
              <span className="text-gray-900_01 font-nunito text-left font-semibold">
                Contact
              </span>
              <span className="text-gray-900_01 font-jost text-left font-normal">
                
              </span>
              <span className="text-gray-900_01 font-poppins text-left font-medium">
                {" "}
              </span>
            </Text>
          </div>
          <Button
            className="cursor-pointer font-bold font-nunito leading-[normal] min-w-[206px] text-center text-lg"
            shape="round"
            color="deep_orange_600"
            size="xs"
            variant="fill"
          >
            Get Started
          </Button>
        </div>
      </div>
    </>
  );
};

Header.defaultProps = {};

export default Header;
