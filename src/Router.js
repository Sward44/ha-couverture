import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/homepage/HomePage";
import Certifications from "./pages/homepage/certications/Certifications";
import Blogs from "./pages/homepage/blogs/Blogs";
import Clients from "./pages/homepage/clients/Clients";
import Rejoindre from "./pages/homepage/rejoindre/Rejoindre";
import Localisation from "./pages/homepage/localisation/Localisation";
import Mention from "./pages/homepage/mention/Mention";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/certification",
        element: <Certifications />,
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
