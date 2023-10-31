import { createBrowserRouter } from "react-router-dom";
import { Home } from "./home";
import { Episodes } from "./episodes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/episodes",
    element: <Episodes />,
  },
]);
