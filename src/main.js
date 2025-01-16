import App from './App.vue'
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import ServerList from "./components/ServerList.vue";
import AddServerForm from "./components/AddServerForm.vue";
import ServerCard from './components/ServerCard.vue';

import "./assets/tailwind.css";

const routes = [
  { path: "/", component: ServerList },
    { path: "/add", component: AddServerForm },
  { path: "/card", component: ServerCard},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).mount("#app");
createApp(App).use(router).mount("#app");
