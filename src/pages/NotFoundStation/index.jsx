import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const NotFoundStationPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins gap-2.5 items-center justify-center mx-auto w-auto sm:w-full md:w-full">
        <Header className="flex md:flex-col flex-row md:gap-10 gap-[150px] items-center justify-center max-w-[1124px] mx-auto md:px-5 py-2.5 w-full" />
        <div className="flex flex-col font-nunito items-center justify-center max-w-[845px] md:px-5 w-full">
          <div className="flex flex-col gap-[33px] items-center justify-start max-w-[845px] w-full">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="md:text-5xl text-[75px] text-center text-gray-900_01"
                size="txtNunitoExtraBold75"
              >
                So Sorry
              </Text>
            </div>
            <div className="bg-gray-50 flex flex-col items-center justify-center rounded-[50px] w-auto md:w-full">
              <div className="flex flex-col gap-[41px] items-center justify-start max-w-[781px] w-full">
                <div className="flex flex-col gap-[25px] items-center justify-center max-w-[764px] w-full">
                  <Text
                    className="leading-[110.00%] sm:text-[40px] md:text-[46px] text-[50px] text-center text-gray-900_01"
                    size="txtNunitoExtraBold50"
                  >
                    <>
                      We Are Yet To Deliver to/Cover
                      <br /> Your Area
                    </>
                  </Text>
                  <Text
                    className="leading-[157.40%] max-w-[621px] md:max-w-full text-[22px] text-center text-gray-600 sm:text-lg md:text-xl"
                    size="txtNunitoRegular22"
                  >
                    Stay updated! we want to inform you when we available in
                    your area
                  </Text>
                </div>
                <div className="flex flex-col gap-10 items-center justify-start w-[600px] md:w-full">
                  <Input
                    name="button"
                    placeholder="Enter Your name"
                    className="leading-[normal] lowercase p-0 placeholder:text-gray-600 text-left text-xl w-full"
                    wrapClassName="border border-blue_gray-100 border-solid w-full"
                    type="text"
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  ></Input>
                  <Input
                    name="button_One"
                    placeholder="Enter Your email Address"
                    className="leading-[normal] lowercase p-0 placeholder:text-gray-600 text-left text-xl w-full"
                    wrapClassName="border border-blue_gray-100 border-solid w-full"
                    type="email"
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  ></Input>
                  <Input
                    name="button_Two"
                    placeholder="Enter Your Phone number"
                    className="leading-[normal] lowercase p-0 placeholder:text-gray-600 text-left text-xl w-full"
                    wrapClassName="border border-blue_gray-100 border-solid w-full"
                    type="number"
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  ></Input>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[238px] text-center text-lg"
                    shape="round"
                    color="gray_900_01"
                    size="xs"
                    variant="fill"
                  >
                    Submit Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex font-nunito gap-[51px] items-center justify-center px-5 w-full" />
      </div>
    </>
  );
};

export default NotFoundStationPage;
