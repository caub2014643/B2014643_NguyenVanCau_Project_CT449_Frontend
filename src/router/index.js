import { createWebHistory, createRouter } from "vue-router";
import Books from "@/views/Books.vue";
const routes = [
  {
    path: "/",
    name: "bookmanager",
    component: Books,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue"),
    },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
