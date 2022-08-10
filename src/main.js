import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Users from "./components/Users.vue";
import Login from "./components/Login.vue";
import NotFound from "./components/NotFound.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/login" },
    {
      path: "/users",
      component: Users,
      beforeEnter(_, _2, next) {
        if (localStorage.getItem("token")) {
          next();
        } else {
          next("/:notFound(.*)");
        }
      },
    },
    {
      path: "/login",
      component: Login,
      beforeEnter(_, _2, next) {
        localStorage.removeItem("token");
        next();
      },
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});

const app = createApp(App);
app.use(router);

app.mount('#app');