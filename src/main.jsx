import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import { routesBeforeLogin } from "./Components/routerBeforeLogin";
import { routesAfterLogin } from "./Components/routeAfterLogin";
import { useEffect, useState } from "react";

function AppRouter() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser || null);
    });
    return () => unsubscribe();
  }, []);

  if (user === undefined) return <div>Loading...</div>; // Checking the user

  const router = user ? routesAfterLogin : routesBeforeLogin;

  return <RouterProvider router={router} />;
}

createRoot(document.getElementById("root")).render(<AppRouter />);

// import Layout from "./Layout";
// import Home from "./Pages/Home";
// import Login from "./Pages/Login";
// import Signup from "./Pages/Signup";
// import VideoFeed from "./Pages/NewsFeed";
// import NewsFeed from "./Pages/NewsFeed";
// import Profile from "./Pages/Profile";
// import Groups from "./Pages/Groups";
// import NewPost from "./Pages/NewPost";

// const router = createBrowserRouter([
//   {
//     path: "",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "VideoFeed",
//         element: <VideoFeed />,
//       },
//       {
//         path: "Groups",
//         element: <Groups />,
//       },
//       {
//         path: "NewsFeed",
//         element: <NewsFeed />,
//       },
//       {
//         path: "AddNewPost",
//         element: <NewPost />,
//       },
//       {
//         path: "Profile",
//         element: <Profile />,
//       },
//       {
//         path: "Login",
//         element: <Login />,
//       },
//       {
//         path: "Signup",
//         element: <Signup />,
//       },
//     ],
//   },
// ]);
