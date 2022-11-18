import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue3 } from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUserSecret,
  faMagnifyingGlass,
  faMagnifyingGlassPlus,
  faChevronLeft,
  faChevronRight,
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleArrowRight,
  faArrowRight,
  faInfoCircle,
  faInfo,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(
  faMagnifyingGlassPlus,
  faMagnifyingGlass,
  faUserSecret,
  faChevronLeft,
  faChevronRight,
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleArrowRight,
  faArrowRight,
  faInfoCircle,
  faInfo,
  faLinkedin,
  faGithub,
  faPenToSquare
);
createApp(App)
  .use(store)
  .use(router)
  .use(BootstrapVue3)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
