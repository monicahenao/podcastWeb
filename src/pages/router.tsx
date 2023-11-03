import { createBrowserRouter } from "react-router-dom";
import { Home } from "./home";
import { Episodes } from "./episodes";
import { Blog, Contact, PrivacyPolicy, SingleBlog } from ".";
import { SingleEpisodes } from "./singleEpisodes";

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
    element: <PrivacyPolicy />,
  },
  {
    path: "/singleblog",
    element: <SingleBlog />,
  },
  {
    path: "/singleepisodes",
    element: <SingleEpisodes />,
  },
]);
