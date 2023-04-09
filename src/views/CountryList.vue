<template>
  <b-container class="country-list-container" fluid>
    <b-form-input
      v-model="search"
      type="text"
      placeholder="Search"
      class="mt-3"
    />
    <b-table
      v-if="loadTable"
      hover
      small
      caption-top
      responsive
      :fields="fields"
      :items="filteredCountries"
      :current-page="currentPage"
      :per-page="perPage"
      class="elevation-1"
      show-empty
      @row-clicked="viewCountry"
      @filtered="onFiltered"
    >
    </b-table>
    <div class="d-flex justify-content-end">
      <b-pagination
        v-model="currentPage"
        pills
        :total-rows="rowCount"
        :per-page="perPage"
        size="sm"
      />
    </div>

    <b-alert
      :show="showAlert"
      border="top"
      class="mt-3"
      colored-border
      :variant="alertType"
      elevation="2"
      transition="scale-transition"
      dismissible
      @dismissed="closeAlert"
    >
      {{ alertMessage }}
    </b-alert>
  </b-container>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { filter } from "lodash";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const store = useStore();
const router = useRouter();

// table
const fields = [
  {
    key: "cca2",
    label: "Code",
    sortable: true,
    sortDirection: "desc",
  },
  {
    key: "flag",
    label: "Flag",
    sortable: false,
    sortDirection: "desc",
  },
  {
    key: "name",
    label: "Name",
    sortable: true,
    sortDirection: "desc",
  },
  {
    key: "region",
    label: "Region",
    sortable: false,
  },
  {
    key: "capital",
    label: "Capital",
    sortable: false,
  },
  {
    key: "callingCodes",
    label: "Phone prefix",
    sortable: false,
  },
];
let search = ref(null);
let currentPage = ref(0);
let perPage = ref(10);

// alerts
let alertType = ref("success");
let alertMessage = ref("");
let showAlert = ref(false);

const closeAlert = () => {
  alertMessage.value = "";
  showAlert.value = false;
  alertType.value = "success";
};

// countries
const countries = computed(() => store.getters.allCountries || []);
const filteredCountries = computed(() => {
  const searchData = search.value === null ? "" : search.value.toLowerCase();
  if (!countries.value.length) {
    return [];
  }
  return searchData === ""
    ? countries.value
    : filter(countries.value, (country) => {
        const name = country.name ? country.name.toLowerCase() : "";
        const region = country.region ? country.region.toLowerCase() : "";
        const capital = country.capital ? country.capital.toLowerCase() : "";
        const flag = country.flag ? country.flag.toLowerCase() : "";
        return (
          name.includes(searchData) ||
          region.includes(searchData) ||
          capital.includes(searchData) ||
          flag.includes(searchData)
        );
      });
});
const rowCount = computed(() => filteredCountries.value.length);

const loadTable = computed(
  () => countries.value !== null && countries.value !== {}
);

onMounted(async () => {
  try {
    await store.dispatch("fetchCountries");
    currentPage.value = 1;
  } catch (error) {
    alertMessage.value = error;
    showAlert.value = true;
    alertType.value = "danger";
  }
});

const onFiltered = () => {
  currentPage.value = 1;
};

const viewCountry = async (country) => {
  if (!country) return;
  await store.dispatch("setCurrentCountry", country.cca2);
  router.push({ path: `/country/${country.cca2}` });
};
</script>

<style lang="scss">
@import "@/assets/colors.scss";

.country-list-container {
  max-width: 90%;
  margin: 1rem 6rem;
  border: 1px solid lightgray;
  border-radius: 10px;

  th {
    font-family: "Roboto-Bold-Italic" !important;
    font-size: 1rem !important;
    color: #909090;
    font-variant: small-caps;
  }

  tr {
    font-family: "Roboto" !important;
    font-size: 1rem !important;
    color: black;
    height: 40px !important;
  }

  .form-control {
    border-top: none !important;
    border-left: none !important;
    border-right: none !important;
    border-bottom: 1px solid $titleColor !important;
    border-radius: 0;
  }

  .form-control:focus {
    outline: none !important;
  }

  // pagination styles
  button.page-link {
    color: $paginationHover !important;
  }

  .active > .page-link {
    background-color: $paginationActive !important;
    color: white !important;
    border-color: $paginationActive !important;
  }
}
</style>
