import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/homepage/HomePage";
import Blogs from "./pages/blogs/Blogs";
import Clients from "./pages/clients/Clients";
import Rejoindre from "./pages/rejoindre/Rejoindre";
import Localisation from "./pages/localisation/Localisation";
import Mention from "./pages/mention/Mention";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/clients",
        element: <Clients />,
      },
      {
        path: "/rejoindre",
        element: <Rejoindre />,
      },
      {
        path: "/localisation",
        element: <Localisation />,
      },
      {
        path: "/mention-legale",
        element: <Mention />,
      },
    ],
  },
]);
