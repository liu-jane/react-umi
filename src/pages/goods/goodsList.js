import {Link} from "umi";
export default () => {
  const usersList = [
    { id: 1, name: "tim" },
    { id: 2, name: "jerry" },
  ];
  return (
    <div>
      <h1>Page goodList</h1>
      <ul>
        {usersList.map((item, index) => (
          <li key={index} >
            <Link to={`/goods/${item.name}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
