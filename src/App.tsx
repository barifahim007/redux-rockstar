import { useAppDispatch, useAppSelector } from "../redux/hook";
import { Link } from "react-router-dom";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../redux/counterSlice/counterSlice";

const App = () => {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

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
        <button
          className="border border-green p-3 rounded-lg hover:bg-green-400"
          onClick={() => {
            dispatch(increment());
          }}
        >
          increment
        </button>
        <div>{count}</div>
        <button
          className="border border-green p-3 rounded-lg hover:bg-red-400"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          decrement
        </button>
        <button
          className="border border-green p-3 rounded-lg hover:bg-blue-400"
          onClick={() => {
            dispatch(incrementByAmount(5));
          }}
        >
          incrementByValue
        </button>
      </div>
    </div>
  );
};

export default App;
