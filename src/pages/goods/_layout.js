// import Link from 'umi/link'
// import { Redirect } from "umi";
export default (props) => {
  //判断是否登录成功 50%的成功率
  // if (Math.random() > 0.5) {
  //   return <Redirect to="/login"></Redirect>;
  // }
  return (
    <div>
      <h1 >Page good 父页面</h1>
      <div>{props.children}</div>
    </div>
  );
}