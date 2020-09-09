import { Layout } from "antd";
import LySider from "./components/LySider";
import LyHeader from './components/LyHeader'
import LyContent from './components/LyContent'
import { Router, Route, Redirect, withRouter } from 'dva';
import "./index.less";
export default class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <Layout className="ly_index">
        <LySider collapsed={this.state.collapsed} />
        <Layout className="site-layout">
          <LyHeader {...this.props} collapsed={this.state.collapsed} toggle={this.toggle}/>
          <LyContent {...this.props} collapsed={this.state.collapsed}/>
        </Layout>
      </Layout>
    );
  }
}
