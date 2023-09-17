import { apis } from "service";

const COMMON_URL = `http://dev.revoenergy.live:9010/api/station/`;

const API_URLS = { GET_STATION_NEARBY: `${COMMON_URL}near` };

export const getStationNearby = (payload) =>
  apis.get(API_URLS.GET_STATION_NEARBY, {
    ...payload,
    params: { request: "10 ikosi road, lagos", ...payload?.params },
  });
