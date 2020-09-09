import { history } from "umi";
const tabInfo = JSON.parse(localStorage.getItem("tabInfo")) || {
  tabs: [{key: "menu1", title: "首页", path: ""}],
  activeKey: "menu1",
};
export default {
  namespace: "lytabs",
  // 初始状态
  state: tabInfo,
  effects: {
    // 异步操作
  },
  reducers: {
    //添加tabs
    addTab(state, action) {
      let data = "";
      const tab = state.tabs.find((e) => {
        return e.key === action.payload.menu.key;
      });
      if (tab) {
        data = { ...state, activeKey: tab.key };
      } else {
        data = {
          ...state,
          tabs: state.tabs.concat([action.payload.menu]),
          activeKey: action.payload.menu.key,
        };
      }
      localStorage.setItem("tabInfo", JSON.stringify(data));
      return data;
    },
    changeTba(state, action) {
      const activePath = state.tabs.filter((e) => {
        return e.key === action.payload.key;
      });
      // 跳转到指定路由
      history.push("/" + activePath[0].path);
      let data = { ...state, activeKey: action.payload.key };
      localStorage.setItem("tabInfo", JSON.stringify(data));
      return data;
    },
    removeTab(state, action) {
      let dele = state.tabs.splice(
        state.tabs.indexOf(
          state.tabs.find(function (element) {
            return element.key === action.payload.key;
          })
        ),
        1
      );
      let tabs = state.tabs;
      let activeKey = state.activeKey;
      if (tabs.length > 0) {
        if (dele[0].key === activeKey) {
          activeKey = tabs[tabs.length - 1].key;
        }
        const activePath = tabs.filter((e) => {
          return e.key === activeKey;
        });
        // 跳转到指定路由
        history.push("/" + activePath[0].path);
      } else {
        activeKey = "menu1";
        tabs = [{key: "menu1", title: "首页", path: ""}]
        history.push("/");
      }
      localStorage.setItem(
        "tabInfo",
        JSON.stringify({ ...state, tabs: [...tabs], activeKey: activeKey })
      );
      return { ...state, tabs: [...tabs], activeKey: activeKey };
    },
  },
  subscriptions: {},
};
