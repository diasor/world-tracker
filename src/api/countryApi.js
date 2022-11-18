const COVID_API = "https://api.covid19tracking.narrativa.com/api";

import axios from "axios";
export default {
  getCountryCovidInformation(covidDate) {
    const covidUri = `${COVID_API}?date_from=${covidDate}&date_to=${covidDate}`;
    return axios.get(covidUri);
  },

  getCovidInfo() {
    return axios.get("https://pomber.github.io/covid19/timeseries.json");
  },
};
