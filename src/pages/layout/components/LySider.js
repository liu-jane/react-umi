import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
const { SubMenu } = Menu;
const { Sider } = Layout;
import { Link } from "umi";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { connect } from "dva";
@connect(
  (state) => ({
    tabs: state.lytabs.tabs,
    activeKey: state.lytabs.activeKey,
    loading: state.loading, //通过loading命名空间拿到我们加载状态
  }),
  {
    addTab: (submenu, menu) => ({
      type: "lytabs/addTab",
      payload: { submenu, menu },
    }),
  }
)
class LySider extends Component {
  constructor(props) {
    super(props);
    const menus = [
      {
        key: "sub1",
        title: "首页",
        path: "",
        children: [
          {
            key: "menu1",
            title: "首页",
            path: "",
          },
        ],
        icon: <UserOutlined />,
        // icon: "user",
      },
      {
        key: "sub2",
        title: "系统管理",
        path: "manager",
        children: [
          {
            key: "menu2",
            title: "系统配置",
            path: "manager/config",
          },
          {
            key: "menu3",
            title: "运营管理",
            path: "manager/operate",
          },
        ],
        icon: <UserOutlined />,
        // icon: "UserOutlined",
      },
      {
        key: "sub3",
        title: "订单管理",
        path: "order",
        children: [
          {
            key: "menu4",
            title: "已完成订单",
            path: "order/complete",
          },
        ],
        icon: <VideoCameraOutlined />,
        // icon: "VideoCameraOutlined",
      },
    ];
    this.state = {
      menus: menus,
      selectedKeys: [],
      openKeys: ["sub1"],
    };
  }
  levelOne(submenu, menu) {
    this.props.addTab(submenu, menu);
  }
  onOpenChange = (v) => {
    if (v.length === 0) {
      this.setState({ openKeys: ["sub1"] });
    } else {
      this.setState({ openKeys: v });
    }
  };
  changeOpenKeys = (activeKey) => {
    const findSub = (e) => {
      e.children.forEach((m) => {
        if (m.key === activeKey) {
          if (!this.state.openKeys.includes(e.key)) {
            let temp = this.state.openKeys.concat(e.key);
            this.setState({
              openKeys: temp,
            });
          }
        }
      });
    };
    this.state.menus.find(findSub);
  };
  UNSAFE_componentWillReceiveProps(data) {
    this.changeOpenKeys(data.activeKey);
  }
  render() {
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
        className="ly_slider"
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <Menu
          theme="dark"
          mode="inline"
          onOpenChange={this.onOpenChange}
          selectedKeys={[this.props.activeKey]}
          openKeys={this.state.openKeys}
          defaultOpenKeys={["sub1"]}
          defaultSelectedKeys={["menu1"]}
        >
          {this.state.menus.map((submenu) => (
            <SubMenu
            title={submenu.title}
              key={submenu.key}
              icon={submenu.icon}
            >
              {submenu.children.map((menu) => (
                <Menu.Item key={menu.key}>
                  <Link
                    onClick={() => this.levelOne(submenu, menu)}
                    to={"/" + menu.path}
                  >
                    {menu.title}
                  </Link>
                </Menu.Item>
              ))}
            </SubMenu>
          ))}
        </Menu>
      </Sider>
    );
  }
}

export default LySider;
