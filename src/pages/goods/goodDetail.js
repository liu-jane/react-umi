import { Button } from "antd";
export default (props) => {
  return (
    <div>
      <h1>Page goodDetail</h1>
      <p>欢迎来到{props.match.params.name}的详情页</p>
      <Button type="primary" onClick={()=>props.history.goBack()}>
        返回
      </Button>
    </div>
  );
};
