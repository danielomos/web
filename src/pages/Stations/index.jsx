import React from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { getStationNearby } from "service/api";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const StationsPage = () => {
  const [nearData, setNearData] = React.useState();
  const location = useLocation();
  const navigate = useNavigate();
  React.useEffect(() => {
    callApi();
  }, []);

  function callApi() {
    const req = { params: { request: location?.state?.address } };

    getStationNearby(req)
      .then((res) => {
        setNearData(res?.data);
      })
      .catch((err) => {
        console.error(err);
        navigate("/notfoundstation", {
          state: { areaAddress: location?.state?.address },
        });
      });
  }

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins gap-[30px] items-center justify-center mx-auto w-auto sm:w-full md:w-full">
        <Header className="flex md:flex-col flex-row md:gap-10 gap-[150px] items-center justify-center max-w-[1124px] mx-auto md:px-5 py-2.5 w-full" />
        <div className="flex flex-col font-kumbhsans items-center justify-center md:px-5 w-auto md:w-full">
          <Text
            className="md:text-5xl text-[64px] text-blue_gray-800 text-center tracking-[-0.64px] w-auto"
            size="txtKumbhSansExtraBold64"
          >
            Gas rates in your area:
          </Text>
        </div>
        <div className="flex flex-col font-nunito items-center justify-start max-w-[1400px] mx-auto md:px-5 w-full">
          <div className="md:gap-5 gap-[41px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
            {nearData?.payload?.map((nearElement, index) => {
              return (
                <React.Fragment key={`nearElement${index}`}>
                  <div className="bg-gray-50 flex flex-1 flex-col items-start justify-start sm:px-5 px-[39px] py-[42px] rounded-[30px] w-full">
                    <div className="flex flex-col md:gap-10 gap-[100px] h-[340px] md:h-auto items-center justify-center w-[361px]">
                      <div className="flex flex-row gap-[26px] items-center justify-start w-[361px]">
                        <div className="bg-white-A700 flex flex-col h-[111px] items-end justify-end p-[19px] rounded-[20px] w-[111px]">
                          <Img
                            className="h-[63px] md:h-auto mt-2 object-cover w-[63px]"
                            alt="iconEleven"
                            src="nearElement?.stationLogoUrl"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-center w-[219px]">
                          <Text
                            className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900_01 w-auto"
                            size="txtNunitoBold40"
                          >
                            {nearElement?.gasPrice}
                          </Text>
                          <Text
                            className="text-[22px] text-center text-gray-600 sm:text-lg md:text-xl w-auto"
                            size="txtNunitoRegular22"
                          >
                            Current Selling Price
                          </Text>
                          <Text
                            className="text-[22px] text-center text-gray-600 sm:text-lg md:text-xl w-auto"
                            size="txtNunitoRegular22"
                          >
                            {nearElement?.distance}
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center w-[361px]">
                        <Text
                          className="common-pointer text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-900_01 underline w-auto"
                          size="txtNunitoBold30"
                          onClick={() =>
                            navigate("/stationdetails", {
                              state: { stationId: nearElement?.id },
                            })
                          }
                        >
                          View Station
                        </Text>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <Footer className="flex font-nunito gap-[51px] items-center justify-center px-5 w-full" />
      </div>
    </>
  );
};

export default StationsPage;
