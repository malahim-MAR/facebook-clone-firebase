import Home from "../Pages/Home";
import Layout from "../Layout";
import VideoFeed from "../Pages/VideoFeed";
import NewsFeed from "../Pages/NewsFeed";
import Profile from "../Pages/Profile"; // ✅ Keep only this import of Profile
import Groups from "../Pages/Groups";
import NewPost from "../Pages/NewPost";
import { createBrowserRouter } from "react-router-dom";

export const routesAfterLogin = createBrowserRouter([
  {
    path: "/",
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
        element: <Home />,
      },
      {
        path: "Signup",
        element: <Home />,
      },
    ],
  },
]);
