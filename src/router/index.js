import { createWebHistory, createRouter } from "vue-router";
import Books from "@/views/Books.vue";
import nxb from "@/views/Nxbs.vue";
import nhanvien from "@/views/nhanvien.vue";
import BookView from "@/views/BookView.vue";
import DangnhapDG from "@/views/Docgia.vue";
import Dangky from "@/views/DocGiaAdd.vue";
import Home from "@/views/Home.vue";
import Muonsach from "@/views/Muonsach.vue";

import AppHeader from "@/components/AppHeader.vue";
import AppHeader2 from "@/components/AppHeader2.vue";
import AppHeader3 from "@/components/AppHeader3.vue";
import AppHeader4 from "@/components/AppHeader4.vue";
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

const requireReader = (to, from, next) => {
  // Kiểm tra xem người dùng đã đăng nhập hay chưa
  const loggedInReader = localStorage.getItem('loggedInReader');
  if (!loggedInReader) {
    // Nếu chưa đăng nhập, chuyển hướng đến trang đăng nhập
    next({ name: 'dangnhap' });
  } else {
    // Nếu đã đăng nhập, cho phép truy cập vào route tiếp theo
    next();
  }
};

const routes = [
  {
    path: "/nhanvien/books",
    name: "bookmanager",
    components: {
      default: Books,
      header: AppHeader 
    },
    beforeEnter: requireAuth
  },
  {
    path: "/nhanvien/",
    name: "manager",
    components: {
      default: nhanvien,
      header: AppHeader3 
    }

  },
  {
    path: "/dangnhap",
    name: "dangnhap",
    components: {
      default: DangnhapDG,
      header: AppHeader2 
    }

  },
  {
    path: "/docgia",
    name: "docgia",
    components: {
      default: BookView,
      header: AppHeader4 
    },
    beforeEnter: requireReader
  },
  {
    path: "/muonsach",
    name: "muonsach",
    components: {
      default: Muonsach,
      header: AppHeader4 
    },
    beforeEnter: requireReader
  },
  {
    path: "/",
    name: "home",
    components: {
      default: Home,
      header: AppHeader2 
    }
  },
  {
    path: "/dangky",
    name: "dangky",
    components: {
      default: Dangky,
      header: AppHeader2 
    }
  },
  {
    path: "/nhanvien/nhaxuatban",
    name: "nxbmanager",
    components: {
      default: nxb,
      header: AppHeader 
    },
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
    components: {
      default: () => import("@/views/BookEdit.vue"),
      header: AppHeader 
    },
    props: true, // Truyền các biến trong $route.params vào làm props
    beforeEnter: requireAuth
  },
  {
    path: "/nhanvien/books/add",
    name: "book.add",
    components: {
      default: () => import("@/views/BookAdd.vue"),
      header: AppHeader 
    },
    props: true, // Truyền các biến trong $route.params vào làm props
    beforeEnter: requireAuth
  },
  {
    path: "/nhanvien/nhaxuatban/:id",
    name: "nhaxuatban.edit",
    components: {
      default: () => import("@/views/NxbEdit.vue"),
      header: AppHeader 
    },
    props: true, // Truyền các biến trong $route.params vào làm props
    beforeEnter: requireAuth
  },
  {
    path: "/nhanvien/nhaxuatban/add",
    name: "nhaxuatban.add",
    components: {
      default: () => import("@/views/NxbAdd.vue"),
      header: AppHeader 
    },
    props: true, // Truyền các biến trong $route.params vào làm props
    beforeEnter: requireAuth
  },
  
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
