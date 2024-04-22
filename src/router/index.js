import { createWebHistory, createRouter } from "vue-router";
import Books from "@/views/Books.vue";
import nxb from "@/views/Nxbs.vue";
import nhanvien from "@/views/nhanvien.vue";
import BookView from "@/views/BookView.vue";
import DangnhapDG from "@/views/Docgia.vue";
const requireAuth = (to, from, next) => {
  // Kiểm tra xem người dùng đã đăng nhập hay chưa
  const loggedInUser = localStorage.getItem('loggedInUser');
  if (!loggedInUser) {
    // Nếu chưa đăng nhập, chuyển hướng đến trang đăng nhập
    next({ name: 'manager' });
  } else {
    // Nếu đã đăng nhập, cho phép truy cập vào route tiếp theo
    next();
  }
};

const routes = [
  {
    path: "/nhanvien/books",
    name: "bookmanager",
    component: Books,
    beforeEnter: requireAuth
  },
  {
    path: "/nhanvien/",
    name: "manager",
    component: nhanvien,

  },
  {
    path: "/dangnhap",
    name: "dangnhap",
    component: DangnhapDG,

  },
  {
    path: "/",
    name: "docgia",
    component: BookView,
  },
  {
    path: "/nhanvien/nhaxuatban",
    name: "nxbmanager",
    component: nxb,
    beforeEnter: requireAuth
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue"),
    beforeEnter: requireAuth
  },
  {
    path: "/nhanvien/books/:id",
    name: "book.edit",
    component: () => import("@/views/BookEdit.vue"),
    props: true, // Truyền các biến trong $route.params vào làm props
    beforeEnter: requireAuth
  },
  {
    path: "/nhanvien/books/add",
    name: "book.add",
    component: () => import("@/views/BookAdd.vue"),
    props: true, // Truyền các biến trong $route.params vào làm props
    beforeEnter: requireAuth
  },
  {
    path: "/nhanvien/nhaxuatban/:id",
    name: "nhaxuatban.edit",
    component: () => import("@/views/NxbEdit.vue"),
    props: true, // Truyền các biến trong $route.params vào làm props
    beforeEnter: requireAuth
  },
  {
    path: "/nhanvien/nhaxuatban/add",
    name: "nhaxuatban.add",
    component: () => import("@/views/NxbAdd.vue"),
    props: true, // Truyền các biến trong $route.params vào làm props
    beforeEnter: requireAuth
  },
  
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
