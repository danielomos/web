import React, { useEffect, useRef, useState } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const Home1Page = () => {
  const navigate = useNavigate();
  const addressInputRef = useRef(null);
  const [enteredAddress, setEnteredAddress] = useState(""); // State to store entered address

  useEffect(() => {
    if (addressInputRef.current) {
      const autocomplete = new window.google.maps.places.Autocomplete(
        addressInputRef.current
      );

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        const formattedAddress = place.formatted_address || "";
        setEnteredAddress(formattedAddress); // Update the entered address state
      });
    }
  }, []);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins gap-2.5 items-center justify-center mx-auto w-auto sm:w-full md:w-full">
        <Header className="flex md:flex-col flex-row md:gap-10 gap-[150px] items-center justify-center max-w-[1124px] mx-auto md:px-5 py-2.5 w-full" />
        <div className="flex md:flex-col flex-row font-nunito gap-12 items-center justify-center max-w-[1158px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start w-[54%] md:w-full">
            <div className="flex flex-col gap-12 items-center justify-center w-[615px] md:w-full">
              <div className="flex flex-col items-center justify-center w-auto md:w-full">
                <Text
                  className="leading-[110.00%] md:text-5xl text-[75px] text-gray-900_01"
                  size="txtNunitoExtraBold75"
                >
                  <span className="text-gray-900_01 font-nunito text-left font-extrabold">
                    Gas prices{" "}
                  </span>
                  <span className="text-gray-900_01 font-nunito text-left font-normal">
                    <>
                      in your
                      <br />
                    </>
                  </span>
                  <span className="text-gray-900_01 font-nunito text-left font-extrabold">
                    neighborhood{" "}
                  </span>
                  <span className="text-gray-900_01 font-nunito text-left font-normal">
                    <>
                      in
                      <br />
                    </>
                  </span>
                  <span className="text-gray-900_01 font-nunito text-left font-extrabold">
                    <>
                      less than a <br />
                      minute
                    </>
                  </span>
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-[98%] md:w-full">
                <div className="flex flex-col gap-10 items-center justify-start w-[600px] md:w-full">
                  <Input
                    name="searchaddressa"
                    placeholder="Enter Your address"
                    className="leading-[normal] lowercase p-0 placeholder:text-gray-600 text-left text-xl w-full"
                    wrapClassName="border border-blue_gray-100 border-solid w-full"
                    ref={addressInputRef}
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  ></Input>
                  <Button
                    className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[235px] text-center text-lg"
                    onClick={() =>
                      navigate("/stations", {
                        state: { address: enteredAddress }, // Pass the entered address
                      })
                    }
                    shape="round"
                    color="gray_900_01"
                    size="xs"
                    variant="fill"
                  >
                    Search Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Img
            className="sm:flex-1 h-[500px] md:h-auto object-cover rounded-[15px] w-[500px] sm:w-full"
            src="images/img_image2.png"
            alt="imageTwo"
          />
        </div>
        <div className="flex flex-col font-kumbhsans gap-5 h-[760px] md:h-auto items-center justify-center max-w-[1324px] mx-auto md:px-5 w-full">
          <div className="h-20 relative w-[639px] md:w-full">
            <div className="absolute bg-white-A700 h-14 inset-x-[0] mx-auto top-[6%] w-full"></div>
            <Text
              className="absolute h-full inset-[0] m-auto md:text-5xl text-[64px] text-blue_gray-800 text-center tracking-[-0.64px] w-max"
              size="txtKumbhSansExtraBold64"
            >
              Our Story
            </Text>
          </div>
          <div
            className="flex md:flex-col flex-row gap-[47px] items-center justify-center max-w-[1323px] w-full"
            id="block2"
          >
            <div className="flex sm:flex-1 flex-col items-center justify-start w-[388px] sm:w-full">
              <div className="flex flex-col gap-[45px] items-center justify-start w-[388px] sm:w-full">
                <div className="flex flex-col font-kumbhsans gap-[23px] items-center justify-start w-[388px] sm:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900_02 sm:text-xl tracking-[-0.72px] w-auto"
                    size="txtKumbhSansBold24"
                  >
                    Who we are?
                  </Text>
                  <Text
                    className="leading-[24.00px] max-w-[388px] md:max-w-full text-base text-blue_gray-700 text-center tracking-[-0.32px]"
                    size="txtKumbhSansRegular16"
                  >
                    Placing an order for a gas refill should not be a challenge.
                    Provide your location, choose a gas station and select your
                    preferred payment option.
                  </Text>
                </div>
                <a
                  href="javascript:"
                  className="text-gray-900_01 text-lg underline w-auto"
                >
                  <Text size="txtNunitoBold18">Learn More</Text>
                </a>
              </div>
            </div>
            <div className="bg-gray-50 flex md:flex-1 flex-col items-center justify-center p-8 sm:px-5 rounded-[40px] w-[35%] md:w-full">
              <div className="flex flex-col gap-[45px] items-center justify-start my-[198px] w-[388px] sm:w-full">
                <div className="flex flex-col font-kumbhsans gap-[23px] items-center justify-start w-[388px] sm:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-center text-gray-900_02 sm:text-xl tracking-[-0.72px] w-auto"
                    size="txtKumbhSansBold24"
                  >
                    What we do?
                  </Text>
                  <Text
                    className="leading-[24.00px] max-w-[388px] md:max-w-full text-base text-blue_gray-700 text-center tracking-[-0.32px]"
                    size="txtKumbhSansRegular16"
                  >
                    Don’t make the trip to the gas station and back just to get
                    a refill. We will take care of pick-up and delivery so you
                    can do more with your time.
                  </Text>
                </div>
                <a
                  href="javascript:"
                  className="text-deep_purple-A400 text-lg underline w-auto"
                >
                  <Text size="txtNunitoBold18DeeppurpleA400">Learn More</Text>
                </a>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start w-[30%] md:w-full">
              <div className="flex flex-col gap-[45px] items-center justify-start w-[388px] sm:w-full">
                <div className="flex flex-col font-kumbhsans gap-[23px] items-center justify-start w-[388px] sm:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-center text-gray-900_02 sm:text-xl tracking-[-0.72px] w-auto"
                    size="txtKumbhSansBold24"
                  >
                    What we see?
                  </Text>
                  <Text
                    className="leading-[24.00px] max-w-[388px] md:max-w-full text-base text-blue_gray-700 text-center tracking-[-0.32px]"
                    size="txtKumbhSansRegular16"
                  >
                    Worried that your gas refill won’t last long? Use our smart
                    meter to monitor your gas usage. We’ll be right there before
                    you pause your adventure.
                  </Text>
                </div>
                <a
                  href="javascript:"
                  className="text-gray-900_01 text-lg underline w-auto"
                >
                  <Text size="txtNunitoBold18">Learn More</Text>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex font-nunito gap-[51px] items-center justify-center px-5 w-full" />
      </div>
    </>
  );
};

export default Home1Page;
