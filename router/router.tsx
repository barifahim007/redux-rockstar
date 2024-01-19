import { createBrowserRouter } from "react-router-dom";
import App from "../src/App";
import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import NotFound from "../src/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
