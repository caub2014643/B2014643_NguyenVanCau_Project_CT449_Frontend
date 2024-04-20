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
  {
    path: "/books/:id",
    name: "book.edit",
    component: () => import("@/views/BookEdit.vue"),
    props: true, // Truyền các biến trong $route.params vào làm props
  },
  {
    path: "/books/",
    name: "book.add",
    component: () => import("@/views/BookAdd.vue"),
    props: true, // Truyền các biến trong $route.params vào làm props
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
