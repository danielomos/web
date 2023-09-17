import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col gap-[51px] items-center justify-center w-full">
          <footer className="flex items-center justify-center md:px-10 sm:px-5 px-[50px] w-full">
            <div className="flex flex-col md:gap-10 gap-[153px] items-center justify-center w-full">
              <Line className="bg-gray-300 h-px w-[96%]" />
              <div className="flex md:flex-col flex-row gap-[58px] items-center justify-center max-w-[1473px] w-full">
                <div className="flex flex-col gap-9 items-center justify-center w-[366px]">
                  <div className="flex flex-col gap-[26px] items-start justify-start w-[366px]">
                    <div className="flex flex-row gap-[9px] h-[89px] md:h-auto items-center justify-center w-auto">
                      <Img
                        className="h-[63px] md:h-auto object-cover w-[78px]"
                        src="images/img_icon11.png"
                        alt="iconEleven_One"
                      />
                      <Text
                        className="text-2xl md:text-[22px] text-deep_orange-600 sm:text-xl w-[151px]"
                        size="txtPoppinsExtraBold24"
                      >
                        <span className="text-gray-900 font-poppins text-left font-extrabold">
                          Revo{" "}
                        </span>
                        <span className="text-deep_orange-600 font-poppins text-left font-semibold">
                          Energy
                        </span>
                      </Text>
                    </div>
                    <Text
                      className="leading-[157.40%] text-[22px] text-gray-600 sm:text-lg md:text-xl"
                      size="txtNunitoRegular22"
                    >
                      <>
                        It is a long established fact that from
                        <br />
                        will be distracted by the readable <br />
                        from when looking.
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[18px] items-start justify-start w-[293px]">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col justify-start w-full">
                        <div className="flex flex-row gap-[17px] items-end justify-start w-[87%] md:w-full">
                          <Img
                            className="h-[22px] my-1 w-[22px]"
                            src="images/img_mail.svg"
                            alt="mail"
                          />
                          <Text
                            className="text-[22px] text-gray-600 sm:text-lg md:text-xl"
                            size="txtNunitoRegular22"
                          >
                            help@revoenergy.live
                          </Text>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[39px] mt-0.5 text-[22px] text-gray-600 sm:text-lg md:text-xl"
                          size="txtNunitoRegular22"
                        >
                          conatact@revoenergy.live
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 items-end justify-start w-[76%] md:w-full">
                      <Img
                        className="h-[22px] mt-[7px] w-[22px]"
                        src="images/img_call.svg"
                        alt="call"
                      />
                      <Text
                        className="text-[22px] text-gray-600 sm:text-lg md:text-xl"
                        size="txtNunitoRegular22"
                      >
                        +2347046339841
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-1 flex-col gap-8 items-start justify-center w-[416px] sm:w-full">
                  <div className="flex flex-col items-center justify-center w-[397px] sm:w-full">
                    <Text
                      className="capitalize text-deep_purple-A400 text-lg w-auto"
                      size="txtNunitoBold18DeeppurpleA400"
                    >
                      Download
                    </Text>
                  </div>
                  <div className="flex flex-col gap-4 items-center justify-center w-[416px] sm:w-full">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[200px]"
                      leftIcon={
                        <Img
                          className="mb-[3px] mr-[9px]"
                          src="images/img_apple_logo.svg"
                          alt="Apple Logo"
                        />
                      }
                      shape="round"
                      color="deep_orange_600"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-bold font-nunito leading-[normal] text-left text-lg">
                        App Store
                      </div>
                    </Button>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[200px]"
                      leftIcon={
                        <div className="mt-[3px] mb-1.5 mr-2 bg-gray-900_01">
                          <Img src="images/img_location.svg" alt="location" />
                        </div>
                      }
                      shape="round"
                      color="blue_gray_100"
                      size="xs"
                      variant="outline"
                    >
                      <div className="!text-gray-900_01 font-bold font-nunito leading-[normal] text-left text-lg">
                        Play Store
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="bg-gray-50 flex sm:flex-1 flex-col items-center justify-start sm:px-5 px-[37px] py-[65px] rounded-[50px] w-[526px] sm:w-full">
                  <div className="flex flex-col gap-10 items-center justify-start w-[500px] sm:w-full">
                    <Text
                      className="leading-[157.40%] max-w-[397px] md:max-w-full text-[22px] text-center text-gray-900_01 sm:text-lg md:text-xl"
                      size="txtNunitoExtraBold22"
                    >
                      Keep up wth safety/cooking tips gist from us
                    </Text>
                    <Input
                      name="button"
                      placeholder="Enter Your Password"
                      className="font-nunito leading-[normal] lowercase p-0 placeholder:text-gray-600 text-left text-xl w-full"
                      wrapClassName="border border-blue_gray-100 border-solid w-full"
                      shape="round"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    ></Input>
                    <Button
                      className="cursor-pointer font-bold font-nunito leading-[normal] min-w-[238px] text-center text-lg"
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
          </footer>
          <div className="flex flex-col gap-[35px] items-center justify-start max-w-[1401px] w-full">
            <Line className="bg-gray-300 h-px w-full" />
            <div className="flex sm:flex-col flex-row md:gap-10 gap-[582px] items-center justify-start max-w-[1401px] w-full">
              <Text
                className="text-[22px] text-gray-600 sm:text-lg md:text-xl w-auto"
                size="txtNunitoRegular22"
              >
                Copyright © RevoEnergy Africa
              </Text>
              <div className="flex flex-row gap-[25px] items-center justify-end w-[138px]">
                <Img
                  className="h-[21px] w-3"
                  src="images/img_facebook.svg"
                  alt="facebook"
                />
                <Img
                  className="h-[21px] w-[18px]"
                  src="images/img_twitter.svg"
                  alt="twitter"
                />
                <Img
                  className="h-[21px] w-4"
                  src="images/img_linkedin.svg"
                  alt="linkedin"
                />
                <Img
                  className="h-[22px] w-[17px]"
                  src="images/img_instagram.svg"
                  alt="instagram"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
