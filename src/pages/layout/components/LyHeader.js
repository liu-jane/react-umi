import { Layout, Menu } from "antd";
import React, { Component } from "react";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
const { Header } = Layout;
import LyTabs from './LyTabs'
class LyHeader extends Component {
  render() {
    return (
      <Header
        className="site-layout-background ly_header"
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          paddingLeft: this.props.collapsed ? "80px" : "200px",
        }}
      >
        <div
          className="logo"
          style={{ width: this.props.collapsed ? "80px" : "200px" }}
        />
        <div className="trigger ly_collapse" onClick={() => this.props.toggle()}>
          {this.props.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
        <LyTabs/>
      </Header>
    );
  }
}

export default LyHeader;
