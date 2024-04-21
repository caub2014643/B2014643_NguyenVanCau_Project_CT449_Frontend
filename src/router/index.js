import { createWebHistory, createRouter } from "vue-router";
import Books from "@/views/Books.vue";
import nxb from "@/views/Nxbs.vue";
const routes = [
  {
    path: "/books",
    name: "bookmanager",
    component: Books,
  },
  {
    path: "/nhaxuatban",
    name: "nxbmanager",
    component: nxb,
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
    path: "/books/add",
    name: "book.add",
    component: () => import("@/views/BookAdd.vue"),
    props: true, // Truyền các biến trong $route.params vào làm props
  },
  {
    path: "/nhaxuatban/:id",
    name: "nhaxuatban.edit",
    component: () => import("@/views/NxbEdit.vue"),
    props: true, // Truyền các biến trong $route.params vào làm props
  },
  {
    path: "/nhaxuatban/add",
    name: "nhaxuatban.add",
    component: () => import("@/views/NxbAdd.vue"),
    props: true, // Truyền các biến trong $route.params vào làm props
  },
  
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
