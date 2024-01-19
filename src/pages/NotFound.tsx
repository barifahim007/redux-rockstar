import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div>
        <h1>page Note Found </h1>
        <button>
          <Link to={"/"}> Back To HOme</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
