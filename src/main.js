import { createApp } from "vue";
import "./style.scss";
import router from "./router";
import i18n from "./i18n";
import App from "./App.vue";

const app = createApp(App);

app.use(i18n);
app.use(router);

app.mount("#app");
