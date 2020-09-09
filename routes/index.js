import { manager, order, notfound } from "./modules.js";
const routes = [
  {
    path: "/",
    component: "@/pages/layout",
    routes: [
      {
        path: "/",
        exact: true,
        component: "@/pages/home/index",
      },
      manager,
      order,
      notfound
    ],
  },
  { path: "/login", component: "@/pages/login" },
  {
    path: "/goods",
    component: "@/pages/goods/_layout",
    routes: [
      { path: "/goods/goodsList", component: "@/pages/goods/goodsList" },
      { path: "/goods/:name", component: "@/pages/goods/goodDetail" },
    ],
  },
  {
    path: "/about",
    component: "@/pages/about/index",
    Routes: ["./routes/PrivateRoute.js"],
  },
  notfound,
];
export default routes;
