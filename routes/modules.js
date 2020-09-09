// 404模块
const notfound = { component: "@/pages/notfound" };
//系统管理模块
const manager = {
  path: "/manager",
  component: "@/pages/manager/index",
  routes: [
    {
      path: "/manager/config",
      exact: true,
      component: "@/pages/manager/config",
    },
    {
      path: "/manager/operate",
      exact: true,
      component: "@/pages/manager/operate",
    },
    notfound
  ],
};
//订单模块
const order = {
  path: "/order",
  component: "@/pages/order/index",
  routes: [
    {
      path: "/order/complete",
      exact: true,
      component: "@/pages/order/complete",
    },
    notfound
  ],
};

export { manager, order, notfound };
