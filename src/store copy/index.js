import Vue from "vue";
import Vuex from "vuex";
import { find, map } from "lodash";
import api from "@/api/countryApi";
import countryList from "./data/countryList.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countryList: [],
    currentCountry: {
      name: "",
      officialName: "",
      cca2: "",
      capital: "",
      region: "",
      subregion: "",
      languages: {},
      latlng: [],
      borders: [],
      callingCodes: "",
      currencies: [],
      flag: "",
      cioc: "",
    },
    currentCountryPopulation: {
      cca2: "",
      name: "",
      pop2021: "",
      pop2020: "",
      pop2050: "",
      pop2030: "",
      pop2019: "",
      pop2015: "",
      pop2010: "",
      pop2000: "",
      pop1990: "",
      pop1980: "",
      pop1970: "",
      area: 0,
      density: "0",
      growthRate: "0",
      worldPercentage: "",
      rank: 0,
    },
    mostCOVIDInfectedCountries: [],
    covidDate: "",
  },

  getters: {
    allCountries: (state) => state.countryList,
    currentCountry: (state) => state.currentCountry,
    mostCOVIDInfectedCountries: (state) => state.mostCOVIDInfectedCountries,
    getCountryByCode: (state) => (code) =>
      find(state.countryList, (country) => country.cioc === code),
    currentPopulation: (state) => state.currentCountryPopulation,
    covidDate: (state) => state.covidDate,
  },

  mutations: {
    SET_COUNTRY_LIST(state, countries) {
      state.countryList = countries;
    },

    SET_CURRENT_COUNTRY(state, country) {
      state.currentCountry = { ...country };
    },

    SET_CURRENT_COUNTRY_POPULATION(state, countryPopulation) {
      state.currentCountryPopulation = { ...countryPopulation };
    },

    SET_MOST_INFECTED_LIST(state, countries) {
      state.mostCOVIDInfectedCountries = countries;
    },

    SET_COVID_DATE(state, covidDate) {
      state.covidDate = covidDate;
    },
  },

  actions: {
    async fetchCountries({ state, commit }) {
      if (state.countryList.length === 0) {
        const covidDate = new Date().toISOString().split("T")[0];
        const countries = map(countryList, (iterCountry) => {
          const currencies = [];
          const noData = "No data available";
          Object.values(iterCountry.currencies).forEach((entry) =>
            currencies.push(entry)
          );
          return {
            name: iterCountry.name.common,
            officialName: iterCountry.name.official,
            cca2: iterCountry.cca2,
            capital: iterCountry.capital[0],
            region: iterCountry.region ? iterCountry.region : noData,
            subregion: iterCountry.subregion ? iterCountry.subregion : noData,
            languages: { ...iterCountry.languages },
            latlng: iterCountry.latlng,
            borders: [...iterCountry.borders],
            callingCodes: iterCountry.callingCodes[0],
            currencies,
            flag: iterCountry.flag,
            cioc: iterCountry.cioc,
          };
        });
        commit("SET_COUNTRY_LIST", countries);

        try {
          const covidResponse = await api.getCountryCovidInformation(covidDate);
          const countriesWithCovidInformation = map(
            countries,
            (iterCountry) => {
              let covidDataByDates = covidResponse.data.dates[covidDate];
              let covidCountry = covidDataByDates.countries[iterCountry.name];
              const noCovidData = covidCountry === undefined;
              return {
                todayConfirmed: noCovidData ? -1 : covidCountry.today_confirmed,
                newConfirmed: noCovidData
                  ? -1
                  : covidCountry.today_new_confirmed,
                newConfirmedFormat: noCovidData
                  ? "No Data"
                  : covidCountry.today_new_confirmed.toLocaleString(),
                todayDeaths: noCovidData ? -1 : covidCountry.today_deaths,
                todayDeathsFormat: noCovidData
                  ? "No Data"
                  : covidCountry.today_deaths.toLocaleString(),
                openCases: noCovidData
                  ? "No Data"
                  : covidCountry.today_open_cases.toLocaleString(),
                todayRecovered: noCovidData
                  ? " No data"
                  : covidCountry.today_recovered.toLocaleString(),
                source: noCovidData ? "No Data" : covidCountry.source,
                ...iterCountry,
              };
            }
          );
          commit("SET_COUNTRY_LIST", countriesWithCovidInformation);
          commit("SET_COVID_DATE", covidDate);
          return countriesWithCovidInformation;
        } catch (error) {
          throw new Error(
            "The COVID 19 data service has failed. Please try again later."
          );
        }
      }
    },

    async setCurrentCountry({ state, commit, dispatch }, code) {
      if (state.countryList.length === 0) {
        await dispatch("fetchCountries");
      }
      const country = find(state.countryList, (item) => item.cca2 === code);
      commit("SET_CURRENT_COUNTRY", country);

      const populationFileName = `./data/${country.cioc}.json`;
      const countryPopulation = await import(`${populationFileName}`);
      commit("SET_CURRENT_COUNTRY_POPULATION", countryPopulation);
    },

    async generateMostInfected({ state, commit, dispatch }) {
      let countryList;
      if (state.countryList.length === 0) {
        await dispatch("fetchCountries");
        countryList = filterAndOrderInfected(state.countryList);
      }
      countryList = filterAndOrderInfected(state.countryList);
      commit("SET_MOST_INFECTED_LIST", countryList);
    },
  },
});

function filterAndOrderInfected(countries) {
  const countryList = countries
    .filter((country) => country.todayConfirmed !== 0)
    .sort((c1, c2) =>
      c1.todayConfirmed > c2.todayConfirmed
        ? -1
        : c2.todayConfirmed > c1.todayConfirmed
        ? 1
        : 0
    )
    .slice(0, 9);
  return countryList;
}
