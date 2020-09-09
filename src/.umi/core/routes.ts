import { ApplyPluginsType } from 'E:/test/react_exercise/react-umi/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": require('@/pages/layout').default,
    "routes": [
      {
        "path": "/",
        "exact": true,
        "component": require('@/pages/home/index').default
      },
      {
        "path": "/manager",
        "component": require('@/pages/manager/index').default,
        "routes": [
          {
            "path": "/manager/config",
            "exact": true,
            "component": require('@/pages/manager/config').default
          },
          {
            "path": "/manager/operate",
            "exact": true,
            "component": require('@/pages/manager/operate').default
          },
          {
            "component": require('@/pages/notfound').default,
            "exact": true
          }
        ]
      },
      {
        "path": "/order",
        "component": require('@/pages/order/index').default,
        "routes": [
          {
            "path": "/order/complete",
            "exact": true,
            "component": require('@/pages/order/complete').default
          },
          {
            "component": require('@/pages/notfound').default,
            "exact": true
          }
        ]
      },
      {
        "component": require('@/pages/notfound').default,
        "exact": true
      }
    ]
  },
  {
    "path": "/login",
    "component": require('@/pages/login').default,
    "exact": true
  },
  {
    "path": "/goods",
    "component": require('@/pages/goods/_layout').default,
    "routes": [
      {
        "path": "/goods/goodsList",
        "component": require('@/pages/goods/goodsList').default,
        "exact": true
      },
      {
        "path": "/goods/:name",
        "component": require('@/pages/goods/goodDetail').default,
        "exact": true
      }
    ]
  },
  {
    "path": "/about",
    "component": require('@/pages/about/index').default,
    "Routes": [
      "./routes/PrivateRoute.js"
    ],
    "exact": true
  },
  {
    "component": require('@/pages/notfound').default,
    "exact": true
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
