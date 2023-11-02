import { createBrowserRouter } from "react-router-dom";
import { Home } from "./home";
import { Episodes } from "./episodes";
import { Blog, Contact, SingleBlog } from ".";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/episodes",
    element: <Episodes />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/privacypolicy",
    element: <Contact />,
  },
  {
    path: "/singlblog",
    element: <SingleBlog />,
  },
]);
