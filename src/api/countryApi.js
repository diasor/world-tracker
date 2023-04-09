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

  async otherInfo() {
    // covid data
    // https://public.opendatasoft.com/api/records/1.0/search/?dataset=covid-19-pandemic-worldwide-data&q=&facet=zone&facet=subzone&facet=category&facet=date
    // https://www.who.int/data/gho/info/athena-api-examples#ex10
    const response = await axios.get(
      "https://apps.who.int/gho/athena/api/COUNTRY?format=json"
    );
    console.log("who data", response);
  },
};
