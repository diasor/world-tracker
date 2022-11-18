import { createRouter, createWebHistory } from "vue-router";
import CountryList from "@/views/CountryList.vue";
import ViewCountry from "@/views/ViewCountry.vue";

const routes = [
  {
    path: "/",
    name: "covid19-tracker",
    component: CountryList,
  },
  {
    path: "/country/:code",
    name: "view-country",
    component: ViewCountry,
  },
  {
    path: "/covid-overview",
    name: "covid-overview",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ViewCOVIDOverview.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
