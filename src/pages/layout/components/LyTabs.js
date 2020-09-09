import React, { Component } from "react";
import { Tabs, Select, Space } from "antd";
import { connect } from "dva";
const { TabPane } = Tabs;
@connect(
  (state) => ({
    tabs: state.lytabs.tabs,
    activeKey: state.lytabs.activeKey,
    loading: state.lytabs.loading, //通过loading命名空间拿到我们加载状态
  }),
  {
    changeTba: (activeKey) => ({
      type: "lytabs/changeTba",
      payload: { key: activeKey },
    }),
    removeTab: (activeKey) => ({
      type: "lytabs/removeTab",
      payload: { key: activeKey },
    }),
  }
)
class LyTabs extends Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: "Tab 1", content: "Content of Tab Pane 1", key: "1" },
      { title: "Tab 2", content: "Content of Tab Pane 2", key: "2" },
    ];
    this.state = {
      activeKey: panes[0].key,
      panes,
    };
  }
  onChange = (activeKey) => {
    this.props.changeTba(activeKey);
  };
  onEdit = (targetKey, action) => {
    if ((action = "remove")) this.props.removeTab(targetKey);
  };
  render() {
    return (
      <div className="ly_tabs">
        <Tabs
          hideAdd
          type="editable-card"
          onChange={this.onChange}
          activeKey={this.props.activeKey}
          onEdit={this.onEdit}
        >
          {this.props.tabs.map((pane) => (
            <TabPane
              tab={pane.title}
              key={pane.key}
              closable={pane.closable}
            ></TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}

export default LyTabs;
