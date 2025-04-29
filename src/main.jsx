import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import VideoFeed from "./Pages/NewsFeed";
import NewsFeed from "./Pages/NewsFeed";
import Profile from "./Pages/Profile";
import Groups from "./Pages/Groups";
import NewPost from "./Pages/NewPost";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "VideoFeed",
        element: <VideoFeed />,
      },
      {
        path: "Groups",
        element: <Groups />,
      },
      {
        path: "NewsFeed",
        element: <NewsFeed />,
      },
      {
        path: "AddNewPost",
        element: <NewPost />,
      },
      {
        path: "Profile",
        element: <Profile />,
      },
      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "Signup",
        element: <Signup />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
