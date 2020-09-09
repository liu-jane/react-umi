import React, { Component } from "react";
import { Layout } from "antd";
const { Content } = Layout;
class LyContent extends Component {
  render() {
    return (
      <Content
        className="site-layout-background ly_content"
        style={{ marginLeft: this.props.collapsed ? "100px" : "220px" }}
      >
        {this.props.children}
      </Content>
    );
  }
}

export default LyContent;
