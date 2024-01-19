import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <nav className="flex justify-evenly text-xl text-red-500 font-serif mt-4">
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
      <div className="bg-red-600 shadow-md mt-4">
        <hr className="border-l" />
      </div>
    </div>
  );
};

export default App;
