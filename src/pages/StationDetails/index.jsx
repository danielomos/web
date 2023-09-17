import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const StationDetailsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins gap-2.5 items-center justify-center mx-auto w-auto sm:w-full md:w-full">
        <Header className="flex md:flex-col flex-row md:gap-10 gap-[150px] items-center justify-center max-w-[1124px] mx-auto md:px-5 py-2.5 w-full" />
        <div className="flex md:flex-col flex-row font-nunito md:gap-10 gap-[93px] items-start justify-center max-w-[1581px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col gap-4 items-center justify-center w-[606px] md:w-full">
            <div className="flex sm:flex-col flex-row gap-3.5 items-center justify-center w-[548px] sm:w-full">
              <div className="bg-white-A700 flex flex-col h-[111px] items-end justify-end p-[19px] rounded-[20px] w-[111px]">
                <Img
                  className="h-[63px] md:h-auto mt-2 object-cover w-[63px]"
                  src="images/img_icon11.png"
                  alt="iconEleven_One"
                />
              </div>
              <Text
                className="md:text-5xl text-[75px] text-center text-gray-900_01 w-auto"
                size="txtNunitoExtraBold75"
              >
                RevoEnergy
              </Text>
            </div>
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-600 w-auto"
              size="txtNunitoRegular30"
            >
              0000.00
            </Text>
          </div>
          <div className="flex flex-1 flex-col gap-[39px] items-center justify-center max-w-[834px] w-full">
            <List
              className="flex flex-col gap-[39px] items-center w-full"
              orientation="vertical"
            >
              <div className="border border-gray-400 border-solid flex flex-1 flex-col items-center justify-start max-w-[833px] md:px-10 sm:px-5 px-[66px] py-[62px] rounded-[30px] w-full">
                <div className="flex flex-col gap-[30px] items-start justify-start max-w-[701px] w-full">
                  <div className="flex flex-col items-start justify-start max-w-[701px] w-full">
                    <div className="flex flex-col gap-[13px] items-start justify-start w-[375px] sm:w-full">
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900_01 w-auto"
                        size="txtNunitoBold30"
                      >
                        Address
                      </Text>
                      <Text
                        className="text-gray-900_01 text-xl w-auto"
                        size="txtNunitoRegular20"
                      >
                        10 ikosi road, lagos
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="border border-deep_orange-600 border-solid sm:px-5 px-[35px] py-6 rounded-[37px] text-gray-900_01 text-lg w-auto"
                    size="txtNunitoBold18"
                  >
                    Direction
                  </Text>
                </div>
              </div>
              <div className="border border-gray-400 border-solid flex flex-1 flex-col items-center justify-start max-w-[833px] md:px-10 sm:px-5 px-[66px] py-[62px] rounded-[30px] w-full">
                <div className="flex flex-col gap-[30px] items-start justify-start max-w-[701px] w-full">
                  <div className="flex flex-col items-start justify-start max-w-[701px] w-full">
                    <div className="flex flex-col gap-[13px] items-start justify-start w-[375px] sm:w-full">
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900_01 w-auto"
                        size="txtNunitoBold30"
                      >
                        Contact Number
                      </Text>
                      <Text
                        className="text-gray-900_01 text-xl w-auto"
                        size="txtNunitoRegular20"
                      >
                        San Francisco, CA{" "}
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="border border-deep_orange-600 border-solid sm:px-5 px-[35px] py-6 rounded-[37px] text-gray-900_01 text-lg w-auto"
                    size="txtNunitoBold18"
                  >
                    Connect
                  </Text>
                </div>
              </div>
            </List>
            <div className="border border-gray-400 border-solid flex flex-col items-center justify-center max-w-[833px] md:px-10 sm:px-5 px-[66px] py-[62px] rounded-[30px] w-full">
              <div className="flex flex-col gap-[46px] items-center justify-center w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-[504px] sm:w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900_01 w-auto"
                    size="txtNunitoExtraBold40"
                  >
                    Request Delivery
                  </Text>
                  <Text
                    className="leading-[157.40%] max-w-[496px] md:max-w-full sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-600"
                    size="txtNunitoRegular25"
                  >
                    Enjoy the convenience of RevoEnrgy Delivery Service
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[428px] sm:min-w-full text-center text-lg"
                  shape="round"
                  color="deep_orange_600"
                  size="xs"
                  variant="fill"
                >
                  Order Gas
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex font-nunito gap-[51px] items-center justify-center px-5 w-full" />
      </div>
    </>
  );
};

export default StationDetailsPage;
