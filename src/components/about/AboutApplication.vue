<template>
  <div class="mx-4 mt-3">
    <p>
      This application provides the list of the world countries. It allows the
      user to search for countries and regions. For each country, the user can
      check the country's information:
    </p>

    <h4>Information</h4>
    <ul>
      <li>capital</li>
      <li>region and subregion)</li>
      <li>population and area</li>
      <li>flag</li>
      <li>languages</li>
      <li>borders</li>
    </ul>

    <h4>Map</h4>
    <p>
      The application shows an interactive map of the country. Also the
      application shows a set of historical population data per country. The
      source for this data is
      <a
        href="https://worldpopulationreview.com/country-rankings/country-codes"
      >
        World population review
      </a>
      and
      <a href="https://population.un.org/wpp/DataSources/">UN Nations</a>
    </p>

    <h4>COVID19 Information</h4>
    <p>
      The application is connected to an API that has online information about
      COVID19 development per country. This information can be found on the main
      grid per country but also there is a full tab of COVID information on each
      country page.
    </p>

    <h4>COVID19 Overview</h4>
    <p>
      The application also shows an overview of the 10 countries which have had
      more COVID cases reported so far.
    </p>

    <h4>Tools & technologies</h4>
    <b-badge pill variant="secondary" class="mr-3">Vue</b-badge>
    <b-badge pill variant="secondary" class="mr-1">Vuex</b-badge>
    <b-badge pill variant="secondary" class="mr-1">Vue Router</b-badge>
    <b-badge pill variant="secondary" class="mr-1">Bootstrap Vue</b-badge>
    <b-badge pill variant="secondary" class="mr-1">VueLayers</b-badge>
    <b-badge pill variant="secondary" class="mr-1">VueChartJs</b-badge>
    <b-badge pill variant="secondary" class="mr-1">REST Country API</b-badge>
  </div>
</template>

<style lang="scss" scoped>
h4 {
  font-family: "Roboto-Bold" !important;
  font-size: 1rem;
}

.about-container {
  max-width: 80% !important;
  width: 80% !important;
  display: flex;
  justify-content: center;
}

span.badge {
  margin-right: 0.3rem;
  margin-bottom: 1rem;
}
</style>
