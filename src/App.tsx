import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";

const App = () => {
  const { count } = useSelector((state: RootState) => state.counter);

  return (
    <div>
      <nav className="flex justify-evenly text-xl text-red-500 font-serif my-5">
        <ul>
          <li>REDux Rockstar</li>
        </ul>
        <ul className="flex gap-2">
          <Link to={"/home"}>home</Link>
          <Link to={"/task"}>task</Link>
          <Link to={"/login"}>login</Link>
          <Link to={"/logout"}>logout</Link>
          <Link to={"/redux"}>redux</Link>
          <Link to={"/about"}>about</Link>
        </ul>
      </nav>

      <hr className="border-l" />

      <div className="flex gap-5 justify-center mt-5 items-center ">
        <button className="border border-green p-3 rounded-lg hover:bg-green-400">
          increment
        </button>
        <div>{count}</div>
        <button className="border border-green p-3 rounded-lg hover:bg-red-400">
          decrement
        </button>
      </div>
    </div>
  );
};

export default App;
