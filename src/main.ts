import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import "./style.css";
import "@mdi/font/css/materialdesignicons.css";
import App from "./App.vue";
import { pt_BR } from "./locales/pt_BR.js";
import { en } from "./locales/en.js";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const languages = {
  pt_BR,
  en,
};
export const i18n = createI18n({
  locale: "pt_BR",
  fallbackLocale: "pt_BR",
  messages: languages,
});
const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(i18n).use(vuetify).mount("#app");
